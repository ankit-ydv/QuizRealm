const startBtn = document.getElementById("startButton");
const disclaimer = document.querySelector(".disclaimer");
const quiz = document.querySelector(".quiz");
const result=document.querySelector(".result");
const head=document.getElementById("heading");
const Questions = [
    {
        heading: "What is the chemical symbol for the element gold?",
        option1: "Au",
        option2: "Ag",
        option3: "Fe",
        option4: "Cu",
        answer: "Au"
    },
    {
        heading: "Who is known as the 'father of modern physics' and formulated the theory of relativity?",
        option1: "Isaac Newton",
        option2: "Galileo Galilei",
        option3: "Albert Einstein",
        option4: "Niels Bohr",
        answer: "Albert Einstein"
    },
    {
        heading: "What is the process by which plants make their own food using sunlight?",
        option1: "Respiration",
        option2: "Photosynthesis",
        option3: "Fermentation",
        option4: "Transpiration",
        answer: "Photosynthesis"
    },
    {
        heading: "Which gas makes up the majority of Earth's atmosphere?",
        option1: "Oxygen (O2)",
        option2: "Carbon Dioxide (CO2)",
        option3: "Nitrogen (N2)",
        option4: "Hydrogen (H2)",
        answer: "Nitrogen (N2)"
    },
    {
        heading: "What is the smallest unit of matter that retains the properties of an element?",
        option1: "Atom",
        option2: "Molecule",
        option3: "Cell",
        option4: "Proton",
        answer: "Atom"
    },
    {
        heading: "Who discovered penicillin, the first widely used antibiotic?",
        option1: "Alexander Fleming",
        option2: "Louis Pasteur",
        option3: "Marie Curie",
        option4: "Robert Koch",
        answer: "Alexander Fleming"
    },
    {
        heading: "Which planet is known as the 'Red Planet' in our solar system?",
        option1: "Venus",
        option2: "Mars",
        option3: "Jupiter",
        option4: "Saturn",
        answer: "Mars"
    }, 
    {
        heading: "What is the speed of light in a vacuum?",
        option1: "300,000 kilometers per second",
        option2: "150,000 miles per second",
        option3: "186,282 miles per second",
        option4: "500,000 kilometers per second",
        answer: "186,282 miles per second"
        
    },   
    {
        heading: "Who is credited with the discovery of the structure of DNA?",
        option1: "James Watson and Francis Crick",
        option2: "Rosalind Franklin",
        option3: "Gregor Mendel",
        option4: "Linus Pauling",
        answer: "James Watson and Francis Crick"
    },
    {
        heading: "What is the process by which a cell divides into two identical daughter cells?",
        option1: "Mitosis",
        option2: "Meiosis",
        option3: "Binary Fission",
        option4: "Cellular Respiration",
        answer: "Mitosis"
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



