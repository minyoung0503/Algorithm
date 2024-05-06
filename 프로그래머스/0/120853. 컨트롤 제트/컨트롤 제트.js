function solution(s) {
    let arr = s.split(' ');
    let answer = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 'Z') {
            answer -= arr[i - 1];
        } else {
            answer += +(arr[i]);
        }
    }
    return answer;
}