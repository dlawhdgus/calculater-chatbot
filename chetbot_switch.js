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

    switch (command) {
        case '-1' : 
            console.log('0 ~ 9 까지 입력을 하면 10개의 나라의 인삿말이 나옵니다.');
            break;
        case '1' : 
            console.log('안녕하세요');
            break;
        case '2' : 
            console.log('hello');
            break;
        case '3' : 
            console.log('Nǐ hǎo');
            break;
        case '4' : 
            console.log("'ahlan");
            break;
        case '5' : 
            console.log('Hola');
            break;
        case '6' : 
            console.log('bonjour');
            break;
        case '7' : 
            console.log('привет');
            break;
        case '8' : 
            console.log('こんにちは');
            break;
        case '9' : 
            console.log('olá');
            break;
        case '0' : 
            console.log('Kamusta');
            break;
        case '10' : 
            rl.close();
            break;
        default : 
            console.log('숫자를 잘 못 일벽하셨습니다.');
            break;
    }
});
 
