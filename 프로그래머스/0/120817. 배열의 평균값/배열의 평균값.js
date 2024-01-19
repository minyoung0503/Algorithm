function solution(numbers) {
    var answer = 0;
    
    for (let a of numbers) {
        answer += a;
    }
    
    answer = answer / numbers.length;
    
    return answer;
}