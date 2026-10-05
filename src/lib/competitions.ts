import type { Lang } from "./i18n";
import type { Bi } from "./materials";
import type { Problem } from "./math-engine";
import { CURRICULUM } from "./math-engine";

export type Competition = {
  id: string;
  name: Bi;
  grades: [number, number];
  about: Bi;
  archiveUrl: string;
  minutes: number;
  count: number;
};

const b = (bg: string, en: string): Bi => ({ bg, en });

export const COMPETITIONS: Competition[] = [
  { id: "kangaroo", name: b("Европейско Кенгуру", "European Kangaroo"), grades: [1, 12], about: b("Пролетно състезание с избор на отговор; задачи с хитрина и логика, по-трудни към края.", "Spring multiple-choice contest; tricky logic tasks that get harder towards the end."), archiveUrl: "http://math-bg.com/", minutes: 30, count: 12 },
  { id: "easter", name: b("Великденско математическо състезание", "Easter Math Competition"), grades: [1, 7], about: b("Провежда се през пролетта; тест с избор на отговор и задачи със свободен отговор.", "Held in spring; multiple-choice test plus open-answer tasks."), archiveUrl: "http://math-bg.com/", minutes: 40, count: 12 },
  { id: "xmas", name: b("Коледно математическо състезание", "Christmas Math Competition"), grades: [1, 7], about: b("Зимно състезание по програмата до момента + логически задачи.", "Winter contest on the curriculum so far plus logic tasks."), archiveUrl: "http://math-bg.com/", minutes: 40, count: 12 },
  { id: "smt", name: b("Софийски математически турнир", "Sofia Math Tournament"), grades: [2, 7], about: b("Есенен турнир с текстови и геометрични задачи.", "Autumn tournament with word and geometry problems."), archiveUrl: "http://math-bg.com/", minutes: 45, count: 12 },
  { id: "salabashev", name: b("Турнир „Иван Салабашев“", "Ivan Salabashev Tournament"), grades: [2, 7], about: b("Задачи с избор на отговор и с кратък отговор, акцент върху съобразителността.", "Multiple-choice and short-answer tasks focused on quick thinking."), archiveUrl: "http://math-bg.com/", minutes: 45, count: 12 },
  { id: "hrabar", name: b("Турнир „Черноризец Храбър“", "Chernorizets Hrabar Tournament"), grades: [1, 12], about: b("Есенен тест с 20 задачи с избираем отговор, по-трудни към края.", "Autumn test with 20 multiple-choice tasks, harder towards the end."), archiveUrl: "http://math-bg.com/", minutes: 45, count: 15 },
  { id: "omt", name: b("Областни математически турнири (ОМТ)", "Regional Math Tournaments"), grades: [1, 12], about: b("Регионални турнири; архив по години и класове.", "Regional tournaments; archive by year and grade."), archiveUrl: "https://klasirane.com/competitions/OMT/All", minutes: 45, count: 12 },
  { id: "nms", name: b("НМС „Математика за всеки“", "National Contest 'Math for Everyone'"), grades: [1, 7], about: b("Национално състезание за всички ученици; тест с избор и задачи с решение.", "National contest for all pupils; multiple-choice and written tasks."), archiveUrl: "https://dideva.alle.bg/", minutes: 45, count: 12 },
  { id: "olympiad", name: b("Олимпиада по математика (общински кръг)", "Math Olympiad (municipal round)"), grades: [4, 12], about: b("Задачи с пълно решение; тук упражняваш типовете и логическите задачи.", "Full-solution tasks; here you practise the types and logic tasks."), archiveUrl: "https://www.matematika.bg/olimpiadi/", minutes: 60, count: 10 },
];

export const competitionsForGrade = (g: number) => COMPETITIONS.filter((c) => g >= c.grades[0] && g <= c.grades[1]);
export const competitionById = (id: string) => COMPETITIONS.find((c) => c.id === id);
export const competitionTopics = (g: number) => CURRICULUM[g] ?? CURRICULUM[5] ?? [];

/* Logic tasks "с хитрина" — original, generated with step-by-step solutions. */
const R = (a: number, c: number) => a + Math.floor(Math.random() * (c - a + 1));
const mk = (prompt: string, answer: string, steps: string[]): Problem => ({ topicId: "logic", level: 3, prompt, answer, steps });

