function solution(myString, pat) {
    let str = myString.toLowerCase();
    let p = pat.toLowerCase();
    
    return +(str.includes(p));
}