import type { Lang } from "./i18n";
import type { Problem } from "./math-engine";

type Gen = (level: number, lang: Lang) => Problem;
const R = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const mk = (topicId: string, level: number, prompt: string, answer: string, steps: string[]): Problem => ({ topicId, level, prompt, answer, steps });
const tr = (l: Lang) => (bg: string, en: string) => (l === "bg" ? bg : en);

export const PRIMARY_GENS: Record<string, Gen> = {
  numcompare: (lv, l) => {
    const T = tr(l);
    const a = R(10, 40 + lv * 12), b = R(10, 40 + lv * 12);
    const d = Math.abs(a - b);
    return mk("numcompare", lv, T(`Кое число е по-голямо — ${a} или ${b}? С колко?`, `Which is bigger, ${a} or ${b}? By how much?`), String(d), [
      T(`Сравняваме първо десетиците: ${Math.floor(a / 10)} и ${Math.floor(b / 10)}; ако са равни — единиците.`, `Compare tens first: ${Math.floor(a / 10)} and ${Math.floor(b / 10)}; if equal, compare ones.`),
      T(`По-голямото е ${Math.max(a, b)}.`, `The bigger one is ${Math.max(a, b)}.`),
      T(`Разликата: ${Math.max(a, b)} − ${Math.min(a, b)} = ${d}.`, `Difference: ${Math.max(a, b)} − ${Math.min(a, b)} = ${d}.`),
    ]);
  },

  measures: (lv, l) => {
    const T = tr(l);
    const k = R(0, 2);
    if (k === 0) {
      const m = R(1, 4 + lv), cm = R(5, 95);
      return mk("measures", lv, T(`Колко сантиметра са ${m} м и ${cm} см?`, `How many centimetres are ${m} m ${cm} cm?`), String(m * 100 + cm), [
        T("1 м = 100 см.", "1 m = 100 cm."),
        `${m} · 100 = ${m * 100}; ${m * 100} + ${cm} = ${m * 100 + cm}.`,
      ]);
    }
    if (k === 1) {
      const kg = R(1, 5 + lv), g = R(1, 9) * 100;
      return mk("measures", lv, T(`Колко грама са ${kg} кг и ${g} г?`, `How many grams are ${kg} kg ${g} g?`), String(kg * 1000 + g), [
        T("1 кг = 1000 г.", "1 kg = 1000 g."),
        `${kg} · 1000 + ${g} = ${kg * 1000 + g}.`,
      ]);
    }
    const p = R(2, 9), n = R(2, 5 + lv);
    return mk("measures", lv, T(`Тетрадка струва ${p} лв. Колко лева струват ${n} тетрадки?`, `A notebook costs ${p} lv. How much do ${n} notebooks cost?`), String(p * n), [
      T("Еднакви неща по еднаква цена → умножаваме.", "Same items at the same price → multiply."),
      `${n} · ${p} = ${p * n}.`,
    ]);
  },

  clock: (lv, l) => {
    const T = tr(l);
    const h = R(7, 15), m = R(0, 5) * 10, d = R(2, 6 + lv) * 5;
    const tot = h * 60 + m + d;
    const ans = `${Math.floor(tot / 60)}:${String(tot % 60).padStart(2, "0")}`;
    return mk("clock", lv, T(`Часът е ${h}:${String(m).padStart(2, "0")}. Колко ще е часът след ${d} минути? (пиши ч:мм)`, `It is ${h}:${String(m).padStart(2, "0")}. What time will it be in ${d} minutes? (h:mm)`), ans, [
      T("1 час = 60 минути.", "1 hour = 60 minutes."),
      T(`${m} + ${d} = ${m + d} минути.`, `${m} + ${d} = ${m + d} minutes.`),
      m + d >= 60 ? T(`${m + d} мин = 1 ч и ${m + d - 60} мин, затова часът става ${h + 1}.`, `${m + d} min = 1 h ${m + d - 60} min, so the hour becomes ${h + 1}.`) : T("Не стигаме до 60, часът остава същият.", "Below 60, the hour stays the same."),
      T(`Отговор: ${ans}.`, `Answer: ${ans}.`),
    ]);
  },

  shapes: (lv, l) => {
    const T = tr(l);
    const sh = [
      { bg: "триъгълник", en: "triangle", n: 3 },
      { bg: "квадрат", en: "square", n: 4 },
      { bg: "правоъгълник", en: "rectangle", n: 4 },
      { bg: "петоъгълник", en: "pentagon", n: 5 },
      { bg: "шестоъгълник", en: "hexagon", n: 6 },
    ];
    const s = sh[R(0, sh.length - 1)]!, c = R(2, 3 + lv);
    return mk("shapes", lv, T(`Колко върха имат общо ${c} фигури „${s.bg}“?`, `How many corners do ${c} ${s.en}s have in total?`), String(s.n * c), [
      T(`Един ${s.bg} има ${s.n} върха (колкото страни).`, `One ${s.en} has ${s.n} corners (as many as sides).`),
      `${c} · ${s.n} = ${s.n * c}.`,
    ]);
  },

  twostep: (lv, l) => {
    const T = tr(l);
    const a = R(10, 30 + lv * 5), b = R(3, 9), c = R(2, 9);
    const res = a + b - c;
    return mk("twostep", lv, T(`В автобус има ${a} души. На спирка се качват ${b}, а слизат ${c}. Колко души има сега?`, `A bus has ${a} people. At a stop ${b} get on and ${c} get off. How many now?`), String(res), [
      T("Качват се → събираме; слизат → изваждаме.", "Getting on → add; getting off → subtract."),
      `${a} + ${b} = ${a + b}.`,
      `${a + b} − ${c} = ${res}.`,
    ]);
  },

  bignum: (lv, l) => {
    const T = tr(l);
    const n = R(10000, 999999);
    const pos = R(0, 2);
    const names = [T("стотиците", "hundreds"), T("хилядите", "thousands"), T("десетките хиляди", "ten-thousands")];
    const pw = [100, 1000, 10000][pos]!;
    const dig = Math.floor(n / pw) % 10;
    return mk("bignum", lv, T(`Коя цифра е на мястото на ${names[pos]} в числото ${n.toLocaleString("bg-BG")}?`, `Which digit is in the ${names[pos]} place in ${n.toLocaleString("en-US")}?`), String(dig), [
      T("Броим разредите отдясно наляво: единици, десетици, стотици, хиляди, десетки хиляди…", "Count places from the right: ones, tens, hundreds, thousands, ten-thousands…"),
      T(`Делим на ${pw} и взимаме последната цифра: ${Math.floor(n / pw)} → ${dig}.`, `Divide by ${pw} and take the last digit: ${Math.floor(n / pw)} → ${dig}.`),
    ]);
  },

  rounding: (lv, l) => {
    const T = tr(l);
    const n = R(1000, 99999);
    const to = [10, 100, 1000][R(0, Math.min(2, lv - 1 < 0 ? 0 : lv - 1))]!;
    const r = Math.round(n / to) * to;
    const next = Math.floor((n % to) / (to / 10));
    return mk("rounding", lv, T(`Закръгли ${n} до ${to}.`, `Round ${n} to the nearest ${to}.`), String(r), [
      T(`Гледаме цифрата вдясно от разреда, до който закръгляме: ${next}.`, `Look at the digit to the right of the rounding place: ${next}.`),
      next >= 5 ? T("Тя е 5 или повече → закръгляме нагоре.", "It is 5 or more → round up.") : T("Тя е под 5 → закръгляме надолу.", "It is below 5 → round down."),
      T(`Отговор: ${r}.`, `Answer: ${r}.`),
    ]);
  },

  remdiv: (lv, l) => {
    const T = tr(l);
    const d = R(3, 9), q = R(3, 8 + lv * 2), r = R(1, d - 1);
    const n = d * q + r;
    return mk("remdiv", lv, T(`${n} : ${d} = ? (с остатък). Колко е остатъкът?`, `${n} : ${d} = ? (with remainder). What is the remainder?`), String(r), [
      T(`Търсим най-голямото кратно на ${d}, не по-голямо от ${n}: ${d} · ${q} = ${d * q}.`, `Find the largest multiple of ${d} not above ${n}: ${d} · ${q} = ${d * q}.`),
      `${n} − ${d * q} = ${r}.`,
      T(`${n} : ${d} = ${q} (ост. ${r}). Остатъкът винаги е по-малък от делителя.`, `${n} : ${d} = ${q} r ${r}. The remainder is always less than the divisor.`),
    ]);
  },

  unitconv: (lv, l) => {
    const T = tr(l);
    const k = R(0, 2);
    if (k === 0) {
      const km = R(2, 9), m = R(1, 9) * 100;
      return mk("unitconv", lv, T(`Колко метра са ${km} км ${m} м?`, `How many metres are ${km} km ${m} m?`), String(km * 1000 + m), [T("1 км = 1000 м.", "1 km = 1000 m."), `${km} · 1000 + ${m} = ${km * 1000 + m}.`]);
    }
    if (k === 1) {
      const h = R(2, 6), mi = R(5, 55);
      return mk("unitconv", lv, T(`Колко минути са ${h} ч ${mi} мин?`, `How many minutes are ${h} h ${mi} min?`), String(h * 60 + mi), [T("1 ч = 60 мин.", "1 h = 60 min."), `${h} · 60 + ${mi} = ${h * 60 + mi}.`]);
    }
    const lit = R(2, 9);
    return mk("unitconv", lv, T(`Колко милилитра са ${lit} л?`, `How many millilitres are ${lit} L?`), String(lit * 1000), [T("1 л = 1000 мл.", "1 L = 1000 mL."), `${lit} · 1000 = ${lit * 1000}.`]);
  },

  rectangle: (lv, l) => {
    const T = tr(l);
    const a = R(3, 9 + lv), b = R(2, a);
    if (Math.random() < 0.5) {
      return mk("rectangle", lv, T(`Правоъгълник има страни ${a} см и ${b} см. Колко е обиколката?`, `A rectangle has sides ${a} cm and ${b} cm. Find the perimeter.`), String(2 * (a + b)), [
        "P = 2 · (a + b).",
        `P = 2 · (${a} + ${b}) = 2 · ${a + b} = ${2 * (a + b)} см.`,
      ]);
    }
    const P = 2 * (a + b);
    return mk("rectangle", lv, T(`Правоъгълник има обиколка ${P} см и едната страна ${a} см. Колко е другата страна?`, `A rectangle has perimeter ${P} cm and one side ${a} cm. Find the other side.`), String(b), [
      T("Половината обиколка е сборът на двете страни.", "Half the perimeter is the sum of the two sides."),
      `${P} : 2 = ${a + b}.`,
      `${a + b} − ${a} = ${b} см.`,
    ]);
  },

  angletypes: (lv, l) => {
    const T = tr(l);
    const a = R(15, 80);
    if (Math.random() < 0.5) {
      return mk("angletypes", lv, T(`Два съседни ъгъла образуват изправен ъгъл. Единият е ${a}°. Колко е другият?`, `Two adjacent angles form a straight angle. One is ${a}°. Find the other.`), String(180 - a), [
        T("Изправеният ъгъл е 180°.", "A straight angle is 180°."),
        `180° − ${a}° = ${180 - a}°.`,
      ]);
    }
    return mk("angletypes", lv, T(`Прав ъгъл е разделен на два ъгъла. Единият е ${a}°. Колко е другият?`, `A right angle is split into two angles. One is ${a}°. Find the other.`), String(90 - a), [
      T("Правият ъгъл е 90°.", "A right angle is 90°."),
      `90° − ${a}° = ${90 - a}°.`,
    ]);
  },
};

export const PRIMARY_LABELS: Record<string, { bg: string; en: string }> = {
  numcompare: { bg: "Числа до 100 и сравняване", en: "Numbers to 100 and comparing" },
  measures: { bg: "Мерки: см, кг, лева", en: "Measures: cm, kg, money" },
  clock: { bg: "Часовник и време", en: "Clock and time" },
  shapes: { bg: "Геометрични фигури", en: "Geometric shapes" },
  twostep: { bg: "Задачи с две действия", en: "Two-step word problems" },
  bignum: { bg: "Числа до 1 000 000", en: "Numbers to 1,000,000" },
  rounding: { bg: "Закръгляване", en: "Rounding" },
  remdiv: { bg: "Деление с остатък", en: "Division with remainder" },
  unitconv: { bg: "Преобразуване на мерни единици", en: "Converting units" },
  rectangle: { bg: "Правоъгълник", en: "Rectangle" },
  angletypes: { bg: "Видове ъгли", en: "Types of angles" },
};
