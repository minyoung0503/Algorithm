function solution(n) {
    let answer = 0;
    for (i = 4; i <= n; i++) {
        let cnt = 0;
        for (j = 1; j <= i; j++) {
            if (i % j === 0) {
                cnt++;
            }
        }
        if (cnt >= 3) {
            answer ++;
        }
    }
    return answer;
}