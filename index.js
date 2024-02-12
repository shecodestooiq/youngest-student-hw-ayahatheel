
var students = [
    { name: "Ayah", age: 26 },
    { name: "Noor", age: 21 },
    { name: "Sarah", age: 30 },
    { name: "Mais", age: 24 }
];

function showYoungestStudent(students) {
    var youngestAge = Math.min(...students.map(student => student.age));
    var youngestStudent = students.find(student => student.age === youngestAge);
    console.log("The youngest student is: " + youngestStudent.name);
}

showYoungestStudent(students);


/* I found the solution to my code on Stack Overflow (Math.min...) and Developer Mozilla (.find). 
The specific threads where I found the solution are: */

console.log("https://stackoverflow.com/questions/8864430/compare-javascript-array-of-objects-to-get-min-max");
// answer by JuZDePeche

console.log("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find");


module.exports = showYoungestStudent;
