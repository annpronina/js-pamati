//1
let numbers = printNumbers(5, 8);

function printNumbers(x, y) {
   
    let result = [];
    for (let i = x; i <= y; i++) {
        result.push(i);
    }
    return result;  
}

console.log(numbers);


//2
function printName() {
    return "Anna";  
}

let myName = printName();

console.log(myName);


//3
function sum(x, y) {
    return x + y;  
}

let total = sum(5, 7);

console.log(total);

//4
function getMax(x, y) {
    return x > y ? x : y;  
}

console.log(getMax(43, 20));  
console.log(getMax(24, 15));  
console.log(getMax(5, 6));    