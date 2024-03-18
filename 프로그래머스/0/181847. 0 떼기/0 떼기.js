function solution(n_str) {
    let cnt = 0;
    for (i = 0; i < n_str.length; i++) {
        if (n_str[i] === '0') {
            cnt = i;
        } else {
            break;
        }
    }
    return n_str.indexOf('0') === 0 ? n_str.slice(cnt + 1) : n_str;  
}