import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "bg" | "en";

const dict = {
  appName: { bg: "МатМентор", en: "MathMentor" },
  tagline: { bg: "Математика 1–12 клас", en: "Math, grades 1–12" },
  heroTitle: { bg: "Математика, която се нагажда към детето", en: "Math that adapts to your child" },
  heroSub: {
    bg: "Задачи по учебната програма, обяснение стъпка по стъпка и жив напредък. Частните уроци стават излишни.",
    en: "Curriculum exercises, step-by-step explanations and live progress. Private lessons become unnecessary.",
  },
  pickGrade: { bg: "Избери клас", en: "Pick a grade" },
  grade: { bg: "клас", en: "grade" },
  age: { bg: "Възраст на детето", en: "Child's age" },
  years: { bg: "г.", en: "yrs" },
  start: { bg: "Започни", en: "Start" },
  continue: { bg: "Продължи", en: "Continue" },
  freeTime: { bg: "Безплатно време", en: "Free time" },
  skillMap: { bg: "Карта на уменията", en: "Skill map" },
  progress: { bg: "Напредък", en: "Progress" },
  studyTime: { bg: "Учебно време", en: "Study time" },
  accuracy: { bg: "Точност", en: "Accuracy" },
  streak: { bg: "Дни поред", en: "Day streak" },
  mastery: { bg: "Майсторство по теми", en: "Mastery by topic" },
  level: { bg: "Ниво", en: "Level" },
  task: { bg: "Задача", en: "Task" },
  yourAnswer: { bg: "Твоят отговор", en: "Your answer" },
  check: { bg: "Провери", en: "Check" },
  next: { bg: "Следваща", en: "Next" },
  hint: { bg: "Подсказка", en: "Hint" },
  solution: { bg: "Решение стъпка по стъпка", en: "Step-by-step solution" },
  correct: { bg: "Вярно!", en: "Correct!" },
  wrong: { bg: "Не е вярно.", en: "Not correct." },
  correctAnswer: { bg: "Верният отговор е", en: "The correct answer is" },
  levelUp: { bg: "Нивото се вдига — браво!", en: "Level up — well done!" },
  levelDown: { bg: "Връщаме едно ниво назад, за да стъпим здраво.", en: "One level back, to build a solid base." },
  back: { bg: "Назад", en: "Back" },
  home: { bg: "Начало", en: "Home" },
  trialOver: { bg: "Безплатните 3 часа свършиха", en: "Your 3 free hours are over" },
  trialOverSub: {
    bg: "Продължи с неограничен достъп до всички класове, задачи и решения.",
    en: "Continue with unlimited access to every grade, exercise and solution.",
  },
  perMonth: { bg: "€ / месец", en: "€ / month" },
  subscribe: { bg: "Абонирай се", en: "Subscribe" },
  cancelAny: { bg: "Отказваш по всяко време.", en: "Cancel any time." },
  premium: { bg: "Премиум", en: "Premium" },
  benefit1: { bg: "Неограничени задачи и решения", en: "Unlimited exercises and solutions" },
  benefit2: { bg: "Пълна карта 1–12 клас", en: "Full map, grades 1–12" },
  benefit3: { bg: "Напредък, точност и учебно време", en: "Progress, accuracy and study time" },
  subscribed: { bg: "Абонаментът е активен", en: "Subscription active" },
  paymentsSoon: {
    bg: "Плащането още не е свързано — активирахме достъпа ти, за да продължиш да учиш.",
    en: "Payment is not connected yet — we unlocked your access so you can keep learning.",
  },
  todayMission: { bg: "Мисия за днес", en: "Today's mission" },
  missionSub: { bg: "Кратка сесия от 10 задачи.", en: "A short session of 10 tasks." },
  solvedToday: { bg: "решени днес", en: "solved today" },
  reset: { bg: "Нулирай напредъка", en: "Reset progress" },
  changeGrade: { bg: "Смени клас", en: "Change grade" },
  sessionDone: { bg: "Сесията е завършена", en: "Session complete" },
  again: { bg: "Още една сесия", en: "One more session" },
  of: { bg: "от", en: "of" },
  materials: { bg: "Материали", en: "Materials" },
  materialsSub: {
    bg: "Теми от учебника, контролни, НВО и матура по български учебни програми.",
    en: "Textbook units, class tests, national exams and matura, following the Bulgarian curriculum.",
  },
  units: { bg: "Раздели от учебника", en: "Textbook units" },
  papers: { bg: "Изпити и контролни", en: "Exams and tests" },
  openPaper: { bg: "Решавай варианта", en: "Solve this paper" },
  paperDone: { bg: "Вариантът е завършен", en: "Paper complete" },
  paperScore: { bg: "Верни отговори", en: "Correct answers" },
  restart: { bg: "Отначало", en: "Start over" },
  noPapers: { bg: "За този клас още подготвяме варианти.", en: "Papers for this grade are on the way." },
  learn: { bg: "Уроци", en: "Lessons" },
  learnSub: {
    bg: "Прочети теорията с примерни задачи — как се решава и защо е точно така.",
    en: "Read the theory with worked examples — how to solve it and why it works.",
  },
  lessons: { bg: "Уроци за твоя клас", en: "Lessons for your grade" },
  openLesson: { bg: "Прочети урока", en: "Read the lesson" },
  theIdea: { bg: "Идеята", en: "The idea" },
  whyItWorks: { bg: "Защо е така", en: "Why it works" },
  rulesToKnow: { bg: "Правила, които трябва да знаеш", en: "Rules to know" },
  workedExamples: { bg: "Примерни задачи с решение", en: "Worked examples" },
  whyThisStep: { bg: "Защо така", en: "Why this way" },
  commonMistakes: { bg: "Чести грешки", en: "Common mistakes" },
  practiceThis: { bg: "Упражнявай тази тема", en: "Practise this topic" },
  allLessons: { bg: "Всички уроци", en: "All lessons" },
  formulas: { bg: "Формули", en: "Formulas" },
  formulasSub: {
    bg: "Помагало с всички формули от 1. до 12. клас — под ръка при всяка задача.",
    en: "A handbook with every formula from grade 1 to 12 — at hand for any task.",
  },
  grades: { bg: "клас", en: "grades" },
} as const;

export type Key = keyof typeof dict;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "bg",
  setLang: () => {},
  t: (k) => dict[k].bg,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("bg");

  useEffect(() => {
    const saved = window.localStorage.getItem("matmentor.lang");
    if (saved === "bg" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("matmentor.lang", l);
  };

  return (
    <Ctx.Provider value={{ lang, setLang, t: (k) => dict[k][lang] }}>{children}</Ctx.Provider>
  );
}

export function useI18n() {
  return useContext(Ctx);
}
