function solution(hp) {
    let answer = hp;
    let cnt = 0;
    
    if (answer >= 5) {
        cnt += Math.floor(answer / 5);
        answer -= Math.floor(answer / 5) * 5;
    }
    
    if (answer >= 3) {
        cnt += Math.floor(answer / 3);
        answer -= Math.floor(answer / 3) * 3;
    }
    
    if (answer >= 1) {
        cnt += answer;
    }
    
    return cnt;
}