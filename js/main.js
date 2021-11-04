
let score = 0;
// let quiz = {
//   name: 'test',
//   created: new Date(),                    testing
let questions = [
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
//}

function init() {
    const quizEl = document.getElementById('quiz')



    let quizStr = ''
    questions.forEach(function (questions, qIndex) {
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
