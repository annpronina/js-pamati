
const nameInput = document.getElementById("name");
const button = document.getElementById("click-button");

button.addEventListener("click", function() {
    printName(nameInput.value);
    
});

function printName(name){
    console.log(name);
}