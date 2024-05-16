function solution(code) {
    let mode = 0;
    let answer = '';
    
    for (i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            mode === 0 ? mode += 1 : mode -= 1;
            continue;
        }
        
        if (mode === 0 && i % 2 === 0) {
            answer += code[i];
        }
        
        if (mode !== 0 && i % 2 !== 0) {
            answer += code[i];
        }
    }
    return answer.length > 0 ? answer : "EMPTY";
}