//create a section for all contents
const quizSection=document.createElement("section");
quizSection.id="qSec";
//create a heading for the sectio as The Quiz App
const quizHead=document.createElement("h1");
quizHead.id="qHead";
quizHead.innerText="The Quiz App";
quizSection.appendChild(quizHead);

//Create a form for the quiz
const form=document.createElement("form");
form.id="form"; 

function display(data){
        console.log(data);
        for(obj of data){
            //create a div for eah question
            const questionDiv=document.createElement("div");
            questionDiv.className="qClass"
            //destructure each object
            let {id,answer,question,options} = obj; 
            //question is the question to be answered
            //id is id of question 
            const que=document.createElement("p");
            que.innerText=`Q${id}. ${question}`;
            questionDiv.appendChild(que);
            
            //answer is the index of answer+1
            
            //options is the array of option for a question
            options.forEach(function(opt, index){
                const mcqChoice=document.createElement("input");
                mcqChoice.type="radio";
                mcqChoice.name=`question${id}`;
                mcqChoice.value=index+1;
                mcqChoice.id=`Q${id}${index+1}`;
                mcqChoice.className="choiceClass";
                const label=document.createElement("label");
                label.htmlFor=`Q${id}${index+1}`;;
                label.innerText=opt;
                label.className="labelClass";
                
                questionDiv.appendChild(mcqChoice);
                questionDiv.appendChild(label);
                
                const newLine=document.createElement("br");
                questionDiv.appendChild(newLine);
            })
            const horizontalLine =document.createElement("hr");
            horizontalLine.className="hrClass";
            questionDiv.append(horizontalLine);
            form.appendChild(questionDiv);
            form.append(horizontalLine);
        }
        const submit=document.createElement("input");
        submit.type="submit";
        submit.className="submitClass";
        submit.innerText="Submit";
        form.appendChild(submit);
}
const data = fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz/");
data.then((response) => response.json()).then(display);

quizSection.appendChild(form);

document.body.appendChild(quizSection);

let score=0;
const scoreBoard=document.createElement("div");
scoreBoard.className="scoreClass";
const scoreBoardheading=document.createElement("h2");
scoreBoardheading.innerText="Score";
scoreBoard.appendChild(scoreBoardheading);
const scoreNode=document.createElement("div");
scoreNode.innerText=`${score}/5`;
scoreBoard.appendChild(scoreNode);
document.body.appendChild(scoreBoard);



function logSubmit(event) {
    const radioBtns = document.querySelectorAll("input[type='radio']");
    event.preventDefault();
    radioBtns.forEach((radios)=>console.log(radios));
    for(radios of radioBtns)
    {
        if(radios.checked)
        {
            if ((radios.name=="question1"&&radios.value==3)||(radios.name=="question2"&&radios.value==1)||(radios.name=="question3"&&radios.value==3)||(radios.name=="question4"&&radios.value==3)||(radios.name=="question5"&&radios.value==2))
            {
                score++;
            }
        }
    }
    scoreNode.innerText=`${score}/5`;
    console.log(score);
    score=0;
  }
  

const log = document.getElementById('form');
form.addEventListener('submit', logSubmit);

