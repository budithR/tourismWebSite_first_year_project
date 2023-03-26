function  getRadioValue(){
	var totalqest=10;
	var score =0;


	// get user input
	var option1 = document.forms["quizForm"]["option1"].value;
	var option2 = document.forms["quizForm"]["option2"].value;
	var option3 = document.forms["quizForm"]["option3"].value;
	var option4 = document.forms["quizForm"]["option4"].value;
	var option5 = document.forms["quizForm"]["option5"].value;
	var option6 = document.forms["quizForm"]["option6"].value;
	var option7 = document.forms["quizForm"]["option7"].value;
	var option8 = document.forms["quizForm"]["option8"].value;
	var option9 = document.forms["quizForm"]["option9"].value;
	var option10 = document.forms["quizForm"]["option10"].value;
	console.log(option1)
	
	 // set correct answer
	 var answers =["Pidurutalagala" , "Kandy And Matale" , "Yala National Park" ,"Bambarakanda Falls" , "Uva Province" , "Wilpattu national park" , "Whale watching" , "Sri Jayawardenepura Kotte" , "Sigiriya" , "22"]

	// check
	var correct = 0;
	for(i=1;i<=totalqest;i++){
		if (eval("option"+i) ===answers[i-1]){
			score=score+2;
			correct++;
		}
		else{
			score--;
		}
	}

	let submitbutn = document.querySelector("#submitbutn");
	document.getElementById("start").onclick = function()
{
	continuebutn.style.display = "none";
	result.style.display = "block";
}
	
	 alert("You Are Completed The Quiz" + "\n" + "you got  " + score+ "\n" +"correct answers : "+correct);
	
   
   // change background color according to score  	
   if(score==0 || score<0){
	 document.getElementById('quiz').style.backgroundColor = "#F56656";
    } 
    else if(score<=10 && score>0){
	   
     document.getElementById('quiz').style.backgroundColor = "#F5CC56";
    }
    else if(score>10 && score<20){
     document.getElementById('quiz').style.backgroundColor = "#E7F556";
    }
	else if(score==20){
     document.getElementById('quiz').style.backgroundColor = "#74F556";     
   }
   
   
 
 
 
 
 
 
 
 
}

//Setting the timer display
document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#timeSeccond')
    const continuequiz = document.querySelector('#continuequiz')
    var timeSeccond = 60

    function countdown()
	{
      setInterval(function(){
        if (timeSeccond<=0){
          clearInterval(timeSeccond=0)
		  submitbutn.click();
		  
        }
        timeLeftDisplay.innerHTML=timeSeccond
        timeSeccond-=1
      },1000)
    }
    continuequiz.addEventListener('click',countdown)
	if((timeSeccond<=0)){
		alert('Time is over');
	}
	 function stopTimer(CLOCK) 
    {
      clearInterval(CLOCK);
      // GO RIGHT;
    }
 document.getElementById('continuequiz').addEventListener("click", runTimer);
 document.getElementById('submitbutn').addEventListener("click", testDone);
function testDone()
 {
   clearInterval(CLOCK);
   // GO LEFT;
 }
   })

//start Quiz
let start = document.querySelector("#start");

//guide box
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continuequiz = document.querySelector("#continuequiz");

//quiz box
let quiz = document.querySelector("#quiz");
let timeSeccond = document.querySelector("#timeSeccond");
 

//questions
let questionNO = document.querySelector("#questionNO");
let questionText = document.querySelector("#questionText");

//submit button
// let submitbutn = document.querySelector("#submitbutn");

//resut box
let result = document.querySelector("#result");
let scoures = document.querySelector("#scoures");
let quit = document.querySelector("#quit");
let again = document.querySelector("#again");

            
// when start button click
document.getElementById("start").onclick = function()
{
	start.style.display = "none";
	guide.style.display = "block";
}
// when exit button click
document.getElementById("exit").onclick = function()
{
	guide.style.display = "none";
	start.style.display = "block";
}
// when  continue button click
document.getElementById("continuequiz").onclick = function()
{
	guide.style.display = "none";
	quiz.style.display = "block";
}
