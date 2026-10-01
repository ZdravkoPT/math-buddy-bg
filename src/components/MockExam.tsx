import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import type { Bi } from "@/lib/materials";

type Q = { q: Bi; options: string[]; correct: number; steps: Bi[] };
const b = (bg: string, en: string): Bi => ({ bg, en });

const QUESTIONS: Q[] = [
  { q: b("Корените на x² − 7x + 10 = 0 са:", "The roots of x² − 7x + 10 = 0 are:"), options: ["2 и 5", "−2 и −5", "1 и 10", "3 и 4"], correct: 0,
    steps: [b("D = 49 − 40 = 9, √D = 3.", "D = 49 − 40 = 9, √D = 3."), b("x = (7 ± 3)/2 ⇒ 2 и 5.", "x = (7 ± 3)/2 ⇒ 2 and 5.")] },
  { q: b("Стойността на log₃ 81 е:", "The value of log₃ 81 is:"), options: ["3", "4", "27", "9"], correct: 1,
    steps: [b("81 = 3⁴.", "81 = 3⁴."), b("log₃ 3⁴ = 4.", "log₃ 3⁴ = 4.")] },
  { q: b("Решенията на 2ˣ⁺¹ = 16 са:", "Solve 2ˣ⁺¹ = 16:"), options: ["x = 4", "x = 2", "x = 3", "x = 8"], correct: 2,
    steps: [b("16 = 2⁴ ⇒ x + 1 = 4.", "16 = 2⁴ ⇒ x + 1 = 4."), b("x = 3.", "x = 3.")] },
  { q: b("Ако sin α = 3/5 и α е остър, то cos α =", "If sin α = 3/5 and α is acute, cos α ="), options: ["4/5", "3/4", "−4/5", "5/4"], correct: 0,
    steps: [b("cos²α = 1 − 9/25 = 16/25.", "cos²α = 1 − 9/25 = 16/25."), b("α е остър ⇒ cos α = 4/5.", "α acute ⇒ cos α = 4/5.")] },
  { q: b("Аритметична прогресия с a₁ = 2, d = 3. Колко е a₁₀?", "Arithmetic progression a₁ = 2, d = 3. Find a₁₀."), options: ["29", "32", "30", "27"], correct: 0,
    steps: [b("a₁₀ = a₁ + 9d = 2 + 27.", "a₁₀ = a₁ + 9d = 2 + 27."), b("a₁₀ = 29.", "a₁₀ = 29.")] },
  { q: b("По колко начина могат да се изберат 3 ученици от 7?", "In how many ways can 3 students be chosen from 7?"), options: ["210", "35", "21", "343"], correct: 1,
    steps: [b("Редът няма значение → C(7,3).", "Order doesn't matter → C(7,3)."), b("C(7,3) = 7·6·5/(3·2·1) = 35.", "C(7,3) = 7·6·5/6 = 35.")] },
  { q: b("Хвърля се зар. Вероятността да падне четно число е:", "A die is rolled. Probability of an even number:"), options: ["1/6", "1/3", "1/2", "2/3"], correct: 2,
    steps: [b("Благоприятни: 2, 4, 6 → m = 3; всички n = 6.", "Favourable 2, 4, 6 → m = 3; n = 6."), b("P = 3/6 = 1/2.", "P = 3/6 = 1/2.")] },
  { q: b("Производната на f(x) = 3x² − 4x + 1 е:", "The derivative of f(x) = 3x² − 4x + 1 is:"), options: ["6x − 4", "3x − 4", "6x + 1", "6x² − 4"], correct: 0,
    steps: [b("(3x²)′ = 6x, (−4x)′ = −4, (1)′ = 0.", "(3x²)′ = 6x, (−4x)′ = −4, (1)′ = 0."), b("f′(x) = 6x − 4.", "f′(x) = 6x − 4.")] },
  { q: b("Катетите на правоъгълен триъгълник са 9 и 12. Хипотенузата е:", "Legs of a right triangle are 9 and 12. The hypotenuse is:"), options: ["21", "15", "√63", "13"], correct: 1,
    steps: [b("c² = 81 + 144 = 225.", "c² = 81 + 144 = 225."), b("c = 15.", "c = 15.")] },
  { q: b("Обемът на цилиндър с r = 3 и h = 5 е:", "Volume of a cylinder with r = 3, h = 5:"), options: ["15π", "30π", "45π", "75π"], correct: 2,
    steps: [b("V = πr²h.", "V = πr²h."), b("V = π·9·5 = 45π.", "V = π·9·5 = 45π.")] },
];

