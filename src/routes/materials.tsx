import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { useI18n } from "@/lib/i18n";
import { KIND_LABEL, papersForGrade, unitsForGrade } from "@/lib/materials";
import { useStore } from "@/lib/progress";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title: "Учебни материали 1–12 клас — МатМентор" },
      {
        name: "description",
        content:
          "Раздели от учебника, контролни работи, НВО за 4., 7. и 10. клас и матура по математика с решения стъпка по стъпка.",
      },
      { property: "og:title", content: "Учебни материали 1–12 клас — МатМентор" },
      {
        property: "og:description",
        content: "Задачи по български учебни програми: учебник, контролни, НВО и ДЗИ.",
      },
    ],
  }),
  component: Materials,
});

function Materials() {
  const { t, lang } = useI18n();
  const { store, hydrated } = useStore();

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

  const units = unitsForGrade(grade);
  const papers = papersForGrade(grade);

  return (
    <Shell>
      <section className="rise-in mt-5">
        <h1 className="text-[26px] leading-tight text-balance">{t("materials")}</h1>
        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{t("materialsSub")}</p>
      </section>

      <section className="mt-5 rounded-3xl glass p-5">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {grade}. {t("grade")} · {t("units")}
        </p>
        <ol className="mt-3 space-y-2.5">
          {units.map((u, i) => (
            <li key={u.bg} className="flex gap-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-primary/12 font-display text-[12px] font-semibold text-primary-deep">
                {i + 1}
              </span>
              <span className="text-[14px] leading-relaxed">{u[lang]}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-4">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {t("papers")}
        </p>
        {papers.length === 0 && (
          <p className="mt-3 rounded-2xl glass px-4 py-3 text-[13px] text-muted-foreground">{t("noPapers")}</p>
        )}
        <div className="mt-3 space-y-3">
          {papers.map((p) => (
            <article key={p.id} className="rounded-3xl glass-strong p-5">
              <span className="inline-block rounded-full bg-primary/12 px-2.5 py-1 text-[11px] font-semibold text-primary-deep">
                {KIND_LABEL[p.kind][lang]}
              </span>
              <h2 className="mt-2.5 font-display text-[18px] leading-snug">{p.title[lang]}</h2>
              <p className="mt-1 text-[12px] text-muted-foreground">
                {p.source[lang]} · {p.tasks.length} {t("task").toLowerCase()}
              </p>
              <Link
                to="/practice"
                search={{ topic: undefined, paper: p.id }}
                className="tap mt-4 block rounded-2xl bg-primary py-3 text-center font-display text-sm font-semibold text-primary-foreground"
              >
                {t("openPaper")}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}
