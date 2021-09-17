function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const randumNum = (getRandomInt(100));

console.log(randumNum);

let resultCoin = "";

if ((randumNum % 2) == 0) {
    resultCoin = "head"
} else {
    resultCoin = "tails"
}

console.log(resultCoin);

window.location.href = "https://kilihbr.github.io/coinflip-api/res/"+ resultCoin + ".json";