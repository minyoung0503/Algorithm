function solution(intStrs, k, s, l) {
    let answer = intStrs.filter((word) => word.slice(s, s + l) > k);
    return answer.map((word) => +(word.slice(s, s + l)));
}