function solution(num, k) {
    if (String(num).indexOf(k) === -1) {
        return -1;
    } else {
        return String(num).indexOf(k) + 1
    }
}