function solution(myString, pat) {
    let cnt = 0;
    for (i = 0; i < myString.length; i++) {
        if (myString.slice(i, pat.length + i) === pat) {
            cnt ++;
        }
    }
    return cnt;
}