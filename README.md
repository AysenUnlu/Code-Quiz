# CODE QUIZ

## About: ##

This is a timer based quiz application with multiple-choice questions that stores high scores client-side. The application is responsive ensuring that it adapts to multiple screen sizes. This application is implemented using HTML, CSS and JAVASCRIPT.

## Installation: ##

    You can check the running project:
    
    https://aysenunlu.github.io/Code-Quiz/

## Usage: ##

   - When the user runs the application, he lands on a page and is presented with a call-to-action to "Start Quiz." Also he has the navigation option to "View Highscores". The "Time" value is set to 0, since he has not started the quiz yet

     ![Start Quiz](images/welcomePage.png)
     
     ---------------------------------------------------------------------------------------------------

   - Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown. User clicks the answer and at the buttom of the page, he's prompted if his answer was correct or not. Since the validation message is shown for only couple of seconds, the screenshot has not been included.

     ![Questions](images/question.png)

     --------------------------------------------------------------

   - The player's score is calculated by the time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (15 seconds are subtracted from time remaining). When the time runs out and/or all questions are answered, the user is presented with their final scores and asked to enter their initials. Their final scores and initials are stored in local storage. If the user took the quiz before, his previous score will be overwritten with his last score. 

     ![Score Page](images/scorePage1.png)

     -----------------------------------------------------------------------------------------------------

   - When the user hits the submit button, he sees the list of users with highest scores. If his score is bigger or equal to his opponents, then he'll be able to see his score in the list. The user has the option to go back to "Start Quiz" page where he can take the quiz again. He also has the option to delete the highest score. When the highest score is deleted,the user with the score is deleted from the storage. If there are more people who took the quiz, the second highest score is displayed;if not empty list will be shown

     ![Highest Score Page](images/HighScores1.png)

- Let's assume another player with initials "FU" took the test, the screenshots are shown below:
    
     ![Score Page2](images/scorePage2.png)

     ![Highest Score Page2](images/HighScores2.png)

- Let's also assume, you took the quiz again and scored lower as seen on the screenshots below. You wanted to delete the highest score, you pressed the delete button and second highest will be your score. It's not 138 because you took the test again and scored lower.

     ![Score Page3](images/scorePage3.png)

     ![Highest Score Page3](images/HighScores3.png)

     ![Highest Score Page4](images/HighScores4.png)
    
    - If you hit the delete button again, since there are no other players, you'll be presented with an empty list

     ![Highest Score Page5](images/HighScores5.png)

---------------------------------------------------------------------------------------------------------------------------

## How: ##

* When the button to start the quiz is clicked, the event listener causes the function "quizShow" to run. The purpose of this function is to hide the welcome page ,start the timer and show the questions. When the timer is set, it starts to count down immidiately which is shown on the right top corner of the page. If the timer runs out, we stop the timer. Clear the screen and at final step, dynamically create the page where you input your initials. There may be occasions when time left is negative, especially if you run out of time and answered question wrong;in that case, the timer i set to 0.

* If the user finishes the quiz before the time runs out, final step is executed and he'll be asked to enter his initials on the dynamically created page. Otherwise to show the question, paragraph element is created and the question is grabbed from the question array and Options are shown too. For each option a list elements are created inside buttons and populated with the corresponding options for the question. And id attribute is created for the button and set to the index of the question, so when it's clicked we'll know which question object to go to. When the answer is clicked, it'll fire up "validate" function. Here we'll figure out which button is clicked by its id and get the corresponding answer from the question object array and compare it to the user's answer. If they're equal, then a response will be created and added dynamically to the end of options. If the user's answer is wrong, then 15 seconds will be subtracted from the time left. Then the page will be cleared, but not until we wait 1 second for user to see the answer. Another question will be shown.

* When the time runs out or the player finishes all the questions, he;s presented with a dynamically created page and asked to enter his initials. When he hits submit button, an entry object is formed with fields name and score. First, then we get the players which are addressed as contenders from the local storage. We search if the user exits. If that's the case his entry is replaced, other wise pushed to the array of objects and stored in the local storage.

* "scores.html" is shown on top of the page which lists high scores with go back and delete buttons. We get all the contenders from the storage. We find the players with maximum score or scores and show it on the text area. When clear button is clicked, the highest score or scores are deleted from the local storage and text area is populated with the next highest score or scores.

## Licence: ##

Anybody is welcomed to copy code snippets and test it out.

## Limitations: ##

 None