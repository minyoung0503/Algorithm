function solution(sides) {
    // 두 변을 a, b라고 하자. (a ≤ b)
    let [a, b] = sides.sort((x, y) => x - y);
    
    let count = 0;

    count += (a + b - 1) - (b + 1) + 1;

    count += (b - 1) - (b - a) + 1;

    return count;
}