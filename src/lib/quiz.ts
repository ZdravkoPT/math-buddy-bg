import type { Lang } from "./i18n";
import { generate, type Problem } from "./math-engine";

export type Mcq = { problem: Problem; options: string[]; correct: number };

const R = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const shuffle = <T,>(a: T[]) => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j] as T, b[i] as T];
  }
  return b;
};

const TRI_TYPES: Record<Lang, string[]> = {
  bg: ["остроъгълен", "правоъгълен", "тъпоъгълен"],
  en: ["acute", "right", "obtuse"],
};

/** Plausible wrong answers that look like the real one. */
export function distractors(answer: string, lang: Lang): string[] {
  const tri = TRI_TYPES[lang];
  if (tri.includes(answer)) return tri.filter((x) => x !== answer);

  const time = answer.match(/^(\d+):(\d{2})$/);
  if (time) {
    const t = Number(time[1]) * 60 + Number(time[2]);
    return [t + 10, t - 10, t + 60].map((m) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`);
  }

  const fr = answer.match(/^(-?\d+)\/(\d+)$/);
  if (fr) {
    const n = Number(fr[1]), d = Number(fr[2]);
    const set = new Set<string>([`${d}/${n || 1}`, `${n + 1}/${d}`, `${n}/${d + 1}`, `${Math.max(1, n - 1)}/${d}`]);
    set.delete(answer);
    return [...set].slice(0, 3);
  }

  const comma = answer.includes(",");
  const v = Number(answer.replace(",", "."));
  if (!Number.isNaN(v)) {
    const dec = (answer.split(/[.,]/)[1] ?? "").length;
    const step = dec ? Math.pow(10, -dec) * R(1, 9) : Math.max(1, Math.round(Math.abs(v) * 0.1));
    const cands = [v + step, v - step, v * 2 || v + 2, v + 2 * step, -v || v + 3 * step, v + 10 * (dec ? step : 1)];
    const fmt = (x: number) => {
      const s = dec ? x.toFixed(dec) : String(Math.round(x));
      return comma ? s.replace(".", ",") : s;
    };
    const set = new Set<string>();
    for (const c of shuffle(cands)) {
      const s = fmt(c);
      if (s !== answer && Number(s.replace(",", ".")) !== v) set.add(s);
      if (set.size === 3) break;
    }
    let k = 3;
    while (set.size < 3) set.add(fmt(v + k++ * (dec ? step : 1)));
    return [...set];
  }
  return [answer + "?", "—", "0"];
}

export function toMcq(problem: Problem, lang: Lang): Mcq {
  const options = shuffle([problem.answer, ...distractors(problem.answer, lang)]);
  return { problem, options, correct: options.indexOf(problem.answer) };
}

/** Build a quiz by cycling through the topics; extra generators may be supplied. */
export function buildQuiz(
  topics: string[],
  count: number,
  level: number,
  lang: Lang,
  extra?: (lang: Lang) => Problem | null,
): Mcq[] {
  const out: Mcq[] = [];
  for (let i = 0; i < count; i++) {
    const p = (extra && i % 3 === 2 ? extra(lang) : null) ?? generate(topics[i % topics.length] as string, level, lang);
    out.push(toMcq(p, lang));
  }
  return out;
}
