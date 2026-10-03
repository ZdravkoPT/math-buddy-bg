import type { Lang } from "./i18n";
import { EXTRA_GENS, EXTRA_LABELS } from "./extra-gens";

export type Problem = {
  topicId: string;
  level: number;
  prompt: string;
  answer: string;
  /** Full worked solution, one line per step. Always present. */
  steps: string[];
  unitHint?: string;
};

const R = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)] as T;
const gcd = (a: number, b: number): number => (b ? gcd(b, Math.abs(a % b)) : Math.abs(a));
const num = (n: number) => (Number.isInteger(n) ? String(n) : String(Math.round(n * 1000) / 1000));

function frac(n: number, d: number) {
  const g = gcd(n, d) || 1;
  return `${n / g}/${d / g}`;
}

type Gen = (level: number, lang: Lang) => Problem;

const make = (topicId: string, level: number, prompt: string, answer: string, steps: string[]): Problem => ({
  topicId,
  level,
  prompt,
  answer,
  steps,
});

/* ------------------------------------------------------------------ */
/* Generators — each returns a full step-by-step solution              */
/* ------------------------------------------------------------------ */

const gens: Record<string, Gen> = {
  addsub20: (lv, l) => {
    const max = 10 + lv * 2;
    const a = R(2, max);
    const b = R(1, Math.min(a, max));
    const plus = Math.random() < 0.5;
    if (plus) {
      const ones = 10 - (a % 10);
      return make("addsub20", lv, `${a} + ${b} = ?`, num(a + b), [
        l === "bg" ? `Допълваме ${a} до кръгло число: ${a} + ${ones} = ${a + ones}.` : `Fill ${a} up to a round ten: ${a} + ${ones} = ${a + ones}.`,
        l === "bg" ? `Остава да добавим ${b} − ${ones} = ${b - ones}.` : `We still add ${b} − ${ones} = ${b - ones}.`,
        l === "bg" ? `Резултат: ${a + b}.` : `Result: ${a + b}.`,
      ]);
    }
    return make("addsub20", lv, `${a} − ${b} = ?`, num(a - b), [
      l === "bg" ? `Тръгваме от ${a} и махаме ${b}.` : `Start at ${a} and take away ${b}.`,
      l === "bg" ? `${a} − ${b} = ${a - b}.` : `${a} − ${b} = ${a - b}.`,
    ]);
  },

  addsub100: (lv, l) => {
    const a = R(20, 40 + lv * 12);
    const b = R(10, 30 + lv * 10);
    const plus = Math.random() < 0.5;
    const ta = Math.floor(a / 10) * 10;
    const tb = Math.floor(b / 10) * 10;
    if (plus) {
      return make("addsub100", lv, `${a} + ${b} = ?`, num(a + b), [
        l === "bg" ? `Събираме десетиците: ${ta} + ${tb} = ${ta + tb}.` : `Add the tens: ${ta} + ${tb} = ${ta + tb}.`,
        l === "bg" ? `Събираме единиците: ${a - ta} + ${b - tb} = ${a - ta + (b - tb)}.` : `Add the units: ${a - ta} + ${b - tb} = ${a - ta + (b - tb)}.`,
        l === "bg" ? `Сумата е ${ta + tb} + ${a - ta + (b - tb)} = ${a + b}.` : `Sum: ${ta + tb} + ${a - ta + (b - tb)} = ${a + b}.`,
      ]);
    }
    return make("addsub100", lv, `${a + b} − ${b} = ?`, num(a), [
      l === "bg" ? `Изваждаме десетиците: ${a + b} − ${tb} = ${a + b - tb}.` : `Subtract the tens: ${a + b} − ${tb} = ${a + b - tb}.`,
      l === "bg" ? `Изваждаме единиците: ${a + b - tb} − ${b - tb} = ${a}.` : `Subtract the units: ${a + b - tb} − ${b - tb} = ${a}.`,
    ]);
  },

  multable: (lv, l) => {
    const a = R(2, 5 + lv);
    const b = R(2, 9);
    return make("multable", lv, `${a} · ${b} = ?`, num(a * b), [
      l === "bg" ? `${a} · ${b} значи ${b} пъти по ${a}.` : `${a} · ${b} means ${a} taken ${b} times.`,
      l === "bg" ? `${a} · ${b - 1} = ${a * (b - 1)}, добавяме още ${a}.` : `${a} · ${b - 1} = ${a * (b - 1)}, then add one more ${a}.`,
      l === "bg" ? `Резултат: ${a * b}.` : `Result: ${a * b}.`,
    ]);
  },

  divide: (lv, l) => {
    const b = R(2, 4 + lv);
    const q = R(2, 6 + lv);
    const a = b * q;
    return make("divide", lv, `${a} : ${b} = ?`, num(q), [
      l === "bg" ? `Питаме: колко пъти ${b} се съдържа в ${a}?` : `Ask: how many times does ${b} fit into ${a}?`,
      l === "bg" ? `${b} · ${q} = ${a}, значи частното е ${q}.` : `${b} · ${q} = ${a}, so the quotient is ${q}.`,
    ]);
  },

  mulcolumn: (lv, l) => {
    const a = R(12, 20 + lv * 15);
    const b = R(3, 4 + lv);
    const t = Math.floor(a / 10) * 10;
    return make("mulcolumn", lv, `${a} · ${b} = ?`, num(a * b), [
      l === "bg" ? `Разбиваме ${a} = ${t} + ${a - t}.` : `Split ${a} = ${t} + ${a - t}.`,
      l === "bg" ? `${t} · ${b} = ${t * b}.` : `${t} · ${b} = ${t * b}.`,
      l === "bg" ? `${a - t} · ${b} = ${(a - t) * b}.` : `${a - t} · ${b} = ${(a - t) * b}.`,
      l === "bg" ? `Събираме: ${t * b} + ${(a - t) * b} = ${a * b}.` : `Add: ${t * b} + ${(a - t) * b} = ${a * b}.`,
    ]);
  },

  wordsimple: (lv, l) => {
    const a = R(3, 6 + lv * 2);
    const b = R(2, 5 + lv);
    const kind = pick(["buy", "share"]);
    if (kind === "buy") {
      return make("wordsimple", lv, l === "bg" ? `Един тетрадка струва ${b} лв. Колко струват ${a} тетрадки?` : `One notebook costs ${b} BGN. How much do ${a} notebooks cost?`, num(a * b), [
        l === "bg" ? `Цената за ${a} броя е ${a} · ${b}.` : `The price for ${a} items is ${a} · ${b}.`,
        l === "bg" ? `${a} · ${b} = ${a * b} лв.` : `${a} · ${b} = ${a * b} BGN.`,
      ]);
    }
    const total = a * b;
    return make("wordsimple", lv, l === "bg" ? `${total} ябълки се разделят на ${b} деца поравно. По колко получава всяко?` : `${total} apples are shared equally between ${b} children. How many does each get?`, num(a), [
      l === "bg" ? `Поравно значи деление: ${total} : ${b}.` : `Equally means division: ${total} : ${b}.`,
      l === "bg" ? `${total} : ${b} = ${a} ябълки.` : `${total} : ${b} = ${a} apples.`,
    ]);
  },

  fracpart: (lv, l) => {
    const d = pick([2, 3, 4, 5]);
    const n = R(1, d - 1);
    const whole = d * R(2, 3 + lv);
    return make("fracpart", lv, l === "bg" ? `Колко е ${n}/${d} от ${whole}?` : `What is ${n}/${d} of ${whole}?`, num((whole / d) * n), [
      l === "bg" ? `Делим на ${d}: ${whole} : ${d} = ${whole / d}.` : `Divide by ${d}: ${whole} : ${d} = ${whole / d}.`,
      l === "bg" ? `Умножаваме по ${n}: ${whole / d} · ${n} = ${(whole / d) * n}.` : `Multiply by ${n}: ${whole / d} · ${n} = ${(whole / d) * n}.`,
    ]);
  },

  fracadd: (lv, l) => {
    const d1 = pick([2, 3, 4, 5, 6]);
    const d2 = pick([2, 3, 4, 6, 8]);
    const n1 = R(1, d1 - 1);
    const n2 = R(1, d2 - 1);
    const d = (d1 * d2) / gcd(d1, d2);
    const n = n1 * (d / d1) + n2 * (d / d2);
    return make("fracadd", lv, `${n1}/${d1} + ${n2}/${d2} = ?`, frac(n, d), [
      l === "bg" ? `Общ знаменател: НОК(${d1}, ${d2}) = ${d}.` : `Common denominator: LCM(${d1}, ${d2}) = ${d}.`,
      l === "bg" ? `${n1}/${d1} = ${n1 * (d / d1)}/${d} и ${n2}/${d2} = ${n2 * (d / d2)}/${d}.` : `${n1}/${d1} = ${n1 * (d / d1)}/${d} and ${n2}/${d2} = ${n2 * (d / d2)}/${d}.`,
      l === "bg" ? `Събираме числителите: ${n}/${d}.` : `Add the numerators: ${n}/${d}.`,
      l === "bg" ? `Съкратено: ${frac(n, d)}.` : `Simplified: ${frac(n, d)}.`,
    ]);
  },

  fracmul: (lv, l) => {
    const n1 = R(1, 5);
    const d1 = R(2, 7);
    const n2 = R(1, 5);
    const d2 = R(2, 7);
    return make("fracmul", lv, `${n1}/${d1} · ${n2}/${d2} = ?`, frac(n1 * n2, d1 * d2), [
      l === "bg" ? `Умножаваме числител по числител: ${n1} · ${n2} = ${n1 * n2}.` : `Multiply numerators: ${n1} · ${n2} = ${n1 * n2}.`,
      l === "bg" ? `И знаменател по знаменател: ${d1} · ${d2} = ${d1 * d2}.` : `And denominators: ${d1} · ${d2} = ${d1 * d2}.`,
      l === "bg" ? `Съкращаваме: ${frac(n1 * n2, d1 * d2)}.` : `Simplify: ${frac(n1 * n2, d1 * d2)}.`,
    ]);
  },

  decimals: (lv, l) => {
    const a = R(11, 99) / 10;
    const b = R(11, 99) / 10;
    const mul = lv >= 3 && Math.random() < 0.5;
    if (mul) {
      const prod = Math.round(a * b * 100) / 100;
      return make("decimals", lv, `${a} · ${b} = ?`, num(prod), [
        l === "bg" ? `Умножаваме без запетая: ${a * 10} · ${b * 10} = ${a * 10 * (b * 10)}.` : `Multiply without the point: ${a * 10} · ${b * 10} = ${a * 10 * (b * 10)}.`,
        l === "bg" ? `Има 2 цифри след запетаята, затова делим на 100.` : `There are 2 decimal digits, so divide by 100.`,
        l === "bg" ? `Резултат: ${num(prod)}.` : `Result: ${num(prod)}.`,
      ]);
    }
    const sum = Math.round((a + b) * 10) / 10;
    return make("decimals", lv, `${a} + ${b} = ?`, num(sum), [
      l === "bg" ? `Подравняваме запетаите и събираме целите части: ${Math.floor(a)} + ${Math.floor(b)}.` : `Align the decimal points and add the whole parts: ${Math.floor(a)} + ${Math.floor(b)}.`,
      l === "bg" ? `Събираме десетите: ${Math.round((a % 1) * 10)}/10 + ${Math.round((b % 1) * 10)}/10.` : `Add the tenths: ${Math.round((a % 1) * 10)}/10 + ${Math.round((b % 1) * 10)}/10.`,
      l === "bg" ? `Резултат: ${num(sum)}.` : `Result: ${num(sum)}.`,
    ]);
  },

  percent: (lv, l) => {
    const p = pick([5, 10, 15, 20, 25, 40, 50, 75]);
    const base = R(2, 8 + lv * 4) * 20;
    const res = (base * p) / 100;
    return make("percent", lv, l === "bg" ? `Колко е ${p}% от ${base}?` : `What is ${p}% of ${base}?`, num(res), [
      l === "bg" ? `1% от ${base} е ${base} : 100 = ${base / 100}.` : `1% of ${base} is ${base} : 100 = ${base / 100}.`,
      l === "bg" ? `${p}% са ${p} · ${base / 100} = ${num(res)}.` : `${p}% is ${p} · ${base / 100} = ${num(res)}.`,
    ]);
  },

  ratio: (lv, l) => {
    const k = R(2, 3 + lv);
    const a = R(2, 5);
    const b = R(2, 5);
    const total = (a + b) * k;
    return make("ratio", lv, l === "bg" ? `${total} лв. се разделят в отношение ${a} : ${b}. Колко е по-малката част?` : `${total} BGN is split in the ratio ${a} : ${b}. What is the smaller part?`, num(Math.min(a, b) * k), [
      l === "bg" ? `Общо части: ${a} + ${b} = ${a + b}.` : `Total parts: ${a} + ${b} = ${a + b}.`,
      l === "bg" ? `Една част: ${total} : ${a + b} = ${k}.` : `One part: ${total} : ${a + b} = ${k}.`,
      l === "bg" ? `По-малката част: ${Math.min(a, b)} · ${k} = ${Math.min(a, b) * k}.` : `Smaller part: ${Math.min(a, b)} · ${k} = ${Math.min(a, b) * k}.`,
    ]);
  },

  negatives: (lv, l) => {
    const a = -R(2, 5 + lv * 3);
    const b = R(2, 6 + lv * 3);
    const mul = Math.random() < 0.4;
    if (mul) {
      return make("negatives", lv, `(${a}) · (−${b}) = ?`, num(a * -b), [
        l === "bg" ? `Минус по минус дава плюс.` : `Minus times minus gives plus.`,
        l === "bg" ? `${Math.abs(a)} · ${b} = ${Math.abs(a) * b}, значи резултатът е ${a * -b}.` : `${Math.abs(a)} · ${b} = ${Math.abs(a) * b}, so the result is ${a * -b}.`,
      ]);
    }
    return make("negatives", lv, `${a} + ${b} = ?`, num(a + b), [
      l === "bg" ? `Числата имат различни знаци, затова изваждаме по-малкото от по-голямото по абсолютна стойност.` : `The signs differ, so subtract the smaller absolute value from the larger.`,
      l === "bg" ? `|${b}| − |${a}| = ${b - Math.abs(a)}; знакът е на по-голямото по абсолютна стойност.` : `|${b}| − |${a}| = ${b - Math.abs(a)}; the sign follows the larger absolute value.`,
      l === "bg" ? `Резултат: ${a + b}.` : `Result: ${a + b}.`,
    ]);
  },

  gcdlcm: (lv, l) => {
    const a = R(6, 20 + lv * 6);
    const b = R(6, 20 + lv * 6);
    const g = gcd(a, b);
    return make("gcdlcm", lv, l === "bg" ? `Намери НОД(${a}, ${b}).` : `Find GCD(${a}, ${b}).`, num(g), [
      l === "bg" ? `Алгоритъм на Евклид: делим по-голямото на по-малкото и гледаме остатъка.` : `Euclid's algorithm: divide the larger by the smaller and look at the remainder.`,
      l === "bg" ? `${Math.max(a, b)} mod ${Math.min(a, b)} = ${Math.max(a, b) % Math.min(a, b)}.` : `${Math.max(a, b)} mod ${Math.min(a, b)} = ${Math.max(a, b) % Math.min(a, b)}.`,
      l === "bg" ? `Повтаряме, докато остатъкът стане 0. Последният делител е НОД = ${g}.` : `Repeat until the remainder is 0. The last divisor is the GCD = ${g}.`,
    ]);
  },

  lineareq: (lv, l) => {
    const a = R(2, 3 + lv);
    const x = R(-4, 9);
    const b = R(-9, 9);
    const c = a * x + b;
    return make("lineareq", lv, `${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${c}`, num(x), [
      l === "bg" ? `Пренасяме ${b < 0 ? `−${Math.abs(b)}` : `+${b}`} надясно: ${a}x = ${c} ${b < 0 ? "+" : "−"} ${Math.abs(b)}.` : `Move ${b < 0 ? `−${Math.abs(b)}` : `+${b}`} to the right: ${a}x = ${c} ${b < 0 ? "+" : "−"} ${Math.abs(b)}.`,
      l === "bg" ? `${a}x = ${a * x}.` : `${a}x = ${a * x}.`,
      l === "bg" ? `Делим на ${a}: x = ${a * x} : ${a} = ${x}.` : `Divide by ${a}: x = ${a * x} : ${a} = ${x}.`,
    ]);
  },

  powers: (lv, l) => {
    const a = R(2, 4 + lv);
    const m = R(2, 4);
    const n = R(2, 3);
    return make("powers", lv, `${a}^${m} · ${a}^${n} = ?`, num(Math.pow(a, m + n)), [
      l === "bg" ? `При умножение на степени с една основа степенните показатели се събират.` : `Multiplying powers with the same base adds the exponents.`,
      l === "bg" ? `${a}^${m} · ${a}^${n} = ${a}^${m + n}.` : `${a}^${m} · ${a}^${n} = ${a}^${m + n}.`,
      l === "bg" ? `${a}^${m + n} = ${Math.pow(a, m + n)}.` : `${a}^${m + n} = ${Math.pow(a, m + n)}.`,
    ]);
  },

  angles: (lv, l) => {
    const a = R(25, 80);
    const b = R(25, 170 - a);
    return make("angles", lv, l === "bg" ? `В триъгълник два ъгъла са ${a}° и ${b}°. Колко е третият?` : `Two angles of a triangle are ${a}° and ${b}°. Find the third.`, num(180 - a - b), [
      l === "bg" ? `Сумата на ъглите в триъгълник е 180°.` : `The angles of a triangle add up to 180°.`,
      l === "bg" ? `${a}° + ${b}° = ${a + b}°.` : `${a}° + ${b}° = ${a + b}°.`,
      l === "bg" ? `180° − ${a + b}° = ${180 - a - b}°.` : `180° − ${a + b}° = ${180 - a - b}°.`,
    ]);
  },

  area: (lv, l) => {
    const kind = pick(["rect", "tri"]);
    const a = R(3, 8 + lv * 2);
    const b = R(3, 8 + lv * 2);
    if (kind === "rect") {
      return make("area", lv, l === "bg" ? `Лице на правоъгълник със страни ${a} см и ${b} см?` : `Area of a rectangle with sides ${a} cm and ${b} cm?`, num(a * b), [
        l === "bg" ? `S = a · b.` : `S = a · b.`,
        l === "bg" ? `S = ${a} · ${b} = ${a * b} см².` : `S = ${a} · ${b} = ${a * b} cm².`,
      ]);
    }
    const base = a * 2;
    return make("area", lv, l === "bg" ? `Лице на триъгълник с основа ${base} см и височина ${b} см?` : `Area of a triangle with base ${base} cm and height ${b} cm?`, num((base * b) / 2), [
      l === "bg" ? `S = (a · h) : 2.` : `S = (a · h) : 2.`,
      l === "bg" ? `S = (${base} · ${b}) : 2 = ${(base * b) / 2} см².` : `S = (${base} · ${b}) : 2 = ${(base * b) / 2} cm².`,
    ]);
  },

  pythagoras: (lv, l) => {
    const triples: [number, number, number][] = [
      [3, 4, 5],
      [6, 8, 10],
      [5, 12, 13],
      [9, 12, 15],
      [8, 15, 17],
      [7, 24, 25],
    ];
    const [a, b, c] = pick(triples);
    return make("pythagoras", lv, l === "bg" ? `Правоъгълен триъгълник с катети ${a} и ${b}. Колко е хипотенузата?` : `A right triangle has legs ${a} and ${b}. Find the hypotenuse.`, num(c), [
      l === "bg" ? `Питагорова теорема: c² = a² + b².` : `Pythagorean theorem: c² = a² + b².`,
      l === "bg" ? `c² = ${a}² + ${b}² = ${a * a} + ${b * b} = ${c * c}.` : `c² = ${a}² + ${b}² = ${a * a} + ${b * b} = ${c * c}.`,
      l === "bg" ? `c = √${c * c} = ${c}.` : `c = √${c * c} = ${c}.`,
    ]);
  },

  systems: (lv, l) => {
    const x = R(-4, 6);
    const y = R(-4, 6);
    const a1 = R(1, 3);
    const b1 = R(1, 3);
    const a2 = R(1, 3);
    const b2 = -R(1, 3);
    const c1 = a1 * x + b1 * y;
    const c2 = a2 * x + b2 * y;
    return make("systems", lv, l === "bg" ? `Реши системата и намери x:\n${a1}x + ${b1}y = ${c1}\n${a2}x − ${Math.abs(b2)}y = ${c2}` : `Solve the system and find x:\n${a1}x + ${b1}y = ${c1}\n${a2}x − ${Math.abs(b2)}y = ${c2}`, num(x), [
      l === "bg" ? `Изразяваме y от първото уравнение: y = (${c1} − ${a1}x) : ${b1}.` : `Express y from the first equation: y = (${c1} − ${a1}x) : ${b1}.`,
      l === "bg" ? `Заместваме във второто и получаваме едно уравнение само с x.` : `Substitute into the second equation to get one equation in x only.`,
      l === "bg" ? `След опростяване: x = ${x}, а после y = ${y}.` : `After simplifying: x = ${x}, and then y = ${y}.`,
    ]);
  },

  quadratic: (lv, l) => {
    const x1 = R(-6, 6);
    const x2 = R(-6, 6);
    const b = -(x1 + x2);
    const c = x1 * x2;
    const small = Math.min(x1, x2);
    const D = b * b - 4 * c;
    return make("quadratic", lv, l === "bg" ? `x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)} = 0. Намери по-малкия корен.` : `x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)} = 0. Find the smaller root.`, num(small), [
      l === "bg" ? `Дискриминанта: D = b² − 4ac = (${b})² − 4·1·(${c}) = ${D}.` : `Discriminant: D = b² − 4ac = (${b})² − 4·1·(${c}) = ${D}.`,
      l === "bg" ? `√D = ${num(Math.sqrt(D))}.` : `√D = ${num(Math.sqrt(D))}.`,
      l === "bg" ? `x = (−b ± √D) : 2 → корените са ${x1} и ${x2}.` : `x = (−b ± √D) : 2 → the roots are ${x1} and ${x2}.`,
      l === "bg" ? `По-малкият корен е ${small}.` : `The smaller root is ${small}.`,
    ]);
  },

  progression: (lv, l) => {
    const a1 = R(-5, 9);
    const d = R(2, 4 + lv);
    const n = R(6, 12 + lv * 3);
    const an = a1 + (n - 1) * d;
    return make("progression", lv, l === "bg" ? `Аритметична прогресия с a₁ = ${a1} и d = ${d}. Колко е a${n}?` : `Arithmetic progression with a₁ = ${a1} and d = ${d}. Find a${n}.`, num(an), [
      l === "bg" ? `Формула: aₙ = a₁ + (n − 1)·d.` : `Formula: aₙ = a₁ + (n − 1)·d.`,
      l === "bg" ? `a${n} = ${a1} + (${n} − 1)·${d} = ${a1} + ${(n - 1) * d}.` : `a${n} = ${a1} + (${n} − 1)·${d} = ${a1} + ${(n - 1) * d}.`,
      l === "bg" ? `a${n} = ${an}.` : `a${n} = ${an}.`,
    ]);
  },

  progressiongeo: (lv, l) => {
    const a1 = R(1, 5);
    const q = R(2, 3);
    const n = R(4, 7);
    const an = a1 * Math.pow(q, n - 1);
    return make("progressiongeo", lv, l === "bg" ? `Геометрична прогресия с a₁ = ${a1} и q = ${q}. Колко е a${n}?` : `Geometric progression with a₁ = ${a1} and q = ${q}. Find a${n}.`, num(an), [
      l === "bg" ? `Формула: aₙ = a₁ · qⁿ⁻¹.` : `Formula: aₙ = a₁ · qⁿ⁻¹.`,
      l === "bg" ? `a${n} = ${a1} · ${q}^${n - 1} = ${a1} · ${Math.pow(q, n - 1)}.` : `a${n} = ${a1} · ${q}^${n - 1} = ${a1} · ${Math.pow(q, n - 1)}.`,
      l === "bg" ? `a${n} = ${an}.` : `a${n} = ${an}.`,
    ]);
  },

  trig: (lv, l) => {
    const deg = pick([30, 45, 60]);
    const hyp = pick([2, 4, 6, 8, 10]);
    const sinTable: Record<number, number> = { 30: 0.5, 45: Math.SQRT1_2, 60: Math.sqrt(3) / 2 };
    const sinv = sinTable[deg] as number;
    const res = Math.round(hyp * sinv * 1000) / 1000;
    return make("trig", lv, l === "bg" ? `В правоъгълен триъгълник хипотенузата е ${hyp}, а ъгълът е ${deg}°. Колко е срещулежащият катет? (до 3 знака)` : `In a right triangle the hypotenuse is ${hyp} and the angle is ${deg}°. Find the opposite leg (3 decimals).`, num(res), [
      l === "bg" ? `sin(${deg}°) = срещулежащ катет : хипотенуза.` : `sin(${deg}°) = opposite : hypotenuse.`,
      l === "bg" ? `sin(${deg}°) = ${num(Math.round(sinv * 1000) / 1000)}.` : `sin(${deg}°) = ${num(Math.round(sinv * 1000) / 1000)}.`,
      l === "bg" ? `катет = ${hyp} · sin(${deg}°) = ${num(res)}.` : `leg = ${hyp} · sin(${deg}°) = ${num(res)}.`,
    ]);
  },

  logs: (lv, l) => {
    const base = pick([2, 3, 5, 10]);
    const n = R(2, 5);
    const val = Math.pow(base, n);
    return make("logs", lv, `log${base}(${val}) = ?`, num(n), [
      l === "bg" ? `Логаритъм пита: на коя степен да вдигнем ${base}, за да получим ${val}?` : `A logarithm asks: to what power must we raise ${base} to get ${val}?`,
      l === "bg" ? `${base}^${n} = ${val}.` : `${base}^${n} = ${val}.`,
      l === "bg" ? `Значи log${base}(${val}) = ${n}.` : `So log${base}(${val}) = ${n}.`,
    ]);
  },

  combinatorics: (lv, l) => {
    const n = R(5, 8 + lv);
    const k = R(2, 3);
    let c = 1;
    for (let i = 1; i <= k; i++) c = (c * (n - k + i)) / i;
    return make("combinatorics", lv, l === "bg" ? `По колко начина може да изберем ${k} от ${n} ученици? (C(${n},${k}))` : `In how many ways can we choose ${k} of ${n} students? (C(${n},${k}))`, num(Math.round(c)), [
      l === "bg" ? `C(n,k) = n! : (k! · (n−k)!).` : `C(n,k) = n! : (k! · (n−k)!).`,
      l === "bg" ? `C(${n},${k}) = (${Array.from({ length: k }, (_, i) => n - i).join(" · ")}) : ${Array.from({ length: k }, (_, i) => i + 1).join(" · ")}.` : `C(${n},${k}) = (${Array.from({ length: k }, (_, i) => n - i).join(" · ")}) : ${Array.from({ length: k }, (_, i) => i + 1).join(" · ")}.`,
      l === "bg" ? `Резултат: ${Math.round(c)}.` : `Result: ${Math.round(c)}.`,
    ]);
  },

  probability: (lv, l) => {
    const red = R(2, 6);
    const blue = R(2, 6);
    const total = red + blue;
    return make("probability", lv, l === "bg" ? `В кутия има ${red} червени и ${blue} сини топки. Каква е вероятността да изтеглим червена? (като дроб)` : `A box has ${red} red and ${blue} blue balls. What is the probability of drawing a red one? (as a fraction)`, frac(red, total), [
      l === "bg" ? `Всички изходи: ${red} + ${blue} = ${total}.` : `All outcomes: ${red} + ${blue} = ${total}.`,
      l === "bg" ? `Благоприятни изходи: ${red}.` : `Favourable outcomes: ${red}.`,
      l === "bg" ? `P = ${red}/${total} = ${frac(red, total)}.` : `P = ${red}/${total} = ${frac(red, total)}.`,
    ]);
  },

  derivative: (lv, l) => {
    const a = R(2, 5);
    const b = R(1, 6);
    const x0 = R(1, 4);
    const res = 2 * a * x0 + b;
    return make("derivative", lv, l === "bg" ? `f(x) = ${a}x² + ${b}x. Колко е f′(${x0})?` : `f(x) = ${a}x² + ${b}x. Find f′(${x0}).`, num(res), [
      l === "bg" ? `(xⁿ)′ = n·xⁿ⁻¹, затова f′(x) = ${2 * a}x + ${b}.` : `(xⁿ)′ = n·xⁿ⁻¹, so f′(x) = ${2 * a}x + ${b}.`,
      l === "bg" ? `Заместваме x = ${x0}: ${2 * a} · ${x0} + ${b}.` : `Substitute x = ${x0}: ${2 * a} · ${x0} + ${b}.`,
      l === "bg" ? `f′(${x0}) = ${res}.` : `f′(${x0}) = ${res}.`,
    ]);
  },

  integral: (lv, l) => {
    const a = R(1, 4);
    const b = R(0, 5);
    const hi = R(1, 4);
    const res = (a * hi * hi) / 2 + b * hi;
    return make("integral", lv, l === "bg" ? `Изчисли ∫₀^${hi} (${a}x + ${b}) dx.` : `Evaluate ∫₀^${hi} (${a}x + ${b}) dx.`, num(res), [
      l === "bg" ? `Първообразна: F(x) = ${a}x²/2 + ${b}x.` : `Antiderivative: F(x) = ${a}x²/2 + ${b}x.`,
      l === "bg" ? `F(${hi}) = ${a}·${hi}²/2 + ${b}·${hi} = ${num(res)}.` : `F(${hi}) = ${a}·${hi}²/2 + ${b}·${hi} = ${num(res)}.`,
      l === "bg" ? `F(0) = 0, значи резултатът е ${num(res)}.` : `F(0) = 0, so the result is ${num(res)}.`,
    ]);
  },
  ...EXTRA_GENS,
};

