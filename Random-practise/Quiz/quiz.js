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

const  question = document.querySelector('.question');
const  options = document.querySelector('.options');
const  button = document.querySelector('.button');
const  result = document.querySelector('.result');
const  output = document.querySelector('.output');
const  game = document.querySelector('.game');
const  play = document.querySelector('.play');

let val = 0;
let selectAnswer;
let correct=0,wrong=0,score=0,QL,AL;

const setQuestionsAndAnswer = () => 
{
 QL = data.map( item => {

  return item.question
  
})


 AL = data.map( item => {

 return item.answers.map(( a, i ) =>

  `
  <div class="option">
  <input name="option" type="radio" id=${i} class="input" value=${a.isCorrect}>
  <label for=${i}>${a.answer}</label>
  </div>
  `
    ).join('')
}
)



}

setQuestionsAndAnswer()

function add_click_Event_to_options()
{
  options.querySelectorAll('input').forEach(el => {

  el.addEventListener('click', (e) => {

    selectAnswer = e.target.value
    
  })
})}

add_click_Event_to_options()

const startPlaying = () =>
{
   
if(val <= data.length-1) {

question.innerHTML = QL[val]
options.innerHTML = AL[val]
val = val + 1 ;

add_click_Event_to_options()
}
else{
displayResult()
output.style.display = 'block';

game.style.display = 'none'
}}

startPlaying()

const submitAnswer = () => 
{
output.style.display = 'none';
button.addEventListener('click', (e) => {
  
  if( selectAnswer !== undefined) {
    selectAnswer === 'true' ? correct++ : wrong++;
    score = (correct - wrong ) * 10
    
    startPlaying()

  selectAnswer = undefined
}
})
}

submitAnswer()

const showResult = document.createElement('span')

const displayResult = () => {
  
  showResult.innerHTML = 
`
  <div class="correct">Correct : ${correct}</div>
  <div class="wrong">Wrong : ${wrong}</div>
  <div class="score">Score : ${score}</div>
`

result.children[0].append(showResult)

}

play.addEventListener('click' , () => {

  output.style.display = 'none';

  game.style.display = 'block';

  val = 0;
  
 selectAnswer = undefined;

 correct=0,wrong=0,score=0,QL,AL;

  
  
  add_click_Event_to_options()

  startPlaying()
  
  submitAnswer()

  displayResult()

})
































































































































