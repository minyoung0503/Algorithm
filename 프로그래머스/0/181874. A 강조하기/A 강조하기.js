function solution(myString) {
    let lowerStr = myString.toLowerCase();
    let answer = ''
    for (i of lowerStr) {
        if (i === 'a') {
            answer += 'A';
        } else {
        answer += i;
        }
    }
    return answer;
}