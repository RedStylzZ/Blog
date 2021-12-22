function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function faculty(x) {
    if (x <= 1) return 1;
    return x * faculty(x-1)
}


let a = 24;
let b = 38;
let f = 5;

console.log("Addition: ", add(a, b));
console.log("Multiply: ", multiply(a, b));
console.log("Faculty: ", faculty(f));
