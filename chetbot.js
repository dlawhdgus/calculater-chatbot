const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log(`
안녕하세요 종현 챗봇 입니다.
도움말을 보고싶다면 -1,
종료를 하려면 10 을 입력해 주세요
`)
 

rl.on("line", (line) => {
    let command = line;
    if(command === '-1') {
        console.log(`0 ~ 9 까지 입력을 하면 10개의 나라의 인삿말이 나옵니다.
        종료하려면 10을 눌러주세요`)
    } else if(command === '1') {
        console.log('안녕하세요 (대한민국)');
    } else if(command === '2') {
        console.log('hello (미국)');
    } else if(command === '3') {
        console.log('你好 (중국)');
    } else if(command === '4') {
        console.log("أهلا (아랍)");
    } else if(command === '5') {
        console.log('Hola (스페인)');
    } else if(command === '6') {
        console.log('bonjour (프랑스)');
    } else if(command === '7') {
        console.log('привет (러시아)');
    } else if(command === '8') {
        console.log('こんにちは (일본)');
    } else if(command === '9') {
        console.log('olá (포르투갈)');
    } else if(command === '0') {
        console.log('Kamusta (필리핀)');
    } else if (command === '10') {
        rl.close();
    } else {
        console.log('숫자를 잘 못 일벽하셨습니다.')
    }
});
 
