function solution(arr, queries) {
    for (q of queries) {
        for (i = q[0]; i <= q[1]; i++) {
            if (i % q[2] === 0) {
                arr[i] += 1;
            }
        }        
    }
    return arr;
}