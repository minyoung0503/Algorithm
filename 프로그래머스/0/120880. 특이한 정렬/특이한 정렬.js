function solution(numlist, n) {
    const distances = [];

    for (let num of numlist) {
        distances.push([Math.abs(n - num), num]);
    }

    distances.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });

    const result = distances.map(pair => pair[1]);

    return result;
}