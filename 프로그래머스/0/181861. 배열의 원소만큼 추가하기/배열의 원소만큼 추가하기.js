function solution(arr) {
    var answer = [];
    for (num of arr) {
        for (i = 1; i <= num; i++) {
            answer.push(num);
        }
    }
    return answer;
}