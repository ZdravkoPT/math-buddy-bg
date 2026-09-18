import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { useI18n } from "@/lib/i18n";
import { update, useStore } from "@/lib/progress";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Абонамент 4,50 € на месец — МатМентор" },
      {
        name: "description",
        content:
          "Първите 3 часа са безплатни. После 4,50 € на месец за неограничени задачи и решения за 1–12 клас.",
      },
      { property: "og:title", content: "Абонамент 4,50 € на месец — МатМентор" },
      { property: "og:description", content: "Неограничена практика по математика за 1–12 клас." },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  const { t } = useI18n();
  const { store } = useStore();

  return (
    <Shell>
      <section className="rise-in mt-5 rounded-3xl bg-ink p-5 text-background">
        <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] opacity-50">
          {t("appName")} {t("premium")}
        </p>
        <h1 className="mt-2 text-[24px] leading-tight text-balance">{t("trialOver")}</h1>
        <p className="mt-2 text-sm opacity-70">{t("trialOverSub")}</p>

        <div className="mt-5 flex items-end gap-2">
          <span className="font-display text-[40px] font-semibold leading-none">4,50</span>
          <span className="pb-1 text-sm opacity-60">{t("perMonth")}</span>
        </div>

        <ul className="mt-5 space-y-2 text-sm">
          {(["benefit1", "benefit2", "benefit3"] as const).map((k) => (
            <li key={k} className="flex items-center gap-2.5">
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">
                ✓
              </span>
              {t(k)}
            </li>
          ))}
        </ul>

        {store.subscribed ? (
          <p className="mt-6 rounded-2xl bg-primary px-4 py-3.5 text-center font-display text-sm font-semibold text-primary-foreground">
            {t("subscribed")}
          </p>
        ) : (
          <button
            onClick={() => update((s) => { s.subscribed = true; })}
            className="tap mt-6 w-full rounded-2xl bg-primary py-3.5 font-display text-sm font-semibold text-primary-foreground"
          >
            {t("subscribe")}
          </button>
        )}
        <p className="mt-2.5 text-center text-[12px] opacity-50">{t("cancelAny")}</p>
        <p className="mt-3 text-center text-[11px] opacity-40">{t("paymentsSoon")}</p>
      </section>

      <Link
        to="/practice"
        search={{ topic: undefined }}
        className="tap mt-5 block rounded-2xl glass py-3.5 text-center font-display text-sm font-semibold"
      >
        {t("continue")}
      </Link>
    </Shell>
  );
}
