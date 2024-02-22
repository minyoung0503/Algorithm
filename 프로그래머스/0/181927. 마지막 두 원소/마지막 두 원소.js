function solution(num_list) {
    let x = num_list[num_list.length - 1];
    let y = num_list[num_list.length - 2];
    
    if (x > y) {
        num_list.push(x - y);
    } else {
        num_list.push(x * 2);
    }
    
    return num_list;
}