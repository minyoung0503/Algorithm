function solution(array) {
    let answer = 0;
    let str = array.join('');
    for (i of str) {
        if (i === '7') {
            answer += 1;
        }
    }
    return answer;
}