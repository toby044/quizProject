let score = 0;

let quiz = {
    name: 'test',
    created: new Date(),
    questions: [
        {
            category: 'continent',
            question: 'on which continent is Denmark located?1',
            possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
            correctAnswer: 'europe'
        },
        {
            category: 'continent',
            question: 'on which continent is Denmark located?2',
            possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
            correctAnswer: 'europe'
        },
        {
            category: 'continent',
            question: 'on which continent is Denmark located?3',
            possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
            correctAnswer: 'europe'
        },
        {
            category: 'continent',
            question: 'on which continent is Denmark located?4',
            possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
            correctAnswer: 'europe'
        }
    ]

    /* shuffle() {
        quiz.questions.question[Math.floor(Math.random()*this.questions.length)]
    }
    */
}


//testing
console.log(quiz)

const abc = function () {
    for (let i = 0; i < quiz.questions.length; i++) {
        let chosenAnswer = window.prompt(quiz.questions[i].question + quiz.questions[i].possibleAnswers);
        if (chosenAnswer == quiz.questions[i].correctAnswer) {
            score++;
            console.log("correct: " + score);
        }
        else {
            console.log("wrong")
        }
    }
}

document.getElementById("demo").addEventListener("click", abc);




// const displayQuiz = function (quiz, where) {

// };



// Kravet er, at I skal lave et site med mindst to quizzer.
// JavaScripten skal struktureres med moduler, så 
// HTML-siden kun refererer én JavaScript-fil.
// De to quizzer skal strukturelt være ens, så den 
// JavaScript-kode, der viser quizzerne skal være ens. 
// Det betyder, at der skal skrives en funktion der 
// modtager en quiz som inputparameter, hvorefter den
// viser quizzen. Fx

// const displayQuiz = function (quiz, where) {};

// Funktionen skal kalde quizzens toString metode. Den 
// skal selv kunne kaldes således:

// displayQuiz(quiz1, div1);
// displayQuiz(quiz2, div2);
// displayQuiz(quizn, divn);

// Hvor quiz1 - quizn er konkrete eksempler på den 
// ovenfor viste datastruktur, og div1 - divn er id’er 
// på de dom-elementer på siden, hvor quizzen skal stå.
// Når en quiz vises, skal metoden shuffle() sørge for, 
// at spørgsmålene vises i tilfældig rækkefølge.
// Quizzerne skal kunne scores. Scoren skal anbringes i 
// localstorage således, at en besvarer, skal kunne se 
// sin score ved genbesøg på siden.




