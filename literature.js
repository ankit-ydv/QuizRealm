const startBtn = document.getElementById("startButton");
const disclaimer = document.querySelector(".disclaimer");
const quiz = document.querySelector(".quiz");
const result=document.querySelector(".result");
const head=document.getElementById("heading");
const Questions = [
    {
        heading: "Who wrote the classic novel 'Pride and Prejudice'?",
        option1: "Jane Austen",
        option2: "Charlotte Brontë",
        option3: "Charles Dickens",
        option4: "Emily Brontë",
        answer: "Jane Austen"
    },
    {
        heading: "In William Shakespeare's play 'Romeo and Juliet,' which family does Juliet belong to?",
        option1: "Montague",
        option2: "Capulet",
        option3: "Medici",
        option4: "Borgia",
        answer: "Capulet"
    },
    {
        heading: "Which ancient Greek poet is often referred to as the 'Father of Epic Poetry'?",
        option1: "Homer",
        option2: "Aristophanes",
        option3: "Sophocles",
        option4: "Euripides",
        answer: "Homer"
    },
    {
        heading: "Who is the author of 'To Kill a Mockingbird,' a novel addressing racial injustice in the American South?",
        option1: "Mark Twain",
        option2: "Harper Lee",
        option3: "John Steinbeck",
        option4: "F. Scott Fitzgerald",
        answer: "Harper Lee"
    },
    {
        heading: "Which Russian novelist penned 'War and Peace,' one of the longest novels ever written?",
        option1: "Fyodor Dostoevsky",
        option2: "Vladimir Nabokov",
        option3: "Leo Tolstoy",
        option4: "Anton Chekhov",
        answer: "Leo Tolstoy"
    },
    {
        heading: "Who wrote the epic fantasy series 'The Lord of the Rings'?",
        option1: "J.K. Rowling",
        option2: "C.S. Lewis",
        option3: "George R.R. Martin",
        option4: "J.R.R. Tolkien",
        answer: "J.R.R. Tolkien"
    },
    {
        heading: "In the play 'Hamlet,' what is the famous soliloquy that begins with 'To be or not to be'?",
        option1: "Othello's Soliloquy",
        option2: "Macbeth's Soliloquy",
        option3: "Romeo's Soliloquy",
        option4: "Hamlet's Soliloquy",
        answer: "Hamlet's Soliloquy"
    }, 
    {
        heading: "Who is the author of the novel '1984,' a dystopian classic exploring themes of totalitarianism?",
        option1: "Aldous Huxley",
        option2: "George Orwell",
        option3: "Ray Bradbury",
        option4: "Philip K. Dick",
        answer: "George Orwell"
        
    },   
    {
        heading: "Which American poet wrote the famous poem 'The Road Not Taken'?",
        option1: "Walt Whitman",
        option2: "Emily Dickinson",
        option3: "Robert Frost",
        option4: "Langston Hughes",
        answer: "Robert Frost"
    },
    {
        heading: "In 'The Great Gatsby,' who is the mysterious millionaire known for hosting extravagant parties?",
        option1: "Jay Gatsby",
        option2: "Nick Carraway",
        option3: "Tom Buchanan",
        option4: "Daisy Buchanan",
        answer: "Jay Gatsby"
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



