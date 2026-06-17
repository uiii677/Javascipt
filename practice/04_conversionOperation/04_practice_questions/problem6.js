//Task
// The parameters may come as strings (e.g., "10").
// Convert them to numbers.
// Return the area.
// Print the result and its type.

function area(length, width){
    return Number(length) * Number(width);
}

let result = area("10", "5");

// console.log(result);
// console.log(typeof result);

//Convert age and salary to numbers.

// Calculate the salary after a 10% bonus.
// Print:
// Name
// Age and its type
// Total skills
// Salary after bonus

let employee = { 
    name: "Umair",
    age: "21",
    salary: "19999",
    skills: ["Js","CSS","HMTL"]
    
}

 let ageInNumber = Number(employee.age)
 let salaryInNumber = Number(employee.salary)
 let totalSalary = salaryInNumber + (salaryInNumber * 10 / 100 );

 console.log(`Name: ${employee.name}`);
 console.log(`Age: ${ageInNumber} | type: ${typeof ageInNumber}`);
 console.log(`Total skills: ${employee.skills.length}`);
 console.log(`Salary after bonus: ${totalSalary} `);


 console.log(null > 0);
 console.log(null == 0);
 console.log(null >= 0);
 
