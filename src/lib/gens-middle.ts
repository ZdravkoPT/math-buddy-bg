import type { Lang } from "./i18n";
import type { Problem } from "./math-engine";

type Gen = (level: number, lang: Lang) => Problem;
const R = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const mk = (topicId: string, level: number, prompt: string, answer: string, steps: string[]): Problem => ({ topicId, level, prompt, answer, steps });
const tr = (l: Lang) => (bg: string, en: string) => (l === "bg" ? bg : en);
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
const sg = (n: number) => (n < 0 ? `− ${Math.abs(n)}` : `+ ${n}`);
const p = (n: number) => (n < 0 ? `(${n})` : `${n}`);
const dec = (n: number, l: Lang) => String(Math.round(n * 100) / 100).replace(".", l === "bg" ? "," : ".");

export const MIDDLE_GENS: Record<string, Gen> = {
  divisibility: (lv, l) => {
    const T = tr(l);
    const d = [2, 3, 5, 9, 10][R(0, 4)]!;
    const base = R(100, 900 + lv * 200);
    const n = base - (base % d) + d;
    const rules: Record<number, [string, string]> = {
      2: ["последната цифра е четна", "the last digit is even"],
      3: ["сборът от цифрите се дели на 3", "the digit sum is divisible by 3"],
      5: ["последната цифра е 0 или 5", "the last digit is 0 or 5"],
      9: ["сборът от цифрите се дели на 9", "the digit sum is divisible by 9"],
      10: ["последната цифра е 0", "the last digit is 0"],
    };
    return mk("divisibility", lv, T(`Кое е най-малкото число, по-голямо от ${base}, което се дели на ${d}?`, `What is the smallest number greater than ${base} that is divisible by ${d}?`), String(n), [
      T(`Признак за делимост на ${d}: ${rules[d]![0]}.`, `Divisibility by ${d}: ${rules[d]![1]}.`),
      T(`${base} : ${d} дава остатък ${base % d}.`, `${base} : ${d} leaves remainder ${base % d}.`),
      `${base} − ${base % d} + ${d} = ${n}.`,
    ]);
  },

  primes: (lv, l) => {
    const T = tr(l);
    const ps = [2, 3, 5, 7, 11];
    const a = ps[R(0, 2)]!, b = ps[R(1, 4)]!, c = ps[R(0, 3)]!;
    const n = a * b * c;
    const f = [a, b, c].sort((x, y) => x - y);
    return mk("primes", lv, T(`Разложи ${n} на прости множители. Колко е най-големият прост множител?`, `Factor ${n} into primes. What is the largest prime factor?`), String(f[2]), [
      T("Делим последователно на най-малкото просто число, на което се дели.", "Keep dividing by the smallest prime that divides it."),
      `${n} = ${f.join(" · ")}.`,
      T(`Най-големият е ${f[2]}.`, `The largest is ${f[2]}.`),
    ]);
  },

  fracsimplify: (lv, l) => {
    const T = tr(l);
    let a = R(1, 9), b = R(2, 12);
    while (gcd(a, b) !== 1 || a >= b) { a = R(1, 9); b = R(2, 12); }
    const k = R(2, 3 + lv * 2);
    return mk("fracsimplify", lv, T(`Съкрати дробта ${a * k}/${b * k}.`, `Simplify ${a * k}/${b * k}.`), `${a}/${b}`, [
      T(`Търсим НОД(${a * k}, ${b * k}) = ${k}.`, `Find GCD(${a * k}, ${b * k}) = ${k}.`),
      T(`Делим числителя и знаменателя на ${k}: ${a * k} : ${k} = ${a}, ${b * k} : ${k} = ${b}.`, `Divide top and bottom by ${k}: ${a}, ${b}.`),
      `${a}/${b}.`,
    ]);
  },

  fraccompare: (lv, l) => {
    const T = tr(l);
    const b = R(3, 9), d = R(3, 9);
    const a = R(1, b - 1), c = R(1, d - 1);
    if (a * d === c * b) return MIDDLE_GENS["fraccompare"]!(lv, l);
    const big = a * d > c * b ? `${a}/${b}` : `${c}/${d}`;
    return mk("fraccompare", lv, T(`Коя дроб е по-голяма: ${a}/${b} или ${c}/${d}? Напиши я.`, `Which fraction is bigger: ${a}/${b} or ${c}/${d}? Write it.`), big, [
      T(`Привеждаме към общ знаменател ${b * d}.`, `Use the common denominator ${b * d}.`),
      `${a}/${b} = ${a * d}/${b * d};  ${c}/${d} = ${c * b}/${b * d}.`,
      T(`По-голям числител → по-голяма дроб: ${big}.`, `Bigger numerator → bigger fraction: ${big}.`),
    ]);
  },

  numline: (lv, l) => {
    const T = tr(l);
    const a = R(-12, 5), b = R(a + 2, 15);
    return mk("numline", lv, T(`Какво е разстоянието между точките ${a} и ${b} на числовата ос?`, `What is the distance between ${a} and ${b} on the number line?`), String(b - a), [
      T("Разстоянието е |b − a|.", "The distance is |b − a|."),
      `|${b} − ${p(a)}| = |${b - a}| = ${b - a}.`,
    ]);
  },

  absval: (lv, l) => {
    const T = tr(l);
    const a = R(-15, 15), b = R(-15, 15);
    const v = Math.abs(a) - Math.abs(b);
    return mk("absval", lv, T(`Пресметни |${a}| − |${b}|.`, `Compute |${a}| − |${b}|.`), String(v), [
      T("Модулът е разстоянието до 0 — винаги е ≥ 0.", "Absolute value is the distance to 0 — always ≥ 0."),
      `|${a}| = ${Math.abs(a)}, |${b}| = ${Math.abs(b)}.`,
      `${Math.abs(a)} − ${Math.abs(b)} = ${v}.`,
    ]);
  },

  proportion: (lv, l) => {
    const T = tr(l);
    if (Math.random() < 0.5) {
      const n1 = R(2, 6), price = R(2, 8), n2 = R(n1 + 1, 12);
      return mk("proportion", lv, T(`${n1} кг ябълки струват ${n1 * price} лв. Колко струват ${n2} кг?`, `${n1} kg of apples cost ${n1 * price} lv. How much do ${n2} kg cost?`), String(n2 * price), [
        T("Права пропорционалност: повече кг → повече пари.", "Direct proportion: more kg → more money."),
        T(`1 кг: ${n1 * price} : ${n1} = ${price} лв.`, `1 kg: ${n1 * price} : ${n1} = ${price} lv.`),
        `${n2} · ${price} = ${n2 * price}.`,
      ]);
    }
    const w1 = [2, 3, 4, 6][R(0, 3)]!, d1 = 12, w2 = [2, 3, 4, 6, 12].filter((x) => x !== w1)[R(0, 3)]!;
    return mk("proportion", lv, T(`${w1} работници свършват работа за ${d1} дни. За колко дни ще я свършат ${w2} работници?`, `${w1} workers finish a job in ${d1} days. How many days for ${w2} workers?`), String((w1 * d1) / w2), [
      T("Обратна пропорционалност: повече работници → по-малко дни.", "Inverse proportion: more workers → fewer days."),
      T(`Произведението е постоянно: ${w1} · ${d1} = ${w1 * d1} човекодни.`, `The product is constant: ${w1} · ${d1} = ${w1 * d1} worker-days.`),
      `${w1 * d1} : ${w2} = ${(w1 * d1) / w2}.`,
    ]);
  },

  percentapp: (lv, l) => {
    const T = tr(l);
    if (Math.random() < 0.5) {
      const price = R(2, 20) * 10, pc = [10, 20, 25, 30, 50][R(0, 4)]!;
      const res = price * (100 - pc) / 100;
      return mk("percentapp", lv, T(`Яке струва ${price} лв. Намалено е с ${pc}%. Колко струва сега?`, `A jacket costs ${price} lv and is ${pc}% off. What is the new price?`), dec(res, l), [
        T(`Отстъпка: ${pc}% от ${price} = ${price} · ${pc} : 100 = ${price * pc / 100} лв.`, `Discount: ${pc}% of ${price} = ${price * pc / 100} lv.`),
        `${price} − ${price * pc / 100} = ${res}.`,
      ]);
    }
    const s = R(1, 10) * 100, r = [2, 3, 4, 5][R(0, 3)]!;
    return mk("percentapp", lv, T(`Внасяш ${s} лв. в банка при ${r}% годишна лихва. Колко лева ще имаш след 1 година?`, `You deposit ${s} lv at ${r}% yearly interest. How much after 1 year?`), String(s + s * r / 100), [
      T(`Лихва: ${s} · ${r} : 100 = ${s * r / 100} лв.`, `Interest: ${s} · ${r} : 100 = ${s * r / 100} lv.`),
      `${s} + ${s * r / 100} = ${s + s * r / 100}.`,
    ]);
  },

  statmean: (lv, l) => {
    const T = tr(l);
    const n = R(4, 6);
    const arr = Array.from({ length: n }, () => R(2, 6));
    const fix = (n * 5) - arr.reduce((a, b) => a + b, 0);
    const avg = Math.round((arr.reduce((a, b) => a + b, 0) / n) * 100) / 100;
    void fix;
    return mk("statmean", lv, T(`Оценките на ученик са ${arr.join(", ")}. Колко е средният успех? (до 2 знака)`, `A student's grades are ${arr.join(", ")}. What is the average? (2 decimals)`), dec(avg, l), [
      T("Средно аритметично = сбор : брой.", "Mean = sum : count."),
      `${arr.join(" + ")} = ${arr.reduce((a, b) => a + b, 0)}.`,
      `${arr.reduce((a, b) => a + b, 0)} : ${n} ≈ ${dec(avg, l)}.`,
    ]);
  },

  polyadd: (lv, l) => {
    const T = tr(l);
    const a = R(1, 5), b = R(-6, 6), c = R(1, 5), d = R(-6, 6);
    return mk("polyadd", lv, T(`(${a}x² ${sg(b)}x) + (${c}x² ${sg(d)}x) = Ax² + Bx. Намери A + B.`, `(${a}x² ${sg(b)}x) + (${c}x² ${sg(d)}x) = Ax² + Bx. Find A + B.`), String(a + c + b + d), [
      T("Събираме подобните едночлени.", "Add like terms."),
      `x²: ${a} + ${c} = ${a + c};  x: ${b} ${sg(d)} = ${b + d}.`,
      `A + B = ${a + c} ${sg(b + d)} = ${a + c + b + d}.`,
    ]);
  },

  polymul: (lv, l) => {
    const T = tr(l);
    const a = R(-6, 6) || 1, b = R(-6, 6) || 2;
    return mk("polymul", lv, T(`(x ${sg(a)})(x ${sg(b)}) = x² + Bx + C. Намери C.`, `(x ${sg(a)})(x ${sg(b)}) = x² + Bx + C. Find C.`), String(a * b), [
      T("Умножаваме всеки член по всеки.", "Multiply each term by each term."),
      `x·x = x²;  x·${p(b)} + ${p(a)}·x = ${a + b}x;  ${p(a)}·${p(b)} = ${a * b}.`,
      `x² ${sg(a + b)}x ${sg(a * b)} ⇒ C = ${a * b}.`,
    ]);
  },

  parallel: (lv, l) => {
    const T = tr(l);
    const a = R(35, 145);
    if (Math.random() < 0.5) {
      return mk("parallel", lv, T(`Две успоредни прави са пресечени от трета. Единият ъгъл е ${a}°. Колко е съответният му ъгъл?`, `Two parallel lines are cut by a transversal. One angle is ${a}°. Find its corresponding angle.`), String(a), [
        T("Съответните ъгли при успоредни прави са равни.", "Corresponding angles on parallel lines are equal."),
        `${a}°.`,
      ]);
    }
    return mk("parallel", lv, T(`Две успоредни прави са пресечени от трета. Единият ъгъл е ${a}°. Колко е прилежащият му (едностранен) ъгъл?`, `Two parallel lines cut by a transversal. One angle is ${a}°. Find the co-interior angle.`), String(180 - a), [
      T("Прилежащите (едностранни) ъгли имат сбор 180°.", "Co-interior angles add up to 180°."),
      `180° − ${a}° = ${180 - a}°.`,
    ]);
  },

  congruent: (lv, l) => {
    const T = tr(l);
    const a = R(4, 12), b = R(4, 12), g = R(30, 120);
    return mk("congruent", lv, T(`△ABC ≅ △MNP (по признак II: страна, ъгъл, страна). AB = ${a}, BC = ${b}, ∠B = ${g}°. Колко е NP?`, `△ABC ≅ △MNP (SAS). AB = ${a}, BC = ${b}, ∠B = ${g}°. Find NP.`), String(b), [
      T("При еднакви триъгълници съответните елементи са равни.", "In congruent triangles corresponding parts are equal."),
      T("A ↔ M, B ↔ N, C ↔ P, затова NP съответства на BC.", "A ↔ M, B ↔ N, C ↔ P, so NP corresponds to BC."),
      `NP = BC = ${b}.`,
    ]);
  },

  sqroot: (lv, l) => {
    const T = tr(l);
    const k = R(2, 6 + lv), m = [2, 3, 5][R(0, 2)]!;
    return mk("sqroot", lv, T(`Изнеси множител пред корена: √${k * k * m} = a√${m}. Намери a.`, `Simplify √${k * k * m} = a√${m}. Find a.`), String(k), [
      T(`Разлагаме: ${k * k * m} = ${k * k} · ${m}.`, `Split: ${k * k * m} = ${k * k} · ${m}.`),
      `√(${k * k} · ${m}) = √${k * k} · √${m} = ${k}√${m}.`,
    ]);
  },

  rationalize: (lv, l) => {
    const T = tr(l);
    const m = [2, 3, 5, 6, 7][R(0, 4)]!, a = m * R(1, 4);
    return mk("rationalize", lv, T(`Рационализирай ${a}/√${m} = k√${m}. Намери k.`, `Rationalise ${a}/√${m} = k√${m}. Find k.`), String(a / m), [
      T(`Умножаваме числителя и знаменателя по √${m}.`, `Multiply top and bottom by √${m}.`),
      `${a}√${m} / (√${m}·√${m}) = ${a}√${m} / ${m}.`,
      `${a} : ${m} = ${a / m} ⇒ ${a / m}√${m}.`,
    ]);
  },

  algfrac: (lv, l) => {
    const T = tr(l);
    const a = R(1, 6 + lv), x = R(-4, 6);
    if (x === -a || x === a) return MIDDLE_GENS["algfrac"]!(lv, l);
    return mk("algfrac", lv, T(`Опрости (x² − ${a * a})/(x − ${a}) и пресметни при x = ${x}.`, `Simplify (x² − ${a * a})/(x − ${a}) and evaluate at x = ${x}.`), String(x + a), [
      T(`Числителят е разлика на квадрати: x² − ${a * a} = (x − ${a})(x + ${a}).`, `The numerator is a difference of squares: (x − ${a})(x + ${a}).`),
      T(`Съкращаваме (x − ${a}) (при x ≠ ${a}): остава x + ${a}.`, `Cancel (x − ${a}) (x ≠ ${a}): x + ${a} remains.`),
      `${p(x)} + ${a} = ${x + a}.`,
    ]);
  },

  midline: (lv, l) => {
    const T = tr(l);
    if (Math.random() < 0.5) {
      const c = R(3, 12 + lv) * 2;
      return mk("midline", lv, T(`В △ABC отсечката MN свързва средите на AC и BC. AB = ${c} см. Колко е MN?`, `In △ABC, MN joins the midpoints of AC and BC. AB = ${c} cm. Find MN.`), String(c / 2), [
        T("Средната отсечка в триъгълник е успоредна на третата страна и равна на половината от нея.", "A triangle midsegment is parallel to the third side and half its length."),
        `MN = ${c} : 2 = ${c / 2} см.`,
      ]);
    }
    const a = R(8, 16), b = R(2, a - 2) ;
    const s = a + b;
    return mk("midline", lv, T(`Трапец има основи ${a} см и ${b} см. Колко е средната му основа? (до 1 знак)`, `A trapezoid has bases ${a} cm and ${b} cm. Find its midsegment.`), dec(s / 2, l), [
      T("Средната основа на трапец = (a + b) : 2.", "Trapezoid midsegment = (a + b) : 2."),
      `(${a} + ${b}) : 2 = ${dec(s / 2, l)} см.`,
    ]);
  },

  inscribed: (lv, l) => {
    const T = tr(l);
    const tri: [number, number, number][] = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]];
    const [a, b, c] = tri[R(0, tri.length - 1)]!;
    if (Math.random() < 0.5) {
      return mk("inscribed", lv, T(`Правоъгълен триъгълник има катети ${a} и ${b} и хипотенуза ${c}. Колко е радиусът на описаната окръжност?`, `A right triangle has legs ${a}, ${b} and hypotenuse ${c}. Find the circumradius.`), dec(c / 2, l), [
        T("При правоъгълен триъгълник центърът на описаната окръжност е средата на хипотенузата.", "For a right triangle the circumcentre is the midpoint of the hypotenuse."),
        `R = c : 2 = ${c} : 2 = ${dec(c / 2, l)}.`,
      ]);
    }
    const r = (a + b - c) / 2;
    return mk("inscribed", lv, T(`Правоъгълен триъгълник има катети ${a} и ${b} и хипотенуза ${c}. Колко е радиусът на вписаната окръжност?`, `A right triangle has legs ${a}, ${b}, hypotenuse ${c}. Find the inradius.`), String(r), [
      T("За правоъгълен триъгълник r = (a + b − c) : 2.", "For a right triangle r = (a + b − c) : 2."),
      `r = (${a} + ${b} − ${c}) : 2 = ${a + b - c} : 2 = ${r}.`,
    ]);
  },
};

