function solution(number) {
    let answer = 0;
    for (num of number) {
        answer += +num
    }
    return answer % 9;
}