const LIMIT = 30 * 60;

export function MockExam() {
  const { lang } = useI18n();
  const bg = lang === "bg";
  const [started, setStarted] = useState(false);
  const [left, setLeft] = useState(LIMIT);
  const [answers, setAnswers] = useState<(number | null)[]>(QUESTIONS.map(() => null));
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!started || done) return;
    const id = setInterval(() => setLeft((l) => (l <= 1 ? (setDone(true), 0) : l - 1)), 1000);
    return () => clearInterval(id);
  }, [started, done]);

  const score = answers.filter((a, i) => a === QUESTIONS[i]?.correct).length;
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  if (!started) {
    return (
      <section className="mt-5 rounded-3xl bg-ink p-5 text-background">
        <h2 className="font-display text-[18px]">{bg ? "Пробна матура" : "Practice matura"}</h2>
        <p className="mt-1.5 text-[13px] leading-relaxed opacity-80">
          {bg ? "10 задачи с избираем отговор, 30 минути. След края виждаш точките и решение стъпка по стъпка." : "10 multiple-choice tasks, 30 minutes. At the end you see your score and step-by-step solutions."}
        </p>
        <button onClick={() => setStarted(true)} className="tap mt-4 rounded-2xl bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground">
          {bg ? "Започни изпита" : "Start exam"}
        </button>
      </section>
    );
  }

  const reset = () => { setStarted(false); setDone(false); setLeft(LIMIT); setAnswers(QUESTIONS.map(() => null)); };

  return (
    <section className="mt-5 rounded-3xl glass-strong p-5">
      <div className="sticky top-2 z-10 flex items-center justify-between rounded-2xl bg-card/90 px-4 py-2.5">
        <span className="font-display text-[15px] font-semibold">{bg ? "Пробна матура" : "Practice matura"}</span>
        <span className="font-display text-[15px] font-semibold text-primary-deep">
          {done ? `${score} / ${QUESTIONS.length}` : `${mm}:${ss}`}
        </span>
      </div>
      <ol className="mt-4 space-y-4">
        {QUESTIONS.map((q, i) => (
          <li key={i} className="rounded-2xl bg-card/70 p-4">
            <p className="font-display text-[15px] leading-snug">{i + 1}. {q.q[lang]}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {q.options.map((o, j) => {
                const picked = answers[i] === j;
                const state = done ? (j === q.correct ? "bg-primary text-primary-foreground" : picked ? "bg-coral/20 text-coral" : "bg-background/60") : picked ? "bg-primary text-primary-foreground" : "bg-background/60";
                return (
                  <button key={j} disabled={done} onClick={() => setAnswers((a) => a.map((x, k) => (k === i ? j : x)))} className={`tap rounded-xl px-3 py-2.5 text-left text-[14px] ${state}`}>
                    {"АБВГ"[j]}) {o}
                  </button>
                );
              })}
            </div>
            {done && (
              <ol className="mt-3 space-y-1.5 rounded-xl bg-accent/70 px-3 py-2.5 text-[13px] text-accent-foreground">
                {q.steps.map((s, k) => <li key={k}>{k + 1}. {s[lang]}</li>)}
              </ol>
            )}
          </li>
        ))}
      </ol>
      {done ? (
        <button onClick={reset} className="tap mt-4 w-full rounded-2xl bg-ink py-3.5 font-display text-sm font-semibold text-background">
          {bg ? "Нов опит" : "Try again"}
        </button>
      ) : (
        <button onClick={() => setDone(true)} className="tap mt-4 w-full rounded-2xl bg-primary py-3.5 font-display text-sm font-semibold text-primary-foreground">
          {bg ? "Предай изпита" : "Submit exam"}
        </button>
      )}
    </section>
  );
}
