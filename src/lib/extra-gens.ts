import type { Lang } from "./i18n";
import type { Problem } from "./math-engine";

type Gen = (level: number, lang: Lang) => Problem;
const R = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const sg = (n: number) => (n < 0 ? `− ${Math.abs(n)}` : `+ ${n}`);
const p = (n: number) => (n < 0 ? `(${n})` : `${n}`);
const mk = (topicId: string, level: number, prompt: string, answer: string, steps: string[]): Problem => ({
  topicId,
  level,
  prompt,
  answer,
  steps,
});

export const EXTRA_GENS: Record<string, Gen> = {
  orderops: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const a = R(2, 10 + lv * 4), b = R(2, 5 + lv), c = R(2, 9), d = R(1, 9);
    const res = a + b * c - d;
    return mk("orderops", lv, `${a} + ${b} · ${c} − ${d} = ?`, String(res), [
      T("Първо умножението, после събирането и изваждането отляво надясно.", "Multiplication first, then + and − from left to right."),
      `${b} · ${c} = ${b * c}.`,
      `${a} + ${b * c} = ${a + b * c}.`,
      `${a + b * c} − ${d} = ${res}.`,
    ]);
  },

  exprvalue: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const a = R(1, 2 + lv), b = R(-6, 6), c = R(-9, 9), x = R(-3, 4);
    const v = a * x * x + b * x + c;
    return mk("exprvalue", lv, T(`Намери стойността на ${a}x² ${sg(b)}x ${sg(c)} при x = ${x}.`, `Evaluate ${a}x² ${sg(b)}x ${sg(c)} for x = ${x}.`), String(v), [
      T(`Заместваме x с ${p(x)}: ${a}·${p(x)}² ${sg(b)}·${p(x)} ${sg(c)}.`, `Substitute x = ${p(x)}: ${a}·${p(x)}² ${sg(b)}·${p(x)} ${sg(c)}.`),
      T(`Първо степента: ${p(x)}² = ${x * x}, значи ${a}·${x * x} = ${a * x * x}.`, `Power first: ${p(x)}² = ${x * x}, so ${a}·${x * x} = ${a * x * x}.`),
      T(`После произведението: ${b}·${p(x)} = ${b * x}.`, `Then the product: ${b}·${p(x)} = ${b * x}.`),
      `${a * x * x} ${sg(b * x)} ${sg(c)} = ${v}.`,
    ]);
  },

  monomials: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const a = R(2, 5 + lv), b = R(1, 9), c = R(1, 4 + lv);
    const res = a + b - c;
    return mk("monomials", lv, T(`Опрости ${a}x + ${b}x − ${c}x и запиши коефициента пред x.`, `Simplify ${a}x + ${b}x − ${c}x and write the coefficient of x.`), String(res), [
      T("Едночлените са подобни (еднаква буквена част x), затова събираме коефициентите.", "The terms are like terms (same letter part x), so we add the coefficients."),
      `${a} + ${b} − ${c} = ${res}.`,
      T(`Отговор: ${res}x, коефициентът е ${res}.`, `Answer: ${res}x, the coefficient is ${res}.`),
    ]);
  },

  identities: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const kind = R(0, 2);
    const base = R(2, 9) * 10, k = R(1, 3);
    if (kind === 2) {
      const res = (base + k) * (base - k);
      return mk("identities", lv, T(`Пресметни удобно: ${base + k} · ${base - k}`, `Compute smartly: ${base + k} · ${base - k}`), String(res), [
        T("Използваме разлика на квадрати: (a + b)(a − b) = a² − b².", "Use the difference of squares: (a + b)(a − b) = a² − b²."),
        `a = ${base}, b = ${k}.`,
        `${base}² − ${k}² = ${base * base} − ${k * k} = ${res}.`,
      ]);
    }
    const n = kind === 0 ? base + k : base - k;
    const s = kind === 0 ? "+" : "−";
    return mk("identities", lv, T(`Пресметни удобно: ${n}²`, `Compute smartly: ${n}²`), String(n * n), [
      T(`Записваме ${n} = ${base} ${s} ${k} и ползваме (a ${s} b)² = a² ${s} 2ab + b².`, `Write ${n} = ${base} ${s} ${k} and use (a ${s} b)² = a² ${s} 2ab + b².`),
      `${base}² = ${base * base}, 2·${base}·${k} = ${2 * base * k}, ${k}² = ${k * k}.`,
      `${base * base} ${s} ${2 * base * k} + ${k * k} = ${n * n}.`,
    ]);
  },

  factoring: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const a = R(2, 5 + lv), b = R(2, 9);
    return mk("factoring", lv, T(`x² ${sg(2 * a)}x + ${a * a} = (x + k)². Намери k.`, `x² ${sg(2 * a)}x + ${a * a} = (x + k)². Find k.`), String(a), [
      T("Сравняваме с (x + k)² = x² + 2kx + k².", "Compare with (x + k)² = x² + 2kx + k²."),
      T(`2k = ${2 * a} ⇒ k = ${a}.`, `2k = ${2 * a} ⇒ k = ${a}.`),
      T(`Проверка: k² = ${a * a} ✓.`, `Check: k² = ${a * a} ✓.`),
      T(`x² + ${2 * a}x + ${a * a} = (x + ${a})².`, `x² + ${2 * a}x + ${a * a} = (x + ${a})².`),
    ]);
  },

  inequality: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const a = R(2, 3 + lv), x0 = R(-3, 8), b = R(-9, 9);
    const c = a * x0 + b;
    return mk("inequality", lv, T(`Реши ${a}x ${sg(b)} < ${c}. Кое е най-голямото цяло x, което е решение?`, `Solve ${a}x ${sg(b)} < ${c}. What is the largest integer solution?`), String(x0 - 1), [
      T(`Пренасяме ${b} надясно със сменен знак: ${a}x < ${c} ${sg(-b)} = ${a * x0}.`, `Move ${b} to the right with opposite sign: ${a}x < ${c} ${sg(-b)} = ${a * x0}.`),
      T(`Делим на ${a} > 0, знакът не се сменя: x < ${x0}.`, `Divide by ${a} > 0, the sign stays: x < ${x0}.`),
      T(`x < ${x0} не включва ${x0}, затова най-голямото цяло е ${x0 - 1}.`, `x < ${x0} excludes ${x0}, so the largest integer is ${x0 - 1}.`),
    ]);
  },

  abseq: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const a = R(-5, 6), b = R(1, 4 + lv);
    return mk("abseq", lv, T(`|x ${sg(-a)}| = ${b}. Намери по-големия корен.`, `|x ${sg(-a)}| = ${b}. Find the larger root.`), String(a + b), [
      T("|A| = b, b > 0 ⇒ A = b или A = −b.", "|A| = b, b > 0 ⇒ A = b or A = −b."),
      `x ${sg(-a)} = ${b} ⇒ x = ${a + b}.`,
      `x ${sg(-a)} = −${b} ⇒ x = ${a - b}.`,
      T(`По-големият корен е ${a + b}.`, `The larger root is ${a + b}.`),
    ]);
  },

  linfunc: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const k = R(1, 2 + lv) * (Math.random() < 0.5 ? -1 : 1), x0 = R(-5, 6);
    const b = -k * x0;
    return mk("linfunc", lv, T(`Намери нулата на функцията y = ${k}x ${sg(b)} (къде графиката пресича Ox).`, `Find the zero of y = ${k}x ${sg(b)} (where the graph meets the x-axis).`), String(x0), [
      T("В нулата y = 0.", "At the zero y = 0."),
      `${k}x ${sg(b)} = 0 ⇒ ${k}x = ${-b}.`,
      `x = ${-b} : ${p(k)} = ${x0}.`,
    ]);
  },

  motion: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const v1 = R(4, 8) * 10, v2 = R(3, 7) * 10, t = R(2, 2 + lv);
    const s = (v1 + v2) * t;
    return mk("motion", lv, T(`Две коли тръгват една срещу друга от градове на ${s} км със скорости ${v1} км/ч и ${v2} км/ч. След колко часа ще се срещнат?`, `Two cars start towards each other from towns ${s} km apart at ${v1} km/h and ${v2} km/h. After how many hours do they meet?`), String(t), [
      T("При движение една срещу друга скоростите се събират (скорост на сближаване).", "Moving towards each other, the speeds add up (closing speed)."),
      `${v1} + ${v2} = ${v1 + v2} ${T("км/ч", "km/h")}.`,
      `t = s : v = ${s} : ${v1 + v2} = ${t} ${T("ч", "h")}.`,
    ]);
  },

  work: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const pairs: [number, number, number][] = [[3, 6, 2], [4, 12, 3], [6, 12, 4], [10, 15, 6], [12, 24, 8], [20, 30, 12], [6, 3, 2]];
    const [a, b, t] = pairs[R(0, pairs.length - 1)] as [number, number, number];
    return mk("work", lv, T(`Работник А свършва работа за ${a} дни, а Б — за ${b} дни. За колко дни ще я свършат заедно?`, `Worker A finishes a job in ${a} days, B in ${b} days. How many days together?`), String(t), [
      T(`За 1 ден А свършва 1/${a}, а Б — 1/${b} от работата.`, `In 1 day A does 1/${a}, B does 1/${b} of the job.`),
      T(`Заедно за 1 ден: 1/${a} + 1/${b} = 1/${t}.`, `Together per day: 1/${a} + 1/${b} = 1/${t}.`),
      T(`Цялата работа (1) ще отнеме ${t} дни.`, `The whole job (1) takes ${t} days.`),
    ]);
  },

  vectors: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const trip: [number, number, number][] = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]];
    const [x, y, r] = trip[R(0, trip.length - 1)] as [number, number, number];
    const ax = R(-5, 5), ay = R(-5, 5);
    const bx = ax + x * (Math.random() < 0.5 ? -1 : 1), by = ay + y;
    return mk("vectors", lv, T(`A(${ax}; ${ay}), B(${bx}; ${by}). Намери дължината на вектора AB.`, `A(${ax}; ${ay}), B(${bx}; ${by}). Find the length of vector AB.`), String(r), [
      T("Координати на AB = (x_B − x_A; y_B − y_A).", "AB = (x_B − x_A; y_B − y_A)."),
      `AB = (${bx - ax}; ${by - ay}).`,
      `|AB| = √(${p(bx - ax)}² + ${by - ay}²) = √${r * r} = ${r}.`,
    ]);
  },
};

export const EXTRA_LABELS: Record<string, { bg: string; en: string }> = {
  orderops: { bg: "Ред на действията", en: "Order of operations" },
  exprvalue: { bg: "Стойност на израз", en: "Evaluating expressions" },
  monomials: { bg: "Едночлени и подобни членове", en: "Like terms" },
  identities: { bg: "Формули за съкратено умножение", en: "Algebraic identities" },
  factoring: { bg: "Разлагане на множители", en: "Factoring" },
  inequality: { bg: "Линейни неравенства", en: "Linear inequalities" },
  abseq: { bg: "Уравнения с модул", en: "Absolute value equations" },
  linfunc: { bg: "Линейна функция", en: "Linear function" },
  motion: { bg: "Задачи за движение", en: "Motion problems" },
  work: { bg: "Задачи за съвместна работа", en: "Work problems" },
  vectors: { bg: "Вектори", en: "Vectors" },
};
