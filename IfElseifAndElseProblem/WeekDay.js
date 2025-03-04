//module of nodejs for takin input from keyboard
const readline=require("readline");

//create interface 
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const dayMap={1:"Sunday",2:"Monday",3:"Tuesday",4:"Wednesday",
    5:"Thursday",6:"Friday",7:"Saturday"};

//request number from user

r1.question("Enter the number from 1 to 7 ", (input)=>{
    let num=parseInt(input.trim());
    
    if(isNaN(num)||num<1||num>7){
        console.log("Enter the number between 1 and 7");
    }
    else console.log(`The day is ${dayMap[num]}`);
    r1.close();
});
