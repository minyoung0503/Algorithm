function solution(order) {
    let str = String(order);
    let cnt = 0;
    for (num of str) {
        if (num === '3' || num === '6' || num === '9') {
            cnt += 1;
        }
    }
    return cnt;
}