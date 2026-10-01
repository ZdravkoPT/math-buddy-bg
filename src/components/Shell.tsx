import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import { TRIAL_MS, useStore } from "@/lib/progress";

function fmt(ms: number, lang: "bg" | "en") {
  const left = Math.max(0, ms);
  const h = Math.floor(left / 3600000);
  const m = Math.floor((left % 3600000) / 60000);
  if (h > 0) return lang === "bg" ? `${h} ч ${m} мин` : `${h}h ${m}m`;
  const s = Math.floor((left % 60000) / 1000);
  return lang === "bg" ? `${m} мин ${s} сек` : `${m}m ${s}s`;
}

export function Shell({ children }: { children: ReactNode }) {
  const { t, lang, setLang } = useI18n();
  const { store } = useStore();
  const left = TRIAL_MS - store.msUsed;
  const pct = Math.max(0, Math.min(100, (left / TRIAL_MS) * 100));

  return (
    <div className="mx-auto min-h-screen w-full max-w-[460px] px-5 pb-16 pt-5">
      <header className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-primary font-display text-sm font-semibold text-primary-foreground">
            М
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold">{t("appName")}</span>
            <span className="block text-[11px] text-muted-foreground">{t("tagline")}</span>
          </span>
        </Link>
        <div className="flex items-center gap-1 rounded-full glass p-1">
          {(["bg", "en"] as const).map((code) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`tap rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase ${
                lang === code ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {code}
            </button>
          ))}
        </div>
      </header>

      {!store.subscribed && (
        <div className="mt-4 rounded-2xl glass p-3.5">
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-muted-foreground">{t("freeTime")}</span>
            <span className="font-display font-semibold text-primary-deep">{fmt(left, lang)}</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
            <div className="bar-fill h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
          </div>
        </div>
      )}

      {store.subscribed && (
        <div className="mt-4 rounded-2xl glass px-3.5 py-2.5 text-[12px] font-semibold text-primary-deep">
          {t("subscribed")} · {t("premium")}
        </div>
      )}

      {children}

      <nav className="mt-8 grid grid-cols-3 gap-1.5 rounded-2xl glass p-2">
        <Link to="/" className="tap rounded-xl px-2 py-2.5 text-center text-[12px] font-semibold" activeProps={{ className: "bg-primary text-primary-foreground" }} activeOptions={{ exact: true }}>
          {t("home")}
        </Link>
        <Link to="/practice" search={{ topic: undefined, paper: undefined }} className="tap rounded-xl px-2 py-2.5 text-center text-[12px] font-semibold" activeProps={{ className: "bg-primary text-primary-foreground" }}>
          {t("task")}
        </Link>
        <Link to="/materials" className="tap rounded-xl px-2 py-2.5 text-center text-[12px] font-semibold" activeProps={{ className: "bg-primary text-primary-foreground" }}>
          {t("materials")}
        </Link>
        <Link to="/learn" search={{ topic: undefined }} className="tap rounded-xl px-2 py-2.5 text-center text-[12px] font-semibold" activeProps={{ className: "bg-primary text-primary-foreground" }}>
          {t("learn")}
        </Link>
        <Link to="/formulas" className="tap rounded-xl px-2 py-2.5 text-center text-[12px] font-semibold" activeProps={{ className: "bg-primary text-primary-foreground" }}>
          {t("formulas")}
        </Link>
        <Link to="/matura" className="tap rounded-xl px-2 py-2.5 text-center text-[12px] font-semibold" activeProps={{ className: "bg-primary text-primary-foreground" }}>
          {t("matura")}
        </Link>
        <Link to="/progress" className="tap rounded-xl px-2 py-2.5 text-center text-[12px] font-semibold" activeProps={{ className: "bg-primary text-primary-foreground" }}>
          {t("progress")}
        </Link>
      </nav>
    </div>
  );
}
