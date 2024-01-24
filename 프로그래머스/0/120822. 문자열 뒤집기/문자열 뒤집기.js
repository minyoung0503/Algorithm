function solution(my_string) {
    let x = my_string.split("");
    x = x.reverse();
    x = x.join("");
    return x;
}