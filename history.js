const startBtn = document.getElementById("startButton");
const disclaimer = document.querySelector(".disclaimer");
const quiz = document.querySelector(".quiz");
const result=document.querySelector(".result");
const head=document.getElementById("heading");
const Questions = [
    {
        heading: "Which city hosted the signing of the Treaty of Versailles after World War I?",
        option1: "Paris",
        option2: "London",
        option3: "Berlin",
        option4: "Vienna",
        answer: "Paris"
    },
    {
        heading: "In which year did the Industrial Revolution begin?",
        option1: "1700",
        option2: "1750",
        option3: "1800",
        option4: "1850",
        answer: "1750"
    },
    {
        heading: "During which period did the Maurya Empire flourish in ancient India?",
        option1: "Vedic Period",
        option2: "Gupta Period",
        option3: "Maurya Period",
        option4: "Mughal Period",
        answer: "Maurya Period"
    },
    {
        heading: "Who was the founder of the Maurya dynasty in ancient India?",
        option1: "Chandragupta Maurya",
        option2: "Ashoka",
        option3: "Bindusara",
        option4: "Chanakya",
        Answer: "Chandragupta Maurya"
    },
    {
        heading: "Who was the first President of the United States?",
        option1: "Thomas Jefferson",
        option2: "George Washington",
        option3: "John Adams",
        option4: "James Madison",
        answer: "George Washington"
    },
    {
        heading: "Which ancient Indian text is a compilation of hymns dedicated to various deities?",
        option1: "Arthashastra",
        option2: "Ramayana",
        option3: "Rigveda",
        option4: "Upanishads",
        answer: "Rigveda"
    },
    {
        heading: "Which Indian leader is known for his role in the nonviolent independence movement and is called the 'Mahatma'?",
        option1: "Jawaharlal Nehru",
        option2: "Sardar Patel",
        option3: "Subhas Chandra Bose",
        option4: "Mahatma Gandhi",
        answer: "Mahatma Gandhi"
    },
    {
        heading: "Who was the famous explorer credited with circumnavigating the globe during the Age of Discovery?",
        option1: "Christopher Columbus",
        option2: "Ferdinand Magellan",
        option3: "Vasco da Gama",
        option4: "Marco Polo",
        answer: "Ferdinand Magellan"
    },
    {
        heading: "Which ancient wonder of the world was located in Alexandria, Egypt?",
        option1: "Great Wall of China",
        option2: "Hanging Gardens of Babylon",
        option3: "Lighthouse of Alexandria",
        option4: "Colossus of Rhodes",
        answer: "Lighthouse of Alexandria"
    },
    {
        heading: "During which dynasty did the Gupta Empire reach its zenith in ancient India?",
        option1: "Maurya Dynasty",
        option2: "Chola Dynasty",
        option3: "Gupta Dynasty",
        option4: "Pallava Dynasty",
        answer: "Gupta Dynasty"
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