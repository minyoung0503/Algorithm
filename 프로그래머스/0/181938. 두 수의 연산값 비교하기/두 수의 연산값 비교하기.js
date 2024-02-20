function solution(a, b) {
    let x = String(a) + String(b);
    let y = 2 * a * b;

    return x >= y ? +x : y
}