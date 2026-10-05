import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Shell";
import { QuizRun } from "@/components/QuizRun";
import { useI18n } from "@/lib/i18n";
import { useStore, startLevel } from "@/lib/progress";
import { competitionsForGrade, competitionTopics, logicProblem, type Competition } from "@/lib/competitions";
import { buildQuiz } from "@/lib/quiz";

export const Route = createFileRoute("/competitions")({
  head: () => ({
    meta: [
      { title: "Математически състезания 1–12 клас — МатМентор" },
      { name: "description", content: "Пробни варианти за Кенгуру, Черноризец Храбър, СМТ, ОМТ и други състезания с таймер и решения стъпка по стъпка." },
      { property: "og:title", content: "Математически състезания — МатМентор" },
      { property: "og:description", content: "Подготви се за математически състезания: пробни варианти, логически задачи и решения." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Competitions,
});

function Competitions() {
  const { lang } = useI18n();
  const bg = lang === "bg";
  const { store, hydrated } = useStore();
  const [open, setOpen] = useState<Competition | null>(null);
  if (!hydrated) return <Shell><div className="mt-8 h-40 rounded-3xl glass" /></Shell>;
  const grade = store.grade;
  if (!grade) {
    return <Shell><div className="mt-6 rounded-3xl glass p-5 text-center"><Link to="/" className="tap inline-block rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">{bg ? "Избери клас" : "Pick a grade"}</Link></div></Shell>;
  }
  const level = Math.min(5, startLevel(grade, store.age ?? grade + 6) + 1);
  const list = competitionsForGrade(grade);

  return (
    <Shell>
      <section className="rise-in mt-5">
        <h1 className="text-[26px] leading-tight text-balance">{bg ? "Състезания" : "Competitions"}</h1>
        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
          {bg ? `Пробни варианти за ${grade}. клас. Задачите са наши, от същия тип като на състезанието; оригиналните варианти са в официалния архив.` : `Practice variants for grade ${grade}. Tasks are our own, of the same type; originals are in the official archive.`}
        </p>
      </section>
      {open ? (
        <QuizRun key={open.id} title={open.name[lang]} minutes={open.minutes} onExit={() => setOpen(null)}
          build={() => buildQuiz(competitionTopics(grade), open.count, level, lang, (l) => logicProblem(grade, l))} />
      ) : (
        <div className="mt-4 space-y-3">
          {list.map((c) => (
            <article key={c.id} className="rounded-3xl glass-strong p-5">
              <h2 className="font-display text-[18px] leading-snug">{c.name[lang]}</h2>
              <p className="mt-1 text-[12px] text-muted-foreground">{c.grades[0]}.–{c.grades[1]}. {bg ? "клас" : "grade"} · {c.count} {bg ? "задачи" : "tasks"} · {c.minutes} {bg ? "мин" : "min"}</p>
              <p className="mt-2 text-[14px] leading-relaxed">{c.about[lang]}</p>
              <div className="mt-3 flex gap-2">
                <button onClick={() => setOpen(c)} className="tap flex-1 rounded-2xl bg-primary py-3 font-display text-sm font-semibold text-primary-foreground">{bg ? "Пробен вариант" : "Practice variant"}</button>
                <a href={c.archiveUrl} target="_blank" rel="noreferrer" className="tap rounded-2xl bg-card px-4 py-3 text-sm">{bg ? "Архив ↗" : "Archive ↗"}</a>
              </div>
            </article>
          ))}
        </div>
      )}
    </Shell>
  );
}
