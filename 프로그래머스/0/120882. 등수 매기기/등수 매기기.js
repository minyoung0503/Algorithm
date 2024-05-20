function solution(score) {
    let averages = score.map(student => (student[0] + student[1]) / 2);

    let sortedAverages = averages.slice().sort((a, b) => b - a);

    let ranks = [];

    for (let i = 0; i < averages.length; i++) {
        let rank = sortedAverages.indexOf(averages[i]) + 1;
        ranks.push(rank);
    }

    return ranks;
}