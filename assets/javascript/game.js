var wins = 0;
var losses = 0;
var totalScore = 0;
var goalScore = 0;
var crystal1Score = 0;
var crystal2Score = 0;
var crystal3Score = 0;
var crystal4Score = 0;
var currClickVal = 0;

// JavaScript function that wraps everything
$(document).ready(function () {
    //(max - min + 1)+min
    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    var crystal1Score = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystal2Score = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystal3Score = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystal4Score = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    

    console.log("randomNumber" + randomNumber);
    console.log("crystal1Score " + crystal1Score + " : " + "crystal2Score " + crystal2Score + " : " + "crystal3Score " + crystal3Score + " : " + "crystal4Score " + crystal4Score);
    $("#randomNumber").html("<h3>" + randomNumber + "</h3>");
    $("#totalScore").html("<h3>" + totalScore + "</h3>");
    $("#wins").html("<h5>" + wins + "</h5>");
    $("#losses").html("<h5>" + losses + "</h5>");

    // When clicked on BlueCalcite Button
    $(".BlueCalcite").on("click", function () {
        currClickVal = crystal1Score;
        console.log("currClickVal " + currClickVal);
        totalScore=totalScore+currClickVal;
        console.log("totalScore1 " + totalScore);
        $("#totalScore").html("<h3>" + totalScore + "</h3>");
        isWinner();
    });

    // When clicked on Painite Button
    $(".Painite").on("click", function () {
        currClickVal = crystal2Score;
        console.log("currClickVal " + currClickVal);
        totalScore=totalScore+currClickVal;
        console.log("totalScore2 " + totalScore);
        $("#totalScore").html("<h3>" + totalScore + "</h3>");
        isWinner();
    });

    // When clicked on Quartz Button
    $(".Quartz").on("click", function () {
        currClickVal = crystal3Score;
        console.log("currClickVal " + currClickVal);
        totalScore=totalScore+currClickVal;
        console.log("totalScore3 " + totalScore);
        $("#totalScore").html("<h3>" + totalScore + "</h3>");
        isWinner();
    });

    // When clicked on RoseQuartz Button
    $(".RoseQuartz").on("click", function () {
        currClickVal = crystal4Score;
        console.log("currClickVal " + currClickVal);
        totalScore=totalScore+currClickVal;
        console.log("totalScore4 " + totalScore);
        $("#totalScore").html("<h3>" + totalScore + "</h3>");
        isWinner();
    });

    function isWinner() {

        if (randomNumber===totalScore){
            wins++;
            $("#wins").html("<h5>" + wins + "</h5>");
            $("#win-lose").html("<h5>You won!</h5>");
            console.log("wins " + wins);
            reset();
          }
          else if (totalScore>randomNumber){
              losses++;
              $("#losses").html("<h5>" + losses + "</h5>");
              $("#win-lose").html("<h5>You lost!</h5>");
              console.log("losses " + losses);
              reset();
          }
      
      }

      function reset() {
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        crystal1Score = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        crystal2Score = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        crystal3Score = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        crystal4Score = Math.floor(Math.random() * (12 - 1 + 1) + 1);  
        totalScore=0;currClickVal=0;
        $("#totalScore").html("<h3>" + totalScore + "</h3>");
        $("#randomNumber").html("<h3>" + randomNumber + "</h3>");
        console.log("randomNumber" + randomNumber);
        console.log("crystal1Score " + crystal1Score + " : " + "crystal2Score " + crystal2Score + " : " + "crystal3Score " + crystal3Score + " : " + "crystal4Score " + crystal4Score);
    

      }

});
