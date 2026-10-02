import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

export const WEAK_KEY = "matmentor.matura.weak";

export function StudyPlan() {
  const { lang } = useI18n();
  const bg = lang === "bg";
  const [hard, setHard] = useState("");
  const [hours, setHours] = useState(5);
  const [weeks, setWeeks] = useState(8);
  const [weak, setWeak] = useState<string[]>([]);
  const [plan, setPlan] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const abort = useRef<AbortController | null>(null);

  useEffect(() => {
    try { setWeak(JSON.parse(localStorage.getItem(WEAK_KEY) ?? "[]") as string[]); } catch { /* ignore */ }
  }, []);

  async function run() {
    setBusy(true); setErr(""); setPlan("");
    const ac = new AbortController(); abort.current = ac;
    try {
      const res = await fetch("/api/matura-plan", {
        method: "POST", signal: ac.signal, headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, hard, weak, hoursPerWeek: hours, weeks }),
      });
      if (!res.ok || !res.body) {
        const msg = await res.text().catch(() => "");
        setErr(res.status === 429 ? (bg ? "Твърде много заявки. Опитай след малко." : "Too many requests, try again shortly.")
          : res.status === 402 ? (bg ? "Свършиха AI кредитите на приложението." : "The app is out of AI credits.")
          : msg || (bg ? "Грешка при генериране." : "Generation failed."));
        return;
      }
      const reader = res.body.getReader(); const dec = new TextDecoder(); let buf = "";
      for (;;) {
        const { done, value } = await reader.read(); if (done) break;
        buf += dec.decode(value, { stream: true });
        const frames = buf.split("\n\n"); buf = frames.pop() ?? "";
        for (const f of frames) {
          const line = f.split("\n").find((l) => l.startsWith("data:")); if (!line) continue;
          try {
            const ev = JSON.parse(line.slice(5)) as { type?: string; delta?: string; error?: { message?: string } };
            if (ev.type === "response.output_text.delta" && ev.delta) setPlan((p) => p + ev.delta);
            if (ev.type === "error" || ev.type === "response.failed") setErr(ev.error?.message ?? (bg ? "Грешка." : "Error."));
          } catch { /* partial */ }
        }
      }
    } catch (e) {
      if (!(e instanceof Error && e.name === "AbortError")) setErr(bg ? "Няма връзка." : "Connection failed.");
    } finally { setBusy(false); }
  }

  return (
    <section className="mt-5 rounded-3xl glass-strong p-5">
      <h2 className="font-display text-[18px]">{bg ? "Моят план за матура" : "My matura plan"}</h2>
      <p className="mt-1 text-[13px] text-muted-foreground">
        {bg ? "Опиши кое ти е трудно и колко време имаш — ще получиш план седмица по седмица." : "Describe what's hard and how much time you have — get a week-by-week plan."}
      </p>
      <textarea value={hard} onChange={(e) => setHard(e.target.value)} maxLength={1500} rows={3}
        placeholder={bg ? "Напр. логаритми, задачи с пирамиди, не помня формулите по тригонометрия…" : "E.g. logarithms, pyramid tasks, I forget trig formulas…"}
        className="mt-3 w-full rounded-2xl bg-card/80 p-3 text-[14px] outline-none focus:ring-2 focus:ring-primary" />
      {weak.length > 0 && (
        <p className="mt-2 text-[12px] text-muted-foreground">{bg ? "От пробната матура: " : "From the practice exam: "}{weak.join(", ")}</p>
      )}
      <div className="mt-3 grid grid-cols-2 gap-3 text-[13px]">
        <label>{bg ? "Часа седмично" : "Hours per week"}: <b>{hours}</b>
          <input type="range" min={1} max={20} value={hours} onChange={(e) => setHours(+e.target.value)} className="w-full accent-primary" /></label>
        <label>{bg ? "Седмици до изпита" : "Weeks to exam"}: <b>{weeks}</b>
          <input type="range" min={1} max={30} value={weeks} onChange={(e) => setWeeks(+e.target.value)} className="w-full accent-primary" /></label>
      </div>
      <div className="mt-3 flex gap-2">
        <button disabled={busy} onClick={run} className="tap rounded-2xl bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground disabled:opacity-60">
          {busy ? (bg ? "Създавам плана…" : "Building plan…") : bg ? "Създай план" : "Create plan"}
        </button>
        {busy && <button onClick={() => abort.current?.abort()} className="tap rounded-2xl bg-card px-4 py-3 text-sm">{bg ? "Спри" : "Stop"}</button>}
      </div>
      {err && <p className="mt-3 rounded-xl bg-coral/15 px-3 py-2 text-[13px] text-coral">{err}</p>}
      {plan && <div className="mt-4 whitespace-pre-wrap rounded-2xl bg-card/70 p-4 text-[14px] leading-relaxed">{plan.replace(/\*\*/g, "")}</div>}
    </section>
  );
}
