function solution(n) {
    let arr = Array.from(Array(n), () => Array(n).fill(0));
    
    let num = 1;
    let x = 0;
    let y = 0;
    
    for (let i = n; i > 0; i -= 2) {
        // 1. 오른쪽
        for (let j = 0; j < i; j++) {
            arr[x][y] = num;
            num++;
            y++;
        }
        y--;
        x++;
        
        // 2. 아래
        for (let j = 0; j < i - 1; j++) {
            arr[x][y] = num;
            num++;
            x++;
        }
        x--;
        y--;
        
        // 3. 왼쪽
        for (let j = 0; j < i - 1; j++) {
            arr[x][y] = num;
            num++;
            y--;
        }
        y++;
        x--;
        
        // 4. 위
        for (let j = 0; j < i - 2; j++) {
            arr[x][y] = num;
            num++;
            x--;
        }
        x++;
        y++;       
    };
    
    return arr;
}