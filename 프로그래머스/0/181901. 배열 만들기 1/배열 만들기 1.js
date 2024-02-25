function solution(n, k) {
    let test = Math.floor(n / k);
    let answer = [];
    for (i = 1; i <= test;i++) {
        answer.push(k * i);
    }
    return answer;
}