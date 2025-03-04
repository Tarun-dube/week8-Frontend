//take the inputs other than first two
let args=process.argv.slice(2);
if(args.length!=1){
    console.log("Use: node script.js <year>");
    process.exit(1);
}

let year=parseInt(args[0].trim());



let leapYear=(
    (year%100==0 && year%400==0)|| 
    (year%100!=0 && year%4==0)
);
if(leapYear) console.log("It is leap year");
else console.log("Not a leap year");

