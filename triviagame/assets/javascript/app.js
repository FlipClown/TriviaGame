$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

	 						
var correct = 0;
var wrong = 0;
var q1 = {
	question : "Who uses the kamehameha?",
	possibleAnswers : ["A. Kenshin Himura",
				 "B. Genos",
				 "C. Son Goku",
				 "D. Sesshomaru"],
	flags : [false, false, true, false],
	answer : "C. Son Goku"
};

var q2 = {
	question: "Which attack does Vegeta use?",
	possibleAnswers: ["A. Wind Scar",
				 "B. Final Flash",
				 "C. Serious Punch",
				 "D. Shining Finger"],
	flags : [false, true, false, false],
	answer : "B. Final Flash"
};

var q3 = {
	question : "Hiei is what kind of demon?",
	possibleAnswers : ["A. Ice Demon",
				 "B. Fire Demon",
				 "C. Fox Demon",
				 "D. Dog Demon"],
	flags : [false, true, false, false],
	answer : "B. Fire Demon"
};

var q4 = {
	question : "Yusuke Urameshi's signature attack is what?",
	possibleAnswers : ["A. Spirit-Gun",
				 "B. Angel Style",
				 "C. Gomu-Gomu no Pistol",
				 "D. Galick Gun"],
	flags : [true, false, false, false],
	answer : "A. Spirit-Gun"
};

var q5 = {
	question : "Who uses the three sword style?",
	possibleAnswers : ["A. Monkey D. Luffy",
				 "B. Roronoa Zoro",
				 "C. Vinsmoke Sanji",
				 "D. Chopper"],
	flags : [false, true, false, false],
	answer : "B. Roronoa Zoro"
};

var q6 = {
	question : "Which class of devil fruit users can turn into elements of nature?",
	possibleAnswers : ["A. Logia Type",
				 "B. Paramecia Type",
				 "C. Zoan Type",
				 "D. Mythical Zoan Type"],
	flags : [true, false, false, false],
	answer : "A. Logia Type"
};

var q7 = {
	question : "Which character wanted to become Hokage?",
	possibleAnswers : ["A. Inuyasha",
				 "B. Saitama",
				 "C. Naruto",
				 "D. Seto Kaiba"],
	flags : [false, false, true, false],
	answer : "C. Naruto"
};

var q8 = {
	question : "Which mobile suit does Domon Kasshu use in the second half of G Gundam?",
	possibleAnswers : ["A. Master Gundam",
				 "B. Burning Gundam",
				 "C. Wing Zero",
				 "D. Gundam Epyon"],
	flags : [false, true, false, false],
	answer : "B. Burning Gundam"
};

var q9 = {
	question : "What did Saitama want to be since he was little?",
	possibleAnswers : ["A. Hokage",
				 "B. King of the Pirates",
				 "C. A full demon",
				 "D. A hero"],
	flags : [false, false, false, true],
	answer : "D. A hero"
};

var q10 = {
	question : "What is the name of Inuyasha's sword?",
	possibleAnswers : ["A. Banryuu",
				  "B. Tetsusaiga",
				  "C. Dragon Slayer",
				  "D. Yoru"],
	flags : [false, true, false, false],
	answer : "B. Tetsusaiga"
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {


	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Great Job!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("EHHRRRGHH WRONG!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});



});