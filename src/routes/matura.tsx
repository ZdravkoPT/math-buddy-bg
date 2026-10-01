import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Shell";
import { MockExam } from "@/components/MockExam";
import { useI18n } from "@/lib/i18n";
import type { Bi } from "@/lib/materials";

export const Route = createFileRoute("/matura")({
  head: () => ({
    meta: [
      { title: "Помагало за матура по математика (ДЗИ) — МатМентор" },
      { name: "description", content: "Теми, формули и решени стъпка по стъпка задачи за държавния зрелостен изпит по математика." },
      { property: "og:title", content: "Помагало за матура по математика — МатМентор" },
      { property: "og:description", content: "Подготви се за ДЗИ: теми, формули и задачи с решение стъпка по стъпка." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Matura,
});

type Task = { q: Bi; steps: Bi[]; answer: string };
type Topic = { id: string; title: Bi; formulas: string[]; tasks: Task[] };

const b = (bg: string, en: string): Bi => ({ bg, en });

const TOPICS: Topic[] = [
  {
    id: "quad",
    title: b("Квадратни уравнения и неравенства", "Quadratic equations and inequalities"),
    formulas: ["D = b² − 4ac", "x₁,₂ = (−b ± √D) / 2a", "x₁ + x₂ = −b/a;  x₁x₂ = c/a", "ax² + bx + c = a(x − x₁)(x − x₂)"],
    tasks: [
      {
        q: b("Реши неравенството x² − 5x + 6 < 0.", "Solve x² − 5x + 6 < 0."),
        steps: [
          b("Решаваме x² − 5x + 6 = 0: D = 25 − 24 = 1.", "Solve x² − 5x + 6 = 0: D = 25 − 24 = 1."),
          b("x₁ = (5 − 1)/2 = 2, x₂ = (5 + 1)/2 = 3.", "x₁ = (5 − 1)/2 = 2, x₂ = (5 + 1)/2 = 3."),
          b("a = 1 > 0, параболата е отворена нагоре — отрицателна е между корените.", "a = 1 > 0, the parabola opens up — negative between the roots."),
        ],
        answer: "x ∈ (2; 3)",
      },
    ],
  },
  {
    id: "exp",
    title: b("Показателни и логаритмични уравнения", "Exponential and logarithmic equations"),
    formulas: ["aˣ = aʸ ⇔ x = y", "log_a b = c ⇔ aᶜ = b", "log(xy) = log x + log y", "log xⁿ = n log x"],
    tasks: [
      {
        q: b("Реши log₂(x − 1) + log₂(x + 1) = 3.", "Solve log₂(x − 1) + log₂(x + 1) = 3."),
        steps: [
          b("ДМ: x − 1 > 0 и x + 1 > 0 ⇒ x > 1.", "Domain: x − 1 > 0 and x + 1 > 0 ⇒ x > 1."),
          b("Сбор на логаритми: log₂((x − 1)(x + 1)) = 3 ⇒ x² − 1 = 2³ = 8.", "Sum of logs: log₂((x − 1)(x + 1)) = 3 ⇒ x² − 1 = 8."),
          b("x² = 9 ⇒ x = ±3.", "x² = 9 ⇒ x = ±3."),
          b("x = −3 не е в ДМ, остава x = 3.", "x = −3 is outside the domain, so x = 3."),
        ],
        answer: "x = 3",
      },
    ],
  },
  {
    id: "trig",
    title: b("Тригонометрия и решаване на триъгълник", "Trigonometry and solving triangles"),
    formulas: ["sin²α + cos²α = 1", "a/sin α = 2R", "c² = a² + b² − 2ab cos γ", "S = ½ ab sin γ"],
    tasks: [
      {
        q: b("В △ABC: a = 5, b = 8, γ = 60°. Намери c и лицето.", "In △ABC: a = 5, b = 8, γ = 60°. Find c and the area."),
        steps: [
          b("Две страни и ъгъл между тях → косинусова теорема.", "Two sides and included angle → law of cosines."),
          b("c² = 25 + 64 − 2·5·8·½ = 89 − 40 = 49 ⇒ c = 7.", "c² = 25 + 64 − 2·5·8·½ = 49 ⇒ c = 7."),
          b("S = ½·5·8·sin 60° = 20·√3/2 = 10√3.", "S = ½·5·8·sin 60° = 10√3."),
        ],
        answer: "c = 7, S = 10√3",
      },
    ],
  },
  {
    id: "seq",
    title: b("Прогресии", "Progressions"),
    formulas: ["aₙ = a₁ + (n − 1)d", "Sₙ = n(a₁ + aₙ)/2", "aₙ = a₁qⁿ⁻¹", "Sₙ = a₁(qⁿ − 1)/(q − 1)"],
    tasks: [
      {
        q: b("Аритметична прогресия: a₃ = 7, a₇ = 19. Намери S₁₀.", "Arithmetic progression: a₃ = 7, a₇ = 19. Find S₁₀."),
        steps: [
          b("a₇ − a₃ = 4d = 12 ⇒ d = 3.", "a₇ − a₃ = 4d = 12 ⇒ d = 3."),
          b("a₁ = a₃ − 2d = 7 − 6 = 1.", "a₁ = a₃ − 2d = 1."),
          b("a₁₀ = 1 + 9·3 = 28; S₁₀ = 10(1 + 28)/2 = 145.", "a₁₀ = 28; S₁₀ = 10(1 + 28)/2 = 145."),
        ],
        answer: "S₁₀ = 145",
      },
    ],
  },
  {
    id: "prob",
    title: b("Комбинаторика, вероятности и статистика", "Combinatorics, probability and statistics"),
    formulas: ["C(n,k) = n!/(k!(n − k)!)", "P(A) = m/n", "P(Ā) = 1 − P(A)", "x̄ = Σxᵢ / n"],
    tasks: [
      {
        q: b("В кутия има 4 бели и 6 черни топки. Теглим 2. Каква е вероятността и двете да са бели?", "A box has 4 white and 6 black balls. Draw 2. Probability both are white?"),
        steps: [
          b("Редът няма значение → комбинации. Всички: C(10,2) = 45.", "Order doesn't matter → combinations. All: C(10,2) = 45."),
          b("Благоприятни: C(4,2) = 6.", "Favourable: C(4,2) = 6."),
          b("P = 6/45 = 2/15.", "P = 6/45 = 2/15."),
        ],
        answer: "2/15",
      },
    ],
  },
  {
    id: "geo",
    title: b("Планиметрия и стереометрия", "Plane and solid geometry"),
    formulas: ["a² + b² = c²", "S = (a + b)h/2", "V(призма) = B·h", "V(пирамида) = B·h/3", "V(конус) = πr²h/3"],
    tasks: [
      {
        q: b("Правилна четириъгълна пирамида: основен ръб 6, височина 4. Намери обема и апотемата.", "Regular square pyramid: base edge 6, height 4. Find volume and apothem."),
        steps: [
          b("B = 6² = 36; V = 36·4/3 = 48.", "B = 36; V = 36·4/3 = 48."),
          b("Апотемата е хипотенуза с катети h = 4 и половин ръб 3.", "The apothem is a hypotenuse with legs h = 4 and half-edge 3."),
          b("k = √(16 + 9) = 5.", "k = √(16 + 9) = 5."),
        ],
        answer: "V = 48, k = 5",
      },
    ],
  },
  {
    id: "calc",
    title: b("Производни и изследване на функция", "Derivatives and function analysis"),
    formulas: ["(xⁿ)′ = nxⁿ⁻¹", "(uv)′ = u′v + uv′", "f′(x₀) = 0 → възможен екстремум", "∫ₐᵇ f dx = F(b) − F(a)"],
    tasks: [
      {
        q: b("Намери екстремумите на f(x) = x³ − 3x.", "Find the extrema of f(x) = x³ − 3x."),
        steps: [
          b("f′(x) = 3x² − 3.", "f′(x) = 3x² − 3."),
          b("f′(x) = 0 ⇒ x = ±1.", "f′(x) = 0 ⇒ x = ±1."),
          b("f′ > 0 при x < −1, < 0 между −1 и 1, > 0 при x > 1.", "f′ > 0 for x < −1, < 0 on (−1;1), > 0 for x > 1."),
          b("Максимум f(−1) = 2, минимум f(1) = −2.", "Max f(−1) = 2, min f(1) = −2."),
        ],
        answer: "max 2 при x = −1; min −2 при x = 1",
      },
    ],
  },
];

function TaskCard({ task }: { task: Task }) {
  const { lang } = useI18n();
  const [shown, setShown] = useState(0);
  const done = shown >= task.steps.length;
  return (
    <div className="mt-3 rounded-2xl bg-card/70 p-4">
      <p className="font-display text-[16px] leading-snug">{task.q[lang]}</p>
      <ol className="mt-3 space-y-2">
        {task.steps.slice(0, shown).map((s, i) => (
          <li key={i} className="flex gap-3 text-[14px] leading-relaxed">
            <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-primary/12 font-display text-[12px] font-semibold text-primary-deep">{i + 1}</span>
            <span>{s[lang]}</span>
          </li>
        ))}
      </ol>
      {done ? (
        <p className="mt-3 rounded-xl bg-accent/70 px-3 py-2 font-display text-[14px] font-semibold text-accent-foreground">
          {lang === "bg" ? "Отговор" : "Answer"}: {task.answer}
        </p>
      ) : (
        <button onClick={() => setShown(shown + 1)} className="tap mt-3 rounded-xl bg-primary px-4 py-2.5 font-display text-[13px] font-semibold text-primary-foreground">
          {shown === 0 ? (lang === "bg" ? "Покажи първата стъпка" : "Show first step") : lang === "bg" ? "Следваща стъпка" : "Next step"}
        </button>
      )}
    </div>
  );
}

function Matura() {
  const { lang, t } = useI18n();
  return (
    <Shell>
      <section className="rise-in mt-5">
        <h1 className="text-[26px] leading-tight text-balance">{lang === "bg" ? "Помагало за матура (ДЗИ)" : "Matura handbook"}</h1>
        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
          {lang === "bg"
            ? "Основните теми от изпита: формули и типова задача. Опитай сам, после отваряй решението стъпка по стъпка."
            : "Key exam topics: formulas and a typical task. Try first, then reveal the solution step by step."}
        </p>
      </section>
      <MockExam />
      <div className="mt-5 space-y-3">
        {TOPICS.map((tp) => (
          <section key={tp.id} className="rounded-3xl glass-strong p-5">
            <h2 className="font-display text-[17px] leading-snug">{tp.title[lang]}</h2>
            <p className="mt-3 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t("formulas")}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {tp.formulas.map((f) => (
                <li key={f} className="rounded-xl bg-card/70 px-3 py-1.5 font-display text-[13px]">{f}</li>
              ))}
            </ul>
            {tp.tasks.map((task, i) => <TaskCard key={i} task={task} />)}
          </section>
        ))}
      </div>
    </Shell>
  );
}
