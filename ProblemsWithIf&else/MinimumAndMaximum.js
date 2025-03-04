let numbers=[];

for (let i=0;i<5;i++){
    let randomNo=Math.floor(Math.random()*900)+100;
    numbers.push(randomNo);
}
let max=0;
let min=1000;
for(let i=0;i<5;i++){
    if(numbers[i]>max)max=numbers[i];
    if(numbers[i]<min)min=numbers[i];
}

console.log(`The numbers are = ${numbers} , and the minimum value = ${min} & maximum value = ${max}`);