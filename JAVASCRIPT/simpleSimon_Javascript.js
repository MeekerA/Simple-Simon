/**
 * Created by Austin on 10/31/16.
 */

"use strict";

(function () {

    var gameColorBoxs = $(".gameColorBox"); // all games color boxes
    var buttonArea = $("#buttonArea"); // container that holds start button
    var gameInstructionText = $("#gameInstructionText"); //

    var simpleSimonsInput = [];
    var playersInput = [];
    var roundCounter = 1;
    var gamePlaySpeed = 1000; // games play speed // 1 sec between computers animation
    var correctSequenceCounter = 0;

// ----------------- Variable declaration above --------------------

    function simonAnimatesBox(animationBox, speed300) { // animation for color boxes.
        animationBox.animate({
            opacity: "1"
        }, speed300).animate({
            opacity: ".1"
        }, speed300);
    }

    var turnClickCheckingOn = false; // variable that can be turned on and off to control when player can click boxes
    function userAnimatesBox() { // controls players box animation // checks player choice against games sequence
        gameColorBoxs.each(function (index, element) {
            $(element).click(function () {
                if (turnClickCheckingOn == true) { // when turn clicking in "ON"
                    $(element).css({ // user animation on click
                        opacity: "1"
                    }).animate({
                        opacity: ".1"
                    }, 200);
                    playersInput.push(index + 1); // red = 1 // blue = 2 // green = 3 // yellow = 4

                    if (playersInput[correctSequenceCounter] == simpleSimonsInput[correctSequenceCounter]) { // checks players choice against games sequence
                        correctSequenceCounter++; // adds 1 to the sequence counter

                    } else {    // player lost need to add restart button !!

                        setTimeout(function () { // .4 second delay to finish players box animation

                            turnClickCheckingOn = false; // turns player clicking off

                            simonAnimatesBox(gameColorBoxs, 300); // flash all color boxes .6 second animation total

                            gameInstructionText.html("That wasn't right...");

                            buttonArea.html("<h4>You Made it to Round: " + roundCounter + "</h4>");

                        }, 400)
                    }

                    if (simpleSimonsInput.length == correctSequenceCounter) { // if players sequence = computers sequence
                        setTimeout(function () { // adds .4 sec delay to finish players animation

                            roundCounter++; // adds one to round counter
                            gamePlaySpeed -= 50; // reduces time between computer box animation
                            correctSequenceCounter = 0; // resets correct sequence counter to "0"
                            playersInput = []; // clears players input

                            buttonArea.html("<h4>Round: " + roundCounter + "</h4>");
                            gameInstructionText.html("");

                            var randomNumber = Math.floor((Math.random() * 4) + 1);
                            simpleSimonsInput.push(randomNumber); // adds random number to games sequence

                            // console.log(simpleSimonsInput);

                            turnClickCheckingOn = false; // turns clicking off

                            showSimonsNumbers(simpleSimonsInput, gamePlaySpeed); // runs next level

                        }, 400)
                    }
                }
            });
        });
    }

    function showSimonsNumbers(arrayOfNumbers, timeBetweenNumbers1000) { // function shows player the computers sequence
        var i = 0; // variable increases for arrayOfNumbers[i] to move threw the array
        gameInstructionText.html("Watch the sequence.");
        var SimpleSimonstimer = setInterval(function () { //setInterval controls the time between computer animation "Game Speed"
            switch (arrayOfNumbers[i]) {
                case 1:
                    simonAnimatesBox($("#redGameBox"), 300);
                    break;
                case 2:
                    simonAnimatesBox($("#blueGameBox"), 300);
                    break;
                case 3:
                    simonAnimatesBox($("#greenGameBox"), 300);
                    break;
                case 4:
                    simonAnimatesBox($("#yellowGameBox"), 300)
            }
            i++;
            if (i >= arrayOfNumbers.length) { // if statement that i == the array of numbers length

                clearInterval(SimpleSimonstimer); // stops the setInterval

                setTimeout(function () { // adds 1. sec delay to finish computers animation
                    gameInstructionText.html("Enter the sequence."); // changes text
                    turnClickCheckingOn = true; // turns clicking function on

                }, 1000);
            }
        }, timeBetweenNumbers1000);
    }

// -------------- Start Button on Page Load ---------------

    $("#startGameButton").click(function () {
        roundCounter = 1;
        playersInput = [];
        simpleSimonsInput = [];

        buttonArea.html("<h4>Round: " + roundCounter + "</h4>");
        gameInstructionText.html("");

        var randomNumber = Math.floor((Math.random() * 4) + 1);
        simpleSimonsInput.push(randomNumber);
        randomNumber = Math.floor((Math.random() * 4) + 1);
        simpleSimonsInput.push(randomNumber);

        showSimonsNumbers(simpleSimonsInput, gamePlaySpeed);

        userAnimatesBox();
    });

})();

console.log("%c You Shall Not Pass...", "color: red; font-size: 50px; font-weight: bold; text-shadow: 1px 1px 1px black");