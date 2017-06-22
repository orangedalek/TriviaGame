$(function() {
    console.log( "ready!" );
});

// Here are the variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var timeLeft = "";
var intervalId;
var clockRunning = false;

// and here is an array of objects containing all of our questions...

var questions = [
{question1: "Which actor played the Third Doctor?",
answers: ["Jon Pertwee", "Tom Baker", "David Tennant", "Sylvester McCoy"],
correctAnswer: "Jon Pertwee"
}
{question2: "These evil robots are actually squishy little mutant aliens driving around in tank-like bodies.".
answers: ["Cybermen", "Ood", "Daleks", "Sontarans"],
correctAnswer: "Daleks"
}
{question3: "How many times can a timelord regenerate?",
answers: ["9", "12", "3", "17"],
correctAnswer: "12"
}
{question4: "Which Doctor was famous for wearing a 7 meter scarf?",
answers: ["The First Doctor", "The Seventh Doctor", "The Fourth Doctor", "The Eleventh Doctor"],
correctAnswer: "The Fourth Doctor"
}
{question5: "Which spinoff followed the adventures of Captain Jack Harkness?",
answers: ["The Sara Jane Adventures", "Torchwood", "Misfits", "Residue"],
correctAnswer: "Torchwood"
}
]

// When start button is clicked...

// start the timer and insert it into the HTML

// append the questions and give them radio buttons....

// when the timer ends...

// add up right and wrong answers and unanswered questions....

// and append them to the HTML...