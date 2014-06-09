
$(document).ready(function() {
   
/*---Set Questions and Answers---*/
    var question = [
        {
            number: "Question #1",
            quest: "What is the most popular flavor of ice cream in the US?",
            answers:["Chocolate", "Vanilla", "Pistacio", "Strawberry"],
            correct: 1,
            corrAns:"Vanilla is the most popular flavor of ice cream in the US, accounting for 20% to 29% of all ice cream purchased!",
            trivia:"Did you know that the vanilla bean is the fruit of a tropical American species of orchid???",
        },
        {
            number: "Question #2",
            quest: "We know Americans love ice cream. But which country consumes the second most ice cream per capital?",
            answers:["Canada", "England", "New Zealand", "Sweden"],
            correct: 2,
            corrAns:"New Zealanders love their ice cream too!",
            trivia:"New Zealanders consume 23 liters of ice cream per person each year! (That's 6 gallons for us imperial system users).",
        },
        {
            number: "Question #3",
            quest: "Which of the following is not a Ben & Jerry's Ice Cream flavor?",
            answers:["Karamel Sutra", "Chubby Hubby", "Half Baked", "Sherbert Holmes"],
            correct: 3,
            corrAns:"Sherbery Holmes is the Ben & Jerry's imposter Flavor!",
            trivia:"But Sherbert Holmes does sound good!",
        },
        {
            number: "Question #4",
            quest: "How many gallons of ice cream are produced in the US per year?",
            answers:["2 million", "50 million", "350 million", "800 million"],
            correct: 3,
            corrAns:"The US produces 800 million gallons of ice cream each year.",
            trivia:"800 million gallons is a lot of ice cream!",
        },

        {
            number: "Question #5",
            quest: "On which day of the week is the most ice cream consumed?",
            answers:["Sunday", "Wednesday", "Friday", "Saturday"],
            correct: 0,
            corrAns:"Sunday is the day for ice cream.",
            trivia:"But ice cream is awesome every day!",
        }
    ];
 
    /*---Declare variables---*/
    var correctAns = 0;
    var finish = false;
    var questAns = 0;
    var questNum = questAns + 1;
    var i;

    /*---functionality here---*/
    restartQuiz();
     
    
    /*---Restart Quiz---*/
    function restartQuiz() {
        correctAns = 0;
        finish = false;
        questAns = 0;
        $("#score").hide();
        $("#submit").hide();
        $("#submit").prop("disabled", true);
        $("#next").hide();
        $("#new").hide();
        $("#questNum").hide();
        $("#box ul").hide();
        $("#begin").show();
        $("#corrAns").hide();
    }
    /*--- Reset Quiz on Restart Button Click---*/
    $("#new").click(function() {
        console.log("Quiz reset");
        restartQuiz();
        $("#questText").text("Ready to play again?");
        
    });

    /*--- Start Quiz on button click---*/
    $("#begin").click(function() {
        console.log("Begin button pressed");
        $("#begin").hide();
        $("#submit").show();
        $("#new").show();
        $("#questNum").show();
        $("#box ul").show();
         $("#score").hide();
        questNum = questAns+1;
        askQuest();
    });
   
    
    /*--- Display Question and Answers ---*/
    function askQuest() {
        console.log("Question number " + questNum);
            $("#questText").text(question[questAns].quest);
            $("#1stChoice").text(question[questAns].answers[0]);
            $("#2ndChoice").text(question[questAns].answers[1]);
            $("#3rdChoice").text(question[questAns].answers[2]);
            $("#4thChoice").text(question[questAns].answers[3]);
            $("#questNum").text(question[questAns].number);
            $("#corrAns").hide();
            $("#submit").show();
            $("#next").hide();
            $(":radio").click(function() {
                $("#submit").prop("disabled",false);
            });
            if (questAns === 0) {
                $("#score").hide();            
            }
            else {
                $("#score").show();
            }
    };
       
    
   
    /*--- Accept Guess and Display Respose---*/
    
    $("body").on('click', '#submit', function() {
        var userGuess = $("input[type='radio']:checked").val();
        $("#submit").hide();
        $("#score").show();
        if (userGuess == question[questAns].correct) {
            console.log("userGuess is "+ userGuess);
            console.log("correct");
            $("#corrAns").show();
            $("#corrAns").text("CORRECT! " + question[questAns].trivia);
            correctAns ++;
            questAns++;
            if(questAns === 5) {
                $("#score").addClass("final");
               $("#score").text("Your final score is " + correctAns +"/" + questAns);
               return;
            }
            else {
            $("#next").show();
            $("#score").text("Current score: " + correctAns +"/" + questAns);
            }
            
        }
        else {
            console.log("wrong");
            $("#corrAns").show();
            $("#corrAns").text("WRONG! " + question[questAns].corrAns);
            questAns++;
            $("#score").text("Current score: " + correctAns +"/" + questAns);
            if(questAns === 5) {
                 $("#score").addClass("final");
               $("#score").text("Your final score is " + correctAns +"/" + questAns);
               return;
            }
            $("#next").show();
            
        }
    }); 

    /*--- Progress to next question---*/
    $("#next").click(function() {
        $("input:checked").removeAttr("checked");
                  askQuest ();
        
    });     

    /*function clear() {
        $("#questText").remove();
            $("#choice1").remove();
            $("#choice2").remove();
            $("#choice3").remove();
            $("#choice4").remove();
            $("#questNum").remove();
            $("#score").remove();
    }*/

});

  
   /* Note to self: remove radio buttons after functionality is OK */
   /* Is it possible to make the one button have three different functions instead of making 3 buttons? */
    




