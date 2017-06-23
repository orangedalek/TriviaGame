$(function() {
    console.log( "ready!" );

// Here are the variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var timeLeft = "";
var intervalId;
var clockRunning = false;
var audio = new Audio("assets/Doctor_Who_Theme_-_2010.mp3")
var userAnswers = []

// and here is an array of objects containing all of our questions...

var questions = [
{question: "Which actor played the Third Doctor?",
answers: ["Jon Pertwee", "Tom Baker", "David Tennant", "Sylvester McCoy"],
correctAnswer: "Jon Pertwee"
} ,
{question: "These evil robots are actually squishy little mutant aliens driving around in tank-like bodies.",
answers: ["Cybermen", "Ood", "Daleks", "Sontarans"],
correctAnswer: "Daleks"
} ,
{question: "How many times can a timelord regenerate?",
answers: ["9", "12", "3", "17"],
correctAnswer: "12"
},
{question: "Which Doctor was famous for wearing a 7 meter scarf?",
answers: ["The First Doctor", "The Seventh Doctor", "The Fourth Doctor", "The Eleventh Doctor"],
correctAnswer: "The Fourth Doctor"
},
{question: "Which spinoff followed the adventures of Captain Jack Harkness?",
answers: ["The Sara Jane Adventures", "Torchwood", "Misfits", "Residue"],
correctAnswer: "Torchwood"
}
]



var timer = {
	time: 120,

	start: function(){
		if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
    	}
	},

	count: function() {

    timer.time--;

    var converted = timer.timeConverter(timer.time);
  
    $("#timerHolder").html(converted);
  },
    timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;

  if(minutes === 00 && seconds === 00){
  	clockRunning = false;
  }
  }

}

var timeyWimey = timer.timeConverter(timer.time);



	$('#stbtn').on('click', function(){
		timer.start(timeyWimey);
		audio.play();
	for (var j = 0; j < questions.length; j++) {
		var questionDiv = $('<div>')
		var questionconcat = questions[j].question;
		questionDiv.append('<h1>' + questionconcat + '</h1>');
		var answersLength = questions[j].answers;
		for (var i = 0; i <answersLength.length; i++) {
			var radioButton = $('<input type="radio" name="answerbutton' + j + '" value="' + questions[j].answers[i] + '" ><label>' + questions[j].answers[i] + '</label><br>');
			questionDiv.append(radioButton);
			$("input:radio[name=answerbutton" + j + "]").click(function() {

			 var value = $(this).val();
			 console.log($(this));
			 userAnswers.push(value); //trying to get the clicked button to feed into empty userAnswers array...
			 console.log(userAnswers);
						  
			});
			}

	$('#contentHolder').append(questionDiv);
	
	}


}) 

	console.log(userAnswers);


var test = questions[0].answers[0];
console.log(test);

// var test2 = 
// console.log(test2);

// when the timer ends...
// add up right and wrong answers and unanswered questions....

// and append them to the HTML...

function tallyScore(){
	for (var t = 0; t < userAnswers.length; t++) {
		for (var w = 0; w <questions.correctAnswer.length; w++) {
			if(userAnswers[t] === questions.correctAnswer[w]){
				correctAnswers++;
			}
			else if(userAnswers[t] === null){
				unanswered++;
			}
			else{
				incorrectAnswers++;
			}
		}
	}
}

if(timeyWimey === "00:00"){
	tallyScore();
	$('#contentHolder').empty();
	$('#contentHolder').html('<p>Correct Answers: ' + correctAnswers + '</p><p> Incorrect Answers: ' + incorrectAnswers + '</p><p>Unanswered Questions: ' + unanswered + '</p>')
}

});
