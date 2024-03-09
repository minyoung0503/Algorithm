function solution(my_strings, parts) {
    var answer = '';
    for (i = 0; i < parts.length; i++) {
        let str = my_strings[i];
        let num = parts[i]
        answer += str.slice(num[0], num[1] + 1);
    }
    return answer;
}