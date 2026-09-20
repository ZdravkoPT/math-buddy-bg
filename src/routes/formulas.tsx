import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { FORMULA_SECTIONS } from "@/lib/formulas";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/formulas")({
  head: () => ({
    meta: [
      { title: "Помагало с формули 1–12 клас — МатМентор" },
      {
        name: "description",
        content:
          "Всички формули по математика за българското училище: дроби и проценти, тъждества, уравнения, геометрия, тригонометрия, прогресии, логаритми, производни и интеграли.",
      },
      { property: "og:title", content: "Помагало с формули 1–12 клас — МатМентор" },
      {
        property: "og:description",
        content: "Бърз справочник с формулите, които се търсят на контролно, НВО и матура.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Formulas,
});

function Formulas() {
  const { t, lang } = useI18n();

  return (
    <Shell>
      <section className="rise-in mt-5">
        <h1 className="text-[26px] leading-tight text-balance">{t("formulas")}</h1>
        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{t("formulasSub")}</p>
      </section>

      <div className="mt-5 space-y-3">
        {FORMULA_SECTIONS.map((s) => (
          <section key={s.id} className="rounded-3xl glass-strong p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-[17px] leading-snug">{s.title[lang]}</h2>
              <span className="shrink-0 rounded-full bg-primary/12 px-2.5 py-1 text-[11px] font-semibold text-primary-deep">
                {s.grades} {t("grades")}
              </span>
            </div>
            <ul className="mt-3 space-y-2.5">
              {s.rows.map((r, i) => (
                <li key={i} className="rounded-2xl bg-card/70 px-3.5 py-3">
                  <p className="text-[12px] text-muted-foreground">{r.name[lang]}</p>
                  <p className="mt-1 font-display text-[15px] leading-snug">{r.formula}</p>
                  {r.note && <p className="mt-1 text-[12px] text-muted-foreground">{r.note[lang]}</p>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Shell>
  );
}