/* ------------------------------------------------------------------ */
/* Curriculum: Bulgarian school math, grades 1–12                      */
/* ------------------------------------------------------------------ */

export const TOPIC_LABEL: Record<string, { bg: string; en: string }> = {
  addsub20: { bg: "Събиране и изваждане до 20", en: "Adding and subtracting to 20" },
  addsub100: { bg: "Събиране и изваждане до 100", en: "Adding and subtracting to 100" },
  multable: { bg: "Таблица за умножение", en: "Multiplication table" },
  divide: { bg: "Деление", en: "Division" },
  mulcolumn: { bg: "Умножение на многоцифрени числа", en: "Multiplying larger numbers" },
  wordsimple: { bg: "Текстови задачи", en: "Word problems" },
  fracpart: { bg: "Част от число", en: "Fraction of a number" },
  fracadd: { bg: "Събиране на дроби", en: "Adding fractions" },
  fracmul: { bg: "Умножение на дроби", en: "Multiplying fractions" },
  decimals: { bg: "Десетични числа", en: "Decimal numbers" },
  percent: { bg: "Проценти", en: "Percentages" },
  ratio: { bg: "Отношения и пропорции", en: "Ratio and proportion" },
  negatives: { bg: "Отрицателни числа", en: "Negative numbers" },
  gcdlcm: { bg: "НОД и НОК", en: "GCD and LCM" },
  lineareq: { bg: "Линейни уравнения", en: "Linear equations" },
  powers: { bg: "Степени", en: "Powers" },
  angles: { bg: "Ъгли в триъгълник", en: "Angles in a triangle" },
  area: { bg: "Лице и обиколка", en: "Area and perimeter" },
  pythagoras: { bg: "Питагорова теорема", en: "Pythagorean theorem" },
  systems: { bg: "Системи уравнения", en: "Systems of equations" },
  quadratic: { bg: "Квадратни уравнения", en: "Quadratic equations" },
  progression: { bg: "Аритметична прогресия", en: "Arithmetic progression" },
  progressiongeo: { bg: "Геометрична прогресия", en: "Geometric progression" },
  trig: { bg: "Тригонометрия", en: "Trigonometry" },
  logs: { bg: "Логаритми", en: "Logarithms" },
  combinatorics: { bg: "Комбинаторика", en: "Combinatorics" },
  probability: { bg: "Вероятности", en: "Probability" },
  derivative: { bg: "Производни", en: "Derivatives" },
  integral: { bg: "Интеграли", en: "Integrals" },
  ...EXTRA_LABELS,
};

