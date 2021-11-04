let score = 0;
let q = {
    name: 'test',
    created: new Date(),
    questions: [
        {
            category: 'continent',
            question: 'on which continent is Denmark located?1',
            possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
            correctAnswer: 1
        },
        {
            category: 'continent',
            question: 'on which continent is Denmark located?2',
            possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
            correctAnswer: 3
        },
        {
            category: 'continent',
            question: 'on which continent is Denmark located?3',
            possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
            correctAnswer: 0
        },
        {
            category: 'continent',
            question: 'on which continent is Denmark located?4',
            possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
            correctAnswer: 0
        }
    ]
}

function init() {
    const quizEl = document.getElementById('quiz')



    let quizStr = ''
    q.questions.forEach(function (questions, qIndex) {
        let answerStr = ''
        const answerOrder = randomRange(questions.possibleAnswers.length)
        questions.possibleAnswers.forEach(function (answer, aIndex) {
            answerStr += `
      <li style="order: ${answerOrder[aIndex]}">
        <label>
             <input type ="radio" name="question${qIndex}" data-correct="${questions.correctAnswer === aIndex}">     
             ${answer} 
        </label>         
      </li>`



        })


        quizStr += `
    <form>
      <h1>${questions.question}</h1>
      <div class="alert"></div>
      <ul style="display: flex; flex-direction: column;">
        ${answerStr}
      </ul>
      <button type="submit">Submit</button>
    </form>`



    })
    quizEl.innerHTML = quizStr

    quizEl.addEventListener('submit', function (e) {
        e.preventDefault()
        const alert = e.target.querySelector('div.alert')
        const selectedInput = e.target.querySelector('input[type=radio]:checked')
        if (selectedInput === null) {
            alert.innerHTML = 'Select an answer'
        } else if (selectedInput.dataset.correctAnswer === "true") { //bugged
            alert.innerHTML = 'Correct'
            score++
            console.log(score)
        } else {
            alert.innerHTML = 'Wrong'

        }
    })

}

//calling quiz, creating radio buttons etc.
init()


//shuffle
function shuffle(n) {
    const randomNum = Math.random() * n
    return Math.floor(randomNum)
}

function randomRange(x) {
    const arr = []
    for (let i = 0; i < x; i += 1) {
        arr.push(i)
    }
    const randomArr = []
    while (arr.length > 0) {
        const randomIndex = shuffle(arr.length)
        const randomNumber = arr[randomIndex]
        randomArr.push(randomNumber)
        arr.splice(randomIndex, 1)

    }
    return randomArr

}







// Kravet er, at I skal lave et site med mindst to quizzer.
// JavaScripten skal struktureres med moduler, så
// HTML - siden kun refererer én JavaScript - fil.
// De to quizzer skal strukturelt være ens, så den
// JavaScript - kode, der viser quizzerne skal være ens. 
// Det betyder, at der skal skrives en funktion der 
// modtager en quiz som inputparameter, hvorefter den
// viser quizzen.Fx

// const displayQuiz = function (quiz, where) { };

// Funktionen skal kalde quizzens toString metode.Den 
// skal selv kunne kaldes således:

// displayQuiz(quiz1, div1);
// displayQuiz(quiz2, div2);
// displayQuiz(quizn, divn);

// Hvor quiz1 - quizn er konkrete eksempler på den 
// ovenfor viste datastruktur, og div1 - divn er id’er 
// på de dom - elementer på siden, hvor quizzen skal stå.
// Når en quiz vises, skal metoden shuffle() sørge for,
//     at spørgsmålene vises i tilfældig rækkefølge.
// Quizzerne skal kunne scores.Scoren skal anbringes i 
// localstorage således, at en besvarer, skal kunne se 
// sin score ved genbesøg på siden.