import { useEffect, useState } from "react";

export const TRIAL_MS = 3 * 60 * 60 * 1000; // 3 free hours

export type TopicState = { level: number; correct: number; total: number };

export type Store = {
  grade: number | null;
  age: number | null;
  msUsed: number;
  subscribed: boolean;
  topics: Record<string, TopicState>;
  days: Record<string, { ms: number; correct: number; total: number }>;
};

const KEY = "matmentor.store.v1";

const empty = (): Store => ({
  grade: null,
  age: null,
  msUsed: 0,
  subscribed: false,
  topics: {},
  days: {},
});

let cache: Store = empty();
const listeners = new Set<() => void>();

function read(): Store {
  if (typeof window === "undefined") return empty();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty();
    return { ...empty(), ...(JSON.parse(raw) as Store) };
  } catch {
    return empty();
  }
}

function write(s: Store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(s));
}

export function today() {
  return new Date().toISOString().slice(0, 10);
}

export function update(fn: (s: Store) => void) {
  const next: Store = JSON.parse(JSON.stringify(cache)) as Store;
  fn(next);
  cache = next;
  write(next);
  listeners.forEach((l) => l());
}

export function resetAll() {
  cache = empty();
  write(cache);
  listeners.forEach((l) => l());
}

/** Starting level 1–5 from grade and age: younger than peers -> advanced. */
export function startLevel(grade: number, age: number) {
  const expected = grade + 6;
  return Math.min(5, Math.max(1, 3 - (age - expected)));
}

export function topicState(s: Store, topicId: string, fallbackLevel: number): TopicState {
  return s.topics[topicId] ?? { level: fallbackLevel, correct: 0, total: 0 };
}

export function masteryPct(st: TopicState) {
  if (st.total === 0) return 0;
  const acc = st.correct / st.total;
  return Math.round(Math.min(100, ((st.level - 1) / 4) * 60 + acc * 40));
}

export function streakDays(s: Store) {
  let n = 0;
  const d = new Date();
  for (;;) {
    const key = d.toISOString().slice(0, 10);
    if (s.days[key] && s.days[key].total > 0) {
      n += 1;
      d.setDate(d.getDate() - 1);
    } else break;
  }
  return n;
}

export function locked(s: Store) {
  return !s.subscribed && s.msUsed >= TRIAL_MS;
}

export function useStore() {
  const [, bump] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    cache = read();
    setHydrated(true);
    const l = () => bump((v) => v + 1);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  return { store: hydrated ? cache : empty(), hydrated };
}
