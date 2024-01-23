function solution(slice, n) {
    var answer = 0;
    
    for (let i = 1; ; i++) {
        if (slice * i >= n) {
            answer = i;
            break;
        } else {
            continue;
        }
    }
    
    return answer;
}