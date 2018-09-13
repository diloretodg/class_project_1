// this is to create a function perhaps like a time out function 
// that will have the player's score captured as a duration of playing 
// the game. SHOOT THIS DOWN IF IT IS STUPID OR POOR CODE THINKING
//consider this a pseudocode below, ref: interval-solved.html in our activies under timers

// =========main function that will be added where ever it seen fit by backenders ===========

    // seting max score to 100,000 because larger number look cooler
var MaxScore = 100000;
var startScore= 0;
    // for the run function
var intervalId;
// when pause button is click it will run the pause button
//which could possibly correlate to firebase and submit the score
$("#pause").on("click", pause);
function run() {
    if(!intervalId){
        intervalId = setInterval(incrament, 1000);
    }
}
// this will be a function for increasing the score, pushing then 
//to firebase to be stored and displayed later
function incrament(){
    startScore++;
    console.log(startScore);
    // need to figure a way to push to firebase from this incrementaton
    // $("#pushToFirebase").
    if(startScore === 50000){
        // ding half way there mark not sure how to put this in
    }
}
function endGameScoreCalulator() {
    clearInterval(intervalId);
    intervalId = null;
}
run();
// =======NOT LINKED OR WORKING YET ===========
//=======consider this a pseudoCode============
