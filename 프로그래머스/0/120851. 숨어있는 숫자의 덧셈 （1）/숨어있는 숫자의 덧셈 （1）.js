function solution(my_string) {
    let cnt = 0; 
    for (i of my_string) {
        if (Boolean(Number(i)) === true) {
            cnt += Number(i);   
        }
    }
    return cnt;
}