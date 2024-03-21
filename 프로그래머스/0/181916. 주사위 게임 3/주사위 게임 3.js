function solution(a, b, c, d) {
    let arr = new Array(6).fill(0);
    let diceArr = [a, b, c, d];
    let p = 0;
    let q = 0;
    let r = 0;
    for (num of diceArr) {
        arr[num - 1] += 1;
    }
    
    if (arr.indexOf(4) !== -1) {
        return 1111 * a;
    } else if (arr.indexOf(3) !== -1) {
        p = arr.indexOf(3) + 1;
        q = arr.indexOf(1) + 1;
        return (10 * p + q) ** 2;
    } else if (arr.indexOf(2) !== arr.lastIndexOf(2)) {
        p = arr.indexOf(2) + 1;
        q = arr.lastIndexOf(2) + 1;
        return (p + q) * Math.abs(p - q);
    } else if (arr.indexOf(2) !== -1 && arr.indexOf(2) === arr.lastIndexOf(2) && arr.indexOf(1) !== -1) {
        q = arr.indexOf(1) + 1;
        r = arr.lastIndexOf(1) + 1;
        return q * r;
    } else {
        return arr.indexOf(1) + 1;
    }
}