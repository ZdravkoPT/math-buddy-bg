import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { useI18n } from "@/lib/i18n";
import { QuizRun } from "@/components/QuizRun";
import { buildQuiz } from "@/lib/quiz";
import { lessonById, lessonsForGrade } from "@/lib/lessons";
import { TOPIC_LABEL } from "@/lib/math-engine";
import { useStore } from "@/lib/progress";
import { ProblemDiagram } from "@/components/ProblemDiagram";

export const Route = createFileRoute("/learn")({
  validateSearch: (search: Record<string, unknown>) => ({
    topic: typeof search["topic"] === "string" ? (search["topic"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Уроци с обяснения и примерни задачи — МатМентор" },
      {
        name: "description",
        content:
          "Теория по математика за 1.–12. клас: идеята, правилата, примерни задачи с решение стъпка по стъпка и защо се решава точно така.",
      },
      { property: "og:title", content: "Уроци с обяснения и примерни задачи — МатМентор" },
      {
        property: "og:description",
        content: "Чети теорията, виж примерни решени задачи и разбери защо работи, преди да решаваш сам.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Learn,
});

function Learn() {
  const { t, lang } = useI18n();
  const { store, hydrated } = useStore();
  const { topic } = Route.useSearch();

  if (!hydrated) return <Shell><div className="mt-8 h-40 rounded-3xl glass" /></Shell>;

  const grade = store.grade;
  if (!grade) {
    return (
      <Shell>
        <div className="mt-6 rounded-3xl glass p-5 text-center">
          <p className="text-sm text-muted-foreground">{t("pickGrade")}</p>
          <Link
            to="/"
            className="tap mt-4 inline-block rounded-2xl bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground"
          >
            {t("home")}
          </Link>
        </div>
      </Shell>
    );
  }

  const lesson = topic ? lessonById(topic) : undefined;

  if (lesson) {
    return (
      <Shell>
        <section className="rise-in mt-5">
          <Link
            to="/learn"
            search={{ topic: undefined }}
            className="text-[12px] font-semibold text-muted-foreground underline underline-offset-4"
          >
            ← {t("allLessons")}
          </Link>
          <h1 className="mt-2 text-[24px] leading-tight text-balance">
            {TOPIC_LABEL[lesson.topicId]?.[lang] ?? lesson.topicId}
          </h1>
        </section>

        <section className="mt-4 rounded-3xl glass-strong p-5">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {t("theIdea")}
          </p>
          <p className="mt-2 text-[15px] leading-relaxed">{lesson.idea[lang]}</p>
          <p className="mt-4 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {t("whyItWorks")}
          </p>
          <p className="mt-2 rounded-2xl bg-accent/70 px-3.5 py-3 text-[14px] leading-relaxed text-accent-foreground">
            {lesson.why[lang]}
          </p>
        </section>

        <section className="mt-4 rounded-3xl glass p-5">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {t("rulesToKnow")}
          </p>
          <ul className="mt-3 space-y-2.5">
            {lesson.rules.map((r, i) => (
              <li key={i} className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-primary/12 font-display text-[12px] font-semibold text-primary-deep">
                  {i + 1}
                </span>
                <span className="text-[14px] leading-relaxed">{r[lang]}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-4">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {t("workedExamples")}
          </p>
          <div className="mt-3 space-y-3">
            {lesson.examples.map((ex, i) => (
              <article key={i} className="rounded-3xl glass-strong p-5">
                <p className="font-display text-[20px] leading-snug">{ex.task[lang]}</p>
                <ProblemDiagram topicId={lesson.topicId} prompt={ex.task[lang]} className="mt-3" />
                <ol className="mt-3 space-y-2.5">
                  {ex.steps.map((s, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-primary/12 font-display text-[12px] font-semibold text-primary-deep">
                        {j + 1}
                      </span>
                      <span className="text-[14px] leading-relaxed">{s[lang]}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-3 rounded-2xl bg-card/70 px-3.5 py-3 text-[13px] leading-relaxed">
                  <span className="font-display font-semibold text-primary-deep">{t("whyThisStep")}: </span>
                  {ex.why[lang]}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-4 rounded-3xl glass p-5">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {t("commonMistakes")}
          </p>
          <ul className="mt-3 space-y-2.5">
            {lesson.mistakes.map((m, i) => (
              <li key={i} className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-coral/15 text-[12px] font-semibold text-coral">
                  !
                </span>
                <span className="text-[14px] leading-relaxed">{m[lang]}</span>
              </li>
            ))}
          </ul>
        </section>

        <QuizRun
          key={lesson.topicId}
          title={lang === "bg" ? "Тест по темата (10 въпроса)" : "Topic test (10 questions)"}
          minutes={15}
          build={() => buildQuiz([lesson.topicId], 10, 3, lang)}
        />

        <Link
          to="/practice"
          search={{ topic: lesson.topicId, paper: undefined }}
          className="tap mt-5 block rounded-2xl bg-primary py-3.5 text-center font-display text-sm font-semibold text-primary-foreground"
        >
          {t("practiceThis")} →
        </Link>
      </Shell>
    );
  }

  const lessons = lessonsForGrade(grade);

  return (
    <Shell>
      <section className="rise-in mt-5">
        <h1 className="text-[26px] leading-tight text-balance">{t("learn")}</h1>
        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{t("learnSub")}</p>
      </section>

      <section className="mt-5">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {grade}. {t("grade")} · {t("lessons")}
        </p>
        <div className="mt-3 space-y-3">
          {lessons.map((l) => (
            <Link
              key={l.topicId}
              to="/learn"
              search={{ topic: l.topicId }}
              className="tap block rounded-3xl glass-strong p-5"
            >
              <h2 className="font-display text-[18px] leading-snug">
                {TOPIC_LABEL[l.topicId]?.[lang] ?? l.topicId}
              </h2>
              <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
                {l.idea[lang]}
              </p>
              <span className="mt-3 inline-block text-[12px] font-semibold text-primary-deep">
                {t("openLesson")} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Link
        to="/formulas"
        className="tap mt-5 block rounded-2xl bg-ink py-3.5 text-center font-display text-sm font-semibold text-background"
      >
        {t("formulas")}
      </Link>
    </Shell>
  );
}
