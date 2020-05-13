'use strice';

alert('welcom to my littel quiz, are you ready?');

var userName = prompt('what is your name', 'your name');
alert(' nice to see you ' + userName);
console.log(userName);

alert('please answer with "Yes" or "No".');

/*this is for sum of correct and wrong answer*/

var sumco = 0;
var sumwr = 0;
var sumnon = 0;

/* question num (1)*/

var answer1 = prompt('My Middle name is \'Bsaam\'?', 'Yes or No');
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
    alert('wrong answer ❌ ');
    // console.log('wrong answer ❌ ');
    sumwr = sumwr + 1;
} else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
    alert('correct answer ✔ ☑️');
    // console.log('correct answer ✔ ☑️');
    sumco = sumco + 1;
} else {
    alert('really 😒😒 i said "yes" or "no" ');
    sumnon = sumnon + 1;
}

/* question num (2)*/

var answer2 = prompt('Am I a coffee addict? ', ' Yes or No');
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
    alert('correct answer ✔ ☑️');
    // console.log('correct answer ✔ ☑️');
    sumco = sumco + 1;
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
    alert('wrong answer ❌ ');
    // console.log('wrong answer ❌ ');
    sumwr = sumwr + 1;
} else {
    alert('really 😒😒 i said "yes" or "no" ');
    sumnon = sumnon + 1;

}

/* question num (3)*/

var answer3 = prompt('Do you think that I am over 22 years old?', 'Yes or No');
switch (answer3.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('correct answer ✔ ☑️');
        // console.log('correct answer ✔ ☑️');
        sumco = sumco + 1;

        break;
    case 'no':
    case 'n':
        alert('wrong answer ❌ ');
        // console.log('wrong answer ❌ ');
        sumwr = sumwr + 1;
        break;
    default:
        alert('really 😒😒 i said "yes" or "no" ');
        sumnon = sumnon + 1;

}

/* question num (4)*/

var answer4 = prompt('Do you think I finished my bachelor\'s degree?', 'Yes or No');
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
    alert('wrong answer ❌ ');
    // console.log('wrong answer ❌ ');
    sumwr = sumwr + 1;
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
    alert('correct answer ✔ ☑️');
    // console.log('correct answer ✔ ☑️');
    sumco = sumco + 1;

} else {
    alert('really 😒😒 i said "yes" or "no" ');
    sumnon = sumnon + 1;

}

/* question num (5)*/

var answer5 = prompt('Do you think I have Coronavers?', 'Yes or No');
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
    alert('wrong answer ❌ ');
    // console.log('wrong answer ❌ ');
    sumwr = sumwr + 1;
} else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
    alert('correct answer ✔ ☑️');
    // console.log('correct answer ✔ ☑️');
    sumco = sumco + 1;

} else {
    alert('really 😒😒 i said "yes" or "no" ');
    sumnon = sumnon + 1;

}


/* question num (6)*/

var numHours = prompt('How many hours a day do you think I sleep? "you have four efforts"');

for (i = 0; i < 3; i++) {

    if (numHours < 5) {
        alert('No this is too little, try with greater number');
        numHours = prompt('How many hours a day do you think I sleep?');
    } else if (numHours > 5) {
        alert('No this is too big, try with smaller number');
        numHours = prompt('How many hours a day do you think I sleep?');
    } else if (numHours == 5) {
        alert('Bingo, you are get the right answer');
        sumco = sumco + 1;
        break;
    } else {
        numHours = prompt('How many hours a day do you think I sleep?');
        alert('your anser not a number');
    }

}
if (numHours < 5 || numHours > 5) {

    alert('i sleep 5 hours only');
    sumwr = sumwr + 1;;
}

/* question num (7)*/

var footballPlayer = ['messi', 'puyol', 'muller']

var playerAnswer = prompt('In the world of football I encourage three players, can you guess one of them?"you have six efforts"');
var q = 0;
do {

    switch (playerAnswer.toLowerCase()) {
        case 'messi':
        case 'puyol':
        case 'muller':
            break;
        default:
            alert('SOORY it\'s not from top three for me, keep try');
            var playerAnswer = prompt('In the world of football I encourage three players, can you guess one of them?"you have six efforts"');
    }
    q++;
} while (q < 5);

switch (playerAnswer.toLowerCase()) {

    case 'messi':
    case 'puyol':
    case 'muller':
        alert('Bingo, you are get name the one of them');
        sumco = sumco + 1;
        break;


    default:
        sumwr = sumwr + 1;
}

/* result alert */
alert(`thank you for take the quiz "${userName}" this is the result of your quiz: correct answers are "${sumco}" answers, and wrong answers are "${sumwr}"`);