function solution(names) {
    return names.filter(name => names.indexOf(name) % 5 === 0)
}