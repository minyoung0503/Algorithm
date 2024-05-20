function solution(i, j, k) {
    let cnt = 0;
    k = k.toString();

    for (let x = i; x <= j; x++) {
        let str = x.toString();
        for (let char of str) {
            if (char === k) {
                cnt += 1;
            }
        }
    }

    return cnt;
}