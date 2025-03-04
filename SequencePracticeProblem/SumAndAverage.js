let numbers=[];

for(let i=0;i<5;i++){
    let randomNo=Math.floor(Math.random()*90)+10;
    numbers.push(randomNo);
}

let sum=numbers.reduce((acc,num)=> acc+num,0);

let average=sum/5;

console.log("Numbers are: "+numbers);
console.log("Sum: "+sum);
console.log("Average: "+average);
