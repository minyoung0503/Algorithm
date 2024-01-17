function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    let denom = denom1 * denom2; // 분모
    let numer = numer1 * denom2 + numer2 * denom1; // 분자
    let a = 0;
    
    for (let i = 1; i <= denom && i <= numer; i++) {
        if (denom % i === 0 && numer % i === 0) {
            a = i;
        }
    }
    
    answer[0] = numer / a;
    answer[1] = denom / a;
    return answer;
}