var questions = [{
    ques: "How many world titles does Ric Flair have?",
    ans: ["3", "9", "21", "16"],
    name: "titleReigns",
    correct: "16",
    divClass: ".titleReigns"
},
{
    ques: "Who holds the most loses at Wrestlemania?",
    ans: ["Triple H with 11", "Undertaker with 18", "Edge with 8", "Stone Cold with 5"],
    name: "loses",
    correct: "Triple H with 11",
    divClass: ".loses"
},
{
    ques: "Who holds the record for most matches in SmackDown?",
    ans: ["Undertaker", "The Rock", "Brock Lesnar", "Rey Mysterio Jr"],
    name: "smackDown",
    correct: "Rey Mysterio Jr",
    divClass: ".smackDown"
},
{
    ques: "Who was the last WWE Hardcore Champion?",
    ans: ["Big Show", "Bobby Lashley", "RVD", "Hardcore Holly"],
    name: "hardcore",
    correct: "RVD",
    divClass: ".hardcore"
},
// {
//     ques: "Winner of the first Money In The Bank Match?",
//     ans: ["Edge", "Chris Jericho", "CM Punk", "Kane"],
//     name: "moneyInTheBank",
//     correct: "Edge",
//     divClass: ".moneyInTheBank"
// },
// {
//     ques: "Most Royal Rumble Eliminations?",
//     ans: ["Hulk Hogan 19", "Kane 7", "Braun Strowman 13", "Daniel Bryan 6"],
//     name: "royalRumble",
//     correct: "Braun Strowman 13",
//     divClass: ".royalRumble"
// },
// {
//     ques: "Oldest WWE Champion",
//     ans: ["Hulk Hogan", "Big Show", "Andre The Giant", "Vince McMahon"],
//     name: "oldest",
//     correct: "Vince McMahnon",
//     divClass: ".oldest"
// },
// {
//     ques: "First Intercontinental Champion?",
//     ans: ["Randy Savage", " Pat Patterson", "Ultimate Warrior", "Rick Rude"],
//     name: "intercontinental",
//     correct: "Pat Patterson",
//     divClass: ".intercontinental"
// },
// {
//     ques: "Who won the most WWE Tag Team Titles?",
//     ans: ["Edge & Christian", "The Hart Foundation", "3D", "Hardy Boyz"],
//     name: "tagTeam",
//     correct: "3D",
//     divClass: ".tagTeam"
// },
// {
//     ques: "Youngest WWE Champion?",
//     ans: ["Shane McMahnon", "The Rock", "Brock Lesnar", "Randy Orton"],
//     name: "youngestChamp",
//     correct: "Randy Orton",
//     divClass: ".youngestChamp"
// }
] 

var labels = ["first", "second", "third", "forth"];


var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(30);
questionDisplay();
});


var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();


for (var j = 0; j < 4; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');


for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}



var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


    
    
    for (var i = 0; i < 4; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);

    
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();


    clearInterval(timer);
    return;
}
}, 1000);


$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; 


var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;


for (var i = 0; i < 4; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};


countdown();

$('.container').fadeOut(500);

$('#answerScreen').show();

$('#correctScreen').append(correctAnswers);

$('#wrongScreen').append(wrongAnswers);

})