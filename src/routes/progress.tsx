import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { useI18n } from "@/lib/i18n";
import { TOPIC_LABEL, topicsForGrade } from "@/lib/math-engine";
import { masteryPct, resetAll, streakDays, topicState, useStore } from "@/lib/progress";

export const Route = createFileRoute("/progress")({
  head: () => ({
    meta: [
      { title: "Напредък и учебно време — МатМентор" },
      {
        name: "description",
        content: "Учебно време, точност, дни поред и майсторство по всяка тема от учебната програма.",
      },
      { property: "og:title", content: "Напредък и учебно време — МатМентор" },
      { property: "og:description", content: "Виж как расте детето по всяка тема по математика." },
    ],
  }),
  component: ProgressPage,
});


function ProgressPage() {
  const { t, lang } = useI18n();
  const { store } = useStore();

  const days = Object.values(store.days);
  const totalMs = days.reduce((a, d) => a + d.ms, 0);
  const total = days.reduce((a, d) => a + d.total, 0);
  const correct = days.reduce((a, d) => a + d.correct, 0);
  const acc = total ? Math.round((correct / total) * 100) : 0;
  const hours = Math.floor(totalMs / 3600000);
  const mins = Math.floor((totalMs % 3600000) / 60000);
  const topics = store.grade ? topicsForGrade(store.grade) : [];

  return (
    <Shell>
      <h1 className="mt-5 text-[26px]">{t("progress")}</h1>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl glass p-4">
          <p className="font-display text-[22px] font-semibold leading-none">
            {hours}
            <span className="text-sm text-muted-foreground">h</span> {mins}
            <span className="text-sm text-muted-foreground">m</span>
          </p>
          <p className="mt-1.5 text-[11px] text-muted-foreground">{t("studyTime")}</p>
        </div>
        <div className="rounded-2xl glass p-4">
          <p className="font-display text-[22px] font-semibold leading-none">
            {acc}
            <span className="text-sm text-muted-foreground">%</span>
          </p>
          <p className="mt-1.5 text-[11px] text-muted-foreground">{t("accuracy")}</p>
        </div>
        <div className="rounded-2xl glass p-4">
          <p className="font-display text-[22px] font-semibold leading-none text-coral">
            {streakDays(store)}
          </p>
          <p className="mt-1.5 text-[11px] text-muted-foreground">{t("streak")}</p>
        </div>
      </div>

      <section className="mt-6">
        <h2 className="text-[17px]">{t("mastery")}</h2>
        <div className="mt-3 space-y-3 rounded-3xl glass p-5">
          {topics.length === 0 && <p className="text-sm text-muted-foreground">{t("pickGrade")}</p>}
          {topics.map((id) => {
            const st = topicState(store, id, 3);
            const pct = masteryPct(st);
            return (
              <div key={id}>
                <div className="mb-1.5 flex justify-between text-[12px]">
                  <span className="font-medium">{TOPIC_LABEL[id]?.[lang] ?? id}</span>
                  <span className="text-muted-foreground">
                    {t("level")} {st.level} · {pct}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="bar-fill h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {!store.subscribed && (
        <Link
          to="/pricing"
          className="tap mt-6 block rounded-2xl bg-ink px-5 py-4 text-background"
        >
          <span className="font-display text-[15px] font-semibold">
            {t("premium")} · 4,50 {t("perMonth")}
          </span>
          <span className="mt-1 block text-[12px] opacity-70">{t("cancelAny")}</span>
        </Link>
      )}

      <button
        onClick={() => resetAll()}
        className="tap mt-4 w-full rounded-2xl glass py-3 text-[13px] font-semibold text-muted-foreground"
      >
        {t("reset")}
      </button>
    </Shell>
  );
}
