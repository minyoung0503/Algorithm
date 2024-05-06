function solution(myStr) {
    let answer = myStr.split(/[abc]/g).filter(str => str !== '');
    return answer.length !== 0 ? answer : ["EMPTY"];
}