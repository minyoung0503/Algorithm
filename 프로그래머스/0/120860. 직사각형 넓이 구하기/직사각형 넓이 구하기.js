function solution(dots) {
    const x = dots.map(point => point[0]);
    const y = dots.map(point => point[1]);

    const minX = Math.min(...x);
    const maxX = Math.max(...x);

    const minY = Math.min(...y);
    const maxY = Math.max(...y);

    return (maxX - minX) * (maxY - minY);
}