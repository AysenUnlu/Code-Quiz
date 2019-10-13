## Acrivity 1: This, The Window and The DOM ##

* I opened the "index.html" in the browser and navigate to console. I saw that "this" in the console.log refered to the window object which is the most global object.
The "window" is the object representation of the open window in a browser.The window object had many properties (such as alert,confirm,close,document,location..)and 
methods(onclick,onload,onresize,onclose...). Next, I clicked on the "document" property."document" object had properties such as(body,childNodes [html,html],documentElement:html,firstElementChild:html,
lastElementChild:html,location,nextSibling:null,previousSibling:null,parentElement:null).

When I tried:  ```javascript
 	       console.log(document.body.children[0].style.fontSize="100px"); //changed the h2 header font size to 100px
               console.log(document.body.children[0].nextElementSibling.style.color="red");//changed the div elements color to red

	       ```
---
## Activity 3: Traverse That DOM ##

*In this activity I used the Chrome Dev Console and .style.property to change the styling of elements on the page. I created a "script.js"
* Using the provided `index.html`,  I completed the following
  ```javascript
 	 // Target the div with the ID of `articles`.
	    var divArticles=document.getElementById("articles");

        // Change its font size to `50px`.
           divArticles.style.fontSize="50px";

       // Change its first child's last child to have a font color of `blue`.
          divArticles.children[0].lastElementChild.style.color="blue";

      // Change its previous sibling to have a background color of `black`.
         divArticles.previousElementSibling.style.background="black";
    /***************************************************************************/
     // Target the div with the ID of `main`.
    var divMain=document.getElementById("main");

    // Change its second child node so the text is `underlined`.
       divMain.children[1].style.textDecoration="underline";

   // Change its last child element to have a font size of `50px`.
      divMain.lastElementChild.style.fontSize="50px";

  // Change its first child element to have a font color of `orange`.
     divMain.children[0].style.color="orange";
    
    // Change its last child elements parent to have a font size of `40px`.

     divMain.lastElementChild.parentElement.style.fontSize="40px";

 /*## Bonus
 * Change 3 other elements styles that we did not ask for above.*/

     divMain.style.borderBottomColor="orange";
     divArticles.children[0].style.border="none";
     divArticles.lastElementChild.style.lineHeight="1em";
 		   
    ```
---
̣## Activity 5: Setting Attributes ##
* In this activity, we changed the "href" attributes of "a" tags; "src" attributes of "img" tags and we added styles by "setAttribute" method by adding margins and paddings.
We traversed the DOM. As a Bonus, we randomly set "href" attribute for site 1 from an array of sites we create.

```javascript
 //Give a `src` and `alt` attribute to the 3 provided `img` tags.
 //Grab img, anchor objects from DOM

   var imgEl=document.querySelectorAll("img");
   var anchorEl=document.querySelectorAll("a");
   var h4El=document.querySelectorAll("h4"); //get h4 tags
   var sitesEl=document.querySelector(".sites");

 //for each image object set 'src' and alt attributes
   for(var i=0;i<imgEl.length;i++){
      imgEl[i].setAttribute("src","img"+(i+1)+".jpg");
      imgEl[i].setAttribute("alt","image "+(i+1));
  }

 // Give a `href` attribute to the 3 provided `a` tags.`
 //for each anchor set "href" attribute
 /*## Bonus
 * Randomly set the `href` for site 1 from an array of sites you create. Save name of site1 for setting corresponding h4 tag below*/
  var sites=["http://www.amazon.com","http://www.instagram.com","http://www.facebook.com"];
  var site_names=["amazon","instagram","facebook"];
  var site1_name;
  for(var i=0;i<anchorEl.length;i++){
      if (i==0){
          var randomSite=Math.floor(Math.random()*3);
          site1_name=site_names[randomSite];
          anchorEl[i].setAttribute("href",sites[randomSite]);
      }
      else{
         anchorEl[i].setAttribute("href","http://www.google.com");
      }   
     
   }

 


 //Add styles via `setAttribute` to make the page look decent. Recommended: margins and padding.
 //change the h4 tag and make it read and underline  it. For first site, the site is chosen randomly so
 //use the predetermined name, for others use google. Set margin and padding for sites div

     for (var i=0;i<h4El.length;i++){
         if (i==0){
             h4El[i].textContent=site1_name;

         } 
         else{
             h4El[i].textContent="google";
         }
    
         h4El[i].setAttribute("style","color:red;text-decoration:underline;");
     }
 
    sitesEl.setAttribute("style","margin:-20px auto auto 25px;padding:5px");
