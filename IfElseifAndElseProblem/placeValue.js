//module of nodejs for takin input from keyboard
const readline=require("readline");

//create interface 
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Enter the number",(input)=>{
    let num =parseInt(input.trim());

    if(num==1)console.log("The place value of 1 is: Unit");
    else if(num==10) console.log("The place value of 10 is : Ten");  
    else if(num==100) console.log("The place value of 100 is : Hundred");   
    else if(num==1000) console.log("The place value of 1000 is : Thousand");   
    else if(num==10000) console.log("The place value of 10000 is : Ten Thousand");   
    else if(num==100000) console.log("The place value of 100000 is : Lakh");   
    else if(num==1000000) console.log("The place value of 1000000 is : Ten Lakh");   
    else if(num==10000000) console.log("The place value of 10000000 is : Crore");
    else console.log("Invalid input: Enter the number 1,10,100...etc")   ;
    
    r1.close();

});