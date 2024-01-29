function solution(babbling) {
    let str = ["aya", "ye", "woo", "ma"];
    var cnt = 0;
    
    for (b of babbling) {
        let lCnt = 0;
        
        for (s of str) {
            if (b.includes(s) === true) {
                lCnt += s.length;
            }
        }
        
        if (lCnt === b.length) {
        cnt += 1;
            
        }
    }
    
    return cnt;
}