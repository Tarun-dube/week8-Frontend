let prompt=require("prompt-sync")();

let num=parseInt(prompt("Enter the choice from 1 to 4: "));
let value=parseFloat(prompt("Enter the number to be converted "));

switch(num){
    case 1:
        console.log(`${value} feet= ${value*12} inch`);
        break;
    case 2:
        console.log(`${value} feet= ${value*0.3048} meter`);
        break;
    case 3:
        console.log(`${value} inch= ${value/12} feet`);
        break;
    case 4:
        console.log(`${value}} meter= ${value/0.3048} feet`);
        break;

    default:
        console.log("Invalid choice: Enter choice from 1 to  4");
}