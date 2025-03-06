let prompt=require("prompt-sync")();

let n=parseInt(prompt("enter the number "));

let harmonic =0;

for(let i=1;i<=n;i++){
    harmonic +=1/i;
}

console.log(`Harmonic number H${n} =${harmonic.toFixed(6)}`);