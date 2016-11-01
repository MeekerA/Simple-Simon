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

function showSimonsNumbers(arrayOfNumbers, timeBetweenNumbers1000) {
    var i = 0;
    gameInstructionText.html("Watch the sequence.");
    var SimpleSimonstimer = setInterval(function () {
        switch (arrayOfNumbers[i]) {
            case 1:
                oneRedBox.animate({
                    opacity: "1"
                }, 300).animate({
                    opacity: ".1"
                }, 300);
                break;
            case 2:
                twoBlueBox.animate({
                    opacity: "1"
                }, 300).animate({
                    opacity: ".1"
                }, 300);
                break;
            case 3:
                threeGreenBox.animate({
                    opacity: "1"
                }, 300).animate({
                    opacity: ".1"
                }, 300);
                break;
            case 4:
                fourYellowBox.animate({
                    opacity: "1"
                }, 300).animate({
                    opacity: ".1"
                }, 300);
        }
        i++;
        if (i >= arrayOfNumbers.length) {

            clearInterval(SimpleSimonstimer);

            setTimeout(function(){
                gameInstructionText.html("Enter the sequence.")
            }, 1000);
        }
    }, timeBetweenNumbers1000);
}

// -------------- variable and function declaration above ---------------


gamesStartButton.click(function () {

    buttonArea.html("<h4>Round: " + roundCounter + "</h4>");
    gameInstructionText.html("");

    for (var i = 0; i < roundCounter + 1; i++) {
        var randomNumber = Math.floor((Math.random() * 4) + 1);
        simpleSimonsInput.push(randomNumber)
    }
    console.log(simpleSimonsInput);


    showSimonsNumbers(simpleSimonsInput, 1000);

    gameColorBoxs.each(function (index, element) {
        $(element).click(function () {
            $(element).css({
                opacity: "1"
            }).animate({
                opacity: ".1"
            }, 400);
            playersInput.push(index + 1);
            console.log(playersInput);
        });
    });


});


