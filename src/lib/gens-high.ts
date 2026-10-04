import type { Lang } from "./i18n";
import type { Problem } from "./math-engine";

type Gen = (level: number, lang: Lang) => Problem;
const R = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const mk = (topicId: string, level: number, prompt: string, answer: string, steps: string[]): Problem => ({ topicId, level, prompt, answer, steps });
const tr = (l: Lang) => (bg: string, en: string) => (l === "bg" ? bg : en);
const sg = (n: number) => (n < 0 ? `− ${Math.abs(n)}` : `+ ${n}`);
const p = (n: number) => (n < 0 ? `(${n})` : `${n}`);

export const HIGH_GENS: Record<string, Gen> = {
  biquad: (lv, l) => {
    const T = tr(l);
    const a = R(1, 3), b = R(a + 1, 4 + Math.min(lv, 2));
    const s = a * a + b * b, pr = a * a * b * b;
    return mk("biquad", lv, T(`Реши x⁴ − ${s}x² + ${pr} = 0. Колко е най-големият корен?`, `Solve x⁴ − ${s}x² + ${pr} = 0. What is the largest root?`), String(b), [
      T("Полагаме t = x² ≥ 0.", "Let t = x² ≥ 0."),
      `t² − ${s}t + ${pr} = 0 ⇒ t₁ = ${a * a}, t₂ = ${b * b}.`,
      `x² = ${a * a} ⇒ x = ±${a};  x² = ${b * b} ⇒ x = ±${b}.`,
      T(`Най-големият корен е ${b}.`, `The largest root is ${b}.`),
    ]);
  },

  fraceq: (lv, l) => {
    const T = tr(l);
    const x = R(-4, 8), a = R(1, 5);
    if (x === -a) return HIGH_GENS.fraceq!(lv, l);
    const k = R(2, 5);
    const c = k * (x + a);
    return mk("fraceq", lv, T(`Реши ${c}/(x ${sg(a)}) = ${k}.`, `Solve ${c}/(x ${sg(a)}) = ${k}.`), String(x), [
      T(`ДМ: x ≠ ${-a}.`, `Domain: x ≠ ${-a}.`),
      T(`Умножаваме по (x ${sg(a)}): ${c} = ${k}(x ${sg(a)}).`, `Multiply by (x ${sg(a)}): ${c} = ${k}(x ${sg(a)}).`),
      `x ${sg(a)} = ${c / k} ⇒ x = ${x}.`,
      T(`${x} ≠ ${-a}, значи е решение.`, `${x} ≠ ${-a}, so it is valid.`),
    ]);
  },

  similar: (lv, l) => {
    const T = tr(l);
    const k = R(2, 4), a = R(3, 9), b = R(3, 9);
    return mk("similar", lv, T(`△ABC ~ △A₁B₁C₁ с коефициент ${k}. AB = ${a}, A₁B₁ = ${a * k}, BC = ${b}. Колко е B₁C₁?`, `△ABC ~ △A₁B₁C₁ with ratio ${k}. AB = ${a}, A₁B₁ = ${a * k}, BC = ${b}. Find B₁C₁.`), String(b * k), [
      T("При подобни триъгълници съответните страни са пропорционални.", "In similar triangles corresponding sides are proportional."),
      `k = A₁B₁ : AB = ${a * k} : ${a} = ${k}.`,
      `B₁C₁ = ${k} · ${b} = ${b * k}.`,
    ]);
  },

  rightmetric: (lv, l) => {
    const T = tr(l);
    const m = R(1, 4), n = R(m, 9);
    const hh = m * n;
    const ok = Math.sqrt(hh);
    if (!Number.isInteger(ok)) {
      const pick: [number, number][] = [[1, 4], [1, 9], [2, 8], [4, 9], [3, 12], [4, 16], [9, 16]];
      const [mm, nn] = pick[R(0, pick.length - 1)]!;
      const h = Math.sqrt(mm * nn);
      return mk("rightmetric", lv, T(`В правоъгълен триъгълник височината към хипотенузата я дели на отсечки ${mm} и ${nn}. Колко е височината?`, `In a right triangle the altitude splits the hypotenuse into ${mm} and ${nn}. Find the altitude.`), String(h), [
        T("Метрична зависимост: h² = m · n.", "Metric relation: h² = m · n."),
        `h² = ${mm} · ${nn} = ${mm * nn} ⇒ h = ${h}.`,
      ]);
    }
    return mk("rightmetric", lv, T(`В правоъгълен триъгълник височината към хипотенузата я дели на отсечки ${m} и ${n}. Колко е височината?`, `In a right triangle the altitude splits the hypotenuse into ${m} and ${n}. Find the altitude.`), String(ok), [
      T("Метрична зависимост: h² = m · n.", "Metric relation: h² = m · n."),
      `h² = ${m} · ${n} = ${hh} ⇒ h = ${ok}.`,
    ]);
  },

  righttrig: (lv, l) => {
    const T = tr(l);
    const tri: [number, number, number][] = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]];
    const [a, b, c] = tri[R(0, tri.length - 1)]!;
    const f = R(0, 2);
    const name = ["sin α", "cos α", "tg α"][f]!;
    const ans = [`${a}/${c}`, `${b}/${c}`, `${a}/${b}`][f]!;
    return mk("righttrig", lv, T(`В правоъгълен триъгълник срещулежащият на α катет е ${a}, прилежащият — ${b}, хипотенузата — ${c}. Колко е ${name}?`, `In a right triangle the side opposite α is ${a}, adjacent ${b}, hypotenuse ${c}. Find ${name}.`), ans, [
      T("sin = срещулежащ/хипотенуза, cos = прилежащ/хипотенуза, tg = срещулежащ/прилежащ.", "sin = opp/hyp, cos = adj/hyp, tan = opp/adj."),
      `${name} = ${ans}.`,
    ]);
  },

  irrational: (lv, l) => {
    const T = tr(l);
    const x = R(1, 10 + lv), b = R(1, 5);
    const val = Math.sqrt(x + b);
    if (!Number.isInteger(val)) {
      const k = R(2, 6), bb = R(1, 5);
      const xx = k * k - bb;
      return mk("irrational", lv, T(`Реши √(x + ${bb}) = ${k}.`, `Solve √(x + ${bb}) = ${k}.`), String(xx), [
        T(`ДМ: x + ${bb} ≥ 0. Дясната страна ${k} ≥ 0.`, `Domain: x + ${bb} ≥ 0. Right side ${k} ≥ 0.`),
        T("Повдигаме на квадрат:", "Square both sides:") + ` x + ${bb} = ${k * k}.`,
        `x = ${xx}. ` + T("Проверка: ", "Check: ") + `√${k * k} = ${k} ✓.`,
      ]);
    }
    return mk("irrational", lv, T(`Реши √(x + ${b}) = ${val}.`, `Solve √(x + ${b}) = ${val}.`), String(x), [
      T("Повдигаме на квадрат:", "Square both sides:") + ` x + ${b} = ${val * val}.`,
      `x = ${x}. ` + T("Проверка: ", "Check: ") + `√${x + b} = ${val} ✓.`,
    ]);
  },

  quadineq: (lv, l) => {
    const T = tr(l);
    const a = R(-5, 2), b = R(a + 2, a + 6 + lv);
    const cnt = b - a - 1;
    return mk("quadineq", lv, T(`Колко цели числа са решения на (x ${sg(-a)})(x ${sg(-b)}) < 0?`, `How many integers satisfy (x ${sg(-a)})(x ${sg(-b)}) < 0?`), String(cnt), [
      T(`Корените са ${a} и ${b}.`, `The roots are ${a} and ${b}.`),
      T("Параболата е отворена нагоре, отрицателна е между корените: ", "The parabola opens up, so it is negative between the roots: ") + `x ∈ (${a}; ${b}).`,
      T(`Цели числа от ${a + 1} до ${b - 1}: ${cnt} броя.`, `Integers from ${a + 1} to ${b - 1}: ${cnt}.`),
    ]);
  },

  sinelaw: (lv, l) => {
    const T = tr(l);
    const Rr = R(2, 8 + lv);
    const ang = [30, 90, 150][R(0, 2)]!;
    const s = ang === 90 ? 1 : 0.5;
    return mk("sinelaw", lv, T(`В △ABC ъгъл α = ${ang}°, а радиусът на описаната окръжност е R = ${Rr}. Колко е страната a?`, `In △ABC, α = ${ang}° and the circumradius R = ${Rr}. Find side a.`), String(2 * Rr * s), [
      T("Синусова теорема: a / sin α = 2R.", "Law of sines: a / sin α = 2R."),
      `sin ${ang}° = ${s === 1 ? "1" : "1/2"}.`,
      `a = 2 · ${Rr} · ${s === 1 ? "1" : "1/2"} = ${2 * Rr * s}.`,
    ]);
  },

  heron: (lv, l) => {
    const T = tr(l);
    const tri: [number, number, number, number][] = [[3, 4, 5, 6], [5, 5, 6, 12], [5, 5, 8, 12], [13, 14, 15, 84], [6, 8, 10, 24], [10, 10, 12, 48], [7, 15, 20, 42]];
    const [a, b, c, S] = tri[R(0, tri.length - 1)]!;
    const pp = (a + b + c) / 2;
    return mk("heron", lv, T(`Триъгълник има страни ${a}, ${b} и ${c}. Намери лицето по формулата на Херон.`, `A triangle has sides ${a}, ${b}, ${c}. Find its area with Heron's formula.`), String(S), [
      T("S = √(p(p − a)(p − b)(p − c)), p е полупериметърът.", "S = √(p(p − a)(p − b)(p − c)), p is the semi-perimeter."),
      `p = (${a} + ${b} + ${c}) : 2 = ${pp}.`,
      `S = √(${pp}·${pp - a}·${pp - b}·${pp - c}) = √${pp * (pp - a) * (pp - b) * (pp - c)} = ${S}.`,
    ]);
  },

  expeq: (lv, l) => {
    const T = tr(l);
    const b = [2, 3, 5][R(0, 2)]!, x = R(-2, 4), k = R(1, 3);
    const rhs = Math.pow(b, k * x);
    const rhsS = rhs >= 1 ? String(rhs) : `1/${Math.round(1 / rhs)}`;
    return mk("expeq", lv, T(`Реши ${b}^(${k}x) = ${rhsS}.`, `Solve ${b}^(${k}x) = ${rhsS}.`), String(x), [
      T(`Записваме дясната страна като степен на ${b}: ${rhsS} = ${b}^${k * x}.`, `Write the right side as a power of ${b}: ${rhsS} = ${b}^${k * x}.`),
      T("Равни основи ⇒ равни степенни показатели:", "Equal bases ⇒ equal exponents:") + ` ${k}x = ${k * x}.`,
      `x = ${x}.`,
    ]);
  },

  logineq: (lv, l) => {
    const T = tr(l);
    const k = R(2, 4), a = R(1, 6);
    const top = Math.pow(2, k) + a;
    const cnt = top - a - 1;
    return mk("logineq", lv, T(`Колко цели x удовлетворяват log₂(x − ${a}) < ${k}?`, `How many integers x satisfy log₂(x − ${a}) < ${k}?`), String(cnt), [
      T(`ДМ: x − ${a} > 0 ⇒ x > ${a}.`, `Domain: x − ${a} > 0 ⇒ x > ${a}.`),
      T(`Основа 2 > 1, знакът се запазва: x − ${a} < 2^${k} = ${Math.pow(2, k)} ⇒ x < ${top}.`, `Base 2 > 1 keeps the sign: x − ${a} < ${Math.pow(2, k)} ⇒ x < ${top}.`),
      T(`x ∈ (${a}; ${top}): цели от ${a + 1} до ${top - 1} — ${cnt} броя.`, `x ∈ (${a}; ${top}): integers ${a + 1}..${top - 1} — ${cnt}.`),
    ]);
  },

  trigeq: (lv, l) => {
    const T = tr(l);
    const opts: [string, string, number][] = [["sin x = 1/2", "30° и 150°", 30], ["cos x = 1/2", "60° и 300°", 60], ["sin x = √2/2", "45° и 135°", 45], ["tg x = 1", "45° и 225°", 45], ["cos x = 0", "90° и 270°", 90], ["tg x = √3", "60° и 240°", 60]];
    const [eq, both, first] = opts[R(0, opts.length - 1)]!;
    return mk("trigeq", lv, T(`Реши ${eq} в интервала [0°; 360°). Кой е най-малкият корен (в градуси)?`, `Solve ${eq} on [0°; 360°). What is the smallest root (degrees)?`), String(first), [
      T("Използваме таблицата на стойностите и знаците по четвърти.", "Use the value table and the signs by quadrant."),
      T(`Решенията в [0°; 360°) са ${both}.`, `The solutions on [0°; 360°) are ${both.replace("и", "and")}.`),
      T(`Най-малкият е ${first}°.`, `The smallest is ${first}°.`),
    ]);
  },

  pyramid: (lv, l) => {
    const T = tr(l);
    const a = R(2, 6) * 2, h = R(2, 9) * 3;
    const V = (a * a * h) / 3;
    return mk("pyramid", lv, T(`Правилна четириъгълна пирамида има основен ръб ${a} и височина ${h}. Колко е обемът?`, `A regular square pyramid has base edge ${a} and height ${h}. Find its volume.`), String(V), [
      "V = B · h : 3.",
      `B = ${a}² = ${a * a}.`,
      `V = ${a * a} · ${h} : 3 = ${V}.`,
    ]);
  },

  limits: (lv, l) => {
    const T = tr(l);
    const a = R(1, 6), b = R(1, 9);
    if (Math.random() < 0.5) {
      return mk("limits", lv, T(`Намери lim (x² − ${a * a})/(x − ${a}) при x → ${a}.`, `Find lim (x² − ${a * a})/(x − ${a}) as x → ${a}.`), String(2 * a), [
        T("Директното заместване дава 0/0 — разлагаме.", "Direct substitution gives 0/0 — factor."),
        `(x − ${a})(x + ${a})/(x − ${a}) = x + ${a}.`,
        `${a} + ${a} = ${2 * a}.`,
      ]);
    }
    const c = R(1, 5);
    return mk("limits", lv, T(`Намери lim (${a}n ${sg(b)})/(${c}n + 1) при n → ∞.`, `Find lim (${a}n ${sg(b)})/(${c}n + 1) as n → ∞.`), `${a}/${c}`, [
      T("Делим числителя и знаменателя на n.", "Divide top and bottom by n."),
      `(${a} ${sg(b)}/n)/(${c} + 1/n) → ${a}/${c}.`,
    ]);
  },

  tangent: (lv, l) => {
    const T = tr(l);
    const a = R(1, 3), b = R(-4, 4), x0 = R(-2, 3);
    const k = 2 * a * x0 + b;
    return mk("tangent", lv, T(`Намери ъгловия коефициент на допирателната към f(x) = ${a}x² ${sg(b)}x в точката x₀ = ${x0}.`, `Find the slope of the tangent to f(x) = ${a}x² ${sg(b)}x at x₀ = ${x0}.`), String(k), [
      T("Ъгловият коефициент е f′(x₀).", "The slope equals f′(x₀)."),
      `f′(x) = ${2 * a}x ${sg(b)}.`,
      `f′(${x0}) = ${2 * a}·${p(x0)} ${sg(b)} = ${k}.`,
    ]);
  },

  monotonic: (lv, l) => {
    const T = tr(l);
    const a = R(1, 3), x0 = R(-4, 5);
    const b = -2 * a * x0;
    return mk("monotonic", lv, T(`f(x) = ${a}x² ${sg(b)}x + 1. При кое x функцията сменя от намаляваща в растяща?`, `f(x) = ${a}x² ${sg(b)}x + 1. At which x does it change from decreasing to increasing?`), String(x0), [
      `f′(x) = ${2 * a}x ${sg(b)}.`,
      T(`f′(x) = 0 ⇒ x = ${x0}.`, `f′(x) = 0 ⇒ x = ${x0}.`),
      T(`Вляво f′ < 0 (намалява), вдясно f′ > 0 (расте) — минимум при x = ${x0}.`, `Left f′ < 0 (decreasing), right f′ > 0 (increasing) — minimum at x = ${x0}.`),
    ]);
  },

  median: (lv, l) => {
    const T = tr(l);
    const n = R(2, 3) * 2 + 1;
    const arr = Array.from({ length: n }, () => R(1, 20));
    const s = [...arr].sort((x, y) => x - y);
    const m = s[(n - 1) / 2]!;
    return mk("median", lv, T(`Намери медианата на данните: ${arr.join(", ")}.`, `Find the median of: ${arr.join(", ")}.`), String(m), [
      T("Подреждаме данните по големина:", "Sort the data:") + ` ${s.join(", ")}.`,
      T(`При ${n} стойности медианата е средната — ${(n + 1) / 2}-та.`, `With ${n} values the median is the middle one — #${(n + 1) / 2}.`),
      T(`Медиана = ${m}.`, `Median = ${m}.`),
    ]);
  },
};

