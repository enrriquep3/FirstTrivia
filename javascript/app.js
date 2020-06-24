var card = $("#quiz-area");

// Question set
var questions = [
  {
    question: "Which city has the most clubs competing in its country's top division?",
    answers: ["Paris", "London", "Mexico City", "Rio de Janario"],
    correctAnswer: "London"
  },
  {
    question: "In which country would you find the world's largest football stadium (by capacity)?",
    answers: ["North Korea", "Brazil", "England", "China"],
    correctAnswer: "North Korea"
  },
  {
    question: "How many teams competed in the 2018 FIFA World Cup??",
    answers: ["36 Teams", "38 Teams", "28 Teams", "32 Teams"],
    correctAnswer: "32 Teams"
  },
  {
    question: "What country was soccer's Diego Maradona born in?",
    answers: ["Brazil", "Chile", "Italy", "Argentina"],
    correctAnswer: "Argentina"
  },
  {
    question: "Which country won the first ever World Cup in 1930??",
    answers: ["Spain", "England", "Uruguay", "Brazil"],
    correctAnswer: "Uruguay"
  },
  {
    question:
      "Which country has won the most World Cups?",
    answers: ["Brazil", "Argentina", "Italy", "Colombia"],
    correctAnswer: "Brazil"
  },
  {
    question: "Which country has appeared in three World Cup finals, but never won the competition?",
    answers: ["Belgium", "Netherlands", "Venezuela", "Uruguay"],
    correctAnswer: "Netherlands"
  },
  {
    question: "The record number of World Cup goals is 16, scored by who?",
    answers: ["Ken Zhou", "Louis Driggers", "Miroslav Klose", "Anthony Page"],
    correctAnswer: "Miroslav Klose"
  }
];

var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },

    start: function() {
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend(
            "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
        );

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for ( var j = 0; j < questions[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
        }
        card.append("<button id= 'done'>Done</button>");
    },


    done: function() {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === questions[i].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        } 
        this.result();
    },

    result: function() {
        clearInterval(timer);

        $("#sub-wrapper h2").remove();

        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
    game.start();
  });
  
  $(document).on("click", "#done", function() {
    game.done();
  });


  