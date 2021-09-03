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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function is_a_wovels(single_char)
{
    if(single_char == 'a' || single_char == 'e' || single_char == 'i' || single_char == 'o' || single_char == 'u')
        return true;
    else
        return false;
}
function vowelsAndConsonants(s) {
    for(var i=0; i< s.length; i++)
    {
        if(is_a_wovels(s[i]))
            console.log(s[i]);
    }
    for(var i=0; i< s.length; i++)
    {
        if(!is_a_wovels(s[i]))
            console.log(s[i]);
    }
}

