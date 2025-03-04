//module of nodejs for takin input from keyboard
const readline=require("readline");

//create interface 
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// zero index contain zero
const numbers=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];

//ask user for input
r1.question("Enter the number between 0-9 ", (input)=>{
    let num=parseInt(input.trim());
    //validate input
   
    if(isNaN(num)||num<0||num>9){
        console.log("Invalid Input: Enter the number between 0 and 9");
    }
    else console.log(`The entered number is ${numbers[num]}`);
    r1.close();
});