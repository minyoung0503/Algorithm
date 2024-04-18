function solution(arr) {
    if (!arr.includes(2)) {
        return [-1];
    }
    
    let x = arr.indexOf(2);
    let y = arr.lastIndexOf(2);
    
    return arr.slice(x, y + 1);
}