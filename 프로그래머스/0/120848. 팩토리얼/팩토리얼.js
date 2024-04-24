function solution(n) {
    let num = 1;
    
    for (i = 1; i <= n; i++) {
        num = num * i;
        
        if (num === n) {
            return i;
        } else if (num > n) {
            return i - 1;
        }
    }
}