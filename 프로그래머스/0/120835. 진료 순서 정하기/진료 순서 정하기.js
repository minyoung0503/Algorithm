function solution(emergency) {
    let answer = emergency.slice().sort((a, b) => b - a);
    
    return emergency.map(i => answer.indexOf(i) + 1);
}