function solution(arr) {
    let x = 1;

    while (x < arr.length) {
        x *= 2;
    }

    while (arr.length < x) {
        arr.push(0);
    }

    return arr;
}