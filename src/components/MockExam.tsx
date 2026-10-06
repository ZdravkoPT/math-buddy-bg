import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import type { Bi } from "@/lib/materials";
import { WEAK_KEY } from "@/components/StudyPlan";
import { ProblemDiagram } from "@/components/ProblemDiagram";

type TopicKey = "quad" | "exp" | "trig" | "seq" | "prob" | "geo" | "calc" | "alg";
type Q = { t: TopicKey; q: Bi; options: string[]; correct: number; steps: Bi[] };
const b = (bg: string, en: string): Bi => ({ bg, en });
const s = (x: string) => b(x, x);

const TOPIC: Record<TopicKey, { label: Bi; lesson: string }> = {
  alg: { label: b("Алгебрични изрази и модули", "Algebraic expressions and absolute value"), lesson: "powers" },
  quad: { label: b("Квадратни уравнения и неравенства", "Quadratic equations and inequalities"), lesson: "quadratic" },
  exp: { label: b("Показателни и логаритмични", "Exponentials and logarithms"), lesson: "logs" },
  trig: { label: b("Тригонометрия", "Trigonometry"), lesson: "trig" },
  seq: { label: b("Прогресии", "Progressions"), lesson: "progression" },
  prob: { label: b("Комбинаторика и вероятности", "Combinatorics and probability"), lesson: "probability" },
  geo: { label: b("Планиметрия и стереометрия", "Geometry"), lesson: "pythagoras" },
  calc: { label: b("Производни и интеграли", "Derivatives and integrals"), lesson: "derivative" },
};

