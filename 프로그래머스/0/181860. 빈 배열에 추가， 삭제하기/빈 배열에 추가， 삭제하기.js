function solution(arr, flag) {
    let answer = [];
    for (i = 0; i < arr.length; i++) {
        if (flag[i]) {
            for (j = 1; j <= arr[i] * 2; j++) {
                answer.push(arr[i]);
            }
        } else {
            answer.splice(answer.length - arr[i]);
        }
    }
    return answer;
}