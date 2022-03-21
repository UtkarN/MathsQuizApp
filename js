const quizDb=[
    {
        question:"Q1:What is 7+8=?",
        a:"12",
        b:"16",
        c:"15",
        d:"20",
        ans:"ans3"
    },
    {
        question:"Q2:What is 62+43?",
        a:"62",
        b:"89",
        c:"91",
        d:"105",
        ans:"ans4"
    },
    {
        question:"Q3:What is 79+10?",
        a:"89",
        b:"79",
        c:"80",
        d:"90",
        ans:"ans1"
    },
    {
        question:"Q4:What is 11+89?",
        a:"110",
        b:"100",
        c:"102",
        d:"99",
        ans:"ans2"
    },
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');

const submit=document.querySelector('#submit');

const answers =document.querySelectorAll('.answer');

const showScore =document.querySelector('#showScore');

let questioncount=0;
let score=0;

const loadquestion = () =>{
    const questionlist=quizDb[questioncount];

    question.innerHTML=questionlist.question;
    option1.innerHTML=questionlist.a;
    option2.innerHTML=questionlist.b;
    option3.innerHTML=questionlist.c;
    option4.innerHTML=questionlist.d;

}
loadquestion();

const getCheakAnswer=()=>{

    let answer;
    answers.forEach((curAnsEle)=>{
        if(curAnsEle.cheaked){
            answer=curAnsEle.id;
        }
    });
    return answer;

}

const deselectAll = () => {
    answers.forEach((curAnsEle)=>curAnsEle.cheaked=false);
}

submit.addEventListener('click',() => {

    const cheakedAnswer = getCheakAnswer();
    console.log(cheakedAnswer);

    if(cheakedAnswer == quizDb[questioncount].ans){
        score++;
    };

    questioncount++;
    deselectAll();

    if(questioncount < quizDb.length){
        loadquestion();
    }else{
         showScore.innerHTML=`
         <h3> You scored ${score}/${quizDb.length}</h3>
         <button class ="btn" onclick="location.reload()"> Play Again </button>
         `;
           showScore.classList.remove('scoreArea');
    }
});
