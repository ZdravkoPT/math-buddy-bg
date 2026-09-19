import type { Problem } from "./math-engine";
import type { Lang } from "./i18n";

export type Bi = { bg: string; en: string };

export type PaperTask = {
  topicId: string;
  prompt: Bi;
  answer: string;
  steps: Bi[];
};

export type PaperKind = "textbook" | "nvo" | "dzi" | "olympiad";

export type Paper = {
  id: string;
  grade: number;
  kind: PaperKind;
  title: Bi;
  source: Bi;
  tasks: PaperTask[];
};

export const KIND_LABEL: Record<PaperKind, Bi> = {
  textbook: { bg: "Учебник · контролно", en: "Textbook · class test" },
  nvo: { bg: "НВО", en: "National exam (NVO)" },
  dzi: { bg: "ДЗИ · матура", en: "State exam (matura)" },
  olympiad: { bg: "Олимпиада · състезание", en: "Olympiad · contest" },
};

/** Раздели по учебната програма на МОН за всеки клас. */
export const TEXTBOOK_UNITS: Record<number, Bi[]> = {
  1: [
    { bg: "Числата до 20 — събиране и изваждане", en: "Numbers to 20 — addition and subtraction" },
    { bg: "Текстови задачи с една пресмятане", en: "One-step word problems" },
    { bg: "Геометрични фигури и мерки", en: "Shapes and simple measures" },
  ],
  2: [
    { bg: "Числата до 100", en: "Numbers to 100" },
    { bg: "Таблично умножение и деление", en: "Multiplication and division tables" },
    { bg: "Мерни единици за дължина, време и пари", en: "Units of length, time and money" },
  ],
  3: [
    { bg: "Числата до 1000", en: "Numbers to 1000" },
    { bg: "Умножение и деление с едноцифрено число", en: "Multiplying and dividing by one digit" },
    { bg: "Правоъгълник и квадрат — обиколка", en: "Rectangle and square — perimeter" },
  ],
  4: [
    { bg: "Многоцифрени числа", en: "Multi-digit numbers" },
    { bg: "Умножение и деление с двуцифрено число", en: "Multiplying and dividing by two digits" },
    { bg: "Части на цялото и лице на фигура", en: "Fractions of a whole and area" },
  ],
  5: [
    { bg: "Обикновени дроби", en: "Common fractions" },
    { bg: "Десетични дроби", en: "Decimal fractions" },
    { bg: "Проценти и лице на фигури", en: "Percentages and areas" },
  ],
  6: [
    { bg: "Отношения, пропорции и проценти", en: "Ratio, proportion and percent" },
    { bg: "Рационални числа", en: "Rational numbers" },
    { bg: "Уравнения от първа степен", en: "First-degree equations" },
  ],
  7: [
    { bg: "Степени и тъждествени преобразувания", en: "Powers and algebraic identities" },
    { bg: "Линейни уравнения и неравенства", en: "Linear equations and inequalities" },
    { bg: "Триъгълник — ъгли и еднаквост", en: "Triangle — angles and congruence" },
  ],
  8: [
    { bg: "Системи линейни уравнения", en: "Systems of linear equations" },
    { bg: "Питагорова теорема", en: "Pythagorean theorem" },
    { bg: "Успоредник, трапец, лице", en: "Parallelogram, trapezium, area" },
  ],
  9: [
    { bg: "Квадратни уравнения и функции", en: "Quadratic equations and functions" },
    { bg: "Подобни триъгълници", en: "Similar triangles" },
    { bg: "Аритметична прогресия", en: "Arithmetic progression" },
  ],
  10: [
    { bg: "Тригонометрични функции", en: "Trigonometric functions" },
    { bg: "Прогресии", en: "Progressions" },
    { bg: "Комбинаторика", en: "Combinatorics" },
  ],
  11: [
    { bg: "Логаритми и логаритмични уравнения", en: "Logarithms and logarithmic equations" },
    { bg: "Геометрична прогресия и лихви", en: "Geometric progression and interest" },
    { bg: "Стереометрия — обеми", en: "Solid geometry — volumes" },
  ],
  12: [
    { bg: "Производна и приложения", en: "Derivative and applications" },
    { bg: "Интеграл и лице под графика", en: "Integral and area under a curve" },
    { bg: "Вероятности и статистика", en: "Probability and statistics" },
  ],
};

