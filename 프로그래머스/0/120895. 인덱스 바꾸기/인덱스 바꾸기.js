function solution(my_string, num1, num2) {
    let strArr = my_string.split('');
    let x = my_string[num1];
    let y = my_string[num2];
    strArr[num1] = y;
    strArr[num2] = x;
    return strArr.join('');
}