const quizData = [{
    quenstion: 'What does HTML stand for?', //o que significa HTML?
    a: 'a: HyperText Markup Language',
    b: 'b: Cascading Style Sheets',
    c: 'c: Jason object Notation',
    d: 'd: Designer UI',
    correct: 'a'
},
{
    quenstion: 'What is the css for?', //para que serve o css?
    a: 'a: To optimize the website',
    b: 'b: To give functionality on the website',
    c: 'c: To give style and color to the site',
    d: 'd: None of the above',
    correct: 'c'
},
{
    quenstion: 'What is the most used programming language in 2023 ?', //qual é a linguagem de programação mais usada em 2023?
    a: 'a: Java',
    b: 'b: JavaScript',
    c: 'c: Phython',
    d: 'd: C#',
    correct: 'b'
},
{
    quenstion: 'What is JavaScript?', //O que é JavaScript?
    a: 'a: Text markup language',
    b: 'b: A high-level programming language',
    c: 'c: Its a database app.',
    d: 'd: JavaScript is a cleaning tool',
    correct: 'b'
},
{
    quenstion: 'JavaScript was created by who?', //JavaScript foi criado por quem?
    a: 'a: Guido Van Rossum',
    b: 'b: Rasmus Lerdof',
    c: 'c: Brendan Eich',
    d: 'd: James Cameron',
    correct: 'c'
},
{
    quenstion: 'What year was JavasScript launched ?',// quando foi lancado o JavaScript?
    a: 'Launched in 1996',
    b: 'Launched in 1990',
    c: 'Launched in 1983',
    d: 'Launched in 1995',
    correct: 'd'
}



];
const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.quenstion;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {


    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {

            answer = answerEl.id;
        }
    });

    return answer;
}
function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        };

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> Você acertou ${score}, das ${quizData.length} questões respondidas.</h2> <button onclick="location.reload()">Try again</button>`;
        }
    }
});

