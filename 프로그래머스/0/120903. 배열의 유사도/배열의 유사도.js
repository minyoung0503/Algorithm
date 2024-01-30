function solution(s1, s2) {
    var answer = 0;
    
    for (s of s1) {
        s2.indexOf(s) > -1 ? answer += 1 : answer += 0;
    }
    
    return answer;
}