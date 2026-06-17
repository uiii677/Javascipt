const student = {
    name:"Umair",
    marks: ["85", "92", "72", "95", "88"]
};

//Find total
//Find avg

let total = Number(student.marks[0]) +
            Number(student.marks[1]) +
            Number(student.marks[2]) +
            Number(student.marks[3]) +
            Number(student.marks[4])

let avg = total / student.marks.length

console.log(`Name: ${student.name}`);
console.log(`Total: ${total}`);
console.log(`Average: ${avg}`);

if (avg >= 50){
    console.log("Pass");
}

const colors = ["red", "blue"];

colors.push("green");

console.log(colors);