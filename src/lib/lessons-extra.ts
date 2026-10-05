import type { Lesson } from "./lessons";

// Lessons for topics added after the first curriculum pass.
export const EXTRA_LESSONS: Record<string, Lesson> = {
 "abseq": {
  "topicId": "abseq",
  "idea": {
   "bg": "Уравненията с модул съдържат неизвестно число под знака за абсолютна стойност, която представлява разстоянието до нулата. Основната цел е да се премахне модулът, като се разгледат случаите за положителна и отрицателна стойност на израза.",
   "en": "Absolute value equations contain an unknown variable inside the absolute value brackets, which represent the distance to zero. The main goal is to remove the modulus by considering both positive and negative cases for the expression."
  },
  "why": {
   "bg": "Методът работи, защото ако модулът на едно число е равно на положителното число 'a', то самото число може да бъде или 'a', или '-a', тъй като и двете са на еднакво разстояние от нулата.",
   "en": "The method works because if the absolute value of a number equals a positive number 'a', the number itself can be either 'a' or '-a', as both are at the same distance from zero."
  },
  "rules": [
   {
    "bg": "Ако |x| = a (където a > 0), то x = a или x = −a. Пример: |x| = 5 означава x = 5 или x = −5.",
    "en": "If |x| = a (where a > 0), then x = a or x = −a. Example: |x| = 5 means x = 5 or x = −5."
   },
   {
    "bg": "Ако |x| = 0, то единственото решение е x = 0.",
    "en": "If |x| = 0, the only solution is x = 0."
   },
   {
    "bg": "Ако |x| = a (където a < 0), уравнението няма решение, тъй като модулът винаги е неотрицателен.",
    "en": "If |x| = a (where a < 0), the equation has no solution because absolute value is always non-negative."
   },
   {
    "bg": "При |f(x)| = g(x), първо се поставя условие g(x) ≥ 0, след което се решава f(x) = g(x) или f(x) = −g(x).",
    "en": "For |f(x)| = g(x), first set the condition g(x) ≥ 0, then solve f(x) = g(x) or f(x) = −g(x)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Решете уравнението |2x − 3| = 7",
     "en": "Solve the equation |2x − 3| = 7"
    },
    "steps": [
     {
      "bg": "Разделяме уравнението на две възможности: 2x − 3 = 7 или 2x − 3 = −7.",
      "en": "Split the equation into two possibilities: 2x − 3 = 7 or 2x − 3 = −7."
     },
     {
      "bg": "Решаваме първото: 2x = 10, откъдето x = 5.",
      "en": "Solve the first: 2x = 10, hence x = 5."
     },
     {
      "bg": "Решаваме второто: 2x = −4, откъдето x = −2.",
      "en": "Solve the second: 2x = −4, hence x = −2."
     }
    ],
    "why": {
     "bg": "Тъй като 7 е положително число, изразът вътре може да бъде 7 или −7.",
     "en": "Since 7 is a positive number, the expression inside can be either 7 or −7."
    }
   },
   {
    "task": {
     "bg": "Решете уравнението |x + 4| = −2",
     "en": "Solve the equation |x + 4| = −2"
    },
    "steps": [
     {
      "bg": "Проверяваме дясната страна на уравнението: тя е −2.",
      "en": "Check the right side of the equation: it is −2."
     },
     {
      "bg": "Тъй като модулът не може да бъде отрицателен, уравнението няма решение.",
      "en": "Since absolute value cannot be negative, the equation has no solution."
     }
    ],
    "why": {
     "bg": "Разстоянието (модулът) никога не може да бъде отрицателно число.",
     "en": "Distance (absolute value) can never be a negative number."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне на втория случай (отрицателната стойност) и намиране само на едно решение.",
    "en": "Forgetting the second case (the negative value) and finding only one solution."
   },
   {
    "bg": "Опит за решаване на |x| = −5 чрез разлагане, вместо директно да се посочи, че няма решение.",
    "en": "Attempting to solve |x| = −5 by splitting it, instead of directly stating there is no solution."
   },
   {
    "bg": "Грешно разкриване на знаците: промяна на знака пред модула вместо вътре в него.",
    "en": "Incorrect sign handling: changing the sign in front of the modulus instead of inside it."
   }
  ]
 },
 "absval": {
  "topicId": "absval",
  "idea": {
   "bg": "Модулът на едно число представлява разстоянието от него до началото на координатната ос (числото 0). Тъй като разстоянието винаги е положителна величина или нула, резултатът от модула никога не е отрицателен.",
   "en": "The absolute value of a number represents its distance from the origin (zero) on the number line. Since distance is always a positive value or zero, the result of an absolute value is never negative."
  },
  "why": {
   "bg": "Методът се основава на определението, че модулът премахва знака минус. Ако числото е положително или нула, то остава същото; ако е отрицателно, вземаме неговото противоположно, за да получим положително разстояние.",
   "en": "The method is based on the definition that the absolute value removes the negative sign. If a number is positive or zero, it stays the same; if it is negative, we take its opposite to obtain a positive distance."
  },
  "rules": [
   {
    "bg": "Ако числото a е положително, то |a| = a. Пример: |5| = 5.",
    "en": "If number a is positive, then |a| = a. Example: |5| = 5."
   },
   {
    "bg": "Ако числото a е отрицателно, то |a| = −a (противоположното). Пример: |−8| = 8.",
    "en": "If number a is negative, then |a| = −a (the opposite). Example: |−8| = 8."
   },
   {
    "bg": "Модулът на нула е винаги нула: |0| = 0.",
    "en": "The absolute value of zero is always zero: |0| = 0."
   },
   {
    "bg": "Противоположните числа имат равни модули: |a| = |−a|. Пример: |−3| = |3| = 3.",
    "en": "Opposite numbers have equal absolute values: |a| = |−a|. Example: |−3| = |3| = 3."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Пресметнете стойността на израза: A = |−12| + |5| − |−3|",
     "en": "Calculate the value of the expression: A = |−12| + |5| − |−3|"
    },
    "steps": [
     {
      "bg": "Първо пресмятаме всеки модул поотделно: |−12| = 12, |5| = 5, |−3| = 3.",
      "en": "First, calculate each absolute value separately: |−12| = 12, |5| = 5, |−3| = 3."
     },
     {
      "bg": "Заместваме получените стойности в израза: A = 12 + 5 − 3.",
      "en": "Substitute the obtained values back into the expression: A = 12 + 5 − 3."
     },
     {
      "bg": "Извършваме действията: 17 − 3 = 14.",
      "en": "Perform the operations: 17 − 3 = 14."
     }
    ],
    "why": {
     "bg": "Модулните скоби се разглеждат с приоритет, подобно на обикновените скоби, но с преобразуване на знака.",
     "en": "Absolute value bars are treated with priority, similar to parentheses, but with sign transformation."
    }
   },
   {
    "task": {
     "bg": "Решете уравнението: |x| = 7",
     "en": "Solve the equation: |x| = 7"
    },
    "steps": [
     {
      "bg": "Търсим кои числа са на разстояние 7 единици от нулата.",
      "en": "We look for numbers that are 7 units away from zero."
     },
     {
      "bg": "Едното решение е положителното число: x1 = 7.",
      "en": "One solution is the positive number: x1 = 7."
     },
     {
      "bg": "Другото решение е неговото противоположно: x2 = −7.",
      "en": "The other solution is its opposite: x2 = −7."
     }
    ],
    "why": {
     "bg": "Уравнение от вида |x| = a (където a > 0) винаги има два корена, защото две числа имат един и същ модул.",
     "en": "An equation of the form |x| = a (where a > 0) always has two roots because two numbers share the same absolute value."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно е да се смята, че |−x| винаги е равно на x, ако x е неизвестно (може да е отрицателно).",
    "en": "It is incorrect to assume |−x| is always x if x is an unknown (it could be negative)."
   },
   {
    "bg": "Честа грешка е да се запише |x| = −5. Модулът не може да бъде равен на отрицателно число.",
    "en": "A common mistake is writing |x| = −5. An absolute value cannot be equal to a negative number."
   },
   {
    "bg": "Забравяне на втория корен при решаване на уравнения (напр. само x=7 вместо x=7 и x=−7).",
    "en": "Forgetting the second root when solving equations (e.g., only x=7 instead of x=7 and x=−7)."
   }
  ]
 },
 "algfrac": {
  "topicId": "algfrac",
  "idea": {
   "bg": "Дробен израз е рационален израз, в който има променлива в знаменателя. Тези изрази представят деление на два многочлена и изискват определяне на допустими стойности.",
   "en": "An algebraic fraction is a rational expression that has a variable in the denominator. These expressions represent the division of two polynomials and require defining a domain of valid values."
  },
  "why": {
   "bg": "Методите за работа с тях се основават на основното свойство на дробта: стойността не се променя при умножение или деление на числителя и знаменателя с един и същ ненулев израз.",
   "en": "The methods for handling them are based on the fundamental property of fractions: the value remains unchanged when multiplying or dividing both numerator and denominator by the same non-zero expression."
  },
  "rules": [
   {
    "bg": "Допустими стойности (ДС): Знаменателят не може да бъде равен на нула. Пример: 5/(x−2) има ДС: x ≠ 2.",
    "en": "Domain (Excluded values): The denominator cannot be zero. Example: 5/(x−2) has domain: x ≠ 2."
   },
   {
    "bg": "Съкращаване: Разлагаме числителя и знаменателя на множители и задраскваме общите. Пример: (2x)/(x²) = 2/x.",
    "en": "Simplification: Factor the numerator and denominator and cancel out common factors. Example: (2x)/(x²) = 2/x."
   },
   {
    "bg": "Събиране и изваждане: Привеждаме към общ знаменател чрез НОК на знаменателите. Пример: 1/x + 1/y = (y+x)/(xy).",
    "en": "Addition and Subtraction: Bring to a common denominator using the LCM of the denominators. Example: 1/x + 1/y = (y+x)/(xy)."
   },
   {
    "bg": "Умножение и деление: Умножаваме числител с числител и знаменател със знаменател; при деление обръщаме втората дроб. Пример: (a/b) : (c/d) = (a·d)/(b·c).",
    "en": "Multiplication and Division: Multiply numerators together and denominators together; for division, flip the second fraction. Example: (a/b) : (c/d) = (a·d)/(b·c)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Съкратете дробта: (x² − 9) / (x² + 3x)",
     "en": "Simplify the fraction: (x² − 9) / (x² + 3x)"
    },
    "steps": [
     {
      "bg": "Стъпка 1: Разлагаме числителя като разлика на квадрати: (x−3)(x+3).",
      "en": "Step 1: Factor the numerator as a difference of squares: (x−3)(x+3)."
     },
     {
      "bg": "Стъпка 2: Изнасяме общ множител x в знаменателя: x(x+3).",
      "en": "Step 2: Factor out the common factor x in the denominator: x(x+3)."
     },
     {
      "bg": "Стъпка 3: Съкращаваме общия множител (x+3), при ДС x ≠ 0 и x ≠ −3.",
      "en": "Step 3: Cancel the common factor (x+3), given x ≠ 0 and x ≠ −3."
     },
     {
      "bg": "Краен резултат: (x−3) / x.",
      "en": "Final result: (x−3) / x."
     }
    ],
    "why": {
     "bg": "Разлагането позволява да видим скритите общи множители, които се делят до 1.",
     "en": "Factoring allows us to see hidden common factors that divide to 1."
    }
   },
   {
    "task": {
     "bg": "Извършете действието: 2/(x−1) − 1/x",
     "en": "Perform the operation: 2/(x−1) − 1/x"
    },
    "steps": [
     {
      "bg": "Стъпка 1: Намираме общ знаменател: x(x−1).",
      "en": "Step 1: Find a common denominator: x(x−1)."
     },
     {
      "bg": "Стъпка 2: Разширяваме първата дроб с x и втората с (x−1): (2x − (x−1)) / x(x−1).",
      "en": "Step 2: Expand the first fraction by x and the second by (x−1): (2x − (x−1)) / x(x−1)."
     },
     {
      "bg": "Стъпка 3: Разкриваме скобите внимателно: (2x − x + 1) / x(x−1).",
      "en": "Step 3: Carefully expand the brackets: (2x − x + 1) / x(x−1)."
     },
     {
      "bg": "Краен резултат: (x+1) / (x² − x).",
      "en": "Final result: (x+1) / (x² − x)."
     }
    ],
    "why": {
     "bg": "Общият знаменател е необходим, за да съберем части от различни 'цели'.",
     "en": "A common denominator is necessary to add parts of different 'wholes'."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Съкращаване на събираеми вместо множители. Не може да съкратите x в (x+2)/x!",
    "en": "Canceling terms instead of factors. You cannot cancel x in (x+2)/x!"
   },
   {
    "bg": "Забравяне на промяната на знаците при изваждане на числител в скоби.",
    "en": "Forgetting to change signs when subtracting a numerator in brackets."
   },
   {
    "bg": "Пропускане на допустимите стойности, което води до деление на нула.",
    "en": "Omitting the domain (excluded values), which leads to division by zero."
   }
  ]
 },
 "angletypes": {
  "topicId": "angletypes",
  "idea": {
   "bg": "Ъгълът е геометрична фигура, образувана от два лъча с общо начало, наречено връх. В зависимост от тяхната мярка, ъглите се разделят на основни видове: остър, прав, тъп, изправен, пълен и нулев.",
   "en": "An angle is a geometric figure formed by two rays with a common endpoint called a vertex. Based on their measure, angles are divided into main types: acute, right, obtuse, straight, full, and zero."
  },
  "why": {
   "bg": "Класификацията работи чрез сравняване на градусната мярка на ъгъла спрямо ключови стойности като 90° и 180°, които служат за еталони в геометрията.",
   "en": "The classification works by comparing the degree measure of the angle to key values like 90° and 180°, which serve as benchmarks in geometry."
  },
  "rules": [
   {
    "bg": "Остър ъгъл: Мярката му е по-голяма от 0° и по-малка от 90° (пример: 45°).",
    "en": "Acute angle: Its measure is greater than 0° and less than 90° (example: 45°)."
   },
   {
    "bg": "Прав ъгъл: Мярката му е точно 90° и се отбелязва с малко квадратче при върха.",
    "en": "Right angle: Its measure is exactly 90° and is marked with a small square at the vertex."
   },
   {
    "bg": "Тъп ъгъл: Мярката му е по-голяма от 90° и по-малка от 180° (пример: 120°).",
    "en": "Obtuse angle: Its measure is greater than 90° and less than 180° (example: 120°)."
   },
   {
    "bg": "Изправен ъгъл: Мярката му е точно 180°, като раменете му образуват права линия.",
    "en": "Straight angle: Its measure is exactly 180°, where its sides form a straight line."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Определете вида на ъгъл с мярка 91°.",
     "en": "Identify the type of an angle with a measure of 91°."
    },
    "steps": [
     {
      "bg": "Сравняваме 91° с правия ъгъл (90°).",
      "en": "Compare 91° to a right angle (90°)."
     },
     {
      "bg": "Установяваме, че 91° > 90°.",
      "en": "Observe that 91° > 90°."
     },
     {
      "bg": "Тъй като е по-голям от 90°, но по-малък от 180°, ъгълът е тъп.",
      "en": "Since it is greater than 90° but less than 180°, the angle is obtuse."
     }
    ],
    "why": {
     "bg": "Всеки ъгъл, който превишава границата от 90°, престава да бъде остър или прав и става тъп.",
     "en": "Any angle that exceeds the 90° limit ceases to be acute or right and becomes obtuse."
    }
   },
   {
    "task": {
     "bg": "Какъв е видът на ъгъл, който е половината от изправен ъгъл?",
     "en": "What is the type of an angle that is half of a straight angle?"
    },
    "steps": [
     {
      "bg": "Намираме мярката на изправения ъгъл: 180°.",
      "en": "Find the measure of a straight angle: 180°."
     },
     {
      "bg": "Делим 180° на 2: 180 : 2 = 90°.",
      "en": "Divide 180° by 2: 180 : 2 = 90°."
     },
     {
      "bg": "По дефиниция ъгъл от 90° е прав ъгъл.",
      "en": "By definition, a 90° angle is a right angle."
     }
    ],
    "why": {
     "bg": "Делението на 180 на две равни части винаги води до перпендикулярни лъчи.",
     "en": "Dividing 180 into two equal parts always results in perpendicular rays."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно класифициране на 90° като остър или тъп, вместо като прав.",
    "en": "Incorrectly classifying 90° as acute or obtuse instead of right."
   },
   {
    "bg": "Объркване на изправен ъгъл (180°) с пълен ъгъл (360°).",
    "en": "Confusing a straight angle (180°) with a full angle (360°)."
   },
   {
    "bg": "Смятане на ъгъл от 181° за тъп (той всъщност е непъкнат ъгъл).",
    "en": "Considering a 181° angle as obtuse (it is actually a reflex angle)."
   }
  ]
 },
 "bignum": {
  "topicId": "bignum",
  "idea": {
   "bg": "Числата до 1 000 000 разширяват позиционната система, като включват нови класове – класа на хилядите. Всяка цифра в числото има различна стойност в зависимост от нейната позиция: единици, десетици, стотици, хиляди, десетохиляди и стохиляди.",
   "en": "Numbers up to 1,000,000 expand the place value system by including new classes – the thousands class. Each digit in the number has a different value depending on its position: ones, tens, hundreds, thousands, ten-thousands, and hundred-thousands."
  },
  "why": {
   "bg": "Десетичната бройна система се основава на групиране по 10. Десет единици от по-нисък ред винаги образуват една единица от следващия по-висок ред, което позволява записването на много големи количества с малък брой символи.",
   "en": "The decimal system is based on grouping by 10. Ten units of a lower order always form one unit of the next higher order, allowing very large quantities to be written with a small number of symbols."
  },
  "rules": [
   {
    "bg": "Разделяне на класове: За по-лесно четене цифрите се групират по три отдясно наляво (напр. 456 789).",
    "en": "Separation of classes: For easier reading, digits are grouped by three from right to left (e.g., 456 789)."
   },
   {
    "bg": "Четене: Четем първо числото в класа на хилядите, добавяме думата 'хиляди' и след това четем останалите три цифри.",
    "en": "Reading: First read the number in the thousands class, add the word 'thousand', and then read the remaining three digits."
   },
   {
    "bg": "Сравняване: Първо сравняваме броя на цифрите; ако е равен, сравняваме цифрите отляво надясно (най-високия ред).",
    "en": "Comparison: First compare the number of digits; if equal, compare digits from left to right (the highest order)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Запишете с цифри числото: петстотин и осем хиляди двадесет и три.",
     "en": "Write the number in digits: five hundred and eight thousand twenty-three."
    },
    "steps": [
     {
      "bg": "1. Определете класа на хилядите: 508.",
      "en": "1. Identify the thousands class: 508."
     },
     {
      "bg": "2. Определете класа на единиците: има 2 десетици и 3 единици, което е 023 (трябва да има 3 цифри).",
      "en": "2. Identify the ones class: there are 2 tens and 3 ones, which is 023 (it must have 3 digits)."
     },
     {
      "bg": "3. Съединете двете части: 508 023.",
      "en": "3. Combine the two parts: 508 023."
     }
    ],
    "why": {
     "bg": "Нулата служи като държател на място, когато липсва конкретен ред (в случая няма стотици).",
     "en": "Zero serves as a placeholder when a specific order is missing (in this case, there are no hundreds)."
    }
   },
   {
    "task": {
     "bg": "Сравнете числата 89 500 и 102 300.",
     "en": "Compare the numbers 89 500 and 102 300."
    },
    "steps": [
     {
      "bg": "1. Пребройте цифрите: 89 500 има 5 цифри, а 102 300 има 6 цифри.",
      "en": "1. Count the digits: 89 500 has 5 digits, while 102 300 has 6 digits."
     },
     {
      "bg": "2. Числото с повече цифри е винаги по-голямо.",
      "en": "2. The number with more digits is always larger."
     },
     {
      "bg": "3. Резултат: 89 500 < 102 300.",
      "en": "3. Result: 89 500 < 102 300."
     }
    ],
    "why": {
     "bg": "По-високият брой цифри означава наличие на по-висок позиционен ред (стохиляди срещу десетохиляди).",
     "en": "A higher number of digits means the presence of a higher positional order (hundred-thousands vs. ten-thousands)."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Пропускане на нулата при записване, когато липсва ред (напр. записване на 105 004 като 105 4).",
    "en": "Omitting the zero when writing if an order is missing (e.g., writing 105 004 as 105 4)."
   },
   {
    "bg": "Грешно определяне на стойността на цифрата (напр. в 450 000 цифрата 5 означава 50 000, а не 5 000).",
    "en": "Incorrectly identifying the value of a digit (e.g., in 450 000, the digit 5 means 50 000, not 5 000)."
   }
  ]
 },
 "biquad": {
  "topicId": "biquad",
  "idea": {
   "bg": "Биквадратното уравнение е уравнение от вида ax⁴ + bx² + c = 0, където a ≠ 0. То се решава чрез полагане, което го свежда до обикновено квадратно уравнение.",
   "en": "A biquadratic equation is an equation of the form ax⁴ + bx² + c = 0, where a ≠ 0. It is solved by substitution, which reduces it to a standard quadratic equation."
  },
  "why": {
   "bg": "Методът работи, защото x⁴ е (x²)², което позволява да заменим x² с нова променлива t и да приложим формулата за дискриминанта.",
   "en": "The method works because x⁴ is (x²)², allowing us to replace x² with a new variable t and apply the discriminant formula."
  },
  "rules": [
   {
    "bg": "Въведете нова променлива t = x², като задължително t ≥ 0.",
    "en": "Introduce a new variable t = x², with the mandatory condition t ≥ 0."
   },
   {
    "bg": "Решете полученото квадратно уравнение at² + bt + c = 0.",
    "en": "Solve the resulting quadratic equation at² + bt + c = 0."
   },
   {
    "bg": "Върнете се към x чрез x² = t₁ и x² = t₂ за всяко t ≥ 0.",
    "en": "Return to x using x² = t₁ and x² = t₂ for every t ≥ 0."
   },
   {
    "bg": "Ако t е отрицателно, съответното уравнение x² = t няма реални корени.",
    "en": "If t is negative, the corresponding equation x² = t has no real roots."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Решете уравнението: x⁴ − 5x² + 4 = 0",
     "en": "Solve the equation: x⁴ − 5x² + 4 = 0"
    },
    "steps": [
     {
      "bg": "Полагаме x² = t (t ≥ 0). Получаваме t² − 5t + 4 = 0.",
      "en": "Substitute x² = t (t ≥ 0). We get t² − 5t + 4 = 0."
     },
     {
      "bg": "Намираме корените: D = 25 − 16 = 9. t₁ = (5 + 3)/2 = 4; t₂ = (5 − 3)/2 = 1.",
      "en": "Find the roots: D = 25 − 16 = 9. t₁ = (5 + 3)/2 = 4; t₂ = (5 − 3)/2 = 1."
     },
     {
      "bg": "Връщаме се към x: x² = 4 дава x = 2 или x = −2.",
      "en": "Return to x: x² = 4 gives x = 2 or x = −2."
     },
     {
      "bg": "Връщаме се към x: x² = 1 дава x = 1 или x = −1. Корени: ±1, ±2.",
      "en": "Return to x: x² = 1 gives x = 1 or x = −1. Roots: ±1, ±2."
     }
    ],
    "why": {
     "bg": "Двата корена за t са положителни, затова имаме общо 4 реални корена за x.",
     "en": "Both roots for t are positive, so we have a total of 4 real roots for x."
    }
   },
   {
    "task": {
     "bg": "Решете уравнението: x⁴ + 3x² − 4 = 0",
     "en": "Solve the equation: x⁴ + 3x² − 4 = 0"
    },
    "steps": [
     {
      "bg": "Полагаме x² = t (t ≥ 0). Получаваме t² + 3t − 4 = 0.",
      "en": "Substitute x² = t (t ≥ 0). We get t² + 3t − 4 = 0."
     },
     {
      "bg": "Корени на квадратното уравнение: t₁ = 1, t₂ = −4.",
      "en": "Roots of the quadratic equation: t₁ = 1, t₂ = −4."
     },
     {
      "bg": "За t₁ = 1: x² = 1, следователно x = 1 или x = −1.",
      "en": "For t₁ = 1: x² = 1, therefore x = 1 or x = −1."
     },
     {
      "bg": "За t₂ = −4: x² = −4 няма реални корени, защото −4 < 0.",
      "en": "For t₂ = −4: x² = −4 has no real roots because −4 < 0."
     }
    ],
    "why": {
     "bg": "Тъй като x² не може да бъде отрицателно число, отхвърляме t₂, което е −4.",
     "en": "Since x² cannot be a negative number, we discard t₂ which is −4."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне на отрицателните стойности при коренуване: x² = 4 дава x = 2 и x = −2, а не само x = 2.",
    "en": "Forgetting negative values when taking the square root: x² = 4 gives x = 2 and x = −2, not just x = 2."
   },
   {
    "bg": "Приемане на отрицателни стойности за t като валидни решения за x.",
    "en": "Accepting negative values for t as valid solutions for x."
   },
   {
    "bg": "Спиране на решението след намиране на t и забравяне да се намери x.",
    "en": "Stopping the solution after finding t and forgetting to find x."
   }
  ]
 },
 "circle": {
  "topicId": "circle",
  "idea": {
   "bg": "Окръжността е крива линия, чиито точки са на равно разстояние от центъра, а кръгът е частта от равнината, заградена от нея. Основните елементи са радиус (r), диаметър (d = 2·r) и числото пи (π ≈ 3.14).",
   "en": "A circle (circumference) is a curved line whose points are equidistant from the center, while a disk (circle area) is the plane region enclosed by it. The main elements are radius (r), diameter (d = 2·r), and the number pi (π ≈ 3.14)."
  },
  "why": {
   "bg": "Формулите се основават на константата π, която представлява отношението на дължината на окръжността към нейния диаметър. Лицето на кръга се извежда чрез разделянето му на безкрайно малки триъгълни сектори, които формират правоъгълник.",
   "en": "The formulas are based on the constant π, which represents the ratio of the circumference to its diameter. The area of the disk is derived by dividing it into infinitely small triangular sectors that form a rectangle."
  },
  "rules": [
   {
    "bg": "Дължина на окръжност (C): C = 2·π·r или C = π·d. Пример: ако r=5 см, C = 2·3.14·5 = 31.4 см.",
    "en": "Circumference (C): C = 2·π·r or C = π·d. Example: if r=5 cm, C = 2·3.14·5 = 31.4 cm."
   },
   {
    "bg": "Лице на кръг (S): S = π·r². Пример: ако r=3 см, S = 3.14·3² = 3.14·9 = 28.26 кв. см.",
    "en": "Area of a circle (S): S = π·r². Example: if r=3 cm, S = 3.14·3² = 3.14·9 = 28.26 sq. cm."
   },
   {
    "bg": "Диаметърът (d) е два пъти радиуса (r): d = 2·r. Винаги проверявайте дали е даден r или d преди пресмятане.",
    "en": "The diameter (d) is twice the radius (r): d = 2·r. Always check whether r or d is given before calculating."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете дължината на окръжност с диаметър d = 10 см.",
     "en": "Find the circumference of a circle with a diameter d = 10 cm."
    },
    "steps": [
     {
      "bg": "Използваме формулата C = π·d.",
      "en": "Use the formula C = π·d."
     },
     {
      "bg": "Заместваме стойностите: C = 3.14 · 10.",
      "en": "Substitute the values: C = 3.14 · 10."
     },
     {
      "bg": "Пресмятаме резултата: C = 31.4 см.",
      "en": "Calculate the result: C = 31.4 cm."
     }
    ],
    "why": {
     "bg": "Директното използване на диаметъра във формулата съкращава стъпката за намиране на радиус.",
     "en": "Directly using the diameter in the formula skips the step of finding the radius."
    }
   },
   {
    "task": {
     "bg": "Намерете лицето на кръг с радиус r = 4 дм.",
     "en": "Find the area of a circle with a radius r = 4 dm."
    },
    "steps": [
     {
      "bg": "Записваме формулата за лице: S = π·r².",
      "en": "Write down the area formula: S = π·r²."
     },
     {
      "bg": "Повдигаме радиуса на квадрат: 4² = 4 · 4 = 16.",
      "en": "Square the radius: 4² = 4 · 4 = 16."
     },
     {
      "bg": "Умножаваме по π: S = 3.14 · 16 = 50.24 кв. дм.",
      "en": "Multiply by π: S = 3.14 · 16 = 50.24 sq. dm."
     }
    ],
    "why": {
     "bg": "Лицето винаги се измерва в квадратни единици и зависи от квадрата на радиуса.",
     "en": "Area is always measured in square units and depends on the square of the radius."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Объркване на радиус с диаметър: Учениците често забравят да разделят d на 2, преди да изчислят лицето.",
    "en": "Confusing radius with diameter: Students often forget to divide d by 2 before calculating the area."
   },
   {
    "bg": "Грешно повдигане на квадрат: Умножаване на радиуса по 2 (2·r) вместо по себе си (r·r) при търсене на лице.",
    "en": "Incorrect squaring: Multiplying the radius by 2 (2·r) instead of by itself (r·r) when finding the area."
   },
   {
    "bg": "Пропускане на мерните единици или грешното им записване (например см вместо кв. см за лице).",
    "en": "Omitting units of measurement or writing them incorrectly (e.g., cm instead of sq. cm for area)."
   }
  ]
 },
 "clock": {
  "topicId": "clock",
  "idea": {
   "bg": "Времето се измерва с мерни единици като час, минута и секунда, които са организирани в шестдесетична система. Часовникът с циферблат използва две или три стрелки, за да покаже точното време в рамките на денонощието.",
   "en": "Time is measured using units such as hours, minutes, and seconds, organized in a sexagesimal system. A clock face uses two or three hands to indicate the exact time within a 24-hour day."
  },
  "why": {
   "bg": "Системата работи, защото денонощието е разделено на 24 равни части (часове), а всеки час и минута се делят на 60 по-малки части, което позволява прецизно отчитане на продължителността.",
   "en": "The system works because a day is divided into 24 equal parts (hours), and each hour and minute is divided into 60 smaller parts, allowing for precise tracking of duration."
  },
  "rules": [
   {
    "bg": "1 час (ч.) = 60 минути (мин.); 1 минута = 60 секунди (сек.). Пример: 2 ч. = 2 · 60 = 120 мин.",
    "en": "1 hour (h) = 60 minutes (min); 1 minute = 60 seconds (sec). Example: 2 h = 2 · 60 = 120 min."
   },
   {
    "bg": "Малката стрелка показва часовете, а голямата - минутите. Когато голямата е на 12, е точен час.",
    "en": "The short hand shows hours, and the long hand shows minutes. When the long hand is at 12, it is an o'clock."
   },
   {
    "bg": "За преминаване от по-голяма към по-малка единица умножаваме, а обратното - делим. Пример: 180 мин. : 60 = 3 ч.",
    "en": "To convert from a larger to a smaller unit we multiply, and vice versa - we divide. Example: 180 min : 60 = 3 h."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Пресметнете колко минути са 3 часа и 15 минути.",
     "en": "Calculate how many minutes are in 3 hours and 15 minutes."
    },
    "steps": [
     {
      "bg": "Превръщаме часовете в минути: 3 · 60 = 180 минути.",
      "en": "Convert hours to minutes: 3 · 60 = 180 minutes."
     },
     {
      "bg": "Прибавяме останалите 15 минути: 180 + 15 = 195 минути.",
      "en": "Add the remaining 15 minutes: 180 + 15 = 195 minutes."
     }
    ],
    "why": {
     "bg": "Събираме само еднакви мерни единици, затова първо преобразуваме всичко в минути.",
     "en": "We only add identical units of measurement, so we first convert everything to minutes."
    }
   },
   {
    "task": {
     "bg": "Един филм започва в 14:45 и продължава 1 час и 30 минути. В колко часа свършва?",
     "en": "A movie starts at 14:45 and lasts 1 hour and 30 minutes. At what time does it end?"
    },
    "steps": [
     {
      "bg": "Добавяме часа към началния час: 14:45 + 1 ч. = 15:45.",
      "en": "Add the hour to the start time: 14:45 + 1 h = 15:45."
     },
     {
      "bg": "Добавяме минутите: 45 + 30 = 75 мин. Тъй като 75 мин. = 1 ч. 15 мин., добавяме още 1 час.",
      "en": "Add the minutes: 45 + 30 = 75 min. Since 75 min = 1 h 15 min, we add another hour."
     },
     {
      "bg": "Краен резултат: 15:00 + 1 ч. 15 мин. = 16:15.",
      "en": "Final result: 15:00 + 1 h 15 min = 16:15."
     }
    ],
    "why": {
     "bg": "Когато минутите надвишат 60, те формират нов пълен час.",
     "en": "When minutes exceed 60, they form a new full hour."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно използване на десетична запетая (напр. 1.50 ч. вместо 1 ч. 30 мин.) – времето не е десетична система.",
    "en": "Incorrect use of a decimal point (e.g., 1.50 h instead of 1 h 30 min) – time is not a decimal system."
   },
   {
    "bg": "Забравяне, че след 12:59 следва 1:00 (или 13:00), а не 12:60.",
    "en": "Forgetting that after 12:59 comes 1:00 (or 13:00), not 12:60."
   },
   {
    "bg": "Объркване на малката и голямата стрелка при четене на аналогов часовник.",
    "en": "Confusing the hour hand and the minute hand when reading an analog clock."
   }
  ]
 },
 "cone": {
  "topicId": "cone",
  "idea": {
   "bg": "Конусът е геометрично тяло, получено чрез въртене на правоъгълен триъгълник около един от неговите катети. Той се състои от основа (кръг) и околна повърхнина, която се събира в една точка, наречена връх.",
   "en": "A cone is a geometric solid formed by rotating a right-angled triangle around one of its legs. It consists of a circular base and a lateral surface that converges at a single point called the vertex."
  },
  "why": {
   "bg": "Формулите за конус се извеждат чрез връзката му с цилиндъра, като обемът му е точно една трета от обема на цилиндър със същата основа и височина, а повърхнината му се изчислява чрез развивка на конуса в кръгов сектор.",
   "en": "The formulas for a cone are derived from its relationship with a cylinder, where its volume is exactly one-third of the volume of a cylinder with the same base and height, and its surface area is calculated by unfolding the cone into a circular sector."
  },
  "rules": [
   {
    "bg": "Околна повърхнина (S): S = π · r · l, където r е радиусът, а l е образувателната. Пример: r=3, l=5 -> S = 15π.",
    "en": "Lateral surface area (S): S = π · r · l, where r is the radius and l is the slant height. Example: r=3, l=5 -> S = 15π."
   },
   {
    "bg": "Пълна повърхнина (S1): S1 = π · r · (l + r). Тя включва околната повърхнина и лицето на основата (π · r²).",
    "en": "Total surface area (S1): S1 = π · r · (l + r). It includes the lateral surface area and the base area (π · r²)."
   },
   {
    "bg": "Обем (V): V = (1/3) · π · r² · h, където h е височината на конуса. Пример: r=3, h=4 -> V = 12π.",
    "en": "Volume (V): V = (1/3) · π · r² · h, where h is the height of the cone. Example: r=3, h=4 -> V = 12π."
   },
   {
    "bg": "Питагорова теорема за конус: l² = h² + r². Тази връзка е ключова за намиране на липсващ елемент.",
    "en": "Pythagorean theorem for a cone: l² = h² + r². This relation is key to finding a missing element."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете околната повърхнина на конус с радиус r = 6 см и височина h = 8 см.",
     "en": "Find the lateral surface area of a cone with radius r = 6 cm and height h = 8 cm."
    },
    "steps": [
     {
      "bg": "Намираме образувателната l чрез Питагорова теорема: l = √(6² + 8²) = √(36 + 64) = √100 = 10 см.",
      "en": "Find the slant height l using the Pythagorean theorem: l = √(6² + 8²) = √(36 + 64) = √100 = 10 cm."
     },
     {
      "bg": "Прилагаме формулата за околна повърхнина: S = π · r · l = π · 6 · 10 = 60π кв.см.",
      "en": "Apply the lateral area formula: S = π · r · l = π · 6 · 10 = 60π sq.cm."
     }
    ],
    "why": {
     "bg": "Трябва първо да намерим образувателната l, защото тя участва във формулата за лице, а е дадена само височината h.",
     "en": "We must first find the slant height l because it is used in the area formula, while only the height h was given."
    }
   },
   {
    "task": {
     "bg": "Изчислете обема на конус с радиус r = 5 см и височина h = 9 см.",
     "en": "Calculate the volume of a cone with radius r = 5 cm and height h = 9 cm."
    },
    "steps": [
     {
      "bg": "Изчисляваме лицето на основата: B = π · r² = π · 5² = 25π кв.см.",
      "en": "Calculate the base area: B = π · r² = π · 5² = 25π sq.cm."
     },
     {
      "bg": "Намираме обема: V = (1/3) · B · h = (1/3) · 25π · 9 = 25π · 3 = 75π куб.см.",
      "en": "Find the volume: V = (1/3) · B · h = (1/3) · 25π · 9 = 25π · 3 = 75π cubic cm."
     }
    ],
    "why": {
     "bg": "Обемът е 1/3 от произведението на основата и височината, което отразява факта, че конусът е 'заострен' цилиндър.",
     "en": "The volume is 1/3 of the product of the base and height, reflecting the fact that a cone is a 'pointed' cylinder."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Объркване на височината (h) с образувателната (l) при пресмятане на околна повърхнина.",
    "en": "Confusing the height (h) with the slant height (l) when calculating the lateral surface area."
   },
   {
    "bg": "Забравяне на множителя 1/3 във формулата за обем, което води до обема на цилиндър.",
    "en": "Forgetting the 1/3 multiplier in the volume formula, which leads to the volume of a cylinder."
   },
   {
    "bg": "Неправилно повдигане на радиуса на квадрат при изчисляване на основата.",
    "en": "Incorrectly squaring the radius when calculating the base area."
   }
  ]
 },
 "congruent": {
  "topicId": "congruent",
  "idea": {
   "bg": "Два триъгълника са еднакви, ако имат съответно равни страни и съответно равни ъгли. Това означава, че те имат напълно еднаква форма и размер и при съвпадане се покриват точно.",
   "en": "Two triangles are congruent if they have corresponding sides and corresponding angles that are equal. This means they have the same shape and size and fit exactly on top of one another."
  },
  "why": {
   "bg": "Методите за еднаквост работят, защото триъгълникът е твърда фигура, определена от минимален брой елементи. Ако фиксираме три конкретни елемента (по определени правила), останалите части на триъгълника се определят еднозначно.",
   "en": "Congruence rules work because a triangle is a rigid figure defined by a minimum number of elements. If we fix three specific elements (according to certain rules), the remaining parts of the triangle are uniquely determined."
  },
  "rules": [
   {
    "bg": "Първи признак (СУС): Два триъгълника са еднакви, ако имат две страни и ъгъл между тях съответно равни (напр. a=a1, b=b1, γ=γ1).",
    "en": "First criterion (SAS): Two triangles are congruent if they have two sides and the included angle equal (e.g., a=a1, b=b1, γ=γ1)."
   },
   {
    "bg": "Втори признак (УСУ): Два триъгълника са еднакви, ако имат страна и два прилежащи към нея ъгъла съответно равни (напр. c=c1, α=α1, β=β1).",
    "en": "Second criterion (ASA): Two triangles are congruent if they have one side and the two adjacent angles equal (e.g., c=c1, α=α1, β=β1)."
   },
   {
    "bg": "Трети признак (ССС): Два триъгълника са еднакви, ако трите страни на единия са съответно равни на трите страни на другия (a=a1, b=b1, c=c1).",
    "en": "Third criterion (SSS): Two triangles are congruent if the three sides of one are equal to the three sides of the other (a=a1, b=b1, c=c1)."
   },
   {
    "bg": "Четвърти признак (за правоъгълни триъгълници): Два правоъгълни триъгълника са еднакви по хипотенуза и катет.",
    "en": "Fourth criterion (for right triangles): Two right triangles are congruent if they have a hypotenuse and a leg equal."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Даден е равнобедрен триъгълник ABC (AC=BC) с медиана CM към основата. Докажете, че триъгълник AMC е еднакъв на триъгълник BMC.",
     "en": "Given an isosceles triangle ABC (AC=BC) with a median CM to the base. Prove that triangle AMC is congruent to triangle BMC."
    },
    "steps": [
     {
      "bg": "1. AC = BC (по условие за равнобедрен триъгълник).",
      "en": "1. AC = BC (by definition of an isosceles triangle)."
     },
     {
      "bg": "2. AM = MB (защото CM е медиана и разполовява страната AB).",
      "en": "2. AM = MB (because CM is a median and bisects side AB)."
     },
     {
      "bg": "3. CM е обща страна за двата триъгълника.",
      "en": "3. CM is a common side for both triangles."
     }
    ],
    "why": {
     "bg": "Триъгълниците са еднакви по Трети признак (ССС), тъй като и трите им страни са съответно равни.",
     "en": "The triangles are congruent by the Third criterion (SSS), as all three sides are respectively equal."
    }
   },
   {
    "task": {
     "bg": "В триъгълници ABC и A1B1C1 имаме AB=A1B1, ъгъл A = ъгъл A1 и AC=A1C1. Ако BC = 5 см, колко е B1C1?",
     "en": "In triangles ABC and A1B1C1 we have AB=A1B1, angle A = angle A1 and AC=A1C1. If BC = 5 cm, what is B1C1?"
    },
    "steps": [
     {
      "bg": "1. Проверяваме елементите: две страни и ъгълът между тях са равни (AB=A1B1, AC=A1C1, ъгъл A = ъгъл A1).",
      "en": "1. Check the elements: two sides and the included angle are equal (AB=A1B1, AC=A1C1, angle A = angle A1)."
     },
     {
      "bg": "2. Заключаваме, че триъгълник ABC е еднакъв на триъгълник A1B1C1 по Първи признак (СУС).",
      "en": "2. Conclude that triangle ABC is congruent to triangle A1B1C1 by the First criterion (SAS)."
     },
     {
      "bg": "3. В еднаквите триъгълници всички съответни страни са равни, следователно B1C1 = BC = 5 см.",
      "en": "3. In congruent triangles, all corresponding sides are equal, therefore B1C1 = BC = 5 cm."
     }
    ],
    "why": {
     "bg": "Използваме дефиницията, че в еднаквите фигури съответните линейни елементи са равни.",
     "en": "We use the definition that in congruent figures, corresponding linear elements are equal."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешка 'ССЪ': Прилагане на признак за две страни и ъгъл, който не е между тях. Това не гарантира еднаквост.",
    "en": "SSA Error: Applying a rule for two sides and an angle that is not included between them. This does not guarantee congruence."
   },
   {
    "bg": "Грешка 'ЪЪЪ': Мисълта, че три равни ъгъла правят триъгълниците еднакви. Те са само подобни (с различен размер).",
    "en": "AAA Error: Thinking that three equal angles make triangles congruent. They are only similar (different sizes)."
   },
   {
    "bg": "Неправилно подреждане на върховете при записване на еднаквостта (напр. ABC е еднакъв на B1A1C1 вместо A1B1C1).",
    "en": "Incorrect ordering of vertices when writing the congruence statement (e.g., ABC is congruent to B1A1C1 instead of A1B1C1)."
   }
  ]
 },
 "cube": {
  "topicId": "cube",
  "idea": {
   "bg": "Кубът е правилен многостен, който има шест еднакви стени с форма на квадрат. Той е триизмерно тяло, при което дължината, ширината и височината са равни.",
   "en": "A cube is a regular polyhedron that has six identical square faces. It is a three-dimensional shape where the length, width, and height are all equal."
  },
  "why": {
   "bg": "Формулите за куб се основават на свойствата на квадрата, като площта на една стена се умножава по 6 за пълна повърхнина, а обемът се получава чрез повдигане на страната на трета степен.",
   "en": "Cube formulas are based on square properties, where the area of one face is multiplied by 6 for total surface area, and volume is calculated by raising the side to the third power."
  },
  "rules": [
   {
    "bg": "Лице на една стена (B): B = a · a = a², където 'a' е ръбът на куба.",
    "en": "Area of one face (B): B = a · a = a², where 'a' is the edge of the cube."
   },
   {
    "bg": "Лице на пълна повърхнина (S1): S1 = 6 · a². Пример: Ако a = 3 см, S1 = 6 · 9 = 54 кв.см.",
    "en": "Total surface area (S1): S1 = 6 · a². Example: If a = 3 cm, S1 = 6 · 9 = 54 sq.cm."
   },
   {
    "bg": "Обем на куб (V): V = a · a · a = a³. Пример: Ако a = 2 см, V = 2³ = 8 куб.см.",
    "en": "Volume of a cube (V): V = a · a · a = a³. Example: If a = 2 cm, V = 2³ = 8 cu.cm."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете пълната повърхнина на куб с ръб 5 дм.",
     "en": "Find the total surface area of a cube with an edge of 5 dm."
    },
    "steps": [
     {
      "bg": "Записваме формулата за пълна повърхнина: S1 = 6 · a².",
      "en": "Write down the formula for total surface area: S1 = 6 · a²."
     },
     {
      "bg": "Заместваме страната: S1 = 6 · (5 · 5) = 6 · 25.",
      "en": "Substitute the side: S1 = 6 · (5 · 5) = 6 · 25."
     },
     {
      "bg": "Пресмятаме крайния резултат: S1 = 150 кв.дм.",
      "en": "Calculate the final result: S1 = 150 sq.dm."
     }
    ],
    "why": {
     "bg": "Кубът има 6 еднакви квадратни стени, затова умножаваме лицето на едната по 6.",
     "en": "The cube has 6 identical square faces, so we multiply the area of one by 6."
    }
   },
   {
    "task": {
     "bg": "Пресметнете обема на куб, ако сборът от всичките му ръбове е 48 см.",
     "en": "Calculate the volume of a cube if the sum of all its edges is 48 cm."
    },
    "steps": [
     {
      "bg": "Кубът има 12 равни ръба, затова намираме един ръб: a = 48 : 12 = 4 см.",
      "en": "A cube has 12 equal edges, so find one edge: a = 48 : 12 = 4 cm."
     },
     {
      "bg": "Прилагаме формулата за обем: V = a³ = 4 · 4 · 4.",
      "en": "Apply the volume formula: V = a³ = 4 · 4 · 4."
     },
     {
      "bg": "Изчисляваме: V = 64 куб.см.",
      "en": "Calculate: V = 64 cu.cm."
     }
    ],
    "why": {
     "bg": "Обемът измерва колко място заема тялото, което е произведението от трите му измерения.",
     "en": "Volume measures how much space the object occupies, which is the product of its three dimensions."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно преброяване на ръбовете: Кубът има 12 ръба, а не 8 или 6.",
    "en": "Incorrectly counting the edges: A cube has 12 edges, not 8 or 6."
   },
   {
    "bg": "Объркване на a² (лице) с a³ (обем) при пресмятане на повърхнини.",
    "en": "Confusing a² (area) with a³ (volume) when calculating surface areas."
   },
   {
    "bg": "Забравяне на коефициента 6 във формулата за пълна повърхнина.",
    "en": "Forgetting the coefficient 6 in the total surface area formula."
   }
  ]
 },
 "cylinder": {
  "topicId": "cylinder",
  "idea": {
   "bg": "Цилиндърът е геометрично тяло, получено при въртене на правоъгълник около една от страните му. Той се състои от две еднакви успоредни основи (кръгове) и околна повърхнина.",
   "en": "A cylinder is a geometric solid formed by rotating a rectangle around one of its sides. It consists of two congruent parallel bases (circles) and a curved lateral surface."
  },
  "why": {
   "bg": "Формулите работят, защото околната повърхнина на цилиндъра, развита в равнина, е правоъгълник с дължина равна на обиколката на основата и височина равна на височината на цилиндъра.",
   "en": "The formulas work because the lateral surface of a cylinder, when unfolded, is a rectangle with length equal to the circumference of the base and height equal to the cylinder's height."
  },
  "rules": [
   {
    "bg": "Лице на основата (B): B = π · r², където r е радиусът. Пример: ако r = 3, B = 9π.",
    "en": "Base Area (B): B = π · r², where r is the radius. Example: if r = 3, B = 9π."
   },
   {
    "bg": "Лице на околна повърхнина (S): S = 2 · π · r · h. Пример: ако r = 2, h = 5, S = 20π.",
    "en": "Lateral Surface Area (S): S = 2 · π · r · h. Example: if r = 2, h = 5, S = 20π."
   },
   {
    "bg": "Лице на пълна повърхнина (S1): S1 = S + 2 · B = 2 · π · r · (h + r).",
    "en": "Total Surface Area (S1): S1 = S + 2 · B = 2 · π · r · (h + r)."
   },
   {
    "bg": "Обем на цилиндър (V): V = B · h = π · r² · h. Пример: ако B = 10, h = 4, V = 40.",
    "en": "Volume of a Cylinder (V): V = B · h = π · r² · h. Example: if B = 10, h = 4, V = 40."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете пълната повърхнина на цилиндър с радиус r = 4 cm и височина h = 6 cm.",
     "en": "Find the total surface area of a cylinder with radius r = 4 cm and height h = 6 cm."
    },
    "steps": [
     {
      "bg": "Изчисляваме лицето на основата: B = π · 4² = 16π cm².",
      "en": "Calculate the base area: B = π · 4² = 16π cm²."
     },
     {
      "bg": "Изчисляваме околната повърхнина: S = 2 · π · 4 · 6 = 48π cm².",
      "en": "Calculate the lateral surface area: S = 2 · π · 4 · 6 = 48π cm²."
     },
     {
      "bg": "Намираме пълната повърхнина: S1 = S + 2 · B = 48π + 2 · 16π = 80π cm².",
      "en": "Find the total surface area: S1 = S + 2 · B = 48π + 2 · 16π = 80π cm²."
     }
    ],
    "why": {
     "bg": "Сумираме околната повърхнина и двете основи, за да обхванем цялото тяло.",
     "en": "We sum the lateral area and both bases to cover the entire solid."
    }
   },
   {
    "task": {
     "bg": "Цилиндър има обем V = 150π cm³ и лице на основата B = 25π cm². Намерете височината h.",
     "en": "A cylinder has a volume V = 150π cm³ and base area B = 25π cm². Find the height h."
    },
    "steps": [
     {
      "bg": "Използваме формулата за обем: V = B · h.",
      "en": "Use the volume formula: V = B · h."
     },
     {
      "bg": "Заместваме с дадените стойности: 150π = 25π · h.",
      "en": "Substitute the given values: 150π = 25π · h."
     },
     {
      "bg": "Разделяме двете страни на 25π: h = 150π : 25π = 6 cm.",
      "en": "Divide both sides by 25π: h = 150π : 25π = 6 cm."
     }
    ],
    "why": {
     "bg": "Височината се намира чрез делене на обема на лицето на основата.",
     "en": "The height is found by dividing the volume by the base area."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне на числото 2 при изчисляване на пълната повърхнина (добавяне само на една основа).",
    "en": "Forgetting the number 2 when calculating total surface area (adding only one base)."
   },
   {
    "bg": "Объркване на радиус с диаметър – винаги проверявайте дали е дадено r или d.",
    "en": "Confusing radius with diameter – always check if r or d is given."
   },
   {
    "bg": "Пропускане на π в крайния резултат, когато не е поискана приблизителна стойност.",
    "en": "Omitting π in the final result when an approximate value is not requested."
   }
  ]
 },
 "divisibility": {
  "topicId": "divisibility",
  "idea": {
   "bg": "Признаците за делимост са кратки правила, които ни помагат да разберем дали едно число се дели на друго без остатък, без да извършваме делението. Те се основават на последната цифра или сбора от цифрите на числото.",
   "en": "Divisibility rules are short methods that help us determine if a number is divisible by another without a remainder, without performing the actual division. They are based on the last digit or the sum of the digits of the number."
  },
  "why": {
   "bg": "Тези методи работят, защото всяко число може да бъде разложено според десетичната му позиция, а частите, които са кратни на 10, 100 или 1000, автоматично се делят на делители като 2, 5 и 10.",
   "en": "These methods work because every number can be expanded according to its decimal place value, and parts that are multiples of 10, 100, or 1000 are automatically divisible by divisors like 2, 5, and 10."
  },
  "rules": [
   {
    "bg": "На 2: Числото се дели на 2, ако последната му цифра е четна (0, 2, 4, 6, 8). Пример: 154 се дели на 2.",
    "en": "By 2: A number is divisible by 2 if its last digit is even (0, 2, 4, 6, 8). Example: 154 is divisible by 2."
   },
   {
    "bg": "На 3: Числото се дели на 3, ако сборът от цифрите му се дели на 3. Пример: 123 (1+2+3=6) се дели на 3.",
    "en": "By 3: A number is divisible by 3 if the sum of its digits is divisible by 3. Example: 123 (1+2+3=6) is divisible by 3."
   },
   {
    "bg": "На 5: Числото се дели на 5, ако последната му цифра е 0 или 5. Пример: 295 се дели на 5.",
    "en": "By 5: A number is divisible by 5 if its last digit is 0 or 5. Example: 295 is divisible by 5."
   },
   {
    "bg": "На 9: Числото се дели на 9, ако сборът от цифрите му се дели на 9. Пример: 729 (7+2+9=18) се дели на 9.",
    "en": "By 9: A number is divisible by 9 if the sum of its digits is divisible by 9. Example: 729 (7+2+9=18) is divisible by 9."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Дели ли се числото 432 на 3 и на 9?",
     "en": "Is the number 432 divisible by 3 and 9?"
    },
    "steps": [
     {
      "bg": "Намираме сбора от цифрите: 4 + 3 + 2 = 9.",
      "en": "Find the sum of the digits: 4 + 3 + 2 = 9."
     },
     {
      "bg": "Проверяваме за 3: 9 : 3 = 3 (дели се).",
      "en": "Check for 3: 9 : 3 = 3 (it is divisible)."
     },
     {
      "bg": "Проверяваме за 9: 9 : 9 = 1 (дели се).",
      "en": "Check for 9: 9 : 9 = 1 (it is divisible)."
     }
    ],
    "why": {
     "bg": "Числото 432 се дели и на двете, защото сборът 9 е кратен на 3 и на 9.",
     "en": "The number 432 is divisible by both because the sum 9 is a multiple of 3 and 9."
    }
   },
   {
    "task": {
     "bg": "Дели ли се числото 5050 на 2, 5 и 10?",
     "en": "Is the number 5050 divisible by 2, 5, and 10?"
    },
    "steps": [
     {
      "bg": "Гледаме последната цифра: тя е 0.",
      "en": "Look at the last digit: it is 0."
     },
     {
      "bg": "0 е четна, значи се дели на 2.",
      "en": "0 is even, so it is divisible by 2."
     },
     {
      "bg": "Завършва на 0, значи се дели на 5 и на 10.",
      "en": "It ends in 0, so it is divisible by 5 and 10."
     }
    ],
    "why": {
     "bg": "Всяко число, завършващо на 0, автоматично изпълнява признаците за 2, 5 и 10.",
     "en": "Any number ending in 0 automatically satisfies the rules for 2, 5, and 10."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно прилагане на признака за 3 върху последната цифра вместо върху сбора.",
    "en": "Incorrectly applying the rule for 3 to the last digit instead of the sum of digits."
   },
   {
    "bg": "Мисли се, че ако едно число се дели на 3, то задължително се дели и на 9 (например 12).",
    "en": "Thinking that if a number is divisible by 3, it must be divisible by 9 (e.g., 12)."
   },
   {
    "bg": "Забравяне, че числото 0 се счита за четна цифра при признака за 2.",
    "en": "Forgetting that the digit 0 is considered even when applying the rule for 2."
   }
  ]
 },
 "expeq": {
  "topicId": "expeq",
  "idea": {
   "bg": "Показателните уравнения са уравнения, в които неизвестното x се намира в степенния показател. Основната цел е двете страни на уравнението да се преобразуват до степени с еднакви основи.",
   "en": "Exponential equations are equations where the unknown x is located in the exponent. The main goal is to transform both sides of the equation into powers with the same base."
  },
  "why": {
   "bg": "Методът работи, защото показателната функция е строго монотонна (инжективна). Това означава, че ако a^f(x) = a^g(x) при a > 0 и a ≠ 1, то степенните показатели f(x) и g(x) задължително са равни.",
   "en": "The method works because the exponential function is strictly monotonic (injective). This means that if a^f(x) = a^g(x) with a > 0 and a ≠ 1, then the exponents f(x) and g(x) must be equal."
  },
  "rules": [
   {
    "bg": "Ако a^f(x) = a^b, то f(x) = b. Пример: 2^x = 2³ => x = 3.",
    "en": "If a^f(x) = a^b, then f(x) = b. Example: 2^x = 2³ => x = 3."
   },
   {
    "bg": "Свойства на степени: a^m · a^n = a^(m+n) и (a^m)^n = a^(m·n).",
    "en": "Power properties: a^m · a^n = a^(m+n) and (a^m)^n = a^(m·n)."
   },
   {
    "bg": "Отрицателни показатели: a^(−n) = 1/(a^n). Пример: 2^(−1) = 1/2.",
    "en": "Negative exponents: a^(−n) = 1/(a^n). Example: 2^(−1) = 1/2."
   },
   {
    "bg": "Корени като степени: √a = a^(1/2). Пример: √(3^x) = 3^(x/2).",
    "en": "Roots as powers: √a = a^(1/2). Example: √(3^x) = 3^(x/2)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Решете уравнението: 3^(x+1) = 27",
     "en": "Solve the equation: 3^(x+1) = 27"
    },
    "steps": [
     {
      "bg": "Представяме 27 като степен с основа 3: 27 = 3³.",
      "en": "Represent 27 as a power with base 3: 27 = 3³."
     },
     {
      "bg": "Приравняваме степенните показатели: x + 1 = 3.",
      "en": "Equate the exponents: x + 1 = 3."
     },
     {
      "bg": "Решаваме линейното уравнение: x = 3 − 1, следователно x = 2.",
      "en": "Solve the linear equation: x = 3 − 1, therefore x = 2."
     }
    ],
    "why": {
     "bg": "Използваме правилото за равни основи, за да премахнем степенуването.",
     "en": "We use the rule for equal bases to eliminate the exponentiation."
    }
   },
   {
    "task": {
     "bg": "Решете уравнението: 4^x = 1/8",
     "en": "Solve the equation: 4^x = 1/8"
    },
    "steps": [
     {
      "bg": "Представяме двете страни с основа 2: (2²)^x = 1/(2³).",
      "en": "Represent both sides with base 2: (2²)^x = 1/(2³)."
     },
     {
      "bg": "Прилагаме свойствата на степените: 2^(2x) = 2^(−3).",
      "en": "Apply power properties: 2^(2x) = 2^(−3)."
     },
     {
      "bg": "Приравняваме показателите: 2x = −3.",
      "en": "Equate the exponents: 2x = −3."
     },
     {
      "bg": "Намираме x: x = −3/2 = −1.5.",
      "en": "Find x: x = −3/2 = −1.5."
     }
    ],
    "why": {
     "bg": "Привеждането към обща проста основа (2) позволява лесно сравнение.",
     "en": "Bringing both sides to a common prime base (2) allows for easy comparison."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно умножаване на основата с показателя (напр. 2^x = 10 не означава 2x = 10).",
    "en": "Incorrectly multiplying the base by the exponent (e.g., 2^x = 10 does not mean 2x = 10)."
   },
   {
    "bg": "Забравяне, че a^0 = 1. Често учениците не виждат, че 1 може да бъде всяка основа на нулева степен.",
    "en": "Forgetting that a^0 = 1. Students often fail to see that 1 can be any base to the power of zero."
   },
   {
    "bg": "Опит за решаване на уравнения с отрицателна основа, което не е дефинирано за реални показатели.",
    "en": "Attempting to solve equations with a negative base, which is not defined for real exponents."
   }
  ]
 },
 "exprvalue": {
  "topicId": "exprvalue",
  "idea": {
   "bg": "Стойност на израз се намира чрез заместване на всяка променлива с конкретно число. След заместването изразът се превръща в числов и се пресмята според реда на действията.",
   "en": "Evaluating an expression is done by replacing each variable with a specific number. After substitution, the expression becomes a numerical one and is calculated according to the order of operations."
  },
  "why": {
   "bg": "Методът работи, защото променливите са само символни заместители на числа; когато им зададем стойности, изразът описва конкретно количество.",
   "en": "The method works because variables are just symbolic placeholders for numbers; once we assign values, the expression describes a specific quantity."
  },
  "rules": [
   {
    "bg": "Заместете всяка буква със съответното число, като използвате скоби за отрицателни числа. Пример: a − b при a=5, b=−2 става 5 − (−2).",
    "en": "Replace each letter with its corresponding number, using parentheses for negative numbers. Example: a − b for a=5, b=−2 becomes 5 − (−2)."
   },
   {
    "bg": "Спазвайте реда на действията: първо степенуване, после умножение и деление, и накрая събиране и изваждане.",
    "en": "Follow the order of operations: first exponents, then multiplication and division, and finally addition and subtraction."
   },
   {
    "bg": "Ако между число и буква няма знак, се подразбира умножение. Пример: 3x означава 3 · x.",
    "en": "If there is no sign between a number and a letter, multiplication is implied. Example: 3x means 3 · x."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Пресметнете стойността на 2x² − 5y при x = 3 и y = 2.",
     "en": "Evaluate 2x² − 5y for x = 3 and y = 2."
    },
    "steps": [
     {
      "bg": "Заместваме x с 3 и y с 2: 2 · 3² − 5 · 2.",
      "en": "Substitute x with 3 and y with 2: 2 · 3² − 5 · 2."
     },
     {
      "bg": "Първо степенуваме: 2 · 9 − 5 · 2 = 18 − 10.",
      "en": "First evaluate the exponent: 2 · 9 − 5 · 2 = 18 − 10."
     },
     {
      "bg": "Извършваме изваждането: 18 − 10 = 8.",
      "en": "Perform the subtraction: 18 − 10 = 8."
     }
    ],
    "why": {
     "bg": "Степенуването има най-висок приоритет, следвано от умножението.",
     "en": "Exponentiation has the highest priority, followed by multiplication."
    }
   },
   {
    "task": {
     "bg": "Намерете стойността на (a + b) : 2 при a = 10 и b = 4.",
     "en": "Find the value of (a + b) : 2 for a = 10 and b = 4."
    },
    "steps": [
     {
      "bg": "Заместваме променливите: (10 + 4) : 2.",
      "en": "Substitute the variables: (10 + 4) : 2."
     },
     {
      "bg": "Пресмятаме израза в скобите: 14 : 2.",
      "en": "Calculate the expression inside the parentheses: 14 : 2."
     },
     {
      "bg": "Разделяме резултата: 7.",
      "en": "Divide the result: 7."
     }
    ],
    "why": {
     "bg": "Действията в скобите винаги се извършват с предимство.",
     "en": "Operations inside parentheses are always performed first."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешка при заместване на отрицателни числа без скоби, например −3² вместо (−3)².",
    "en": "Error when substituting negative numbers without parentheses, e.g., −3² instead of (−3)²."
   },
   {
    "bg": "Неправилен ред на действията, например извършване на събиране преди умножение.",
    "en": "Incorrect order of operations, such as performing addition before multiplication."
   },
   {
    "bg": "Забравяне на знака за умножение между коефициента и променливата при заместване.",
    "en": "Forgetting the multiplication sign between the coefficient and the variable during substitution."
   }
  ]
 },
 "factoring": {
  "topicId": "factoring",
  "idea": {
   "bg": "Разлагането на множители е представяне на многочлен като произведение от по-прости изрази. Това е процес, обратен на разкриването на скоби.",
   "en": "Factoring is the representation of a polynomial as a product of simpler expressions. it is the reverse process of expanding brackets."
  },
  "why": {
   "bg": "Методът работи благодарение на дистрибутивното свойство на умножението и формулите за съкратено умножение, които позволяват преобразуване на суми в произведения.",
   "en": "The method works due to the distributive property of multiplication and short multiplication formulas, which allow transforming sums into products."
  },
  "rules": [
   {
    "bg": "Изнасяне на общ множител: Намира се най-големият общ делител на всички членове. Пример: 3x + 3y = 3(x + y).",
    "en": "Factoring out a common factor: Find the greatest common divisor of all terms. Example: 3x + 3y = 3(x + y)."
   },
   {
    "bg": "Разлика на квадрати: Използва се формулата a² - b² = (a - b)(a + b). Пример: x² - 9 = (x - 3)(x + 3).",
    "en": "Difference of squares: Use the formula a² - b² = (a - b)(a + b). Example: x² - 9 = (x - 3)(x + 3)."
   },
   {
    "bg": "Групиране: Членовете се разделят на групи с общи множители. Пример: ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y).",
    "en": "Grouping: Terms are divided into groups with common factors. Example: ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)."
   },
   {
    "bg": "Сбор и разлика на кубове: Използват се a³ ± b³ = (a ± b)(a² ∓ ab + b²). Пример: x³ + 8 = (x + 2)(x² - 2x + 4).",
    "en": "Sum and difference of cubes: Use a³ ± b³ = (a ± b)(a² ∓ ab + b²). Example: x³ + 8 = (x + 2)(x² - 2x + 4)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Разложете израза: 4x² - 16",
     "en": "Factor the expression: 4x² - 16"
    },
    "steps": [
     {
      "bg": "Изнасяме общия множител 4 пред скоби: 4(x² - 4).",
      "en": "Factor out the common factor 4: 4(x² - 4)."
     },
     {
      "bg": "Прилагаме формулата за разлика на квадрати за (x² - 2²): 4(x - 2)(x + 2).",
      "en": "Apply the difference of squares formula for (x² - 2²): 4(x - 2)(x + 2)."
     }
    ],
    "why": {
     "bg": "Първо винаги проверяваме за общ множител, за да опростим останалия израз.",
     "en": "We always check for a common factor first to simplify the remaining expression."
    }
   },
   {
    "task": {
     "bg": "Разложете чрез групиране: x³ - x² + x - 1",
     "en": "Factor by grouping: x³ - x² + x - 1"
    },
    "steps": [
     {
      "bg": "Групираме първите два и последните два члена: (x³ - x²) + (x - 1).",
      "en": "Group the first two and the last two terms: (x³ - x²) + (x - 1)."
     },
     {
      "bg": "Изнасяме x² от първата група: x²(x - 1) + 1(x - 1).",
      "en": "Factor out x² from the first group: x²(x - 1) + 1(x - 1)."
     },
     {
      "bg": "Изнасяме общия множител (x - 1): (x - 1)(x² + 1).",
      "en": "Factor out the common factor (x - 1): (x - 1)(x² + 1)."
     }
    ],
    "why": {
     "bg": "Групирането е полезно, когато няма общ множител за всички членове едновременно.",
     "en": "Grouping is useful when there is no common factor for all terms simultaneously."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно прилагане на разлика на квадрати при сбор (x² + y² не се разлага с реални числа).",
    "en": "Incorrectly applying difference of squares to a sum (x² + y² cannot be factored with real numbers)."
   },
   {
    "bg": "Забравяне на общия множител отпред след изнасянето му.",
    "en": "Forgetting the common factor in front after factoring it out."
   },
   {
    "bg": "Непълно разлагане – спиране преди изразът да е станал произведение от неразложими множители.",
    "en": "Incomplete factoring – stopping before the expression has become a product of irreducible factors."
   }
  ]
 },
 "fraccompare": {
  "topicId": "fraccompare",
  "idea": {
   "bg": "Сравняването на дроби е процес на определяне коя от две дробни стойности е по-голяма, по-малка или дали са равни. За целта те трябва да имат или еднакви знаменатели, или еднакви числители, за да се направи правилно съпоставяне на техните части.",
   "en": "Comparing fractions is the process of determining which of two fractional values is larger, smaller, or if they are equal. To do this, they must have either the same denominators or the same numerators to correctly compare their parts."
  },
  "why": {
   "bg": "Методът с привеждане към общ знаменател работи, защото разделяме цялото на еднакъв брой равни части. Когато частите са с еднакъв размер, можем лесно да сравним количеството им чрез числителите.",
   "en": "The method of finding a common denominator works because we divide the whole into the same number of equal parts. When the parts are of equal size, we can easily compare their quantity by looking at the numerators."
  },
  "rules": [
   {
    "bg": "При еднакви знаменатели: По-голяма е дробта с по-голям числител. Пример: 5/7 > 3/7.",
    "en": "With same denominators: The fraction with the larger numerator is greater. Example: 5/7 > 3/7."
   },
   {
    "bg": "При еднакви числители: По-голяма е дробта с по-малък знаменател. Пример: 2/5 > 2/9.",
    "en": "With same numerators: The fraction with the smaller denominator is greater. Example: 2/5 > 2/9."
   },
   {
    "bg": "При различни знаменатели: Първо се привеждат към общ знаменател чрез НОК и тогава се сравняват числителите.",
    "en": "With different denominators: First bring them to a common denominator using LCM and then compare the numerators."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Сравнете дробите 3/4 и 5/6.",
     "en": "Compare the fractions 3/4 and 5/6."
    },
    "steps": [
     {
      "bg": "Намираме общ знаменател за 4 и 6. НОК(4, 6) = 12.",
      "en": "Find a common denominator for 4 and 6. LCM(4, 6) = 12."
     },
     {
      "bg": "Разширяваме 3/4 с 3 (3·3 / 4·3 = 9/12).",
      "en": "Multiply 3/4 by 3 (3·3 / 4·3 = 9/12)."
     },
     {
      "bg": "Разширяваме 5/6 с 2 (5·2 / 6·2 = 10/12).",
      "en": "Multiply 5/6 by 2 (5·2 / 6·2 = 10/12)."
     },
     {
      "bg": "Сравняваме резултатите: 9/12 < 10/12, следователно 3/4 < 5/6.",
      "en": "Compare the results: 9/12 < 10/12, therefore 3/4 < 5/6."
     }
    ],
    "why": {
     "bg": "Превръщаме дробите в еквивалентни с еднаква основа (12), за да видим точно колко дванадесети части съдържа всяка.",
     "en": "We transform the fractions into equivalents with the same base (12) to see exactly how many twelfth parts each contains."
    }
   },
   {
    "task": {
     "bg": "Сравнете 2/3 и 2/7.",
     "en": "Compare 2/3 and 2/7."
    },
    "steps": [
     {
      "bg": "Забелязваме, че числителите са еднакви (и двата са 2).",
      "en": "Notice that the numerators are the same (both are 2)."
     },
     {
      "bg": "Сравняваме знаменателите: 3 е по-малко от 7.",
      "en": "Compare the denominators: 3 is smaller than 7."
     },
     {
      "bg": "Тъй като по-малкият знаменател означава по-големи части, 2/3 > 2/7.",
      "en": "Since a smaller denominator means larger parts, 2/3 > 2/7."
     }
    ],
    "why": {
     "bg": "Ако разделим една ябълка на 3 части, всяка част ще е по-голяма, отколкото ако я разделим на 7 части.",
     "en": "If we divide one apple into 3 parts, each part will be larger than if we divided it into 7 parts."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Мисленето, че по-големи числа винаги означават по-голяма дроб (например 1/10 да се смята за по-голямо от 1/2).",
    "en": "Thinking that larger numbers always mean a larger fraction (e.g., thinking 1/10 is larger than 1/2)."
   },
   {
    "bg": "Забравяне да се умножи и числителят при привеждане към общ знаменател.",
    "en": "Forgetting to multiply the numerator as well when bringing to a common denominator."
   },
   {
    "bg": "Сравняване на числителите директно, когато знаменателите са различни.",
    "en": "Comparing numerators directly when the denominators are different."
   }
  ]
 },
 "fraceq": {
  "topicId": "fraceq",
  "idea": {
   "bg": "Дробните уравнения съдържат неизвестно в знаменателя на поне една от дробите. Основната цел е да се преобразуват в рационални цели уравнения чрез премахване на знаменателите.",
   "en": "Rational equations contain the unknown variable in the denominator of at least one fraction. The main goal is to transform them into polynomial equations by eliminating the denominators."
  },
  "why": {
   "bg": "Методът работи, защото чрез умножаване на двете страни на уравнението с най-малкото общо кратно (НОК) на знаменателите, се получава еквивалентно уравнение, при условие че изключим стойностите, за които знаменателят става нула.",
   "en": "The method works because multiplying both sides of the equation by the least common multiple (LCM) of the denominators results in an equivalent equation, provided we exclude values that make any denominator zero."
  },
  "rules": [
   {
    "bg": "Определете допустимите стойности (ДС), като поставите всеки знаменател да бъде различен от 0. Пример: x - 2 ≠ 0 означава x ≠ 2.",
    "en": "Determine the domain (D) by setting each denominator to be different from 0. Example: x - 2 ≠ 0 means x ≠ 2."
   },
   {
    "bg": "Намерете общия знаменател (НОК) и умножете всички членове на уравнението с него, за да съкратите знаменателите.",
    "en": "Find the common denominator (LCM) and multiply all terms of the equation by it to cancel out the denominators."
   },
   {
    "bg": "Решете полученото цяло уравнение (линейно или квадратно) по стандартните методи.",
    "en": "Solve the resulting polynomial equation (linear or quadratic) using standard methods."
   },
   {
    "bg": "Проверете дали получените корени принадлежат на допустимите стойности (ДС). Корени, които не са в ДС, не са решения.",
    "en": "Check if the obtained roots belong to the domain (D). Roots that are not in the domain are not solutions."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Решете уравнението: 1 / (x - 3) = 2 / (x + 1)",
     "en": "Solve the equation: 1 / (x - 3) = 2 / (x + 1)"
    },
    "steps": [
     {
      "bg": "ДС: x - 3 ≠ 0 и x + 1 ≠ 0, следователно x ≠ 3 и x ≠ −1.",
      "en": "Domain: x - 3 ≠ 0 and x + 1 ≠ 0, therefore x ≠ 3 and x ≠ −1."
     },
     {
      "bg": "Умножаваме на кръст: 1 · (x + 1) = 2 · (x - 3). Получаваме x + 1 = 2x - 6.",
      "en": "Cross-multiply: 1 · (x + 1) = 2 · (x - 3). We get x + 1 = 2x - 6."
     },
     {
      "bg": "Прехвърляме хиксовете: x - 2x = -6 - 1, което дава -x = -7, т.е. x = 7.",
      "en": "Move x terms: x - 2x = -6 - 1, which gives -x = -7, so x = 7."
     },
     {
      "bg": "Проверка: 7 е в ДС, значи x = 7 е единствено решение.",
      "en": "Check: 7 is in the domain, so x = 7 is the only solution."
     }
    ],
    "why": {
     "bg": "Пропорцията позволява лесно преминаване към линейно уравнение чрез умножаване на кръст.",
     "en": "The proportion allows for an easy transition to a linear equation by cross-multiplication."
    }
   },
   {
    "task": {
     "bg": "Решете уравнението: (x + 2) / x - 5 / (x - 2) = 8 / (x² - 2x)",
     "en": "Solve the equation: (x + 2) / x - 5 / (x - 2) = 8 / (x² - 2x)"
    },
    "steps": [
     {
      "bg": "Разлагаме знаменателите: x² - 2x = x(x - 2). ДС: x ≠ 0, x ≠ 2.",
      "en": "Factor denominators: x² - 2x = x(x - 2). Domain: x ≠ 0, x ≠ 2."
     },
     {
      "bg": "Общ знаменател е x(x - 2). Умножаваме: (x + 2)(x - 2) - 5x = 8.",
      "en": "Common denominator is x(x - 2). Multiply: (x + 2)(x - 2) - 5x = 8."
     },
     {
      "bg": "Разкриваме скоби: x² - 4 - 5x = 8, пренареждаме: x² - 5x - 12 = 0.",
      "en": "Expand brackets: x² - 4 - 5x = 8, rearrange: x² - 5x - 12 = 0."
     }
    ],
    "why": {
     "bg": "Този пример показва как дробно уравнение води до квадратно уравнение след премахване на знаменателите.",
     "en": "This example shows how a rational equation leads to a quadratic equation after eliminating denominators."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне на допустимите стойности (ДС) и приемане на корен, който прави знаменателя нула.",
    "en": "Forgetting the domain (D) and accepting a root that makes a denominator zero."
   },
   {
    "bg": "Грешки при умножаване на числителя с допълнителния множител, особено когато пред дробта има знак минус.",
    "en": "Mistakes when multiplying the numerator by the additional factor, especially when there is a minus sign in front of the fraction."
   },
   {
    "bg": "Неправилно намиране на най-малко общо кратно (НОК) при сложни знаменатели.",
    "en": "Incorrectly finding the least common multiple (LCM) for complex denominators."
   }
  ]
 },
 "fracsimplify": {
  "topicId": "fracsimplify",
  "idea": {
   "bg": "Съкращаването на дроби е процес на замяна на дадена дроб с друга, равна на нея, но с по-малки числител и знаменател. Това се постига чрез делене на двата члена на дробта на техен общ делител.",
   "en": "Simplifying fractions is the process of replacing a given fraction with an equal one that has a smaller numerator and denominator. This is achieved by dividing both terms of the fraction by their common divisor."
  },
  "why": {
   "bg": "Методът работи поради Основното свойство на дробта: стойността на дробта не се променя, ако умножим или разделим числителя и знаменателя с едно и също число, различно от нула.",
   "en": "The method works due to the Fundamental Property of Fractions: the value of a fraction does not change if we multiply or divide the numerator and the denominator by the same non-zero number."
  },
  "rules": [
   {
    "bg": "Намерете общ делител на числителя и знаменателя.",
    "en": "Find a common divisor of the numerator and the denominator."
   },
   {
    "bg": "Разделете и двете числа на този общ делител.",
    "en": "Divide both numbers by this common divisor."
   },
   {
    "bg": "Повтаряйте процеса, докато получите несъкратима дроб (когато единственият общ делител е 1).",
    "en": "Repeat the process until you get an irreducible fraction (when the only common divisor is 1)."
   },
   {
    "bg": "Най-бързо се съкращава, като се раздели директно на Най-големия общ делител (НОД).",
    "en": "Simplifying is fastest when you divide directly by the Greatest Common Divisor (GCD)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Съкратете дробта 12/18.",
     "en": "Simplify the fraction 12/18."
    },
    "steps": [
     {
      "bg": "Числата 12 и 18 се делят на 2: 12:2 = 6 и 18:2 = 9. Получаваме 6/9.",
      "en": "The numbers 12 and 18 are divisible by 2: 12:2 = 6 and 18:2 = 9. We get 6/9."
     },
     {
      "bg": "Числата 6 и 9 се делят на 3: 6:3 = 2 и 9:3 = 3. Получаваме 2/3.",
      "en": "The numbers 6 and 9 are divisible by 3: 6:3 = 2 and 9:3 = 3. We get 2/3."
     }
    ],
    "why": {
     "bg": "Дробта 2/3 е несъкратима, защото 2 и 3 нямат други общи делители освен 1.",
     "en": "The fraction 2/3 is irreducible because 2 and 3 have no common divisors other than 1."
    }
   },
   {
    "task": {
     "bg": "Съкратете дробта 24/60 чрез НОД.",
     "en": "Simplify the fraction 24/60 using the GCD."
    },
    "steps": [
     {
      "bg": "Намираме НОД(24, 60) = 12.",
      "en": "Find GCD(24, 60) = 12."
     },
     {
      "bg": "Делим числителя и знаменателя на 12: 24:12 = 2 и 60:12 = 5.",
      "en": "Divide the numerator and denominator by 12: 24:12 = 2 and 60:12 = 5."
     }
    ],
    "why": {
     "bg": "Директното делене на НОД ни дава крайния резултат 2/5 само в една стъпка.",
     "en": "Directly dividing by the GCD gives us the final result 2/5 in just one step."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Делене само на числителя или само на знаменателя (трябва и двете!).",
    "en": "Dividing only the numerator or only the denominator (you must do both!)."
   },
   {
    "bg": "Опит за съкращаване чрез събиране или изваждане вместо делене.",
    "en": "Attempting to simplify using addition or subtraction instead of division."
   },
   {
    "bg": "Спиране на процеса преди дробта да е станала несъкратима (например оставяне на 4/6 вместо 2/3).",
    "en": "Stopping the process before the fraction becomes irreducible (e.g., leaving 4/6 instead of 2/3)."
   }
  ]
 },
 "heron": {
  "topicId": "heron",
  "idea": {
   "bg": "Хероновата формула позволява да намерим лицето на произволен триъгълник, без да знаем височината му. Необходимо е единствено да са известни дължините на трите му страни.",
   "en": "Heron's formula allows finding the area of any triangle without knowing its height. It is only necessary to know the lengths of its three sides."
  },
  "why": {
   "bg": "Методът се основава на връзката между страните и полупериметъра, като се извежда чрез Питагоровата теорема или Косинусовата теорема за изразяване на височината.",
   "en": "The method is based on the relationship between the sides and the semi-perimeter, derived via the Pythagorean theorem or the Law of Cosines to express the height."
  },
  "rules": [
   {
    "bg": "Първо пресметнете полупериметъра p = (a + b + c) / 2.",
    "en": "First, calculate the semi-perimeter p = (a + b + c) / 2."
   },
   {
    "bg": "Приложете формулата за лице: S = √(p · (p − a) · (p − b) · (p − c)).",
    "en": "Apply the area formula: S = √(p · (p − a) · (p − b) · (p − c))."
   },
   {
    "bg": "Проверете дали страните a, b и c образуват триъгълник (a + b > c).",
    "en": "Check if the sides a, b, and c form a triangle (a + b > c)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете лицето на триъгълник със страни 13, 14 и 15.",
     "en": "Find the area of a triangle with sides 13, 14, and 15."
    },
    "steps": [
     {
      "bg": "Намираме p = (13 + 14 + 15) / 2 = 42 / 2 = 21.",
      "en": "Find p = (13 + 14 + 15) / 2 = 42 / 2 = 21."
     },
     {
      "bg": "Заместваме във формулата: S = √(21 · (21 − 13) · (21 − 14) · (21 − 15)).",
      "en": "Substitute into the formula: S = √(21 · (21 − 13) · (21 − 14) · (21 − 15))."
     },
     {
      "bg": "Пресмятаме: S = √(21 · 8 · 7 · 6) = √(7056) = 84.",
      "en": "Calculate: S = √(21 · 8 · 7 · 6) = √(7056) = 84."
     }
    ],
    "why": {
     "bg": "Това е класически 'Херонов триъгълник' с целочислено лице.",
     "en": "This is a classic 'Heronian triangle' with an integer area."
    }
   },
   {
    "task": {
     "bg": "Намерете лицето на триъгълник със страни 5, 5 и 6.",
     "en": "Find the area of a triangle with sides 5, 5, and 6."
    },
    "steps": [
     {
      "bg": "p = (5 + 5 + 6) / 2 = 16 / 2 = 8.",
      "en": "p = (5 + 5 + 6) / 2 = 16 / 2 = 8."
     },
     {
      "bg": "S = √(8 · (8 − 5) · (8 − 5) · (8 − 6)) = √(8 · 3 · 3 · 2).",
      "en": "S = √(8 · (8 − 5) · (8 − 5) · (8 − 6)) = √(8 · 3 · 3 · 2)."
     },
     {
      "bg": "S = √(144) = 12.",
      "en": "S = √(144) = 12."
     }
    ],
    "why": {
     "bg": "Формулата работи еднакво добре и за равнобедрени триъгълници.",
     "en": "The formula works equally well for isosceles triangles."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Използване на периметъра P вместо полупериметъра p във формулата.",
    "en": "Using the perimeter P instead of the semi-perimeter p in the formula."
   },
   {
    "bg": "Грешки при изваждането (p − a, p − b, p − c) преди умножението под корена.",
    "en": "Errors in subtraction (p − a, p − b, p − c) before the multiplication under the root."
   },
   {
    "bg": "Забравяне на корена в края на изчислението.",
    "en": "Forgetting the square root at the end of the calculation."
   }
  ]
 },
 "identities": {
  "topicId": "identities",
  "idea": {
   "bg": "Формулите за съкратено умножение са готови модели за бързо разкриване на скоби или разлагане на многочлени. Те ни спестяват време, като избягват последователното умножение на всеки член по всеки.",
   "en": "Short multiplication formulas are ready-made patterns for quickly expanding brackets or factoring polynomials. They save time by avoiding the step-by-step multiplication of every single term."
  },
  "why": {
   "bg": "Тези формули произтичат директно от дистрибутивния закон на умножението и геометричното представяне на площи на квадрати и правоъгълници.",
   "en": "These formulas derive directly from the distributive law of multiplication and the geometric representation of areas of squares and rectangles."
  },
  "rules": [
   {
    "bg": "(a + b)² = a² + 2ab + b² (Квадрат на сбор)",
    "en": "(a + b)² = a² + 2ab + b² (Square of a sum)"
   },
   {
    "bg": "(a − b)² = a² − 2ab + b² (Квадрат на разлика)",
    "en": "(a − b)² = a² − 2ab + b² (Square of a difference)"
   },
   {
    "bg": "(a − b)(a + b) = a² − b² (Разлика на квадрати)",
    "en": "(a − b)(a + b) = a² − b² (Difference of squares)"
   },
   {
    "bg": "(a + b)³ = a³ + 3a²b + 3ab² + b³ (Куб на сбор)",
    "en": "(a + b)³ = a³ + 3a²b + 3ab² + b³ (Cube of a sum)"
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Пресметнете (2x + 3)²",
     "en": "Calculate (2x + 3)²"
    },
    "steps": [
     {
      "bg": "Прилагаме формулата (a + b)² = a² + 2ab + b², където a = 2x и b = 3.",
      "en": "Apply the formula (a + b)² = a² + 2ab + b², where a = 2x and b = 3."
     },
     {
      "bg": "(2x)² + 2·(2x)·3 + 3² = 4x² + 12x + 9",
      "en": "(2x)² + 2·(2x)·3 + 3² = 4x² + 12x + 9"
     }
    ],
    "why": {
     "bg": "Използваме квадрата на първото, плюс удвоеното произведение, плюс квадрата на второто.",
     "en": "We use the square of the first term, plus twice the product, plus the square of the second term."
    }
   },
   {
    "task": {
     "bg": "Разложете на множители 25 − 9y²",
     "en": "Factor the expression 25 − 9y²"
    },
    "steps": [
     {
      "bg": "Записваме двата члена като квадрати: 5² − (3y)².",
      "en": "Write both terms as squares: 5² − (3y)²."
     },
     {
      "bg": "Прилагаме формулата a² − b² = (a − b)(a + b).",
      "en": "Apply the formula a² − b² = (a − b)(a + b)."
     },
     {
      "bg": "(5 − 3y)(5 + 3y)",
      "en": "(5 − 3y)(5 + 3y)"
     }
    ],
    "why": {
     "bg": "Това е обратният път на формулата за разлика на квадрати.",
     "en": "This is the reverse application of the difference of squares formula."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешка: (a + b)² = a² + b². Забравя се средният член 2ab.",
    "en": "Error: (a + b)² = a² + b². Forgetting the middle term 2ab."
   },
   {
    "bg": "Грешка: При повдигане на член като 2x на квадрат, се забравя да се повдигне и коефициентът (пише се 2x² вместо 4x²).",
    "en": "Error: When squaring a term like 2x, forgetting to square the coefficient (writing 2x² instead of 4x²)."
   },
   {
    "bg": "Грешка: Объркване на знаците при (a − b)² - резултатът винаги завършва с +b², а не −b².",
    "en": "Error: Confusion of signs in (a − b)² - the result always ends with +b², not −b²."
   }
  ]
 },
 "inequality": {
  "topicId": "inequality",
  "idea": {
   "bg": "Линейното неравенство е сравнение на два математически израза от първа степен, в което участват знаците <, >, ≤ или ≥. Целта е да се намерят всички стойности на неизвестното, които превръщат неравенството във вярно числово твърдение.",
   "en": "A linear inequality is a comparison of two first-degree mathematical expressions using the symbols <, >, ≤, or ≥. The goal is to find all values of the unknown that make the inequality a true numerical statement."
  },
  "why": {
   "bg": "Методът се основава на свойствата на числовите неравенства, които позволяват прехвърляне на членове и умножение, като запазват логическата еквивалентност на изразите.",
   "en": "The method is based on the properties of numerical inequalities, which allow for moving terms and multiplication while maintaining the logical equivalence of the expressions."
  },
  "rules": [
   {
    "bg": "Ако прехвърляме член от едната страна на неравенството в другата, знакът му се променя на противоположен (пр. x − 5 > 0 става x > 5).",
    "en": "If we move a term from one side of the inequality to the other, its sign changes to the opposite (e.g., x − 5 > 0 becomes x > 5)."
   },
   {
    "bg": "Ако умножим или разделим двете страни с положително число, знакът на неравенството се запазва.",
    "en": "If we multiply or divide both sides by a positive number, the inequality sign remains the same."
   },
   {
    "bg": "Ако умножим или разделим двете страни с отрицателно число, знакът на неравенството се обръща (пр. −2x < 4 става x > −2).",
    "en": "If we multiply or divide both sides by a negative number, the inequality sign flips (e.g., −2x < 4 becomes x > −2)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Решете неравенството: 3x − 7 < 5",
     "en": "Solve the inequality: 3x − 7 < 5"
    },
    "steps": [
     {
      "bg": "Прехвърляме −7 отдясно с обратен знак: 3x < 5 + 7, което дава 3x < 12.",
      "en": "Move −7 to the right with the opposite sign: 3x < 5 + 7, which gives 3x < 12."
     },
     {
      "bg": "Разделяме двете страни на 3: x < 4.",
      "en": "Divide both sides by 3: x < 4."
     }
    ],
    "why": {
     "bg": "Тъй като 3 е положително число, посоката на неравенството не се променя.",
     "en": "Since 3 is a positive number, the direction of the inequality does not change."
    }
   },
   {
    "task": {
     "bg": "Решете неравенството: 2 − 4x ≤ 10",
     "en": "Solve the inequality: 2 − 4x ≤ 10"
    },
    "steps": [
     {
      "bg": "Прехвърляме 2 отдясно: −4x ≤ 10 − 2, което дава −4x ≤ 8.",
      "en": "Move 2 to the right: −4x ≤ 10 − 2, which gives −4x ≤ 8."
     },
     {
      "bg": "Разделяме двете страни на −4 и обръщаме знака: x ≥ −2.",
      "en": "Divide both sides by −4 and flip the sign: x ≥ −2."
     }
    ],
    "why": {
     "bg": "При деление на отрицателно число (−4), знакът ≤ задължително се променя на ≥.",
     "en": "When dividing by a negative number (−4), the sign ≤ must change to ≥."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне да се обърне знака на неравенството при умножение или деление с отрицателно число.",
    "en": "Forgetting to flip the inequality sign when multiplying or dividing by a negative number."
   },
   {
    "bg": "Грешки при пренасяне на членове – забравяне да се смени знакът (+/−) на самото число.",
    "en": "Errors when moving terms – forgetting to change the sign (+/−) of the number itself."
   },
   {
    "bg": "Неправилно изобразяване на интервалите (използване на затворена скоба вместо отворена при строго неравенство).",
    "en": "Incorrect representation of intervals (using a closed bracket instead of an open one for strict inequalities)."
   }
  ]
 },
 "inscribed": {
  "topicId": "inscribed",
  "idea": {
   "bg": "Вписаната окръжност се допира до всички страни на многоъгълника отвътре, докато описаната окръжност минава през всички негови върхове. Тези две окръжности свързват геометрията на триъгълника с неговите линейни и площни характеристики.",
   "en": "The inscribed circle touches all sides of a polygon from the inside, while the circumscribed circle passes through all its vertices. These two circles link the geometry of a triangle with its linear and area characteristics."
  },
  "why": {
   "bg": "Центърът на вписаната окръжност е пресечна точка на ъглополовящите, защото те са геометрично място на точки, равноотдалечени от страните. Центърът на описаната окръжност е пресечна точка на симетралите, тъй като те са равноотдалечени от върховете.",
   "en": "The incenter is the intersection of angle bisectors because they are equidistant from the sides. The circumcenter is the intersection of perpendicular bisectors because they are equidistant from the vertices."
  },
  "rules": [
   {
    "bg": "За всеки триъгълник: Площта S = p · r, където p е полупериметърът, а r е радиусът на вписаната окръжност.",
    "en": "For any triangle: Area S = p · r, where p is the semi-perimeter and r is the inradius."
   },
   {
    "bg": "За всеки триъгълник: R = (a · b · c) : (4 · S), където a, b, c са страните, а R е радиусът на описаната окръжност.",
    "en": "For any triangle: R = (a · b · c) : (4 · S), where a, b, c are the sides and R is the circumradius."
   },
   {
    "bg": "Правоъгълен триъгълник: r = (a + b − c) : 2 и R = c : 2 (медиана към хипотенузата).",
    "en": "Right triangle: r = (a + b − c) : 2 and R = c : 2 (median to the hypotenuse)."
   },
   {
    "bg": "Синусова теорема: a : sin(alpha) = b : sin(beta) = c : sin(gamma) = 2 · R.",
    "en": "Law of Sines: a : sin(alpha) = b : sin(beta) = c : sin(gamma) = 2 · R."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете радиусите r и R на триъгълник със страни 6 cm, 8 cm и 10 cm.",
     "en": "Find the radii r and R of a triangle with sides 6 cm, 8 cm, and 10 cm."
    },
    "steps": [
     {
      "bg": "Проверяваме вида на триъгълника: 6² + 8² = 36 + 64 = 100 = 10². Триъгълникът е правоъгълен.",
      "en": "Check the triangle type: 6² + 8² = 36 + 64 = 100 = 10². The triangle is right-angled."
     },
     {
      "bg": "Изчисляваме r = (6 + 8 − 10) : 2 = 4 : 2 = 2 cm.",
      "en": "Calculate r = (6 + 8 − 10) : 2 = 4 : 2 = 2 cm."
     },
     {
      "bg": "Изчисляваме R = 10 : 2 = 5 cm.",
      "en": "Calculate R = 10 : 2 = 5 cm."
     }
    ],
    "why": {
     "bg": "При правоъгълен триъгълник хипотенузата е диаметър на описаната окръжност, а радиусът на вписаната се намира чрез страните.",
     "en": "In a right triangle, the hypotenuse is the diameter of the circumcircle, and the inradius is found using the sides."
    }
   },
   {
    "task": {
     "bg": "Намерете R на равностранен триъгълник със страна 6 cm.",
     "en": "Find R of an equilateral triangle with side 6 cm."
    },
    "steps": [
     {
      "bg": "Използваме формулата за височина h = (a · √3) : 2 = (6 · √3) : 2 = 3 · √3 cm.",
      "en": "Use the height formula h = (a · √3) : 2 = (6 · √3) : 2 = 3 · √3 cm."
     },
     {
      "bg": "В равностранния триъгълник R = (2/3) · h = (2/3) · 3 · √3 = 2 · √3 cm.",
      "en": "In an equilateral triangle R = (2/3) · h = (2/3) · 3 · √3 = 2 · √3 cm."
     }
    ],
    "why": {
     "bg": "При правилен триъгълник центровете съвпадат и R е 2/3 от височината.",
     "en": "In a regular triangle, the centers coincide and R is 2/3 of the height."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Объркване на формулите за r и R, особено при правоъгълен триъгълник.",
    "en": "Confusing the formulas for r and R, especially in right-angled triangles."
   },
   {
    "bg": "Грешно приемане, че центърът на описаната окръжност винаги е вътре в триъгълника (при тъпоъгълен е отвън).",
    "en": "Incorrectly assuming the circumcenter is always inside the triangle (it is outside in obtuse triangles)."
   },
   {
    "bg": "Забравяне, че допирните точки на вписаната окръжност не винаги са среди на страните.",
    "en": "Forgetting that the contact points of the incircle are not always the midpoints of the sides."
   }
  ]
 },
 "irrational": {
  "topicId": "irrational",
  "idea": {
   "bg": "Ирационални уравнения са тези, при които неизвестното x се намира под знака на корен. Основната цел е премахването на корена чрез повдигане на двете страни на уравнението на подходяща степен.",
   "en": "Irrational equations are those in which the unknown x is under a radical sign. The main goal is to eliminate the radical by raising both sides of the equation to an appropriate power."
  },
  "why": {
   "bg": "Методът работи, защото операцията повдигане на степен е обратна на корен квадратен (√a² = |a|). Важно е да се следи за дефиниционното множество, тъй като при четна степен могат да се появят „чужди“ корени.",
   "en": "The method works because exponentiation is the inverse operation of the square root (√a² = |a|). It is crucial to monitor the domain because raising to an even power can introduce 'extraneous' roots."
  },
  "rules": [
   {
    "bg": "Определете дефиниционното множество (ДМ): подкоренната величина на четен корен трябва да е неотрицателна (f(x) ≥ 0).",
    "en": "Determine the domain: the radicand of an even root must be non-negative (f(x) ≥ 0)."
   },
   {
    "bg": "Изолирайте корена от едната страна на уравнението преди повдигане на степен.",
    "en": "Isolate the radical on one side of the equation before raising it to a power."
   },
   {
    "bg": "Повдигнете двете страни на втора степен: (√f(x))² = (g(x))², при условие g(x) ≥ 0.",
    "en": "Square both sides: (√f(x))² = (g(x))², provided that g(x) ≥ 0."
   },
   {
    "bg": "Задължително проверете получените корени чрез заместване в първоначалното уравнение.",
    "en": "Always verify the obtained roots by substituting them back into the original equation."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Решете уравнението: √(x + 2) = 4",
     "en": "Solve the equation: √(x + 2) = 4"
    },
    "steps": [
     {
      "bg": "Повдигаме двете страни на квадрат: x + 2 = 4², което е x + 2 = 16.",
      "en": "Square both sides: x + 2 = 4², which is x + 2 = 16."
     },
     {
      "bg": "Изваждаме 2 от двете страни: x = 14.",
      "en": "Subtract 2 from both sides: x = 14."
     }
    ],
    "why": {
     "bg": "Проверка: √(14 + 2) = √16 = 4. Уравнението е вярно, x = 14 е решение.",
     "en": "Check: √(14 + 2) = √16 = 4. The equation holds, so x = 14 is a solution."
    }
   },
   {
    "task": {
     "bg": "Решете уравнението: √(x − 1) = x − 3",
     "en": "Solve the equation: √(x − 1) = x − 3"
    },
    "steps": [
     {
      "bg": "Повдигаме на квадрат: x − 1 = (x − 3)², което е x − 1 = x² − 6·x + 9.",
      "en": "Square both sides: x − 1 = (x − 3)², which is x − 1 = x² − 6·x + 9."
     },
     {
      "bg": "Преобразуваме до квадратно уравнение: x² − 7·x + 10 = 0.",
      "en": "Transform into a quadratic equation: x² − 7·x + 10 = 0."
     },
     {
      "bg": "Намираме корените чрез дискриминанта: x1 = 2, x2 = 5.",
      "en": "Find the roots using the discriminant: x1 = 2, x2 = 5."
     }
    ],
    "why": {
     "bg": "Проверка за x=2: √(2-1)=2-3 => 1=-1 (невярно). Проверка за x=5: √(5-1)=5-3 => 2=2 (вярно). Единствен корен е x=5.",
     "en": "Check for x=2: √(2-1)=2-3 => 1=-1 (false). Check for x=5: √(5-1)=5-3 => 2=2 (true). The only root is x=5."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне на проверката или ДМ, което води до включване на „чужди“ корени в отговора.",
    "en": "Forgetting the check or the domain, leading to the inclusion of 'extraneous' roots in the answer."
   },
   {
    "bg": "Грешно повдигане на квадрат на израз от типа (a − b)², като се забравя смесеното произведение 2·a·b.",
    "en": "Incorrectly squaring expressions like (a − b)², forgetting the middle term 2·a·b."
   },
   {
    "bg": "Твърдението, че √x = −3 има решение. Квадратен корен не може да бъде отрицателно число.",
    "en": "Claiming that √x = −3 has a solution. A square root cannot result in a negative number."
   }
  ]
 },
 "limits": {
  "topicId": "limits",
  "idea": {
   "bg": "Границата описва поведението на една функция, когато нейният аргумент x се приближава неограничено до дадено число или безкрайност. Тя показва към каква стойност се стреми функцията, дори ако тя не е дефинирана в самата точка.",
   "en": "A limit describes the behavior of a function as its argument x approaches a specific value or infinity. It shows the value the function tends toward, even if it is not defined at that exact point."
  },
  "why": {
   "bg": "Методите за пресмятане на граници работят, защото позволяват да се елиминират математически неопределености чрез съкращаване на критични множители или използване на свойствата на непрекъснатите функции.",
   "en": "Limit calculation methods work because they allow the elimination of mathematical uncertainties by canceling out critical factors or using the properties of continuous functions."
  },
  "rules": [
   {
    "bg": "Граница на сума/разлика: lim (f(x) ± g(x)) = lim f(x) ± lim g(x). Пример: lim (x + 5) = 2 + 5 = 7 при x -> 2.",
    "en": "Limit of sum/difference: lim (f(x) ± g(x)) = lim f(x) ± lim g(x). Example: lim (x + 5) = 2 + 5 = 7 as x -> 2."
   },
   {
    "bg": "Граница на рационална функция при x -> ∞: Сравняват се степените на числителя и знаменателя. Пример: lim (2x² / x²) = 2.",
    "en": "Limit of a rational function as x -> ∞: Compare the degrees of the numerator and denominator. Example: lim (2x² / x²) = 2."
   },
   {
    "bg": "Неопределеност 0/0: Изразът се разлага на множители и се съкращава. Пример: lim (x²-1)/(x-1) = lim (x+1) = 2 при x -> 1.",
    "en": "Indeterminacy 0/0: Factor the expression and cancel terms. Example: lim (x²-1)/(x-1) = lim (x+1) = 2 as x -> 1."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Пресметнете границата: lim (x² - 4) / (x - 2) при x клонящо към 2.",
     "en": "Calculate the limit: lim (x² - 4) / (x - 2) as x approaches 2."
    },
    "steps": [
     {
      "bg": "Директното заместване дава 0/0, затова разлагаме числителя: x² - 4 = (x - 2)(x + 2).",
      "en": "Direct substitution gives 0/0, so we factor the numerator: x² - 4 = (x - 2)(x + 2)."
     },
     {
      "bg": "Съкращаваме (x - 2) и заместваме: lim (x + 2) = 2 + 2 = 4.",
      "en": "Cancel (x - 2) and substitute: lim (x + 2) = 2 + 2 = 4."
     }
    ],
    "why": {
     "bg": "Въпреки че функцията не е дефинирана в x=2, поведението ѝ около тази точка клони към 4.",
     "en": "Although the function is not defined at x=2, its behavior around this point tends toward 4."
    }
   },
   {
    "task": {
     "bg": "Пресметнете границата: lim (3x² + 5) / (x² - 1) при x клонящо към безкрайност.",
     "en": "Calculate the limit: lim (3x² + 5) / (x² - 1) as x approaches infinity."
    },
    "steps": [
     {
      "bg": "Изнасяме най-високата степен x² пред скоби в числителя и знаменателя.",
      "en": "Factor out the highest power x² in both the numerator and the denominator."
     },
     {
      "bg": "След съкращаване и премахване на клонящите към нула дробни части (5/x² и 1/x²), остава 3/1 = 3.",
      "en": "After canceling and removing the fractional parts tending to zero (5/x² and 1/x²), 3/1 = 3 remains."
     }
    ],
    "why": {
     "bg": "При много големи стойности на x, членовете с най-висока степен доминират резултата.",
     "en": "At very large values of x, the terms with the highest degree dominate the result."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно приемане, че 0/0 винаги е равно на 0 или 1, вместо да се търси начин за премахване на неопределеността.",
    "en": "Wrongly assuming that 0/0 is always equal to 0 or 1, instead of finding a way to eliminate the indeterminacy."
   },
   {
    "bg": "Забравяне да се провери дали функцията е дефинирана, преди да се приложи директно заместване.",
    "en": "Forgetting to check if the function is defined before applying direct substitution."
   },
   {
    "bg": "Объркване на знаците при граници, клонящи към минус безкрайност.",
    "en": "Confusing signs when limits approach negative infinity."
   }
  ]
 },
 "linfunc": {
  "topicId": "linfunc",
  "idea": {
   "bg": "Линейната функция е зависимост от вида y = ax + b, където a и b са числа. Графиката ѝ винаги е права линия, която показва постоянна промяна на една величина спрямо друга.",
   "en": "A linear function is a relationship of the form y = ax + b, where a and b are constants. Its graph is always a straight line, representing a constant rate of change between two variables."
  },
  "why": {
   "bg": "Методът работи, защото всяка двойка стойности (x, y) удовлетворява уравнението и лежи върху една и съща права, определена от нейния наклон a и начална точка b.",
   "en": "The method works because every pair of values (x, y) satisfies the equation and lies on the same straight line, determined by its slope a and y-intercept b."
  },
  "rules": [
   {
    "bg": "Общ вид: y = ax + b. Тук 'a' е коефициент пред x (наклон), а 'b' е свободният член.",
    "en": "General form: y = ax + b. Here 'a' is the coefficient of x (slope), and 'b' is the constant term."
   },
   {
    "bg": "Коефициентът 'a' определя наклона: ако a > 0, функцията расте; ако a < 0, тя намалява.",
    "en": "The coefficient 'a' determines the slope: if a > 0, the function increases; if a < 0, it decreases."
   },
   {
    "bg": "Свободният член 'b' показва къде графиката пресича оста y (точка с координати 0, b).",
    "en": "The constant term 'b' shows where the graph intersects the y-axis (point with coordinates 0, b)."
   },
   {
    "bg": "За чертане на графика са нужни само две точки, например (0, b) и още една по избор.",
    "en": "To draw the graph, only two points are needed, for example (0, b) and another one of your choice."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Начертайте графиката на функцията y = 2x − 3.",
     "en": "Draw the graph of the function y = 2x − 3."
    },
    "steps": [
     {
      "bg": "Избираме x = 0, тогава y = 2·0 − 3 = −3. Първа точка A(0, −3).",
      "en": "Choose x = 0, then y = 2·0 − 3 = −3. First point A(0, −3)."
     },
     {
      "bg": "Избираме x = 2, тогава y = 2·2 − 3 = 1. Втора точка B(2, 1).",
      "en": "Choose x = 2, then y = 2·2 − 3 = 1. Second point B(2, 1)."
     },
     {
      "bg": "Свързваме точките A и B с права линия.",
      "en": "Connect points A and B with a straight line."
     }
    ],
    "why": {
     "bg": "Две точки са напълно достатъчни, за да определят еднозначно права в равнината.",
     "en": "Two points are sufficient to uniquely define a straight line in the plane."
    }
   },
   {
    "task": {
     "bg": "Намерете пресечната точка на y = −x + 4 с абсцисната ос (x).",
     "en": "Find the intersection point of y = −x + 4 with the x-axis."
    },
    "steps": [
     {
      "bg": "За пресечна точка с оста x, поставяме y = 0.",
      "en": "For the intersection with the x-axis, set y = 0."
     },
     {
      "bg": "Решаваме уравнението 0 = −x + 4, откъдето x = 4.",
      "en": "Solve the equation 0 = −x + 4, which gives x = 4."
     },
     {
      "bg": "Точката е с координати (4, 0).",
      "en": "The point coordinates are (4, 0)."
     }
    ],
    "why": {
     "bg": "Всяка точка върху абсцисната ос има ордината y, равна на нула.",
     "en": "Every point on the x-axis has a y-coordinate equal to zero."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно определяне на знака на наклона, което води до грешна посока на правата.",
    "en": "Incorrectly identifying the sign of the slope, leading to the wrong direction of the line."
   },
   {
    "bg": "Объркване на координатите (x, y) при нанасяне на точките в координатна система.",
    "en": "Confusing the (x, y) coordinates when plotting points in the coordinate system."
   },
   {
    "bg": "Мислата, че функцията y = 3 е вертикална права (тя е хоризонтална).",
    "en": "Thinking that the function y = 3 is a vertical line (it is horizontal)."
   }
  ]
 },
 "logineq": {
  "topicId": "logineq",
  "idea": {
   "bg": "Логаритмичните неравенства са неравенства, в които неизвестното се съдържа в аргумента или основата на логаритъма. Решаването им изисква съобразяване с дефиниционното множество и монотонността на логаритмичната функция.",
   "en": "Logarithmic inequalities are inequalities where the unknown variable is located within the argument or the base of a logarithm. Solving them requires considering the domain of definition and the monotonicity of the logarithmic function."
  },
  "why": {
   "bg": "Методът се базира на това, че при основа a > 1 функцията е растяща и посоката на неравенството се запазва, а при 0 < a < 1 функцията е намаляваща и посоката се обръща.",
   "en": "The method is based on the fact that for base a > 1, the function is increasing and the inequality sign remains the same, while for 0 < a < 1, the function is decreasing and the sign reverses."
  },
  "rules": [
   {
    "bg": "Определете допустимите стойности (ДС): аргументът на логаритъма винаги трябва да бъде строго по-голям от нула (f(x) > 0).",
    "en": "Determine the domain (DS): the argument of the logarithm must always be strictly greater than zero (f(x) > 0)."
   },
   {
    "bg": "Ако log_a(f(x)) > log_a(g(x)) и a > 1, то f(x) > g(x). Посоката на неравенството не се променя.",
    "en": "If log_a(f(x)) > log_a(g(x)) and a > 1, then f(x) > g(x). The inequality sign remains the same."
   },
   {
    "bg": "Ако log_a(f(x)) > log_a(g(x)) и 0 < a < 1, то f(x) < g(x). Посоката на неравенството задължително се обръща.",
    "en": "If log_a(f(x)) > log_a(g(x)) and 0 < a < 1, then f(x) < g(x). The inequality sign must be reversed."
   },
   {
    "bg": "Представете числовите константи като логаритми при същата основа: b = log_a(a^b).",
    "en": "Represent numerical constants as logarithms with the same base: b = log_a(a^b)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Решете неравенството: log_2(x - 3) < 2",
     "en": "Solve the inequality: log_2(x - 3) < 2"
    },
    "steps": [
     {
      "bg": "1. Определяме ДС: x - 3 > 0, което означава x > 3.",
      "en": "1. Determine the domain: x - 3 > 0, which means x > 3."
     },
     {
      "bg": "2. Представяме числото 2 като логаритъм при основа 2: 2 = log_2(4).",
      "en": "2. Represent the number 2 as a logarithm with base 2: 2 = log_2(4)."
     },
     {
      "bg": "3. Тъй като основата 2 > 1, премахваме логаритмите без промяна на знака: x - 3 < 4.",
      "en": "3. Since base 2 > 1, remove the logarithms without changing the sign: x - 3 < 4."
     },
     {
      "bg": "4. Решаваме неравенството: x < 7. Засичаме с ДС: x е в интервала (3, 7).",
      "en": "4. Solve the inequality: x < 7. Intersect with the domain: x is in the interval (3, 7)."
     }
    ],
    "why": {
     "bg": "Използваме факта, че логаритъмът при основа 2 е растяща функция и обединяваме решението с дефиниционната област.",
     "en": "We use the fact that the logarithm with base 2 is an increasing function and combine the solution with the domain."
    }
   },
   {
    "task": {
     "bg": "Решете неравенството: log_0,5(x + 1) ≥ -1",
     "en": "Solve the inequality: log_0.5(x + 1) ≥ -1"
    },
    "steps": [
     {
      "bg": "1. Определяме ДС: x + 1 > 0, т.е. x > -1.",
      "en": "1. Determine the domain: x + 1 > 0, i.e., x > -1."
     },
     {
      "bg": "2. Представяме -1 като log_0,5(0,5⁻¹) = log_0,5(2).",
      "en": "2. Represent -1 as log_0.5(0.5^-1) = log_0.5(2)."
     },
     {
      "bg": "3. Тъй като основата 0,5 < 1, обръщаме знака: x + 1 ≤ 2.",
      "en": "3. Since base 0.5 < 1, reverse the sign: x + 1 ≤ 2."
     },
     {
      "bg": "4. Намираме x ≤ 1. Засичаме с ДС: x е в интервала (-1, 1].",
      "en": "4. Find x ≤ 1. Intersect with the domain: x is in the interval (-1, 1]."
     }
    ],
    "why": {
     "bg": "При основа между 0 и 1 функцията е намаляваща, затова променяме посоката на неравенството.",
     "en": "With a base between 0 and 1, the function is decreasing, which is why we change the direction of the inequality."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне на условието за дефиниционно множество (аргументът > 0).",
    "en": "Forgetting the domain condition (argument > 0)."
   },
   {
    "bg": "Непроменяне на посоката на неравенството, когато основата е между 0 и 1.",
    "en": "Failing to reverse the inequality sign when the base is between 0 and 1."
   },
   {
    "bg": "Грешно преобразуване на число в логаритъм, например считане, че log_a(b) = a^b.",
    "en": "Incorrectly converting a number to a logarithm, for example, assuming log_a(b) = a^b."
   }
  ]
 },
 "measures": {
  "topicId": "measures",
  "idea": {
   "bg": "Мерните единици ни позволяват да описваме количествено дължина, маса и стойност по единен и точен начин. Те се използват за измерване на разстояние със сантиметри (см), тегло с килограми (кг) и цена с левове.",
   "en": "Measuring units allow us to quantitatively describe length, mass, and value in a unified and precise way. They are used to measure distance in centimeters (cm), weight in kilograms (kg), and price in leva."
  },
  "why": {
   "bg": "Стандартизираните мерки гарантират, че резултатите са едни и същи за всеки човек, навсякъде по света. Използването на числа с определени мерни единици превръща субективните понятия като 'тежко' или 'дълго' в обективни данни.",
   "en": "Standardized measures ensure that results are the same for every person, everywhere in the world. Using numbers with specific units turns subjective concepts like 'heavy' or 'long' into objective data."
  },
  "rules": [
   {
    "bg": "Дължината се измерва в сантиметри (см). 100 см са равни на 1 метър. Пример: 20 см + 30 см = 50 см.",
    "en": "Length is measured in centimeters (cm). 100 cm equals 1 meter. Example: 20 cm + 30 cm = 50 cm."
   },
   {
    "bg": "Теглото (масата) се измерва в килограми (кг). Пример: 5 кг + 2 кг = 7 кг.",
    "en": "Weight (mass) is measured in kilograms (kg). Example: 5 kg + 2 kg = 7 kg."
   },
   {
    "bg": "Парите се измерват в левове и стотинки. 100 стотинки са равни на 1 лев. Пример: 10 лв. − 4 лв. = 6 лв.",
    "en": "Money is measured in leva and stotinki. 100 stotinki equals 1 lev. Example: 10 lv. − 4 lv. = 6 lv."
   },
   {
    "bg": "Събираме и изваждаме само числа с еднакви мерни единици (см със см, кг с кг).",
    "en": "We add and subtract only numbers with the same units (cm with cm, kg with kg)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Иван има въже с дължина 45 см, а Петър има въже, което е с 15 см по-дълго. Колко е общата им дължина?",
     "en": "Ivan has a rope 45 cm long, and Peter has a rope that is 15 cm longer. What is their total length?"
    },
    "steps": [
     {
      "bg": "Намираме дължината на въжето на Петър: 45 + 15 = 60 см.",
      "en": "Find the length of Peter's rope: 45 + 15 = 60 cm."
     },
     {
      "bg": "Събираме двете дължини: 45 + 60 = 105 см.",
      "en": "Add the two lengths: 45 + 60 = 105 cm."
     }
    ],
    "why": {
     "bg": "Дължините се събират директно, защото са в една и съща мерна единица (см).",
     "en": "Lengths are added directly because they are in the same unit (cm)."
    }
   },
   {
    "task": {
     "bg": "Една чанта тежи 8 кг, а друга е с 3 кг по-лека. Колко тежат двете чанти общо?",
     "en": "One bag weighs 8 kg, and another is 3 kg lighter. How much do both bags weigh together?"
    },
    "steps": [
     {
      "bg": "Намираме теглото на втората чанта: 8 − 3 = 5 кг.",
      "en": "Find the weight of the second bag: 8 − 3 = 5 kg."
     },
     {
      "bg": "Намираме общото тегло: 8 + 5 = 13 кг.",
      "en": "Find the total weight: 8 + 5 = 13 kg."
     }
    ],
    "why": {
     "bg": "Използваме изваждане за сравнение и събиране за намиране на общо тегло в килограми.",
     "en": "We use subtraction for comparison and addition to find the total weight in kilograms."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне да се запише мерната единица до числото в крайния отговор.",
    "en": "Forgetting to write the unit of measurement next to the number in the final answer."
   },
   {
    "bg": "Събиране на различни видове мерки (например 5 см + 2 кг), което е невъзможно.",
    "en": "Adding different types of measures (e.g., 5 cm + 2 kg), which is impossible."
   },
   {
    "bg": "Грешно превръщане на единици (например мисленето, че 10 см са 1 метър).",
    "en": "Incorrect unit conversion (e.g., thinking that 10 cm equals 1 meter)."
   }
  ]
 },
 "median": {
  "topicId": "median",
  "idea": {
   "bg": "Медианата е средната стойност в подреден статистически ред, която разделя данните на две равни части. Тя е по-устойчива на екстремни стойности (аутлайери) в сравнение със средното аритметично.",
   "en": "The median is the middle value in an ordered statistical series that divides the data into two equal parts. It is more robust to extreme values (outliers) compared to the arithmetic mean."
  },
  "why": {
   "bg": "Методът работи, защото се фокусира върху позицията на данните, а не върху техните конкретни тегла, осигурявайки центъра на разпределението.",
   "en": "The method works because it focuses on the position of the data rather than their specific weights, providing the center of the distribution."
  },
  "rules": [
   {
    "bg": "Подредете данните във възходящ ред (от най-малкото към най-голямото).",
    "en": "Arrange the data in ascending order (from smallest to largest)."
   },
   {
    "bg": "Ако броят n е нечетен, медианата е точно средното число на позиция (n + 1) : 2.",
    "en": "If the count n is odd, the median is exactly the middle number at position (n + 1) : 2."
   },
   {
    "bg": "Ако броят n е четен, медианата е средно аритметичното на двете средни числа.",
    "en": "If the count n is even, the median is the arithmetic mean of the two middle numbers."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете медианата на числата: 5, 2, 8, 3, 7.",
     "en": "Find the median of the numbers: 5, 2, 8, 3, 7."
    },
    "steps": [
     {
      "bg": "Подреждаме във възходящ ред: 2, 3, 5, 7, 8.",
      "en": "Arrange in ascending order: 2, 3, 5, 7, 8."
     },
     {
      "bg": "Броят n = 5 (нечетен), средният елемент е третият.",
      "en": "The count n = 5 (odd), the middle element is the third one."
     },
     {
      "bg": "Медианата е 5.",
      "en": "The median is 5."
     }
    ],
    "why": {
     "bg": "При нечетен брой имаме единствен централен елемент.",
     "en": "With an odd number of values, there is a single central element."
    }
   },
   {
    "task": {
     "bg": "Намерете медианата на числата: 10, 2, 6, 4.",
     "en": "Find the median of the numbers: 10, 2, 6, 4."
    },
    "steps": [
     {
      "bg": "Подреждаме във възходящ ред: 2, 4, 6, 10.",
      "en": "Arrange in ascending order: 2, 4, 6, 10."
     },
     {
      "bg": "Броят n = 4 (четен), двете средни числа са 4 и 6.",
      "en": "The count n = 4 (even), the two middle numbers are 4 and 6."
     },
     {
      "bg": "Изчисляваме (4 + 6) : 2 = 5.",
      "en": "Calculate (4 + 6) : 2 = 5."
     }
    ],
    "why": {
     "bg": "При четен брой медианата е средната точка между двата центъра.",
     "en": "With an even number of values, the median is the midpoint between the two centers."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне на първата стъпка – данните трябва задължително да са подредени по големина.",
    "en": "Forgetting the first step – the data must be sorted by size."
   },
   {
    "bg": "Объркване на позицията на числото с неговата стойност.",
    "en": "Confusing the position of the number with its value."
   },
   {
    "bg": "Директно избиране на едно от двете средни числа при четен брой, вместо изчисляване на средното им.",
    "en": "Directly picking one of the two middle numbers when the count is even, instead of calculating their average."
   }
  ]
 },
 "midline": {
  "topicId": "midline",
  "idea": {
   "bg": "Средната отсечка в триъгълник е отсечка, съединяваща средите на две от страните му. Тя служи като мост между размерите на вътрешните елементи и страните на триъгълника.",
   "en": "A midsegment of a triangle is a line segment connecting the midpoints of two of its sides. It acts as a bridge between the inner dimensions and the sides of the triangle."
  },
  "why": {
   "bg": "Методът се основава на подобието на триъгълници, където малкият триъгълник е подобен на големия с коефициент 1:2, или чрез свойствата на успоредниците.",
   "en": "The method is based on triangle similarity, where the smaller triangle is similar to the larger one with a ratio of 1:2, or through the properties of parallelograms."
  },
  "rules": [
   {
    "bg": "Успоредност: Средната отсечка е винаги успоредна на третата страна на триъгълника.",
    "en": "Parallelism: The midsegment is always parallel to the third side of the triangle."
   },
   {
    "bg": "Дължина: Дължината на средната отсечка е равна на половината от дължината на страната, на която е успоредна (MN = 1/2 · AB).",
    "en": "Length: The length of the midsegment is equal to half the length of the side it is parallel to (MN = 1/2 · AB)."
   },
   {
    "bg": "Брой: Във всеки триъгълник могат да се начертаят точно три средни отсечки.",
    "en": "Number: In every triangle, exactly three midsegments can be drawn."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "В триъгълник ABC страната AB е 12 см. Намерете дължината на средната отсечка MN, която е успоредна на AB.",
     "en": "In triangle ABC, side AB is 12 cm. Find the length of the midsegment MN, which is parallel to AB."
    },
    "steps": [
     {
      "bg": "Идентифицирайте съответната страна: средната отсечка MN съответства на страната AB.",
      "en": "Identify the corresponding side: midsegment MN corresponds to side AB."
     },
     {
      "bg": "Приложете формулата: MN = AB : 2.",
      "en": "Apply the formula: MN = AB : 2."
     },
     {
      "bg": "Изчислете: MN = 12 : 2 = 6 см.",
      "en": "Calculate: MN = 12 : 2 = 6 cm."
     }
    ],
    "why": {
     "bg": "Дължината на средната отсечка е винаги 1/2 от основата.",
     "en": "The length of the midsegment is always 1/2 of the base."
    }
   },
   {
    "task": {
     "bg": "Периметърът на триъгълника, образуван от трите средни отсечки, е 15 см. Намерете периметъра на оригиналния триъгълник ABC.",
     "en": "The perimeter of the triangle formed by the three midsegments is 15 cm. Find the perimeter of the original triangle ABC."
    },
    "steps": [
     {
      "bg": "Всяка средна отсечка е половината от съответната страна на големия триъгълник.",
      "en": "Each midsegment is half of the corresponding side of the large triangle."
     },
     {
      "bg": "Сборът от средните отсечки (периметърът им) е равен на половината от сбора на страните на големия триъгълник.",
      "en": "The sum of the midsegments (their perimeter) is equal to half the sum of the sides of the large triangle."
     },
     {
      "bg": "P(ABC) = 2 · 15 = 30 см.",
      "en": "P(ABC) = 2 · 15 = 30 cm."
     }
    ],
    "why": {
     "bg": "Коефициентът на подобие между малкия и големия триъгълник е 1:2, следователно и периметрите се отнасят така.",
     "en": "The similarity ratio between the small and large triangle is 1:2, therefore the perimeters follow the same ratio."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно свързване на точки: Средната отсечка трябва да свързва средите на страните, а не произволни точки.",
    "en": "Wrong point connection: The midsegment must connect the midpoints of the sides, not arbitrary points."
   },
   {
    "bg": "Объркване на съотношението: Мислене, че средната отсечка е равна на страната, вместо на нейната половина.",
    "en": "Ratio confusion: Thinking the midsegment is equal to the side instead of its half."
   },
   {
    "bg": "Неправилно определяне на успоредната страна: Опит да се изчисли дължина спрямо грешна страна на триъгълника.",
    "en": "Incorrect parallel side identification: Trying to calculate length relative to the wrong side of the triangle."
   }
  ]
 },
 "monomials": {
  "topicId": "monomials",
  "idea": {
   "bg": "Едночленът е произведение от числа и променливи на някаква степен, а подобни едночлени са тези, които имат напълно еднаква буквена част. Събирането и изваждането на подобни едночлени се нарича приведение.",
   "en": "A monomial is a product of numbers and variables raised to powers, and like terms are monomials that have identical variable parts. Adding or subtracting like terms is called combining like terms."
  },
  "why": {
   "bg": "Методът се базира на дистрибутивното (разпределително) свойство на умножението: a·c + b·c = (a + b)·c, където променливите са общият множител.",
   "en": "The method is based on the distributive property of multiplication: a·c + b·c = (a + b)·c, where the variables act as the common factor."
  },
  "rules": [
   {
    "bg": "Два едночлена са подобни, ако имат едни и същи променливи на едни и същи степени. Пример: 3x²y и −5x²y са подобни.",
    "en": "Two monomials are like terms if they have the same variables raised to the same powers. Example: 3x²y and −5x²y are like terms."
   },
   {
    "bg": "При събиране на подобни едночлени събираме само техните коефициенти, а буквената част остава същата. Пример: 2a + 3a = (2 + 3)a = 5a.",
    "en": "When adding like terms, we only add their coefficients, while the variable part remains the same. Example: 2a + 3a = (2 + 3)a = 5a."
   },
   {
    "bg": "Ако буквените части са различни, едночлените не могат да бъдат съкратени или събрани. Пример: 2x + 3y остава непроменено.",
    "en": "If the variable parts are different, the monomials cannot be simplified or added. Example: 2x + 3y remains unchanged."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Приведете израза: 7a²b − 3ab² + 2a²b − ab²",
     "en": "Simplify the expression: 7a²b − 3ab² + 2a²b − ab²"
    },
    "steps": [
     {
      "bg": "Групираме подобните едночлени: (7a²b + 2a²b) и (−3ab² − 1ab²).",
      "en": "Group the like terms: (7a²b + 2a²b) and (−3ab² − 1ab²)."
     },
     {
      "bg": "Събираме коефициентите: (7 + 2)a²b = 9a²b и (−3 − 1)ab² = −4ab².",
      "en": "Add the coefficients: (7 + 2)a²b = 9a²b and (−3 − 1)ab² = −4ab²."
     },
     {
      "bg": "Записваме крайния резултат: 9a²b − 4ab².",
      "en": "Write the final result: 9a²b − 4ab²."
     }
    ],
    "why": {
     "bg": "Само членовете с еднакви степени на 'a' и 'b' могат да се събират.",
     "en": "Only terms with the same powers of 'a' and 'b' can be added together."
    }
   },
   {
    "task": {
     "bg": "Опростете израза: 5x − (2x − 3x)",
     "en": "Simplify the expression: 5x − (2x − 3x)"
    },
    "steps": [
     {
      "bg": "Първо извършваме действието в скобите: 2x − 3x = −1x.",
      "en": "First perform the operation inside the brackets: 2x − 3x = −1x."
     },
     {
      "bg": "Заместваме обратно: 5x − (−1x) = 5x + 1x.",
      "en": "Substitute back: 5x − (−1x) = 5x + 1x."
     },
     {
      "bg": "Събираме резултатите: 6x.",
      "en": "Add the results: 6x."
     }
    ],
    "why": {
     "bg": "Спазваме реда на действията и правилото за знаците при разкриване на скоби.",
     "en": "We follow the order of operations and the sign rules when removing brackets."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешка: Събиране на различни степени, например x + x² = 2x³. Вярно: x + x² не може да се опрости.",
    "en": "Mistake: Adding different powers, e.g., x + x² = 2x³. Correct: x + x² cannot be simplified."
   },
   {
    "bg": "Грешка: Пропускане на коефициента 1 пред променливата, например x + x = x. Вярно: 1x + 1x = 2x.",
    "en": "Mistake: Ignoring the coefficient 1 before a variable, e.g., x + x = x. Correct: 1x + 1x = 2x."
   },
   {
    "bg": "Грешка: Промяна на степента при събиране, например 3x + 2x = 5x². Вярно: Степента не се променя при събиране, 3x + 2x = 5x.",
    "en": "Mistake: Changing the power when adding, e.g., 3x + 2x = 5x². Correct: The power does not change during addition, 3x + 2x = 5x."
   }
  ]
 },
 "monotonic": {
  "topicId": "monotonic",
  "idea": {
   "bg": "Монотонността описва дали функцията расте или намалява, а екстремумите са нейните най-високи и най-ниски точки в даден интервал. Чрез първата производна можем да намерим къде се променя поведението на функцията.",
   "en": "Monotonicity describes whether a function increases or decreases, while extrema are its highest and lowest points in a given interval. Using the first derivative, we can find where the behavior of the function changes."
  },
  "why": {
   "bg": "Методът работи, защото производната представлява ъгловия коефициент на допирателната: ако f'(x) > 0, функцията се изкачва, а ако f'(x) = 0, тя достига връх или вдлъбнатина.",
   "en": "The method works because the derivative represents the slope of the tangent: if f'(x) > 0, the function climbs, and if f'(x) = 0, it reaches a peak or a valley."
  },
  "rules": [
   {
    "bg": "Намиране на първа производна f'(x) и определяне на критичните точки чрез f'(x) = 0.",
    "en": "Find the first derivative f'(x) and determine the critical points by solving f'(x) = 0."
   },
   {
    "bg": "Ако f'(x) > 0 в интервал, функцията е строго растяща; ако f'(x) < 0, тя е строго намаляваща.",
    "en": "If f'(x) > 0 in an interval, the function is strictly increasing; if f'(x) < 0, it is strictly decreasing."
   },
   {
    "bg": "Локален максимум имаме, когато f'(x) сменя знака си от плюс на минус.",
    "en": "A local maximum occurs when f'(x) changes sign from plus to minus."
   },
   {
    "bg": "Локален минимум имаме, когато f'(x) сменя знака си от минус на плюс.",
    "en": "A local minimum occurs when f'(x) changes sign from minus to plus."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете екстремумите на функцията f(x) = x² − 4x + 3.",
     "en": "Find the extrema of the function f(x) = x² − 4x + 3."
    },
    "steps": [
     {
      "bg": "Намираме производната: f'(x) = 2x − 4.",
      "en": "Find the derivative: f'(x) = 2x − 4."
     },
     {
      "bg": "Решаваме f'(x) = 0: 2x − 4 = 0, което дава критична точка x = 2.",
      "en": "Solve f'(x) = 0: 2x − 4 = 0, which gives critical point x = 2."
     },
     {
      "bg": "Проверяваме знака: за x < 2, f'(x) < 0 (намалява); за x > 2, f'(x) > 0 (расте).",
      "en": "Check the sign: for x < 2, f'(x) < 0 (decreasing); for x > 2, f'(x) > 0 (increasing)."
     },
     {
      "bg": "Пресмятаме стойността: f(2) = 2² − 4·2 + 3 = −1. Точката (2, −1) е локален минимум.",
      "en": "Calculate the value: f(2) = 2² − 4·2 + 3 = −1. The point (2, −1) is a local minimum."
     }
    ],
    "why": {
     "bg": "Производната сменя знака си от минус на плюс в x = 2, което дефинира минимум.",
     "en": "The derivative changes sign from minus to plus at x = 2, which defines a minimum."
    }
   },
   {
    "task": {
     "bg": "Определете интервалите на монотонност за f(x) = −x² + 6x.",
     "en": "Determine the intervals of monotonicity for f(x) = −x² + 6x."
    },
    "steps": [
     {
      "bg": "Пресмятаме f'(x) = −2x + 6.",
      "en": "Calculate f'(x) = −2x + 6."
     },
     {
      "bg": "Намираме корена на f'(x) = 0: x = 3.",
      "en": "Find the root of f'(x) = 0: x = 3."
     },
     {
      "bg": "За x в (−∞, 3), f'(x) > 0, следователно функцията расте.",
      "en": "For x in (−∞, 3), f'(x) > 0, therefore the function increases."
     },
     {
      "bg": "За x в (3, +∞), f'(x) < 0, следователно функцията намалява.",
      "en": "For x in (3, +∞), f'(x) < 0, therefore the function decreases."
     }
    ],
    "why": {
     "bg": "Знакът на линейната функция −2x + 6 определя посоката на движение на параболата.",
     "en": "The sign of the linear function −2x + 6 determines the direction of the parabola's movement."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне да се провери дали критичната точка принадлежи на дефиниционното множество.",
    "en": "Forgetting to check if the critical point belongs to the domain of the function."
   },
   {
    "bg": "Бъркане на локален максимум с локален минимум поради грешен знак при решаване на неравенството.",
    "en": "Confusing a local maximum with a local minimum due to a wrong sign when solving the inequality."
   },
   {
    "bg": "Мисли се, че ако f'(x) = 0, винаги има екстремум (може да е инфлексна точка, напр. при x³).",
    "en": "Thinking that if f'(x) = 0, there is always an extremum (it could be an inflection point, e.g., for x³)."
   }
  ]
 },
 "motion": {
  "topicId": "motion",
  "idea": {
   "bg": "Задачите за движение описват връзката между изминатия път, скоростта и времето, през което се движи даден обект. В основата им стои разбирането, че пътят е произведение от постоянната скорост и времето.",
   "en": "Motion problems describe the relationship between distance traveled, speed, and the time an object is moving. They are based on the understanding that distance is the product of constant speed and time."
  },
  "why": {
   "bg": "Методът работи, защото използва линейни зависимости, които позволяват описание на физическото движение чрез математически уравнения. Съставянето на таблица помага за визуално организиране на данните и намиране на неизвестната величина.",
   "en": "The method works because it uses linear dependencies that allow describing physical movement through mathematical equations. Creating a table helps to visually organize data and find the unknown variable."
  },
  "rules": [
   {
    "bg": "Основна формула: Пътят (s) е равен на скоростта (v) по времето (t). Пример: Ако карате с 50 км/ч за 2 часа, s = 50 · 2 = 100 км.",
    "en": "Basic formula: Distance (s) equals speed (v) times time (t). Example: If you drive at 50 km/h for 2 hours, s = 50 · 2 = 100 km."
   },
   {
    "bg": "Единици за измерване: Винаги проверявайте дали единиците съвпадат (км, часове, км/ч). Ако времето е в минути, разделете на 60, за да го превърнете в часове.",
    "en": "Measurement units: Always check if units match (km, hours, km/h). If time is in minutes, divide by 60 to convert it to hours."
   },
   {
    "bg": "Движение един срещу друг: Когато обектите се движат един към друг, техните пътища се събират, за да образуват цялото разстояние: s1 + s2 = S.",
    "en": "Moving towards each other: When objects move towards each other, their distances add up to form the total distance: s1 + s2 = S."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Два автомобила тръгват едновременно един срещу друг от градове A и B, разстоянието между които е 300 км. Скоростта на първия е 70 км/ч, а на втория е 80 км/ч. След колко часа ще се срещнат?",
     "en": "Two cars start simultaneously towards each other from cities A and B, which are 300 km apart. The speed of the first is 70 km/h and the second is 80 km/h. In how many hours will they meet?"
    },
    "steps": [
     {
      "bg": "Нека времето до срещата е x часа. Пътят на първия е s1 = 70 · x, а на втория е s2 = 80 · x.",
      "en": "Let the time until the meeting be x hours. The distance of the first is s1 = 70 · x, and the second is s2 = 80 · x."
     },
     {
      "bg": "Съставяме уравнението за общия път: 70x + 80x = 300.",
      "en": "Form the equation for the total distance: 70x + 80x = 300."
     },
     {
      "bg": "Решаваме: 150x = 300, следователно x = 2 часа.",
      "en": "Solve: 150x = 300, therefore x = 2 hours."
     }
    ],
    "why": {
     "bg": "Използваме сбора от пътищата, защото двата обекта покриват цялото разстояние заедно.",
     "en": "We use the sum of distances because both objects cover the total distance together."
    }
   },
   {
    "task": {
     "bg": "Велосипедист изминава разстояние за 3 часа със скорост 12 км/ч. С каква скорост трябва да се движи, за да измине същото разстояние за 2 часа?",
     "en": "A cyclist covers a distance in 3 hours at a speed of 12 km/h. At what speed must they travel to cover the same distance in 2 hours?"
    },
    "steps": [
     {
      "bg": "Първо намираме разстоянието: s = v · t = 12 · 3 = 36 км.",
      "en": "First, find the distance: s = v · t = 12 · 3 = 36 km."
     },
     {
      "bg": "Използваме намереното разстояние за втория случай: 36 = v · 2.",
      "en": "Use the found distance for the second case: 36 = v · 2."
     },
     {
      "bg": "Намираме скоростта: v = 36 : 2 = 18 км/ч.",
      "en": "Find the speed: v = 36 : 2 = 18 km/h."
     }
    ],
    "why": {
     "bg": "Разстоянието остава постоянно, което ни позволява да свържем двете ситуации чрез него.",
     "en": "The distance remains constant, allowing us to link the two situations through it."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Смесване на различни мерни единици (например метри в секунда и километри в час) без преобразуване.",
    "en": "Mixing different units of measurement (e.g., meters per second and kilometers per hour) without conversion."
   },
   {
    "bg": "Грешно съставяне на уравнението при движение в една посока (трябва да се използва разликата в пътищата, а не сборът).",
    "en": "Incorrectly forming the equation for movement in the same direction (the difference in distances should be used, not the sum)."
   },
   {
    "bg": "Забравяне да се прибави или извади скоростта на течението при задачи с движение по река.",
    "en": "Forgetting to add or subtract the current speed in problems involving movement on a river."
   }
  ]
 },
 "numcompare": {
  "topicId": "numcompare",
  "idea": {
   "bg": "Числата до 100 се образуват от десетици и единици, подредени по големина в десетичната система. Сравняването им ни позволява да определим кое количество е по-голямо, по-малко или равно спрямо друго.",
   "en": "Numbers up to 100 are formed by tens and ones, ordered by magnitude in the decimal system. Comparing them allows us to determine which quantity is greater, smaller, or equal to another."
  },
  "why": {
   "bg": "Сравняването започва от най-високия разряд (десетиците), защото една десетица винаги е по-голяма от девет единици. Ако десетиците са равни, решението зависи от броя на единиците.",
   "en": "Comparison starts from the highest place value (tens) because one ten is always greater than nine ones. If the tens are equal, the decision depends on the number of units."
  },
  "rules": [
   {
    "bg": "Ако броят на цифрите е различен, числото с повече цифри е по-голямо (например 100 > 99).",
    "en": "If the number of digits is different, the number with more digits is greater (e.g., 100 > 99)."
   },
   {
    "bg": "При двуцифрени числа първо сравняваме десетиците: 54 > 38, защото 5 > 3.",
    "en": "For two-digit numbers, first compare the tens: 54 > 38 because 5 > 3."
   },
   {
    "bg": "Ако десетиците са еднакви, сравняваме единиците: 42 < 47, защото 2 < 7.",
    "en": "If the tens are the same, compare the units: 42 < 47 because 2 < 7."
   },
   {
    "bg": "Използваме знаците > (по-голямо), < (по-малко) и = (равно).",
    "en": "We use the signs > (greater than), < (less than), and = (equal to)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Сравнете числата 63 и 68.",
     "en": "Compare the numbers 63 and 68."
    },
    "steps": [
     {
      "bg": "1. Сравняваме десетиците: и в двете числа имаме 6 десетици.",
      "en": "1. Compare the tens: both numbers have 6 tens."
     },
     {
      "bg": "2. Тъй като десетиците са равни, сравняваме единиците: 3 и 8.",
      "en": "2. Since the tens are equal, compare the units: 3 and 8."
     },
     {
      "bg": "3. Тъй като 3 < 8, то 63 < 68.",
      "en": "3. Since 3 < 8, then 63 < 68."
     }
    ],
    "why": {
     "bg": "Когато десетиците са еднакви, по-голямо е числото с повече единици.",
     "en": "When the tens are the same, the number with more ones is greater."
    }
   },
   {
    "task": {
     "bg": "Сравнете числата 71 и 29.",
     "en": "Compare the numbers 71 and 29."
    },
    "steps": [
     {
      "bg": "1. Сравняваме десетиците на двете числа: 7 и 2.",
      "en": "1. Compare the tens of the two numbers: 7 and 2."
     },
     {
      "bg": "2. Тъй като 7 > 2, числото 71 е по-голямо.",
      "en": "2. Since 7 > 2, the number 71 is greater."
     },
     {
      "bg": "3. Записваме резултата: 71 > 29.",
      "en": "3. Record the result: 71 > 29."
     }
    ],
    "why": {
     "bg": "Числото с повече десетици винаги е по-голямо, независимо от единиците.",
     "en": "The number with more tens is always greater, regardless of the ones."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Сравняване само на единиците (например да се мисли, че 19 > 21, защото 9 > 1).",
    "en": "Comparing only the ones (e.g., thinking 19 > 21 because 9 > 1)."
   },
   {
    "bg": "Обръщане на знаците за по-голямо (>) и по-малко (<).",
    "en": "Reversing the signs for greater than (>) and less than (<)."
   },
   {
    "bg": "Забравяне, че 100 е трицифрено число и е по-голямо от всяко двуцифрено.",
    "en": "Forgetting that 100 is a three-digit number and is greater than any two-digit number."
   }
  ]
 },
 "numline": {
  "topicId": "numline",
  "idea": {
   "bg": "Числовата ос е права линия, върху която всяка точка съответства на определено реално число. Тя е визуален модел, който ни помага да разберем реда и разстоянието между числата.",
   "en": "A number line is a straight line where every point corresponds to a specific real number. It is a visual model that helps us understand the order and distance between numbers."
  },
  "why": {
   "bg": "Този метод работи, защото установява взаимно-еднозначно съответствие между точките от геометрията и числата от алгебрата чрез задаване на посока, начало и мерна единица.",
   "en": "This method works because it establishes a one-to-one correspondence between geometric points and algebraic numbers by defining a direction, an origin, and a unit scale."
  },
  "rules": [
   {
    "bg": "Изчертайте права с посока надясно, означена със стрелка, която показва нарастването на числата.",
    "en": "Draw a straight line with a rightward direction, marked by an arrow, showing that numbers increase to the right."
   },
   {
    "bg": "Изберете начална точка О, съответстваща на числото 0, наречена начало на координатите.",
    "en": "Select a starting point O, corresponding to the number 0, called the origin of coordinates."
   },
   {
    "bg": "Изберете единична отсечка (например 1 см), за да определите мащаба на оста.",
    "en": "Choose a unit segment (e.g., 1 cm) to define the scale of the axis."
   },
   {
    "bg": "Положителните числа се нанасят надясно от 0, а отрицателните - наляво от 0.",
    "en": "Positive numbers are placed to the right of 0, and negative numbers are placed to the left of 0."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Изобразете числата 3 и −2 върху числова ос с единична отсечка 1 см.",
     "en": "Represent the numbers 3 and −2 on a number line with a unit segment of 1 cm."
    },
    "steps": [
     {
      "bg": "Начертайте права със стрелка надясно и отбележете 0 в средата.",
      "en": "Draw a line with a right arrow and mark 0 in the middle."
     },
     {
      "bg": "За числото 3: Отбройте 3 см надясно от 0 и поставете точка А(3).",
      "en": "For number 3: Count 3 cm to the right of 0 and place point A(3)."
     },
     {
      "bg": "За числото −2: Отбройте 2 см наляво от 0 и поставете точка В(−2).",
      "en": "For number −2: Count 2 cm to the left of 0 and place point B(−2)."
     }
    ],
    "why": {
     "bg": "Положителното число показва отместване по посока на стрелката, а отрицателното - в обратна посока.",
     "en": "The positive number shows a shift in the direction of the arrow, and the negative number shows a shift in the opposite direction."
    }
   },
   {
    "task": {
     "bg": "Намерете разстоянието между точките М(−1) и N(4).",
     "en": "Find the distance between the points M(−1) and N(4)."
    },
    "steps": [
     {
      "bg": "Намерете разликата между по-голямото и по-малкото число: 4 − (−1).",
      "en": "Find the difference between the larger and the smaller number: 4 − (−1)."
     },
     {
      "bg": "Изчислете резултата: 4 + 1 = 5 единични отсечки.",
      "en": "Calculate the result: 4 + 1 = 5 unit segments."
     }
    ],
    "why": {
     "bg": "Разстоянието между две точки е абсолютната стойност на тяхната разлика.",
     "en": "The distance between two points is the absolute value of their difference."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Поставяне на отрицателните числа в огледален ред спрямо нулата (например −1 да е по-далеч от −2).",
    "en": "Placing negative numbers in a mirrored order relative to zero (e.g., placing −1 further away than −2)."
   },
   {
    "bg": "Използване на различна дължина за единичните отсечки в една и съща ос.",
    "en": "Using different lengths for unit segments on the same axis."
   },
   {
    "bg": "Забравяне на стрелката, която указва положителната посока на оста.",
    "en": "Forgetting the arrow that indicates the positive direction of the axis."
   }
  ]
 },
 "orderops": {
  "topicId": "orderops",
  "idea": {
   "bg": "Редът на действията е набор от правила, които определят последователността при пресмятане на математически изрази. Той гарантира, че всеки човек ще получи един и същ правилен резултат при решаване на една и съща задача.",
   "en": "Order of operations is a set of rules that determines the sequence for evaluating mathematical expressions. It ensures that everyone arrives at the same correct result when solving the same problem."
  },
  "why": {
   "bg": "Този метод работи, защото създава логическа йерархия, базирана на сложността на операциите, превръщайки математиката в универсален език. Без тези правила изрази като 2 + 3 · 5 биха били двусмислени и биха довели до различни грешни отговори.",
   "en": "This method works because it creates a logical hierarchy based on operation complexity, turning mathematics into a universal language. Without these rules, expressions like 2 + 3 · 5 would be ambiguous and lead to different incorrect answers."
  },
  "rules": [
   {
    "bg": "Първо се извършват действията в скобите ( ), започвайки от най-вътрешните.",
    "en": "First, perform operations inside parentheses ( ), starting from the innermost ones."
   },
   {
    "bg": "Следват действията степенуване (напр. 2²) и коренуване (√), ако има такива.",
    "en": "Next, perform exponentiation (e.g., 2²) and roots (√), if present."
   },
   {
    "bg": "Умножение (·) и деление (:) се извършват с равен приоритет от ляво на дясно.",
    "en": "Multiplication (·) and division (:) are performed with equal priority from left to right."
   },
   {
    "bg": "Събиране (+) и изваждане (−) се извършват последни, също от ляво на дясно.",
    "en": "Addition (+) and subtraction (−) are performed last, also from left to right."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Пресметнете: 15 − 3 · 4 + 2",
     "en": "Calculate: 15 − 3 · 4 + 2"
    },
    "steps": [
     {
      "bg": "Умножаваме 3 · 4 = 12. Изразът става 15 − 12 + 2.",
      "en": "Multiply 3 · 4 = 12. The expression becomes 15 − 12 + 2."
     },
     {
      "bg": "Изваждаме от ляво на дясно: 15 − 12 = 3.",
      "en": "Subtract from left to right: 15 − 12 = 3."
     },
     {
      "bg": "Добавяме останалото: 3 + 2 = 5.",
      "en": "Add the remainder: 3 + 2 = 5."
     }
    ],
    "why": {
     "bg": "Умножението е с предимство пред събирането и изваждането.",
     "en": "Multiplication takes precedence over addition and subtraction."
    }
   },
   {
    "task": {
     "bg": "Пресметнете: (10 + 2) : 3 + 2³",
     "en": "Calculate: (10 + 2) : 3 + 2³"
    },
    "steps": [
     {
      "bg": "Първо в скобите: 10 + 2 = 12. Изразът е 12 : 3 + 2³.",
      "en": "First inside parentheses: 10 + 2 = 12. Expression is 12 : 3 + 2³."
     },
     {
      "bg": "Степенуваме: 2³ = 8. Изразът е 12 : 3 + 8.",
      "en": "Exponentiate: 2³ = 8. Expression is 12 : 3 + 8."
     },
     {
      "bg": "Делим: 12 : 3 = 4.",
      "en": "Divide: 12 : 3 = 4."
     },
     {
      "bg": "Събираме накрая: 4 + 8 = 12.",
      "en": "Add finally: 4 + 8 = 12."
     }
    ],
    "why": {
     "bg": "Скобите и степените са с най-висок приоритет, следвани от делението.",
     "en": "Parentheses and exponents have the highest priority, followed by division."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Извършване на събиране преди умножение (напр. 2 + 3 · 4 да се сметне като 5 · 4).",
    "en": "Performing addition before multiplication (e.g., calculating 2 + 3 · 4 as 5 · 4)."
   },
   {
    "bg": "Грешен ред при деление и умножение – те трябва да се решават от ляво на дясно, а не винаги умножението първо.",
    "en": "Wrong order in division and multiplication – they must be solved from left to right, not always multiplication first."
   },
   {
    "bg": "Игнориране на скобите и пресмятане на числата извън тях първо.",
    "en": "Ignoring parentheses and calculating the numbers outside them first."
   }
  ]
 },
 "paralelogram": {
  "topicId": "paralelogram",
  "idea": {
   "bg": "Паралелограмът е четириъгълник, на който срещуположните страни са две по две успоредни. Той е основна фигура в геометрията, съчетаваща свойствата на успоредност и еднаквост на страните и ъглите.",
   "en": "A parallelogram is a quadrilateral where opposite sides are parallel in pairs. It is a fundamental geometric figure combining properties of parallelism and equality of sides and angles."
  },
  "why": {
   "bg": "Свойствата му се основават на теоремите за пресичане на две успоредни прави с трета, което води до еднаквост на триъгълниците, образувани от диагоналите.",
   "en": "Its properties are based on theorems of two parallel lines intersected by a transversal, leading to the congruence of triangles formed by the diagonals."
  },
  "rules": [
   {
    "bg": "Срещуположните страни са равни (AB = CD и AD = BC).",
    "en": "Opposite sides are equal (AB = CD and AD = BC)."
   },
   {
    "bg": "Срещуположните ъгли са равни, а сборът на прилежащите към една страна ъгли е 180°.",
    "en": "Opposite angles are equal, and the sum of consecutive angles is 180°."
   },
   {
    "bg": "Диагоналите се разполовяват в пресечната си точка (AO = OC, BO = OD).",
    "en": "Diagonals bisect each other at their point of intersection (AO = OC, BO = OD)."
   },
   {
    "bg": "Лицето се намира по формулата S = a · ha, където a е страна, а ha е височината към нея.",
    "en": "The area is found by the formula S = a · ha, where a is a side and ha is the height to it."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "В паралелограм ABCD ъгъл A е 60°. Намерете останалите ъгли.",
     "en": "In parallelogram ABCD, angle A is 60°. Find the other angles."
    },
    "steps": [
     {
      "bg": "Срещуположният ъгъл C е равен на ъгъл A, значи ъгъл C = 60°.",
      "en": "The opposite angle C is equal to angle A, so angle C = 60°."
     },
     {
      "bg": "Прилежащият ъгъл B се намира като 180° − 60° = 120°.",
      "en": "The consecutive angle B is found as 180° − 60° = 120°."
     },
     {
      "bg": "Срещуположният на B ъгъл D също е 120°.",
      "en": "Angle D, which is opposite to B, is also 120°."
     }
    ],
    "why": {
     "bg": "Използваме свойството за сбора на прилежащите ъгли и равенството на срещуположните ъгли.",
     "en": "We use the property of the sum of consecutive angles and the equality of opposite angles."
    }
   },
   {
    "task": {
     "bg": "Намерете лицето на паралелограм със страна 8 cm и височина към нея 5 cm.",
     "en": "Find the area of a parallelogram with a side of 8 cm and a height to it of 5 cm."
    },
    "steps": [
     {
      "bg": "Идентифицираме страната a = 8 cm и височината ha = 5 cm.",
      "en": "Identify the side a = 8 cm and the height ha = 5 cm."
     },
     {
      "bg": "Прилагаме формулата S = a · ha = 8 · 5.",
      "en": "Apply the formula S = a · ha = 8 · 5."
     },
     {
      "bg": "Пресмятаме резултата: S = 40 cm².",
      "en": "Calculate the result: S = 40 cm²."
     }
    ],
    "why": {
     "bg": "Лицето на паралелограма е произведение от страната и съответната височина.",
     "en": "The area of a parallelogram is the product of a side and its corresponding height."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно прилагане на формулата за лице, като се умножават две съседни страни вместо страна и височина.",
    "en": "Incorrectly applying the area formula by multiplying two adjacent sides instead of a side and height."
   },
   {
    "bg": "Мисли се, че диагоналите са равни (това е вярно само за правоъгълник и квадрат).",
    "en": "Thinking that diagonals are equal (this is only true for rectangles and squares)."
   },
   {
    "bg": "Мисли се, че диагоналите са ъглополовящи (вярно само за ромб и квадрат).",
    "en": "Thinking that diagonals are angle bisectors (true only for rhombus and square)."
   }
  ]
 },
 "parallel": {
  "topicId": "parallel",
  "idea": {
   "bg": "Две прави в една равнина са успоредни, ако нямат обща точка, колкото и да се продължават. Когато те са пресечени от трета права (трансверзала), се образуват двойки ъгли със специфични зависимости.",
   "en": "Two lines in a plane are parallel if they never meet, no matter how far they are extended. When these lines are intersected by a third line (transversal), pairs of angles with specific dependencies are formed."
  },
  "why": {
   "bg": "Равенството или допълването на тези ъгли до 180 градуса произтича от аксиомата за успоредните прави и свойствата на съседните и връхните ъгли.",
   "en": "The equality or supplementation of these angles to 180 degrees stems from the parallel postulate and the properties of adjacent and vertical angles."
  },
  "rules": [
   {
    "bg": "Кръстни ъгли: Ако правите са успоредни, вътрешните кръстни ъгли са равни (напр. ъгъл 3 = ъгъл 5).",
    "en": "Alternate angles: If the lines are parallel, the alternate interior angles are equal (e.g., angle 3 = angle 5)."
   },
   {
    "bg": "Съответни ъгли: Разположени на съответни позиции спрямо пресечната права, те са равни (напр. ъгъл 1 = ъгъл 5).",
    "en": "Corresponding angles: Located in corresponding positions relative to the transversal, they are equal (e.g., angle 1 = angle 5)."
   },
   {
    "bg": "Прилежащи ъгли: Сумата от двойка вътрешни прилежащи ъгли е точно 180 градуса (напр. ъгъл 4 + ъгъл 5 = 180°).",
    "en": "Consecutive interior angles: The sum of a pair of consecutive interior angles is exactly 180 degrees (e.g., angle 4 + angle 5 = 180°)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Дадени са две успоредни прави a и b. Ако един от получените съответни ъгли е 70°, намерете неговия прилежащ ъгъл.",
     "en": "Given two parallel lines a and b. If one of the corresponding angles is 70°, find its consecutive interior angle."
    },
    "steps": [
     {
      "bg": "Определяме, че съответният ъгъл е равен на вътрешния ъгъл от същата страна на пресечната права.",
      "en": "Identify that the corresponding angle is equal to the interior angle on the same side of the transversal."
     },
     {
      "bg": "Използваме свойството на прилежащите ъгли: тяхната сума е 180°.",
      "en": "Use the property of consecutive interior angles: their sum is 180°."
     },
     {
      "bg": "Пресмятаме: 180° − 70° = 110°.",
      "en": "Calculate: 180° − 70° = 110°."
     }
    ],
    "why": {
     "bg": "Прилежащите ъгли винаги се допълват до 180 градуса при успоредни прави.",
     "en": "Consecutive interior angles are always supplementary (sum to 180 degrees) when lines are parallel."
    }
   },
   {
    "task": {
     "bg": "Правите m и n са успоредни. Ако вътрешен кръстен ъгъл е x, а неговият съседен е 130°, намерете x.",
     "en": "Lines m and n are parallel. If an alternate interior angle is x and its adjacent angle is 130°, find x."
    },
    "steps": [
     {
      "bg": "Съседните ъгли лежат на една права и сумата им е 180°.",
      "en": "Adjacent angles lie on a straight line and their sum is 180°."
     },
     {
      "bg": "Намираме ъгъла: 180° − 130° = 50°.",
      "en": "Find the angle: 180° − 130° = 50°."
     },
     {
      "bg": "Тъй като x е кръстен на този ъгъл (или е същият ъгъл), x = 50°.",
      "en": "Since x is an alternate angle (or the angle itself), x = 50°."
     }
    ],
    "why": {
     "bg": "Свойството на съседните ъгли е фундаментално за намиране на стойности при пресичане на прави.",
     "en": "The property of adjacent angles is fundamental for finding values when lines intersect."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно идентифициране на ъглите: Бъркане на кръстни с прилежащи ъгли.",
    "en": "Incorrect angle identification: Confusing alternate angles with consecutive interior angles."
   },
   {
    "bg": "Приемане, че ъглите са равни, без правите да са доказано успоредни.",
    "en": "Assuming angles are equal without the lines being proven parallel."
   },
   {
    "bg": "Забравяне, че сумата на прилежащите ъгли е 180°, а не че са равни.",
    "en": "Forgetting that the sum of consecutive interior angles is 180°, rather than them being equal."
   }
  ]
 },
 "percentapp": {
  "topicId": "percentapp",
  "idea": {
   "bg": "Процентът е една стотна част от дадено число, която използваме за изчисляване на промени в цени или банкови средства. Отстъпката намалява първоначалната стойност, докато лихвата добавя стойност върху депозиран или зает капитал.",
   "en": "A percent is one-hundredth part of a number, used to calculate changes in prices or bank funds. A discount reduces the initial value, while interest adds value to a deposited or borrowed capital."
  },
  "why": {
   "bg": "Методът работи, защото превръща процентите в десетични дроби или части от цялото, което ни позволява директно да умножаваме и намираме конкретната парична сума на изменението.",
   "en": "The method works by converting percentages into decimals or fractions of a whole, allowing us to directly multiply and find the specific monetary amount of the change."
  },
  "rules": [
   {
    "bg": "Намиране на отстъпка: Отстъпка = Процент · Стара цена (напр. 20% от 50 лв е 0,20 · 50 = 10 лв).",
    "en": "Finding discount: Discount = Percent · Original price (e.g., 20% of 50 BGN is 0.20 · 50 = 10 BGN)."
   },
   {
    "bg": "Нова цена при отстъпка: Нова цена = Стара цена − Отстъпка (напр. 50 − 10 = 40 лв).",
    "en": "New price after discount: New price = Original price − Discount (e.g., 50 − 10 = 40 BGN)."
   },
   {
    "bg": "Намиране на проста лихва: Лихва = Капитал · Лихвен процент (напр. 2% от 1000 лв е 0,02 · 1000 = 20 лв).",
    "en": "Finding simple interest: Interest = Capital · Interest rate (e.g., 2% of 1000 BGN is 0.02 · 1000 = 20 BGN)."
   },
   {
    "bg": "Крайна сума: Крайна сума = Капитал + Лихва (напр. 1000 + 20 = 1020 лв).",
    "en": "Final amount: Final amount = Capital + Interest (e.g., 1000 + 20 = 1020 BGN)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Яке струва 80 лв, но има отстъпка от 15%. Каква е новата цена?",
     "en": "A jacket costs 80 BGN but has a 15% discount. What is the new price?"
    },
    "steps": [
     {
      "bg": "Стъпка 1: Превръщаме процента в число: 15% = 15/100 = 0,15.",
      "en": "Step 1: Convert the percentage to a number: 15% = 15/100 = 0.15."
     },
     {
      "bg": "Стъпка 2: Изчисляваме сумата на отстъпката: 80 · 0,15 = 12 лв.",
      "en": "Step 2: Calculate the discount amount: 80 · 0.15 = 12 BGN."
     },
     {
      "bg": "Стъпка 3: Изваждаме отстъпката от началната цена: 80 − 12 = 68 лв.",
      "en": "Step 3: Subtract the discount from the initial price: 80 − 12 = 68 BGN."
     }
    ],
    "why": {
     "bg": "Намираме колко точно спестяваме и го махаме от първоначалния разход.",
     "en": "We find exactly how much we save and remove it from the initial cost."
    }
   },
   {
    "task": {
     "bg": "Внасяте 2000 лв в банка при 3% годишна лихва. Колко лева ще имате след една година?",
     "en": "You deposit 2000 BGN in a bank at 3% annual interest. How much money will you have after one year?"
    },
    "steps": [
     {
      "bg": "Стъпка 1: Изчисляваме сумата на лихвата: 2000 · 0,03 = 60 лв.",
      "en": "Step 1: Calculate the interest amount: 2000 · 0.03 = 60 BGN."
     },
     {
      "bg": "Стъпка 2: Добавяме лихвата към началния капитал: 2000 + 60 = 2060 лв.",
      "en": "Step 2: Add the interest to the initial capital: 2000 + 60 = 2060 BGN."
     }
    ],
    "why": {
     "bg": "Лихвата е бонусът, който банката плаща за ползването на вашите пари.",
     "en": "Interest is the bonus that the bank pays for using your money."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно превръщане на проценти (напр. 5% да се смята като 0,5 вместо 0,05).",
    "en": "Incorrect percentage conversion (e.g., treating 5% as 0.5 instead of 0.05)."
   },
   {
    "bg": "Забравяне на последната стъпка: намиране само на отстъпката/лихвата без добавяне/изваждане от основната сума.",
    "en": "Forgetting the final step: finding only the discount/interest without adding/subtracting from the principal amount."
   },
   {
    "bg": "Прилагане на отстъпка върху вече намалена цена без преизчисляване на базата.",
    "en": "Applying a discount on an already reduced price without recalculating the base."
   }
  ]
 },
 "polyadd": {
  "topicId": "polyadd",
  "idea": {
   "bg": "Събирането на многочлени е процес на обединяване на два или повече алгебрични израза в един чрез сумиране на техните членове. Крайната цел е получаването на многочлен в нормален вид чрез извършване на действие събиране.",
   "en": "Adding polynomials is the process of combining two or more algebraic expressions into one by summing their terms. The final goal is to obtain a polynomial in standard form by performing the addition operation."
  },
  "why": {
   "bg": "Методът работи благодарение на дистрибутивното (разпределителното) свойство на числата, което ни позволява да групираме и събираме коефициентите пред еднаквите променливи части.",
   "en": "The method works due to the distributive property of numbers, which allows us to group and add the coefficients of terms with identical variable parts."
  },
  "rules": [
   {
    "bg": "Разкриване на скобите: Ако пред скобите има знак '+', знаците на членовете вътре не се променят. Пример: (2x + 3) + (x - 1) = 2x + 3 + x - 1.",
    "en": "Removing brackets: If there is a '+' sign before the brackets, the signs of the terms inside remain unchanged. Example: (2x + 3) + (x - 1) = 2x + 3 + x - 1."
   },
   {
    "bg": "Групиране на подобни членове: Подреждат се един до друг членовете, които имат абсолютно еднакви променливи и степени. Пример: 2x + x + 3 - 1.",
    "en": "Grouping like terms: Arrange terms that have identical variables and exponents next to each other. Example: 2x + x + 3 - 1."
   },
   {
    "bg": "Привеждане (събиране): Събират се коефициентите на подобните членове, а променливата част остава същата. Пример: (2+1)x + (3-1) = 3x + 2.",
    "en": "Combining terms: Add the coefficients of the like terms while keeping the variable part the same. Example: (2+1)x + (3-1) = 3x + 2."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Съберете многочлените A = 3x² - 5x + 2 и B = 2x² + 7x - 8.",
     "en": "Add the polynomials A = 3x² - 5x + 2 and B = 2x² + 7x - 8."
    },
    "steps": [
     {
      "bg": "Записваме сумата и разкриваме скобите: 3x² - 5x + 2 + 2x² + 7x - 8.",
      "en": "Write the sum and remove brackets: 3x² - 5x + 2 + 2x² + 7x - 8."
     },
     {
      "bg": "Групираме подобните членове: (3x² + 2x²) + (-5x + 7x) + (2 - 8) = 5x² + 2x - 6.",
      "en": "Group like terms: (3x² + 2x²) + (-5x + 7x) + (2 - 8) = 5x² + 2x - 6."
     }
    ],
    "why": {
     "bg": "Членовете със степен 2 се събират помежду си, както и тези от първа степен и свободните числа.",
     "en": "Terms with degree 2 are added together, as are terms of the first degree and constant terms."
    }
   },
   {
    "task": {
     "bg": "Намерете сбора на P = 4xy + 2y и Q = -3xy + 5.",
     "en": "Find the sum of P = 4xy + 2y and Q = -3xy + 5."
    },
    "steps": [
     {
      "bg": "Подреждаме израза: 4xy + 2y + (-3xy) + 5 = 4xy + 2y - 3xy + 5.",
      "en": "Arrange the expression: 4xy + 2y + (-3xy) + 5 = 4xy + 2y - 3xy + 5."
     },
     {
      "bg": "Привеждаме подобните членове 4xy и -3xy: (4 - 3)xy + 2y + 5 = xy + 2y + 5.",
      "en": "Combine like terms 4xy and -3xy: (4 - 3)xy + 2y + 5 = xy + 2y + 5."
     }
    ],
    "why": {
     "bg": "Само членовете с еднаква буквена част 'xy' могат да се съкратят или съберат.",
     "en": "Only terms with the same literal part 'xy' can be reduced or added."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Събиране на различни степени: Често се греши като се събира 2x + 3x² = 5x³, което е грешно. Различните степени не са подобни членове.",
    "en": "Adding different powers: A common mistake is adding 2x + 3x² = 5x³, which is wrong. Different powers are not like terms."
   },
   {
    "bg": "Грешки със знаците: Забравяне, че знакът пред члена принадлежи на самия член при прегрупиране.",
    "en": "Sign errors: Forgetting that the sign in front of a term belongs to the term itself when regrouping."
   },
   {
    "bg": "Промяна на степента при събиране: При събиране се променят само коефициентите, не и степените на променливите.",
    "en": "Changing the exponent during addition: When adding, only the coefficients change, not the exponents of the variables."
   }
  ]
 },
 "polymul": {
  "topicId": "polymul",
  "idea": {
   "bg": "Умножението на многочлени е процес, при който всеки член на единия многочлен се умножава по всеки член на другия. Резултатът е нов многочлен, който се привежда в нормален вид чрез събиране на подобните членове.",
   "en": "Multiplying polynomials is a process where each term of the first polynomial is multiplied by every term of the second. The result is a new polynomial that is simplified by combining like terms."
  },
  "why": {
   "bg": "Този метод се основава на дистрибутивното (разпределителното) свойство на умножението спрямо събирането: a · (b + c) = a · b + a · c. Когато имаме повече членове, прилагаме това свойство многократно, докато всяка комбинация бъде умножена.",
   "en": "This method is based on the distributive property of multiplication over addition: a · (b + c) = a · b + a · c. When there are multiple terms, we apply this property repeatedly until every combination is multiplied."
  },
  "rules": [
   {
    "bg": "Умножете всеки член на първия многочлен по всеки член на втория: (a + b)(c + d) = a·c + a·d + b·c + b·d.",
    "en": "Multiply each term of the first polynomial by each term of the second: (a + b)(c + d) = a·c + a·d + b·c + b·d."
   },
   {
    "bg": "Внимавайте за знаците: плюс по минус дава минус, а минус по минус дава плюс.",
    "en": "Watch the signs: plus times minus gives minus, and minus times minus gives plus."
   },
   {
    "bg": "При умножение на променливи с еднакви основи, съберете техните степени: x² · x³ = x⁵.",
    "en": "When multiplying variables with the same base, add their exponents: x² · x³ = x⁵."
   },
   {
    "bg": "Винаги правете приведение на подобните членове накрая, за да получите нормален вид.",
    "en": "Always combine like terms at the end to obtain the standard form of the polynomial."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Умножете многочлените: (x + 3)(x − 5)",
     "en": "Multiply the polynomials: (x + 3)(x − 5)"
    },
    "steps": [
     {
      "bg": "Умножаваме членовете: x·x + x·(−5) + 3·x + 3·(−5) = x² − 5x + 3x − 15",
      "en": "Multiply the terms: x·x + x·(−5) + 3·x + 3·(−5) = x² − 5x + 3x − 15"
     },
     {
      "bg": "Привеждаме подобните членове (−5x + 3x): x² − 2x − 15",
      "en": "Combine like terms (−5x + 3x): x² − 2x − 15"
     }
    ],
    "why": {
     "bg": "Прилагаме правилото за всеки член и внимаваме за отрицателния знак пред 5.",
     "en": "We apply the rule for each term and pay attention to the negative sign in front of 5."
    }
   },
   {
    "task": {
     "bg": "Опростете израза: (2a − 1)(a² + 4)",
     "en": "Simplify the expression: (2a − 1)(a² + 4)"
    },
    "steps": [
     {
      "bg": "Разкриваме скобите: 2a·a² + 2a·4 + (−1)·a² + (−1)·4",
      "en": "Expand the brackets: 2a·a² + 2a·4 + (−1)·a² + (−1)·4"
     },
     {
      "bg": "Изчисляваме и подреждаме по степени: 2a³ + 8a − a² − 4 = 2a³ − a² + 8a − 4",
      "en": "Calculate and arrange by exponents: 2a³ + 8a − a² − 4 = 2a³ − a² + 8a − 4"
     }
    ],
    "why": {
     "bg": "Степента на променливата 'a' се увеличава, защото a¹ · a² = a³.",
     "en": "The degree of the variable 'a' increases because a¹ · a² = a³."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне на знака минус при умножение: например −3 · (x − 2) да е −3x − 6 вместо −3x + 6.",
    "en": "Forgetting the minus sign during multiplication: for example −3 · (x − 2) becoming −3x − 6 instead of −3x + 6."
   },
   {
    "bg": "Умножаване само на първите членове в скобите и пренебрегване на останалите.",
    "en": "Multiplying only the first terms in the brackets and ignoring the others."
   },
   {
    "bg": "Грешно събиране на степени: например x² · x³ да се сметне като x⁶ вместо x⁵.",
    "en": "Incorrectly adding exponents: for example calculating x² · x³ as x⁶ instead of x⁵."
   }
  ]
 },
 "primes": {
  "topicId": "primes",
  "idea": {
   "bg": "Простите числа са естествени числа, по-големи от 1, които се делят само на 1 и на себе си. Разлагането е представяне на съставно число като произведение от прости множители.",
   "en": "Prime numbers are natural numbers greater than 1 that are divisible only by 1 and themselves. Factorisation is the process of representing a composite number as a product of prime factors."
  },
  "why": {
   "bg": "Основната теорема на аритметиката гарантира, че всяко естествено число може да бъде представено по единствен начин като произведение от прости числа, което служи като 'ДНК' на числото.",
   "en": "The Fundamental Theorem of Arithmetic guarantees that every natural number can be uniquely represented as a product of prime numbers, acting like the 'DNA' of the number."
  },
  "rules": [
   {
    "bg": "Просто число е число с точно два делителя (напр. 2, 3, 5, 7, 11). Числото 1 не е нито просто, нито съставно.",
    "en": "A prime number has exactly two divisors (e.g., 2, 3, 5, 7, 11). The number 1 is neither prime nor composite."
   },
   {
    "bg": "При разлагане винаги започваме от най-малкото възможно просто число (обикновено 2, 3 или 5) и делим, докато получим 1.",
    "en": "When factorising, always start with the smallest possible prime number (usually 2, 3, or 5) and divide until you reach 1."
   },
   {
    "bg": "Записваме резултата чрез степени за по-кратко: 2 · 2 · 2 = 2³.",
    "en": "Write the result using powers for brevity: 2 · 2 · 2 = 2³."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Разложете числото 60 на прости множители.",
     "en": "Factorise the number 60 into prime factors."
    },
    "steps": [
     {
      "bg": "60 : 2 = 30",
      "en": "60 : 2 = 30"
     },
     {
      "bg": "30 : 2 = 15",
      "en": "30 : 2 = 15"
     },
     {
      "bg": "15 : 3 = 5",
      "en": "15 : 3 = 5"
     },
     {
      "bg": "5 : 5 = 1",
      "en": "5 : 5 = 1"
     }
    ],
    "why": {
     "bg": "60 = 2 · 2 · 3 · 5 = 2² · 3 · 5",
     "en": "60 = 2 · 2 · 3 · 5 = 2² · 3 · 5"
    }
   },
   {
    "task": {
     "bg": "Разложете числото 84 на прости множители.",
     "en": "Factorise the number 84 into prime factors."
    },
    "steps": [
     {
      "bg": "84 : 2 = 42",
      "en": "84 : 2 = 42"
     },
     {
      "bg": "42 : 2 = 21",
      "en": "42 : 2 = 21"
     },
     {
      "bg": "21 : 3 = 7",
      "en": "21 : 3 = 7"
     },
     {
      "bg": "7 : 7 = 1",
      "en": "7 : 7 = 1"
     }
    ],
    "why": {
     "bg": "84 = 2 · 2 · 3 · 7 = 2² · 3 · 7",
     "en": "84 = 2 · 2 · 3 · 7 = 2² · 3 · 7"
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Използване на съставни числа в разлагането (например 60 = 6 · 10 вместо 2² · 3 · 5).",
    "en": "Using composite numbers in the factorisation (e.g., 60 = 6 · 10 instead of 2² · 3 · 5)."
   },
   {
    "bg": "Считане на числото 1 за просто число.",
    "en": "Considering the number 1 to be a prime number."
   },
   {
    "bg": "Пропускане на множител при повтарящи се числа (забравяне на степента).",
    "en": "Missing a factor when numbers repeat (forgetting the exponent)."
   }
  ]
 },
 "prism": {
  "topicId": "prism",
  "idea": {
   "bg": "Правоъгълният паралелепипед и призмата са триизмерни геометрични фигури с две успоредни и еднакви основи. Те са изградени от плоски стени, които се пресичат в ръбове и върхове.",
   "en": "A rectangular prism and a general prism are three-dimensional geometric figures with two parallel and congruent bases. They are composed of flat faces that intersect at edges and vertices."
  },
  "why": {
   "bg": "Изчисленията се базират на сбора от лицата на всички повърхнини и произведението на основата с височината, което отразява запълненото пространство.",
   "en": "Calculations are based on the sum of the areas of all surfaces and the product of the base area with the height, which reflects the occupied space."
  },
  "rules": [
   {
    "bg": "Лице на околна повърхнина (S): S = P · h, където P е периметърът на основата, а h е височината.",
    "en": "Lateral surface area (S): S = P · h, where P is the perimeter of the base and h is the height."
   },
   {
    "bg": "Лице на пълна повърхнина (S1): S1 = S + 2 · B, където B е лицето на основата.",
    "en": "Total surface area (S1): S1 = S + 2 · B, where B is the area of the base."
   },
   {
    "bg": "Обем (V): V = B · h. За правоъгълен паралелепипед V = a · b · c.",
    "en": "Volume (V): V = B · h. For a rectangular prism V = a · b · c."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете обема на правоъгълен паралелепипед с размери a = 5 cm, b = 4 cm и c = 10 cm.",
     "en": "Find the volume of a rectangular prism with dimensions a = 5 cm, b = 4 cm, and c = 10 cm."
    },
    "steps": [
     {
      "bg": "Използваме формулата за обем V = a · b · c.",
      "en": "Use the volume formula V = a · b · c."
     },
     {
      "bg": "Заместваме стойностите: V = 5 · 4 · 10.",
      "en": "Substitute the values: V = 5 · 4 · 10."
     },
     {
      "bg": "Пресмятаме: V = 20 · 10 = 200 cm³.",
      "en": "Calculate: V = 20 · 10 = 200 cm³."
     }
    ],
    "why": {
     "bg": "Обемът е произведение на трите измерения на тялото.",
     "en": "Volume is the product of the three dimensions of the solid."
    }
   },
   {
    "task": {
     "bg": "Пресметнете пълната повърхнина на правилна четириъгълна призма с основен ръб a = 3 cm и височина h = 6 cm.",
     "en": "Calculate the total surface area of a regular quadrangular prism with base edge a = 3 cm and height h = 6 cm."
    },
    "steps": [
     {
      "bg": "Намираме лицето на основата B = a · a = 3 · 3 = 9 cm².",
      "en": "Find the base area B = a · a = 3 · 3 = 9 cm²."
     },
     {
      "bg": "Намираме околната повърхнина S = P · h = (4 · 3) · 6 = 12 · 6 = 72 cm².",
      "en": "Find the lateral area S = P · h = (4 · 3) · 6 = 12 · 6 = 72 cm²."
     },
     {
      "bg": "Намираме пълната повърхнина S1 = S + 2 · B = 72 + 2 · 9 = 72 + 18 = 90 cm².",
      "en": "Find the total surface area S1 = S + 2 · B = 72 + 2 · 9 = 72 + 18 = 90 cm²."
     }
    ],
    "why": {
     "bg": "Пълната повърхнина включва околните стени и двете еднакви основи.",
     "en": "Total surface area includes the lateral faces and the two identical bases."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне да се умножи лицето на основата по 2 при пресмятане на пълна повърхнина.",
    "en": "Forgetting to multiply the base area by 2 when calculating the total surface area."
   },
   {
    "bg": "Използване на грешни мерни единици (например cm² за обем вместо cm³).",
    "en": "Using incorrect units of measurement (e.g., cm² for volume instead of cm³)."
   },
   {
    "bg": "Объркване между периметър на основата и лице на основата във формулите.",
    "en": "Confusing the base perimeter with the base area in the formulas."
   }
  ]
 },
 "proportion": {
  "topicId": "proportion",
  "idea": {
   "bg": "Правата пропорционалност е зависимост, при която две величини се увеличават или намаляват с един и същ коефициент. Обратната пропорционалност означава, че когато едната величина расте, другата намалява съответния брой пъти.",
   "en": "Direct proportion is a relationship where two quantities increase or decrease by the same factor. Inverse proportion means that as one quantity grows, the other decreases by the corresponding factor."
  },
  "why": {
   "bg": "Методът се основава на постоянни съотношения: при правата пропорция частното y/x е константа (k), а при обратната - произведението x·y е константа (k).",
   "en": "The method is based on constant ratios: in direct proportion the quotient y/x is a constant (k), while in inverse proportion the product x·y is a constant (k)."
  },
  "rules": [
   {
    "bg": "Права пропорционалност: y = k·x. Ако 2 хляба струват 4 лв., 4 хляба струват 8 лв.",
    "en": "Direct proportion: y = k·x. If 2 loaves of bread cost 4 lv., 4 loaves will cost 8 lv."
   },
   {
    "bg": "Обратна пропорционалност: y = k:x. Ако 2 работници свършват работа за 4 часа, 4 работници ще я свършат за 2 часа.",
    "en": "Inverse proportion: y = k:x. If 2 workers finish a job in 4 hours, 4 workers will finish it in 2 hours."
   },
   {
    "bg": "При права пропорция съставяме равенство на отношения: x1/y1 = x2/y2.",
    "en": "In direct proportion, we set up an equality of ratios: x1/y1 = x2/y2."
   },
   {
    "bg": "При обратна пропорция съставяме равенство на произведения: x1·y1 = x2·y2.",
    "en": "In inverse proportion, we set up an equality of products: x1·y1 = x2·y2."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Ако 3 кг ябълки струват 6 лв., колко струват 5 кг?",
     "en": "If 3 kg of apples cost 6 lv., how much do 5 kg cost?"
    },
    "steps": [
     {
      "bg": "Определяме вида: повече ябълки = повече пари (права пропорция).",
      "en": "Identify the type: more apples = more money (direct proportion)."
     },
     {
      "bg": "Съставяме пропорцията: 3/6 = 5/x.",
      "en": "Set up the proportion: 3/6 = 5/x."
     },
     {
      "bg": "Намираме x: (6 · 5) : 3 = 30 : 3 = 10 лв.",
      "en": "Find x: (6 · 5) : 3 = 30 : 3 = 10 lv."
     }
    ],
    "why": {
     "bg": "Цената за 1 кг е постоянна (k = 2).",
     "en": "The price per 1 kg is constant (k = 2)."
    }
   },
   {
    "task": {
     "bg": "Кола изминава път за 4 часа със скорост 60 км/ч. За колко часа ще го измине със скорост 80 км/ч?",
     "en": "A car travels a distance in 4 hours at 60 km/h. How many hours will it take at 80 km/h?"
    },
    "steps": [
     {
      "bg": "Определяме вида: по-висока скорост = по-малко време (обратна пропорция).",
      "en": "Identify the type: higher speed = less time (inverse proportion)."
     },
     {
      "bg": "Съставяме равенство на произведенията: 4 · 60 = x · 80.",
      "en": "Set up the equality of products: 4 · 60 = x · 80."
     },
     {
      "bg": "Намираме x: 240 : 80 = 3 часа.",
      "en": "Find x: 240 : 80 = 3 hours."
     }
    ],
    "why": {
     "bg": "Общото разстояние е едно и също (k = 240 км).",
     "en": "The total distance remains the same (k = 240 km)."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Прилагане на кръстно правило (права пропорция) при задачи за време и работници (обратна пропорция).",
    "en": "Applying the cross-multiplication rule (direct proportion) to time and worker tasks (inverse proportion)."
   },
   {
    "bg": "Неправилно подреждане на величините в пропорцията (смесване на мерни единици).",
    "en": "Incorrectly arranging quantities in the proportion (mixing units of measurement)."
   },
   {
    "bg": "Забравяне да се провери дали логически отговорът трябва да е по-голям или по-малък.",
    "en": "Forgetting to check logically whether the answer should be larger or smaller."
   }
  ]
 },
 "pyramid": {
  "topicId": "pyramid",
  "idea": {
   "bg": "Пирамидата е многостен, съставен от основа (многоъгълник) и околни стени (триъгълници), които се събират в общ връх. Разстоянието от върха до равнината на основата се нарича височина на пирамидата.",
   "en": "A pyramid is a polyhedron formed by a polygonal base and triangular lateral faces that meet at a common vertex. The distance from the vertex to the base plane is called the height of the pyramid."
  },
  "why": {
   "bg": "Формулите за обем и повърхнина се основават на принципа, че обемът е точно една трета от този на призма със същата основа и височина, а пълната площ е сума от основата и околните триъгълници.",
   "en": "The formulas for volume and surface area are based on the principle that the volume is exactly one-third of a prism with the same base and height, while the total surface area is the sum of the base and the lateral triangles."
  },
  "rules": [
   {
    "bg": "Околна повърхнина (S) на правилна пирамида: S = (P · k) / 2, където P е периметърът на основата, а k е апотемата.",
    "en": "Lateral surface area (S) of a regular pyramid: S = (P · k) / 2, where P is the base perimeter and k is the slant height."
   },
   {
    "bg": "Пълна повърхнина (S1): S1 = S + B, където B е лицето на основата.",
    "en": "Total surface area (S1): S1 = S + B, where B is the area of the base."
   },
   {
    "bg": "Обем (V): V = (B · h) / 3, където h е височината на пирамидата.",
    "en": "Volume (V): V = (B · h) / 3, where h is the height of the pyramid."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете обема на правилна четириъгълна пирамида с основен ръб a = 6 cm и височина h = 10 cm.",
     "en": "Find the volume of a regular square pyramid with base edge a = 6 cm and height h = 10 cm."
    },
    "steps": [
     {
      "bg": "Пресмятаме лицето на основата (квадрат): B = a² = 6 · 6 = 36 cm².",
      "en": "Calculate the area of the square base: B = a² = 6 · 6 = 36 cm²."
     },
     {
      "bg": "Прилагаме формулата за обем: V = (B · h) / 3 = (36 · 10) / 3.",
      "en": "Apply the volume formula: V = (B · h) / 3 = (36 · 10) / 3."
     },
     {
      "bg": "Пресмятаме крайния резултат: V = 360 / 3 = 120 cm³.",
      "en": "Calculate the final result: V = 360 / 3 = 120 cm³."
     }
    ],
    "why": {
     "bg": "Обемът винаги изисква лицето на основата и перпендикулярната височина към нея.",
     "en": "Volume always requires the area of the base and the perpendicular height to it."
    }
   },
   {
    "task": {
     "bg": "Намерете околната повърхнина на правилна триъгълна пирамида с основен ръб a = 8 cm и апотема k = 5 cm.",
     "en": "Find the lateral surface area of a regular triangular pyramid with base edge a = 8 cm and slant height k = 5 cm."
    },
    "steps": [
     {
      "bg": "Намираме периметъра на основата: P = 3 · a = 3 · 8 = 24 cm.",
      "en": "Find the perimeter of the base: P = 3 · a = 3 · 8 = 24 cm."
     },
     {
      "bg": "Прилагаме формулата за околна повърхнина: S = (P · k) / 2 = (24 · 5) / 2.",
      "en": "Apply the lateral area formula: S = (P · k) / 2 = (24 · 5) / 2."
     },
     {
      "bg": "Пресмятаме: S = 120 / 2 = 60 cm².",
      "en": "Calculate: S = 120 / 2 = 60 cm²."
     }
    ],
    "why": {
     "bg": "Околната повърхнина на правилна пирамида е сбор от лицата на еднакви равнобедрени триъгълници.",
     "en": "The lateral surface area of a regular pyramid is the sum of the areas of congruent isosceles triangles."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Често се бърка височината на пирамидата (h) с апотемата на околната стена (k).",
    "en": "The height of the pyramid (h) is often confused with the slant height of the lateral face (k)."
   },
   {
    "bg": "Забравяне на делението на 3 при пресмятане на обем, което води до обем на призма.",
    "en": "Forgetting to divide by 3 when calculating volume, which results in the volume of a prism."
   },
   {
    "bg": "Неправилно използване на формулата за околна повърхнина при неправилни пирамиди.",
    "en": "Incorrectly using the lateral surface area formula for non-regular pyramids."
   }
  ]
 },
 "quadineq": {
  "topicId": "quadineq",
  "idea": {
   "bg": "Квадратното неравенство е неравенство от вида ax² + bx + c > 0 (или <, ≥, ≤), където a ≠ 0. Решаването му означава да намерим интервалите от стойности за x, които го превръщат в вярно числово твърдение.",
   "en": "A quadratic inequality is an inequality of the form ax² + bx + c > 0 (or <, ≥, ≤), where a ≠ 0. Solving it means finding the intervals of x-values that make the inequality a true numerical statement."
  },
  "why": {
   "bg": "Методът работи, защото квадратната функция е парабола и нейният знак се променя само в точките, където тя пресича абсцисната ос (корените на уравнението). Чрез разлагане на множители или графичен анализ лесно определяме къде стойностите са положителни или отрицателни.",
   "en": "The method works because a quadratic function is a parabola, and its sign changes only at the points where it crosses the x-axis (the roots of the equation). By factoring or graphical analysis, we easily determine where the values are positive or negative."
  },
  "rules": [
   {
    "bg": "Приведете неравенството до вида ax² + bx + c > 0 и намерете корените x1 и x2 на съответното квадратно уравнение.",
    "en": "Reduce the inequality to the form ax² + bx + c > 0 and find the roots x1 and x2 of the corresponding quadratic equation."
   },
   {
    "bg": "Разложете квадратния тричлен на множители: a(x − x1)(x − x2) > 0.",
    "en": "Factor the quadratic trinomial: a(x − x1)(x − x2) > 0."
   },
   {
    "bg": "Използвайте метода на интервалите или скица на парабола: при a > 0 параболата е обърната нагоре, а знаците в интервалите са (+, −, +).",
    "en": "Use the interval method or a parabola sketch: for a > 0, the parabola opens upward, and the signs in the intervals are (+, −, +)."
   },
   {
    "bg": "Ако дискриминантата D < 0, изразът има един и същ знак като коефициента 'a' за всяко x.",
    "en": "If the discriminant D < 0, the expression has the same sign as the coefficient 'a' for all x."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Решете неравенството: x² − 5x + 6 > 0",
     "en": "Solve the inequality: x² − 5x + 6 > 0"
    },
    "steps": [
     {
      "bg": "Намираме корените на x² − 5x + 6 = 0: x1 = 2, x2 = 3.",
      "en": "Find the roots of x² − 5x + 6 = 0: x1 = 2, x2 = 3."
     },
     {
      "bg": "Нанасяме корените върху числовата ос. Тъй като a = 1 > 0, знаците са + в (−∞, 2), − в (2, 3) и + в (3, +∞).",
      "en": "Mark the roots on the number line. Since a = 1 > 0, the signs are + in (−∞, 2), − in (2, 3), and + in (3, +∞)."
     },
     {
      "bg": "Търсим стойностите, за които изразът е > 0. Решението е x ∈ (−∞, 2) ∪ (3, +∞).",
      "en": "We look for values where the expression is > 0. The solution is x ∈ (−∞, 2) ∪ (3, +∞)."
     }
    ],
    "why": {
     "bg": "Тъй като търсим строго по-голямо от нула, използваме кръгли скоби и не включваме корените.",
     "en": "Since we are looking for strictly greater than zero, we use parentheses and do not include the roots."
    }
   },
   {
    "task": {
     "bg": "Решете неравенството: −x² + 4x − 4 ≤ 0",
     "en": "Solve the inequality: −x² + 4x − 4 ≤ 0"
    },
    "steps": [
     {
      "bg": "Умножаваме по (−1) и обръщаме знака: x² − 4x + 4 ≥ 0.",
      "en": "Multiply by (−1) and flip the sign: x² − 4x + 4 ≥ 0."
     },
     {
      "bg": "Това е точен квадрат: (x − 2)² ≥ 0.",
      "en": "This is a perfect square: (x − 2)² ≥ 0."
     },
     {
      "bg": "Всеки реално число на квадрат е ≥ 0.",
      "en": "Any real number squared is ≥ 0."
     }
    ],
    "why": {
     "bg": "Решението е всяко x, тъй като квадратът на всяко число не е отрицателен.",
     "en": "The solution is every x, as the square of any number is non-negative."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне да се обърне знака на неравенството при умножение или деление с отрицателно число.",
    "en": "Forgetting to flip the inequality sign when multiplying or dividing by a negative number."
   },
   {
    "bg": "Неправилно определяне на вида на скобите (кръгли при строго неравенство, квадратни при нестрого).",
    "en": "Incorrectly determining the type of brackets (parentheses for strict inequalities, square brackets for non-strict)."
   },
   {
    "bg": "Грешно подреждане на знаците върху числовата ос, когато водещият коефициент 'a' е отрицателен.",
    "en": "Wrong sign order on the number line when the leading coefficient 'a' is negative."
   }
  ]
 },
 "quadtypes": {
  "topicId": "quadtypes",
  "idea": {
   "bg": "Сборът от вътрешните ъгли на всеки четириъгълник е 360 градуса. Това се дължи на факта, че всеки четириъгълник може да бъде разделен на два триъгълника.",
   "en": "The sum of the interior angles of any quadrilateral is 360 degrees. This is because every quadrilateral can be split into two triangles."
  },
  "why": {
   "bg": "Тъй като всеки четириъгълник се състои от два триъгълника и сборът от ъглите във всеки триъгълник е 180°, то общият сбор е 2 · 180° = 360°.",
   "en": "Since any quadrilateral consists of two triangles and the sum of angles in each triangle is 180°, the total sum is 2 · 180° = 360°."
  },
  "rules": [
   {
    "bg": "Сбор на ъгли: alpha + beta + gamma + delta = 360°.",
    "en": "Sum of angles: alpha + beta + gamma + delta = 360°."
   },
   {
    "bg": "В успоредник: Сборът на прилежащите към една страна ъгли е 180°.",
    "en": "In a parallelogram: The sum of adjacent angles is 180°."
   },
   {
    "bg": "В равнобедрен трапец: Ъглите при всяка от основите са равни.",
    "en": "In an isosceles trapezoid: The angles at each base are equal."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете четвъртия ъгъл в четириъгълник, ако три от ъглите му са 70°, 110° и 85°.",
     "en": "Find the fourth angle in a quadrilateral if three of its angles are 70°, 110°, and 85°."
    },
    "steps": [
     {
      "bg": "Събираме трите дадени ъгъла: 70 + 110 + 85 = 265°.",
      "en": "Add the three given angles: 70 + 110 + 85 = 265°."
     },
     {
      "bg": "Изваждаме получения сбор от 360°: 360 − 265 = 95°.",
      "en": "Subtract the sum from 360°: 360 − 265 = 95°."
     }
    ],
    "why": {
     "bg": "Използваме основното свойство, че сумата на всички ъгли е 360°.",
     "en": "We use the fundamental property that the sum of all angles is 360°."
    }
   },
   {
    "task": {
     "bg": "В успоредник един от ъглите е 60°. Намерете останалите три ъгъла.",
     "en": "In a parallelogram, one angle is 60°. Find the other three angles."
    },
    "steps": [
     {
      "bg": "Срещуположният ъгъл е равен на дадения: 60°.",
      "en": "The opposite angle is equal to the given one: 60°."
     },
     {
      "bg": "Прилежащият ъгъл се намира като 180 − 60 = 120°.",
      "en": "The adjacent angle is found as 180 − 60 = 120°."
     },
     {
      "bg": "Четвъртият ъгъл е срещуположен на втория и е 120°.",
      "en": "The fourth angle is opposite to the second one and is 120°."
     }
    ],
    "why": {
     "bg": "В успоредника срещуположните ъгли са равни, а сборът на прилежащите е 180°.",
     "en": "In a parallelogram, opposite angles are equal, and the sum of adjacent angles is 180°."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно използване на 180° вместо 360° за сбора на ъглите.",
    "en": "Incorrectly using 180° instead of 360° for the sum of angles."
   },
   {
    "bg": "Приемане, че всички четириъгълници имат равни срещуположни ъгли (това важи само за успоредници).",
    "en": "Assuming all quadrilaterals have equal opposite angles (this only applies to parallelograms)."
   }
  ]
 },
 "rationalize": {
  "topicId": "rationalize",
  "idea": {
   "bg": "Рационализирането е преобразуване на дроб, при което ирационалните числа (корени) се премахват от знаменателя. Това се постига чрез умножаване на числителя и знаменателя с подходящ израз, така че в знаменателя да се получи рационално число.",
   "en": "Rationalising is the process of transforming a fraction to remove irrational numbers (roots) from the denominator. This is achieved by multiplying both numerator and denominator by a suitable expression to obtain a rational number below."
  },
  "why": {
   "bg": "Методът се основава на основното свойство на дробите (умножаване по 1 не променя стойността) и формулите за съкратено умножение, които превръщат корените в цели степени.",
   "en": "The method is based on the fundamental property of fractions (multiplying by 1 doesn't change value) and algebraic identities that turn roots into integer powers."
  },
  "rules": [
   {
    "bg": "За знаменател тип √a: Умножете числителя и знаменателя по √a. Пример: 1/√2 = √2/2.",
    "en": "For denominator type √a: Multiply numerator and denominator by √a. Example: 1/√2 = √2/2."
   },
   {
    "bg": "За знаменател тип (√a + √b): Умножете по спрегнатия израз (√a − √b), за да ползвате (x+y)(x-y) = x² − y².",
    "en": "For denominator type (√a + √b): Multiply by the conjugate expression (√a − √b) to use (x+y)(x-y) = x² − y²."
   },
   {
    "bg": "За знаменател тип (√a − b): Умножете по (√a + b). Целта е винаги да се получи разлика от квадрати.",
    "en": "For denominator type (√a − b): Multiply by (√a + b). The goal is always to create a difference of squares."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Рационализирайте дробите: 6 / √3",
     "en": "Rationalise the fraction: 6 / √3"
    },
    "steps": [
     {
      "bg": "Умножаваме числителя и знаменателя по √3: (6 · √3) / (√3 · √3)",
      "en": "Multiply numerator and denominator by √3: (6 · √3) / (√3 · √3)"
     },
     {
      "bg": "Пресмятаме знаменателя: (√3)² = 3. Получаваме 6√3 / 3.",
      "en": "Calculate the denominator: (√3)² = 3. We get 6√3 / 3."
     },
     {
      "bg": "Съкращаваме 6 и 3: 2√3.",
      "en": "Simplify 6 and 3: 2√3."
     }
    ],
    "why": {
     "bg": "Умножаването на корен със себе си го превръща в подкоренната величина.",
     "en": "Multiplying a square root by itself results in the value under the radical."
    }
   },
   {
    "task": {
     "bg": "Рационализирайте дробите: 2 / (√5 − 1)",
     "en": "Rationalise the fraction: 2 / (√5 − 1)"
    },
    "steps": [
     {
      "bg": "Умножаваме по спрегнатия израз (√5 + 1): 2·(√5 + 1) / ((√5 − 1)(√5 + 1))",
      "en": "Multiply by the conjugate (√5 + 1): 2·(√5 + 1) / ((√5 − 1)(√5 + 1))"
     },
     {
      "bg": "Прилагаме (a−b)(a+b) = a² − b² в знаменателя: (√5)² − 1² = 5 − 1 = 4.",
      "en": "Apply (a−b)(a+b) = a² − b² in the denominator: (√5)² − 1² = 5 − 1 = 4."
     },
     {
      "bg": "Дробта става 2(√5 + 1) / 4. След съкращение: (√5 + 1) / 2.",
      "en": "The fraction becomes 2(√5 + 1) / 4. After simplifying: (√5 + 1) / 2."
     }
    ],
    "why": {
     "bg": "Спрегнатият израз премахва средното произведение и елиминира корена.",
     "en": "The conjugate expression eliminates the middle term and removes the radical."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Умножаване само на знаменателя, което променя стойността на числото.",
    "en": "Multiplying only the denominator, which changes the value of the number."
   },
   {
    "bg": "Грешно спрегнат израз: например използване на (√a − b) вместо (√a + b).",
    "en": "Incorrect conjugate: for example using (√a − b) instead of (√a + b)."
   },
   {
    "bg": "Забравяне на скобите при умножение на числителя с двучлен.",
    "en": "Forgetting brackets when multiplying the numerator by a binomial expression."
   }
  ]
 },
 "rectangle": {
  "topicId": "rectangle",
  "idea": {
   "bg": "Правоъгълникът е четириъгълник, на който всички ъгли са прави (по 90 градуса). Той е специален вид успоредник, чиито диагонали са равни по дължина.",
   "en": "A rectangle is a quadrilateral in which all angles are right angles (90 degrees). It is a special type of parallelogram whose diagonals are equal in length."
  },
  "why": {
   "bg": "Свойствата на правоъгълника произтичат от факта, че той е успоредник с равни ъгли. Тъй като сумата на ъглите в четириъгълник е 360 градуса, всеки ъгъл трябва да бъде 90 градуса, което води до успоредност и еднаквост на срещуположните страни.",
   "en": "The properties of a rectangle derive from it being a parallelogram with equal angles. Since the sum of angles in a quadrilateral is 360 degrees, each angle must be 90 degrees, leading to parallelism and congruence of opposite sides."
  },
  "rules": [
   {
    "bg": "Срещуположните страни са равни и успоредни: AB = CD и AD = BC.",
    "en": "Opposite sides are equal and parallel: AB = CD and AD = BC."
   },
   {
    "bg": "Периметър P = 2·(a + b). Пример: Ако a=5, b=3, то P = 2·(5+3) = 16.",
    "en": "Perimeter P = 2·(a + b). Example: If a=5, b=3, then P = 2·(5+3) = 16."
   },
   {
    "bg": "Лице S = a·b. Пример: Ако a=5, b=3, то S = 5·3 = 15.",
    "en": "Area S = a·b. Example: If a=5, b=3, then S = 5·3 = 15."
   },
   {
    "bg": "Диагоналите са равни (d1 = d2) и се разполовяват в пресечната точка.",
    "en": "Diagonals are equal (d1 = d2) and bisect each other at the intersection point."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете страната b на правоъгълник, ако лицето му S = 48 см² и страната a = 8 см.",
     "en": "Find side b of a rectangle if its area S = 48 cm² and side a = 8 cm."
    },
    "steps": [
     {
      "bg": "Използваме формулата за лице S = a·b.",
      "en": "Use the area formula S = a·b."
     },
     {
      "bg": "Заместваме известните стойности: 48 = 8·b.",
      "en": "Substitute the known values: 48 = 8·b."
     },
     {
      "bg": "Разделяме двете страни на 8: b = 48:8 = 6 см.",
      "en": "Divide both sides by 8: b = 48:8 = 6 cm."
     }
    ],
    "why": {
     "bg": "Лицето е произведение от двете съседни страни, затова липсващата страна се намира чрез деление.",
     "en": "The area is the product of two adjacent sides, so the missing side is found by division."
    }
   },
   {
    "task": {
     "bg": "Пресметнете периметъра на правоъгълник със страни 7 см и 4 см.",
     "en": "Calculate the perimeter of a rectangle with sides 7 cm and 4 cm."
    },
    "steps": [
     {
      "bg": "Записваме формулата P = 2·a + 2·b или P = 2·(a + b).",
      "en": "Write down the formula P = 2·a + 2·b or P = 2·(a + b)."
     },
     {
      "bg": "Заместваме: P = 2·(7 + 4).",
      "en": "Substitute: P = 2·(7 + 4)."
     },
     {
      "bg": "Изчисляваме сумата в скобите: 7 + 4 = 11.",
      "en": "Calculate the sum in the brackets: 7 + 4 = 11."
     },
     {
      "bg": "Умножаваме по 2: P = 2·11 = 22 см.",
      "en": "Multiply by 2: P = 2·11 = 22 cm."
     }
    ],
    "why": {
     "bg": "Периметърът е сборът от дължините на всички четири страни.",
     "en": "The perimeter is the sum of the lengths of all four sides."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Объркване на формулите за периметър и лице (събиране вместо умножение).",
    "en": "Confusing the formulas for perimeter and area (adding instead of multiplying)."
   },
   {
    "bg": "Забравяне, че диагоналите на правоъгълника НЕ са задължително перпендикулярни (това е свойство на ромба).",
    "en": "Forgetting that the diagonals of a rectangle are NOT necessarily perpendicular (that is a property of a rhombus)."
   },
   {
    "bg": "Пропускане на коефициента 2 при изчисляване на периметъра (събиране само на две страни).",
    "en": "Omitting the factor of 2 when calculating the perimeter (adding only two sides)."
   }
  ]
 },
 "remdiv": {
  "topicId": "remdiv",
  "idea": {
   "bg": "Делението с остатък се извършва, когато едно число не може да се раздели точно на друго. Остатъкът е числото, което 'остава' и винаги е по-малко от делителя.",
   "en": "Division with remainder occurs when a number cannot be divided exactly by another. The remainder is the amount 'left over' and is always smaller than the divisor."
  },
  "why": {
   "bg": "Методът работи, защото представяме деленото като сбор от най-голямото кратно на делителя и една допълнителна добавка. Това съответства на разпределяне на предмети на равни групи с излишък.",
   "en": "The method works because we represent the dividend as a sum of the largest multiple of the divisor and an additional increment. This corresponds to distributing items into equal groups with a surplus."
  },
  "rules": [
   {
    "bg": "Ако a : b = c (ост. r), то a = b · c + r. Пример: 17 : 5 = 3 (ост. 2), защото 17 = 5 · 3 + 2.",
    "en": "If a : b = c (rem. r), then a = b · c + r. Example: 17 : 5 = 3 (rem. 2) because 17 = 5 · 3 + 2."
   },
   {
    "bg": "Остатъкът r винаги трябва да бъде по-малък от делителя b (0 ≤ r < b).",
    "en": "The remainder r must always be smaller than the divisor b (0 ≤ r < b)."
   },
   {
    "bg": "Ако остатъкът е 0, казваме, че числото се дели точно.",
    "en": "If the remainder is 0, we say the number is exactly divisible."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Разделете 26 на 4 с остатък.",
     "en": "Divide 26 by 4 with a remainder."
    },
    "steps": [
     {
      "bg": "Намираме най-голямото число до 26, което се дели на 4. Това е 24 (4 · 6 = 24).",
      "en": "Find the largest number up to 26 that is divisible by 4. That is 24 (4 · 6 = 24)."
     },
     {
      "bg": "Пресмятаме частното: 24 : 4 = 6.",
      "en": "Calculate the quotient: 24 : 4 = 6."
     },
     {
      "bg": "Изваждаме 24 от 26, за да намерим остатъка: 26 − 24 = 2.",
      "en": "Subtract 24 from 26 to find the remainder: 26 − 24 = 2."
     },
     {
      "bg": "Записваме резултата: 26 : 4 = 6 (ост. 2).",
      "en": "Write the result: 26 : 4 = 6 (rem. 2)."
     }
    ],
    "why": {
     "bg": "Проверка: 4 · 6 + 2 = 24 + 2 = 26. Условието 2 < 4 е изпълнено.",
     "en": "Check: 4 · 6 + 2 = 24 + 2 = 26. The condition 2 < 4 is met."
    }
   },
   {
    "task": {
     "bg": "Разделете 43 на 5 с остатък.",
     "en": "Divide 43 by 5 with a remainder."
    },
    "steps": [
     {
      "bg": "Най-близкото число до 43, делящо се на 5, е 40 (5 · 8 = 40).",
      "en": "The closest number to 43 divisible by 5 is 40 (5 · 8 = 40)."
     },
     {
      "bg": "Частното е 8, а остатъкът е 43 − 40 = 3.",
      "en": "The quotient is 8, and the remainder is 43 − 40 = 3."
     },
     {
      "bg": "Резултат: 43 : 5 = 8 (ост. 3).",
      "en": "Result: 43 : 5 = 8 (rem. 3)."
     }
    ],
    "why": {
     "bg": "Тъй като 3 е по-малко от 5, делението е извършено правилно.",
     "en": "Since 3 is smaller than 5, the division was performed correctly."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Получаване на остатък, който е по-голям или равен на делителя (например 17 : 5 = 2 ост. 7).",
    "en": "Getting a remainder that is larger than or equal to the divisor (e.g., 17 : 5 = 2 rem. 7)."
   },
   {
    "bg": "Забравяне да се добави остатъкът при проверката чрез умножение.",
    "en": "Forgetting to add the remainder when checking via multiplication."
   },
   {
    "bg": "Грешно определяне на най-голямото кратно число преди деленото.",
    "en": "Incorrectly identifying the largest multiple before the dividend."
   }
  ]
 },
 "rhombus": {
  "topicId": "rhombus",
  "idea": {
   "bg": "Ромбът е успоредник, на който всички страни са равни. Той съчетава свойствата на успоредника с уникални характеристики, произтичащи от неговата симетрия.",
   "en": "A rhombus is a parallelogram where all sides are equal. It combines the properties of a parallelogram with unique characteristics derived from its symmetry."
  },
  "why": {
   "bg": "Свойствата на ромба се основават на еднаквостта на триъгълниците, образувани от неговите диагонали, които са взаимно перпендикулярни и разполовяват ъглите му.",
   "en": "The properties of the rhombus are based on the congruence of the triangles formed by its diagonals, which are mutually perpendicular and bisect its angles."
  },
  "rules": [
   {
    "bg": "Всички страни са равни: AB = BC = CD = DA. Периметър P = 4 · a.",
    "en": "All sides are equal: AB = BC = CD = DA. Perimeter P = 4 · a."
   },
   {
    "bg": "Диагоналите са взаимно перпендикулярни (d1 ⊥ d2) и разполовяват ъглите на ромба.",
    "en": "The diagonals are mutually perpendicular (d1 ⊥ d2) and bisect the angles of the rhombus."
   },
   {
    "bg": "Лицето може да се пресметне като (d1 · d2) : 2 или a · h.",
    "en": "The area can be calculated as (d1 · d2) : 2 or a · h."
   },
   {
    "bg": "Сборът на два съседни ъгъла е 180°, а срещуположните ъгли са равни.",
    "en": "The sum of two adjacent angles is 180°, and the opposite angles are equal."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете лицето на ромб с диагонали 8 см и 6 см.",
     "en": "Find the area of a rhombus with diagonals of 8 cm and 6 cm."
    },
    "steps": [
     {
      "bg": "Записваме формулата за лице чрез диагонали: S = (d1 · d2) : 2.",
      "en": "Write the area formula using diagonals: S = (d1 · d2) : 2."
     },
     {
      "bg": "Заместваме стойностите: S = (8 · 6) : 2.",
      "en": "Substitute the values: S = (8 · 6) : 2."
     },
     {
      "bg": "Изчисляваме: S = 48 : 2 = 24 см².",
      "en": "Calculate: S = 48 : 2 = 24 cm²."
     }
    ],
    "why": {
     "bg": "Диагоналите разделят ромба на четири еднакви правоъгълни триъгълника.",
     "en": "The diagonals divide the rhombus into four congruent right-angled triangles."
    }
   },
   {
    "task": {
     "bg": "Намерете ъглите на ромб, ако един от ъглите му е 50°.",
     "en": "Find the angles of a rhombus if one of its angles is 50°."
    },
    "steps": [
     {
      "bg": "Срещуположният ъгъл е равен на дадения, следователно е 50°.",
      "en": "The opposite angle is equal to the given one, therefore it is 50°."
     },
     {
      "bg": "Съседният ъгъл се намира чрез изваждане от 180°: 180° − 50° = 130°.",
      "en": "The adjacent angle is found by subtracting from 180°: 180° − 50° = 130°."
     },
     {
      "bg": "Четвъртият ъгъл е срещуположен на втория, значи е 130°.",
      "en": "The fourth angle is opposite to the second one, so it is 130°."
     }
    ],
    "why": {
     "bg": "Ромбът е вид успоредник и притежава всички негови свойства за ъглите.",
     "en": "The rhombus is a type of parallelogram and possesses all its properties regarding angles."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно приемане, че диагоналите са равни (това е вярно само ако ромбът е квадрат).",
    "en": "Wrongly assuming that the diagonals are equal (this is only true if the rhombus is a square)."
   },
   {
    "bg": "Забравяне да се раздели на 2 при пресмятане на лице чрез диагонали.",
    "en": "Forgetting to divide by 2 when calculating the area using diagonals."
   },
   {
    "bg": "Объркване на ромб с правоъгълник (ромбът няма задължително прави ъгли).",
    "en": "Confusing a rhombus with a rectangle (a rhombus does not necessarily have right angles)."
   }
  ]
 },
 "rightmetric": {
  "topicId": "rightmetric",
  "idea": {
   "bg": "Метричните зависимости са формули, които свързват страните на правоъгълен триъгълник с техните проекции върху хипотенузата и височината към нея. Те позволяват лесно намиране на липсващи елементи, без да се използва Питагоровата теорема директно.",
   "en": "Metric relations are formulas that connect the sides of a right triangle with their projections onto the hypotenuse and the altitude to the hypotenuse. They allow for easy finding of missing elements without directly using the Pythagorean theorem."
  },
  "why": {
   "bg": "Методът работи поради подобието на триъгълниците, получени при спускане на височината към хипотенузата. Трите правоъгълни триъгълника (големият и двата малки) имат еднакви ъгли, което води до пропорционалност на техните страни.",
   "en": "The method works because of the similarity of the triangles formed by dropping the altitude to the hypotenuse. The three right triangles (the large one and the two smaller ones) share the same angles, leading to proportionality of their sides."
  },
  "rules": [
   {
    "bg": "Височината към хипотенузата на квадрат е равна на произведението от проекциите на катетите: h² = a1 · b1.",
    "en": "The square of the altitude to the hypotenuse is equal to the product of the projections of the legs: h² = a1 · b1."
   },
   {
    "bg": "Всеки катет на квадрат е равен на произведението от хипотенузата и неговата проекция: a² = c · a1 и b² = c · b1.",
    "en": "Each leg squared is equal to the product of the hypotenuse and its projection: a² = c · a1 and b² = c · b1."
   },
   {
    "bg": "Височината е равна на произведението на катетите, разделено на хипотенузата: h = (a · b) : c.",
    "en": "The altitude is equal to the product of the legs divided by the hypotenuse: h = (a · b) : c."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "В правоъгълен триъгълник проекциите на катетите върху хипотенузата са a1 = 2 cm и b1 = 8 cm. Намерете височината h.",
     "en": "In a right triangle, the projections of the legs onto the hypotenuse are a1 = 2 cm and b1 = 8 cm. Find the altitude h."
    },
    "steps": [
     {
      "bg": "Използваме формулата за височината: h² = a1 · b1.",
      "en": "Use the altitude formula: h² = a1 · b1."
     },
     {
      "bg": "Заместваме стойностите: h² = 2 · 8 = 16.",
      "en": "Substitute the values: h² = 2 · 8 = 16."
     },
     {
      "bg": "Извличаме корен квадратен: h = √16 = 4 cm.",
      "en": "Take the square root: h = √16 = 4 cm."
     }
    ],
    "why": {
     "bg": "Средногеометричното свойство на височината свързва частите на хипотенузата.",
     "en": "The geometric mean property of the altitude links the segments of the hypotenuse."
    }
   },
   {
    "task": {
     "bg": "Даден е правоъгълен триъгълник с хипотенуза c = 10 cm и проекция на катета a върху нея a1 = 3.6 cm. Намерете катета a.",
     "en": "Given a right triangle with hypotenuse c = 10 cm and projection of leg a onto it a1 = 3.6 cm. Find leg a."
    },
    "steps": [
     {
      "bg": "Използваме формулата за катет: a² = c · a1.",
      "en": "Use the leg formula: a² = c · a1."
     },
     {
      "bg": "Заместваме стойностите: a² = 10 · 3.6 = 36.",
      "en": "Substitute the values: a² = 10 · 3.6 = 36."
     },
     {
      "bg": "Намираме катета: a = √36 = 6 cm.",
      "en": "Find the leg: a = √36 = 6 cm."
     }
    ],
    "why": {
     "bg": "Катетът е среднопропорционален на цялата хипотенуза и своята проекция.",
     "en": "The leg is the geometric mean of the entire hypotenuse and its own projection."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Объркване коя проекция към кой катет принадлежи (a1 е под a, b1 е под b).",
    "en": "Confusing which projection belongs to which leg (a1 is under a, b1 is under b)."
   },
   {
    "bg": "Прилагане на формулите за триъгълник, който не е правоъгълен.",
    "en": "Applying the formulas to a triangle that is not a right triangle."
   },
   {
    "bg": "Забравяне да се извлече корен квадратен след умножението на частите.",
    "en": "Forgetting to take the square root after multiplying the segments."
   }
  ]
 },
 "righttrig": {
  "topicId": "righttrig",
  "idea": {
   "bg": "Тригонометрията в правоъгълен триъгълник изучава връзката между страните и ъглите чрез функциите синус, косинус, тангенс и котангенс. Тези функции зависят единствено от големината на острите ъгли, а не от дължините на страните.",
   "en": "Right-triangle trigonometry studies the relationship between sides and angles through sine, cosine, tangent, and cotangent functions. These functions depend solely on the size of the acute angles, not on the lengths of the sides."
  },
  "why": {
   "bg": "Методът работи поради подобието на триъгълниците – при фиксиран ъгъл, съотношението между съответните страни остава постоянно, независимо от мащаба на триъгълника.",
   "en": "The method works due to triangle similarity – for a fixed angle, the ratio between corresponding sides remains constant, regardless of the triangle's scale."
  },
  "rules": [
   {
    "bg": "sin(a) = срещуположен катет / хипотенуза; пример: sin(30°) = 1/2.",
    "en": "sin(a) = opposite leg / hypotenuse; example: sin(30°) = 1/2."
   },
   {
    "bg": "cos(a) = прилежащ катет / хипотенуза; пример: cos(60°) = 1/2.",
    "en": "cos(a) = adjacent leg / hypotenuse; example: cos(60°) = 1/2."
   },
   {
    "bg": "tg(a) = срещуположен катет / прилежащ катет; пример: tg(45°) = 1.",
    "en": "tan(a) = opposite leg / adjacent leg; example: tan(45°) = 1."
   },
   {
    "bg": "ctg(a) = прилежащ катет / срещуположен катет; пример: ctg(45°) = 1.",
    "en": "cot(a) = adjacent leg / opposite leg; example: cot(45°) = 1."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "В правоъгълен триъгълник с хипотенуза c = 10 cm и ъгъл a = 30°, намерете срещуположния катет a.",
     "en": "In a right triangle with hypotenuse c = 10 cm and angle a = 30°, find the opposite leg a."
    },
    "steps": [
     {
      "bg": "Избираме функцията sin(a), защото тя свързва срещуположния катет и хипотенузата.",
      "en": "Choose the sin(a) function because it links the opposite leg and the hypotenuse."
     },
     {
      "bg": "Записваме уравнението: sin(30°) = a / 10.",
      "en": "Write the equation: sin(30°) = a / 10."
     },
     {
      "bg": "Заместваме sin(30°) с 1/2: 1/2 = a / 10.",
      "en": "Substitute sin(30°) with 1/2: 1/2 = a / 10."
     },
     {
      "bg": "Решаваме за a: a = 10 · 1/2 = 5 cm.",
      "en": "Solve for a: a = 10 · 1/2 = 5 cm."
     }
    ],
    "why": {
     "bg": "Синусът е дефиниран като отношение на срещуположна страна към хипотенуза.",
     "en": "Sine is defined as the ratio of the opposite side to the hypotenuse."
    }
   },
   {
    "task": {
     "bg": "Намерете хипотенузата c, ако прилежащият катет b = 4√3 cm и ъгъл a = 30°.",
     "en": "Find the hypotenuse c, if the adjacent leg b = 4√3 cm and angle a = 30°."
    },
    "steps": [
     {
      "bg": "Използваме cos(a), тъй като имаме прилежащ катет и търсим хипотенуза.",
      "en": "Use cos(a) since we have the adjacent leg and are looking for the hypotenuse."
     },
     {
      "bg": "Записваме уравнението: cos(30°) = 4√3 / c.",
      "en": "Write the equation: cos(30°) = 4√3 / c."
     },
     {
      "bg": "Заместваме cos(30°) с √3/2: √3/2 = 4√3 / c.",
      "en": "Substitute cos(30°) with √3/2: √3/2 = 4√3 / c."
     },
     {
      "bg": "Умножаваме накръст: c · √3 = 8√3, следователно c = 8 cm.",
      "en": "Cross-multiply: c · √3 = 8√3, therefore c = 8 cm."
     }
    ],
    "why": {
     "bg": "Косинусът свързва прилежащата страна с най-дългата страна в триъгълника.",
     "en": "Cosine relates the adjacent side to the longest side in the triangle."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Объркване на прилежащ със срещуположен катет спрямо избрания ъгъл.",
    "en": "Confusing the adjacent leg with the opposite leg relative to the chosen angle."
   },
   {
    "bg": "Прилагане на тригонометричните отношения за триъгълник, който не е правоъгълен.",
    "en": "Applying trigonometric ratios to a triangle that is not a right triangle."
   },
   {
    "bg": "Грешно поставяне на хипотенузата в числителя вместо в знаменателя при sin и cos.",
    "en": "Incorrectly placing the hypotenuse in the numerator instead of the denominator for sin and cos."
   }
  ]
 },
 "rounding": {
  "topicId": "rounding",
  "idea": {
   "bg": "Закръгляването е процес на замяна на едно число с друго, по-просто число, което е близко по стойност до него. Това ни помага да работим по-лесно с големи или прецизни числа в ежедневния живот.",
   "en": "Rounding is the process of replacing a number with another simpler number that is close to its original value. This helps us work more easily with large or precise numbers in everyday life."
  },
  "why": {
   "bg": "Методът се основава на разстоянието върху числовата ос: числото се закръгля към най-близката кратна стойност на избрания разряд. Ако числото е точно по средата (цифра 5), по правило се приема закръгляване нагоре.",
   "en": "The method is based on distance on the number line: a number is rounded to the nearest multiple of the chosen place value. If a number is exactly in the middle (digit 5), the rule is to round up."
  },
  "rules": [
   {
    "bg": "Намерете цифрата на разряда, до който закръгляте, и погледнете цифрата веднага вдясно от нея.",
    "en": "Find the digit at the place value you are rounding to and look at the digit immediately to its right."
   },
   {
    "bg": "Ако цифрата вдясно е 0, 1, 2, 3 или 4, цифрата на разряда остава същата (закръгляване надолу). Пример: 42 до десетици е 40.",
    "en": "If the digit to the right is 0, 1, 2, 3, or 4, the rounding digit stays the same (round down). Example: 42 to the nearest ten is 40."
   },
   {
    "bg": "Ако цифрата вдясно е 5, 6, 7, 8 или 9, добавете 1 към цифрата на разряда (закръгляване нагоре). Пример: 47 до десетици е 50.",
    "en": "If the digit to the right is 5, 6, 7, 8, or 9, add 1 to the rounding digit (round up). Example: 47 to the nearest ten is 50."
   },
   {
    "bg": "Заменете всички цифри надясно от избрания разряд с нули.",
    "en": "Replace all digits to the right of the chosen place value with zeros."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Закръглете числото 384 до стотици.",
     "en": "Round the number 384 to the nearest hundred."
    },
    "steps": [
     {
      "bg": "Цифрата на стотиците е 3. Цифрата вдясно от нея е 8.",
      "en": "The hundreds digit is 3. The digit to its right is 8."
     },
     {
      "bg": "Тъй като 8 е по-голямо от 5, добавяме 1 към стотиците: 3 + 1 = 4.",
      "en": "Since 8 is greater than 5, we add 1 to the hundreds: 3 + 1 = 4."
     },
     {
      "bg": "Заменяме останалите цифри с нули, получавайки 400.",
      "en": "We replace the remaining digits with zeros, getting 400."
     }
    ],
    "why": {
     "bg": "384 е по-близо до 400, отколкото до 300.",
     "en": "384 is closer to 400 than it is to 300."
    }
   },
   {
    "task": {
     "bg": "Закръглете числото 12.45 до десети.",
     "en": "Round the number 12.45 to the nearest tenth."
    },
    "steps": [
     {
      "bg": "Цифрата на десетите е 4. Цифрата вдясно от нея е 5.",
      "en": "The tenths digit is 4. The digit to its right is 5."
     },
     {
      "bg": "Правилото за 5 изисква закръгляване нагоре, така че 4 става 5.",
      "en": "The rule for 5 requires rounding up, so 4 becomes 5."
     },
     {
      "bg": "Резултатът е 12.5 (премахваме цифрите след десетите).",
      "en": "The result is 12.5 (we drop the digits after the tenths)."
     }
    ],
    "why": {
     "bg": "При цифра 5 винаги избираме по-голямата стойност.",
     "en": "When the digit is 5, we always choose the larger value."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Промяна на цифри вляво от разряда на закръгляване (освен при пренос).",
    "en": "Changing digits to the left of the rounding place (except when carrying over)."
   },
   {
    "bg": "Закръгляване 'верижно' (например 1.46 до 1.5 и после до 2), вместо директно от оригиналното число.",
    "en": "Rounding 'in a chain' (e.g., 1.46 to 1.5 and then to 2) instead of directly from the original number."
   },
   {
    "bg": "Забравяне да се заменят цифрите след разряда с нули при цели числа.",
    "en": "Forgetting to replace digits after the rounding place with zeros in whole numbers."
   }
  ]
 },
 "shapes": {
  "topicId": "shapes",
  "idea": {
   "bg": "Геометричните фигури са части от равнината, ограничени от линии, като триъгълници, четириъгълници и окръжности. Те притежават специфични свойства като периметър и лице, които описват техните размери и форма.",
   "en": "Geometric shapes are parts of a plane bounded by lines, such as triangles, quadrilaterals, and circles. They possess specific properties like perimeter and area, which describe their dimensions and form."
  },
  "why": {
   "bg": "Математическите формули работят, защото се основават на постоянни съотношения между страните и ъглите, което позволява точно изчисляване на пространствени характеристики.",
   "en": "Mathematical formulas work because they are based on constant relationships between sides and angles, allowing for the accurate calculation of spatial characteristics."
  },
  "rules": [
   {
    "bg": "Периметър (P) на многоъгълник е сборът от дължините на всички негови страни. Пример: P на квадрат със страна a е P = 4 · a.",
    "en": "Perimeter (P) of a polygon is the sum of the lengths of all its sides. Example: P of a square with side a is P = 4 · a."
   },
   {
    "bg": "Лице (S) на правоъгълник се намира, като умножим дължината по ширината. Пример: S = a · b.",
    "en": "Area (S) of a rectangle is found by multiplying the length by the width. Example: S = a · b."
   },
   {
    "bg": "Лице на триъгълник се пресмята чрез страната и височината към нея. Пример: S = (a · ha) : 2.",
    "en": "Area of a triangle is calculated using a side and the height to it. Example: S = (a · ha) : 2."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете лицето на триъгълник със страна 8 см и височина към нея 5 см.",
     "en": "Find the area of a triangle with a side of 8 cm and a height to it of 5 cm."
    },
    "steps": [
     {
      "bg": "Записваме формулата за лице на триъгълник: S = (a · ha) : 2.",
      "en": "Write down the formula for the area of a triangle: S = (a · ha) : 2."
     },
     {
      "bg": "Заместваме стойностите: S = (8 · 5) : 2.",
      "en": "Substitute the values: S = (8 · 5) : 2."
     },
     {
      "bg": "Изчисляваме: S = 40 : 2 = 20 кв. см.",
      "en": "Calculate: S = 40 : 2 = 20 sq. cm."
     }
    ],
    "why": {
     "bg": "Лицето на триъгълника е точно половината от лицето на правоъгълник със същите основа и височина.",
     "en": "The area of a triangle is exactly half of the area of a rectangle with the same base and height."
    }
   },
   {
    "task": {
     "bg": "Пресметнете обиколката на равнобедрен триъгълник с основа 6 см и бедро 5 см.",
     "en": "Calculate the perimeter of an isosceles triangle with a base of 6 cm and a leg of 5 cm."
    },
    "steps": [
     {
      "bg": "Определяме страните: основа a = 6 см и две бедра b = 5 см.",
      "en": "Identify the sides: base a = 6 cm and two legs b = 5 cm."
     },
     {
      "bg": "Прилагаме формулата за периметър: P = a + 2 · b.",
      "en": "Apply the perimeter formula: P = a + 2 · b."
     },
     {
      "bg": "Изчисляваме: P = 6 + 2 · 5 = 6 + 10 = 16 см.",
      "en": "Calculate: P = 6 + 2 · 5 = 6 + 10 = 16 cm."
     }
    ],
    "why": {
     "bg": "Равнобедреният триъгълник има две равни страни, затова умножаваме бедрото по две.",
     "en": "An isosceles triangle has two equal sides, which is why we multiply the leg by two."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Често се забравя делението на 2 при формулата за лице на триъгълник.",
    "en": "Forgetting to divide by 2 in the triangle area formula is a common error."
   },
   {
    "bg": "Използване на различни мерни единици (например см и мм) без предварително преобразуване.",
    "en": "Using different units of measurement (e.g., cm and mm) without prior conversion."
   },
   {
    "bg": "Объркване на понятието за периметър (линейна дължина) с лице (квадратни единици).",
    "en": "Confusing the concept of perimeter (linear length) with area (square units)."
   }
  ]
 },
 "similar": {
  "topicId": "similar",
  "idea": {
   "bg": "Два триъгълника са подобни, ако техните ъгли са съответно равни, а страните им са пропорционални. Това означава, че единият триъгълник е увеличен или умален модел на другия, запазвайки същата форма.",
   "en": "Two triangles are similar if their angles are respectively equal and their sides are proportional. This means one triangle is a scaled-up or scaled-down version of the other, maintaining the same shape."
  },
  "why": {
   "bg": "Методът работи, защото коефициентът на подобие 'k' поддържа константни съотношения между линейните елементи. Това позволява намирането на неизвестни дължини чрез решаване на пропорции, базирани на съответните ъгли.",
   "en": "The method works because the similarity ratio 'k' maintains constant proportions between linear elements. This allows finding unknown lengths by solving proportions based on the corresponding angles."
  },
  "rules": [
   {
    "bg": "Първи признак: Два триъгълника са подобни, ако два ъгъла от единия са равни на два ъгъла от другия (ъгъл-ъгъл).",
    "en": "First criterion: Two triangles are similar if two angles of one are equal to two angles of the other (AA similarity)."
   },
   {
    "bg": "Втори признак: Ако две страни на един триъгълник са пропорционални на две страни от друг и ъглите между тях са равни.",
    "en": "Second criterion: If two sides of one triangle are proportional to two sides of another and the angles between them are equal (SAS similarity)."
   },
   {
    "bg": "Трети признак: Ако страните на един триъгълник са пропорционални на страните на друг (отношението a/a1 = b/b1 = c/c1 = k).",
    "en": "Third criterion: If the sides of one triangle are proportional to the sides of another (the ratio a/a1 = b/b1 = c/c1 = k)."
   },
   {
    "bg": "Отношение на лицата: Лицата на подобните триъгълници се отнасят както квадрата на коефициента на подобие (S/S1 = k²).",
    "en": "Ratio of areas: The areas of similar triangles relate to each other as the square of the similarity ratio (S/S1 = k²)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Триъгълник ABC е подобен на A1B1C1 с коефициент k = 3. Ако AB = 5 см, намерете A1B1.",
     "en": "Triangle ABC is similar to A1B1C1 with ratio k = 3. If AB = 5 cm, find A1B1."
    },
    "steps": [
     {
      "bg": "Запишете отношението на съответните страни: AB / A1B1 = k.",
      "en": "Write the ratio of corresponding sides: AB / A1B1 = k."
     },
     {
      "bg": "Заместете известните стойности: 5 / A1B1 = 3.",
      "en": "Substitute the known values: 5 / A1B1 = 3."
     },
     {
      "bg": "Решете уравнението: A1B1 = 5 : 3 = 1.67 см (приблизително).",
      "en": "Solve the equation: A1B1 = 5 : 3 = 1.67 cm (approximately)."
     }
    ],
    "why": {
     "bg": "Коефициентът на подобие показва колко пъти страните на първия триъгълник са по-големи от тези на втория.",
     "en": "The similarity ratio shows how many times the sides of the first triangle are larger than those of the second."
    }
   },
   {
    "task": {
     "bg": "В триъгълник ABC е начертана отсечка MN, успоредна на AB (M лежи на AC, N на BC). Ако AC = 10, MC = 4 и AB = 15, намерете MN.",
     "en": "In triangle ABC, a segment MN is drawn parallel to AB (M lies on AC, N on BC). If AC = 10, MC = 4, and AB = 15, find MN."
    },
    "steps": [
     {
      "bg": "Докажете подобието: триъгълник MNC е подобен на ABC по първи признак (общ ъгъл C и равни съответни ъгли от успоредните прави).",
      "en": "Prove similarity: triangle MNC is similar to ABC by the first criterion (common angle C and equal corresponding angles from parallel lines)."
     },
     {
      "bg": "Съставете пропорцията: MN / AB = MC / AC.",
      "en": "Set up the proportion: MN / AB = MC / AC."
     },
     {
      "bg": "Заместете и пресметнете: MN / 15 = 4 / 10, следователно MN = (15 · 4) : 10 = 6.",
      "en": "Substitute and calculate: MN / 15 = 4 / 10, therefore MN = (15 · 4) : 10 = 6."
     }
    ],
    "why": {
     "bg": "Успоредната права отсича триъгълник, подобен на дадения, което позволява директно сравнение на страните.",
     "en": "A parallel line cuts off a triangle similar to the given one, allowing direct comparison of sides."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно подреждане на съответните страни: Важно е страните да лежат срещу равни ъгли.",
    "en": "Incorrect ordering of corresponding sides: It is vital that sides lie opposite to equal angles."
   },
   {
    "bg": "Бъркане на отношението на лицата с отношението на страните (забравяне на втората степен k²).",
    "en": "Confusing the ratio of areas with the ratio of sides (forgetting the square power k²)."
   },
   {
    "bg": "Използване на подобие при наличие само на равни страни без информация за ъглите или пропорционалността.",
    "en": "Assuming similarity when only equal sides are present without information about angles or proportionality."
   }
  ]
 },
 "sinelaw": {
  "topicId": "sinelaw",
  "idea": {
   "bg": "Синусовата теорема установява пропорционална зависимост между страните на произволен триъгълник и синусите на срещулежащите им ъгли. Тя също така свързва тези отношения с диаметъра на описаната около триъгълника окръжност.",
   "en": "The Law of Sines establishes a proportional relationship between the sides of any triangle and the sines of their opposite angles. It also links these ratios to the diameter of the triangle's circumscribed circle."
  },
  "why": {
   "bg": "Методът работи, защото височината в триъгълника може да бъде изразена чрез две различни страни и синусите на техните срещулежащи ъгли, което води до равни отношения. Връзката с радиуса R произтича от свойството на периферните ъгли в описаната окръжност.",
   "en": "The method works because the altitude of a triangle can be expressed using two different sides and the sines of their opposite angles, leading to equal ratios. The connection to the radius R stems from the properties of inscribed angles in the circumcircle."
  },
  "rules": [
   {
    "bg": "Основна формула: a / sin(alpha) = b / sin(beta) = c / sin(gamma) = 2R.",
    "en": "Main formula: a / sin(alpha) = b / sin(beta) = c / sin(gamma) = 2R."
   },
   {
    "bg": "Използва се за намиране на страна, ако са дадени два ъгъла и друга страна (ДЪС).",
    "en": "Used to find a side when two angles and another side are given (AAS or ASA)."
   },
   {
    "bg": "Използва се за намиране на ъгъл, ако са дадени две страни и ъгъл срещу едната от тях (ССЪ).",
    "en": "Used to find an angle when two sides and an angle opposite one of them are given (SSA)."
   },
   {
    "bg": "Радиусът на описаната окръжност R се намира чрез всяко от отношенията: R = a / (2 · sin(alpha)).",
    "en": "The radius of the circumcircle R is found using any of the ratios: R = a / (2 · sin(alpha))."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "В триъгълник ABC страната a = 6, ъгъл alpha = 30° и ъгъл beta = 45°. Намерете страната b.",
     "en": "In triangle ABC, side a = 6, angle alpha = 30°, and angle beta = 45°. Find side b."
    },
    "steps": [
     {
      "bg": "Записваме синусовата теорема: a / sin(alpha) = b / sin(beta).",
      "en": "Write the Law of Sines: a / sin(alpha) = b / sin(beta)."
     },
     {
      "bg": "Заместваме стойностите: 6 / sin(30°) = b / sin(45°).",
      "en": "Substitute the values: 6 / sin(30°) = b / sin(45°)."
     },
     {
      "bg": "Изчисляваме: 6 / 0.5 = b / (√2 / 2), което дава 12 = b / (√2 / 2).",
      "en": "Calculate: 6 / 0.5 = b / (√2 / 2), which gives 12 = b / (√2 / 2)."
     },
     {
      "bg": "Решаваме за b: b = 12 · (√2 / 2) = 6√2.",
      "en": "Solve for b: b = 12 · (√2 / 2) = 6√2."
     }
    ],
    "why": {
     "bg": "Прилагаме пропорцията директно, тъй като търсим страна срещу известен ъгъл.",
     "en": "We apply the proportion directly as we are looking for a side opposite a known angle."
    }
   },
   {
    "task": {
     "bg": "Намерете радиуса R на описаната окръжност около триъгълник със страна c = 10 и срещулежащ ъгъл gamma = 120°.",
     "en": "Find the radius R of the circumcircle of a triangle with side c = 10 and opposite angle gamma = 120°."
    },
    "steps": [
     {
      "bg": "Използваме формулата c / sin(gamma) = 2R.",
      "en": "Use the formula c / sin(gamma) = 2R."
     },
     {
      "bg": "Пресмятаме sin(120°) = sin(180° − 60°) = sin(60°) = √3 / 2.",
      "en": "Calculate sin(120°) = sin(180° − 60°) = sin(60°) = √3 / 2."
     },
     {
      "bg": "Заместваме: 10 / (√3 / 2) = 2R, следователно 20 / √3 = 2R.",
      "en": "Substitute: 10 / (√3 / 2) = 2R, therefore 20 / √3 = 2R."
     },
     {
      "bg": "Намираме R = 10 / √3 = (10√3) / 3.",
      "en": "Find R = 10 / √3 = (10√3) / 3."
     }
    ],
    "why": {
     "bg": "Връзката между страна и синус на ъгъл винаги е равна на диаметъра на описаната окръжност.",
     "en": "The ratio between a side and the sine of its angle is always equal to the diameter of the circumcircle."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно свързване на страна с ъгъл, който не е срещулежащ (например a със sin(beta)).",
    "en": "Incorrectly pairing a side with an angle that is not opposite to it (e.g., a with sin(beta))."
   },
   {
    "bg": "Забравяне, че отношението е равно на 2R (диаметъра), а не само на R (радиуса).",
    "en": "Forgetting that the ratio is equal to 2R (diameter), not just R (radius)."
   },
   {
    "bg": "Неотчитане на възможността за два триъгълника при дадени две страни и остър ъгъл (двусмислен случай).",
    "en": "Ignoring the possibility of two triangles when given two sides and an acute angle (the ambiguous case)."
   }
  ]
 },
 "sphere": {
  "topicId": "sphere",
  "idea": {
   "bg": "Сферата е повърхнината на геометрично тяло, състояща се от всички точки в пространството, намиращи се на едно и също разстояние от дадена точка (център). Кълбото е съвкупността от сферата и всички точки във вътрешността ѝ.",
   "en": "A sphere is the surface of a geometric solid consisting of all points in space equidistant from a given point (center). The ball (solid sphere) is the union of the sphere and all points in its interior."
  },
  "why": {
   "bg": "Формулите за повърхнина и обем се базират на числото π и радиуса R, отразявайки идеалната симетрия на тялото във всички посоки. Лицето на сферата е точно 4 пъти лицето на нейния голям кръг, а обемът показва колко пространство запълва тялото.",
   "en": "The surface area and volume formulas are based on the constant π and the radius R, reflecting the body's perfect symmetry in all directions. The area of a sphere is exactly 4 times the area of its great circle, and the volume indicates how much space the solid occupies."
  },
  "rules": [
   {
    "bg": "Лице на повърхнина на сфера: S = 4 · π · R². Пример: Ако R = 3 см, S = 4 · π · 3² = 36 · π см².",
    "en": "Surface area of a sphere: S = 4 · π · R². Example: If R = 3 cm, S = 4 · π · 3² = 36 · π cm²."
   },
   {
    "bg": "Обем на кълбо: V = (4/3) · π · R³. Пример: Ако R = 3 см, V = (4/3) · π · 3³ = 36 · π см³.",
    "en": "Volume of a ball: V = (4/3) · π · R³. Example: If R = 3 cm, V = (4/3) · π · 3³ = 36 · π cm³."
   },
   {
    "bg": "Диаметърът d е равен на два пъти радиуса: d = 2 · R. Всички сечения на кълбото с равнина са кръгове.",
    "en": "The diameter d is equal to twice the radius: d = 2 · R. All sections of a ball with a plane are circles."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете лицето на повърхнината на сфера с диаметър 10 дм.",
     "en": "Find the surface area of a sphere with a diameter of 10 dm."
    },
    "steps": [
     {
      "bg": "Намираме радиуса: R = d : 2 = 10 : 2 = 5 дм.",
      "en": "Find the radius: R = d : 2 = 10 : 2 = 5 dm."
     },
     {
      "bg": "Прилагаме формулата S = 4 · π · R² = 4 · π · 5².",
      "en": "Apply the formula S = 4 · π · R² = 4 · π · 5²."
     },
     {
      "bg": "Изчисляваме: S = 4 · π · 25 = 100 · π дм².",
      "en": "Calculate: S = 4 · π · 25 = 100 · π dm²."
     }
    ],
    "why": {
     "bg": "Лицето на сферата зависи единствено от квадрата на нейния радиус.",
     "en": "The surface area of a sphere depends solely on the square of its radius."
    }
   },
   {
    "task": {
     "bg": "Изчислете обема на кълбо с радиус 6 см.",
     "en": "Calculate the volume of a ball with a radius of 6 cm."
    },
    "steps": [
     {
      "bg": "Записваме формулата за обем: V = (4/3) · π · R³.",
      "en": "Write down the volume formula: V = (4/3) · π · R³."
     },
     {
      "bg": "Заместваме радиуса: V = (4/3) · π · 6³ = (4/3) · π · 216.",
      "en": "Substitute the radius: V = (4/3) · π · 6³ = (4/3) · π · 216."
     },
     {
      "bg": "Пресмятаме: V = 4 · π · 72 = 288 · π см³.",
      "en": "Calculate: V = 4 · π · 72 = 288 · π cm³."
     }
    ],
    "why": {
     "bg": "Обемът измерва пространството в три измерения, затова радиусът е на трета степен.",
     "en": "Volume measures space in three dimensions, which is why the radius is cubed."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Използване на диаметъра вместо радиуса във формулите без предварително разделяне на две.",
    "en": "Using the diameter instead of the radius in formulas without dividing by two first."
   },
   {
    "bg": "Объркване на формулата за лице (R²) с тази за обем (R³).",
    "en": "Confusing the surface area formula (R²) with the volume formula (R³)."
   },
   {
    "bg": "Пропускане на множителя 4/3 при пресмятане на обем на кълбо.",
    "en": "Omitting the 4/3 multiplier when calculating the volume of a ball."
   }
  ]
 },
 "sqroot": {
  "topicId": "sqroot",
  "idea": {
   "bg": "Квадратен корен от положително число a е такова неотрицателно число, което повдигнато на втора степен дава a. Това е обратната операция на степенуването на квадрат.",
   "en": "The square root of a positive number a is a non-negative number which, when squared, equals a. It is the inverse operation of squaring a number."
  },
  "why": {
   "bg": "Методът работи чрез намиране на основата на степента; ако знаем площта на квадрат, квадратният корен ни дава дължината на неговата страна.",
   "en": "The method works by finding the base of the power; if we know the area of a square, the square root gives us the length of its side."
  },
  "rules": [
   {
    "bg": "Определение: √a = x, ако x² = a и x ≥ 0. Пример: √25 = 5.",
    "en": "Definition: √a = x, if x² = a and x ≥ 0. Example: √25 = 5."
   },
   {
    "bg": "Корен от произведение: √(a · b) = √a · √b за a, b ≥ 0. Пример: √36 = √4 · √9 = 2 · 3 = 6.",
    "en": "Root of a product: √(a · b) = √a · √b for a, b ≥ 0. Example: √36 = √4 · √9 = 2 · 3 = 6."
   },
   {
    "bg": "Корен от частно: √(a : b) = √a : √b за a ≥ 0, b > 0. Пример: √(100 : 4) = 10 : 2 = 5.",
    "en": "Root of a quotient: √(a : b) = √a : √b for a ≥ 0, b > 0. Example: √(100 : 4) = 10 : 2 = 5."
   },
   {
    "bg": "Корен от квадрат: √(a²) = |a|. Пример: √(-7)² = |-7| = 7.",
    "en": "Root of a square: √(a²) = |a|. Example: √(-7)² = |-7| = 7."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Пресметнете стойността на израза: √144 + √0.81",
     "en": "Calculate the value of the expression: √144 + √0.81"
    },
    "steps": [
     {
      "bg": "Намираме √144 = 12, защото 12² = 144.",
      "en": "Find √144 = 12, because 12² = 144."
     },
     {
      "bg": "Намираме √0.81 = 0.9, защото 0.9² = 0.81.",
      "en": "Find √0.81 = 0.9, because 0.9² = 0.81."
     },
     {
      "bg": "Събираме резултатите: 12 + 0.9 = 12.9.",
      "en": "Add the results: 12 + 0.9 = 12.9."
     }
    ],
    "why": {
     "bg": "Използваме таблицата на квадратите и правилата за десетични дроби.",
     "en": "We use the table of squares and the rules for decimal fractions."
    }
   },
   {
    "task": {
     "bg": "Опростете израза: √(2 · 32)",
     "en": "Simplify the expression: √(2 · 32)"
    },
    "steps": [
     {
      "bg": "Умножаваме числата под корена: 2 · 32 = 64.",
      "en": "Multiply the numbers under the root: 2 · 32 = 64."
     },
     {
      "bg": "Пресмятаме корена: √64 = 8.",
      "en": "Calculate the root: √64 = 8."
     }
    ],
    "why": {
     "bg": "Когато множителите не са точни квадрати, често тяхното произведение е такъв.",
     "en": "When factors are not perfect squares, their product often is."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешка: √(-25) = -5. Корен от отрицателно число не съществува в реалните числа.",
    "en": "Error: √(-25) = -5. Square roots of negative numbers are not defined in real numbers."
   },
   {
    "bg": "Грешка: √(a + b) = √a + √b. Коренуването не се разпределя върху събирането (√9 + √16 = 3+4=7, но √25=5).",
    "en": "Error: √(a + b) = √a + √b. Square roots do not distribute over addition (√9 + √16 = 3+4=7, but √25=5)."
   },
   {
    "bg": "Грешка: Забравяне, че √a винаги е неотрицателно число.",
    "en": "Error: Forgetting that √a is always a non-negative number."
   }
  ]
 },
 "square": {
  "topicId": "square",
  "idea": {
   "bg": "Квадратът е правилен четириъгълник, който има четири равни страни и четири прави ъгъла. Той съчетава свойствата на правоъгълника и ромба в една съвършена геометрична форма.",
   "en": "A square is a regular quadrilateral that has four equal sides and four right angles. It combines the properties of both a rectangle and a rhombus into one perfect geometric shape."
  },
  "why": {
   "bg": "Формулите за квадрат работят, защото неговата пълна симетрия позволява всички елементи да бъдат изразени само чрез дължината на страната му (а).",
   "en": "The formulas for a square work because its complete symmetry allows all elements to be expressed using only the length of its side (a)."
  },
  "rules": [
   {
    "bg": "Периметър (P): Сумата от четирите равни страни. Формула: P = 4 · a. Пример: Ако a = 3 см, P = 12 см.",
    "en": "Perimeter (P): The sum of the four equal sides. Formula: P = 4 · a. Example: If a = 3 cm, P = 12 cm."
   },
   {
    "bg": "Лице (S): Пространството вътре в квадрата. Формула: S = a · a = a². Пример: Ако a = 5 см, S = 25 см².",
    "en": "Area (S): The space inside the square. Formula: S = a · a = a². Example: If a = 5 cm, S = 25 cm²."
   },
   {
    "bg": "Свойства на диагоналите: Диагоналите са равни, взаимно перпендикулярни и се разполовяват. Формула за дължина: d = a · √2.",
    "en": "Properties of diagonals: The diagonals are equal, mutually perpendicular, and bisect each other. Length formula: d = a · √2."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете страната на квадрат, чийто периметър е 32 см.",
     "en": "Find the side of a square whose perimeter is 32 cm."
    },
    "steps": [
     {
      "bg": "Запишете формулата за периметър: P = 4 · a.",
      "en": "Write down the perimeter formula: P = 4 · a."
     },
     {
      "bg": "Заместете P с 32: 32 = 4 · a.",
      "en": "Substitute P with 32: 32 = 4 · a."
     },
     {
      "bg": "Разделете двете страни на 4: a = 32 : 4.",
      "en": "Divide both sides by 4: a = 32 : 4."
     },
     {
      "bg": "Изчислете резултата: a = 8 см.",
      "en": "Calculate the result: a = 8 cm."
     }
    ],
    "why": {
     "bg": "Тъй като всички четири страни са равни, разделянето на общата дължина на 4 ни дава всяка отделна страна.",
     "en": "Since all four sides are equal, dividing the total length by 4 gives us each individual side."
    }
   },
   {
    "task": {
     "bg": "Пресметнете лицето на квадрат със страна a = 1.2 дм.",
     "en": "Calculate the area of a square with side a = 1.2 dm."
    },
    "steps": [
     {
      "bg": "Използвайте формулата за лице: S = a².",
      "en": "Use the area formula: S = a²."
     },
     {
      "bg": "Заместете със стойността: S = 1.2 · 1.2.",
      "en": "Substitute the value: S = 1.2 · 1.2."
     },
     {
      "bg": "Извършете умножението: S = 1.44 дм².",
      "en": "Perform the multiplication: S = 1.44 dm²."
     }
    ],
    "why": {
     "bg": "Лицето е произведението на двете измерения (дължина и ширина), които при квадрата са еднакви.",
     "en": "Area is the product of the two dimensions (length and width), which are identical in a square."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Объркване на формулите: Използване на a² за периметър вместо за лице.",
    "en": "Formula confusion: Using a² for perimeter instead of area."
   },
   {
    "bg": "Грешни мерни единици: Забравяне, че лицето се измерва в квадратни единици (см², м²), а периметърът в линейни.",
    "en": "Wrong measurement units: Forgetting that area is measured in square units (cm², m²), while perimeter is in linear units."
   },
   {
    "bg": "Умножаване на страната по 2 вместо повдигане на квадрат при търсене на лице.",
    "en": "Multiplying the side by 2 instead of squaring it when searching for the area."
   }
  ]
 },
 "statmean": {
  "topicId": "statmean",
  "idea": {
   "bg": "Средното аритметично е число, което представя типичната стойност на даден набор от данни. То се получава чрез разпределяне на общата сума поравно между всички елементи в групата.",
   "en": "The arithmetic mean is a number that represents the typical value of a given data set. It is obtained by distributing the total sum equally among all elements in the group."
  },
  "why": {
   "bg": "Този метод работи, защото превръща група от различни числа в една усреднена стойност, която поддържа същия общ сбор. Това позволява лесно сравнение между различни набори от данни с различен брой елементи.",
   "en": "This method works because it transforms a group of different numbers into a single average value that maintains the same total sum. This allows for easy comparison between different data sets with different numbers of elements."
  },
  "rules": [
   {
    "bg": "Съберете всички числа в набора, за да намерите техния общ сбор.",
    "en": "Add all the numbers in the set together to find their total sum."
   },
   {
    "bg": "Пребройте колко на брой са числата (n).",
    "en": "Count how many numbers there are in the set (n)."
   },
   {
    "bg": "Разделете общия сбор на броя на числата: Средно = Сбор : Брой.",
    "en": "Divide the total sum by the count of numbers: Mean = Sum : Count."
   },
   {
    "bg": "Формула: x = (x1 + x2 + ... + xn) : n.",
    "en": "Formula: x = (x1 + x2 + ... + xn) : n."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете средния успех на ученик с оценки: 6, 5, 4, 5.",
     "en": "Find the average grade of a student with grades: 6, 5, 4, 5."
    },
    "steps": [
     {
      "bg": "Намираме сбора на оценките: 6 + 5 + 4 + 5 = 20.",
      "en": "Find the sum of the grades: 6 + 5 + 4 + 5 = 20."
     },
     {
      "bg": "Преброяваме оценките: те са 4 на брой.",
      "en": "Count the grades: there are 4 of them."
     },
     {
      "bg": "Разделяме сбора на броя: 20 : 4 = 5.",
      "en": "Divide the sum by the count: 20 : 4 = 5."
     }
    ],
    "why": {
     "bg": "Числото 5 показва каква би била всяка оценка, ако ученикът имаше еднакво представяне през целия период.",
     "en": "The number 5 shows what each grade would be if the student had performed consistently throughout the period."
    }
   },
   {
    "task": {
     "bg": "Пресметнете средната дневна температура, ако в три дни са измерени 12°C, 15°C и 18°C.",
     "en": "Calculate the average daily temperature if 12°C, 15°C, and 18°C were measured over three days."
    },
    "steps": [
     {
      "bg": "Събираме температурите: 12 + 15 + 18 = 45.",
      "en": "Add the temperatures: 12 + 15 + 18 = 45."
     },
     {
      "bg": "Разделяме на броя на дните: 45 : 3 = 15.",
      "en": "Divide by the number of days: 45 : 3 = 15."
     }
    ],
    "why": {
     "bg": "Средната стойност от 15°C балансира по-студения и по-топлия ден.",
     "en": "The mean value of 15°C balances the colder and the warmer days."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Пропускане на числото 0 при преброяването (0 е валидна стойност и трябва да се включи в броя n).",
    "en": "Skipping the number 0 when counting (0 is a valid value and must be included in the count n)."
   },
   {
    "bg": "Грешка при делението, когато сборът не се дели точно (трябва да се използва десетична запетая).",
    "en": "Error in division when the sum is not exactly divisible (a decimal point should be used)."
   },
   {
    "bg": "Объркване на средното аритметично с медианата или модата.",
    "en": "Confusing the arithmetic mean with the median or the mode."
   }
  ]
 },
 "tangent": {
  "topicId": "tangent",
  "idea": {
   "bg": "Допирателната е права линия, която се допира до крива в точно определена точка, без да я пресича в непосредствена близост до нея. Стойността на производната на функцията в тази точка е равна на ъгловия коефициент (наклона) на допирателната.",
   "en": "A tangent line is a straight line that touches a curve at a specific point without crossing it in the immediate vicinity. The value of the derivative at that point is equal to the slope of the tangent line."
  },
  "why": {
   "bg": "Методът работи, защото производната измерва моментната скорост на изменение на функцията, което геометрично съвпада с наклона на допирателната права в дадената точка.",
   "en": "The method works because the derivative measures the instantaneous rate of change of the function, which geometrically coincides with the slope of the tangent line at the given point."
  },
  "rules": [
   {
    "bg": "Уравнение на допирателната: y − f(x₀) = f'(x₀) · (x − x₀), където (x₀, f(x₀)) е точката на допиране.",
    "en": "Equation of the tangent line: y − f(x₀) = f'(x₀) · (x − x₀), where (x₀, f(x₀)) is the point of tangency."
   },
   {
    "bg": "Наклонът k е равен на производната в точката: k = f'(x₀) = tg(α), където α е ъгълът с абсцисната ос.",
    "en": "The slope k is equal to the derivative at the point: k = f'(x₀) = tg(α), where α is the angle with the x-axis."
   },
   {
    "bg": "Ако допирателната е успоредна на оста Ox, то производната f'(x₀) = 0.",
    "en": "If the tangent line is parallel to the x-axis, then the derivative f'(x₀) = 0."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете уравнението на допирателната към f(x) = x² в точката x₀ = 3.",
     "en": "Find the equation of the tangent line to f(x) = x² at the point x₀ = 3."
    },
    "steps": [
     {
      "bg": "1. Пресмятаме стойността на функцията: f(3) = 3² = 9.",
      "en": "1. Calculate the function value: f(3) = 3² = 9."
     },
     {
      "bg": "2. Намираме производната: f'(x) = 2x.",
      "en": "2. Find the derivative: f'(x) = 2x."
     },
     {
      "bg": "3. Намираме наклона k: f'(3) = 2 · 3 = 6.",
      "en": "3. Find the slope k: f'(3) = 2 · 3 = 6."
     },
     {
      "bg": "4. Заместваме във формулата: y − 9 = 6 · (x − 3) => y = 6x − 9.",
      "en": "4. Substitute into the formula: y − 9 = 6 · (x − 3) => y = 6x − 9."
     }
    ],
    "why": {
     "bg": "Използваме общата формула за права през точка с даден наклон, определен от производната.",
     "en": "We use the point-slope form of a line equation, where the slope is determined by the derivative."
    }
   },
   {
    "task": {
     "bg": "Намерете абсцисата x₀, при която допирателната към f(x) = x³ − 3x е успоредна на оста Ox.",
     "en": "Find the abscissa x₀ where the tangent line to f(x) = x³ − 3x is parallel to the x-axis."
    },
    "steps": [
     {
      "bg": "1. Успоредна на Ox означава наклон k = 0, т.е. f'(x₀) = 0.",
      "en": "1. Parallel to Ox means slope k = 0, i.e., f'(x₀) = 0."
     },
     {
      "bg": "2. Намираме производната: f'(x) = 3x² − 3.",
      "en": "2. Find the derivative: f'(x) = 3x² − 3."
     },
     {
      "bg": "3. Решаваме уравнението 3x² − 3 = 0 => 3(x² − 1) = 0.",
      "en": "3. Solve the equation 3x² − 3 = 0 => 3(x² − 1) = 0."
     },
     {
      "bg": "4. Получаваме x₁ = 1 и x₂ = −1.",
      "en": "4. We get x₁ = 1 and x₂ = −1."
     }
    ],
    "why": {
     "bg": "Хоризонталните допирателни се появяват в критичните точки, където производната е нула.",
     "en": "Horizontal tangents occur at critical points where the derivative is zero."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Объркване на f(x₀) с f'(x₀) при заместване в уравнението на правата.",
    "en": "Confusing f(x₀) with f'(x₀) when substituting into the line equation."
   },
   {
    "bg": "Забравяне да се намери координатата y₀ = f(x₀), ако е дадено само x₀.",
    "en": "Forgetting to find the y-coordinate y₀ = f(x₀) if only x₀ is given."
   },
   {
    "bg": "Грешно диференциране на сложни функции, което води до грешен наклон k.",
    "en": "Incorrect differentiation of composite functions, leading to an incorrect slope k."
   }
  ]
 },
 "trapezoid": {
  "topicId": "trapezoid",
  "idea": {
   "bg": "Трапецът е четириъгълник, на който само две срещуположни страни са успоредни. Тези успоредни страни се наричат основи, а другите две се наричат бедра.",
   "en": "A trapezoid is a quadrilateral with only two opposite sides parallel. These parallel sides are called bases, while the other two sides are called legs."
  },
  "why": {
   "bg": "Свойствата на трапеца се основават на свойствата на успоредните прави и техните секущи, което води до това, че сумата от ъглите, прилепени към всяко бедро, е 180 градуса.",
   "en": "Trapezoid properties are based on the rules of parallel lines and their transversals, resulting in the sum of angles adjacent to each leg being 180 degrees."
  },
  "rules": [
   {
    "bg": "Лице на трапец: S = (a + b) · h : 2. Пример: основи 5 см и 3 см, височина 4 см -> (5 + 3) · 4 : 2 = 16 кв. см.",
    "en": "Area of a trapezoid: S = (a + b) · h : 2. Example: bases 5 cm and 3 cm, height 4 cm -> (5 + 3) · 4 : 2 = 16 sq. cm."
   },
   {
    "bg": "Сбор на ъглите при бедрото: alfa + delta = 180 градуса и beta + gamma = 180 градуса.",
    "en": "Sum of angles at a leg: alpha + delta = 180 degrees and beta + gamma = 180 degrees."
   },
   {
    "bg": "Средна отсечка (m): Тя свързва средите на бедрата, m = (a + b) : 2 и е успоредна на основите.",
    "en": "Midsegment (m): It connects the midpoints of the legs, m = (a + b) : 2 and is parallel to the bases."
   },
   {
    "bg": "Равнобедрен трапец: Бедрата са равни и ъглите при всяка основа са равни.",
    "en": "Isosceles trapezoid: The legs are equal and the angles at each base are equal."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете лицето на трапец с основи a = 10 см, b = 6 см и височина h = 5 см.",
     "en": "Find the area of a trapezoid with bases a = 10 cm, b = 6 cm and height h = 5 cm."
    },
    "steps": [
     {
      "bg": "Използваме формулата S = (a + b) · h : 2.",
      "en": "Use the formula S = (a + b) · h : 2."
     },
     {
      "bg": "Заместваме стойностите: S = (10 + 6) · 5 : 2.",
      "en": "Substitute the values: S = (10 + 6) · 5 : 2."
     },
     {
      "bg": "Пресмятаме в скобите: 16 · 5 : 2.",
      "en": "Calculate inside the parentheses: 16 · 5 : 2."
     },
     {
      "bg": "S = 80 : 2 = 40 кв. см.",
      "en": "S = 80 : 2 = 40 sq. cm."
     }
    ],
    "why": {
     "bg": "Лицето на трапеца е равно на произведението от средната му отсечка и височината.",
     "en": "The area of a trapezoid is equal to the product of its midsegment and its height."
    }
   },
   {
    "task": {
     "bg": "В равнобедрен трапец ъгълът при голямата основа е 60 градуса. Намерете останалите ъгли.",
     "en": "In an isosceles trapezoid, the angle at the larger base is 60 degrees. Find the other angles."
    },
    "steps": [
     {
      "bg": "При равнобедрен трапец ъглите при основата са равни, значи вторият ъгъл при голямата основа е също 60 градуса.",
      "en": "In an isosceles trapezoid, base angles are equal, so the second angle at the large base is also 60 degrees."
     },
     {
      "bg": "Сборът на ъглите при бедрото е 180 градуса.",
      "en": "The sum of angles at a leg is 180 degrees."
     },
     {
      "bg": "Намираме тъпия ъгъл: 180 - 60 = 120 градуса.",
      "en": "Find the obtuse angle: 180 - 60 = 120 degrees."
     },
     {
      "bg": "Тъй като е равнобедрен, и двата ъгъла при малката основа са по 120 градуса.",
      "en": "Since it is isosceles, both angles at the smaller base are 120 degrees."
     }
    ],
    "why": {
     "bg": "Използваме симетрията на равнобедрения трапец и свойството на успоредните прави.",
     "en": "We use the symmetry of the isosceles trapezoid and the property of parallel lines."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно събиране на ъглите при основата вместо при бедрото (само при бедрото сумата е 180 градуса).",
    "en": "Incorrectly adding angles at the base instead of the leg (the sum is 180 degrees only at the leg)."
   },
   {
    "bg": "Забравяне на деленето на 2 във формулата за лице.",
    "en": "Forgetting to divide by 2 in the area formula."
   },
   {
    "bg": "Объркване на понятието височина с дължината на бедрото при правоъгълен трапец.",
    "en": "Confusing the concept of height with the length of the leg in a right trapezoid."
   }
  ]
 },
 "trigeq": {
  "topicId": "trigeq",
  "idea": {
   "bg": "Тригонометричните уравнения съдържат неизвестното под знака на тригонометрична функция като sin, cos, tg или cotg. Целта е да се намерят всички стойности на ъгъла x, които превръщат уравнението във вярно числово равенство.",
   "en": "Trigonometric equations contain the unknown variable under a trigonometric function like sin, cos, tan, or cot. The goal is to find all values of the angle x that satisfy the equation."
  },
  "why": {
   "bg": "Методите работят, защото тригонометричните функции са периодични, което означава, че техните стойности се повтарят през определен интервал (2π или π). Решенията се описват чрез общи формули, включващи целочислени кратни на периода.",
   "en": "The methods work because trigonometric functions are periodic, meaning their values repeat at specific intervals (2π or π). Solutions are described using general formulas that include integer multiples of the period."
  },
  "rules": [
   {
    "bg": "За уравнението sin(x) = a (|a| <= 1): Решенията са x = arcsin(a) + 2·k·π и x = π − arcsin(a) + 2·k·π, където k е цяло число.",
    "en": "For sin(x) = a (|a| <= 1): The solutions are x = arcsin(a) + 2·k·π and x = π − arcsin(a) + 2·k·π, where k is an integer."
   },
   {
    "bg": "За уравнението cos(x) = a (|a| <= 1): Решенията са x = ±arccos(a) + 2·k·π, където k е цяло число.",
    "en": "For cos(x) = a (|a| <= 1): The solutions are x = ±arccos(a) + 2·k·π, where k is an integer."
   },
   {
    "bg": "За уравнението tg(x) = a: Решенията са x = arctg(a) + k·π, където k е цяло число.",
    "en": "For tan(x) = a: The solutions are x = arctan(a) + k·π, where k is an integer."
   },
   {
    "bg": "За уравнението cotg(x) = a: Решенията са x = arccotg(a) + k·π, където k е цяло число.",
    "en": "For cot(x) = a: The solutions are x = arccot(a) + k·π, where k is an integer."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Решете уравнението 2·sin(x) − √3 = 0.",
     "en": "Solve the equation 2·sin(x) − √3 = 0."
    },
    "steps": [
     {
      "bg": "Преобразуваме до основен вид: sin(x) = √3/2.",
      "en": "Transform to basic form: sin(x) = √3/2."
     },
     {
      "bg": "Намираме главния ъгъл: arcsin(√3/2) = π/3.",
      "en": "Find the principal angle: arcsin(√3/2) = π/3."
     },
     {
      "bg": "Записваме двете групи решения: x1 = π/3 + 2·k·π и x2 = π − π/3 + 2·k·π = 2·π/3 + 2·k·π.",
      "en": "Write both solution sets: x1 = π/3 + 2·k·π and x2 = π − π/3 + 2·k·π = 2·π/3 + 2·k·π."
     }
    ],
    "why": {
     "bg": "Синусът е положителен в първи и втори квадрант, затова имаме две групи решения на един оборот.",
     "en": "Sine is positive in the first and second quadrants, so we have two sets of solutions per revolution."
    }
   },
   {
    "task": {
     "bg": "Решете уравнението cos(2x) = 1/2.",
     "en": "Solve the equation cos(2x) = 1/2."
    },
    "steps": [
     {
      "bg": "Прилагаме формулата за косинус: 2x = ±π/3 + 2·k·π.",
      "en": "Apply the cosine formula: 2x = ±π/3 + 2·k·π."
     },
     {
      "bg": "Делим цялото уравнение на 2, за да изолираме x.",
      "en": "Divide the entire equation by 2 to isolate x."
     },
     {
      "bg": "Резултатът е: x = ±π/6 + k·π.",
      "en": "The result is: x = ±π/6 + k·π."
     }
    ],
    "why": {
     "bg": "Важно е периодът 2·k·π също да се раздели на коефициента пред аргумента x.",
     "en": "It is important that the period 2·k·π is also divided by the coefficient of the argument x."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Забравяне на периода (+ 2·k·π или + k·π), което води до намиране само на едно решение вместо безкрайно много.",
    "en": "Forgetting the period (+ 2·k·π or + k·π), which leads to finding only one solution instead of infinitely many."
   },
   {
    "bg": "Неправилно определяне на дефиниционното множество за tg(x) и cotg(x), където функциите не са дефинирани.",
    "en": "Incorrectly determining the domain for tan(x) and cot(x), where the functions are not defined."
   },
   {
    "bg": "Опит за решаване на sin(x) = a или cos(x) = a, когато стойността |a| е по-голяма от 1.",
    "en": "Attempting to solve sin(x) = a or cos(x) = a when the value |a| is greater than 1."
   }
  ]
 },
 "tritypes": {
  "topicId": "tritypes",
  "idea": {
   "bg": "Триъгълниците се класифицират според техните страни (равностранен, равнобедрен, разностранен) или според техните ъгли (остроъгълен, правоъгълен, тъпоъгълен). Всяка група има специфични свойства, които определят връзките между елементите му.",
   "en": "Triangles are classified according to their sides (equilateral, isosceles, scalene) or their angles (acute, right, obtuse). Each group has specific properties that determine the relationships between its elements."
  },
  "why": {
   "bg": "Тази класификация работи, защото сумата от ъглите във всеки триъгълник е винаги 180 градуса и дължините на страните са пряко свързани с големината на срещулежащите им ъгли.",
   "en": "This classification works because the sum of the angles in any triangle is always 180 degrees and the lengths of the sides are directly related to the size of their opposite angles."
  },
  "rules": [
   {
    "bg": "Според страните: Равностранен (3 равни страни), Равнобедрен (2 равни страни), Разностранен (няма равни страни).",
    "en": "By sides: Equilateral (3 equal sides), Isosceles (2 equal sides), Scalene (no equal sides)."
   },
   {
    "bg": "Според ъглите: Остроъгълен (всички ъгли са под 90°), Правоъгълен (един ъгъл от 90°), Тъпоъгълен (един ъгъл над 90°).",
    "en": "By angles: Acute (all angles under 90°), Right (one 90° angle), Obtuse (one angle over 90°)."
   },
   {
    "bg": "В равнобедрения триъгълник ъглите при основата са равни. Пример: Ако единият е 50°, и другият е 50°.",
    "en": "In an isosceles triangle, the base angles are equal. Example: If one is 50°, the other is also 50°."
   },
   {
    "bg": "Сборът на ъглите винаги е 180°. Пример: В правоъгълен триъгълник сумата на двата остри ъгъла е 90°.",
    "en": "The sum of the angles is always 180°. Example: In a right triangle, the sum of the two acute angles is 90°."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Намерете ъглите на равнобедрен триъгълник, ако ъгълът при върха е 40°.",
     "en": "Find the angles of an isosceles triangle if the vertex angle is 40°."
    },
    "steps": [
     {
      "bg": "Извадете ъгъла при върха от общия сбор: 180 − 40 = 140°.",
      "en": "Subtract the vertex angle from the total sum: 180 − 40 = 140°."
     },
     {
      "bg": "Разделете резултата на две, тъй като ъглите при основата са равни: 140 : 2 = 70°.",
      "en": "Divide the result by two, since the base angles are equal: 140 : 2 = 70°."
     },
     {
      "bg": "Отговор: Ъглите са 40°, 70° и 70°.",
      "en": "Answer: The angles are 40°, 70°, and 70°."
     }
    ],
    "why": {
     "bg": "Използваме свойството, че сумата на ъглите е 180° и ъглите при основата на равнобедрения триъгълник са еднакви.",
     "en": "We use the property that the sum of angles is 180° and the base angles of an isosceles triangle are identical."
    }
   },
   {
    "task": {
     "bg": "Определете вида на триъгълник с ъгли 30° и 60°.",
     "en": "Determine the type of a triangle with angles of 30° and 60°."
    },
    "steps": [
     {
      "bg": "Намерете третия ъгъл: 180 − (30 + 60) = 180 − 90 = 90°.",
      "en": "Find the third angle: 180 − (30 + 60) = 180 − 90 = 90°."
     },
     {
      "bg": "Тъй като единият ъгъл е точно 90°, триъгълникът е правоъгълен.",
      "en": "Since one angle is exactly 90°, the triangle is a right triangle."
     }
    ],
    "why": {
     "bg": "Класификацията според ъглите зависи от най-големия ъгъл в триъгълника.",
     "en": "Classification by angles depends on the largest angle in the triangle."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Грешно се приема, че триъгълник може да има два тъпи или два прави ъгъла. Сумата би надвишила 180°.",
    "en": "Wrongly assuming a triangle can have two obtuse or two right angles. The sum would exceed 180°."
   },
   {
    "bg": "Объркване на страните: Равностранният триъгълник е и равнобедрен, но равнобедреният не винаги е равностранен.",
    "en": "Side confusion: An equilateral triangle is also isosceles, but an isosceles is not always equilateral."
   },
   {
    "bg": "Забравяне, че сборът на ъглите е винаги 180°, независимо от вида на триъгълника.",
    "en": "Forgetting that the sum of the angles is always 180°, regardless of the triangle type."
   }
  ]
 },
 "twostep": {
  "topicId": "twostep",
  "idea": {
   "bg": "Задачите с две действия са математически текстови задачи, при които не може да се отговори веднага на основния въпрос. Необходимо е първо да се намери междинен резултат, който помага за финалното решение.",
   "en": "Two-step word problems are mathematical text problems where the main question cannot be answered immediately. It is necessary to first find an intermediate result that helps lead to the final solution."
  },
  "why": {
   "bg": "Този метод развива логическото мислене, като учи учениците да разделят сложните проблеми на по-малки, управляеми стъпки. Той изгражда връзка между различните аритметични операции в реални ситуации.",
   "en": "This method develops logical thinking by teaching students to break down complex problems into smaller, manageable steps. It builds a connection between different arithmetic operations in real-world situations."
  },
  "rules": [
   {
    "bg": "Прочети внимателно задачата и определи какво се търси (основен въпрос) и какво е неизвестното помощно число.",
    "en": "Read the problem carefully and identify what is being asked (main question) and what the unknown auxiliary number is."
   },
   {
    "bg": "Първо действие: Изчисли междинната стойност, като използваш дадените в условието числа.",
    "en": "First step: Calculate the intermediate value using the numbers provided in the condition."
   },
   {
    "bg": "Второ действие: Използвай получения междинен резултат и останалата информация, за да отговориш на основния въпрос.",
    "en": "Second step: Use the obtained intermediate result and the remaining information to answer the main question."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "В един магазин имало 45 ябълки. Продали 12 от тях, а след това заредили още 20. Колко ябълки има в магазина сега?",
     "en": "There were 45 apples in a shop. They sold 12 of them, and then stocked 20 more. How many apples are in the shop now?"
    },
    "steps": [
     {
      "bg": "Намираме колко ябълки са останали след продажбата: 45 − 12 = 33 ябълки.",
      "en": "Find how many apples remained after the sale: 45 − 12 = 33 apples."
     },
     {
      "bg": "Към останалите добавяме новите ябълки: 33 + 20 = 53 ябълки.",
      "en": "Add the new apples to the remaining ones: 33 + 20 = 53 apples."
     }
    ],
    "why": {
     "bg": "Използваме изваждане за намаляване на количеството и събиране за увеличаването му.",
     "en": "We use subtraction for decreasing the quantity and addition for increasing it."
    }
   },
   {
    "task": {
     "bg": "Мария има 3 пакета с по 6 бонбона във всеки. Тя изяла 4 бонбона. Колко бонбона са и останали?",
     "en": "Maria has 3 packs with 6 candies in each. She ate 4 candies. How many candies does she have left?"
    },
    "steps": [
     {
      "bg": "Първо пресмятаме общия брой бонбони: 3 · 6 = 18 бонбона.",
      "en": "First, calculate the total number of candies: 3 · 6 = 18 candies."
     },
     {
      "bg": "Изваждаме изядените бонбони от общия брой: 18 − 4 = 14 бонбона.",
      "en": "Subtract the eaten candies from the total count: 18 − 4 = 14 candies."
     }
    ],
    "why": {
     "bg": "Първо умножаваме, за да групираме количествата, а след това изваждаме, за да намерим остатъка.",
     "en": "First, we multiply to group the quantities, then we subtract to find the remainder."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Спиране след първото действие и приемане на междинния резултат за краен отговор.",
    "en": "Stopping after the first step and taking the intermediate result as the final answer."
   },
   {
    "bg": "Използване на грешна аритметична операция (например събиране вместо умножение при групиране).",
    "en": "Using the wrong arithmetic operation (e.g., addition instead of multiplication when grouping)."
   },
   {
    "bg": "Неправилно подреждане на действията, което води до логическа грешка в смисъла на задачата.",
    "en": "Incorrect sequencing of steps, leading to a logical error in the context of the problem."
   }
  ]
 },
 "unitconv": {
  "topicId": "unitconv",
  "idea": {
   "bg": "Преобразуването е изразяване на една и съща величина чрез различни мерни единици. Това става чрез умножение или деление с числото, което показва колко малки единици се съдържат в една голяма.",
   "en": "Conversion is expressing the same quantity using different units of measurement. This is done by multiplying or dividing by the factor that shows how many smaller units are contained in one larger unit."
  },
  "why": {
   "bg": "Методът работи, защото когато сменяме единицата с по-малка, ни трябват повече на брой части, за да запазим същото количество, и обратното. Това е прилагане на правопропорционалност.",
   "en": "The method works because when we change to a smaller unit, we need more parts to keep the same amount, and vice versa. This is an application of direct proportionality."
  },
  "rules": [
   {
    "bg": "От по-голяма към по-малка единица: Умножаваме по коефициента (напр. 2 m = 2 · 100 = 200 cm).",
    "en": "From larger to smaller unit: Multiply by the factor (e.g., 2 m = 2 · 100 = 200 cm)."
   },
   {
    "bg": "От по-малка към по-голяма единица: Делим на коефициента (напр. 500 g = 500 : 1000 = 0.5 kg).",
    "en": "From smaller to larger unit: Divide by the factor (e.g., 500 g = 500 : 1000 = 0.5 kg)."
   },
   {
    "bg": "При квадратни единици (площ) коефициентът се повдига на квадрат (напр. 1 m² = 100² = 10 000 cm²).",
    "en": "For square units (area), the factor is squared (e.g., 1 m² = 100² = 10 000 cm²)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Превърнете 3.5 километра в метри.",
     "en": "Convert 3.5 kilometers to meters."
    },
    "steps": [
     {
      "bg": "Определяме връзката: 1 km = 1000 m.",
      "en": "Identify the relation: 1 km = 1000 m."
     },
     {
      "bg": "Тъй като преминаваме от по-голяма към по-малка единица, умножаваме.",
      "en": "Since we are moving from a larger to a smaller unit, we multiply."
     },
     {
      "bg": "Пресмятаме: 3.5 · 1000 = 3500 m.",
      "en": "Calculate: 3.5 · 1000 = 3500 m."
     }
    ],
    "why": {
     "bg": "В един километър има хиляда метра, затова 3.5 км съдържат 3500 единични метра.",
     "en": "One kilometer contains a thousand meters, so 3.5 km contains 3500 individual meters."
    }
   },
   {
    "task": {
     "bg": "Превърнете 120 минути в часове.",
     "en": "Convert 120 minutes to hours."
    },
    "steps": [
     {
      "bg": "Определяме връзката: 1 h = 60 min.",
      "en": "Identify the relation: 1 h = 60 min."
     },
     {
      "bg": "Преминаваме от по-малка към по-голяма единица, затова делим.",
      "en": "We are moving from a smaller to a larger unit, so we divide."
     },
     {
      "bg": "Пресмятаме: 120 : 60 = 2 h.",
      "en": "Calculate: 120 : 60 = 2 h."
     }
    ],
    "why": {
     "bg": "Търсим колко пъти интервалът от 60 минути се съдържа в 120 минути.",
     "en": "We are looking for how many times the 60-minute interval is contained within 120 minutes."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Объркване на посоката: Умножение вместо деление при преминаване към по-голяма единица.",
    "en": "Direction confusion: Multiplying instead of dividing when moving to a larger unit."
   },
   {
    "bg": "Забравяне на нули: Често се бърка връзката между cm и m (100) с тази между mm и m (1000).",
    "en": "Missing zeros: Often confusing the relation between cm and m (100) with mm and m (1000)."
   },
   {
    "bg": "Грешно преобразуване на площ: Използване на линейни коефициенти вместо квадратни (напр. 1 m² = 100 cm² вместо 10 000 cm²).",
    "en": "Incorrect area conversion: Using linear factors instead of squared factors (e.g., 1 m² = 100 cm² instead of 10 000 cm²)."
   }
  ]
 },
 "vectors": {
  "topicId": "vectors",
  "idea": {
   "bg": "Векторът е насочена отсечка, която се определя от своята големина и посока. Той се означава с малка латинска буква със стрелка отгоре или чрез начална и крайна точка, например AB.",
   "en": "A vector is a directed line segment defined by its magnitude and direction. It is denoted by a lowercase letter with an arrow or by its start and end points, such as AB."
  },
  "why": {
   "bg": "Векторното смятане позволява описването на физични величини и геометрични транслации чрез алгебрични операции. То обединява геометрията с аритметиката, което улеснява решаването на сложни задачи за успоредност и съотношения.",
   "en": "Vector calculus allows the description of physical quantities and geometric translations through algebraic operations. It combines geometry with arithmetic, making it easier to solve complex problems involving parallelism and ratios."
  },
  "rules": [
   {
    "bg": "Правило на триъгълника: Сборът на два вектора AB + BC е равен на вектора AC.",
    "en": "Triangle rule: The sum of two vectors AB + BC is equal to the vector AC."
   },
   {
    "bg": "Умножение с число: Векторът k · a има същата посока като a, ако k > 0, и обратна, ако k < 0.",
    "en": "Scalar multiplication: The vector k · a has the same direction as a if k > 0, and the opposite direction if k < 0."
   },
   {
    "bg": "Колинеарност: Два вектора са успоредни (колинеарни), ако единият може да се изрази като другия, умножен по число (a = k · b).",
    "en": "Collinearity: Two vectors are parallel (collinear) if one can be expressed as the other multiplied by a number (a = k · b)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Даден е триъгълник ABC. Намерете сбора на векторите AB + BC + CA.",
     "en": "Given a triangle ABC. Find the sum of the vectors AB + BC + CA."
    },
    "steps": [
     {
      "bg": "Прилагаме правилото на триъгълника за първите два вектора: AB + BC = AC.",
      "en": "Apply the triangle rule to the first two vectors: AB + BC = AC."
     },
     {
      "bg": "Събираме получения вектор с третия: AC + CA = AA.",
      "en": "Add the resulting vector to the third one: AC + CA = AA."
     },
     {
      "bg": "Векторът AA е нулевият вектор (0), тъй като началото и краят му съвпадат.",
      "en": "The vector AA is the zero vector (0), as its start and end points coincide."
     }
    ],
    "why": {
     "bg": "Сумата от вектори, образуващи затворен контур, винаги е равна на нула.",
     "en": "The sum of vectors forming a closed loop is always equal to zero."
    }
   },
   {
    "task": {
     "bg": "Ако M е среда на отсечката AB и O е произволна точка, изразете вектора OM чрез OA и OB.",
     "en": "If M is the midpoint of segment AB and O is an arbitrary point, express vector OM using OA and OB."
    },
    "steps": [
     {
      "bg": "Записваме OM през точка A: OM = OA + AM.",
      "en": "Write OM through point A: OM = OA + AM."
     },
     {
      "bg": "Тъй като M е среда, векторът AM = 1/2 · AB.",
      "en": "Since M is the midpoint, vector AM = 1/2 · AB."
     },
     {
      "bg": "Изразяваме AB като разлика: AB = OB − OA.",
      "en": "Express AB as a difference: AB = OB − OA."
     },
     {
      "bg": "Заместваме и получаваме: OM = OA + 1/2 · (OB − OA) = 1/2 · (OA + OB).",
      "en": "Substitute and obtain: OM = OA + 1/2 · (OB − OA) = 1/2 · (OA + OB)."
     }
    ],
    "why": {
     "bg": "Това е фундаментална формула за медианата (радиус-вектор към среда).",
     "en": "This is a fundamental formula for the median (radius-vector to a midpoint)."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Объркване на посоката: Векторът AB не е равен на BA, а на −BA.",
    "en": "Direction confusion: Vector AB is not equal to BA, but to −BA."
   },
   {
    "bg": "Неправилно събиране: Опит за събиране на големините на векторите вместо самите вектори (дължината на AB+BC не винаги е равна на |AB|+|BC|).",
    "en": "Incorrect addition: Attempting to add the magnitudes of vectors instead of the vectors themselves (length of AB+BC is not always |AB|+|BC|)."
   },
   {
    "bg": "Пропускане на стрелките над буквите, което превръща вектора в обикновена отсечка или число.",
    "en": "Omitting the arrows above the letters, which turns the vector into a simple line segment or a number."
   }
  ]
 },
 "work": {
  "topicId": "work",
  "idea": {
   "bg": "Задачите за съвместна работа разглеждат ситуации, в които два или повече обекта извършват определена дейност заедно. Основната концепция е, че общата работа е сбор от частите, извършени от всеки участник.",
   "en": "Work problems examine situations where two or more objects perform a specific activity together. The core concept is that the total work is the sum of the parts completed by each participant."
  },
  "why": {
   "bg": "Методът работи, защото се въвежда величината 'производителност' (P), която показва каква част от работата се извършва за единица време. Това позволява съставяне на уравнение, в което сумата от частите на всеки е равна на 1 (цялата работа).",
   "en": "The method works because it introduces the quantity 'productivity' (P), which shows what part of the work is done per unit of time. This allows for an equation where the sum of each participant's parts equals 1 (the whole work)."
  },
  "rules": [
   {
    "bg": "Цялата работа се приема за единица: A = 1. Ако времето за свършване на цялата работа е T, то производителността е P = 1/T.",
    "en": "The whole work is assumed to be one: A = 1. If the time to finish the whole work is T, then the productivity is P = 1/T."
   },
   {
    "bg": "Извършената работа за определено време t се изчислява по формулата A = P · t.",
    "en": "The work performed over a specific time t is calculated using the formula A = P · t."
   },
   {
    "bg": "Основно уравнение при съвместна работа: P1 · t + P2 · t = 1 (или сборът от частите на всеки е равен на 1).",
    "en": "Basic equation for working together: P1 · t + P2 · t = 1 (or the sum of the parts of each equals 1)."
   }
  ],
  "examples": [
   {
    "task": {
     "bg": "Един работник може да боядиса стена за 3 часа, а друг за 6 часа. За колко часа ще я боядисат заедно?",
     "en": "One worker can paint a wall in 3 hours, and another in 6 hours. In how many hours will they paint it together?"
    },
    "steps": [
     {
      "bg": "Намираме производителностите: P1 = 1/3 и P2 = 1/6.",
      "en": "Find the productivities: P1 = 1/3 and P2 = 1/6."
     },
     {
      "bg": "Нека общото време е x. Съставяме уравнението: (1/3) · x + (1/6) · x = 1.",
      "en": "Let the total time be x. Form the equation: (1/3) · x + (1/6) · x = 1."
     },
     {
      "bg": "Привеждаме под общ знаменател 6: 2x + x = 6, откъдето 3x = 6.",
      "en": "Bring to a common denominator of 6: 2x + x = 6, hence 3x = 6."
     },
     {
      "bg": "Намираме x = 2 часа.",
      "en": "Find x = 2 hours."
     }
    ],
    "why": {
     "bg": "Заедно те работят по-бързо, затова времето е по-малко от това на всеки поотделно.",
     "en": "Together they work faster, so the time is less than each individual's time."
    }
   },
   {
    "task": {
     "bg": "Една тръба пълни басейн за 4 часа, а друга го изпразва за 12 часа. За колко часа ще се напълни басейнът, ако работят и двете?",
     "en": "One pipe fills a pool in 4 hours, and another empties it in 12 hours. In how many hours will the pool fill if both are working?"
    },
    "steps": [
     {
      "bg": "P1 = 1/4 (пълнене), P2 = 1/12 (изпразване). Тъй като втората тръба пречи, нейната работа е с минус.",
      "en": "P1 = 1/4 (filling), P2 = 1/12 (emptying). Since the second pipe hinders the process, its work is negative."
     },
     {
      "bg": "Уравнение: (1/4) · x - (1/12) · x = 1.",
      "en": "Equation: (1/4) · x - (1/12) · x = 1."
     },
     {
      "bg": "Общ знаменател 12: 3x - x = 12, което дава 2x = 12.",
      "en": "Common denominator 12: 3x - x = 12, which gives 2x = 12."
     },
     {
      "bg": "Резултат: x = 6 часа.",
      "en": "Result: x = 6 hours."
     }
    ],
    "why": {
     "bg": "Работата на едната тръба се изважда от работата на другата, защото действат в противоположни посоки.",
     "en": "The work of one pipe is subtracted from the work of the other because they act in opposite directions."
    }
   }
  ],
  "mistakes": [
   {
    "bg": "Директно събиране на времената (напр. 3ч + 6ч = 9ч), вместо събиране на производителностите.",
    "en": "Directly adding the times (e.g., 3h + 6h = 9h) instead of adding the productivities."
   },
   {
    "bg": "Забравяне, че 'цялата работа' е числото 1 в дясната страна на уравнението.",
    "en": "Forgetting that 'the whole work' is the number 1 on the right side of the equation."
   },
   {
    "bg": "Неправилно отчитане на времето, когато работниците не започват едновременно.",
    "en": "Incorrectly accounting for time when workers do not start at the same time."
   }
  ]
 }
};
