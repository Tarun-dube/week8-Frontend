let prompt=require("prompt-sync")();

let n=parseInt(prompt("enter the number "));
let prime=true;
for (let i=2;i<=n/2;i++){
    if(n%i==0){
    prime=false;
    break;
    }
}
if(n==1) console.log("It is not a prime number");
else if(prime) console.log("It is prime number");
else console.log("It is not a prime number");