const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];
const result = document.querySelector('.result');
const game = document.querySelector('.game');
const question = document.querySelector('.question');
let answersContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const play = document.querySelector('.play');

let qIndex = 0;
let correct = 0;
let total = 0;
let wrong = 0;
let selectAnswer ;
console.log(selectAnswer)



const showQuestion = (qNumber) => {
  //when question is finished stop asking questions show results 
  if(questionFinished(qNumber)) { 
    showResults() 
    return
  }
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers.map((a,i) => 
    `
        <div class="answer">
            <input name="answer" type="radio" id=${i} value=${a.isCorrect}>
            <label for=${i}>${a.answer}</label>
        </div>
    `
  ).join('');

  showAnswer();
  
};

const showAnswer = () => {
  answersContainer.querySelectorAll('input').forEach( el => {
    el.addEventListener('click', (e) => {
        console.log(e.target.value);
         selectAnswer = e.target.value;
    })
  })
}

const submitAnswer = () => {
  submit.addEventListener('click', () => {
    if (selectAnswer === undefined ){ 
      return
    }
    selectAnswer === 'true' ? correct++ : wrong++;
    console.log(`correct:${correct}`)
         console.log(`wrong:${wrong}`)
         qIndex++
         showQuestion(qIndex)
         selectAnswer = undefined;
  })
}

const questionFinished = (i) => {
  if ( data[i] === undefined) {
    game.style.display = 'none';
    result.style.display = 'flex';
    return true
  }
  
  return false
}

showQuestion(qIndex)
submitAnswer()




play.addEventListener('click', () => {
  qIndex = 0;
  correct = 0;
  total = 0;
  wrong = 0;
  selectAnswer ;
  game.style.display = 'flex';
    result.style.display = 'none';
  showQuestion(qIndex)
  showResults()
})

const mainResult = document.createElement('span');
const showResults = (displayResult) => {
  
  mainResult.innerHTML = ''
  mainResult.innerHTML =  `<div class="correct"><h3>Correct answer: ${correct}</h3></div>
  <div class="wrong"><h3>Wrong answer: ${wrong}</h3></div>
  <div class="score"><h3>Score: ${correct+total}</h3></div>
  `
  result.insertBefore(mainResult, play)
 
}

