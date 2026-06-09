const allQuestions = [

{
question:"What does HTML stand for?",
answers:[
{text:"Hyper Text Markup Language",correct:true},
{text:"Home Tool Markup Language",correct:false},
{text:"Hyperlinks Text Language",correct:false},
{text:"Hyper Tool Multi Language",correct:false}
]
},

{
question:"Which language is used for styling websites?",
answers:[
{text:"HTML",correct:false},
{text:"CSS",correct:true},
{text:"Java",correct:false},
{text:"Python",correct:false}
]
},

{
question:"Which language makes websites interactive?",
answers:[
{text:"JavaScript",correct:true},
{text:"HTML",correct:false},
{text:"CSS",correct:false},
{text:"SQL",correct:false}
]
},

{
question:"Which tag creates a hyperlink?",
answers:[
{text:"<a>",correct:true},
{text:"<img>",correct:false},
{text:"<p>",correct:false},
{text:"<h1>",correct:false}
]
},

{
question:"Which company created JavaScript?",
answers:[
{text:"Netscape",correct:true},
{text:"Google",correct:false},
{text:"Apple",correct:false},
{text:"Microsoft",correct:false}
]
},

{
question:"Which CSS selector uses # ?",
answers:[
{text:"ID Selector",correct:true},
{text:"Class Selector",correct:false},
{text:"Element Selector",correct:false},
{text:"Universal Selector",correct:false}
]
},

{
question:"What does CSS stand for?",
answers:[
{text:"Cascading Style Sheets",correct:true},
{text:"Computer Style Sheets",correct:false},
{text:"Creative Style System",correct:false},
{text:"Colorful Style Sheets",correct:false}
]
},

{
question:"Which method prints output to console?",
answers:[
{text:"console.log()",correct:true},
{text:"print()",correct:false},
{text:"display()",correct:false},
{text:"echo()",correct:false}
]
},

{
question:"Which HTML tag inserts an image?",
answers:[
{text:"<img>",correct:true},
{text:"<image>",correct:false},
{text:"<picture>",correct:false},
{text:"<src>",correct:false}
]
},

{
question:"What does DOM stand for?",
answers:[
{text:"Document Object Model",correct:true},
{text:"Digital Output Model",correct:false},
{text:"Data Object Method",correct:false},
{text:"Document Order Method",correct:false}
]
},

{
question:"Which keyword declares a variable?",
answers:[
{text:"let",correct:true},
{text:"declare",correct:false},
{text:"int",correct:false},
{text:"varible",correct:false}
]
},

{
question:"Which symbol is used for comments in JS?",
answers:[
{text:"//",correct:true},
{text:"<!-- -->",correct:false},
{text:"#",correct:false},
{text:"**",correct:false}
]
},

{
question:"Which property changes text color?",
answers:[
{text:"color",correct:true},
{text:"font-color",correct:false},
{text:"background",correct:false},
{text:"text-style",correct:false}
]
},

{
question:"Which HTML tag defines a paragraph?",
answers:[
{text:"<p>",correct:true},
{text:"<para>",correct:false},
{text:"<paragraph>",correct:false},
{text:"<pg>",correct:false}
]
},

{
question:"Which CSS property centers text?",
answers:[
{text:"text-align",correct:true},
{text:"align-text",correct:false},
{text:"center",correct:false},
{text:"font-align",correct:false}
]
}

];

const questions = allQuestions
.sort(() => Math.random() - 0.5)
.slice(0,10);

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function showQuestion(){

    resetState();

    let q = questions[currentQuestion];

    question.innerText =
    `${currentQuestion+1}. ${q.question}`;

    q.answers.forEach(answer=>{

        const button =
        document.createElement("button");

        button.innerText = answer.text;

        button.classList.add("btn");

        if(answer.correct){
            button.dataset.correct = "true";
        }

        button.addEventListener(
            "click",
            selectAnswer
        );

        answers.appendChild(button);
    });
}

function resetState(){

    nextBtn.style.display="none";

    answers.innerHTML="";
}

function selectAnswer(e){

    const selectedBtn = e.target;

    const correct =
    selectedBtn.dataset.correct==="true";

    if(correct){
        score++;
    }

    Array.from(answers.children)
    .forEach(button=>{

        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        else{
            button.classList.add("wrong");
        }

        button.disabled=true;
    });

    nextBtn.style.display="block";
}

nextBtn.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion<questions.length){

        showQuestion();

    }else{

        document
        .getElementById("quiz")
        .classList.add("hide");

        document
        .getElementById("result")
        .classList.remove("hide");

        document
        .getElementById("score")
        .innerText =
        `Your Score: ${score}/${questions.length}`;
    }
});

showQuestion();