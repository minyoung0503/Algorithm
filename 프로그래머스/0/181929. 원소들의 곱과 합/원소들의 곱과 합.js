function solution(num_list) {
    let x = 1; // 곱
    let y = 0; // 합
    
    for (i = 0; i < num_list.length; i++) {
        x *= num_list[i];
        y += num_list[i];
    }
    
    return +(x < y ** 2);
}