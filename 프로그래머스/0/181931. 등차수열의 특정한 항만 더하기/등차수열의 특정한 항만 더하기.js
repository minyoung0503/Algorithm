function solution(a, d, included) {
    let x = a;
    let answer = 0;
    for (i = 0; i < included.length; i++) {
        if (included[i]) {
            answer += x;
        }
        x += d;
    }
    return answer;
}