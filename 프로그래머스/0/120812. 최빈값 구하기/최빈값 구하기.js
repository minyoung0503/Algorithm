function solution(array) {
    let a = Math.max(...array);
    let arr = new Array(a + 1).fill(0);
    for (i of array) {
        arr[i] += 1;
    }
    let max = Math.max(...arr);
    
    if (arr.indexOf(max) !== arr.lastIndexOf(max)) {
        return -1;
    } 
    
    return arr.indexOf(max);
}