const P = (
  topicId: string,
  prompt: Bi,
  answer: string,
  steps: Bi[],
): PaperTask => ({ topicId, prompt, answer, steps });

export const PAPERS: Paper[] = [
  {
    id: "g1-test1",
    grade: 1,
    kind: "textbook",
    title: { bg: "Контролно: числата до 20", en: "Class test: numbers to 20" },
    source: { bg: "По учебна програма, 1. клас", en: "Curriculum-based, grade 1" },
    tasks: [
      P("addsub20", { bg: "8 + 7 = ?", en: "8 + 7 = ?" }, "15", [
        { bg: "Допълни 8 до 10: 8 + 2 = 10.", en: "Make 8 up to 10: 8 + 2 = 10." },
        { bg: "От 7 остават 5.", en: "5 is left from the 7." },
        { bg: "10 + 5 = 15.", en: "10 + 5 = 15." },
      ]),
      P("addsub20", { bg: "16 − 9 = ?", en: "16 − 9 = ?" }, "7", [
        { bg: "Извади първо 6: 16 − 6 = 10.", en: "Subtract 6 first: 16 − 6 = 10." },
        { bg: "Остава да извадиш още 3: 10 − 3 = 7.", en: "Subtract the remaining 3: 10 − 3 = 7." },
      ]),
      P("wordsimple", {
        bg: "Мария има 12 стикера. Дава 5 на брат си. Колко ѝ остават?",
        en: "Maria has 12 stickers. She gives 5 to her brother. How many are left?",
      }, "7", [
        { bg: "Дава значи изваждане.", en: "Giving away means subtraction." },
        { bg: "12 − 5 = 7 стикера.", en: "12 − 5 = 7 stickers." },
      ]),
      P("addsub20", { bg: "Кое число липсва: 9 + ? = 17", en: "Which number is missing: 9 + ? = 17" }, "8", [
        { bg: "Търсим разликата: 17 − 9.", en: "Find the difference: 17 − 9." },
        { bg: "17 − 9 = 8.", en: "17 − 9 = 8." },
      ]),
      P("wordsimple", {
        bg: "В кошница има 6 червени и 8 зелени ябълки. Колко са всички?",
        en: "A basket has 6 red and 8 green apples. How many in total?",
      }, "14", [
        { bg: "Всички значи събиране.", en: "In total means addition." },
        { bg: "6 + 8 = 14 ябълки.", en: "6 + 8 = 14 apples." },
      ]),
    ],
  },
  {
    id: "g2-test1",
    grade: 2,
    kind: "textbook",
    title: { bg: "Контролно: до 100 и таблици", en: "Class test: to 100 and tables" },
    source: { bg: "По учебна програма, 2. клас", en: "Curriculum-based, grade 2" },
    tasks: [
      P("addsub100", { bg: "47 + 28 = ?", en: "47 + 28 = ?" }, "75", [
        { bg: "Десетици: 40 + 20 = 60.", en: "Tens: 40 + 20 = 60." },
        { bg: "Единици: 7 + 8 = 15.", en: "Ones: 7 + 8 = 15." },
        { bg: "60 + 15 = 75.", en: "60 + 15 = 75." },
      ]),
      P("multable", { bg: "7 · 6 = ?", en: "7 · 6 = ?" }, "42", [
        { bg: "7 · 6 = 7 · 5 + 7.", en: "7 · 6 = 7 · 5 + 7." },
        { bg: "35 + 7 = 42.", en: "35 + 7 = 42." },
      ]),
      P("multable", { bg: "56 : 8 = ?", en: "56 : 8 = ?" }, "7", [
        { bg: "Търсим колко пъти 8 се съдържа в 56.", en: "How many 8s fit into 56?" },
        { bg: "8 · 7 = 56, значи отговорът е 7.", en: "8 · 7 = 56, so the answer is 7." },
      ]),
      P("wordsimple", {
        bg: "В 4 кутии има по 9 моливa. Колко са моливите?",
        en: "There are 9 pencils in each of 4 boxes. How many pencils in all?",
      }, "36", [
        { bg: "По равно в кутии значи умножение.", en: "Equal groups mean multiplication." },
        { bg: "4 · 9 = 36 молива.", en: "4 · 9 = 36 pencils." },
      ]),
      P("addsub100", { bg: "83 − 46 = ?", en: "83 − 46 = ?" }, "37", [
        { bg: "83 − 40 = 43.", en: "83 − 40 = 43." },
        { bg: "43 − 6 = 37.", en: "43 − 6 = 37." },
      ]),
    ],
  },
  {
    id: "g3-test1",
    grade: 3,
    kind: "textbook",
    title: { bg: "Контролно: числата до 1000", en: "Class test: numbers to 1000" },
    source: { bg: "По учебна програма, 3. клас", en: "Curriculum-based, grade 3" },
    tasks: [
      P("mulcolumn", { bg: "134 · 3 = ?", en: "134 · 3 = ?" }, "402", [
        { bg: "100 · 3 = 300.", en: "100 · 3 = 300." },
        { bg: "34 · 3 = 102.", en: "34 · 3 = 102." },
        { bg: "300 + 102 = 402.", en: "300 + 102 = 402." },
      ]),
      P("divide", { bg: "252 : 4 = ?", en: "252 : 4 = ?" }, "63", [
        { bg: "240 : 4 = 60.", en: "240 : 4 = 60." },
        { bg: "12 : 4 = 3.", en: "12 : 4 = 3." },
        { bg: "60 + 3 = 63.", en: "60 + 3 = 63." },
      ]),
      P("area", {
        bg: "Правоъгълник е със страни 12 см и 5 см. Каква е обиколката му в см?",
        en: "A rectangle has sides 12 cm and 5 cm. What is its perimeter in cm?",
      }, "34", [
        { bg: "Обиколка = 2 · (a + b).", en: "Perimeter = 2 · (a + b)." },
        { bg: "a + b = 12 + 5 = 17.", en: "a + b = 12 + 5 = 17." },
        { bg: "2 · 17 = 34 см.", en: "2 · 17 = 34 cm." },
      ]),
      P("wordsimple", {
        bg: "Книга има 320 страници. Иван е прочел 145. Колко му остават?",
        en: "A book has 320 pages. Ivan read 145. How many are left?",
      }, "175", [
        { bg: "320 − 145.", en: "320 − 145." },
        { bg: "320 − 100 = 220, 220 − 45 = 175 страници.", en: "320 − 100 = 220, 220 − 45 = 175 pages." },
      ]),
      P("multable", { bg: "8 · 9 = ?", en: "8 · 9 = ?" }, "72", [
        { bg: "8 · 9 = 8 · 10 − 8.", en: "8 · 9 = 8 · 10 − 8." },
        { bg: "80 − 8 = 72.", en: "80 − 8 = 72." },
      ]),
    ],
  },
  {
    id: "g4-nvo",
    grade: 4,
    kind: "nvo",
    title: { bg: "НВО 4. клас — примерен вариант", en: "NVO grade 4 — sample paper" },
    source: { bg: "По формата на НВО, 4. клас", en: "In the NVO grade 4 format" },
    tasks: [
      P("mulcolumn", { bg: "236 · 14 = ?", en: "236 · 14 = ?" }, "3304", [
        { bg: "236 · 10 = 2360.", en: "236 · 10 = 2360." },
        { bg: "236 · 4 = 944.", en: "236 · 4 = 944." },
        { bg: "2360 + 944 = 3304.", en: "2360 + 944 = 3304." },
      ]),
      P("divide", { bg: "728 : 8 = ?", en: "728 : 8 = ?" }, "91", [
        { bg: "720 : 8 = 90.", en: "720 : 8 = 90." },
        { bg: "8 : 8 = 1.", en: "8 : 8 = 1." },
        { bg: "90 + 1 = 91.", en: "90 + 1 = 91." },
      ]),
      P("fracpart", {
        bg: "Колко е 3/4 от 48?",
        en: "What is 3/4 of 48?",
      }, "36", [
        { bg: "48 : 4 = 12 (една четвърт).", en: "48 : 4 = 12 (one quarter)." },
        { bg: "12 · 3 = 36.", en: "12 · 3 = 36." },
      ]),
      P("area", {
        bg: "Лице на правоъгълник със страни 15 м и 8 м в кв. м?",
        en: "Area of a rectangle with sides 15 m and 8 m, in sq. m?",
      }, "120", [
        { bg: "S = a · b.", en: "S = a · b." },
        { bg: "15 · 8 = 120 кв. м.", en: "15 · 8 = 120 sq. m." },
      ]),
      P("wordsimple", {
        bg: "Билет струва 7 лв. Класът купува 26 билета. Колко лева плаща класът?",
        en: "A ticket costs 7 BGN. The class buys 26 tickets. How much does the class pay?",
      }, "182", [
        { bg: "26 · 7.", en: "26 · 7." },
        { bg: "20 · 7 = 140, 6 · 7 = 42.", en: "20 · 7 = 140, 6 · 7 = 42." },
        { bg: "140 + 42 = 182 лв.", en: "140 + 42 = 182 BGN." },
      ]),
    ],
  },
  {
    id: "g5-test1",
    grade: 5,
    kind: "textbook",
    title: { bg: "Контролно: дроби и проценти", en: "Class test: fractions and percent" },
    source: { bg: "По учебна програма, 5. клас", en: "Curriculum-based, grade 5" },
    tasks: [
      P("fracadd", { bg: "2/3 + 1/6 = ? (дроб)", en: "2/3 + 1/6 = ? (fraction)" }, "5/6", [
        { bg: "Общ знаменател 6: 2/3 = 4/6.", en: "Common denominator 6: 2/3 = 4/6." },
        { bg: "4/6 + 1/6 = 5/6.", en: "4/6 + 1/6 = 5/6." },
      ]),
      P("decimals", { bg: "4,7 + 3,85 = ?", en: "4.7 + 3.85 = ?" }, "8.55", [
        { bg: "Изравни знаците: 4,70 + 3,85.", en: "Align decimals: 4.70 + 3.85." },
        { bg: "Сборът е 8,55.", en: "The sum is 8.55." },
      ]),
      P("percent", { bg: "Колко е 15% от 240?", en: "What is 15% of 240?" }, "36", [
        { bg: "10% от 240 = 24.", en: "10% of 240 = 24." },
        { bg: "5% = 12.", en: "5% = 12." },
        { bg: "24 + 12 = 36.", en: "24 + 12 = 36." },
      ]),
      P("fracmul", { bg: "3/5 · 10 = ?", en: "3/5 · 10 = ?" }, "6", [
        { bg: "10 : 5 = 2.", en: "10 : 5 = 2." },
        { bg: "2 · 3 = 6.", en: "2 · 3 = 6." },
      ]),
      P("area", {
        bg: "Триъгълник с основа 12 см и височина 7 см — лице в кв. см?",
        en: "Triangle with base 12 cm and height 7 cm — area in sq. cm?",
      }, "42", [
        { bg: "S = a · h : 2.", en: "S = a · h / 2." },
        { bg: "12 · 7 = 84, 84 : 2 = 42.", en: "12 · 7 = 84, 84 / 2 = 42." },
      ]),
    ],
  },
  {
    id: "g6-test1",
    grade: 6,
    kind: "textbook",
    title: { bg: "Контролно: рационални числа", en: "Class test: rational numbers" },
    source: { bg: "По учебна програма, 6. клас", en: "Curriculum-based, grade 6" },
    tasks: [
      P("negatives", { bg: "−7 + 12 − 9 = ?", en: "−7 + 12 − 9 = ?" }, "-4", [
        { bg: "−7 + 12 = 5.", en: "−7 + 12 = 5." },
        { bg: "5 − 9 = −4.", en: "5 − 9 = −4." },
      ]),
      P("percent", {
        bg: "Цена 80 лв. се намалява с 25%. Каква е новата цена в лева?",
        en: "A price of 80 BGN drops by 25%. What is the new price in BGN?",
      }, "60", [
        { bg: "25% от 80 = 20.", en: "25% of 80 = 20." },
        { bg: "80 − 20 = 60 лв.", en: "80 − 20 = 60 BGN." },
      ]),
      P("ratio", {
        bg: "Разделете 450 лв. в отношение 4 : 5. Колко е по-малката част?",
        en: "Split 450 BGN in ratio 4 : 5. What is the smaller part?",
      }, "200", [
        { bg: "Части: 4 + 5 = 9.", en: "Parts: 4 + 5 = 9." },
        { bg: "450 : 9 = 50 за една част.", en: "450 / 9 = 50 per part." },
        { bg: "4 · 50 = 200 лв.", en: "4 · 50 = 200 BGN." },
      ]),
      P("lineareq", { bg: "Решете: 5x − 8 = 27. x = ?", en: "Solve: 5x − 8 = 27. x = ?" }, "7", [
        { bg: "5x = 27 + 8 = 35.", en: "5x = 27 + 8 = 35." },
        { bg: "x = 35 : 5 = 7.", en: "x = 35 / 5 = 7." },
      ]),
      P("gcdlcm", { bg: "НОК(12, 18) = ?", en: "LCM(12, 18) = ?" }, "36", [
        { bg: "12 = 2²·3, 18 = 2·3².", en: "12 = 2²·3, 18 = 2·3²." },
        { bg: "НОК = 2²·3² = 36.", en: "LCM = 2²·3² = 36." },
      ]),
    ],
  },
  {
    id: "g7-nvo",
    grade: 7,
    kind: "nvo",
    title: { bg: "НВО 7. клас — примерен вариант", en: "NVO grade 7 — sample paper" },
    source: { bg: "По формата на НВО, 7. клас", en: "In the NVO grade 7 format" },
    tasks: [
      P("lineareq", {
        bg: "Решете уравнението 3(x − 2) = 2x + 5. x = ?",
        en: "Solve 3(x − 2) = 2x + 5. x = ?",
      }, "11", [
        { bg: "Разкрий скобите: 3x − 6 = 2x + 5.", en: "Expand: 3x − 6 = 2x + 5." },
        { bg: "3x − 2x = 5 + 6.", en: "3x − 2x = 5 + 6." },
        { bg: "x = 11.", en: "x = 11." },
      ]),
      P("powers", {
        bg: "Пресметнете (2³)² : 2⁴",
        en: "Compute (2³)² / 2⁴",
      }, "4", [
        { bg: "(2³)² = 2⁶.", en: "(2³)² = 2⁶." },
        { bg: "2⁶ : 2⁴ = 2² = 4.", en: "2⁶ / 2⁴ = 2² = 4." },
      ]),
      P("angles", {
        bg: "В триъгълник два ъгъла са 47° и 68°. Колко градуса е третият?",
        en: "Two angles of a triangle are 47° and 68°. What is the third, in degrees?",
      }, "65", [
        { bg: "Сборът на ъглите е 180°.", en: "Angles sum to 180°." },
        { bg: "47 + 68 = 115.", en: "47 + 68 = 115." },
        { bg: "180 − 115 = 65°.", en: "180 − 115 = 65°." },
      ]),
      P("ratio", {
        bg: "Мащаб 1 : 25000. Отсечка от 4 см на картата отговаря на колко метра?",
        en: "Scale 1 : 25000. A 4 cm segment on the map is how many metres?",
      }, "1000", [
        { bg: "4 см · 25000 = 100000 см.", en: "4 cm · 25000 = 100000 cm." },
        { bg: "100000 см = 1000 м.", en: "100000 cm = 1000 m." },
      ]),
      P("area", {
        bg: "Успоредник с основа 14 см и височина 6 см — лице в кв. см?",
        en: "Parallelogram with base 14 cm and height 6 cm — area in sq. cm?",
      }, "84", [
        { bg: "S = a · h.", en: "S = a · h." },
        { bg: "14 · 6 = 84 кв. см.", en: "14 · 6 = 84 sq. cm." },
      ]),
    ],
  },
  {
    id: "g8-test1",
    grade: 8,
    kind: "textbook",
    title: { bg: "Контролно: системи и Питагор", en: "Class test: systems and Pythagoras" },
    source: { bg: "По учебна програма, 8. клас", en: "Curriculum-based, grade 8" },
    tasks: [
      P("systems", {
        bg: "x + y = 14, x − y = 4. Колко е x?",
        en: "x + y = 14, x − y = 4. What is x?",
      }, "9", [
        { bg: "Събери двете уравнения: 2x = 18.", en: "Add the equations: 2x = 18." },
        { bg: "x = 9.", en: "x = 9." },
      ]),
      P("pythagoras", {
        bg: "Правоъгълен триъгълник с катети 9 и 12. Колко е хипотенузата?",
        en: "Right triangle with legs 9 and 12. Find the hypotenuse.",
      }, "15", [
        { bg: "c² = 9² + 12² = 81 + 144 = 225.", en: "c² = 9² + 12² = 81 + 144 = 225." },
        { bg: "c = 15.", en: "c = 15." },
      ]),
      P("powers", {
        bg: "Опростете: (x²)³ · x⁻⁴ при x ≠ 0. Отговорът е x на степен ?",
        en: "Simplify (x²)³ · x⁻⁴ for x ≠ 0. The answer is x to the power of ?",
      }, "2", [
        { bg: "(x²)³ = x⁶.", en: "(x²)³ = x⁶." },
        { bg: "x⁶ · x⁻⁴ = x².", en: "x⁶ · x⁻⁴ = x²." },
      ]),
      P("area", {
        bg: "Трапец с основи 10 и 6 и височина 4 — лице?",
        en: "Trapezium with bases 10 and 6, height 4 — area?",
      }, "32", [
        { bg: "S = (a + b) : 2 · h.", en: "S = (a + b)/2 · h." },
        { bg: "(10 + 6) : 2 = 8.", en: "(10 + 6)/2 = 8." },
        { bg: "8 · 4 = 32.", en: "8 · 4 = 32." },
      ]),
      P("lineareq", {
        bg: "Решете: (x + 3)/2 = 7. x = ?",
        en: "Solve: (x + 3)/2 = 7. x = ?",
      }, "11", [
        { bg: "x + 3 = 14.", en: "x + 3 = 14." },
        { bg: "x = 11.", en: "x = 11." },
      ]),
    ],
  },
  {
    id: "g9-test1",
    grade: 9,
    kind: "textbook",
    title: { bg: "Контролно: квадратни уравнения", en: "Class test: quadratic equations" },
    source: { bg: "По учебна програма, 9. клас", en: "Curriculum-based, grade 9" },
    tasks: [
      P("quadratic", {
        bg: "x² − 7x + 12 = 0. Кой е по-големият корен?",
        en: "x² − 7x + 12 = 0. What is the larger root?",
      }, "4", [
        { bg: "Търсим числа със сбор 7 и произведение 12: 3 и 4.", en: "Find numbers with sum 7 and product 12: 3 and 4." },
        { bg: "Корените са 3 и 4, по-големият е 4.", en: "Roots are 3 and 4; the larger is 4." },
      ]),
      P("quadratic", {
        bg: "Дискриминантът на 2x² + 5x − 3 = 0 е ?",
        en: "The discriminant of 2x² + 5x − 3 = 0 is ?",
      }, "49", [
        { bg: "D = b² − 4ac.", en: "D = b² − 4ac." },
        { bg: "25 − 4·2·(−3) = 25 + 24 = 49.", en: "25 − 4·2·(−3) = 25 + 24 = 49." },
      ]),
      P("progression", {
        bg: "Аритметична прогресия: a₁ = 5, d = 3. Колко е a₁₀?",
        en: "Arithmetic progression: a₁ = 5, d = 3. Find a₁₀.",
      }, "32", [
        { bg: "aₙ = a₁ + (n − 1)d.", en: "aₙ = a₁ + (n − 1)d." },
        { bg: "5 + 9·3 = 32.", en: "5 + 9·3 = 32." },
      ]),
      P("pythagoras", {
        bg: "Диагонал на квадрат със страна 6 е 6√2. Колко е приблизително (2 знака)?",
        en: "The diagonal of a square with side 6 is 6√2. Approximate it (2 decimals).",
      }, "8.49", [
        { bg: "√2 ≈ 1,4142.", en: "√2 ≈ 1.4142." },
        { bg: "6 · 1,4142 ≈ 8,49.", en: "6 · 1.4142 ≈ 8.49." },
      ]),
      P("systems", {
        bg: "2x + y = 11, x − y = 1. Колко е y?",
        en: "2x + y = 11, x − y = 1. What is y?",
      }, "3", [
        { bg: "От второто: x = y + 1.", en: "From the second: x = y + 1." },
        { bg: "2(y + 1) + y = 11 → 3y = 9.", en: "2(y + 1) + y = 11 → 3y = 9." },
        { bg: "y = 3.", en: "y = 3." },
      ]),
    ],
  },
  {
    id: "g10-nvo",
    grade: 10,
    kind: "nvo",
    title: { bg: "НВО 10. клас — примерен вариант", en: "NVO grade 10 — sample paper" },
    source: { bg: "По формата на НВО, 10. клас", en: "In the NVO grade 10 format" },
    tasks: [
      P("trig", { bg: "sin 30° + cos 60° = ?", en: "sin 30° + cos 60° = ?" }, "1", [
        { bg: "sin 30° = 0,5.", en: "sin 30° = 0.5." },
        { bg: "cos 60° = 0,5.", en: "cos 60° = 0.5." },
        { bg: "0,5 + 0,5 = 1.", en: "0.5 + 0.5 = 1." },
      ]),
      P("quadratic", {
        bg: "Сборът на корените на x² − 9x + 20 = 0 е ?",
        en: "The sum of the roots of x² − 9x + 20 = 0 is ?",
      }, "9", [
        { bg: "По Виет сборът е −b/a.", en: "By Vieta the sum is −b/a." },
        { bg: "9/1 = 9.", en: "9/1 = 9." },
      ]),
      P("combinatorics", {
        bg: "По колко начина от 6 ученици се избират 2 дежурни?",
        en: "In how many ways can 2 monitors be chosen from 6 students?",
      }, "15", [
        { bg: "C(6,2) = 6·5 : 2.", en: "C(6,2) = 6·5 / 2." },
        { bg: "30 : 2 = 15.", en: "30 / 2 = 15." },
      ]),
      P("progression", {
        bg: "Сборът на първите 20 естествени числа е ?",
        en: "The sum of the first 20 natural numbers is ?",
      }, "210", [
        { bg: "S = n(n + 1) : 2.", en: "S = n(n + 1)/2." },
        { bg: "20 · 21 : 2 = 210.", en: "20 · 21 / 2 = 210." },
      ]),
      P("trig", {
        bg: "В правоъгълен триъгълник хипотенузата е 10, ъгъл 30°. Колко е срещулежащият катет?",
        en: "In a right triangle the hypotenuse is 10 and an angle is 30°. Find the opposite leg.",
      }, "5", [
        { bg: "a = c · sin 30°.", en: "a = c · sin 30°." },
        { bg: "10 · 0,5 = 5.", en: "10 · 0.5 = 5." },
      ]),
    ],
  },
  {
    id: "g11-test1",
    grade: 11,
    kind: "textbook",
    title: { bg: "Контролно: логаритми и прогресии", en: "Class test: logarithms and progressions" },
    source: { bg: "По учебна програма, 11. клас", en: "Curriculum-based, grade 11" },
    tasks: [
      P("logs", { bg: "log₂ 32 = ?", en: "log₂ 32 = ?" }, "5", [
        { bg: "2⁵ = 32.", en: "2⁵ = 32." },
        { bg: "Значи log₂ 32 = 5.", en: "So log₂ 32 = 5." },
      ]),
      P("logs", { bg: "log 2 + log 50 = ? (десетичен логаритъм)", en: "log 2 + log 50 = ? (base 10)" }, "2", [
        { bg: "log a + log b = log(ab).", en: "log a + log b = log(ab)." },
        { bg: "log(2·50) = log 100 = 2.", en: "log(2·50) = log 100 = 2." },
      ]),
      P("progressiongeo", {
        bg: "Геометрична прогресия: b₁ = 3, q = 2. Колко е b₆?",
        en: "Geometric progression: b₁ = 3, q = 2. Find b₆.",
      }, "96", [
        { bg: "bₙ = b₁ · qⁿ⁻¹.", en: "bₙ = b₁ · qⁿ⁻¹." },
        { bg: "3 · 2⁵ = 3 · 32 = 96.", en: "3 · 2⁵ = 3 · 32 = 96." },
      ]),
      P("trig", { bg: "tg 45° = ?", en: "tan 45° = ?" }, "1", [
        { bg: "tg 45° = sin 45° : cos 45°.", en: "tan 45° = sin 45° / cos 45°." },
        { bg: "Равни са, значи 1.", en: "They are equal, so 1." },
      ]),
      P("logs", {
        bg: "Решете 3ˣ = 81. x = ?",
        en: "Solve 3ˣ = 81. x = ?",
      }, "4", [
        { bg: "81 = 3⁴.", en: "81 = 3⁴." },
        { bg: "x = 4.", en: "x = 4." },
      ]),
    ],
  },
  {
    id: "g12-dzi",
    grade: 12,
    kind: "dzi",
    title: { bg: "ДЗИ матура — примерен вариант", en: "Matura (DZI) — sample paper" },
    source: { bg: "По формата на ДЗИ по математика", en: "In the DZI mathematics format" },
    tasks: [
      P("derivative", {
        bg: "f(x) = x³ − 4x. Колко е f′(2)?",
        en: "f(x) = x³ − 4x. Find f′(2).",
      }, "8", [
        { bg: "f′(x) = 3x² − 4.", en: "f′(x) = 3x² − 4." },
        { bg: "3·4 − 4 = 8.", en: "3·4 − 4 = 8." },
      ]),
      P("integral", {
        bg: "Пресметнете ∫₀² 3x² dx",
        en: "Evaluate ∫₀² 3x² dx",
      }, "8", [
        { bg: "Първообразна: x³.", en: "Antiderivative: x³." },
        { bg: "2³ − 0³ = 8.", en: "2³ − 0³ = 8." },
      ]),
      P("probability", {
        bg: "Хвърляме зар. Каква е вероятността за число, по-голямо от 4? (дроб)",
        en: "A die is rolled. Probability of a number greater than 4? (fraction)",
      }, "1/3", [
        { bg: "Благоприятни: 5 и 6 → 2 случая.", en: "Favourable: 5 and 6 → 2 outcomes." },
        { bg: "2/6 = 1/3.", en: "2/6 = 1/3." },
      ]),
      P("logs", { bg: "log₃ 27 + log₂ 8 = ?", en: "log₃ 27 + log₂ 8 = ?" }, "6", [
        { bg: "log₃ 27 = 3, log₂ 8 = 3.", en: "log₃ 27 = 3, log₂ 8 = 3." },
        { bg: "3 + 3 = 6.", en: "3 + 3 = 6." },
      ]),
      P("derivative", {
        bg: "Функцията f(x) = x² − 6x има минимум при x = ?",
        en: "The function f(x) = x² − 6x has a minimum at x = ?",
      }, "3", [
        { bg: "f′(x) = 2x − 6.", en: "f′(x) = 2x − 6." },
        { bg: "2x − 6 = 0 → x = 3.", en: "2x − 6 = 0 → x = 3." },
      ]),
    ],
  },
];

export function papersForGrade(grade: number) {
  return PAPERS.filter((p) => p.grade === grade);
}

export function paperById(id: string) {
  return PAPERS.find((p) => p.id === id);
}

export function unitsForGrade(grade: number): Bi[] {
  return TEXTBOOK_UNITS[grade] ?? [];
}

export function paperProblems(paper: Paper, lang: Lang): Problem[] {
  return paper.tasks.map((task) => ({
    topicId: task.topicId,
    level: 3,
    prompt: task.prompt[lang],
    answer: task.answer,
    steps: task.steps.map((s) => s[lang]),
  }));
}
