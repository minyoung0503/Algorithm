function solution(n, slicer, num_list) {
    let answer = [];
    switch (n) {
        case 1: 
            return num_list.slice(0, slicer[1] + 1);
        case 2:
            return num_list.slice(slicer[0]);
        case 3:
            return num_list.slice(slicer[0], slicer[1] + 1);
        case 4:
            for (i = slicer[0]; i < slicer[1] + 1; i += slicer[2]) {
                answer.push(num_list[i]);
            }
            return answer;
    }

}