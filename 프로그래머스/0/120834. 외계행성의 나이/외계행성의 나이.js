function solution(age) {
    let answer = String(age).split("");
    let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let eage = '';
    
    for (i of answer) {
        eage += arr[i];
    }
    
    return eage;
}