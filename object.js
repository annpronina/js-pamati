//Izveido mainīgo, kurā glabājas objekts, kas reprezentē personu
//un trīs tās īpašības, piem., vārdu, vecumu un vai persona ir students 
let person = {
    name: "Anna",
    age: 18,
    isStudent: true
}

//Konsolē izvadi šīs personas vārdu izmantojot
//gan dot notation, gan bracket notation
console.log(person.name);
console.log(person["name"]);

//Izveido nosacījumu, kas pārbauda
//vai šī persona ir pilngadīga un izdod attiecīgu paziņojumu 

if (person.age >= 18) {
    console.log(person.name + " ir pilngadīga.");
} else {
    console.log(person.name + " nav pilngadīga.");
}

//Izveido nosacījumu,
//kas pārbauda vai persona ir students un izvada attiecīgu paziņojumu 

if (person.isStudent) {
    console.log(person.name + " is a student.");
} else {
    console.log(person.name + " is not a student.");
}

//Esošajam objektam pievieno jaunu atribūtu course ar vērtību PT2024
person.course = "PT2024";
console.log(person.course);