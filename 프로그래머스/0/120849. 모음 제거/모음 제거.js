function solution(my_string) {
    let x = ["a", "e", "i", "o", "u"];
    for (y of x) {
        my_string = my_string.replaceAll(y, '');
    }
    return my_string;
}