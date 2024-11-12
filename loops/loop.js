
const num1 = parseInt(document.getElementById("num1").value);
const num2 = parseInt(document.getElementById("num2").value); 

const button = document.getElementById("button-submit");
const resultParagraph = document.getElementById("result");

button.addEventListener("click", numberInput);

function numberInput(){

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0 || num1 >= num2){
        alert("Ievadiet naturālus skaitļus, kur pirmais skaitlis ir mazāks par otro!")
        return;
    }

    let numbers = [];
    for (let i = num1; i < num2; i++) {
        numbers.push(i);
    }

    resultParagraph.textContent = `Naturālie skaitļi starp ${num1} un ${num2}: ${numbers.join(', ')}`;
}


