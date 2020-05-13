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
function qn1(){
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
    sumwr = sumwr + 1;
}
}

qn1();
/* question num (2)*/
function qn2(){
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
    sumwr = sumwr + 1;

}
}
qn2();
/* question num (3)*/
function qn3(){
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
        sumwr = sumwr + 1;

}
}
qn3();
/* question num (4)*/
function qn4(){
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
    sumwr = sumwr + 1;

}
}
qn4();
/* question num (5)*/
function qn5(){
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
    sumwr = sumwr + 1;

}
}
qn5();
/* question num (6)*/
function qn6(){
for (i = 0; i <= 3; i++) {
    
    numHours = prompt('How many hours a day do you think I sleep?');
    if (numHours == 5) {
        alert('Bingo, you are get the right answer');
        sumco = sumco + 1;
        break;
    } else if (numHours > 5) {
        alert('No this is too big, try with smaller number');
    } else if (numHours < 5) {
        alert('No this is too little, try with greater number');
    } else {
        alert('your anser not a number');
    }

}
if (numHours < 5 || numHours > 5) {

    alert('i sleep 5 hours only');
    sumwr = sumwr + 1;;
}
}
qn6();
/* question num (7)*/
function qn7(){
var footballPlayer = ['messi', 'puyol', 'muller'];

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
        alert('SOORY it\'s not from top three for me, keep try');
        sumwr = sumwr + 1;
}
}
qn7();
/* correct answer for question (7)*/

//alert('my best three player are:')
//for (var ca = 0; ca < footballPlayer.length; ca++) {
    //alert(ca + 1 + '-' + footballPlayer[ca])
//}

/* result alert */
alert(`thank you for take the quiz "${userName}" this is the result of your quiz: correct answers are "${sumco}" answers, and wrong answers are "${sumwr}"`);



/* test a new way question 7 */
// var favColor = ['black','white','gray'];
// var gues7 = false;
// var tray7 = 0;
// while(tray7 <6){
//     var answer7=prompt('i like 3 colors,gues one of them?') ;
//     for (var qu7 = 0; qu7 < favColor.length; qu7++) {
//         if (answer7 == favcolor[qu7]){
//             alert('bingo, correct answer');
//             gues7=true;
//             break;
//         }
//     }
//     if(gues7){
//         break;
//     }
//     tray7++
// }
