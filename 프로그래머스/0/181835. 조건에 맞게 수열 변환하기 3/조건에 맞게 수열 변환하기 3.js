function solution(arr, k) {
    let answer = arr.map((i) => {
        return k % 2 === 0 ? i + k : i * k;
    })
    return answer;
}