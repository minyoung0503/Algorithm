function solution(spell, dic) {
    let answer = dic;
    for (i = 0; i < spell.length; i++) {
       answer = answer.filter(x => x.includes(spell[i])); 
    }
    return answer.length > 0 ? 1 : 2;
}