function solution(num_list) {
    let cnt = 0;
    for (num of num_list) {
        for (i = num; i !== 1;) {
            if (i % 2 === 0) {
                i = i / 2;
                cnt ++;
            } else {
                i = (i - 1) / 2;
                cnt ++;
            }
        }
    }
    return cnt;
}