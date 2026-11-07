// Closure example
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
function makeCounter() {
    let count = 0; // private to this call
    return () => {
        count++;
        return count;
    };
}
const likes = makeCounter();
console.log(likes()); // 1
console.log(likes()); // 2
const views = makeCounter();
console.log(views()); // 1 (its own count)

// setTimeout example
setTimeout(() => console.log("3 s later"), 3000);

// Array methods example
const scores = [12, 7, 8, 15, 9, 14];

const withBonus = scores.filter((p) => p >= 10).map((p) => p + 2);
console.log(withBonus);
const totale = scores.reduce((sum, p) => sum + p, 0);

const average = totale / scores.length;
console.log("Average :", average.toFixed(2));

//sotring numbers
const seats = [10, 1, 5, 25];
seats.sort();
console.log(seats); // [1, 10, 25, 5] (lexicographic order)
seats.sort((a, b) => a - b);
console.log(seats); // [1, 5, 10, 25] (numeric order)

//Destructuring and spread operator
const podium = ["Amina", "Yacine", "Lina"];
const [first, second] = podium;
console.log(first, second);
// first = "Amina", second = "Yacine"
const [winner, ...others] = podium;
console.log(winner, others);
// others = ["Yacine", "Lina"]
const all = [...podium, "Sara"]; // copy + add
console.log(all);
const merged = [...podium, ...podium];
console.log(merged);

//Objects and JSON
//changing an object
const event = { title: "Hackathon", seats: 30 };
event.seats = 28; // change a value
event.room = "Hall A"; // add a new key
delete event.title; // remove a key
console.log(event);
console.log("seats" in event); // is it there?
// Shorthand: { title } means { title: title }
const title = "Git workshop";
const Seats = 12;
const workshop = { title, seats };
console.log(workshop);
