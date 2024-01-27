function solution(dot) {
    
        if (Math.sign(dot[0]) === 1 && Math.sign(dot[1]) === 1) {
            return 1;
        } else if (Math.sign(dot[0]) !== 1 && Math.sign(dot[1]) === 1) {
            return 2;
        } else if (Math.sign(dot[0]) !== 1 && Math.sign(dot[1]) !== 1) {
            return 3;
        } else if (Math.sign(dot[0]) === 1 && Math.sign(dot[1]) !== 1) {
            return 4;
        }
    

}