```
---

##Activity 7: Look Ma No HTML:  

*In this activity, we used DOM methods to create an entire HTML page.
```javascript

/* A centered image, with a center caption under it.*/

  //<div>
  //  <img></img>
  //  <h4></h4>
  //<div>

  //create div tag and set "text-align" "center"
  //Some extra styling to all elements.

  var divTag=document.createElement("div");
  divTag.setAttribute("style","text-align:center;")
  divTag.setAttribute("id","PlaceboPage");
  //create image tag and set its "src" and "alt" attributes
  var imgTag=document.createElement("img");
  imgTag.setAttribute("src","Placebo.jpg");
  imgTag.setAttribute("alt","Placebo Band Picture");
  //create h4 header tag and set its content
  var h4Tag=document.createElement("h4");
  h4Tag.textContent="Favorite Band";
  h4Tag.setAttribute("style","color:red;font-size:20px;margin-top:-1px;");
  //append imgTag to divTag
  divTag.appendChild(imgTag);
  //append h4Tag to divTag
  divTag.append(h4Tag);
  //append divTag to body of the html document.
  document.body.appendChild(divTag);

  /* A list of your favorite foods (or some other list of favorites).
  //List of favorite songs.
  //<div>
      <h4> </h4>
      <ul>
          <li></li>
          <li></li>
      </ul>
  
   </div>*/
//create h4 tag and set its content
  h4Tag=document.createElement("h4");
  h4Tag.textContent="Favorite Songs:";
  h4Tag.setAttribute("style","text-align:left;font-size:20px;color:blue;margin-bottom:2px;margin-left:10px");
//create <ul> and <li> and set the content of <li> and append it to <ul>  
  var ulTag=document.createElement("ul");
  var liTag=document.createElement("li");
  liTag.textContent="Hemoglobin";
  ulTag.appendChild(liTag);
  ulTag.setAttribute("style","text-align:left;list-style:square;margin:10px;line-height:1.5em;");
//create another <li>, set its content and append it to <ul>  
  liTag=document.createElement("li");
  liTag.textContent="I know";
  ulTag.appendChild(liTag);
 //append <h4> to div with #PlaceboPage 
   divTag.appendChild(h4Tag);
 //append <ul> to <div>
   divTag.appendChild(ulTag);  
 ```
--- 
## Activity 9: Timers and Intervals:

*In this activity, we created a speed reading application. It inputs single word on a screen at a time, changing to the next word after one second.This equates the reading 60 words per minute.

*First we added the html elements where the title(h1),counter(h2) and the word(h3) will be shown. Next, we get the relevant objects (for title,counter and poem word) from DOM.

```javascript

var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var pArr=poem.split(" "); //convert string to array
var index=0; //index is for getting the word from array
//Get the relevant objects from DOM
var container=document.querySelector(".container");
var welcomeEl=document.getElementById("welcome");
var counterEl=document.getElementById("counter");
var wordEl=document.getElementById("main");

