function solution(arr, k) {
    let setArr = [...new Set(arr)];
    
    if (setArr.length === k) {
        return setArr;
    } else if (setArr.length > k) {
        return setArr.slice(0, k);
    } else {
        let answer = [...setArr]
        for (i = 1; i <= k - setArr.length; i++) {
            answer.push(-1);
        }
        return answer;
    }
}