export function logicProblem(grade: number, l: Lang): Problem {
  const T = (bg: string, en: string) => (l === "bg" ? bg : en);
  const kind = R(0, grade <= 3 ? 2 : 5);
  if (kind === 0) {
    const a = R(2, 5), d = R(2, 6), n = 5;
    const seq = Array.from({ length: n }, (_, i) => a + i * d);
    return mk(T(`Кое число следва: ${seq.join(", ")}, ?`, `What comes next: ${seq.join(", ")}, ?`), String(a + n * d), [
      T(`Всяко число е с ${d} повече от предишното.`, `Each number is ${d} more than the previous.`),
      `${seq[n - 1]} + ${d} = ${a + n * d}.`,
    ]);
  }
  if (kind === 1) {
    const age = R(5, 10), diff = R(2, 6), yrs = R(2, 5);
    return mk(T(`Ани е на ${age} г., а брат ѝ е с ${diff} г. по-голям. На колко години ще е брат ѝ след ${yrs} години?`, `Ani is ${age}; her brother is ${diff} years older. How old will he be in ${yrs} years?`), String(age + diff + yrs), [
      T(`Брат ѝ сега: ${age} + ${diff} = ${age + diff}.`, `Brother now: ${age} + ${diff} = ${age + diff}.`),
      `${age + diff} + ${yrs} = ${age + diff + yrs}.`,
    ]);
  }
  if (kind === 2) {
    const legs = R(3, 8) * 2, heads = R(legs / 4 + 1, legs / 2);
    const rab = (legs - 2 * heads) / 2;
    if (rab < 0 || !Number.isInteger(rab)) return logicProblem(grade, l);
    return mk(T(`В двор има кокошки и зайци — общо ${heads} глави и ${legs} крака. Колко са зайците?`, `A yard has hens and rabbits — ${heads} heads and ${legs} legs. How many rabbits?`), String(rab), [
      T(`Ако всички бяха кокошки: ${heads} · 2 = ${2 * heads} крака.`, `If all were hens: ${heads} · 2 = ${2 * heads} legs.`),
      T(`Остават ${legs - 2 * heads} крака; всеки заек има 2 крака повече.`, `${legs - 2 * heads} legs remain; each rabbit has 2 extra legs.`),
      `${legs - 2 * heads} : 2 = ${rab}.`,
    ]);
  }
  if (kind === 3) {
    const n = R(4, 10);
    return mk(T(`${n} приятели се ръкуват — всеки с всеки по веднъж. Колко ръкостискания има?`, `${n} friends each shake hands once with everyone. How many handshakes?`), String((n * (n - 1)) / 2), [
      T(`Всеки се ръкува с ${n - 1} души: ${n} · ${n - 1} = ${n * (n - 1)}.`, `Each shakes ${n - 1} hands: ${n} · ${n - 1} = ${n * (n - 1)}.`),
      T("Всяко ръкостискане е броено два пъти, делим на 2:", "Each handshake is counted twice, divide by 2:") + ` ${(n * (n - 1)) / 2}.`,
    ]);
  }
  if (kind === 4) {
    const lo = R(10, 40), hi = lo + R(20, 60);
    const cnt = Math.floor(hi / 3) - Math.floor((lo - 1) / 3);
    return mk(T(`Колко числа от ${lo} до ${hi} (включително) се делят на 3?`, `How many numbers from ${lo} to ${hi} (inclusive) are divisible by 3?`), String(cnt), [
      T(`До ${hi} има ${Math.floor(hi / 3)} кратни на 3, а до ${lo - 1} — ${Math.floor((lo - 1) / 3)}.`, `Up to ${hi} there are ${Math.floor(hi / 3)} multiples of 3; up to ${lo - 1}, ${Math.floor((lo - 1) / 3)}.`),
      `${Math.floor(hi / 3)} − ${Math.floor((lo - 1) / 3)} = ${cnt}.`,
    ]);
  }
  const pages = R(10, 99);
  const digits = 9 + (pages - 9) * 2;
  return mk(T(`Колко цифри са нужни, за да се номерират страниците на книга от 1 до ${pages}?`, `How many digits are needed to number pages 1 to ${pages}?`), String(digits), [
    T("Страници 1–9: 9 цифри.", "Pages 1–9: 9 digits."),
    T(`Страници 10–${pages}: ${pages - 9} числа по 2 цифри = ${(pages - 9) * 2}.`, `Pages 10–${pages}: ${pages - 9} numbers × 2 = ${(pages - 9) * 2}.`),
    `9 + ${(pages - 9) * 2} = ${digits}.`,
  ]);
}