//The app counts down from 5, and when the countdown is finished it prints one word to the screen every second. 
//Each word replaces the other.
 var counter=5; //It counts down from 5.
 var speed=prompt("How many  words per millisecond would you like to read?");
 function prepareRead() {
  	// Create the countdown timer.
  
       var timervar=setInterval(function(){
    
       counterEl.innerHTML=counter+" seconds remaining!!"; //display
     
       if (counter==0){ //counter is finished
      	clearInterval(timervar);//cancel the timer
      	counterEl.innerHTML="";
      	speedRead(); //prints one word from the poem 
       }
       else{
       counter--; //decrease counter
       }  

     },1000);
   
   }	

  function speedRead() {
   	// Print words to the screen one at a time.
  	//get from user the reading speed
  
 
    //set the timer according to reading speed(wps)
    var timervar2=setInterval(function(){
     //display one word on the page if there's a word to display
    if (index<pArr.length){ 
        wordEl.textContent=pArr[index];
       index++;
    }
    else{
      clearInterval(timervar2); //if not cancel the timer
    }   


 },(1/parseFloat(speed)));//since we entered how many words we want to read per ms. we have to find how many ms it takes to read 1 word
    
  
 
}
prepareRead();
 
```
---
## Activity 11: On Click: ##

*In this activity, we created buttons that increments and decrements when clicked.


```javascript

//Grab the relevant objects from DOM

var count= document.getElementById("count");
var incButton=document.getElementById("increment");
var decButton=document.getElementById("decrement");

//num is the counter
var num=0;

//add event listener to increment and decrement buttons
incButton.addEventListener("click",increment);
decButton.addEventListener("click",decrement);

//implement the listener functions

function increment(){
    num++;  //increment the counter
    count.innerHTML=num; // show it on the page
   
}

function decrement(){
    if (num!==0){ //if it's 0, decrement no more
        num--; //decrement the counter
        count.innerHTML=num; //show it on the page
        

    }
}

```
---

## Activity 13: Preventing Default Events ##

*In this activity, we are going to create a form that calculates a suggested tip amount based off of the total of the bill.
```javascript
//Grap relevant objects from DOM
 var totalEl=document.getElementById("total");
 var percentageEl=document.getElementById("percentage");
var button=document.getElementById("submit");
var npartyEl=document.getElementById("nparty");

var tipAmount=document.getElementById("tip-amount");
var newTotal=document.getElementById("new-total");
var partyTotal=document.getElementById("party-total");

//Add event Listener to the button.
button.addEventListener("click",function(event){
        event.preventDefault(); //prevents the form to be submitted to server
        var mealTotal=parseFloat(totalEl.value).toFixed(2); //get meal total 
        var tip=parseInt(percentageEl.value);               //get percentage
        var recommendedTip=((parseFloat(mealTotal)*tip)/100).toFixed(2);  //calculate recommended tip
        var total=(parseFloat(mealTotal)+parseFloat(recommendedTip)).toFixed(2); //calculate new total
        var eachPartyTotal=(total/parseInt(npartyEl.value)).toFixed(2); //calculate the total for each party, including tip
       
      
        tipAmount.innerHTML=recommendedTip;  //show the tip on the page
        newTotal.innerHTML=total;           //show new total on the page
        partyTotal.innerHTML=eachPartyTotal; //show total for each party on page
        
        
});

```
---
## Activity 15: Other Events:
*In this activity, we created a webpage that allows us to view some meta data about different kinds of events.

```javascript

//Get from DOM the relavant Objets

var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

var key=document.querySelector("#key"); //key of the pressed letter
var code=document.querySelector("#code"); //code of the key


//The select element triggers the `toggleDisplay` function
eventType.addEventListener("change",toggleDisplay);//listen for select to change
document.addEventListener("keydown",keyOpDown);//listen the document to see if a key is pressed, if so call keyOpDown
document.addEventListener("keyup",keyOpUp);//listen the document to see if a key is released, if so call keyOpUp
document.addEventListener("click",clickOp);

