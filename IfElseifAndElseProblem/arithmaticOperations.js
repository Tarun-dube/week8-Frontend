const readline=require("readline");

//create interface
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


r1.question("Enter the first number ",(input1)=>{ 
    r1.question("Enter the second number ",(input2)=>{ 
        r1.question("Enter the third number ",(input3)=>{ 

            let a=parseInt(input1.trim()); 
            let b=parseInt(input2.trim()); 
            let c=parseInt(input3.trim()); 

            //operations
            //first operation
            let first=a+b*c;
            //second operation
            let second=a%b+c;
            //third operation
            let third=c + a / b;
            //fourth operation
            let fourth=(a * b) + c;

            let results=[first,second,third, fourth];

            let max=Math.max(...results);
            let min=Math.min(...results);

            //print results
            console.log("The result of operations");  
            console.log(`1. a + b * c= ${first}`);  
            console.log(`2. a % b + c= ${second}`);  
            console.log(`3. c + a / b= ${third}`);  
            console.log(`4. a * b + c= ${fourth}`);  

            //print max and min
            console.log(`Maximum value is: ${max}`); 
            console.log(`Minimum value is: ${min}`); 

        r1.close();
        });
    });
});