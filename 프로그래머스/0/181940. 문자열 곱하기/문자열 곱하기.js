function solution(my_string, k) {
    let answer = my_string;
    for (i = 1; i < k; i++) {
        answer += my_string;
    }
    return answer;
}