const QUESTIONS: Q[] = [
  { t: "quad", q: b("Корените на x² − 7x + 10 = 0 са:", "The roots of x² − 7x + 10 = 0 are:"), options: ["2 и 5", "−2 и −5", "1 и 10", "3 и 4"], correct: 0, steps: [s("D = 49 − 40 = 9, √D = 3."), b("x = (7 ± 3)/2 ⇒ 2 и 5.", "x = (7 ± 3)/2 ⇒ 2 and 5.")] },
  { t: "quad", q: b("Решенията на x² − 4 ≥ 0 са:", "Solutions of x² − 4 ≥ 0:"), options: ["[−2; 2]", "(−∞; −2] ∪ [2; +∞)", "[2; +∞)", "ℝ"], correct: 1, steps: [s("x² − 4 = 0 ⇒ x = ±2."), b("Парабола нагоре ⇒ ≥ 0 извън корените.", "Parabola opens up ⇒ ≥ 0 outside the roots.")] },
  { t: "quad", q: b("Ако x₁ и x₂ са корени на x² − 6x + 2 = 0, то x₁² + x₂² =", "If x₁, x₂ are roots of x² − 6x + 2 = 0, then x₁² + x₂² ="), options: ["32", "36", "34", "40"], correct: 0, steps: [b("Виет: x₁ + x₂ = 6, x₁x₂ = 2.", "Vieta: x₁ + x₂ = 6, x₁x₂ = 2."), s("x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂ = 36 − 4 = 32.")] },
  { t: "alg", q: b("Решенията на |x − 3| = 5 са:", "Solutions of |x − 3| = 5:"), options: ["8", "−2 и 8", "2 и 8", "−8 и 2"], correct: 1, steps: [b("x − 3 = 5 или x − 3 = −5.", "x − 3 = 5 or x − 3 = −5."), s("x = 8 или x = −2.")] },
  { t: "alg", q: b("Изразът (√12 + √3)² е равен на:", "(√12 + √3)² equals:"), options: ["15", "27", "21", "18"], correct: 1, steps: [s("√12 = 2√3 ⇒ √12 + √3 = 3√3."), s("(3√3)² = 9 · 3 = 27.")] },
  { t: "alg", q: b("Решението на √(x + 5) = x − 1 е:", "Solve √(x + 5) = x − 1:"), options: ["x = 4", "x = −1", "x = 4 и x = −1", "няма"], correct: 0, steps: [b("Условие: x − 1 ≥ 0 ⇒ x ≥ 1.", "Condition: x ≥ 1."), s("x + 5 = x² − 2x + 1 ⇒ x² − 3x − 4 = 0 ⇒ x = 4; −1."), b("x = −1 не изпълнява x ≥ 1.", "x = −1 fails x ≥ 1.")] },
  { t: "exp", q: b("Стойността на log₃ 81 е:", "The value of log₃ 81 is:"), options: ["3", "4", "27", "9"], correct: 1, steps: [s("81 = 3⁴."), s("log₃ 3⁴ = 4.")] },
  { t: "exp", q: b("Решението на 2ˣ⁺¹ = 16 е:", "Solve 2ˣ⁺¹ = 16:"), options: ["x = 4", "x = 2", "x = 3", "x = 8"], correct: 2, steps: [s("16 = 2⁴ ⇒ x + 1 = 4."), s("x = 3.")] },
  { t: "exp", q: b("lg 25 + lg 4 =", "lg 25 + lg 4 ="), options: ["1", "2", "29", "lg 29"], correct: 1, steps: [s("lg 25 + lg 4 = lg(25 · 4) = lg 100."), s("lg 100 = 2.")] },
  { t: "trig", q: b("Ако sin α = 3/5 и α е остър, то cos α =", "If sin α = 3/5, α acute, cos α ="), options: ["4/5", "3/4", "−4/5", "5/4"], correct: 0, steps: [s("cos²α = 1 − 9/25 = 16/25."), b("α е остър ⇒ cos α = 4/5.", "α acute ⇒ cos α = 4/5.")] },
  { t: "trig", q: b("В △ABC: a = 3, b = 5, γ = 120°. Тогава c =", "In △ABC: a = 3, b = 5, γ = 120°. c ="), options: ["7", "√19", "8", "√34"], correct: 0, steps: [b("Косинусова теорема: c² = 9 + 25 − 2·3·5·cos 120°.", "Law of cosines: c² = 9 + 25 − 2·3·5·cos 120°."), s("cos 120° = −½ ⇒ c² = 34 + 15 = 49 ⇒ c = 7.")] },
  { t: "seq", q: b("Аритметична прогресия с a₁ = 2, d = 3. Колко е a₁₀?", "Arithmetic: a₁ = 2, d = 3. a₁₀ ="), options: ["29", "32", "30", "27"], correct: 0, steps: [s("a₁₀ = a₁ + 9d = 2 + 27."), s("a₁₀ = 29.")] },
  { t: "seq", q: b("Геометрична прогресия: a₁ = 3, q = 2. S₅ =", "Geometric: a₁ = 3, q = 2. S₅ ="), options: ["48", "93", "96", "45"], correct: 1, steps: [s("S₅ = a₁(q⁵ − 1)/(q − 1)."), s("S₅ = 3 · 31 / 1 = 93.")] },
  { t: "prob", q: b("По колко начина могат да се изберат 3 ученици от 7?", "Ways to choose 3 students from 7?"), options: ["210", "35", "21", "343"], correct: 1, steps: [b("Редът няма значение → C(7,3).", "Order doesn't matter → C(7,3)."), s("C(7,3) = 7·6·5/6 = 35.")] },
  { t: "prob", q: b("Хвърля се зар. Вероятността да падне четно число е:", "Die roll. P(even) ="), options: ["1/6", "1/3", "1/2", "2/3"], correct: 2, steps: [b("Благоприятни: 2, 4, 6 → m = 3; n = 6.", "Favourable 2, 4, 6 → m = 3; n = 6."), s("P = 3/6 = 1/2.")] },
  { t: "prob", q: b("Средното аритметично на 4, 7, 9, 12 е:", "The mean of 4, 7, 9, 12 is:"), options: ["8", "8,5", "9", "7,5"], correct: 0, steps: [s("4 + 7 + 9 + 12 = 32."), s("32 : 4 = 8.")] },
  { t: "geo", q: b("Катетите на правоъгълен триъгълник са 9 и 12. Хипотенузата е:", "Legs 9 and 12. Hypotenuse ="), options: ["21", "15", "√63", "13"], correct: 1, steps: [s("c² = 81 + 144 = 225."), s("c = 15.")] },
  { t: "geo", q: b("Обемът на цилиндър с r = 3 и h = 5 е:", "Cylinder r = 3, h = 5. V ="), options: ["15π", "30π", "45π", "75π"], correct: 2, steps: [s("V = πr²h."), s("V = π · 9 · 5 = 45π.")] },
  { t: "geo", q: b("Лицето на ромб с диагонали 6 и 10 е:", "Rhombus with diagonals 6 and 10. Area ="), options: ["60", "30", "16", "15"], correct: 1, steps: [s("S = d₁ · d₂ / 2."), s("S = 6 · 10 / 2 = 30.")] },
  { t: "calc", q: b("Производната на f(x) = 3x² − 4x + 1 е:", "Derivative of 3x² − 4x + 1:"), options: ["6x − 4", "3x − 4", "6x + 1", "6x² − 4"], correct: 0, steps: [s("(3x²)′ = 6x, (−4x)′ = −4, (1)′ = 0."), s("f′(x) = 6x − 4.")] },
  { t: "calc", q: b("∫₀² 3x² dx =", "∫₀² 3x² dx ="), options: ["6", "8", "12", "4"], correct: 1, steps: [s("Примитивна: F(x) = x³."), s("F(2) − F(0) = 8 − 0 = 8.")] },
];

