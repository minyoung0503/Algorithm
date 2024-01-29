function solution(my_string, n) {
    let array = [...my_string];
    let string = '';

    for (str of array) {
        for (i = 1; i <= n; i++) {
            string += str;
        }
    }
            
    return string;
}