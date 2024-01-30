function solution(n) {
    let answer = String(n);
    let cnt = 0;
    for (i of answer) {
        cnt += Number(i);
    }
    return cnt;
}