export const CURRICULUM: Record<number, string[]> = {
  1: ["addsub20", "wordsimple"],
  2: ["addsub100", "multable", "wordsimple"],
  3: ["multable", "divide", "mulcolumn", "orderops", "wordsimple"],
  4: ["mulcolumn", "divide", "orderops", "fracpart", "area"],
  5: ["fracadd", "fracmul", "decimals", "percent", "orderops", "area"],
  6: ["percent", "ratio", "negatives", "gcdlcm", "exprvalue", "lineareq", "motion"],
  7: ["exprvalue", "monomials", "identities", "lineareq", "powers", "angles", "area", "ratio", "motion"],
  8: ["identities", "factoring", "inequality", "abseq", "linfunc", "lineareq", "systems", "pythagoras", "work"],
  9: ["quadratic", "systems", "inequality", "linfunc", "progression", "pythagoras", "vectors"],
  10: ["quadratic", "abseq", "trig", "progression", "combinatorics", "vectors"],
  11: ["logs", "progressiongeo", "trig", "combinatorics", "vectors"],
  12: ["derivative", "integral", "probability", "logs"],
};

export function topicsForGrade(grade: number) {
  return CURRICULUM[grade] ?? CURRICULUM[5] ?? [];
}

export function generate(topicId: string, level: number, lang: Lang): Problem {
  const gen = gens[topicId] ?? (gens["addsub100"] as Gen);
  return gen(Math.min(5, Math.max(1, level)), lang);
}

/** Accepts "0,5", "0.5", "1/2" etc. */
export function isCorrect(problem: Problem, input: string) {
  const norm = (s: string) => s.trim().replace(/\s+/g, "").replace(",", ".");
  const a = norm(problem.answer);
  const b = norm(input);
  if (!b) return false;
  if (a === b) return true;
  const val = (s: string) => {
    if (s.includes("/")) {
      const [n, d] = s.split("/").map(Number);
      return n !== undefined && d ? n / d : NaN;
    }
    return Number(s);
  };
  const va = val(a);
  const vb = val(b);
  if (Number.isNaN(va) || Number.isNaN(vb)) return false;
  return Math.abs(va - vb) < 1e-3;
}
