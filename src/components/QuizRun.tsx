import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { TOPIC_LABEL } from "@/lib/math-engine";
import type { Mcq } from "@/lib/quiz";
import { ProblemDiagram } from "@/components/ProblemDiagram";

const LETTERS = ["А", "Б", "В", "Г"];

/** Timed multiple-choice run with a report: score, per-topic results, time per question, solutions of mistakes. */
export function QuizRun({ title, build, minutes, onExit }: { title: string; build: () => Mcq[]; minutes: number; onExit?: () => void }) {
  const { lang } = useI18n();
  const bg = lang === "bg";
  const [qs, setQs] = useState<Mcq[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [ans, setAns] = useState<(number | null)[]>([]);
  const [times, setTimes] = useState<number[]>([]);
  const [left, setLeft] = useState(minutes * 60);
  const [done, setDone] = useState(false);
  const since = useRef(0);

  useEffect(() => {
    if (!qs || done) return;
    const id = setInterval(() => setLeft((l) => (l <= 1 ? (finish(), 0) : l - 1)), 1000);
    return () => clearInterval(id);
  });

  function start() {
    const q = build();
    setQs(q); setAns(q.map(() => null)); setTimes(q.map(() => 0)); setIdx(0); setLeft(minutes * 60); setDone(false);
    since.current = Date.now();
  }
  function log() {
    const now = Date.now(); const s = now - since.current; since.current = now;
    setTimes((t) => t.map((x, k) => (k === idx ? x + s : x)));
  }
  function go(n: number) { log(); setIdx(n); }
  function finish() { log(); setDone(true); }

  if (!qs) {
    return (
      <section className="mt-4 rounded-3xl bg-ink p-5 text-background">
        <h2 className="font-display text-[18px]">{title}</h2>
        <p className="mt-1.5 text-[13px] opacity-80">{bg ? `Избор между А, Б, В и Г · ${minutes} минути · отчет и решения накрая.` : `Choose A, B, C or D · ${minutes} minutes · report and solutions at the end.`}</p>
        <div className="mt-4 flex gap-2">
          <button onClick={start} className="tap rounded-2xl bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground">{bg ? "Започни" : "Start"}</button>
          {onExit && <button onClick={onExit} className="tap rounded-2xl bg-background/15 px-4 py-3 text-sm">{bg ? "Назад" : "Back"}</button>}
        </div>
      </section>
    );
  }

  if (done) {
    const score = qs.filter((q, i) => ans[i] === q.correct).length;
    const byTopic: Record<string, [number, number]> = {};
    qs.forEach((q, i) => { const t = q.problem.topicId; const v = byTopic[t] ?? [0, 0]; v[1]++; if (ans[i] === q.correct) v[0]++; byTopic[t] = v; });
    return (
      <section className="mt-4 space-y-3">
        <div className="rounded-3xl glass-strong p-5">
          <h2 className="font-display text-[18px]">{title}</h2>
          <p className="mt-2 font-display text-[32px] font-semibold text-primary-deep">{score} / {qs.length}</p>
          <p className="text-[13px] text-muted-foreground">{bg ? "Общо време" : "Total time"}: {Math.round(times.reduce((a, b) => a + b, 0) / 1000)} s</p>
          <div className="mt-4 space-y-2">
            {Object.entries(byTopic).map(([t, [c, n]]) => (
              <div key={t}>
                <div className="flex justify-between text-[12px]"><span>{TOPIC_LABEL[t]?.[lang] ?? (bg ? "Логика" : "Logic")}</span><span>{c}/{n}</span></div>
                <div className="mt-1 h-2 rounded-full bg-card"><div className="h-2 rounded-full bg-primary" style={{ width: `${(c / n) * 100}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {qs.map((q, i) => (
              <span key={i} className={`rounded-lg px-2 py-1 text-[11px] font-semibold ${ans[i] === q.correct ? "bg-primary/25" : "bg-coral/20 text-coral"}`}>{i + 1}: {Math.round((times[i] ?? 0) / 1000)}s</span>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={start} className="tap rounded-2xl bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground">{bg ? "Нов вариант" : "New variant"}</button>
            {onExit && <button onClick={onExit} className="tap rounded-2xl bg-card px-4 py-3 text-sm">{bg ? "Назад" : "Back"}</button>}
          </div>
        </div>
        {qs.map((q, i) => ans[i] === q.correct ? null : (
          <article key={i} className="rounded-3xl glass p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{bg ? "Задача" : "Task"} {i + 1}</p>
            <p className="mt-1 font-display text-[16px] leading-snug">{q.problem.prompt}</p>
            <ProblemDiagram topicId={q.problem.topicId} prompt={q.problem.prompt} className="mt-3" />
            <p className="mt-2 text-[13px]"><span className="text-coral">{bg ? "Твоят отговор" : "Your answer"}: {ans[i] === null ? "—" : q.options[ans[i] as number]}</span> · <span className="font-semibold text-primary-deep">{bg ? "Верен" : "Correct"}: {q.problem.answer}</span></p>
            <ol className="mt-3 space-y-2">
              {q.problem.steps.map((s, j) => (
                <li key={j} className="flex gap-3 text-[14px] leading-relaxed">
                  <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-primary/12 font-display text-[12px] font-semibold text-primary-deep">{j + 1}</span><span>{s}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </section>
    );
  }

  const q = qs[idx];
  if (!q) return null;
  return (
    <section className="mt-4 rounded-3xl glass-strong p-5">
      <div className="flex items-center justify-between rounded-2xl bg-card/90 px-4 py-2.5">
        <span className="font-display text-[14px] font-semibold">{idx + 1} / {qs.length}</span>
        <span className="font-display text-[15px] font-semibold text-primary-deep">{String(Math.floor(left / 60)).padStart(2, "0")}:{String(left % 60).padStart(2, "0")}</span>
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{TOPIC_LABEL[q.problem.topicId]?.[lang] ?? (bg ? "Логика" : "Logic")}</p>
      <p className="mt-1 font-display text-[17px] leading-snug">{q.problem.prompt}</p>
      <ProblemDiagram topicId={q.problem.topicId} prompt={q.problem.prompt} className="mt-3" />
      <div className="mt-3 grid grid-cols-2 gap-2">
        {q.options.map((o, j) => (
          <button key={j} onClick={() => setAns((a) => a.map((x, k) => (k === idx ? j : x)))}
            className={`tap rounded-2xl px-3 py-3 text-left text-[14px] ${ans[idx] === j ? "bg-primary text-primary-foreground" : "bg-card/80"}`}>
            <b>{LETTERS[j]})</b> {o}
          </button>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button disabled={idx === 0} onClick={() => go(idx - 1)} className="tap rounded-2xl bg-card px-4 py-3 text-sm disabled:opacity-40">←</button>
        {idx < qs.length - 1
          ? <button onClick={() => go(idx + 1)} className="tap flex-1 rounded-2xl bg-ink py-3 font-display text-sm font-semibold text-background">{bg ? "Следваща" : "Next"}</button>
          : <button onClick={finish} className="tap flex-1 rounded-2xl bg-primary py-3 font-display text-sm font-semibold text-primary-foreground">{bg ? "Предай" : "Submit"}</button>}
      </div>
    </section>
  );
}
