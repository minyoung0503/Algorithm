function solution(picture, k) {
    let result = [];

    for (let row of picture) {
        let expandedRow = '';
        
        for (let char of row) {
            expandedRow += char.repeat(k);
        }
        
        for (let i = 0; i < k; i++) {
            result.push(expandedRow);
        }
    }

    return result;
}