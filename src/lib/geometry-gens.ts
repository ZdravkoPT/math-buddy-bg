import type { Lang } from "./i18n";
import type { Problem } from "./math-engine";

type Gen = (level: number, lang: Lang) => Problem;
const R = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const mk = (topicId: string, level: number, prompt: string, answer: string, steps: string[]): Problem => ({
  topicId,
  level,
  prompt,
  answer,
  steps,
});

export const GEO_GENS: Record<string, Gen> = {
  tritypes: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const kind = R(0, 2);
    if (kind === 0) {
      const a = R(3, 9 + lv);
      return mk("tritypes", lv, T(`Равностранен триъгълник има страна ${a} см. Колко е обиколката?`, `An equilateral triangle has side ${a} cm. Find its perimeter.`), String(3 * a), [
        T("В равностранен триъгълник и трите страни са равни.", "In an equilateral triangle all three sides are equal."),
        `P = 3 · a = 3 · ${a} = ${3 * a} см.`,
      ]);
    }
    if (kind === 1) {
      const b = R(4, 8 + lv) * 2;
      const a = R(Math.floor(b / 2) + 1, b + 4);
      return mk("tritypes", lv, T(`Равнобедрен триъгълник има бедро ${a} см и основа ${b} см. Колко е обиколката?`, `An isosceles triangle has legs ${a} cm and base ${b} cm. Find its perimeter.`), String(2 * a + b), [
        T("В равнобедрен триъгълник двете бедра са равни.", "In an isosceles triangle the two legs are equal."),
        `P = 2 · ${a} + ${b} = ${2 * a} + ${b} = ${2 * a + b} см.`,
      ]);
    }
    const a = R(30, 60), b = R(40, 120 - a);
    const c = 180 - a - b;
    const right = c === 90 || a === 90 || b === 90;
    const type = right ? T("правоъгълен", "right") : c > 90 || a > 90 || b > 90 ? T("тъпоъгълен", "obtuse") : T("остроъгълен", "acute");
    return mk("tritypes", lv, T(`Триъгълник има ъгли ${a}°, ${b}° и ${c}°. Какъв е според ъглите — остроъгълен, правоъгълен или тъпоъгълен?`, `A triangle has angles ${a}°, ${b}°, ${c}°. Classify it by angles: acute, right or obtuse?`), type, [
      T("Гледаме най-големия ъгъл.", "Look at the largest angle."),
      T(`Най-големият ъгъл е ${Math.max(a, b, c)}°.`, `The largest angle is ${Math.max(a, b, c)}°.`),
      right ? T("Има ъгъл 90°, значи триъгълникът е правоъгълен.", "There is a 90° angle, so the triangle is right.") : Math.max(a, b, c) > 90 ? T("Има ъгъл над 90°, значи е тъпоъгълен.", "An angle over 90° means it is obtuse.") : T("Всички ъгли са под 90°, значи е остроъгълен.", "All angles are below 90°, so it is acute."),
    ]);
  },

  square: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const a = R(3, 8 + lv * 2);
    const per = Math.random() < 0.5;
    if (per) {
      return mk("square", lv, T(`Квадрат има страна ${a} см. Колко е обиколката?`, `A square has side ${a} cm. Find its perimeter.`), String(4 * a), [
        T("Квадратът има 4 равни страни.", "A square has 4 equal sides."),
        `P = 4 · a = 4 · ${a} = ${4 * a} см.`,
      ]);
    }
    return mk("square", lv, T(`Квадрат има страна ${a} см. Колко е лицето?`, `A square has side ${a} cm. Find its area.`), String(a * a), [
      "S = a · a = a².",
      `S = ${a}² = ${a * a} см².`,
    ]);
  },

  rhombus: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const kind = R(0, 1);
    if (kind === 0) {
      const a = R(4, 9 + lv);
      return mk("rhombus", lv, T(`Ромб има страна ${a} см. Колко е обиколката?`, `A rhombus has side ${a} cm. Find its perimeter.`), String(4 * a), [
        T("Ромбът има 4 равни страни, като квадрата.", "A rhombus has 4 equal sides, like a square."),
        `P = 4 · ${a} = ${4 * a} см.`,
      ]);
    }
    const d1 = R(3, 6 + lv) * 2, d2 = R(3, 6 + lv) * 2;
    return mk("rhombus", lv, T(`Ромб има диагонали ${d1} см и ${d2} см. Колко е лицето?`, `A rhombus has diagonals ${d1} cm and ${d2} cm. Find its area.`), String((d1 * d2) / 2), [
      "S = (d₁ · d₂) : 2.",
      `S = (${d1} · ${d2}) : 2 = ${d1 * d2} : 2 = ${(d1 * d2) / 2} см².`,
    ]);
  },

  paralelogram: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const a = R(4, 9 + lv), h = R(2, 6 + lv);
    return mk("paralelogram", lv, T(`Паралелограм има основа ${a} см и височина към нея ${h} см. Колко е лицето?`, `A parallelogram has base ${a} cm and height ${h} cm. Find its area.`), String(a * h), [
      "S = a · h.",
      `S = ${a} · ${h} = ${a * h} см².`,
    ]);
  },

  trapezoid: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const h = R(2, 5 + lv) * 2;
    const a = R(5, 10 + lv), b = R(2, a - 2);
    const sum = a + b;
    return mk("trapezoid", lv, T(`Трапец има основи ${a} см и ${b} см и височина ${h} см. Колко е лицето?`, `A trapezoid has bases ${a} cm and ${b} cm and height ${h} cm. Find its area.`), String((sum * h) / 2), [
      "S = (a + b) · h : 2.",
      `a + b = ${a} + ${b} = ${sum}.`,
      `S = ${sum} · ${h} : 2 = ${sum * h} : 2 = ${(sum * h) / 2} см².`,
    ]);
  },

  circle: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const r = R(2, 6 + lv);
    const len = Math.random() < 0.5;
    if (len) {
      return mk("circle", lv, T(`Кръг има радиус ${r} см. Колко е дължината на окръжността? (π ≈ 3,14)`, `A circle has radius ${r} cm. Find its circumference. (π ≈ 3.14)`), String(Math.round(2 * 3.14 * r * 100) / 100).replace(".", l === "bg" ? "," : "."), [
        "C = 2 · π · r.",
        `C = 2 · 3,14 · ${r} = ${(Math.round(2 * 3.14 * r * 100) / 100).toString().replace(".", ",")} см.`,
      ]);
    }
    return mk("circle", lv, T(`Кръг има радиус ${r} см. Колко е лицето? (π ≈ 3,14)`, `A circle has radius ${r} cm. Find its area. (π ≈ 3.14)`), String(Math.round(3.14 * r * r * 100) / 100).replace(".", l === "bg" ? "," : "."), [
      "S = π · r².",
      `S = 3,14 · ${r}² = 3,14 · ${r * r} = ${(Math.round(3.14 * r * r * 100) / 100).toString().replace(".", ",")} см².`,
    ]);
  },

  cube: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const a = R(2, 5 + lv);
    const vol = Math.random() < 0.5;
    if (vol) {
      return mk("cube", lv, T(`Куб има ръб ${a} см. Колко е обемът?`, `A cube has edge ${a} cm. Find its volume.`), String(a * a * a), [
        "V = a · a · a = a³.",
        `V = ${a}³ = ${a * a * a} см³.`,
      ]);
    }
    return mk("cube", lv, T(`Куб има ръб ${a} см. Колко е повърхнината (сумата от лицата на всички стени)?`, `A cube has edge ${a} cm. Find its surface area.`), String(6 * a * a), [
      T("Кубът има 6 еднакви квадратни стени.", "A cube has 6 identical square faces."),
      `S = 6 · a² = 6 · ${a * a} = ${6 * a * a} см².`,
    ]);
  },

  prism: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const a = R(2, 6 + lv), b = R(2, 6 + lv), c = R(2, 6 + lv);
    return mk("prism", lv, T(`Правоъгълен паралелепипед има измерения ${a} см, ${b} см и ${c} см. Колко е обемът?`, `A rectangular prism has dimensions ${a} cm, ${b} cm, ${c} cm. Find its volume.`), String(a * b * c), [
      "V = a · b · c.",
      `V = ${a} · ${b} · ${c} = ${a * b * c} см³.`,
    ]);
  },

  cylinder: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const r = R(1, 4 + lv), h = R(3, 8 + lv);
    return mk("cylinder", lv, T(`Цилиндър има радиус на основата ${r} см и височина ${h} см. Колко е обемът? (π ≈ 3,14)`, `A cylinder has base radius ${r} cm and height ${h} cm. Find its volume. (π ≈ 3.14)`), String(Math.round(3.14 * r * r * h * 100) / 100).replace(".", l === "bg" ? "," : "."), [
      "V = π · r² · h.",
      `V = 3,14 · ${r}² · ${h} = 3,14 · ${r * r} · ${h}.`,
      `V = ${(Math.round(3.14 * r * r * h * 100) / 100).toString().replace(".", ",")} см³.`,
    ]);
  },

  cone: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const r = R(1, 4), h = R(3, 9);
    const v = Math.round((3.14 * r * r * h) / 3 * 100) / 100;
    return mk("cone", lv, T(`Конус има радиус на основата ${r} см и височина ${h} см. Колко е обемът? (π ≈ 3,14)`, `A cone has base radius ${r} cm and height ${h} cm. Find its volume. (π ≈ 3.14)`), String(v).replace(".", l === "bg" ? "," : "."), [
      "V = (π · r² · h) : 3 — конусът е 1/3 от цилиндър със същата основа и височина.",
      `V = (3,14 · ${r}² · ${h}) : 3 = ${(Math.round(3.14 * r * r * h * 100) / 100).toString().replace(".", ",")} : 3.`,
      `V = ${v.toString().replace(".", ",")} см³.`,
    ]);
  },

  sphere: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const r = R(1, 5);
    const v = Math.round((4 / 3) * 3.14 * r * r * r * 100) / 100;
    return mk("sphere", lv, T(`Сфера има радиус ${r} см. Колко е обемът? (π ≈ 3,14)`, `A sphere has radius ${r} cm. Find its volume. (π ≈ 3.14)`), String(v).replace(".", l === "bg" ? "," : "."), [
      "V = (4 : 3) · π · r³.",
      `r³ = ${r}³ = ${r * r * r}.`,
      `V = (4 : 3) · 3,14 · ${r * r * r} = ${v.toString().replace(".", ",")} см³.`,
    ]);
  },

  quadtypes: (lv, l) => {
    const T = (bg: string, en: string) => (l === "bg" ? bg : en);
    const a = R(30, 100), b = R(30, 100), c = R(30, 100);
    const d = 360 - a - b - c;
    return mk("quadtypes", lv, T(`Четириъгълник има ъгли ${a}°, ${b}° и ${c}°. Колко е четвъртият ъгъл?`, `A quadrilateral has angles ${a}°, ${b}°, ${c}°. Find the fourth angle.`), String(d), [
      T("Сумата на ъглите в четириъгълник е 360°.", "The angles of a quadrilateral add up to 360°."),
      `${a}° + ${b}° + ${c}° = ${a + b + c}°.`,
      `360° − ${a + b + c}° = ${d}°.`,
    ]);
  },
};

export const GEO_LABELS: Record<string, { bg: string; en: string }> = {
  tritypes: { bg: "Видове триъгълници", en: "Types of triangles" },
  square: { bg: "Квадрат", en: "Square" },
  rhombus: { bg: "Ромб", en: "Rhombus" },
  paralelogram: { bg: "Паралелограм", en: "Parallelogram" },
  trapezoid: { bg: "Трапец", en: "Trapezoid" },
  quadtypes: { bg: "Ъгли в четириъгълник", en: "Angles in a quadrilateral" },
  circle: { bg: "Кръг и окръжност", en: "Circle and circumference" },
  cube: { bg: "Куб", en: "Cube" },
  prism: { bg: "Паралелепипед и призма", en: "Rectangular prism" },
  cylinder: { bg: "Цилиндър", en: "Cylinder" },
  cone: { bg: "Конус", en: "Cone" },
  sphere: { bg: "Сфера и кълбо", en: "Sphere" },
};
