//process. argv is arry of inputs in console and take only day and month
let args=process.argv.slice(2);

//check only month and date are inserted
if(args.length!=2){
    console.log("Use: node script.js <month> <day>");
    process.exit(1);
}

// seperate month and day from array args
let month =args[0].trim().toLowerCase();
let day=parseInt(args[1].trim());

// map months with their numeric values
const monthMap={
    "january":1,"february":2,"march":3,"april":4,"may":5,"june":6,"july":7,"august":8
    ,"september":9,"october":10,"november":11,"december":12
}

//check entered month is valid 
if(! (month in monthMap)){
    console.log("Enter the valid month");
    process.ext(1);
}

//convert month name in number
let monthNum=monthMap[month];
//return true if every case satisfy else false
let validDate=(
(monthNum===3 && day>=20)||
(monthNum===4)||
(monthNum===5)||
(monthNum===6 && day<=20)
);

console.log(validDate);
