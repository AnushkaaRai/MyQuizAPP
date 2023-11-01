const questions = [
    {
        question:"which is the largest animal in the world?",
        answer:[
           
            { text:"Shark",correct:false},
            { text:"Blue Whale",correct:true},
            {  text:"Elephant",correct:false},
            {  text:"Giraffe",correct:false},
        ]
    },
    {
        question:"which is the smallest city in the world?",
        answer:[
           
            { text:"America",correct:false},
            { text:"Vietnam",correct:true},
            {  text:"Eygpt",correct:false},
            {  text:"Germany",correct:false},
        ]
    },
    {
        question:"which is the largest country in the world?",
        answer:[
           
            { text:"India",correct:false},
            { text:"USA",correct:true},
            {  text:"Russia",correct:false},
            {  text:"UK",correct:false},
        ]
    },
    {
        question:"who is the father of nation?",
        answer:[
           
            { text:"PT. Jawaharlal Nehru",correct:false},
            { text:"Mahatma Gandhi",correct:true},
            {  text:"Sardar Patel",correct:false},
            {  text:"Man Mohan Singh",correct:false},
        ]
    },
    {
        question:"where c was invented?",
        answer:[
           
            { text:"Bell's lab",correct:true},
            { text:"India",correct:false},
            {  text:"Russia",correct:false},
            {  text:"jaa-pan",correct:false},
        ]
    }
];

const questionElement=document.getElementById("question");

const answerButtons=document.getElementById("answer");

const nextButton=document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){

    resetState();
    let  currentQuestion = questions[currentQuestionIndex];
    let questionNo =  currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;


currentQuestion.answer.forEach(answer=>
    {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
  nextButton.style.display="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}


function selectAnswer(e)
{
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",() =>
{
    if(currentQuestionIndex< questions.length)
    {
      handleNextButton();
    }
    else{
        startQuiz();
    }
});




startQuiz();