//Exercise 1
const city = " Algiers";
const celsius = "21.5";
const fahrenheit = (celsius * 9) / 5 + 32;

const isWarm = celsius >= 20 ? true : false;

console.log("Algiers :", celsius, "C = ", fahrenheit.toFixed(1));

console.log(typeof city, typeof celsius, typeof isWarm);

const weather = isWarm ? "Warm day" : "Cold day";
console.log(weather);
let form = "21.5";

console.log(form + 1, Number(form) + 1);

//Exercise 2

function mention(grade) {
    let mark;
    if (grade < 0 || grade > 20) mark = "Invalide grade ";
    else if (grade < 10) mark = "Fail";
    else if (grade < 12) mark = "Pass";
    else if (grade < 14) mark = "Good";
    else if (grade < 16) mark = "Very good";
    else mark = "Excellent";

    return mark;
}
console.log(
    mention(9.5),
    mention(12),
    mention(15.75),
    mention(18),
    mention(21),
);

//Exercise 3

let text = "";

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) text += "FizzBuzz ";
    else if (i % 3 === 0) text += "Fizz ";
    else if (i % 5 === 0) text += "Buzz";
    else text += i + " ";
}
console.log(text);
let amount = 10000;
let years = 0;

while (amount < 20000) {
    amount *= 1.05;
    years++;
}

console.log(years, "years to double");
console.log(Math.round(amount));

//Exercise 4

const grades = [12, 8.5, 15, 17.25, 9, 14];

const average = grades.reduce((sum, p) => sum + p, 0) / grades.length;
console.log("Average :", average.toFixed(2));

const bestGrade = Math.max(...grades);
const worstGrade = Math.min(...grades);
console.log("Best :", bestGrade, "Worst :", worstGrade);


const passed = grades.filter((p) => p >= 10);
console.log(passed.length, "of 6", grades.length, " passed");


const Sorted = [...grades].sort((a, b) => b - a);
console.log(Sorted);

console.log(grades);

const mentions = grades.map((p) => mention(p));
console.log(mentions);

//Exercise 5
const event1 = {
    title: "Hackathon",
    seats: 30,
    day: "Fri",
};

const student1 = {
    name: "Amina",
    group: "G1",
    grades: [14, 16, 12],
};
const student2 = {
    name: "Yacine",
    group: "G2",
    grades: [9, 11, 10],
};
const student3 = {
    name: "Lina",
    group: "G1",
    grades: [18, 17, 19],
};
const student4 = {
    name: "Karim",
    group: "G2",
};

const students = [student1, student2, student3, student4];

function averageOf(list) {
    if (list.length === 0) return 0;
    const total = list.reduce((sum, p) => sum + p, 0);
    return total / list.length;
}

const studentsAverage = students.map((s) => ({ name: s.name, average: averageOf(s.grades ?? []) }));
console.table(studentsAverage);

const bestStudent = studentsAverage.reduce((best, s) => s.average > best.average ? s : best, { name: "", average: 0 });
console.log("Best student :", bestStudent.name, "(", bestStudent.average.toFixed(2) , ")");

const studentG1 = students.filter((p) => p.group === "G1");
const studentG1Names = studentG1.map((p) => p.name);
console.log(studentG1Names);

const JSONtext = JSON.stringify(student1);

console.log(JSONtext);


function parseStudent(json) {
    try {
        return JSON.parse(json);
    }
    catch (error) {
        console.error("Invalid JSON:");
        return null;
    }
}

const parsed =parseStudent(JSONtext);
console.log(parsed);
const invalidParsed = parseStudent( "{name: `lina`}");
console.log(invalidParsed);
