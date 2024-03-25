function solution(numbers, direction) {
    let answer = [];
    if(direction === "right") {
        let x = numbers[numbers.length - 1];
        for (i = 0; i < numbers.length - 1; i++) {
            answer.push(numbers[i]);
        }
        answer.unshift(x);
    } else {
        let y = numbers[0];
        for (i = 1; i < numbers.length; i++) {
            answer.push(numbers[i]);
        }
        answer.push(y);
    }
    
    return answer;
}