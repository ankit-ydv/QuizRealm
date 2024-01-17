const startBtn = document.getElementById("startButton");
const disclaimer = document.querySelector(".disclaimer");
const quiz = document.querySelector(".quiz");
const result=document.querySelector(".result");
const head=document.getElementById("heading");
const Questions = [
    {
        heading: "What is the meaning of the word 'Ubiquitous'?",
        option1: "Rare",
        option2: "Ubiquitous",
        option3: "Hidden",
        option4: "Temporary",
        answer: "Ubiquitous"
    },
    {
        heading: "Choose the synonym for 'Benevolent.",
        option1: "Malevolent",
        option2: "Generous",
        option3: "Cunning",
        option4: "Hostile",
        answer: "Generous"
    },
    {
        heading: "Provide an antonym for the word 'Ephemeral.'",
        option1: "Temporary",
        option2: "Permanent",
        option3: "Fleeting",
        option4: "Brief",
        answer: "Permanent"
    },
    {
        heading: "Define 'Pernicious.'",
        option1: "Harmful",
        option2: "Helpful",
        option3: "Delightful",
        option4: "Innocent",
        answer: "Harmful"
    },
    {
        heading: "What is the synonym for 'Ubiquity'?",
        option1: "Scarcity",
        option2: "Everywhere",
        option3: "Specific",
        option4: "Nowhere",
        answer: "Everywhere"
    },
    {
        heading: "Choose the correct definition for the term 'Eloquent.'",
        option1: "Loud",
        option2: "Clear and expressive in speech",
        option3: "Quiet",
        option4: "Confusing",
        answer: "Clear and expressive in speech"
    },
    {
        heading: "If someone is 'Prolific,' what characteristic do they possess?",
        option1: "Lazy",
        option2: "Talented",
        option3: "Productive",
        option4: "Careless",
        answer: "Productive"
    }, 
    {
        heading: "If someone is 'Meticulous,' what characteristic are they known for?",
        option1: "Careful attention to detail",
        option2: "Carelessness",
        option3: "Indifference",
        option4: "Laziness",
        answer: "Careful attention to detail"    
    },   
    {
        heading: "What does the term 'Surreptitious' mean?",
        option1: "Open and honest",
        option2: "Noisy",
        option3: "Secretive",
        option4: "Careless",
        answer: "Secretive"
    },
    {
        heading: "What is the meaning of the term 'Sycophant'?",
        option1: "Rebel",
        option2: "Flatterer",
        option3: "Leader",
        option4: "Diplomat",
        answer: "Flatterer"
    }
]

let total=0;
let i=0;
window.addEventListener("load", function (e) {
    startBtn.style.display = "block";
    head.style.display="block";
})
startBtn.addEventListener("click", function (e) {
    startBtn.style.display = "none";
    disclaimer.style.display = "block"
     head.style.display="none";
})

const exitBtn = document.getElementById("exit");
const continueBtn = document.getElementById("continue");
exitBtn.addEventListener("click", function (param) {
    startBtn.style.display = "block";
    disclaimer.style.display = "none";
    head.style.display="block";
})
continueBtn.addEventListener("click", function (param) {
    startBtn.style.display = "none";
    disclaimer.style.display = "none";
    quiz.style.display = "block";
    let ques = document.querySelector(".ques");
    ques.innerHTML = `   <div>
      <h2>${Questions[0].heading}</h2>
  </div>
  <div class="option">
      <div class="inner">
          <h4 class="options">${Questions[0].option1}</h4>
  
          <h4 class="options">${Questions[0].option2}</h4>
      </div>
      <div class="inner">
      <h4 class="options">${Questions[0].option3}</h4>
     
      <h4 class="options">${Questions[0].option4}</h4>
      </div>
  </div>
  <hr>`
  console.log("first question")
  document.getElementById("foot-span").innerHTML=1;
  const options=document.getElementsByClassName("options");
  for( let j=0;j<4;j++)
  {
   
    options[j].addEventListener("click",function (param) { 

        if(options[j].innerHTML===Questions[0].answer)
        {
            options[j].style.backgroundColor="#06FF00";
            total++;
        }
         else{
            options[j].style.backgroundColor="red";
         } 
        document.querySelector(".option").style.pointerEvents="none";
     })
  }
  i++;
})

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", function (param) {
    
    if(i===Questions.length)
    {
        quiz.style.display="none";
        result.style.display="block";
        document.getElementById("score").innerHTML=total;
        const restartBtn=document.getElementById("restartBtn");
        restartBtn.addEventListener("click",function () {
            result.style.display="none";
            startBtn.style.display="block";
            head.style.display="block";
            i=0;
            total=0;
          })
    }
    else{
        let ques = document.querySelector(".ques");
        ques.innerHTML = `   <div>
          <h2>${Questions[i].heading}</h2>
      </div>
      <div class="option">
          <div class="inner">
              <h4 class="options">${Questions[i].option1}</h4>
      
              <h4 class="options">${Questions[i].option2}</h4>
    
          </div>
          <div class="inner">
          <h4 class="options">${Questions[i].option3}</h4>
         
          <h4 class="options">${Questions[i].option4}</h4>
          </div>
      </div>
      <hr>`
      if(i==0)
      {
          console.log("first question.....")
      }
      document.getElementById("foot-span").innerHTML=i+1;
      const options=document.getElementsByClassName("options");
      for( let j=0;j<4;j++)
      {
        options[j].addEventListener("click",function (param) { 
            if(options[j].innerHTML===Questions[i-1].answer)
            {
                options[j].style.backgroundColor="#06FF00";
                total++;
            }
             else{
                options[j].style.backgroundColor="red";
             } 
            document.querySelector(".option").style.pointerEvents="none";
         })
      }
        i++;
    }

})   



