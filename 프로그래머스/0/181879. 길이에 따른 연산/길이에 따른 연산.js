function solution(num_list) {
    let answer = 0;
    if (num_list.length > 10) {
        for (i of num_list) {
            answer += i;
        }
    } else {
        answer = 1;
        for (i of num_list) {
            answer *= i;
        }
    }
    
    return answer;
}