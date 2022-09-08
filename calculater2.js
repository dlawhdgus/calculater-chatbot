const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
console.log(`엔터키로 숫자를 구분해 주세요
ex) 
1
+
1 
결과를 보려면 ctrl+c`)
rl.on("line", (line) => {
    input.push(line);
});
 
rl.on('close', () => {
    let first = parseFloat(input[0]);
    let second = parseFloat(input[2]);
    if(input[1] === '+'){
        let plus = first + second;
        console.log(`result : ${plus}`);
    } else if(input[1] === '-'){
        let minus = first - second;
        console.log(`result : ${minus}`);
    } else if(input[1] === '*'){
        let times = first * second;
        console.log(`result : ${times}`);
    } else if(input[1] === '/') {
        let division = first / second;
        console.log(`result : ${division}`);
    } else {
        console.log('잘못된 기호 입니다.')
    }
    process.exit();
})