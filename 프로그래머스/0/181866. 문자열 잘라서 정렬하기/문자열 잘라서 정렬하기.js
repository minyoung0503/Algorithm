function solution(myString) {
    return myString.replaceAll("x", ' ').trim().split(/\s+/).sort();
}