function toggleDisplay(event) {
  var value = event.target.value; //returns value of  element in  which event actually occured
  if(value === "keydown") {       //if the value is keydown
    mouseEventsEl.classList.add("hide");  //hide the mouse event section
    keyEventsEl.classList.remove("hide");  //show key event section
    
  }
  else {
    mouseEventsEl.classList.remove("hide"); //show mouse event section
    keyEventsEl.classList.add("hide");     //house key event section
  }
}
function keyOpDown(event){ //when it's keydown event,function is fired

  key.textContent=event.key;    //show the key on the page
  code.textContent=event.code;  //show the key code on the page
  (document.querySelector("#status")).textContent="KEYDOWN Event"; //show what kind of event happened on the page

}
function keyOpUp(event){ //it's called when it's key up event
  
(document.querySelector("#status")).textContent="KEYUP Event"; //show what kind of event happened on the page
}

function clickOp(event){
  var tcontent=event.target.textContent; //returns the content of the target element when event is occured
  document.getElementById("target").textContent=tcontent; //show the content
  document.getElementById("x").textContent=event.clientX; //returns the horizontal coordinate of the mouse pointer, relarive to the 
                                                          //current window when the mouse event was triggered
  document.getElementById("y").textContent=event.clientY; //returns the vertical coordinate of the mouse pointer, relarive to the 
                                                         //current window when the mouse event was triggered
}
```
---

## Activity 17: Event Bubbling ##

*In this activity, we are going to created  an image carousel that allows us to cycle through images.

```javascript

//image Array
var images=["./img1.jpg","./img2.jpg","./img3.jpg","./img4.jpg"];
//get the relevant objects from DOM
var cboxEl=document.querySelector(".carouselbox");
var prevEl=document.querySelector(".prev");
var nextEl=document.querySelector(".next");
var index=0;
function navigate(direction){
  
    index=index+direction; //add 1 if it's next, subtract 1 when it's previous

    if(index<0){  //previous image of first image is the last image
        index=images.length-1;
        
    }
    else if (index>images.length-1){ //next of last image is first image
        index=0;
        
    }
    
    cboxEl.setAttribute("style","backGround:url("+images[index]+")"); //set the background of the carousel to corresponding image

}
//add click event listener to prev button
prevEl.addEventListener("click",function(event){
    event.stopPropagation(); //stop bubbling
    navigate(-1); 
})
//add click event listener to next button
nextEl.addEventListener("click",function(event){
    event.stopPropagation();
    navigate(1); 
})
cboxEl.addEventListener("click",function(){
    window.location.href=images[index];//when the user clicks on the image, they will be navigated to url that hosts that image
})
navigate(0);//to show the first image

```
-- 
## Activity 19: Event Delegation

*In this activity, we created a friends list that allows us to edit information about that friend in a modal.

```Javascript

//get relevant objects from DOM

var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");


//we have one object in the array and currentId initially refers to it

var people = [{ name: "Bob" }];
var currentId = 0;

//adds the user entered person both to the list and the array

function addPersonToList(event) {
  event.preventDefault(); //prevent the form to be sent to server
  var name = nameEl.value; //get the name of the friend from text field
  var li = document.createElement("li"); //create a list element
  li.id = people.length;  //id of the list element is set. This is used to access the array in the program
  li.innerHTML = name + " <span>edit</span>"; //list element's content is the name of the friend and edit link
  people.push({ name: name });//Push the person object to the array
  peopleListEl.append(li); //append the created list element to the list 
}

//closes the model when 'x' is clicked or user clicked away from the model

function close() {
  modalEl.style.display = "none";  //modal will be hidden when 'x' sign is clicked
}

//fires up when click event occurs

