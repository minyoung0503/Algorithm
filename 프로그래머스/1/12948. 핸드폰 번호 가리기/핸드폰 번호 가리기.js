function solution(phone_number) {
    let cnt = phone_number.length - 4;
    return phone_number.slice(0, cnt).replaceAll(/[0-9]/g, '*') + phone_number.slice(cnt);
}