export const HIGH_LABELS: Record<string, { bg: string; en: string }> = {
  biquad: { bg: "Биквадратни уравнения", en: "Biquadratic equations" },
  fraceq: { bg: "Дробни уравнения", en: "Rational equations" },
  similar: { bg: "Подобни триъгълници", en: "Similar triangles" },
  rightmetric: { bg: "Метрични зависимости в правоъгълен триъгълник", en: "Right-triangle metric relations" },
  righttrig: { bg: "Тригонометрия в правоъгълен триъгълник", en: "Right-triangle trigonometry" },
  irrational: { bg: "Ирационални уравнения", en: "Irrational equations" },
  quadineq: { bg: "Квадратни неравенства", en: "Quadratic inequalities" },
  sinelaw: { bg: "Синусова теорема", en: "Law of sines" },
  heron: { bg: "Лице на триъгълник (Херон)", en: "Triangle area (Heron)" },
  expeq: { bg: "Показателни уравнения", en: "Exponential equations" },
  logineq: { bg: "Логаритмични неравенства", en: "Logarithmic inequalities" },
  trigeq: { bg: "Тригонометрични уравнения", en: "Trigonometric equations" },
  pyramid: { bg: "Пирамида", en: "Pyramid" },
  limits: { bg: "Граници", en: "Limits" },
  tangent: { bg: "Допирателна и производна", en: "Tangent line and derivative" },
  monotonic: { bg: "Монотонност и екстремуми", en: "Monotonicity and extrema" },
  median: { bg: "Статистика: медиана", en: "Statistics: median" },
};
