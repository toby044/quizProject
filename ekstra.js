let questions = [
    {
        category: 'håndbold',
        question: 'Hvilken placering fik Håndboldherrerne ved OL i 2020?',
        possibleAnswers: ['1. plads', '2. plads', '3. plads', '4. plads'],
        correctAnswer: 1
    },
    {
        category: 'blandet',
        question: 'Hvor mange point får man ved at lave en touchdown i Amerikansk Fodbold?',
        possibleAnswers: ['4 point', '5 point', '6 point', '7 point'],
        correctAnswer: 2
    },
    {
        category: 'fodbold',
        question: 'Hvor langt nåede herrelandsholdet til EM i 2021?',
        possibleAnswers: ['Finalen', 'Semifinalen ', 'Kvartfinalen', 'De kom ikke længere end gruppespillet'],
        correctAnswer: 1
    },
    {
        category: 'blandet',
        question: 'I hvilken sportsgren er Sara Slott Petersen kendt?',
        possibleAnswers: ['Atletik ', 'Svømning', 'Badminton', 'Tennis'],
        correctAnswer: 0
    }
]

let questions = [
    {
        category: 'hovedstæder',
        question: 'Hvad hedder hovedstaden i Portugal?',
        possibleAnswers: ['Budapest', 'Lissabon ', 'Zagreb', 'Porto'],
        correctAnswer: 1
    },
    {
        category: 'flag',
        question: 'Hvilket af disse lande har ikke rødt i deres flag?',
        possibleAnswers: ['Norge', 'Irland', 'Wales', 'Tyskland'],
        correctAnswer: 1
    },
    {
        category: 'flag',
        question: 'Hvilket af disse lande har ikke en stjerne i deres flag?',
        possibleAnswers: ['Chile', 'Brasilien', 'Columbia', 'Venezuela'],
        correctAnswer: 2
    },
    {
        category: 'hovedstæder',
        question: 'Hvad hedder hovedstaden i Australien',
        possibleAnswers: ['Canberra', 'Adelaide', 'Sydney', 'Melbourne'],
        correctAnswer: 0
    }
]

// Funktion der opretter teksten på siden
function createPage () {
    let main = document.getElementById("main");
    let p1 = document.createElement("p");
    p1.setAttribute("id", "numOfQuestions");
    let p1Text = document.createTextNode("Spørgsmål" + " " + "x" + " " + "ud af" + " " + quiz.questions.length);
    p1.appendChild(p1Text);
    main.appendChild(p1);
    let p2 = document.createElement("p");
    p2.setAttribute("id", "score");
    let scoreText = document.createTextNode("Du har" + " " + score + " " + "ud af" + " " + quiz.questions.length + " " + "rigtige");
    p2.appendChild(scoreText);
    main.appendChild(p2);

}

createPage();