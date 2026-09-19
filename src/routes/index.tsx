import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Shell";
import { useI18n } from "@/lib/i18n";
import { TOPIC_LABEL, topicsForGrade } from "@/lib/math-engine";
import { masteryPct, startLevel, today, topicState, update, useStore } from "@/lib/progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "МатМентор — адаптивна математика 1–12 клас" },
      {
        name: "description",
        content:
          "Избери клас и възраст и започни. Всяка задача е с решение стъпка по стъпка. 3 часа безплатно, после 4,50 € на месец.",
      },
      { property: "og:title", content: "МатМентор — адаптивна математика 1–12 клас" },
      {
        property: "og:description",
        content: "Задачи по учебната програма с обяснение стъпка по стъпка за 1–12 клас.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, lang } = useI18n();
  const { store } = useStore();
  const navigate = useNavigate();
  const [grade, setGrade] = useState<number | null>(null);
  const [age, setAge] = useState<number | null>(null);

  const chosenGrade = store.grade;

  if (!chosenGrade) {
    const g = grade;
    const ages = Array.from({ length: 14 }, (_, i) => i + 6);
    return (
      <Shell>
        <section className="rise-in mt-5">
          <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {t("tagline")}
          </p>
          <h1 className="mt-2 text-[34px] leading-[1.02] text-balance">{t("heroTitle")}</h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{t("heroSub")}</p>
        </section>

        <section className="mt-6 rounded-3xl glass p-5">
          <p className="text-[12px] font-semibold text-muted-foreground">{t("pickGrade")}</p>
          <div className="mt-3 grid grid-cols-6 gap-1.5">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setGrade(n)}
                className={`tap h-10 rounded-xl font-display text-[13px] font-semibold ${
                  g === n ? "bg-primary text-primary-foreground" : "bg-card/70 text-foreground"
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          <p className="mt-5 text-[12px] font-semibold text-muted-foreground">{t("age")}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {ages.map((n) => (
              <button
                key={n}
                onClick={() => setAge(n)}
                className={`tap h-10 w-11 rounded-xl font-display text-[13px] font-semibold ${
                  age === n ? "bg-primary text-primary-foreground" : "bg-card/70 text-foreground"
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          <button
            disabled={!g || !age}
            onClick={() => {
              if (!g || !age) return;
              const lvl = startLevel(g, age);
              update((s) => {
                s.grade = g;
                s.age = age;
                topicsForGrade(g).forEach((id) => {
                  if (!s.topics[id]) s.topics[id] = { level: lvl, correct: 0, total: 0 };
                });
              });
              navigate({ to: "/practice", search: { topic: undefined } });
            }}
            className="tap mt-6 w-full rounded-2xl bg-primary py-3.5 font-display text-sm font-semibold text-primary-foreground disabled:opacity-40"
          >
            {t("start")}
          </button>
        </section>
      </Shell>
    );
  }

  const topics = topicsForGrade(chosenGrade);
  const day = store.days[today()];

  return (
    <Shell>
      <section className="rise-in mt-5 rounded-3xl glass p-5">
        <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {t("todayMission")}
        </p>
        <h1 className="mt-1.5 text-[24px] leading-tight text-balance">
          {chosenGrade}. {t("grade")} · {store.age} {t("years")}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{t("missionSub")}</p>
        <div className="mt-4 flex items-center gap-3">
          <Link
            to="/practice"
            search={{ topic: undefined, paper: undefined }}
            className="tap flex-1 rounded-2xl bg-primary py-3.5 text-center font-display text-sm font-semibold text-primary-foreground"
          >
            {t("continue")}
          </Link>
          <div className="rounded-2xl bg-card/70 px-4 py-2.5 text-center">
            <p className="font-display text-sm font-semibold leading-none">{day?.total ?? 0}</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">{t("solvedToday")}</p>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[17px]">{t("skillMap")}</h2>
          <span className="text-[12px] text-muted-foreground">
            {chosenGrade}. {t("grade")}
          </span>
        </div>
        <div className="mt-3 space-y-2.5">
          {topics.map((id) => {
            const st = topicState(store, id, 3);
            const pct = masteryPct(st);
            return (
              <Link
                key={id}
                to="/practice"
                search={{ topic: id, paper: undefined }}
                className="tap flex items-center gap-3 rounded-2xl glass p-3"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent font-display text-sm font-semibold text-accent-foreground">
                  {st.level}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[15px] font-semibold leading-tight">
                    {TOPIC_LABEL[id]?.[lang] ?? id}
                  </span>
                  <span className="mt-1.5 block h-1.5 overflow-hidden rounded-full bg-secondary">
                    <span
                      className="bar-fill block h-full rounded-full bg-primary"
                      style={{ width: `${pct}%` }}
                    />
                  </span>
                </span>
                <span className="text-[11px] font-medium text-primary-deep">{pct}%</span>
              </Link>
            );
          })}
        </div>
      </section>

      <button
        onClick={() => update((s) => { s.grade = null; s.age = null; })}
        className="tap mt-6 w-full rounded-2xl glass py-3 text-[13px] font-semibold text-muted-foreground"
      >
        {t("changeGrade")}
      </button>
    </Shell>
  );
}
