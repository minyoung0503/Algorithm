function solution(my_string) {
    let answer = '';
    for (str of my_string) {
        if (answer.indexOf(str) === -1) {
            answer += str;
        }
    }
    return answer;
}