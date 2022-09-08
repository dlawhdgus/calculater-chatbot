const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
console.log(`숫자를 입력하고 스페이스바를 눌러주세요
ex) 1 + 1`);

rl.on("line", (line) => {
    let input = line.split(' ');
    
    let first = parseInt(input[0]);
    let second = parseInt(input[2]);
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
});