import type { Bi } from "./materials";
import { CURRICULUM } from "./math-engine";
import { EXTRA_LESSONS } from "./lessons-extra";

export type Example = {
  task: Bi;
  steps: Bi[];
  why: Bi;
};

export type Lesson = {
  topicId: string;
  idea: Bi;
  why: Bi;
  rules: Bi[];
  examples: Example[];
  mistakes: Bi[];
};

const L = (l: Lesson) => l;

export const LESSONS: Record<string, Lesson> = {
  addsub20: L({
    topicId: "addsub20",
    idea: {
      bg: "Събираме и изваждаме числа до 20, като минаваме през кръглото число 10. Така сметката се разделя на две лесни части.",
      en: "We add and subtract up to 20 by stepping through the round number 10, so the calculation splits into two easy parts.",
    },
    why: {
      bg: "Десетката е опора за ума. Мозъкът помни по-лесно „до 10 и после още толкова“, отколкото едно голямо събиране.",
      en: "Ten is a mental anchor. It is easier to remember 'up to 10, then a bit more' than one big addition.",
    },
    rules: [
      { bg: "8 + 5: допълваме 8 до 10 (трябват 2), остават 3 → 13.", en: "8 + 5: fill 8 up to 10 (needs 2), 3 remain → 13." },
      { bg: "Изваждане: първо слизаме до 10, после махаме остатъка.", en: "Subtraction: first drop to 10, then take away the rest." },
      { bg: "Редът при събиране не променя резултата: 3 + 9 = 9 + 3.", en: "Order does not change a sum: 3 + 9 = 9 + 3." },
    ],
    examples: [
      {
        task: { bg: "7 + 6 = ?", en: "7 + 6 = ?" },
        steps: [
          { bg: "7 + 3 = 10 (взимаме 3 от шестицата).", en: "7 + 3 = 10 (take 3 from the six)." },
          { bg: "Остават 6 − 3 = 3.", en: "3 left: 6 − 3 = 3." },
          { bg: "10 + 3 = 13.", en: "10 + 3 = 13." },
        ],
        why: { bg: "Разделяме 6 така, че да стигнем точно до 10 — оттам броенето е лесно.", en: "We split 6 so we land exactly on 10 — counting from there is easy." },
      },
      {
        task: { bg: "15 − 8 = ?", en: "15 − 8 = ?" },
        steps: [
          { bg: "15 − 5 = 10.", en: "15 − 5 = 10." },
          { bg: "Остава да махнем 8 − 5 = 3.", en: "Still remove 8 − 5 = 3." },
          { bg: "10 − 3 = 7.", en: "10 − 3 = 7." },
        ],
        why: { bg: "Слизаме до 10 на стъпки, за да не се броим на пръсти назад.", en: "We step down to 10 so we don't count backwards on fingers." },
      },
    ],
    mistakes: [
      { bg: "Забравяме остатъка след десетката (7 + 6 = 10 вместо 13).", en: "Forgetting the remainder after ten (7 + 6 = 10 instead of 13)." },
      { bg: "При изваждане броим самото число: 15 − 8 не започва от 8.", en: "When subtracting, don't start counting at 8 in 15 − 8." },
    ],
  }),

  addsub100: L({
    topicId: "addsub100",
    idea: {
      bg: "Числата до 100 разделяме на десетици и единици и събираме всяка част поотделно.",
      en: "Numbers to 100 split into tens and units; we add each part separately.",
    },
    why: {
      bg: "Позиционната система значи, че 47 = 40 + 7. Работим с по-малки числа и правим по-малко грешки.",
      en: "Place value means 47 = 40 + 7. Smaller numbers, fewer mistakes.",
    },
    rules: [
      { bg: "Събираме десетици с десетици, единици с единици.", en: "Add tens to tens, units to units." },
      { bg: "Ако единиците надминат 10, прехвърляме една десетица.", en: "If units pass 10, carry one ten." },
      { bg: "Проверка: обратното действие трябва да върне началото.", en: "Check: the inverse operation returns the start." },
    ],
    examples: [
      {
        task: { bg: "47 + 38 = ?", en: "47 + 38 = ?" },
        steps: [
          { bg: "40 + 30 = 70.", en: "40 + 30 = 70." },
          { bg: "7 + 8 = 15.", en: "7 + 8 = 15." },
          { bg: "70 + 15 = 85.", en: "70 + 15 = 85." },
        ],
        why: { bg: "15 съдържа една десетица, която се добавя към 70.", en: "15 contains one ten, added on top of 70." },
      },
      {
        task: { bg: "72 − 46 = ?", en: "72 − 46 = ?" },
        steps: [
          { bg: "72 − 40 = 32.", en: "72 − 40 = 32." },
          { bg: "32 − 6 = 26.", en: "32 − 6 = 26." },
          { bg: "Проверка: 26 + 46 = 72. ✓", en: "Check: 26 + 46 = 72. ✓" },
        ],
        why: { bg: "Първо махаме десетиците — така остава едно лесно изваждане.", en: "Remove the tens first, leaving one easy subtraction." },
      },
    ],
    mistakes: [
      { bg: "Изгубено пренасяне при единиците.", en: "Losing the carry from the units." },
      { bg: "Смесване на десетици и единици (47 + 38 = 75).", en: "Mixing tens with units (47 + 38 = 75)." },
    ],
  }),

  multable: L({
    topicId: "multable",
    idea: { bg: "Умножението е бързо събиране на еднакви групи: 6 · 4 значи 4 пъти по 6.", en: "Multiplication is fast adding of equal groups: 6 · 4 means 6 taken 4 times." },
    why: { bg: "Когато знаеш таблицата наизуст, всички по-нататъшни теми (дроби, проценти, уравнения) стават леки.", en: "Knowing the table by heart makes fractions, percents and equations easy later." },
    rules: [
      { bg: "a · b = b · a — половината таблица е наизуст сама.", en: "a · b = b · a — half the table comes free." },
      { bg: "· 5 = половината от · 10.", en: "· 5 is half of · 10." },
      { bg: "· 9 = · 10 минус самото число.", en: "· 9 = · 10 minus the number itself." },
    ],
    examples: [
      {
        task: { bg: "7 · 8 = ?", en: "7 · 8 = ?" },
        steps: [
          { bg: "7 · 8 = 7 · 10 − 7 · 2.", en: "7 · 8 = 7 · 10 − 7 · 2." },
          { bg: "70 − 14 = 56.", en: "70 − 14 = 56." },
        ],
        why: { bg: "Разлагаме 8 на 10 − 2, защото с 10 се смята моментално.", en: "Split 8 into 10 − 2, because ×10 is instant." },
      },
      {
        task: { bg: "6 · 9 = ?", en: "6 · 9 = ?" },
        steps: [
          { bg: "6 · 10 = 60.", en: "6 · 10 = 60." },
          { bg: "60 − 6 = 54.", en: "60 − 6 = 54." },
        ],
        why: { bg: "Правилото за 9: една група по-малко от десет групи.", en: "The 9 rule: one group fewer than ten groups." },
      },
    ],
    mistakes: [
      { bg: "Бъркане на 6·7 и 7·8.", en: "Confusing 6·7 with 7·8." },
      { bg: "Умножение с 0 дава 0, не самото число.", en: "Multiplying by 0 gives 0, not the number itself." },
    ],
  }),

  divide: L({
    topicId: "divide",
    idea: { bg: "Делението пита „по колко се пада на всеки“ или „колко пъти се съдържа“.", en: "Division asks 'how many each' or 'how many times does it fit'." },
    why: { bg: "То е обратното на умножението, затова всяка таблица за умножение е и таблица за деление.", en: "It is the inverse of multiplication, so every times table is also a division table." },
    rules: [
      { bg: "a : b = c означава c · b = a.", en: "a : b = c means c · b = a." },
      { bg: "Остатъкът винаги е по-малък от делителя.", en: "The remainder is always smaller than the divisor." },
      { bg: "Деление на 0 не съществува.", en: "Division by 0 does not exist." },
    ],
    examples: [
      {
        task: { bg: "84 : 4 = ?", en: "84 : 4 = ?" },
        steps: [
          { bg: "84 = 80 + 4.", en: "84 = 80 + 4." },
          { bg: "80 : 4 = 20, 4 : 4 = 1.", en: "80 : 4 = 20, 4 : 4 = 1." },
          { bg: "20 + 1 = 21. Проверка: 21 · 4 = 84. ✓", en: "20 + 1 = 21. Check: 21 · 4 = 84. ✓" },
        ],
        why: { bg: "Разлагаме на удобни части, които се делят точно.", en: "We split into convenient parts that divide exactly." },
      },
      {
        task: { bg: "29 : 5 = ?", en: "29 : 5 = ?" },
        steps: [
          { bg: "5 · 5 = 25 ≤ 29.", en: "5 · 5 = 25 ≤ 29." },
          { bg: "29 − 25 = 4 — остатък.", en: "29 − 25 = 4 — the remainder." },
          { bg: "29 : 5 = 5 и остатък 4.", en: "29 : 5 = 5 remainder 4." },
        ],
        why: { bg: "Търсим най-голямото кратно на 5, което не надминава 29.", en: "We look for the largest multiple of 5 not exceeding 29." },
      },
    ],
    mistakes: [
      { bg: "Остатък, по-голям от делителя.", en: "A remainder larger than the divisor." },
      { bg: "Разменени делимо и делител.", en: "Swapping dividend and divisor." },
    ],
  }),

  mulcolumn: L({
    topicId: "mulcolumn",
    idea: { bg: "Умножаваме многоцифрени числа, като разлагаме второто число по разреди и после събираме.", en: "We multiply large numbers by splitting the second factor by place value, then adding." },
    why: { bg: "Разпределителното свойство a(b + c) = ab + ac позволява всяка голяма сметка да стане няколко малки.", en: "The distributive law a(b + c) = ab + ac turns one big product into small ones." },
    rules: [
      { bg: "34 · 26 = 34 · 20 + 34 · 6.", en: "34 · 26 = 34 · 20 + 34 · 6." },
      { bg: "Умножение с 10, 100 — добавяме нули.", en: "Multiplying by 10 or 100 — add zeros." },
      { bg: "Груба преценка преди сметката пази от глупави грешки.", en: "A rough estimate first prevents silly errors." },
    ],
    examples: [
      {
        task: { bg: "34 · 26 = ?", en: "34 · 26 = ?" },
        steps: [
          { bg: "34 · 20 = 680.", en: "34 · 20 = 680." },
          { bg: "34 · 6 = 204.", en: "34 · 6 = 204." },
          { bg: "680 + 204 = 884.", en: "680 + 204 = 884." },
        ],
        why: { bg: "Оценка: 34 · 26 ≈ 30 · 25 = 750 — отговорът е в правилния порядък.", en: "Estimate: 34 · 26 ≈ 30 · 25 = 750 — the answer's size is right." },
      },
    ],
    mistakes: [
      { bg: "Забравена нула при умножение с десетиците.", en: "Forgetting the zero when multiplying by the tens." },
      { bg: "Събиране на частичните произведения с разминаване в разредите.", en: "Misaligning place values when adding partial products." },
    ],
  }),

  wordsimple: L({
    topicId: "wordsimple",
    idea: { bg: "Текстовата задача се решава в четири хода: какво е дадено, какво се търси, кое действие, проверка.", en: "A word problem takes four moves: what is given, what is asked, which operation, check." },
    why: { bg: "Математиката в живота идва винаги с думи. Умението да превеждаш думи в сметка е по-важно от самата сметка.", en: "Real-life math arrives as words. Translating words into a calculation matters more than the arithmetic." },
    rules: [
      { bg: "„общо“, „заедно“ → събиране.", en: "'in total', 'together' → addition." },
      { bg: "„остават“, „по-малко“ → изваждане.", en: "'left', 'fewer' → subtraction." },
      { bg: "„по … всеки“, „пъти повече“ → умножение.", en: "'each', 'times more' → multiplication." },
      { bg: "„разделено на“, „по равно“ → деление.", en: "'shared', 'equally' → division." },
    ],
    examples: [
      {
        task: { bg: "В 4 кутии има по 12 ябълки. 9 са изядени. Колко остават?", en: "4 boxes hold 12 apples each. 9 are eaten. How many are left?" },
        steps: [
          { bg: "Общо: 4 · 12 = 48.", en: "Total: 4 · 12 = 48." },
          { bg: "Изядени: 48 − 9 = 39.", en: "Eaten: 48 − 9 = 39." },
          { bg: "Отговор: 39 ябълки.", en: "Answer: 39 apples." },
        ],
        why: { bg: "Първо намираме цялото, после отнемаме — редът на действията следва смисъла.", en: "Find the whole first, then remove — the order follows the meaning." },
      },
    ],
    mistakes: [
      { bg: "Отговор без мерна единица.", en: "An answer without units." },
      { bg: "Сметка само с първите две числа от текста.", en: "Using only the first two numbers in the text." },
    ],
  }),

  fracpart: L({
    topicId: "fracpart",
    idea: { bg: "Част от число: делим на знаменателя (колко равни части), умножаваме по числителя (колко части взимаме).", en: "A fraction of a number: divide by the denominator (equal parts), multiply by the numerator (parts taken)." },
    why: { bg: "Дробта е инструкция за две действия — първо разделяне, после взимане.", en: "A fraction is an instruction for two steps — split, then take." },
    rules: [
      { bg: "3/4 от 40 = 40 : 4 · 3 = 30.", en: "3/4 of 40 = 40 : 4 · 3 = 30." },
      { bg: "Цялото е 1 = n/n.", en: "The whole is 1 = n/n." },
    ],
    examples: [
      {
        task: { bg: "2/5 от 45 = ?", en: "2/5 of 45 = ?" },
        steps: [
          { bg: "45 : 5 = 9 (една пета).", en: "45 : 5 = 9 (one fifth)." },
          { bg: "9 · 2 = 18.", en: "9 · 2 = 18." },
        ],
        why: { bg: "Една част винаги се намира първа — после е просто умножение.", en: "Find one part first — then it is just multiplication." },
      },
    ],
    mistakes: [
      { bg: "Умножение по знаменателя вместо деление.", en: "Multiplying by the denominator instead of dividing." },
    ],
  }),

  fracadd: L({
    topicId: "fracadd",
    idea: { bg: "Дроби се събират само с еднакви знаменатели — затова първо ги привеждаме към общ знаменател.", en: "Fractions add only with equal denominators, so we bring them to a common one first." },
    why: { bg: "Не можеш да събереш трети и четвърти, както не събираш метри с килограми. Общият знаменател прави частите еднакви.", en: "You can't add thirds to quarters any more than metres to kilograms. A common denominator makes the pieces equal." },
    rules: [
      { bg: "Общ знаменател = НОК на знаменателите.", en: "Common denominator = LCM of the denominators." },
      { bg: "Разширяваме: умножаваме числител и знаменател с едно и също число.", en: "Expand: multiply numerator and denominator by the same number." },
      { bg: "Накрая съкращаваме до несъкратим вид.", en: "Finally reduce to lowest terms." },
    ],
    examples: [
      {
        task: { bg: "2/3 + 1/4 = ?", en: "2/3 + 1/4 = ?" },
        steps: [
          { bg: "НОК(3, 4) = 12.", en: "LCM(3, 4) = 12." },
          { bg: "2/3 = 8/12, 1/4 = 3/12.", en: "2/3 = 8/12, 1/4 = 3/12." },
          { bg: "8/12 + 3/12 = 11/12.", en: "8/12 + 3/12 = 11/12." },
        ],
        why: { bg: "12 е най-малкото число, което се дели и на 3, и на 4.", en: "12 is the smallest number divisible by both 3 and 4." },
      },
      {
        task: { bg: "5/6 − 1/2 = ?", en: "5/6 − 1/2 = ?" },
        steps: [
          { bg: "1/2 = 3/6.", en: "1/2 = 3/6." },
          { bg: "5/6 − 3/6 = 2/6.", en: "5/6 − 3/6 = 2/6." },
          { bg: "Съкращаваме: 2/6 = 1/3.", en: "Reduce: 2/6 = 1/3." },
        ],
        why: { bg: "6 вече се дели на 2, затова се разширява само втората дроб.", en: "6 is already divisible by 2, so only the second fraction is expanded." },
      },
    ],
    mistakes: [
      { bg: "Събиране на знаменателите: 1/2 + 1/3 ≠ 2/5.", en: "Adding denominators: 1/2 + 1/3 ≠ 2/5." },
      { bg: "Забравено съкращаване в отговора.", en: "Forgetting to reduce the answer." },
    ],
  }),

  fracmul: L({
    topicId: "fracmul",
    idea: { bg: "При умножение на дроби няма общ знаменател: числител по числител, знаменател по знаменател.", en: "Multiplying fractions needs no common denominator: numerators together, denominators together." },
    why: { bg: "2/3 · 3/5 значи „две трети от три пети“ — взимаме част от част, затова частите се умножават.", en: "2/3 · 3/5 means 'two thirds of three fifths' — a part of a part, so the parts multiply." },
    rules: [
      { bg: "a/b · c/d = (a·c)/(b·d).", en: "a/b · c/d = (a·c)/(b·d)." },
      { bg: "Деление: умножаваме по обърната дроб.", en: "Dividing: multiply by the reciprocal." },
      { bg: "Съкращаваме преди умножението — по-малки числа.", en: "Reduce before multiplying — smaller numbers." },
    ],
    examples: [
      {
        task: { bg: "3/4 · 2/9 = ?", en: "3/4 · 2/9 = ?" },
        steps: [
          { bg: "Съкращаваме 3 с 9 и 2 с 4.", en: "Cancel 3 with 9, and 2 with 4." },
          { bg: "Остава 1/2 · 1/3.", en: "Left with 1/2 · 1/3." },
          { bg: "= 1/6.", en: "= 1/6." },
        ],
        why: { bg: "Съкращаването е позволено „на кръст“, защото всичко е в един дроб.", en: "Cross-cancelling is valid because everything sits in one fraction." },
      },
      {
        task: { bg: "3/5 : 2/7 = ?", en: "3/5 : 2/7 = ?" },
        steps: [
          { bg: "Обръщаме втората дроб: 7/2.", en: "Flip the second fraction: 7/2." },
          { bg: "3/5 · 7/2 = 21/10.", en: "3/5 · 7/2 = 21/10." },
        ],
        why: { bg: "Деление на 2/7 е умножение по толкова пъти, колкото 2/7 се съдържа в 1.", en: "Dividing by 2/7 is multiplying by how many times 2/7 fits into 1." },
      },
    ],
    mistakes: [
      { bg: "Търсене на общ знаменател при умножение — не е нужен.", en: "Looking for a common denominator when multiplying — not needed." },
      { bg: "Обръщане на първата, а не на втората дроб при деление.", en: "Flipping the first instead of the second fraction when dividing." },
    ],
  }),

  decimals: L({
    topicId: "decimals",
    idea: { bg: "Десетичната дроб е дроб със знаменател 10, 100, 1000. Запетаята показва къде свършва цялата част.", en: "A decimal is a fraction with denominator 10, 100, 1000. The comma marks the end of the whole part." },
    why: { bg: "Пари, мерки и резултати в реалния свят са десетични — затова редът на разредите трябва да е точен.", en: "Money and measurements are decimal, so place value must be exact." },
    rules: [
      { bg: "Събиране/изваждане: запетая под запетая.", en: "Add/subtract: comma under comma." },
      { bg: "Умножение: смятаме без запетаи, после броим общо колко цифри след запетаята.", en: "Multiply: ignore commas, then count total decimal digits." },
      { bg: "Деление: местим запетаята и в двете числа, докато делителят стане цяло.", en: "Divide: shift the comma in both numbers until the divisor is whole." },
    ],
    examples: [
      {
        task: { bg: "0,6 · 0,25 = ?", en: "0.6 · 0.25 = ?" },
        steps: [
          { bg: "6 · 25 = 150.", en: "6 · 25 = 150." },
          { bg: "След запетаята: 1 + 2 = 3 цифри.", en: "Decimal digits: 1 + 2 = 3." },
          { bg: "0,150 = 0,15.", en: "0.150 = 0.15." },
        ],
        why: { bg: "Броят на десетичните знаци се събира, защото 0,6 = 6/10 и 0,25 = 25/100.", en: "Decimal places add because 0.6 = 6/10 and 0.25 = 25/100." },
      },
    ],
    mistakes: [
      { bg: "Подравняване по края на числото, не по запетаята.", en: "Aligning by the last digit instead of the comma." },
      { bg: "0,5 е по-голямо от 0,45 — повече цифри не значи по-голямо число.", en: "0.5 is greater than 0.45 — more digits doesn't mean bigger." },
    ],
  }),

  percent: L({
    topicId: "percent",
    idea: { bg: "Процентът е дроб със знаменател 100: 25% = 25/100 = 0,25.", en: "A percent is a fraction out of 100: 25% = 25/100 = 0.25." },
    why: { bg: "Процентите сравняват различни по големина неща на една и съща скала — затова са навсякъде: оценки, отстъпки, лихви.", en: "Percents put different sizes on one scale — hence grades, discounts and interest." },
    rules: [
      { bg: "p% от A = A · p / 100.", en: "p% of A = A · p / 100." },
      { bg: "Колко процента е B от A: B / A · 100.", en: "What percent B is of A: B / A · 100." },
      { bg: "Увеличение с p%: умножаваме по (1 + p/100).", en: "Increase by p%: multiply by (1 + p/100)." },
    ],
    examples: [
      {
        task: { bg: "18% от 250 = ?", en: "18% of 250 = ?" },
        steps: [
          { bg: "1% от 250 = 2,5.", en: "1% of 250 = 2.5." },
          { bg: "18 · 2,5 = 45.", en: "18 · 2.5 = 45." },
        ],
        why: { bg: "Намираме един процент — оттам всеки процент е умножение.", en: "Find one percent — every percent is then a multiplication." },
      },
      {
        task: { bg: "Цена 80 лв. пада с 15%. Нова цена?", en: "A price of 80 falls by 15%. New price?" },
        steps: [
          { bg: "Остават 100% − 15% = 85%.", en: "Remaining: 100% − 15% = 85%." },
          { bg: "80 · 0,85 = 68 лв.", en: "80 · 0.85 = 68." },
        ],
        why: { bg: "По-бързо е да умножим по остатъка, вместо да смятаме отстъпката и да вадим.", en: "Multiplying by what remains is faster than computing and subtracting the discount." },
      },
    ],
    mistakes: [
      { bg: "Намаление с 20% и после увеличение с 20% не връща старата цена.", en: "−20% then +20% does not restore the original price." },
      { bg: "Процент от грешно цяло (от новата вместо от старата стойност).", en: "Taking the percent of the wrong whole." },
    ],
  }),

  ratio: L({
    topicId: "ratio",
    idea: { bg: "Отношението сравнява две величини, пропорцията твърди, че две отношения са равни.", en: "A ratio compares two quantities; a proportion states two ratios are equal." },
    why: { bg: "Рецепти, мащаби на карти и скорости работят с отношения — важно е не колко, а колко спрямо колко.", en: "Recipes, map scales and speeds work with ratios — not how much, but how much per what." },
    rules: [
      { bg: "a : b = c : d ⇔ a·d = b·c (кръстосано умножение).", en: "a : b = c : d ⇔ a·d = b·c (cross-multiplying)." },
      { bg: "Разделяне в отношение m : n → цялото се дели на m + n части.", en: "Sharing in ratio m : n → split the whole into m + n parts." },
    ],
    examples: [
      {
        task: { bg: "3 : 5 = 12 : x", en: "3 : 5 = 12 : x" },
        steps: [
          { bg: "3x = 5 · 12 = 60.", en: "3x = 5 · 12 = 60." },
          { bg: "x = 20.", en: "x = 20." },
        ],
        why: { bg: "12 е 4 пъти 3, значи и x е 4 пъти 5.", en: "12 is 4 times 3, so x is 4 times 5." },
      },
      {
        task: { bg: "Раздели 48 в отношение 3 : 5.", en: "Share 48 in the ratio 3 : 5." },
        steps: [
          { bg: "Части: 3 + 5 = 8.", en: "Parts: 3 + 5 = 8." },
          { bg: "48 : 8 = 6 за една част.", en: "48 : 8 = 6 per part." },
          { bg: "3 · 6 = 18 и 5 · 6 = 30.", en: "3 · 6 = 18 and 5 · 6 = 30." },
        ],
        why: { bg: "Първо намираме стойността на една част — универсален подход.", en: "Find the value of one part first — a universal trick." },
      },
    ],
    mistakes: [
      { bg: "Разделяне на 3 и на 5 вместо на 8 части.", en: "Dividing by 3 and 5 instead of into 8 parts." },
    ],
  }),

  negatives: L({
    topicId: "negatives",
    idea: { bg: "Отрицателните числа са под нулата. Мисли за числова ос: минус значи наляво.", en: "Negative numbers lie below zero. Think of a number line: minus means left." },
    why: { bg: "Температура, дълг, височина под морското равнище — светът има и посока назад от нулата.", en: "Temperature, debt, depth below sea level — the world goes backwards from zero too." },
    rules: [
      { bg: "− (−a) = +a.", en: "− (−a) = +a." },
      { bg: "(−) · (−) = (+), (−) · (+) = (−).", en: "(−) · (−) = (+), (−) · (+) = (−)." },
      { bg: "Еднакви знаци при събиране: събираме и пазим знака.", en: "Same signs when adding: add and keep the sign." },
    ],
    examples: [
      {
        task: { bg: "−7 + 12 = ?", en: "−7 + 12 = ?" },
        steps: [
          { bg: "12 − 7 = 5.", en: "12 − 7 = 5." },
          { bg: "По-голямото по модул е положително → +5.", en: "The larger magnitude is positive → +5." },
        ],
        why: { bg: "Тръгваме от −7 и се движим 12 надясно — минаваме нулата.", en: "Start at −7 and move 12 right — we cross zero." },
      },
      {
        task: { bg: "(−4) · (−6) = ?", en: "(−4) · (−6) = ?" },
        steps: [
          { bg: "4 · 6 = 24.", en: "4 · 6 = 24." },
          { bg: "Два минуса → плюс: 24.", en: "Two minuses → plus: 24." },
        ],
        why: { bg: "Умножение с −1 обръща посоката; два пъти обръщане връща напред.", en: "Multiplying by −1 flips direction; flipping twice points forward again." },
      },
    ],
    mistakes: [
      { bg: "−3 − 5 = −2 (вярно е −8).", en: "−3 − 5 = −2 (it is −8)." },
    ],
  }),

  gcdlcm: L({
    topicId: "gcdlcm",
    idea: { bg: "НОД е най-голямото общо делимо, НОК — най-малкото общо кратно. И двете идват от разлагането на прости множители.", en: "GCD is the largest common divisor, LCM the smallest common multiple. Both come from prime factorisation." },
    why: { bg: "НОД съкращава дроби, НОК ги събира. Затова тези две числа спестяват най-много труд в дробите.", en: "GCD reduces fractions, LCM adds them. These two save the most work with fractions." },
    rules: [
      { bg: "НОД: общи множители с най-малкия показател.", en: "GCD: common primes with the smallest exponent." },
      { bg: "НОК: всички множители с най-големия показател.", en: "LCM: all primes with the largest exponent." },
      { bg: "НОД · НОК = a · b.", en: "GCD · LCM = a · b." },
    ],
    examples: [
      {
        task: { bg: "НОД и НОК на 18 и 24.", en: "GCD and LCM of 18 and 24." },
        steps: [
          { bg: "18 = 2 · 3², 24 = 2³ · 3.", en: "18 = 2 · 3², 24 = 2³ · 3." },
          { bg: "НОД = 2 · 3 = 6.", en: "GCD = 2 · 3 = 6." },
          { bg: "НОК = 2³ · 3² = 72.", en: "LCM = 2³ · 3² = 72." },
        ],
        why: { bg: "Проверка: 6 · 72 = 432 = 18 · 24. ✓", en: "Check: 6 · 72 = 432 = 18 · 24. ✓" },
      },
    ],
    mistakes: [
      { bg: "Разменени НОД и НОК.", en: "Swapping GCD and LCM." },
    ],
  }),

  lineareq: L({
    topicId: "lineareq",
    idea: { bg: "Уравнението е везна. Каквото правиш от едната страна, правиш и от другата, докато остане само x.", en: "An equation is a balance scale. Do the same to both sides until only x remains." },
    why: { bg: "Целта е изолиране на неизвестното. Всяко действие се маха с обратното си действие.", en: "The goal is isolating the unknown. Each operation is undone by its inverse." },
    rules: [
      { bg: "Пренасяме членове с промяна на знака.", en: "Move terms across, changing the sign." },
      { bg: "Делим на коефициента пред x накрая.", en: "Divide by the coefficient of x last." },
      { bg: "Проверка: заместваме намереното x в началното уравнение.", en: "Check: substitute x back into the original equation." },
    ],
    examples: [
      {
        task: { bg: "5x − 7 = 3x + 9", en: "5x − 7 = 3x + 9" },
        steps: [
          { bg: "5x − 3x = 9 + 7.", en: "5x − 3x = 9 + 7." },
          { bg: "2x = 16.", en: "2x = 16." },
          { bg: "x = 8. Проверка: 5·8 − 7 = 33 = 3·8 + 9. ✓", en: "x = 8. Check: 5·8 − 7 = 33 = 3·8 + 9. ✓" },
        ],
        why: { bg: "Събираме x-овете от едната страна, числата от другата — така остава едно действие.", en: "Gather x on one side, numbers on the other — one step remains." },
      },
      {
        task: { bg: "(x + 2)/3 = 4", en: "(x + 2)/3 = 4" },
        steps: [
          { bg: "Умножаваме двете страни по 3: x + 2 = 12.", en: "Multiply both sides by 3: x + 2 = 12." },
          { bg: "x = 10.", en: "x = 10." },
        ],
        why: { bg: "Делението се маха с умножение — обратното действие.", en: "Division is undone by multiplication — the inverse." },
      },
    ],
    mistakes: [
      { bg: "Пренасяне без смяна на знака.", en: "Moving a term without changing its sign." },
      { bg: "Деление само на едната страна.", en: "Dividing only one side." },
    ],
  }),

  powers: L({
    topicId: "powers",
    idea: { bg: "Степента е кратко умножение на еднакви множители: a⁵ = a·a·a·a·a.", en: "A power is repeated multiplication: a⁵ = a·a·a·a·a." },
    why: { bg: "Правилата за степени не се учат наизуст — те следват от броенето на множителите.", en: "The power laws aren't memorised — they follow from counting factors." },
    rules: [
      { bg: "aᵐ · aⁿ = aᵐ⁺ⁿ.", en: "aᵐ · aⁿ = aᵐ⁺ⁿ." },
      { bg: "aᵐ : aⁿ = aᵐ⁻ⁿ, a⁰ = 1.", en: "aᵐ : aⁿ = aᵐ⁻ⁿ, a⁰ = 1." },
      { bg: "(aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1/aⁿ.", en: "(aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1/aⁿ." },
    ],
    examples: [
      {
        task: { bg: "2³ · 2⁴ : 2⁵ = ?", en: "2³ · 2⁴ : 2⁵ = ?" },
        steps: [
          { bg: "3 + 4 − 5 = 2.", en: "3 + 4 − 5 = 2." },
          { bg: "2² = 4.", en: "2² = 4." },
        ],
        why: { bg: "Броим колко двойки остават след съкращаването.", en: "We count how many 2s remain after cancelling." },
      },
    ],
    mistakes: [
      { bg: "2³ · 2⁴ = 4⁷ — основата не се умножава.", en: "2³ · 2⁴ = 4⁷ — the base does not multiply." },
      { bg: "(a + b)² ≠ a² + b².", en: "(a + b)² ≠ a² + b²." },
    ],
  }),

  angles: L({
    topicId: "angles",
    idea: { bg: "Сумата на ъглите в триъгълник е 180°, а във всеки четириъгълник — 360°.", en: "Angles in a triangle sum to 180°; in any quadrilateral 360°." },
    why: { bg: "Ако прекараш права, успоредна на едната страна, трите ъгъла се подреждат в изпънат ъгъл — оттам 180°.", en: "Draw a line parallel to one side and the three angles line up into a straight angle — hence 180°." },
    rules: [
      { bg: "Външен ъгъл = сума на двата несъседни вътрешни.", en: "Exterior angle = sum of the two remote interior angles." },
      { bg: "В равнобедрен триъгълник ъглите при основата са равни.", en: "In an isosceles triangle the base angles are equal." },
      { bg: "Срещу по-голяма страна стои по-голям ъгъл.", en: "A bigger side faces a bigger angle." },
    ],
    examples: [
      {
        task: { bg: "α = 47°, β = 68°. Намери γ.", en: "α = 47°, β = 68°. Find γ." },
        steps: [
          { bg: "47 + 68 = 115.", en: "47 + 68 = 115." },
          { bg: "γ = 180 − 115 = 65°.", en: "γ = 180 − 115 = 65°." },
        ],
        why: { bg: "Третият ъгъл е това, което остава до 180°.", en: "The third angle is whatever is left up to 180°." },
      },
    ],
    mistakes: [
      { bg: "Използване на 360° за триъгълник.", en: "Using 360° for a triangle." },
    ],
  }),

  area: L({
    topicId: "area",
    idea: { bg: "Обиколката е дължина на контура, лицето — колко квадратчета покриват фигурата.", en: "Perimeter is the length around; area is how many unit squares cover the shape." },
    why: { bg: "Формулите за лице идват от правоъгълника: триъгълникът е половин правоъгълник, трапецът — среден правоъгълник.", en: "Area formulas come from the rectangle: a triangle is half of one, a trapezium is an average one." },
    rules: [
      { bg: "Правоъгълник: S = a·b, P = 2(a + b).", en: "Rectangle: A = a·b, P = 2(a + b)." },
      { bg: "Триъгълник: S = a·hₐ / 2.", en: "Triangle: A = a·hₐ / 2." },
      { bg: "Кръг: S = πr², обиколка = 2πr.", en: "Circle: A = πr², circumference = 2πr." },
    ],
    examples: [
      {
        task: { bg: "Правоъгълник 12 × 7 см.", en: "Rectangle 12 × 7 cm." },
        steps: [
          { bg: "S = 12 · 7 = 84 см².", en: "A = 12 · 7 = 84 cm²." },
          { bg: "P = 2(12 + 7) = 38 см.", en: "P = 2(12 + 7) = 38 cm." },
        ],
        why: { bg: "Лицето е в квадратни единици, обиколката — в линейни.", en: "Area is in square units, perimeter in linear units." },
      },
    ],
    mistakes: [
      { bg: "Смесени единици — привеждай всичко към едни и същи.", en: "Mixed units — convert everything first." },
      { bg: "Забравено деление на 2 при триъгълник.", en: "Forgetting to halve for a triangle." },
    ],
  }),

  pythagoras: L({
    topicId: "pythagoras",
    idea: { bg: "В правоъгълен триъгълник a² + b² = c², където c е хипотенузата (срещу правия ъгъл).", en: "In a right triangle a² + b² = c², where c is the hypotenuse (opposite the right angle)." },
    why: { bg: "Квадратите върху двата катета покриват точно квадрата върху хипотенузата — това е геометричното доказателство.", en: "The squares on the legs exactly cover the square on the hypotenuse — that is the geometric proof." },
    rules: [
      { bg: "Хипотенузата е винаги най-дългата страна.", en: "The hypotenuse is always the longest side." },
      { bg: "Катет: a = √(c² − b²).", en: "A leg: a = √(c² − b²)." },
      { bg: "Полезни тройки: 3-4-5, 5-12-13, 8-15-17.", en: "Useful triples: 3-4-5, 5-12-13, 8-15-17." },
    ],
    examples: [
      {
        task: { bg: "Катети 9 и 12. Хипотенуза?", en: "Legs 9 and 12. Hypotenuse?" },
        steps: [
          { bg: "81 + 144 = 225.", en: "81 + 144 = 225." },
          { bg: "c = √225 = 15.", en: "c = √225 = 15." },
        ],
        why: { bg: "9-12-15 е тройката 3-4-5, умножена по 3.", en: "9-12-15 is the 3-4-5 triple times 3." },
      },
      {
        task: { bg: "c = 13, a = 5. Намери b.", en: "c = 13, a = 5. Find b." },
        steps: [
          { bg: "b² = 169 − 25 = 144.", en: "b² = 169 − 25 = 144." },
          { bg: "b = 12.", en: "b = 12." },
        ],
        why: { bg: "Когато търсим катет, вадим — не събираме.", en: "When finding a leg we subtract, not add." },
      },
    ],
    mistakes: [
      { bg: "Събиране на квадратите, когато е дадена хипотенузата.", en: "Adding squares when the hypotenuse is given." },
    ],
  }),

  systems: L({
    topicId: "systems",
    idea: { bg: "Система от две уравнения с две неизвестни търси точката, която удовлетворява и двете.", en: "A system of two equations in two unknowns seeks the point satisfying both." },
    why: { bg: "Геометрично това е пресечната точка на две прави — оттам и „решение на системата“.", en: "Geometrically it is the intersection of two lines — hence 'solution of the system'." },
    rules: [
      { bg: "Метод на заместване: изразяваме едно неизвестно и го заместваме.", en: "Substitution: express one unknown and substitute it." },
      { bg: "Метод на събиране: умножаваме, за да се унищожи едно неизвестно.", en: "Elimination: multiply so one unknown cancels." },
      { bg: "Проверка и в двете уравнения.", en: "Check in both equations." },
    ],
    examples: [
      {
        task: { bg: "x + y = 10; 2x − y = 2", en: "x + y = 10; 2x − y = 2" },
        steps: [
          { bg: "Събираме двете: 3x = 12.", en: "Add both: 3x = 12." },
          { bg: "x = 4.", en: "x = 4." },
          { bg: "y = 10 − 4 = 6.", en: "y = 10 − 4 = 6." },
        ],
        why: { bg: "+y и −y се унищожават при събиране — затова избираме този метод.", en: "+y and −y cancel when added — that's why we chose elimination." },
      },
    ],
    mistakes: [
      { bg: "Намерено само едно неизвестно.", en: "Finding only one unknown." },
    ],
  }),

  quadratic: L({
    topicId: "quadratic",
    idea: { bg: "ax² + bx + c = 0 се решава с дискриминанта D = b² − 4ac.", en: "ax² + bx + c = 0 is solved with the discriminant D = b² − 4ac." },
    why: { bg: "D показва колко пъти параболата пресича абсцисата: D > 0 → два корена, D = 0 → един, D < 0 → няма реални.", en: "D tells how often the parabola meets the x-axis: D > 0 → two roots, D = 0 → one, D < 0 → none real." },
    rules: [
      { bg: "x = (−b ± √D) / (2a).", en: "x = (−b ± √D) / (2a)." },
      { bg: "Виет: x₁ + x₂ = −b/a, x₁·x₂ = c/a.", en: "Vieta: x₁ + x₂ = −b/a, x₁·x₂ = c/a." },
      { bg: "Върх на параболата: x = −b/(2a).", en: "Vertex: x = −b/(2a)." },
    ],
    examples: [
      {
        task: { bg: "x² − 5x + 6 = 0", en: "x² − 5x + 6 = 0" },
        steps: [
          { bg: "D = 25 − 24 = 1.", en: "D = 25 − 24 = 1." },
          { bg: "x = (5 ± 1)/2.", en: "x = (5 ± 1)/2." },
          { bg: "x₁ = 3, x₂ = 2.", en: "x₁ = 3, x₂ = 2." },
        ],
        why: { bg: "Проверка с Виет: 3 + 2 = 5 и 3 · 2 = 6. ✓", en: "Vieta check: 3 + 2 = 5 and 3 · 2 = 6. ✓" },
      },
    ],
    mistakes: [
      { bg: "Пропуснат знак на b при −b.", en: "Losing the sign of b in −b." },
      { bg: "Деление на 2 вместо на 2a.", en: "Dividing by 2 instead of 2a." },
    ],
  }),

  progression: L({
    topicId: "progression",
    idea: { bg: "Аритметичната прогресия расте с постоянна разлика d: всеки следващ член е предишният плюс d.", en: "An arithmetic progression grows by a constant difference d: each term is the previous plus d." },
    why: { bg: "Сумата се смята бързо, защото първият и последният член, вторият и предпоследният и т.н. дават една и съща сума.", en: "The sum is quick because first+last, second+second-to-last, etc. are all equal." },
    rules: [
      { bg: "aₙ = a₁ + (n − 1)d.", en: "aₙ = a₁ + (n − 1)d." },
      { bg: "Sₙ = n(a₁ + aₙ)/2.", en: "Sₙ = n(a₁ + aₙ)/2." },
    ],
    examples: [
      {
        task: { bg: "a₁ = 4, d = 3. Намери a₁₀ и S₁₀.", en: "a₁ = 4, d = 3. Find a₁₀ and S₁₀." },
        steps: [
          { bg: "a₁₀ = 4 + 9 · 3 = 31.", en: "a₁₀ = 4 + 9 · 3 = 31." },
          { bg: "S₁₀ = 10(4 + 31)/2 = 175.", en: "S₁₀ = 10(4 + 31)/2 = 175." },
        ],
        why: { bg: "Стъпките са n − 1, не n — от първия до десетия има 9 крачки.", en: "There are n − 1 steps, not n — nine steps from the 1st to the 10th." },
      },
    ],
    mistakes: [
      { bg: "Използване на n вместо n − 1.", en: "Using n instead of n − 1." },
    ],
  }),

  progressiongeo: L({
    topicId: "progressiongeo",
    idea: { bg: "Геометричната прогресия се умножава с постоянно частно q.", en: "A geometric progression multiplies by a constant ratio q." },
    why: { bg: "Така растат лихви, популации и всичко, което се увеличава с процент от себе си.", en: "This is how interest and populations grow — by a percent of themselves." },
    rules: [
      { bg: "aₙ = a₁ · qⁿ⁻¹.", en: "aₙ = a₁ · qⁿ⁻¹." },
      { bg: "Sₙ = a₁(qⁿ − 1)/(q − 1), q ≠ 1.", en: "Sₙ = a₁(qⁿ − 1)/(q − 1), q ≠ 1." },
      { bg: "При |q| < 1: S = a₁/(1 − q).", en: "For |q| < 1: S = a₁/(1 − q)." },
    ],
    examples: [
      {
        task: { bg: "a₁ = 3, q = 2. Намери a₆ и S₆.", en: "a₁ = 3, q = 2. Find a₆ and S₆." },
        steps: [
          { bg: "a₆ = 3 · 2⁵ = 96.", en: "a₆ = 3 · 2⁵ = 96." },
          { bg: "S₆ = 3(2⁶ − 1)/(2 − 1) = 189.", en: "S₆ = 3(2⁶ − 1)/(2 − 1) = 189." },
        ],
        why: { bg: "Показателят е n − 1, защото първият член още не е умножаван.", en: "The exponent is n − 1 because the first term hasn't been multiplied yet." },
      },
    ],
    mistakes: [
      { bg: "Събиране вместо умножение на q.", en: "Adding q instead of multiplying by it." },
    ],
  }),

  trig: L({
    topicId: "trig",
    idea: { bg: "В правоъгълен триъгълник sin, cos и tg са отношения на страни, които зависят само от ъгъла.", en: "In a right triangle sin, cos and tan are side ratios depending only on the angle." },
    why: { bg: "Подобните триъгълници имат еднакви отношения — затова един ъгъл определя всички отношения.", en: "Similar triangles share ratios — so one angle fixes all ratios." },
    rules: [
      { bg: "sin α = противолежащ / хипотенуза.", en: "sin α = opposite / hypotenuse." },
      { bg: "cos α = прилежащ / хипотенуза, tg α = sin/cos.", en: "cos α = adjacent / hypotenuse, tan α = sin/cos." },
      { bg: "sin²α + cos²α = 1.", en: "sin²α + cos²α = 1." },
    ],
    examples: [
      {
        task: { bg: "Хипотенуза 10, α = 30°. Противолежащ катет?", en: "Hypotenuse 10, α = 30°. Opposite leg?" },
        steps: [
          { bg: "sin 30° = 1/2.", en: "sin 30° = 1/2." },
          { bg: "a = 10 · 0,5 = 5.", en: "a = 10 · 0.5 = 5." },
        ],
        why: { bg: "При 30° катетът е точно половината от хипотенузата — класически факт.", en: "At 30° the opposite leg is exactly half the hypotenuse — a classic fact." },
      },
    ],
    mistakes: [
      { bg: "Разменени прилежащ и противолежащ катет.", en: "Swapping adjacent and opposite legs." },
    ],
  }),

  logs: L({
    topicId: "logs",
    idea: { bg: "log_a b е степента, на която трябва да вдигнем a, за да получим b.", en: "log_a b is the power to which a must be raised to give b." },
    why: { bg: "Логаритъмът е обратното на степенуването — той „изважда“ показателя навън.", en: "A logarithm inverts exponentiation — it pulls the exponent out." },
    rules: [
      { bg: "log(xy) = log x + log y.", en: "log(xy) = log x + log y." },
      { bg: "log(x/y) = log x − log y.", en: "log(x/y) = log x − log y." },
      { bg: "log xⁿ = n log x, log_a a = 1.", en: "log xⁿ = n log x, log_a a = 1." },
    ],
    examples: [
      {
        task: { bg: "log₂ 32 = ?", en: "log₂ 32 = ?" },
        steps: [
          { bg: "32 = 2⁵.", en: "32 = 2⁵." },
          { bg: "log₂ 2⁵ = 5.", en: "log₂ 2⁵ = 5." },
        ],
        why: { bg: "Питаме „2 на коя степен е 32“ — отговорът е показателят.", en: "We ask '2 to what power is 32' — the answer is the exponent." },
      },
    ],
    mistakes: [
      { bg: "log(x + y) ≠ log x + log y.", en: "log(x + y) ≠ log x + log y." },
      { bg: "Логаритъм от 0 или отрицателно число не съществува.", en: "A log of 0 or a negative number does not exist." },
    ],
  }),

  combinatorics: L({
    topicId: "combinatorics",
    idea: { bg: "Броим възможности: важи ли редът → вариации/пермутации; не важи ли → комбинации.", en: "We count possibilities: order matters → permutations; order doesn't → combinations." },
    why: { bg: "Първият въпрос винаги е „подредба или подбор“. Той решава коя формула се използва.", en: "The first question is always 'arrangement or selection' — it picks the formula." },
    rules: [
      { bg: "Пермутации: n!.", en: "Permutations: n!." },
      { bg: "Комбинации: C(n, k) = n! / (k!(n − k)!).", en: "Combinations: C(n, k) = n! / (k!(n − k)!)." },
      { bg: "Правило за умножение: независими избори се умножават.", en: "Product rule: independent choices multiply." },
    ],
    examples: [
      {
        task: { bg: "От 8 ученици избираме 3 в комисия. По колко начина?", en: "Choose 3 of 8 students for a committee. How many ways?" },
        steps: [
          { bg: "Редът не важи → C(8, 3).", en: "Order doesn't matter → C(8, 3)." },
          { bg: "(8 · 7 · 6)/(3 · 2 · 1) = 56.", en: "(8 · 7 · 6)/(3 · 2 · 1) = 56." },
        ],
        why: { bg: "Делим на 3!, защото всяка тройка се е преброила 6 пъти.", en: "We divide by 3! because each trio was counted 6 times." },
      },
    ],
    mistakes: [
      { bg: "Използване на пермутации, когато редът няма значение.", en: "Using permutations when order is irrelevant." },
    ],
  }),

  probability: L({
    topicId: "probability",
    idea: { bg: "Вероятността е брой благоприятни случаи, разделен на брой всички възможни, при равновъзможни изходи.", en: "Probability is favourable outcomes over all equally likely outcomes." },
    why: { bg: "Числото е между 0 и 1: 0 = невъзможно, 1 = сигурно. Затова е удобно да го четем и в проценти.", en: "The value lies between 0 and 1: 0 = impossible, 1 = certain — handy to read as a percent." },
    rules: [
      { bg: "P(A) = m / n.", en: "P(A) = m / n." },
      { bg: "P(не A) = 1 − P(A).", en: "P(not A) = 1 − P(A)." },
      { bg: "Независими събития: P(A и B) = P(A) · P(B).", en: "Independent events: P(A and B) = P(A) · P(B)." },
    ],
    examples: [
      {
        task: { bg: "Зар. Каква е вероятността за четно число?", en: "One die. Probability of an even number?" },
        steps: [
          { bg: "Благоприятни: 2, 4, 6 → 3.", en: "Favourable: 2, 4, 6 → 3." },
          { bg: "Всички: 6.", en: "Total: 6." },
          { bg: "P = 3/6 = 1/2 = 50%.", en: "P = 3/6 = 1/2 = 50%." },
        ],
        why: { bg: "Всички шест страни са равновъзможни — само тогава формулата важи.", en: "All six faces are equally likely — only then does the formula hold." },
      },
    ],
    mistakes: [
      { bg: "Вероятност, по-голяма от 1.", en: "A probability greater than 1." },
    ],
  }),

  derivative: L({
    topicId: "derivative",
    idea: { bg: "Производната показва скоростта на изменение — наклона на допирателната към графиката.", en: "A derivative gives the rate of change — the slope of the tangent to the graph." },
    why: { bg: "Тя отговаря на въпроса „колко бързо“: скорост, растеж, максимум и минимум.", en: "It answers 'how fast': speed, growth, maxima and minima." },
    rules: [
      { bg: "(xⁿ)′ = n·xⁿ⁻¹, (c)′ = 0.", en: "(xⁿ)′ = n·xⁿ⁻¹, (c)′ = 0." },
      { bg: "(u ± v)′ = u′ ± v′, (cu)′ = c·u′.", en: "(u ± v)′ = u′ ± v′, (cu)′ = c·u′." },
      { bg: "Екстремум там, където f′(x) = 0.", en: "Extremum where f′(x) = 0." },
    ],
    examples: [
      {
        task: { bg: "f(x) = 3x⁴ − 5x + 7. Намери f′(x).", en: "f(x) = 3x⁴ − 5x + 7. Find f′(x)." },
        steps: [
          { bg: "(3x⁴)′ = 12x³.", en: "(3x⁴)′ = 12x³." },
          { bg: "(−5x)′ = −5, (7)′ = 0.", en: "(−5x)′ = −5, (7)′ = 0." },
          { bg: "f′(x) = 12x³ − 5.", en: "f′(x) = 12x³ − 5." },
        ],
        why: { bg: "Константата не се мени, затова нейната скорост на изменение е 0.", en: "A constant doesn't change, so its rate of change is 0." },
      },
    ],
    mistakes: [
      { bg: "Забравено намаляване на показателя с 1.", en: "Forgetting to lower the exponent by 1." },
    ],
  }),

  integral: L({
    topicId: "integral",
    idea: { bg: "Интегралът е обратното на производната; определеният интеграл дава лице под графиката.", en: "An integral inverts the derivative; a definite integral gives area under the graph." },
    why: { bg: "Събираме безброй тънки правоъгълници — затова резултатът е лице, а не наклон.", en: "We sum infinitely thin rectangles — hence an area, not a slope." },
    rules: [
      { bg: "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C, n ≠ −1.", en: "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C, n ≠ −1." },
      { bg: "Нютон–Лайбниц: ∫ₐᵇ f = F(b) − F(a).", en: "Newton–Leibniz: ∫ₐᵇ f = F(b) − F(a)." },
    ],
    examples: [
      {
        task: { bg: "∫₀² 3x² dx = ?", en: "∫₀² 3x² dx = ?" },
        steps: [
          { bg: "F(x) = x³.", en: "F(x) = x³." },
          { bg: "F(2) − F(0) = 8 − 0 = 8.", en: "F(2) − F(0) = 8 − 0 = 8." },
        ],
        why: { bg: "Проверка: (x³)′ = 3x² — значи първообразната е вярна.", en: "Check: (x³)′ = 3x² — the antiderivative is right." },
      },
    ],
    mistakes: [
      { bg: "Липсваща константа C при неопределен интеграл.", en: "Missing the constant C in an indefinite integral." },
    ],
  }),
};
Object.assign(LESSONS, EXTRA_LESSONS);

export function lessonsForGrade(grade: number): Lesson[] {
  const ids = CURRICULUM[grade] ?? [];
  return ids.map((id) => LESSONS[id]).filter((l): l is Lesson => Boolean(l));
}

export function lessonById(topicId: string): Lesson | undefined {
  return LESSONS[topicId];
}
