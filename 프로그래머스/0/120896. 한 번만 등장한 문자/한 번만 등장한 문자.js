function solution(s) {
    let answer = '';
    for (word of s) {
        if(s.indexOf(word) === s.lastIndexOf(word)) {
            answer += word;
            s.replaceAll(word);
        }
    }
    return answer.split('').sort().join('');
}