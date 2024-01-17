const startBtn = document.getElementById("startButton");
const disclaimer = document.querySelector(".disclaimer");
const quiz = document.querySelector(".quiz");
const result=document.querySelector(".result");
const head=document.getElementById("heading");
const Questions = [
    {
        heading: "What is the capital of Brazil?",
        option1: "Buenos Aires",
        option2: "Rio de Janeiro",
        option3: "São Paulo",
        option4: "Brasília",
        answer: "Brasília"
    },
    {
        heading: "Which mountain range is considered the youngest and tallest in the world, located in Asia?",
        option1: "Rocky Mountains",
        option2: "Andes Mountains",
        option3: "Himalayas",
        option4: "Alps",
        answer: "Himalayas"
    },
    {
        heading: "What is the largest desert in the world, often referred to as the 'Empty Quarter'?",
        option1: "Sahara Desert",
        option2: "Gobi Desert",
        option3: "Arabian Desert",
        option4: "Rub' al Khali",
        answer: "Rub' al Khali"
    },
    {
        heading: "Which river is the longest in the world, flowing through multiple countries in Africa?",
        option1: "Amazon River",
        option2: "Nile River",
        option3: "Yangtze River",
        option4: "Ganges River",
        answer: "Nile River"
    },
    {
        heading: "Which strait separates Asia and North America, connecting the Pacific Ocean to the Arctic Ocean?",
        option1: "Bering Strait",
        option2: "Strait of Hormuz",
        option3: "English Channel",
        option4: "Gibraltar Strait",
        answer: "Bering Strait"
    },
    {
        heading: "In which ocean would you find the Mariana Trench, the deepest point on Earth?",
        option1: "Atlantic Ocean",
        option2: "Indian Ocean",
        option3: "Southern Ocean",
        option4: "Pacific Ocean",
        answer: "Pacific Ocean"
    },
    {
        heading: "Which African country is known as the 'Land of a Thousand Hills' due to its scenic terrain?",
        option1: "Rwanda",
        option2: "Kenya",
        option3: "Tanzania",
        option4: "Uganda",
        answer: "Rwanda"
    },
    {
        heading: "What is the world's largest archipelago, located in Southeast Asia?",
        option1: "Maldives",
        option2: "Philippines",
        option3: "Indonesia",
        option4: "Japan",
        answer: "Indonesia"
    },
    {
        heading: "Which European country is known for its fjords, spectacular waterfalls, and midnight sun?",
        option1: "Sweden",
        option2: "Norway",
        option3: "Finland",
        option4: "Denmark",
        answer: "Norway"
    },
    {
        heading: "Which desert, located in North America, is known for its iconic saguaro cactus?",
        option1: "Sahara Desert",
        option2: "Gobi Desert",
        option3: "Sonoran Desert",
        option4: "Mojave Desert",
        answer: "Sonoran Desert"
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