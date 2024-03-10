function solution(arr, n) {
    var length = arr.length;
    if (length % 2 === 0) {
        for (i = 0; i < length; i++) {
            if (i % 2 !== 0) {
                arr[i] = arr[i] + n;
            }
        }
    } else {
        for (i = 0; i < length; i++) {
            if (i % 2 === 0) {
                arr[i] = arr[i] + n;
            }
        }
    }
    
    return arr;
}