function solution(my_string, s, e) {
    let arr = [...my_string];
    let reverse = arr.slice(s, e + 1).reverse();
    arr.splice(s, reverse.length, ...reverse);
    return arr.join('');
}