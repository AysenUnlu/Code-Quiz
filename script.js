var startQuizEl = document.getElementById("startQuiz");
var timerEl;
var welcomeEl;
var quizTimeEl;
var quizShowDiv;
var contentEl;
var timerInterval;

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Which of the following is true about typeof operator in JavaScript?",
      choices: ["The typeof is a unary operator that is placed before its single operand, which can be of any type.", 
                "Its value is a string indicating the data type of the operand.", 
                "Both of the above.", 
                "None of the above."],
        answer: "Both of the above."
    },
    {
        title: "Can you pass a anonymous function as an argument to another function?",
        choices: ["true", "false"],
        answer: "true"
    },
    {
        title: "Which built-in method combines the text of two strings and returns a new string?",
        choices: ["append()", "concat()","attach()", "None of the above."],
        answer: "concat()"
    },
    {
        title: "Which built-in method returns the calling string value converted to lower case?",
        choices: ["toLowerCase()", "toLower()","changeCase(case)", "None of the above."],
        answer: "toLowerCase()"
    },
    {
        title: "Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
        choices: ["toSource()", "valueOf()","toString()", "None of the above."],
        answer: "toString()"
    },
    {
        title: "Which of the following function of String object executes the search for a match between a regular expression and a specified string?",
        choices: ["concat()", "match()","replace()", "search()"],
        answer: "search()"
    },
    {
        title: "Which of the following function of String object returns the primitive value of the specified object.",
        choices: ["toLocaleUpperCase()", "toUpperCase()","toString()", "valueOf()"],
        answer: "valueOf()"
    },
    {
        title: "Which of the following function of String object causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag?",
        choices: ["fixed()", "big()","blink()", "bold()"],
        answer: "fixed()"
    },
    {
        title: "Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
        choices: ["indexOf()", "join()","lastIndexOf()", "map()"],
        answer: "indexOf()"
    },
    {
        title: "Which of the following function of Array object reverses the order of the elements of an array?",
        choices: ["reverse()", "push()","reduce()", "reduceRight()"],
        answer: "reverse()"
    },
    ///etc.
  ];

  var scores=[];
  //this is the object in which I store my players.
  var entry={
        name:"",
        score:0,
  };

   //This function removes all the children of el
  function emptyQuiz2(el){
    
       while (el.firstChild) {
           el.removeChild(el.firstChild);
       } 
  }

  index=0;

