import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Shell } from "@/components/Shell";
import { useI18n } from "@/lib/i18n";
import { TOPIC_LABEL, generate, isCorrect, topicsForGrade, type Problem } from "@/lib/math-engine";
import { locked, today, topicState, update, useStore } from "@/lib/progress";

const SESSION_LENGTH = 10;

export const Route = createFileRoute("/practice")({
  validateSearch: (search: Record<string, unknown>) => ({
    topic: typeof search["topic"] === "string" ? (search["topic"] as string) : undefined,
    paper: typeof search["paper"] === "string" ? (search["paper"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Задачи с решение стъпка по стъпка — МатМентор" },
      {
        name: "description",
        content:
          "Адаптивни задачи по математика. След всеки отговор виждаш пълно решение стъпка по стъпка.",
      },
      { property: "og:title", content: "Задачи с решение стъпка по стъпка — МатМентор" },
      { property: "og:description", content: "Практика по математика с подробно решение на всяка задача." },
    ],
  }),
  component: PracticeScreen,
});

function PracticeScreen() {
  const search = Route.useSearch();
  return search.paper ? <PaperRun paperId={search.paper} /> : <Practice />;
}

function PaperRun({ paperId }: { paperId: string }) {
  const { t, lang } = useI18n();
  const { store, hydrated } = useStore();
  const paper = paperById(paperId);
  const problems = useMemo(() => (paper ? paperProblems(paper, lang) : []), [paper, lang]);

  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setIdx(0);
    setInput("");
    setResult(null);
    setShowHint(false);
    setScore(0);
  }, [paperId, lang]);

  // Count study time against the free trial
  useEffect(() => {
    if (!hydrated || store.subscribed) return;
    const id = window.setInterval(() => {
      update((s) => {
        s.msUsed += 1000;
        const d = (s.days[today()] ??= { ms: 0, correct: 0, total: 0 });
        d.ms += 1000;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [hydrated, store.subscribed]);

  if (!hydrated) return <Shell><div className="mt-8 h-40 rounded-3xl glass" /></Shell>;

  if (!paper) {
    return (
      <Shell>
        <div className="mt-6 rounded-3xl glass p-5 text-center">
          <p className="text-sm text-muted-foreground">{t("noPapers")}</p>
          <Link to="/materials" className="tap mt-4 inline-block rounded-2xl bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground">
            {t("materials")}
          </Link>
        </div>
      </Shell>
    );
  }

  if (locked(store)) {
    return (
      <Shell>
        <div className="mt-6 rounded-3xl bg-ink p-5 text-background">
          <h2 className="text-[22px] text-balance">{t("trialOver")}</h2>
          <p className="mt-2 text-sm opacity-70">{t("trialOverSub")}</p>
          <Link to="/pricing" className="tap mt-5 block rounded-2xl bg-primary py-3.5 text-center font-display text-sm font-semibold text-primary-foreground">
            {t("subscribe")} · 4,50 {t("perMonth")}
          </Link>
        </div>
      </Shell>
    );
  }

  const problem = problems[idx];
  const last = idx >= problems.length - 1;

  const submit = () => {
    if (!problem || result) return;
    const ok = isCorrect(problem, input);
    setResult(ok ? "correct" : "wrong");
    if (ok) setScore((n) => n + 1);
    update((s) => {
      const ts = (s.topics[problem.topicId] ??= { level: 3, correct: 0, total: 0 });
      ts.total += 1;
      if (ok) ts.correct += 1;
      const d = (s.days[today()] ??= { ms: 0, correct: 0, total: 0 });
      d.total += 1;
      if (ok) d.correct += 1;
    });
  };

  const restart = () => {
    setIdx(0);
    setInput("");
    setResult(null);
    setShowHint(false);
    setScore(0);
  };

  const finished = last && result !== null;

  return (
    <Shell>
      <section className="mt-5 rounded-3xl glass p-4">
        <span className="inline-block rounded-full bg-primary/12 px-2.5 py-1 text-[11px] font-semibold text-primary-deep">
          {KIND_LABEL[paper.kind][lang]}
        </span>
        <h1 className="mt-2 font-display text-[17px] leading-snug">{paper.title[lang]}</h1>
      </section>

      <section className="rise-in mt-4 rounded-3xl glass-strong p-5">
        <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          <span>
            {t("task")} {idx + 1} {t("of")} {problems.length}
          </span>
          <span className="text-primary-deep">
            {t("paperScore")}: {score}
          </span>
        </div>

        <p className="mt-4 whitespace-pre-line font-display text-[26px] leading-tight">{problem?.prompt}</p>

        {!result && (
          <>
            <div className="mt-5 flex gap-2.5">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                inputMode="text"
                placeholder={t("yourAnswer")}
                className="min-w-0 flex-1 rounded-2xl bg-card/80 px-4 py-3 text-sm outline-none ring-1 ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={submit}
                className="tap rounded-2xl bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground"
              >
                {t("check")}
              </button>
            </div>
            <button
              onClick={() => setShowHint(true)}
              className="mt-3 text-[13px] font-semibold text-muted-foreground underline underline-offset-4"
            >
              {t("hint")}
            </button>
            {showHint && problem && (
              <p className="pop-in mt-2 rounded-2xl bg-accent/70 px-3.5 py-3 text-[13px] text-accent-foreground">
                {problem.steps[0]}
              </p>
            )}
          </>
        )}

        {result && problem && (
          <div className="mt-5">
            <div
              className={`pop-in flex items-center gap-2.5 rounded-2xl px-3.5 py-3 ${
                result === "correct" ? "bg-accent text-accent-foreground" : "bg-coral/15 text-coral"
              }`}
            >
              <span
                className={`grid size-7 shrink-0 place-items-center rounded-full text-[13px] ${
                  result === "correct" ? "bg-primary text-primary-foreground" : "bg-coral text-primary-foreground"
                }`}
              >
                {result === "correct" ? "✓" : "✕"}
              </span>
              <p className="text-sm font-semibold">
                {result === "correct" ? t("correct") : `${t("wrong")} ${t("correctAnswer")} ${problem.answer}.`}
              </p>
            </div>

            <div className="mt-4 rounded-2xl bg-card/70 p-4">
              <p className="font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {t("solution")}
              </p>
              <ol className="mt-3 space-y-2.5">
                {problem.steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-primary/12 font-display text-[12px] font-semibold text-primary-deep">
                      {i + 1}
                    </span>
                    <span className="text-[14px] leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            {finished ? (
              <div className="mt-5 rounded-2xl bg-ink p-4 text-background">
                <p className="font-display text-[17px]">{t("paperDone")}</p>
                <p className="mt-1 text-sm opacity-70">
                  {t("paperScore")}: {score} {t("of")} {problems.length}
                </p>
                <button
                  onClick={restart}
                  className="tap mt-3 w-full rounded-xl bg-primary py-3 font-display text-sm font-semibold text-primary-foreground"
                >
                  {t("restart")}
                </button>
                <Link
                  to="/materials"
                  className="tap mt-2 block rounded-xl bg-background/10 py-3 text-center font-display text-sm font-semibold"
                >
                  {t("materials")}
                </Link>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIdx((n) => n + 1);
                  setInput("");
                  setResult(null);
                  setShowHint(false);
                }}
                className="tap mt-5 w-full rounded-2xl bg-primary py-3.5 font-display text-sm font-semibold text-primary-foreground"
              >
                {t("next")} →
              </button>
            )}
          </div>
        )}
      </section>
    </Shell>
  );
}


function Practice() {
  const { t, lang } = useI18n();
  const { store, hydrated } = useStore();
  const search = Route.useSearch();

  const grade = store.grade;
  const topics = useMemo(() => (grade ? topicsForGrade(grade) : []), [grade]);
  const topicId = search.topic && topics.includes(search.topic) ? search.topic : topics[0];

  const [problem, setProblem] = useState<Problem | null>(null);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [answered, setAnswered] = useState(0);
  const [note, setNote] = useState<string | null>(null);
  const runRef = useRef({ correctRow: 0, wrongRow: 0, startedAt: Date.now() });

  const isLocked = locked(store);

  const next = useCallback(() => {
    if (!topicId) return;
    const lvl = topicState(store, topicId, 3).level;
    setProblem(generate(topicId, lvl, lang));
    setInput("");
    setResult(null);
    setShowHint(false);
    setNote(null);
    runRef.current.startedAt = Date.now();
  }, [topicId, store, lang]);

  // First problem + regenerate when topic or language changes
  useEffect(() => {
    if (!hydrated || !topicId || isLocked) return;
    const lvl = topicState(store, topicId, 3).level;
    setProblem(generate(topicId, lvl, lang));
    setInput("");
    setResult(null);
    setShowHint(false);
    setAnswered(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, topicId, lang, isLocked]);

  // Count study time against the free trial
  useEffect(() => {
    if (!hydrated || store.subscribed || isLocked) return;
    const id = window.setInterval(() => {
      update((s) => {
        s.msUsed += 1000;
        const d = (s.days[today()] ??= { ms: 0, correct: 0, total: 0 });
        d.ms += 1000;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [hydrated, store.subscribed, isLocked]);

  if (!hydrated) return <Shell><div className="mt-8 h-40 rounded-3xl glass" /></Shell>;

  if (!grade || !topicId) {
    return (
      <Shell>
        <div className="mt-6 rounded-3xl glass p-5 text-center">
          <p className="text-sm text-muted-foreground">{t("pickGrade")}</p>
          <Link to="/" className="tap mt-4 inline-block rounded-2xl bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground">
            {t("home")}
          </Link>
        </div>
      </Shell>
    );
  }

  if (isLocked) {
    return (
      <Shell>
        <div className="mt-6 rounded-3xl bg-ink p-5 text-background">
          <h2 className="text-[22px] text-balance">{t("trialOver")}</h2>
          <p className="mt-2 text-sm opacity-70">{t("trialOverSub")}</p>
          <Link to="/pricing" className="tap mt-5 block rounded-2xl bg-primary py-3.5 text-center font-display text-sm font-semibold text-primary-foreground">
            {t("subscribe")} · 4,50 {t("perMonth")}
          </Link>
        </div>
      </Shell>
    );
  }

  const st = topicState(store, topicId, 3);

  const submit = () => {
    if (!problem || result) return;
    const ok = isCorrect(problem, input);
    const fast = Date.now() - runRef.current.startedAt < 30000;
    setResult(ok ? "correct" : "wrong");
    setAnswered((n) => n + 1);

    const r = runRef.current;
    if (ok) {
      r.correctRow += 1;
      r.wrongRow = 0;
    } else {
      r.wrongRow += 1;
      r.correctRow = 0;
    }

    let levelNote: string | null = null;
    update((s) => {
      const ts = (s.topics[topicId] ??= { level: st.level, correct: 0, total: 0 });
      ts.total += 1;
      if (ok) ts.correct += 1;
      if (ok && r.correctRow >= 3 && fast && ts.level < 5) {
        ts.level += 1;
        r.correctRow = 0;
        levelNote = t("levelUp");
      }
      if (!ok && r.wrongRow >= 2 && ts.level > 1) {
        ts.level -= 1;
        r.wrongRow = 0;
        levelNote = t("levelDown");
      }
      const d = (s.days[today()] ??= { ms: 0, correct: 0, total: 0 });
      d.total += 1;
      if (ok) d.correct += 1;
    });
    setNote(levelNote);
  };

  const sessionDone = answered >= SESSION_LENGTH && result !== null;

  return (
    <Shell>
      <section className="mt-5 flex flex-wrap gap-1.5">
        {topics.map((id) => (
          <Link
            key={id}
            to="/practice"
            search={{ topic: id }}
            className={`tap rounded-full px-3 py-1.5 text-[12px] font-semibold ${
              id === topicId ? "bg-primary text-primary-foreground" : "glass text-muted-foreground"
            }`}
          >
            {TOPIC_LABEL[id]?.[lang] ?? id}
          </Link>
        ))}
      </section>

      <section className="rise-in mt-4 rounded-3xl glass-strong p-5">
        <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          <span>
            {t("task")} {Math.min(answered + (result ? 0 : 1), SESSION_LENGTH)} {t("of")} {SESSION_LENGTH}
          </span>
          <span className="text-primary-deep">
            {t("level")} {st.level}
          </span>
        </div>

        <p className="mt-4 whitespace-pre-line font-display text-[26px] leading-tight">
          {problem?.prompt}
        </p>

        {!result && (
          <>
            <div className="mt-5 flex gap-2.5">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                inputMode="text"
                placeholder={t("yourAnswer")}
                className="min-w-0 flex-1 rounded-2xl bg-card/80 px-4 py-3 text-sm outline-none ring-1 ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={submit}
                className="tap rounded-2xl bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground"
              >
                {t("check")}
              </button>
            </div>
            <button
              onClick={() => setShowHint(true)}
              className="mt-3 text-[13px] font-semibold text-muted-foreground underline underline-offset-4"
            >
              {t("hint")}
            </button>
            {showHint && problem && (
              <p className="pop-in mt-2 rounded-2xl bg-accent/70 px-3.5 py-3 text-[13px] text-accent-foreground">
                {problem.steps[0]}
              </p>
            )}
          </>
        )}

        {result && problem && (
          <div className="mt-5">
            <div
              className={`pop-in flex items-center gap-2.5 rounded-2xl px-3.5 py-3 ${
                result === "correct" ? "bg-accent text-accent-foreground" : "bg-coral/15 text-coral"
              }`}
            >
              <span
                className={`grid size-7 shrink-0 place-items-center rounded-full text-[13px] ${
                  result === "correct" ? "bg-primary text-primary-foreground" : "bg-coral text-primary-foreground"
                }`}
              >
                {result === "correct" ? "✓" : "✕"}
              </span>
              <p className="text-sm font-semibold">
                {result === "correct"
                  ? t("correct")
                  : `${t("wrong")} ${t("correctAnswer")} ${problem.answer}.`}
              </p>
            </div>

            <div className="mt-4 rounded-2xl bg-card/70 p-4">
              <p className="font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {t("solution")}
              </p>
              <ol className="mt-3 space-y-2.5">
                {problem.steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-primary/12 font-display text-[12px] font-semibold text-primary-deep">
                      {i + 1}
                    </span>
                    <span className="text-[14px] leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            {note && <p className="mt-3 text-[13px] font-semibold text-primary-deep">{note}</p>}

            {sessionDone ? (
              <div className="mt-5 rounded-2xl bg-ink p-4 text-background">
                <p className="font-display text-[17px]">{t("sessionDone")}</p>
                <button
                  onClick={() => {
                    setAnswered(0);
                    next();
                  }}
                  className="tap mt-3 w-full rounded-xl bg-primary py-3 font-display text-sm font-semibold text-primary-foreground"
                >
                  {t("again")}
                </button>
              </div>
            ) : (
              <button
                onClick={next}
                className="tap mt-5 w-full rounded-2xl bg-primary py-3.5 font-display text-sm font-semibold text-primary-foreground"
              >
                {t("next")} →
              </button>
            )}
          </div>
        )}
      </section>
    </Shell>
  );
}
