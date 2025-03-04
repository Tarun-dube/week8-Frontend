function flipCoin(){
    let flip=Math.random()<0.5? "heads":"tails";
    return flip;
}

console.log(flipCoin());