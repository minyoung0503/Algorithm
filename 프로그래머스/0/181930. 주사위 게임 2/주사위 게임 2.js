function solution(a, b, c) {
    let arr = new Array(6).fill(0)
    let diceArr = [a, b, c]
    for (num of diceArr) {
        arr[num - 1] += 1;
    }
    
    if (arr.indexOf(3) !== -1) {
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2 ) * (a ** 3 + b ** 3 + c ** 3 );
    } else if (arr.indexOf(2) !== -1) {
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2 );
    } else {
        return a + b + c;
    }
}