export const MIDDLE_LABELS: Record<string, { bg: string; en: string }> = {
  divisibility: { bg: "Признаци за делимост", en: "Divisibility rules" },
  primes: { bg: "Прости числа и разлагане", en: "Primes and factorisation" },
  fracsimplify: { bg: "Съкращаване на дроби", en: "Simplifying fractions" },
  fraccompare: { bg: "Сравняване на дроби", en: "Comparing fractions" },
  numline: { bg: "Числова ос", en: "Number line" },
  absval: { bg: "Модул (абсолютна стойност)", en: "Absolute value" },
  proportion: { bg: "Права и обратна пропорционалност", en: "Direct and inverse proportion" },
  percentapp: { bg: "Проценти: отстъпка и лихва", en: "Percent: discount and interest" },
  statmean: { bg: "Статистика: средно аритметично", en: "Statistics: the mean" },
  polyadd: { bg: "Събиране на многочлени", en: "Adding polynomials" },
  polymul: { bg: "Умножение на многочлени", en: "Multiplying polynomials" },
  parallel: { bg: "Успоредни прави и ъгли", en: "Parallel lines and angles" },
  congruent: { bg: "Еднакви триъгълници", en: "Congruent triangles" },
  sqroot: { bg: "Квадратен корен", en: "Square roots" },
  rationalize: { bg: "Рационализиране", en: "Rationalising" },
  algfrac: { bg: "Дробни изрази", en: "Algebraic fractions" },
  midline: { bg: "Средна отсечка", en: "Midsegments" },
  inscribed: { bg: "Вписана и описана окръжност", en: "Inscribed and circumscribed circles" },
};
