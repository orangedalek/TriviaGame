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

// When start button is clicked...

$('#stbtn').on('click', function(){
	timer.start;
	audio.play();

	for (var j = 0; j < questions.length; j++) {
		var questionDiv = $('<div>')
		var questionconcat = questions[j].question;
		console.log(questionconcat);
		questionDiv.append('<h1>' + questionconcat + '</h1>');
		var answersLength = questions[j].answers;
		console.log(answersLength);
		for (var i = 0; i <answersLength.length; i++) {
		var radioButton = $('<input type="radio" name="answerbutton" value="' + questions[j].answers[i] + '" ><label>' + questions[j].answers[i] + '</label><br>');
		questionDiv.append(radioButton);
		}

			$('#contentHolder').append(questionDiv);
	
	
	}
}) 


// start the timer and insert it into the HTML
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

  if(minutes === 0 && seconds === 0){
  	clockRunning = false;
  }
  }
}



// append the questions and give them radio buttons....

// when the timer ends...

// add up right and wrong answers and unanswered questions....

// and append them to the HTML...
});
