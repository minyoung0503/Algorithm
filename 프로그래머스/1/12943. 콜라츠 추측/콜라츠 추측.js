function solution(num) {
    if (num === 1) {
        return 0;
    }
    
    for (i = 1; i <= 500; i++) {
        if (num === 1) {
            return i - 1;
        } else if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = (num * 3) + 1;
        } 
    }    
    
    return -1;
}