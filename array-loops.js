
//Izveidot failu arrays-loops.js

//Izveido divus for ciklus (loop), kuri izvada skaitļus no 11 līdz 20 un no 20 līdz 11 attiecīgi
for (let i = 11; i <= 20; i++) {
    console.log(i);
  }

for (let i = 20; i >= 11; i++){
    console.log(i);
  }

//Izveidot masīvu jeb array tipa mainīgo, kurā tiek glabāti 5 tavu draugu vārdi
//Izvadi konsolē pirmā un trešā drauga vārdu
const array = ["Anna", "Aivars", "Dāvis", "Kira", "Kristaps"];
console.log(array[0]); 
console.log(array[2]);

//Izveido mainīgo, kurā glabājas izveidotā masīva garums jeb elementu skaits tajā
let arraysCount = array.length;

//Izmantojot šo mainīgo, izveido ciklu, kas izvada katru vārdu jaunā rindā
//Papildini izveidoto ciklu ar numerāciju, piem., "1. Jānis", "2. Antra" utt.
for (let i = 0; i < arraysCount; i++) {
    console.log(`${i + 1}. ${array[i]}`);
  }
  