function solution(arr1, arr2) {
    let arr1Cnt = 0;
    let arr2Cnt = 0;
    
if (arr1.length !== arr2.length) {
    return (arr1.length > arr2.length) ? 1 : -1
} else {
    for(i = 0; i < arr1.length; i++) {
        arr1Cnt += arr1[i];
        arr2Cnt += arr2[i];
    }
    
    if (arr1Cnt === arr2Cnt) {
        return 0;
    } 
            return (arr1Cnt > arr2Cnt) ? 1 : -1

    
}
}