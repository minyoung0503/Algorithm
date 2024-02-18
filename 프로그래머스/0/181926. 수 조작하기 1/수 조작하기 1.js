function solution(n, control) {
    let arr = control.split('');
    let cnt = n;
    for (i of arr) {
        if (i === "w") {
            cnt += 1;
        } else if (i === "s") {
            cnt -= 1;
        } else if (i === "d") {
            cnt += 10;
        } else if (i === "a") {
            cnt -= 10;
        }
    }
    return cnt;
}