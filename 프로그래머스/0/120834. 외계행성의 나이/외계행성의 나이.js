function solution(age) {
    let answer = String(age).split("");
    let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    let eage = '';
    
    for (i of answer) {
        eage += arr[i];
    }
    
    return eage;
}