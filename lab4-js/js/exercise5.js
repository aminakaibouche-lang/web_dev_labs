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
