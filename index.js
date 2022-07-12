 submitButton1 = document.getElementById("btnSubmit1");
 submitButton2 = document.getElementById("btnSubmit2");
 submitButton3 = document.getElementById("btnSubmit3");
 submitButton4 = document.getElementById("btnSubmit4");
 submitButton5 = document.getElementById("btnSubmit5");
 message1 = document.getElementById("message1");
 message2 = document.getElementById("message2");
 message3 = document.getElementById("message3");
 message4 = document.getElementById("message4");
 message5 = document.getElementById("message5");
 btnComplete = document.getElementById("btnComplete");
 messageFinal = document.getElementById("messageFinal");

 var progressBar = document.getElementById("progressBar");

Question1 = document.getElementById("Question1");
Question2 = document.getElementById("Question2");
Question3 = document.getElementById("Question3");
Question4 = document.getElementById("Question4");
Question5 = document.getElementById("Question5");

submitButton1.addEventListener("click", sendAnswer1);
submitButton2.addEventListener("click", sendAnswer2);
submitButton3.addEventListener("click", sendAnswer3);
submitButton4.addEventListener("click", sendAnswer4);
submitButton5.addEventListener("click", sendAnswer5);
btnComplete.addEventListener("click", sendAll)

var points = 0;
var width = 20;

	function sendAnswer1() {

		if (Question1.value.toLowerCase() === "bucuresti") {
			printGreenMessage(message1, submitButton1, Question1);
		}
		else if (!Question1.value)
		{
			printVoidMessage(message1);
		}
		else if (Question1.value.toLowerCase() !== "bucuresti")
		{
			printRedMessage(message1, submitButton1, Question1);
		}
	}

	function sendAnswer2() {

		if (Question2.value.toLowerCase() === "sofia") {
			printGreenMessage(message2, submitButton2, Question2);
		}
		else if (!Question2.value)
		{
			printVoidMessage(message2);
		}
		else if (Question2.value.toLowerCase() !== "sofia")
		{
			printRedMessage(message2, submitButton2, Question2);
		}
	}

	function sendAnswer3() {

		if (Question3.value.toLowerCase() === "zagreb") {
			printGreenMessage(message3, submitButton3, Question3);
		}
		else if (!Question3.value)
		{
			printVoidMessage(message3);
		}
		else if (Question3.value.toLowerCase() !== "zagreb")
		{
			printRedMessage(message3, submitButton3, Question3);
		}
	}

	function sendAnswer4() {

		if (Question4.value.toLowerCase() === "paris") {
			printGreenMessage(message4, submitButton4, Question4);
		}
		else if (!Question4.value)
		{
			printVoidMessage(message4);
		}
		else if (Question4.value.toLowerCase() !== "paris")
		{
			printRedMessage(message4, submitButton4, Question4);
		}
	}

	function sendAnswer5() {

		if (Question5.value.toLowerCase() === "berlin") {
			printGreenMessage(message5, submitButton5, Question5);
		}
		else if (!Question5.value)
		{
			printVoidMessage(message5);
		}
		else if (Question5.value.toLowerCase() !== "berlin")
		{
			printRedMessage(message5, submitButton5, Question5);
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

    function printRedMessage(message, submitButton, Question) {

    		message.style.textDecoration = "none";
			message.style.color = "red";
			message.innerText = "Your answer is WRONG!";
			Question.disabled = true;
			submitButton.disabled = true;
			progress();
    }

    function printGreenMessage(message, submitButton, Question){
    		message.style.textDecoration = "none";
			message.style.color = "green";
			message.innerText = "Your answer is CORRECT!";
			points++;
			Question.disabled = true;
			submitButton.disabled = true;
			progress();
    }

    function printVoidMessage(message) {
			message.style.color = "magenta";
			message.style.textDecoration = "underline";
			message.innerText = "YOU DIDN'T WRITE ANYTHING!!!";
    }
      
    
  
