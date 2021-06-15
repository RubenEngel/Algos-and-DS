function sockMerchant(n, ar) {
    if (n < 2) {
        return 0;
    }
    let coloursObj = {}
    for (let sock of ar) {
        coloursObj[sock] ? coloursObj[sock] += 1 : coloursObj[sock] = 1;
    }
    let pairs = 0;
    for (let [_, socks] of Object.entries(coloursObj)) {
        if (socks > 1) {
            pairs += Math.floor(socks/2) ;
        }
    }
    return pairs;
}

let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let n = ar.length;
console.log(output = sockMerchant(n, ar))