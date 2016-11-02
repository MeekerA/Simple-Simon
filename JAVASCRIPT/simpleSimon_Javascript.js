/**
 * Created by Austin on 10/31/16.
 */

"use strict";

var gameColorBoxs = $(".gameColorBox");
var oneRedBox = $("#redGameBox");
var twoBlueBox = $("#blueGameBox");
var threeGreenBox = $("#greenGameBox");
var fourYellowBox = $("#yellowGameBox");
var gamesStartButton = $("#startGameButton");
var buttonArea = $("#buttonArea");
var gameInstructionText = $("#gameInstructionText");

var simpleSimonsInput = [];
var playersInput = [];
var roundCounter = 1;
var gamePlaySpeed = 1000;
var counter = 0;


// ----------------- Variable declaration above --------------------


function simonAnimatesBox(animationBox, speed300) {
    animationBox.animate({
        opacity: "1"
    }, speed300).animate({
        opacity: ".1"
    }, speed300);
}

var dumbVariable = false;
function userAnimatesBox() {
    gameColorBoxs.each(function (index, element) {
        $(element).click(function () {
            if (dumbVariable == true) {
                $(element).css({
                    opacity: "1"
                }).animate({
                    opacity: ".1"
                }, 400);
                playersInput.push(index + 1);

                if (playersInput[counter] == simpleSimonsInput[counter]) {
                    counter++;
                } else {
                    // player lost
                    setTimeout(function () {

                        dumbVariable = false;

                        gameInstructionText.html("Wrong Answer..");

                        buttonArea.html("<h4>You Made it to Round: " + roundCounter + "</h4>");

                    }, 400)
                }

                if (simpleSimonsInput.length == counter) {
                    setTimeout(function () {

                        roundCounter++;
                        gamePlaySpeed -= 50;
                        counter = 0;
                        playersInput = [];

                        buttonArea.html("<h4>Round: " + roundCounter + "</h4>");
                        gameInstructionText.html("");

                        var randomNumber = Math.floor((Math.random() * 4) + 1);
                        simpleSimonsInput.push(randomNumber);

                        console.log(simpleSimonsInput);

                        dumbVariable = false;

                        showSimonsNumbers(simpleSimonsInput, gamePlaySpeed);

                    }, 400)
                }
            }
        });
    });
}


function showSimonsNumbers(arrayOfNumbers, timeBetweenNumbers1000) {
    var i = 0;
    gameInstructionText.html("Watch the sequence.");
    var SimpleSimonstimer = setInterval(function () {
        switch (arrayOfNumbers[i]) {
            case 1:
                simonAnimatesBox(oneRedBox, 300);
                break;
            case 2:
                simonAnimatesBox(twoBlueBox, 300);
                break;
            case 3:
                simonAnimatesBox(threeGreenBox, 300);
                break;
            case 4:
                simonAnimatesBox(fourYellowBox, 300)
        }
        i++;
        if (i >= arrayOfNumbers.length) {

            clearInterval(SimpleSimonstimer);

            setTimeout(function () {
                gameInstructionText.html("Enter the sequence.");
                dumbVariable = true;
            }, 1000);
        }
    }, timeBetweenNumbers1000);
}


// -------------- Start Button on Page Load ---------------

gamesStartButton.click(function () {

    roundCounter = 1;

    playersInput = [];
    simpleSimonsInput = [];
    buttonArea.html("<h4>Round: " + roundCounter + "</h4>");
    gameInstructionText.html("");


    var randomNumber = Math.floor((Math.random() * 4) + 1);
    simpleSimonsInput.push(randomNumber);
    randomNumber = Math.floor((Math.random() * 4) + 1);
    simpleSimonsInput.push(randomNumber);

    console.log(simpleSimonsInput);


    showSimonsNumbers(simpleSimonsInput, gamePlaySpeed);

    userAnimatesBox();

});

// $("#restart").click(function() {
//
//     roundCounter = 1;
//
//     playersInput = [];
//     simpleSimonsInput = [];
//     buttonArea.html("<h4>Round: " + roundCounter + "</h4>");
//     gameInstructionText.html("");
//
//     for (var i = 0; i < roundCounter + 1; i++) {
//         var randomNumber = Math.floor((Math.random() * 4) + 1);
//         simpleSimonsInput.push(randomNumber);
//     }
//     console.log(simpleSimonsInput);
//
//     showSimonsNumbers(simpleSimonsInput, gamePlaySpeed);
//
// });

