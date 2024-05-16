function solution(arr) {
    if (arr.length === arr[0].length) {
        return arr;
    }

    let max = Math.max(arr.length, arr[0].length);
    
    for (let i = 0; i < max; i++) {
        if (arr[i] === undefined) {
            arr[i] = new Array(max).fill(0);
        } else if (arr[i].length < max) {
            arr[i] = [...arr[i], ...new Array(max - arr[i].length).fill(0)];
        }
    }

    return arr;
}