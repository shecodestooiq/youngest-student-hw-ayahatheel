
var students = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 2 },
    { name: 'Charlie', age: 21 },
];

function showYoungestStudent(students) {
    if (students.length === 0) {
        console.log("can't find the youngest students");
        return;
    }

    var youngestAge = Math.min(...students.map(student => student.age));
    var youngestStudent = students.find(student => student.age === youngestAge);
    console.log("The youngest student is: " + youngestStudent.name);
}

showYoungestStudent(students);



/* I found the solution to my code on Stack Overflow (Math.min...) and Developer Mozilla (.find). 
The specific threads where I found the solution are: 
https://stackoverflow.com/questions/8864430/compare-javascript-array-of-objects-to-get-min-max"
answer by JuZDePeche
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
*/

module.exports = showYoungestStudent;