const LIMIT = 45 * 60;
const fmt = (ms: number) => { const t = Math.round(ms / 1000); return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`; };

export function MockExam() {
  const { lang } = useI18n();
  const bg = lang === "bg";
  const [started, setStarted] = useState(false);
  const [left, setLeft] = useState(LIMIT);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(QUESTIONS.map(() => null));
  const [times, setTimes] = useState<number[]>(QUESTIONS.map(() => 0));
  const [done, setDone] = useState(false);
  const since = useRef(Date.now());

  useEffect(() => {
    if (!started || done) return;
    const id = setInterval(() => setLeft((l) => (l <= 1 ? (finish(), 0) : l - 1)), 1000);
    return () => clearInterval(id);
  });

  function logTime() {
    const now = Date.now(); const spent = now - since.current; since.current = now;
    setTimes((t) => t.map((x, k) => (k === idx ? x + spent : x)));
  }
  function go(n: number) { logTime(); setIdx(n); }
  function finish() {
    logTime(); setDone(true);
    const weak = Object.keys(TOPIC).filter((k) => QUESTIONS.some((q, i) => q.t === k && answers[i] !== q.correct));
    try { localStorage.setItem(WEAK_KEY, JSON.stringify(weak.map((k) => TOPIC[k as TopicKey].label[lang]))); window.dispatchEvent(new Event("matmentor:weak")); } catch { /* ignore */ }
  }
  function start() { since.current = Date.now(); setStarted(true); }
  function reset() { setStarted(false); setDone(false); setLeft(LIMIT); setIdx(0); setAnswers(QUESTIONS.map(() => null)); setTimes(QUESTIONS.map(() => 0)); }

  if (!started) {
    return (
      <section className="mt-5 rounded-3xl bg-ink p-5 text-background">
        <h2 className="font-display text-[18px]">{bg ? "Пробна матура" : "Practice matura"}</h2>
        <p className="mt-1.5 text-[13px] leading-relaxed opacity-80">
          {bg ? `${QUESTIONS.length} задачи с избираем отговор, 45 минути. Накрая: отчет по теми, време за всеки въпрос, препоръки и решения на грешните.` : `${QUESTIONS.length} multiple-choice tasks, 45 minutes. Then: report by topic, time per question, recommendations and solutions of mistakes.`}
        </p>
        <button onClick={start} className="tap mt-4 rounded-2xl bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground">
          {bg ? "Започни изпита" : "Start exam"}
        </button>
      </section>
    );
  }

  if (done) return <Report answers={answers} times={times} onReset={reset} />;

  const q = QUESTIONS[idx]!;
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return (
    <section className="mt-5 rounded-3xl glass-strong p-5">
      <div className="flex items-center justify-between rounded-2xl bg-card/90 px-4 py-2.5">
        <span className="font-display text-[14px] font-semibold">{idx + 1} / {QUESTIONS.length}</span>
        <span className="font-display text-[15px] font-semibold text-primary-deep">{mm}:{ss}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {QUESTIONS.map((_, i) => (
          <button key={i} onClick={() => go(i)} aria-label={`${i + 1}`}
            className={`size-7 rounded-lg text-[11px] font-semibold ${i === idx ? "bg-ink text-background" : answers[i] !== null ? "bg-primary/25" : "bg-card/70"}`}>{i + 1}</button>
        ))}
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{TOPIC[q.t].label[lang]}</p>
      <p className="mt-1 font-display text-[17px] leading-snug">{q.q[lang]}</p>
      <ProblemDiagram topicId={q.t === "geo" ? "pythagoras" : q.t === "calc" ? "tangent" : ""} prompt={q.q[lang]} className="mt-3" />
      <div className="mt-3 grid grid-cols-2 gap-2">
        {q.options.map((o, j) => (
          <button key={j} onClick={() => setAnswers((a) => a.map((x, k) => (k === idx ? j : x)))}
            className={`tap rounded-xl px-3 py-3 text-left text-[14px] ${answers[idx] === j ? "bg-primary text-primary-foreground" : "bg-card/70"}`}>
            {"АБВГ"[j]}) {o}
          </button>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button disabled={idx === 0} onClick={() => go(idx - 1)} className="tap flex-1 rounded-2xl bg-card py-3 text-sm font-semibold disabled:opacity-40">← {bg ? "Назад" : "Back"}</button>
        {idx < QUESTIONS.length - 1 ? (
          <button onClick={() => go(idx + 1)} className="tap flex-1 rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground">{bg ? "Напред" : "Next"} →</button>
        ) : (
          <button onClick={finish} className="tap flex-1 rounded-2xl bg-ink py-3 text-sm font-semibold text-background">{bg ? "Предай изпита" : "Submit exam"}</button>
        )}
      </div>
    </section>
  );
}

function Report({ answers, times, onReset }: { answers: (number | null)[]; times: number[]; onReset: () => void }) {
  const { lang } = useI18n();
  const bg = lang === "bg";
  const score = answers.filter((a, i) => a === QUESTIONS[i]?.correct).length;
  const total = times.reduce((x, y) => x + y, 0);
  const avg = total / QUESTIONS.length;
  const byTopic = (Object.keys(TOPIC) as TopicKey[]).map((k) => {
    const ids = QUESTIONS.map((q, i) => (q.t === k ? i : -1)).filter((i) => i >= 0);
    const ok = ids.filter((i) => answers[i] === QUESTIONS[i]!.correct).length;
    const time = ids.reduce((x, i) => x + (times[i] ?? 0), 0);
    return { k, ok, n: ids.length, time };
  });
  const weak = byTopic.filter((t) => t.ok < t.n).sort((a, b2) => a.ok / a.n - b2.ok / b2.n);
  const slow = QUESTIONS.map((_, i) => i).filter((i) => (times[i] ?? 0) > avg * 1.8 && answers[i] === QUESTIONS[i]!.correct);
  const wrong = QUESTIONS.map((_, i) => i).filter((i) => answers[i] !== QUESTIONS[i]!.correct);
  const grade = Math.min(6, Math.max(2, 2 + (score / QUESTIONS.length) * 4)).toFixed(2).replace(".", ",");

  return (
    <div className="mt-5 space-y-3">
      <section className="rounded-3xl bg-ink p-5 text-background">
        <p className="text-[12px] uppercase tracking-[0.14em] opacity-70">{bg ? "Резултат" : "Result"}</p>
        <p className="mt-1 font-display text-[32px] leading-none">{score} / {QUESTIONS.length}</p>
        <p className="mt-2 text-[13px] opacity-80">{bg ? `Ориентировъчна оценка ${grade} · време ${fmt(total)} · средно ${fmt(avg)} на въпрос` : `Approx. grade ${grade} · time ${fmt(total)} · avg ${fmt(avg)} per question`}</p>
      </section>

      <section className="rounded-3xl glass-strong p-5">
        <h3 className="font-display text-[16px]">{bg ? "Резултат по теми" : "Score by topic"}</h3>
        <ul className="mt-3 space-y-2.5">
          {byTopic.map((t) => (
            <li key={t.k}>
              <div className="flex justify-between text-[13px]"><span>{TOPIC[t.k].label[lang]}</span><span className="font-semibold">{t.ok}/{t.n} · {fmt(t.time)}</span></div>
              <div className="mt-1 h-2 rounded-full bg-card"><div className={`h-2 rounded-full ${t.ok === t.n ? "bg-primary" : t.ok === 0 ? "bg-coral" : "bg-gold"}`} style={{ width: `${(t.ok / t.n) * 100}%` }} /></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl glass-strong p-5">
        <h3 className="font-display text-[16px]">{bg ? "Време за всеки въпрос" : "Time per question"}</h3>
        <div className="mt-3 grid grid-cols-5 gap-1.5">
          {QUESTIONS.map((q, i) => {
            const ok = answers[i] === q.correct;
            return (
              <div key={i} className={`rounded-lg px-1 py-1.5 text-center text-[11px] ${ok ? "bg-primary/20" : "bg-coral/20"}`}>
                <div className="font-semibold">{i + 1} {ok ? "✓" : "✗"}</div><div>{fmt(times[i] ?? 0)}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl glass-strong p-5">
        <h3 className="font-display text-[16px]">{bg ? "Препоръки за повторение" : "What to revise"}</h3>
        {weak.length === 0 && slow.length === 0 ? (
          <p className="mt-2 text-[14px]">{bg ? "Отлично! Опитай пак за по-кратко време." : "Excellent! Try again faster."}</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {weak.map((t) => (
              <li key={t.k} className="rounded-2xl bg-card/70 p-3 text-[13px]">
                <b>{TOPIC[t.k].label[lang]}</b> — {t.ok === 0 ? (bg ? "започни от урока и формулите." : "start with the lesson and formulas.") : (bg ? "повтори формулите и реши още задачи." : "review formulas and solve more tasks.")}
                <Link to="/learn" search={{ topic: TOPIC[t.k].lesson }} className="ml-1 font-semibold text-primary-deep underline underline-offset-2">{bg ? "Към урока" : "Open lesson"} →</Link>
              </li>
            ))}
            {slow.length > 0 && (
              <li className="rounded-2xl bg-card/70 p-3 text-[13px]">
                {bg ? `Верни, но бавни: въпроси ${slow.map((i) => i + 1).join(", ")}. Упражни ги за скорост.` : `Correct but slow: questions ${slow.map((i) => i + 1).join(", ")}. Practise for speed.`}
              </li>
            )}
          </ul>
        )}
      </section>

      {wrong.length > 0 && (
        <section className="rounded-3xl glass-strong p-5">
          <h3 className="font-display text-[16px]">{bg ? "Преглед на грешките" : "Review of mistakes"}</h3>
          <ol className="mt-3 space-y-3">
            {wrong.map((i) => {
              const q = QUESTIONS[i]!; const a = answers[i];
              return (
                <li key={i} className="rounded-2xl bg-card/70 p-4">
                  <p className="font-display text-[15px] leading-snug">{i + 1}. {q.q[lang]}</p>
                  <ProblemDiagram topicId={q.t === "geo" ? "pythagoras" : q.t === "calc" ? "tangent" : ""} prompt={q.q[lang]} className="mt-3" />
                  <p className="mt-2 text-[13px] text-coral">{bg ? "Твоят отговор" : "Your answer"}: {a === null || a === undefined ? (bg ? "без отговор" : "no answer") : `${"АБВГ"[a]}) ${q.options[a]}`}</p>
                  <p className="text-[13px] font-semibold text-primary-deep">{bg ? "Верен отговор" : "Correct answer"}: {"АБВГ"[q.correct]}) {q.options[q.correct]}</p>
                  <ol className="mt-2 space-y-1.5 rounded-xl bg-accent/70 px-3 py-2.5 text-[13px] text-accent-foreground">
                    {q.steps.map((st, k) => <li key={k}>{k + 1}. {st[lang]}</li>)}
                  </ol>
                </li>
              );
            })}
          </ol>
        </section>
      )}

      <button onClick={onReset} className="tap w-full rounded-2xl bg-ink py-3.5 font-display text-sm font-semibold text-background">{bg ? "Нов опит" : "Try again"}</button>
    </div>
  );
}
