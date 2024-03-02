function solution(array) {
    let arr = [...array];
    arr.sort((a, b) => b - a);
    var answer = [];
    answer.push(arr[0]);
    answer.push(array.indexOf(arr[0]));
    return answer;
}