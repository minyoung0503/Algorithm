function solution(id_pw, db) {
    const [id, pw] = id_pw;
    let isIdExist = false;
    let isPwCorrect = false;

    for (const userInfo of db) {
        if (userInfo[0] === id) {
            isIdExist = true;
            isPwCorrect = userInfo[1] === pw;
            break;
        }
    }

    return !isIdExist ? "fail" : !isPwCorrect ? "wrong pw" : "login";
}