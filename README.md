# PasswordGenerator

## About: ##

This is an application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by the JavaScript code.

The user will be prompted to choose from the following password criteria:

* Length (must be between 8 and 128 characters)

* Character type:

  * Special characters
  * Numeric characters
  * Lowercase characters
  * Uppercase characters

The application validates user input and ensures that at least one character type is selected.
The user will also have the option to click a button to copy the password to their clipboard.
The application is responsive and it adapts to multiple screen sizes.

## Installation: ##

    You can check the running project:
    
    https://aysenunlu.github.io/PasswordGenerator/

## Usage: ##

   - When the user runs the application, he's prompted to choose from the following password criteria:

     ![Criteria page](Assets/images/userInputCriteria.png)
     
     ---------------------------------------------------------------------------------------------------

   - If the user enters not a number to the password length area, or his password length specification is not between 8-128 characters or he does not specify at least one Character type criteria, an error message is shown:

     ![Non-Number Input For Password Length](Assets/images/PwdLengthTest1_before.png)

     ![Message for Non-Number Input](Assets/images/PwdLengthTest1_after.png)

     --------------------------------------------------------------

     ![Short Password Length](Assets/images/PwdLengthTest2_before.png)

     ![Message for Short Password Length](Assets/images/PwdLengthTest2_after.png)
     
      -------------------------------------------------------------

     ![Long Password Length](Assets/images/PwdLengthTest3_before.png)

     ![Message for Long Password Length](Assets/images/PwdLengthTest3_after.png)
     
     --------------------------------------------------------------

     ![Non specified Character Type](Assets/images/CriteriaTest_before.png)

     ![Message for Non specified Character Type](Assets/images/CriteriaTest_after.png)
     
     -----------------------------------------------------------------------------------------------------
    
  - If the users enters valid criteria for the password, he's provided with a random password that meets his criteria so he can copy to the clipboard. When copy to the clipboard button is pressed, the user is asked if he wants to generate another password. When user enters the criteria for the password, the copy to clipboard button will be disabled because the password has not been generated yet. And when password is shown , generate button will be disabled because we can not generate a password without user inputting criteria.

      ![8 Character-All Lowercase Password](Assets/images/Lowercase8_before.png)

      ![Corresponding Password](Assets/images/Lowercase8_after.png)

      ![Copying to Clipboard](Assets/images/Lowercase8_after2.png)

      ----------------------------------------------------------------------------------

      ![8 Character Password with Numbers, Lowercase and Uppercase Letters](Assets/images/NumLowUp8_before.png)

      ![Corresponding Password](Assets/images/NumLowUp8_after.png)

      ----------------------------------------------------------------------------------

      ![10 Character Password with Numbers; Lowercase,Uppercase Letters and Symbols](Assets/images/AllCriteria10_before.png)

      ![Corresponding Password](Assets/images/AllCriteria10_after.png)

      -----------------------------------------------------------------------------------

      ![128 Character Password with Numbers, Lowercase Letters and Symbols](Assets/images/AllButUp128_before.png)

      ![Corresponding Password](Assets/images/AllButUp128_after.png)

## How: ##

This application runs in the browser. HTML and CSS are dynamically updated using JavaScript. 

When the page loads for the first time,the HTML code snippet that's related to showing generated password is hidden and the one related for the user to enter criteria is shown. The body of the web page is kept hidden until the full page and CSS files are loaded. Once everything is loaded, onload function turns the body visible. Web browser remains empty until everything pops up on the screen.

After user enters criteria for the password and clicks on the generate button, "displayPassword()" function is fired up. First it's made sure that user entered valid criteria. Then an array is formed which contains the arrays of character type criteria. Since the characters will be chosen randomly from this array, to make sure all the user criteria represented in the password; first 4 characters are chosen randomly from character type arrays and rest chosen from random characters from random criteria. The problem with this approach is that there's a pattern. We'll know the order of criteria. To break this i randomly distribute first 4 characters, so the password to be generated will be completely random with no predetermined patterns. Since String types are immutable;to redistribute, I had to form an array from the string, changed the order of the characters and converted that to string again after eliminating the commas.

At last user input part is hidden and password showing part is shown. Here user can copy the password to the clipboard by clicking on the "Copy to Clipboard" button. Then "copyClipboard" function is fired up. In that function, the selection range is specified, textarea is selected and copied to the clipboard and user is prompted whether he wants to generate another password. If he does, the user input page is shown again; if not, the password page is kept with the password being highlighted. 

## Credits: ## 

I'm forever greatful for our instructor Omar Patel and TA's Tyler Bray and Matthew Calimbas for their feedback and recommendations on how I can improve my application and next steps that can be taken.

I conducted a lot of google searches during the implementation of this application. The web sites that I found useful are listed below:

  * https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
  * https://stackoverflow.com/questions/3221561/eliminate-flash-of-unstyled-content
  * https://www.w3schools.com/jsref/jsref_replace.asp


## Licence: ##

Anybody is welcomed to copy code snippets and test it out.

## Limitations: ##

When the page is loaded there is a flash of empty content in a split second.