function solution(num_list) {
    var answer = [];
    let x = 0;
    let y = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        let num = num_list[i];
        if (num % 2 === 0) {
            x += 1;
        } else {
            y += 1;
        }
    }
    
    answer[0] = x;
    answer[1] = y;
    
    return answer;
}