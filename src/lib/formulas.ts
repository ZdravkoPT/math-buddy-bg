import type { Bi } from "./materials";

export type FormulaRow = { name: Bi; formula: string; note?: Bi };

export type FormulaSection = {
  id: string;
  title: Bi;
  grades: string;
  method?: Bi[];
  rows: FormulaRow[];
};

export const FORMULA_SECTIONS: FormulaSection[] = [
  {
    id: "arith",
    method: [
      { bg: "Прочети задачата и подчертай числата и въпроса.", en: "Read the task, underline the numbers and the question." },
      { bg: "Реши кое действие е нужно: „общо“ → +, „остават“ → −, „по толкова“ → ·, „разпредели“ → :.", en: "Choose the operation: 'total' → +, 'left' → −, 'each' → ·, 'share' → :." },
      { bg: "Спазвай реда: скоби, после · и :, накрая + и −.", en: "Order: brackets, then · and :, then + and −." },
      { bg: "Провери с обратното действие.", en: "Check with the inverse operation." },
    ],
    title: { bg: "Числа и действия", en: "Numbers and operations" },
    grades: "1–6",
    rows: [
      { name: { bg: "Разместително свойство", en: "Commutative law" }, formula: "a + b = b + a;  a · b = b · a" },
      { name: { bg: "Съдружително свойство", en: "Associative law" }, formula: "(a + b) + c = a + (b + c)" },
      { name: { bg: "Разпределително свойство", en: "Distributive law" }, formula: "a(b + c) = ab + ac" },
      { name: { bg: "Деление с остатък", en: "Division with remainder" }, formula: "a = b · q + r,  0 ≤ r < b" },
      { name: { bg: "Част от число", en: "Fraction of a number" }, formula: "m/n от A = A : n · m" },
      { name: { bg: "НОД · НОК", en: "GCD · LCM" }, formula: "НОД(a,b) · НОК(a,b) = a · b" },
    ],
  },
  {
    id: "fractions",
    method: [
      { bg: "Приведи дробите към общ знаменател (НОК на знаменателите).", en: "Bring fractions to a common denominator (LCM)." },
      { bg: "Смесените числа превърни в неправилни дроби.", en: "Turn mixed numbers into improper fractions." },
      { bg: "При деление умножи по реципрочната дроб.", en: "When dividing, multiply by the reciprocal." },
      { bg: "Съкрати отговора; при проценти първо запиши p% = p/100.", en: "Simplify; for percent write p% = p/100 first." },
    ],
    title: { bg: "Дроби, десетични числа, проценти", en: "Fractions, decimals, percent" },
    grades: "4–7",
    rows: [
      { name: { bg: "Събиране на дроби", en: "Adding fractions" }, formula: "a/b + c/d = (ad + bc)/(bd)" },
      { name: { bg: "Умножение на дроби", en: "Multiplying fractions" }, formula: "a/b · c/d = ac/bd" },
      { name: { bg: "Деление на дроби", en: "Dividing fractions" }, formula: "a/b : c/d = a/b · d/c" },
      { name: { bg: "Процент от число", en: "Percent of a number" }, formula: "p% от A = A · p/100" },
      { name: { bg: "Колко процента е B от A", en: "B as a percent of A" }, formula: "B/A · 100 %" },
      { name: { bg: "Увеличение / намаление", en: "Increase / decrease" }, formula: "A · (1 ± p/100)" },
      { name: { bg: "Проста лихва", en: "Simple interest" }, formula: "I = P · p/100 · t" },
    ],
  },
  {
    id: "algebra",
    method: [
      { bg: "Търси формула: квадрат на сбор/разлика, разлика на квадрати.", en: "Look for an identity: square of a sum/difference, difference of squares." },
      { bg: "Изнеси общ множител пред скоби.", en: "Factor out the common factor." },
      { bg: "При степени с еднаква основа събирай/изваждай показателите.", en: "Same base: add/subtract exponents." },
      { bg: "Провери, като разкриеш скобите обратно.", en: "Check by expanding back." },
    ],
    title: { bg: "Алгебра — степени и тъждества", en: "Algebra — powers and identities" },
    grades: "7–9",
    rows: [
      { name: { bg: "Произведение на степени", en: "Product of powers" }, formula: "aᵐ · aⁿ = aᵐ⁺ⁿ" },
      { name: { bg: "Частно на степени", en: "Quotient of powers" }, formula: "aᵐ : aⁿ = aᵐ⁻ⁿ" },
      { name: { bg: "Степен на степен", en: "Power of a power" }, formula: "(aᵐ)ⁿ = aᵐⁿ" },
      { name: { bg: "Нулев и отрицателен показател", en: "Zero and negative exponent" }, formula: "a⁰ = 1;  a⁻ⁿ = 1/aⁿ" },
      { name: { bg: "Квадрат на сбор", en: "Square of a sum" }, formula: "(a + b)² = a² + 2ab + b²" },
      { name: { bg: "Квадрат на разлика", en: "Square of a difference" }, formula: "(a − b)² = a² − 2ab + b²" },
      { name: { bg: "Разлика на квадрати", en: "Difference of squares" }, formula: "a² − b² = (a − b)(a + b)" },
      { name: { bg: "Куб на сбор", en: "Cube of a sum" }, formula: "(a + b)³ = a³ + 3a²b + 3ab² + b³" },
      { name: { bg: "Сбор и разлика на кубове", en: "Sum and difference of cubes" }, formula: "a³ ± b³ = (a ± b)(a² ∓ ab + b²)" },
    ],
  },
  {
    id: "equations",
    method: [
      { bg: "Разкрий скобите и премести неизвестните вляво, числата вдясно.", en: "Expand, move unknowns left and numbers right." },
      { bg: "Линейно: раздели на коефициента пред x.", en: "Linear: divide by the coefficient of x." },
      { bg: "Квадратно: запиши a, b, c → D → корени; при D < 0 няма реални корени.", en: "Quadratic: write a, b, c → D → roots; D < 0 means no real roots." },
      { bg: "Замести корена в началното уравнение за проверка.", en: "Substitute the root back to check." },
    ],
    title: { bg: "Уравнения и функции", en: "Equations and functions" },
    grades: "7–10",
    rows: [
      { name: { bg: "Линейно уравнение", en: "Linear equation" }, formula: "ax + b = 0 ⇒ x = −b/a,  a ≠ 0" },
      { name: { bg: "Дискриминанта", en: "Discriminant" }, formula: "D = b² − 4ac" },
      { name: { bg: "Корени на квадратно уравнение", en: "Quadratic roots" }, formula: "x = (−b ± √D) / 2a" },
      { name: { bg: "Формули на Виет", en: "Vieta's formulas" }, formula: "x₁ + x₂ = −b/a;  x₁x₂ = c/a" },
      { name: { bg: "Върх на парабола", en: "Parabola vertex" }, formula: "x₀ = −b/2a,  y₀ = −D/4a" },
      { name: { bg: "Линейна функция", en: "Linear function" }, formula: "y = kx + b,  k = наклон" },
    ],
  },
  {
    id: "geometry",
    method: [
      { bg: "Начертай чертеж и отбележи даденото.", en: "Draw a sketch and mark the givens." },
      { bg: "Избери формулата за фигурата (лице, обиколка, обем).", en: "Pick the formula for the shape." },
      { bg: "Липсваща страна в правоъгълен триъгълник → Питагор.", en: "Missing side in a right triangle → Pythagoras." },
      { bg: "Пиши мерните единици (см, см², см³).", en: "Always write units (cm, cm², cm³)." },
    ],
    title: { bg: "Геометрия — лице и обиколка", en: "Geometry — area and perimeter" },
    grades: "4–10",
    rows: [
      { name: { bg: "Правоъгълник", en: "Rectangle" }, formula: "S = a · b;  P = 2(a + b)" },
      { name: { bg: "Квадрат", en: "Square" }, formula: "S = a²;  P = 4a" },
      { name: { bg: "Триъгълник", en: "Triangle" }, formula: "S = a · hₐ / 2" },
      { name: { bg: "Успоредник", en: "Parallelogram" }, formula: "S = a · hₐ" },
      { name: { bg: "Трапец", en: "Trapezium" }, formula: "S = (a + b)/2 · h" },
      { name: { bg: "Ромб", en: "Rhombus" }, formula: "S = d₁ · d₂ / 2" },
      { name: { bg: "Кръг", en: "Circle" }, formula: "S = πr²;  L = 2πr" },
      { name: { bg: "Сума на ъглите", en: "Angle sums" }, formula: "триъгълник 180°;  n-ъгълник (n − 2)·180°" },
      { name: { bg: "Питагорова теорема", en: "Pythagorean theorem" }, formula: "a² + b² = c²" },
      { name: { bg: "Куб и правоъгълен паралелепипед", en: "Cube and cuboid" }, formula: "V = a³;  V = a · b · c" },
      { name: { bg: "Цилиндър и конус", en: "Cylinder and cone" }, formula: "V = πr²h;  V = πr²h / 3" },
      { name: { bg: "Сфера", en: "Sphere" }, formula: "V = 4πr³/3;  S = 4πr²" },
    ],
  },
  {
    id: "trig",
    method: [
      { bg: "Определи коя страна е срещулежаща, прилежаща и хипотенуза.", en: "Identify opposite, adjacent and hypotenuse." },
      { bg: "Правоъгълен триъгълник → sin/cos/tg; произволен → синусова или косинусова теорема.", en: "Right triangle → sin/cos/tg; any triangle → law of sines or cosines." },
      { bg: "Две страни и ъгъл между тях → косинусова; страна и срещулежащ ъгъл → синусова.", en: "Two sides and included angle → cosines; side and opposite angle → sines." },
    ],
    title: { bg: "Тригонометрия", en: "Trigonometry" },
    grades: "9–12",
    rows: [
      { name: { bg: "Основни отношения", en: "Basic ratios" }, formula: "sin α = a/c;  cos α = b/c;  tg α = a/b" },
      { name: { bg: "Основно тъждество", en: "Pythagorean identity" }, formula: "sin²α + cos²α = 1" },
      { name: { bg: "Таблични стойности", en: "Table values" }, formula: "sin 30° = ½; sin 45° = √2/2; sin 60° = √3/2" },
      { name: { bg: "Синусова теорема", en: "Law of sines" }, formula: "a/sin α = b/sin β = c/sin γ = 2R" },
      { name: { bg: "Косинусова теорема", en: "Law of cosines" }, formula: "c² = a² + b² − 2ab·cos γ" },
      { name: { bg: "Лице чрез ъгъл", en: "Area by angle" }, formula: "S = ½ ab · sin γ" },
      { name: { bg: "Двоен ъгъл", en: "Double angle" }, formula: "sin 2α = 2 sin α cos α;  cos 2α = cos²α − sin²α" },
    ],
  },
  {
    id: "sequences",
    method: [
      { bg: "Определи вида: еднаква разлика → аритметична, еднакво частно → геометрична.", en: "Constant difference → arithmetic; constant ratio → geometric." },
      { bg: "Запиши a₁ и d (или q).", en: "Write a₁ and d (or q)." },
      { bg: "Замести в формулата за aₙ или Sₙ.", en: "Substitute into the aₙ or Sₙ formula." },
    ],
    title: { bg: "Прогресии", en: "Progressions" },
    grades: "9–11",
    rows: [
      { name: { bg: "Аритметична — n-ти член", en: "Arithmetic — nth term" }, formula: "aₙ = a₁ + (n − 1)d" },
      { name: { bg: "Аритметична — сума", en: "Arithmetic — sum" }, formula: "Sₙ = n(a₁ + aₙ)/2" },
      { name: { bg: "Геометрична — n-ти член", en: "Geometric — nth term" }, formula: "aₙ = a₁ · qⁿ⁻¹" },
      { name: { bg: "Геометрична — сума", en: "Geometric — sum" }, formula: "Sₙ = a₁(qⁿ − 1)/(q − 1)" },
      { name: { bg: "Безкрайна сума, |q| < 1", en: "Infinite sum, |q| < 1" }, formula: "S = a₁/(1 − q)" },
    ],
  },
  {
    id: "logs",
    method: [
      { bg: "Запиши дефиниционното множество: аргумент > 0, основа > 0 и ≠ 1.", en: "Write the domain: argument > 0, base > 0 and ≠ 1." },
      { bg: "Сведи до една основа и един логаритъм с правилата.", en: "Use the rules to get one base and one log." },
      { bg: "Махни логаритъма: log_a x = c ⇒ x = aᶜ.", en: "Remove the log: log_a x = c ⇒ x = aᶜ." },
      { bg: "Провери корените спрямо ДМ.", en: "Check roots against the domain." },
    ],
    title: { bg: "Логаритми и експоненти", en: "Logarithms and exponentials" },
    grades: "11–12",
    rows: [
      { name: { bg: "Определение", en: "Definition" }, formula: "log_a b = c ⇔ aᶜ = b,  a > 0, a ≠ 1" },
      { name: { bg: "Произведение и частно", en: "Product and quotient" }, formula: "log(xy) = log x + log y;  log(x/y) = log x − log y" },
      { name: { bg: "Степен", en: "Power" }, formula: "log xⁿ = n log x" },
      { name: { bg: "Смяна на основата", en: "Change of base" }, formula: "log_a b = log_c b / log_c a" },
    ],
  },
  {
    id: "stats",
    method: [
      { bg: "Има ли значение редът? Да → вариации/пермутации; не → комбинации.", en: "Does order matter? Yes → arrangements/permutations; no → combinations." },
      { bg: "За вероятност: n = всички равновъзможни, m = благоприятни.", en: "Probability: n = all equally likely outcomes, m = favourable." },
      { bg: "„Поне едно“ → смятай чрез противоположното събитие.", en: "'At least one' → use the complement." },
    ],
    title: { bg: "Комбинаторика и вероятности", en: "Combinatorics and probability" },
    grades: "10–12",
    rows: [
      { name: { bg: "Пермутации", en: "Permutations" }, formula: "Pₙ = n!" },
      { name: { bg: "Вариации", en: "Arrangements" }, formula: "Vₙᵏ = n!/(n − k)!" },
      { name: { bg: "Комбинации", en: "Combinations" }, formula: "C(n,k) = n!/(k!(n − k)!)" },
      { name: { bg: "Вероятност", en: "Probability" }, formula: "P(A) = m/n" },
      { name: { bg: "Противоположно събитие", en: "Complement" }, formula: "P(Ā) = 1 − P(A)" },
      { name: { bg: "Средно аритметично", en: "Mean" }, formula: "x̄ = (x₁ + … + xₙ)/n" },
    ],
  },
  {
    id: "calculus",
    method: [
      { bg: "Разбий функцията на сбор, произведение или частно.", en: "Split the function into sum, product or quotient." },
      { bg: "Приложи правилото за всяка част.", en: "Apply the rule for each part." },
      { bg: "Екстремум: f′(x) = 0, после знак на f′ около корена.", en: "Extremum: f′(x) = 0, then sign of f′ around the root." },
      { bg: "Определен интеграл: намери F, после F(b) − F(a).", en: "Definite integral: find F, then F(b) − F(a)." },
    ],
    title: { bg: "Производни и интеграли", en: "Derivatives and integrals" },
    grades: "12",
    rows: [
      { name: { bg: "Степенна функция", en: "Power rule" }, formula: "(xⁿ)′ = n xⁿ⁻¹" },
      { name: { bg: "Сбор и константа", en: "Sum and constant" }, formula: "(u ± v)′ = u′ ± v′;  (cu)′ = cu′" },
      { name: { bg: "Произведение и частно", en: "Product and quotient" }, formula: "(uv)′ = u′v + uv′;  (u/v)′ = (u′v − uv′)/v²" },
      { name: { bg: "Тригонометрични", en: "Trigonometric" }, formula: "(sin x)′ = cos x;  (cos x)′ = −sin x" },
      { name: { bg: "Експонента и логаритъм", en: "Exponential and log" }, formula: "(eˣ)′ = eˣ;  (ln x)′ = 1/x" },
      { name: { bg: "Неопределен интеграл", en: "Indefinite integral" }, formula: "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C" },
      { name: { bg: "Нютон–Лайбниц", en: "Newton–Leibniz" }, formula: "∫ₐᵇ f(x) dx = F(b) − F(a)" },
    ],
  },
  {
    id: "units",
    method: [
      { bg: "Превърни всички величини в една и съща единица.", en: "Convert all quantities to the same unit." },
      { bg: "По-голяма → по-малка единица: умножи; обратно: раздели.", en: "Bigger → smaller unit: multiply; reverse: divide." },
    ],
    title: { bg: "Мерни единици", en: "Units" },
    grades: "1–12",
    rows: [
      { name: { bg: "Дължина", en: "Length" }, formula: "1 м = 100 см = 1000 мм;  1 км = 1000 м" },
      { name: { bg: "Лице", en: "Area" }, formula: "1 м² = 10 000 см²;  1 дка = 1000 м²" },
      { name: { bg: "Обем", en: "Volume" }, formula: "1 л = 1 дм³ = 1000 см³" },
      { name: { bg: "Маса", en: "Mass" }, formula: "1 кг = 1000 г;  1 т = 1000 кг" },
      { name: { bg: "Време", en: "Time" }, formula: "1 ч = 60 мин = 3600 сек" },
      { name: { bg: "Скорост", en: "Speed" }, formula: "v = s / t;  1 м/с = 3,6 км/ч" },
    ],
  },
];
