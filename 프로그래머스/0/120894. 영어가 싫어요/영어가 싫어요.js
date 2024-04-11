function solution(numbers) {
    let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (i = 0; i < num.length; i++) {
        numbers = numbers.split(num[i]).join(i);
    }
    return +(numbers);
}