var secondsLeft = (15*questions.length); //15 seconds are given for each question

 function setTime() { //set the timer
    timerInterval = setInterval(function() {
   if (secondsLeft>0){     
    secondsLeft--;
   }
   else{
       secondsLeft=0; //There may be occasions when secondsLeft is negative, especially if you run out of time and answered question wrong
   }                 //in that case, set the timer to 0.
    timerEl.innerHTML = secondsLeft;
    if(secondsLeft === 0) { //when timer is 0, stop the timer. Clear the screen and at final step, dynamically create the page where you input your initials.
      clearInterval(timerInterval);
      timerEl.innerHTML = secondsLeft;  
      emptyQuiz2(quizShowDiv);
      console.log("time is over");
      finalStep();
    }

  }, 1000);
}
//This function is called when startQuiz button is clicked. Timer starts, show the question page  
function quizShow(event){
  if(event.target.getAttribute("id")==="startQuiz"){  
    event.preventDefault();
    timerEl=document.getElementById("timer-span");
    timerEl.innerHTML=secondsLeft;
    setTime();
    welcomeEl=document.getElementById("welcome");
    welcomeEl.classList.add("hide");

    quizShowDiv=document.createElement("div");
    quizShowDiv.setAttribute("id","quizShow");
    showQuestion();
  } 
} 
function find(e){ //finds the index of player e in the player list
   
    for (var j=0;j<scores.length;j++){
        if (scores[j].name===(e.name)){
            return j;
        }
    }
    return -1;
}
//Get the initials and the score.This function is fired up when submit button is cicked, store the player in the local storage 
function storeScore(event){
    event.preventDefault();
    var exist=-1;
    var ini=document.getElementById("initials");

     entry={
        name: ini.value.toUpperCase(),
        score:secondsLeft,
    };
    scores=JSON.parse(localStorage.getItem("contenders"));
   
    if(scores==null){
        scores=[];
        exists=-1;
    }
    else{
        var exists=find(entry);
       
    }   
    
    if(exists>=0){
        scores.splice(exists,1); //if the entry is already in the local storage, remove it first to store the new score
        console.log(scores);
        localStorage.setItem("contenders",JSON.stringify(scores));
    }
    scores.push(entry); 
        

    
    localStorage.setItem("contenders",JSON.stringify(scores));

   window.open("scores.html","_top");//open the page that lists the players with max scores

        
}
//Dynamically create the page which gets the user's initials and shows their score. When submit button is clicked , storeScore function is fired up
function finalStep(){
    if(secondsLeft>0){
      clearInterval(timerInterval);
    }  
    var message=document.createElement("h1");
    message.textContent="All Done!!"
    message.setAttribute("style","margin-left:3.5em;");
    var message2=document.createElement("h2");
    message2.textContent="score: "+secondsLeft;
    message2.setAttribute("style","margin-left:5em;");
    var label=document.createElement("label");
    label.textContent="Enter Initials:"
    label.setAttribute("style","margin-left:4em;margin-top:2rem;");
    var textbox=document.createElement("input");
    textbox.setAttribute("type","text");
    textbox.setAttribute("id","initials");
    label.setAttribute("for","initials");
    textbox.setAttribute("style","margin-left:1em;margin-bottom:3em;margin-top:2em;");
    var submitButton=document.createElement("input");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("id","submitButton");
    submitButton.setAttribute("class","button");
    submitButton.setAttribute("style","display:inline-block;position:relative;left:3%;padding:0px;font-size:0.8rem;");



    quizShowDiv.append(message);
    quizShowDiv.append(message2);
    quizShowDiv.append(label);
    quizShowDiv.append(textbox);
    quizShowDiv.append(submitButton);

    submitButton.addEventListener("click",storeScore);
    
}
//Shows the questions on the page
function showQuestion(){
    if(index>=questions.length){finalStep();return;}
    var question=document.createElement("p");
    question.textContent=questions[index].title;
    quizShowDiv.append(question);
    quizShowDiv.setAttribute("style","display:block");
    contentEl=document.getElementById("content");
    contentEl.append(quizShowDiv); 
    showOptions(); //lists the options
}
function emptyQuiz(el){ //This is called after each question is shown and user choses an option, it empties the page and shows another question
     setTimeout(function(){
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
      
           showQuestion();
          
    },1000);  
}


//when you click the list or the button, the answer is read
function validate(event){
    event.preventDefault();
    var t=event.target;
    var answer;
    if(t.matches("li")){
        answer=t.parentElement.getAttribute("id");
    }   
    else if(t.matches("button")){
        answer=t.getAttribute("id");
    }
    else{
        return;
    }
    //then put a page divider to show the answer
    quizShowDiv.append(document.createElement("hr"));
    var result=document.createElement("p"); //dynamically create the answer
    result.classList.add("answer");
    if(questions[index].choices[answer]==questions[index].answer){ //checks if answer is right
        result.textContent="Right!!";
        console.log("right");
    }
    else{
        result.textContent="Wrong!!";
        console.log("wrong");
        if((secondsLeft-15)>=0){
            secondsLeft-=15; //subtract 15 seconds from the timer if the answer us wrong and we user has more than 15 seconds
        } 
        else{
            secondsLeft=0; //otherwise user runs out of time
            return;
        }   
        
    }
    quizShowDiv.append(result); //show the result
    
    if (index<questions.length){ //checks if all the questions are answered
       index++;
    } 
    else{
       // alert("it's over!!");
        return;
    }  
   
     emptyQuiz(quizShowDiv); //If all the question is answered, the question page is deleted
     
}
//shows the question's answer and event listener is set on the list
function showOptions(){
    var list=document.createElement("ol");
    for(var i=0;i<questions[index].choices.length;i++){

        var option=document.createElement("li");
        option.textContent=questions[index].choices[i];
        var optionButton=document.createElement("button");
        optionButton.setAttribute("style",("width:"+option.innerHTML.length));
        optionButton.append(option);
        optionButton.setAttribute("id",i);
        list.append(optionButton);
        

    }

    quizShowDiv.append(list);
    list.addEventListener("click",validate);
}



startQuizEl.addEventListener("click",quizShow); //event listener for the beginning of the quiz




    