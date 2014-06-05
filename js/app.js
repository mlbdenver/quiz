
$(document).ready(function() {
   
/*---Set Questions and Answers---*/
    var question = [
        {
            number: 1,
            quest: "What is the most popular flavor of ice cream in the US?",
            answers:["Chocolate", "Vanilla", "Pistacio", "Strawberry"],
            correct: 1,
            corrAns:"Vanilla is the most popular flavor of ice cream in the US, accounting for 20% to 29% of all ice cream purchased!",
        },
        {
            number: 2,
            quest: "We know Americans love ice cream. But which country consumes the second most ice cream per capital?",
            answers:["Canada", "England", "New Zealand", "Sweden"],
            correct: 2,
            corrAns:"New Zealanders love there ice cream too!",
        },
        {
            number: 3,
            quest: "Which of the following is not a Ben & Jerry's Ice Cream flavor?",
            answers:["Karamel Sutra", "Chubby Hubby", "Half Baked", "Sherbert Holmes"],
            correct: 3,
            corrAns:"Sherbery Holmes is not a real Ben & Jerry's Flavor.",
        },
        {
            number: 4,
            quest: "How many gallons of ice cream are produced in the US per year?",
            answers:["2 million", "50 million", "350 million", "800 million"],
            correct: 3,
            corrAns:"The US produces 800 million gallons of ice cream each year.",
        },

        {
            number: 5,
            quest: "On which day of the week is the most ice cream consumed?",
            answers:["Sunday", "Wednesday", "Friday", "Saturday"],
            correct: 0,
            corrAns:"Sunday is the day for ice cream.",
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
        $("#next").hide();
        $("#new").hide();
        $("#questNum").hide();
        $("#box ul").hide();
    }
    /*--- Reset Quiz on Restart Button Click---*/
    $("#new").click(function() {
        console.log("Quiz reset");
        restartQuiz();
    });

    /*--- Start Quiz on button click---*/
    $("#begin").click(function() {
        console.log("Begin button pressed");
        $("#begin").hide();
        $("#submit").show();
        $("#new").show();
        $("#questNum").show();
        $("#box ul").show();
        questNum = questAns+1;
        askQuest();
    });
   
    
    /*--- Display Question and Answers ---*/
    function askQuest() {
        console.log("Question number " + questNum);
            $("#questText").html(question[questAns].quest);
            $("#choice1").append(question[questAns].answers[0]);
            $("#choice2").append(question[questAns].answers[1]);
            $("#choice3").append(question[questAns].answers[2]);
            $("#choice4").append(question[questAns].answers[3]);
            $("#questNum").append(" " + questNum);
            $("#score").show();
            $("#score").append(correctAns +"/" + questAns);
    };
       
    
   
    /*--- Accept Guess and Display Respose---
    
    $("#submit").click(function() {
        var userGuess = $("input[type="radio"]:checked").val();
        if(userGuess === undefined) {
            $("#corrAns").text("Please make a selection");
        }
        else if (userGuess == question[questAns].correct) {
            console.log("userGuess is "+ userGuess);
            console.log("correct is " + correct);
            $(#corrAns").text("CORRECT!");
            correctAns ++;
            $("#next").show();
            $("#enterChoice").hide();
        }
        else {
            console.log("wrong");
            $(#corrAns").text("WRONG!" + question[guestAns].corrAns);
            $("#next").show();
            $("#enterChoice").hide();
        }
    }); */
            
    

});

  
   /* Note to self: remove radio buttons after functionality is OK */
   /* Is it possible to make the one button have three different functions instead of making 3 buttons? */
    




