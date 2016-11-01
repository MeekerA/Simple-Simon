/**
 * Created by Austin on 10/31/16.
 */

"use strict";

var gameColorBoxs = $(".gameColorBox");
var oneRedBox = $("#redGameBox");
var twoBlueBox = $("#blueGameBox");
var threeGreenBox = $("#greenGameBox");
var fourYellowBox = $("#yellowGameBox");

var simpleSimonsInput = [];
var playersInput = [];

function simpleSimonAnimate(intigerValue) {
    switch (intigerValue) {
        case 1:
            oneRedBox.animate({
                opacity: "1"
            }, 300).animate({
                opacity: ".2"
            }, 300);
            break;
        case 2:
            twoBlueBox.animate({
                opacity: "1"
            }, 300).animate({
                opacity: ".2"
            }, 300);
            break;
        case 3:
            threeGreenBox.animate({
                opacity: "1"
            }, 300).animate({
                opacity: ".2"
            }, 300);
            break;
        case 4:
            fourYellowBox.animate({
                opacity: "1"
            }, 300).animate({
                opacity: ".2"
            }, 300);
    }
}

function showSimonsNumbers(arrayOfNumbers, timeBetweenNumbers) {
    var i = 0;
    var SimpleSimonstimer = setInterval(function () {
        simpleSimonAnimate(arrayOfNumbers[i]);
        i++;
        if (i >= simpleSimonsInput.length) {
            clearInterval(SimpleSimonstimer)
        }
    }, timeBetweenNumbers);
}

// -------------- variable and function declaration above ---------------

gameColorBoxs.each(function (index, element) {
    $(element).click(function () {
        $(element).css({
            opacity: "1"
        }).animate({
            opacity: ".2"
        }, 400);
        playersInput.push(index + 1);
        console.log(playersInput);
    });
});

for (var i = 0; i < 2; i++) {
    var randomNumber = Math.floor((Math.random() * 4) + 1);
    simpleSimonsInput.push(randomNumber)
}
console.log(simpleSimonsInput);

showSimonsNumbers(simpleSimonsInput, 400);


// oneRedBox.animate({
//     opacity: "1"
// }, 300).animate({
//     opacity: ".2"
// }, 300);

// gameColorBoxs.click(function () {
//     // console.log($(this));
//     $(this).css({
//         opacity: "1"
//     }).animate({
//         opacity: ".2"
//     }, 400)
// });
