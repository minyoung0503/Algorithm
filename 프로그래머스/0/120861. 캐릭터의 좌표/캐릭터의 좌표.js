function solution(keyinput, board) {
    let x = 0;
    let y = 0;

    for (const key of keyinput) {
        switch (key) {
            case "up":
                if (y < (board[1] - 1) / 2) y++;
                break;
            case "down":
                if (y > -(board[1] - 1) / 2) y--;
                break;
            case "left":
                if (x > -(board[0] - 1) / 2) x--;
                break;
            case "right":
                if (x < (board[0] - 1) / 2) x++;
                break;
        }
    }

    return [x, y];
}