let prompt=require("prompt-sync")();

let n=parseInt(prompt("Enter the number "));


for(let i=0;i<=n;i++){
    console.log(`2^${i} = ${2 ** i}`);
}