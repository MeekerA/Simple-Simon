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

gameColorBoxs.click(function() {
    // console.log($(this));
    $(this).css({
        opacity: "1"
    }).animate({
        opacity: ".2"
    }, 400)
});

oneRedBox.click(function(){
   playersInput.push(1);
    console.log(playersInput);
});twoBlueBox.click(function(){
    playersInput.push(2);
    console.log(playersInput);
});threeGreenBox.click(function(){
    playersInput.push(3);
    console.log(playersInput);
});fourYellowBox.click(function(){
    playersInput.push(4);
    console.log(playersInput);
});


for (var i = 0; i < 5; i++) {
    var randomNumber = Math.floor((Math.random() * 4) + 1);
    simpleSimonsInput.push(randomNumber)
}
console.log(simpleSimonsInput);


// oneRedBox.animate({
//     opacity: "1"
// }, 300).animate({
//     opacity: ".2"
// }, 300);