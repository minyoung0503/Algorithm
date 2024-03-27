function solution(my_string) {
    let reg = /[0-9]/g;
    return my_string.match(reg).map((num) => +(num)).sort();
}