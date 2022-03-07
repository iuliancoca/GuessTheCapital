const submitButton1 = document.getElementById("btnSubmit1");
const submitButton2 = document.getElementById("btnSubmit2");
const submitButton3 = document.getElementById("btnSubmit3");
const submitButton4 = document.getElementById("btnSubmit4");
const submitButton5 = document.getElementById("btnSubmit5");
const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");
const message4 = document.getElementById("message4");
const message5 = document.getElementById("message5");
const btnComplete = document.getElementById("btnComplete");
var progressBar = document.getElementById("progressBar");
const messageFinal = document.getElementById("messageFinal");


submitButton1.addEventListener("click", sendAnswer1);
submitButton2.addEventListener("click", sendAnswer2);
submitButton3.addEventListener("click", sendAnswer3);
submitButton4.addEventListener("click", sendAnswer4);
submitButton5.addEventListener("click", sendAnswer5);
btnComplete.addEventListener("click", sendAll)

var points = 0;
var width = 20;

function sendAnswer1() {
	const Question1 = document.getElementById("Question1");
	if (Question1.value.toLowerCase() === "bucuresti") {
	message1.style.textDecoration = "none";
	message1.style.color = "green";
	message1.innerText = "Your answer is CORRECT!";
	points++;
	submitButton1.disabled = true;
	progress();
}
	else if (!Question1.value)
	{
		message1.style.color = "magenta";
		message1.style.textDecoration = "underline";
		message1.innerText = "YOU DIDN'T WRITE ANYTHING!!!";

	}
	else if (Question1.value.toLowerCase() !== "bucuresti")
	{
			message1.style.textDecoration = "none";
			message1.style.color = "red";
			message1.innerText = "Your answer is WRONG!";
			submitButton1.disabled = true;
			progress();
	}
}

function sendAnswer2() {
	const Question2 = document.getElementById("Question2");
	if (Question2.value.toLowerCase() === "sofia") {
	message2.style.textDecoration = "none";
	message2.style.color = "green";
	message2.innerText = "Your answer is CORRECT!";
	points++;
	submitButton2.disabled = true;
	progress();
}
	else if (!Question2.value)
	{
		message2.style.color = "magenta";
		message2.style.textDecoration = "underline";
		message2.innerText = "YOU DIDN'T WRITE ANYTHING!!!";

	}
	else if (Question2.value.toLowerCase() !== "sofia")
	{
			message2.style.textDecoration = "none";
			message2.style.color = "red";
			message2.innerText = "Your answer is WRONG!";
			submitButton2.disabled = true;
			progress();
	}
}

function sendAnswer3() {
	const Question3 = document.getElementById("Question3");
	if (Question3.value.toLowerCase() === "zagreb") {
	message3.style.textDecoration = "none";
	message3.style.color = "green";
	message3.innerText = "Your answer is CORRECT!";
	points++;
	submitButton3.disabled = true;
	progress();
}
	else if (!Question3.value)
	{
		message3.style.color = "magenta";
		message3.style.textDecoration = "underline";
		message3.innerText = "YOU DIDN'T WRITE ANYTHING!!!";

	}
	else if (Question3.value.toLowerCase() !== "zagreb")
	{
			message3.style.textDecoration = "none";
			message3.style.color = "red";
			message3.innerText = "Your answer is WRONG!";
			submitButton3.disabled = true;
			progress();
	}
}

function sendAnswer4() {
	const Question4 = document.getElementById("Question4");
	if (Question4.value.toLowerCase() === "paris") {
	message4.style.textDecoration = "none";
	message4.style.color = "green";
	message4.innerText = "Your answer is CORRECT!";
	points++;
	submitButton4.disabled = true;
	progress();
}
	else if (!Question4.value)
	{
		message4.style.color = "magenta";
		message4.style.textDecoration = "underline";
		message4.innerText = "YOU DIDN'T WRITE ANYTHING!!!";

	}
	else if (Question4.value.toLowerCase() !== "paris")
	{
			message4.style.textDecoration = "none";
			message4.style.color = "red";
			message4.innerText = "Your answer is WRONG!";
			submitButton4.disabled = true;
			progress();
			console.log(progressBar.style.width);
	}
}

function sendAnswer5() {
	const Question5 = document.getElementById("Question5");
	if (Question5.value.toLowerCase() === "berlin") {
	message5.style.textDecoration = "none";
	message5.style.color = "green";
	message5.innerText = "Your answer is CORRECT!";
	points++;
	submitButton5.disabled = true;
	progress();
}
	else if (!Question5.value)
	{
		message5.style.color = "magenta";
		message5.style.textDecoration = "underline";
		message5.innerText = "YOU DIDN'T WRITE ANYTHING!!!";

	}
	else if (Question5.value.toLowerCase() !== "berlin")
	{
			message5.style.textDecoration = "none";
			message5.style.color = "red";
			message5.innerText = "Your answer is WRONG!";
			submitButton5.disabled = true;
			progress();	
	}
}
		


	function sendAll() {
			if (submitButton1.disabled && submitButton2.disabled && submitButton3.disabled & submitButton4.disabled && submitButton5.disabled)
{
		switch(points) {
			case 0: alert("Your SCORE is 0 of 100!");
			break;
			case 1: alert("Your SCORE is 20 of 100!");
			break;
			case 2: alert("Your SCORE is 40 of 100!");
			break;
			case 3: alert("Your SCORE is 60 of 100!");
			break;
			case 4: alert("Your SCORE is 80 of 100!");
			break;
			case 5: alert("Your SCORE is 100 of 100!");
			break;
		}
}
	else {
		alert("YOU DIDN'T COMPLETE THE TEST!!!")
	}
	}

function progress() {
	var i = 0;
	i++;
        progressBar.style.width = width + "%";
        progressBar.innerHTML = width  + "%";
        if (i == 1)
      {
      	width += 20;
      }
      if (submitButton1.disabled && submitButton2.disabled && submitButton3.disabled & submitButton4.disabled && submitButton5.disabled)
	{
		messageFinal.innerHTML = 'OK! Press HERE to see your result! <span class="spinner-border text-info"></span>';
	}
    }
      
    
  
