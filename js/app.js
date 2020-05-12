'use strice';

alert('welcom to my littel qizz you are ready');

var userName = prompt('what is your name', 'your name');
alert(' nice to see you ' + userName);
console.log(userName);

alert('please answer with "Yes" or "No".');
var sumco = 0;
var sumwr = 0;
var sumnon = 0;
var answer1 = prompt('My Middle name is \'Bsaam\'?', 'Yes or No');
if (answer1.toLowerCase() === 'yes') {
    alert('wrong answer ❌ ');
    // console.log('wrong answer ❌ ');
    sumwr = sumwr + 1;
} else if (answer1.toLowerCase() === 'no') {
    alert('correct answer ✔ ☑️');
    // console.log('correct answer ✔ ☑️');
    sumco = sumco + 1;
} else {
    alert('really 😒😒 i said "yes" or "no" ');
    sumnon = sumnon + 1;
}

var answer2 = prompt('Am I a coffee addict? ', ' Yes or No');
if (answer2.toLowerCase() === 'yes') {
    alert('correct answer ✔ ☑️');
    // console.log('correct answer ✔ ☑️');
    sumco = sumco + 1;
} else if (answer2.toLowerCase() === 'no') {
    alert('wrong answer ❌ ');
    // console.log('wrong answer ❌ ');
    sumwr = sumwr + 1;
} else {
    alert('really 😒😒 i said "yes" or "no" ');
    sumnon = sumnon + 1;

}

var answer3 = prompt('Do you think that I am over 22 years old?', 'Yes or No');
switch (answer3.toLowerCase()) {
    case 'yes':
        alert('correct answer ✔ ☑️');
        // console.log('correct answer ✔ ☑️');
        sumco = sumco + 1;

        break;
    case 'no':
        alert('wrong answer ❌ ');
        // console.log('wrong answer ❌ ');
        sumwr = sumwr + 1;
        break;
    default:
        alert('really 😒😒 i said "yes" or "no" ');
        sumnon = sumnon + 1;

}


var answer4 = prompt('Do you think I finished my bachelor\'s degree?', 'Yes or No');
if (answer4.toLowerCase() === 'yes') {
    alert('wrong answer ❌ ');
    // console.log('wrong answer ❌ ');
    sumwr = sumwr + 1;
} else if (answer4.toLowerCase() === 'no') {
    alert('correct answer ✔ ☑️');
    // console.log('correct answer ✔ ☑️');
    sumco = sumco + 1;

} else {
    alert('really 😒😒 i said "yes" or "no" ');
    sumnon = sumnon + 1;

}
var answer5 = prompt('Do you think I have Coronavers?', 'Yes or No');
if (answer5.toLowerCase() === 'yes') {
    alert('wrong answer ❌ ');
    // console.log('wrong answer ❌ ');
    sumwr = sumwr + 1;
} else if (answer5.toLowerCase() === 'no') {
    alert('correct answer ✔ ☑️');
    // console.log('correct answer ✔ ☑️');
    sumco = sumco + 1;

} else {
    alert('really 😒😒 i said "yes" or "no" ');
    sumnon = sumnon + 1;

}

alert(userName + ' Your Correct Answer is ' + sumco + ', and Wrong Answer is ' + sumwr + ', and answer without "yes" or "no" is ' + sumnon)