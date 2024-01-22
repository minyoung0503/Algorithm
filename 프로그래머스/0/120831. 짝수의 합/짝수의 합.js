function solution(n) {
    var answer = 0;
    let array = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    
    for (let j = 0; j < array.length; j++) {
        answer += array[j]
    }
    
    return answer;
}