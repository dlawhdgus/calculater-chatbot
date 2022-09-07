const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log('안녕하세요 종현 챗봇 입니다.')
 

rl.on("line", (line) => {
    let command = line;
    if(command === '1') {
        console.log('안녕하세요');
    } else if(command === "2") {
        console.log('hello');
    } else if(command === "3") {
        console.log('Nǐ hǎo');
    } else if(command === "4") {
        console.log("'ahlan");
    } else if(command === "5") {
        console.log('Hola');
    } else if(command === "6") {
        console.log('bonjour');
    } else if(command === "7") {
        console.log('привет');
    } else if(command === "8") {
        console.log('こんにちは');
    } else if(command === "9") {
        console.log('olá');
    } else if(command === "9") {
        console.log('Kamusta');
    } else if (command === "-1") {
        rl.close();
    } else {
        console.log('숫자를 잘 못 일벽하셨습니다.')
    }
    
     
});
 
