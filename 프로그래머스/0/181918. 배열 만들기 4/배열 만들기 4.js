function solution(arr) {
    let stk = [];
    for (i = 0; i < arr.length;) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i++;
        } else {
            if (stk[stk.length - 1] < arr[i]) {
                stk.push(arr[i]);
                i++;
            } else {
                stk.pop();
            }
        }
    }
    return stk;
}