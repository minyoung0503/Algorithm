function solution(arr, queries) {
    for(q of queries) {
        let i = q[0];
        let j = q[1];
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}