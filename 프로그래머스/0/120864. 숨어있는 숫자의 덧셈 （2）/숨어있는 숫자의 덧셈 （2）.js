function solution(my_string) {
    let answer = 0;
    
    let arr = my_string.replace(/[a-zA-Z]/g, ' ').trim().split(/\s+/);    
    
    for (num of arr) {
        answer += +(num)
    }
    return answer;
}