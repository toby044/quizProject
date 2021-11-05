import { q } from './quiz1.js'

// q = {
//     name: 'test',
//     created: new Date(),
//     questions: [
//         {
//             category: 'continent',
//             question: 'on which continent is Denmark located?1',
//             possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
//             correctAnswer: 1
//         },
//         {
//             category: 'continent',
//             question: 'on which continent is Denmark located?2',
//             possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
//             correctAnswer: 3
//         },
//         {
//             category: 'continent',
//             question: 'on which continent is Denmark located?3',
//             possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
//             correctAnswer: 0
//         },
//         {
//             category: 'continent',
//             question: 'on which continent is Denmark located?4',
//             possibleAnswers: ['Europe', 'Asia', 'Africa', 'Antarctica'],
//             correctAnswer: 0
//         }
//     ]
// }

let score = 0;

function init() {                                                 //creating everything
    const quizElement = document.getElementById('quiz')
    let quizStr = ''
    q.questions.forEach(function (questions, qIndex) {            //looping through questions
        let answerStr = ''
        const answerOrder = randomRange(questions.possibleAnswers.length)
        questions.possibleAnswers.forEach(function (answer, aIndex) {
            answerStr += `
      <li style="order: ${answerOrder[aIndex]}">                              
        <label>
             <input type ="radio" name="question-${qIndex}" data-correct="${questions.correctAnswer === aIndex}">     
             ${answer} 
        </label>         
      </li>`

        })    //creating a radio button for each answer including html elements... same name to radiobtn, to prevent all from being checked

        quizStr += `
    <form>
      <h1>${questions.question}</h1>
      <div class="alert"></div>
      <div class="score">Score: ${score}</div>
      <ul style="display: flex; flex-direction: column;">
        ${answerStr}
      </ul>
      <button type="submit">Submit</button>
    </form>`

    })
    quizElement.innerHTML = quizStr
    quizElement.addEventListener('submit', function (e) {
        e.preventDefault()                                                           //preventing the page from reloading on submit
        const alert = e.target.querySelector('div.alert')
        const selectedInput = e.target.querySelector('input:checked')
        if (selectedInput === null) {
            alert.innerHTML = 'Select an answer'
        } else if (selectedInput.dataset.correctAnswer === "true") { //bugged
            alert.innerHTML = 'Correct'
            score++
            localStorage.setItem('score', score);
            console.log(score)
        } else {
            alert.innerHTML = 'Wrong'

        } console.log(selectedInput)
    })

}

//calling quiz, creating radio buttons etc.
init()

//shuffle
function shuffle(n) {
    const randomNum = Math.random() * n    //generating a random number
    return Math.floor(randomNum)
}

function randomRange(x) {
    const arr = []
    for (let i = 0; i < x; i += 1) {   //generating an array of numbers example randomRange(5) = [1]...[5]
        arr.push(i)
    }
    const randomArr = []               //picking random item from arr, creating new array in random order
    while (arr.length > 0) {
        const randomIndex = shuffle(arr.length)
        const randomNumber = arr[randomIndex]
        randomArr.push(randomNumber)
        arr.splice(randomIndex, 1)

    }
    return randomArr

}