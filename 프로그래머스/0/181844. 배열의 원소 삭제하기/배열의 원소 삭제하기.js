function solution(arr, delete_list) {
    for (num of delete_list) {
        if (arr.indexOf(num) !== -1) {
            let i = arr.indexOf(num);
            arr.splice(i, 1);
        }
    }
    return arr;
}