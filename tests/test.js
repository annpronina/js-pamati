let car = {
    brand: "Nissan",
    model: "Silvia",
    year: 1998,
    car_owner: "nezināms"
};

console.log("Brand and Model: ", car.brand, car.model);

console.log("Brand and Model: ", car["brand"], car["model"]);   

let currentYear = new Date().getFullYear();

if (currentYear - car.year > 10) {
    console.log("Mašīna ir vecāka par 10 gadiem,");
}else{
    console.log("Mašīna ir jaunāka par 10 gadiem.");
}

if (car.brand === "Nissan"){
    console.log("Ši ir Nissan mašīna");
}

console.log("Mašīnas īpašnieks: ", car.car_owner);