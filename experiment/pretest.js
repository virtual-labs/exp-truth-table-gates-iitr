/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Electronic circuits that operate on one or more input signals to produce standard output ___________",  ///// Write the question inside double quotes
      answers: {
        a: "Series circuits",                  ///// Write the option 1 inside double quotes
        b: "Parallel circuits",                  ///// Write the option 2 inside double quotes
        c: "Logic signals",                  ///// Write the option 3 inside double quotes
        d: "Logic gates"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: "A __________ gate gives the output as 1 only if all the inputs signals are 1.",  ///// Write the question inside double quotes
      answers: {
        a: "AND",                  ///// Write the option 1 inside double quotes
        b: "OR",                  ///// Write the option 2 inside double quotes
        c: "NOR",                  ///// Write the option 3 inside double quotes
        d: "Ex-OR"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },


    {
     question: "The boolean expression of an OR gate is _______",  ///// Write the question inside double quotes
      answers: {
        a: "A.B",                  ///// Write the option 1 inside double quotes
        b: "A’B+AB’",                  ///// Write the option 2 inside double quotes
        c: "A+B",                  ///// Write the option 3 inside double quotes
        d: "A’B’"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


    {
     question: "The gate which is used to reverse the output obtained is _____",  ///// Write the question inside double quotes
      answers: {
        a: "NOR",                  ///// Write the option 1 inside double quotes
        b: "NAND",                  ///// Write the option 2 inside double quotes
        c: "EX-OR",                  ///// Write the option 3 inside double quotes
        d: "NOT"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },


    {
     question: "Which of the following gate will returns a 1 only if both the inputs are 0?",  ///// Write the question inside double quotes
      answers: {
        a: "AND",                  ///// Write the option 1 inside double quotes
        b: "OR",                  ///// Write the option 2 inside double quotes
        c: "NAND",                  ///// Write the option 3 inside double quotes
        d: "EX-OR"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
                                      ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////