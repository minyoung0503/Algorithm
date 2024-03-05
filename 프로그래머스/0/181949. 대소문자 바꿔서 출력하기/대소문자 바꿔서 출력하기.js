const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = '';
    for (i of str) {
        (i === i.toUpperCase()) ? answer += i.toLowerCase()
                                : answer += i.toUpperCase()
    }
    console.log(answer);
});