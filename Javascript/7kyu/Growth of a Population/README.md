---7 kyu---Growth of a Population

---

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 

1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 

1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:

1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.

More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:

nb_year(1500, 5, 100, 5000) -> 15

nb_year(1500000, 2.5, 10000, 2000000) -> 10

Note:

Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

---

В маленьком городке население р0 = 1000 в начале года. Население регулярно увеличивается на 2 процента в год, и более 50 новых жителей ежегодно переезжают в город. Сколько лет нужно городу, чтобы его население стало больше или равно p = 1200 жителей?

В конце первого года будет:

1000 + 1000 * 0,02 + 50 => 1070 жителей

В конце 2-го года будет:

1070 + 1070 * 0,02 + 50 => 1141 жителей (** количество жителей — целое число **)

В конце 3-го года будет:

1141 + 1141 * 0,02 + 50 => 1213

На это потребуется целых 3 года.

Более общие параметры:

p0, процент, aug (жители приезжают или уезжают каждый год), p (население, которое должно превзойти)

функция nb_year должна возвращать n полных лет, необходимых для получения населения, большего или равного p.

aug — целое число, процент — положительное или нулевое плавающее число, p0 и p — положительные целые числа (> 0)

Примеры:

nb_year(1500, 5, 100, 5000) -> 15

nb_year(1500000, 2.5, 10000, 2000000) -> 10

Примечание:

Не забудьте преобразовать параметр процента в процент в теле вашей функции: если параметр процента равен 2, вы должны преобразовать его в 0,02.
