'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    // Write your code here
    if(score > 25 && score <= 30){
        return("A");
    }else if(score > 15 && score <=20){
        return("B");
    }else if(score > 10 && score <=15){
        return("D");
    }else if(score > 5 && score <=5){
        return("E");
    }else if(score > 0 && score <= 5){
        return("F");
    }
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}