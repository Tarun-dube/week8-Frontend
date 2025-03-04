function inchesTofeet(inches){
    return inches/12;
}
//(a) convert 42 inches in feet;
let inch =42;

console.log(`(a) ${inch} inches = ${inchesTofeet(inch)} feet`);

//(b) convert into meter

function feetToMeter(feet){
    return feet*0.3048;
}

let lengthFeet=60; let widthFeet=40;
let lengthMeters=feetToMeter(lengthFeet);
let widthMeters=feetToMeter(widthFeet);

console.log(`(b) ${lengthFeet} X ${widthFeet} ft = ${lengthMeters} m X ${widthMeters} m`);

//(c) area of 25 such plot in acre

function squareFeetToAcre(area){
    return area/43560;
}

let areaSqFeet=lengthFeet*widthFeet;
//area of 25 plots
let area=areaSqFeet*25;

//area in acre

let areaAcre=squareFeetToAcre(area);
console.log(`(c) Area of 25 such plot = ${areaAcre} acres`);
