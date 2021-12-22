function updateStudent(students, id) {
    students.forEach((student) => {
        if (student.id === id) {
            student.name = "Tizian2";
        }
    });
    return students;
}

function replaceStudent(students, id, newStudent) {
    return students.map((student) =>
        student.id === id ? newStudent : student
    );
}

/*function replaceStudent(students, id, newStudent) {
    students.forEach((student) =>
        student.id === id ? newStudent : student
    );
    return students;
}*/

let student1 = {name: "Tizian", id: 1};
let student2 = {name: "Michael", id: 2};
let student3 = {name: "Jacqueline", id: 3};
let student4 = {name: "Thuy", id: 4};
let student5 = {name: "Turtle", id: 69};
let students = [student1, student2, student3, student4];

students.forEach(student => console.log(student))
students = updateStudent(students, 1)
console.log()
students.forEach(student => console.log(student))
console.log()

students = replaceStudent(students, 1, student5)
students.forEach(student => console.log(student))
