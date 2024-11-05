
//Izveido funkciju, kas izvada konsolē statisku tekstu,
//piem., tavu vārdu. Izsauc šo funkciju pārliecinoties, ka tā izvada vārdu.

function outputNameText(){
    console.log("Anna");
}
outputNameText();

//Izveido funkciju ar vienu parametru name.
//Izsauc šo funkciju kā argumentu padodot statisku tekstu, piem., savu vārdu

function outputName(name){
    console.log(name);
}
outputName("Anna");

//Izveido funkciju,
//kura izvada konsolē skaitļus no 1 līdz 10
function outputNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

outputNumbers();



//Izveido funkciju ar diviem parametriem - skaitļiem, kuri nosaka
//no kura līdz kuram skaitlim veikt izvadi. Izsauc šo funkciju,
//piem., ar argumentiem 5 un 8 un pārliecinies, ka izvade ir attiecīgi 5, 6, 7, 8
function outputNumbersFromTo(start, end){
    for (let i = start; i <= end; i++) {
    console.log(i);
    }
}

outputNumbersFromTo(5, 8);