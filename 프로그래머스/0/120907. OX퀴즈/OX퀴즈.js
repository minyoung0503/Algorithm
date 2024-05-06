function solution(quiz) {
    let answer = [];
    for (q of quiz) {
        let x = q.split(' ');
        if (x[1] === '+') {
            +x[0] + +x[2] === +x[4] ? answer.push('O') : answer.push('X');
        } else {
            +x[0] - +x[2] === +x[4] ? answer.push('O') : answer.push('X');
        }
    }
    return answer;
}