function solution(a, b) {
    let strA = String(a);
    let strB = String(b);
    
    let resultA = strA + strB;
    let resultB = strB + strA;

    if (resultA > resultB || resultA === resultB) {
        return Number(resultA);
    } else {
        return Number(resultB);
    } 
}