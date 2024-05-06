function solution(my_string) {
    let answer = new Array(52).fill(0);
    let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (str of my_string) {
        answer[al.indexOf(str)] += 1;
    }
    return answer;
}