function handleClick(event) {
  // Use event delegation to handle when the user clicks "edit"
    
    if(event.target.matches("span")){  //checks if the event occured on 'edit' 
      event.preventDefault();
      modalEl.style.display="block";   //show model
      currentId=parseInt(event.target.parentElement.id); //the parent element's id becomes the current id.
      var description=people[currentId].description; // the text area is populated from the description attribute of relevant object in array
      var name=people[currentId].name; //get the name of the object from array and populate the model header area with it
      modalNameEl.textContent=name;
      if (description){           // populate the text area with person's description
        descriptionEl.value=description; 
      }
      else{
        descriptionEl.value="";  //otherwise description is left blank
      }
    }  
}

//the description of the current person is updated in the people array

function saveDescription(event){
  event.preventDefault();
  people[currentId].description=descriptionEl.value; //save the person's description in the person's object in the array
  close();    //close the model
  
}

closeEl.addEventListener("click", close);//when click event occurs on 'x', model is closed
addBtn.addEventListener("click", addPersonToList);//when add person button is clicked, addPersonToList function fires
peopleListEl.addEventListener("click",handleClick);//when 'edit' is clicked, handleClick is fired up
saveBtn.addEventListener("click",saveDescription); //when save button is clicked, saveDescription is fired up
document.addEventListener("click",closeModal);

function closeModal(event){ //when it's clicked away from the model , this function fires up
  //if (event.target===modalEl){
   if (event.target.matches(".modal")){  //if you click away from the model, it closes.
    close();
  }
}

'''
## Activity 21 :Local Storage User ##
* We have been provided with a signup form that successfully submits an email and password. Our  job is to write code that saves the email and password to localStorage and renders the 
last submission to the page.
```javascript
//Get Relevant Objects from DOM

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
//var userEmailSpan = document.querySelector("#user-email");
//var userPasswordSpan = document.querySelector("#user-password");
var usercreds=document.querySelector("#user-creds");
var usercreds2=document.querySelector("#user-creds2");

 renderLastRegistered();

//displays message and add to class its type
function displayMessage(type, message) {

  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

//Retrieves the last email and password.
function renderLastRegistered() {
   var email=localStorage.getItem("email");
   var password=localStorage.getItem("password");
   // If they are null, return early from this function
  // Else set the text of the userEmailSpan and userPasswordSpan 
  // to the corresponding values form local storage
   if (email==null || password==null){
     return;
   }
   else{
     usercreds.innerHTML=email;
     usercreds2.innerHTML=password;
   }
  
  
}
//when sign up button is clicked email and password is read input by user
 signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  //If email or password is empty, display error message
  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    //store email and password at local storage
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    //display a success message
    displayMessage("success", "Registered successfully");
    }
  // Save email and password to localStorage and render the last registered.
   renderLastRegistered();
  
 });
---

## Activity 23: Local Storage Objects ##

*In this activity we fixed the problem in activity "23-Ins_Local-Storage-Uh-oh" stored the object to local storage and retrieve from it successfully

```javascript

//Retrieve relevant objects from DOM
var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userFirstNameSpan = document.querySelector("#user-first-name");
var userLastNameSpan = document.querySelector("#user-last-name");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

//displays message and  ad its type to its class
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}
//when sign up button is clicked , user is registered and stored in local storage
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };
  
  // validate the fields
  if (user.firstName === "") {
    displayMessage("error", "First name cannot be blank");
  } else if (user.lastName === "") {
    displayMessage("error", "Last name cannot be blank");
  } else if (user.email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (user.password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // set new submission
    //localStorage.setItem("user", user);
    localStorage.setItem("user",JSON.stringify(user)); //convert the user object to string
    
    // get most recent submission
    //var lastUser = localStorage.getItem("user");
    var lastUser=JSON.parse(localStorage.getItem("user")); //after getting from the storage the user object, parse it.
    //Show the user object fields on the page at relevant areas
    userFirstNameSpan.textContent = lastUser.firstName;  
    userLastNameSpan.textContent = lastUser.lastName;
    userEmailSpan.textContent = lastUser.email;
    userPasswordSpan.textContent = lastUser.password;
  }
});
```
---
