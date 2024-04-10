function solution(arr, queries) {
    for (num of queries) {
        for (i = num[0]; i <= num[num.length - 1]; i ++) {
            arr[i] ++;
        }
    }
    return arr;
}