function solution(sides) {
    var answer = sides.sort(function(a, b) {
        return b - a;
    })
    
    if (sides[0] < sides[1] + sides[2]) {
        return 1;
    } else {
        return 2;
    }

}