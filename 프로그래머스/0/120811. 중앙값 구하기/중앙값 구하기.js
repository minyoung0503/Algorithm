function solution(array) {
array = array.sort(function(a, b)  {
  return b - a;
});
    var answer = array[Math.floor(array.length / 2)];
    return answer;
}