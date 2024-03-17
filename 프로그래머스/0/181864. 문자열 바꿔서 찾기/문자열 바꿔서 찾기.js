function solution(myString, pat) {
    return [...myString].map(i => i === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}