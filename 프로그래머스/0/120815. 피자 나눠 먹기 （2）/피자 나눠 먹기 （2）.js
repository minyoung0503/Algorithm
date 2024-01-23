function solution(n) {
    var answer = 0;
    
    for (let i = 1; ; i++) {
        if ((n * i) % 6 === 0) {
            answer = (n * i) / 6;
            break;
        } else {
            continue;
        }
    }
    
    return answer;
}