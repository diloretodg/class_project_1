var noteIntervals = [];
// test song function
var currentNote;
// relevant game val all initialized
var game = {
    turn: 0,
    sequence: 0,
    currentSong: songBank[Math.floor(Math.random() * songBank.length)].songArr,
    playerChosen: [],
    correctNote: "",
    playerChoice: "",
    yourTurn: false,
    gameStart: false,
    score: 0, 
    simonSong: null
  };
// event listener for game start
$("#startgame").on("click", function(){
    newGame();
    // console.log("game start");
});
// event listener for simon selection
$(".music-note").on("click", function(){
// sets var used in function parameters
    var note = $(this).attr("data-note");
// only calls if the turn is passed to the user
    if (game.yourTurn == true){
        playerTurn(note);
        play(note);
    }
});  
// starts fresh simon game
function newGame() {
// clears out entire sequence in case of multiple starts
    clearTimeout(game.simonSong);
    game = {
        turn: 0,
        sequence: 0,
        currentSong: songBank[Math.floor(Math.random() * songBank.length)].songArr,
        playerChosen: [],
        correctNote: "",
        playerChoice: "",
        yourTurn: false,
        gameStart: false,
        score: 0, 
        simonSong: null
      };
    simonSays(game.currentSong);
}
// allows player turn up to max length
function playerTurn(n) {
// only passes this check if its the user's turn may be redundant
    if (game.yourTurn == true){
// sets game val based on parameter pulled from event for multiple note sequences the vlues are pushed to an array and sets target note to compare selection
        game.playerChoice = n;
        game.playerChosen.push(game.playerChoice);  
        game.correctNote = game.currentSong[game.sequence].note;
// compares most recent note pushed to correct note. ends turn if wrong allows to continue the sequence if correct
        if(game.playerChoice != game.correctNote){
            game.yourTurn = false;
            // console.log("wrong");
            simonSays(game.currentSong);
        } else {
            game.sequence ++;
            game.yourTurn = true;
            // add score and append to score div
            game.score = game.score +100;
            $("#userScore").html(game.score);
            console.log(game.score);
// once the sequence would be greater that the turn this ends the user turn, increments the game turn and starts next round of notes
            if(game.sequence > game.turn) {
                game.yourTurn = false;
                game.turn ++;
                // console.log("correct");
                simonSays(game.currentSong);
        }
    }
    }
    
}
// plays simon sequence
function simonSays(s) {
// stops player turn
    game.yourTurn = false;
// keeps track of whick note by incrimenting sequence
    game.sequence = 0;
// stores all chosen notes by player
    game.playerChosen = [];
// stores timeout to variable to be cleared if needed
    game.simonSong = setTimeout(function(){
// for loop based on the turn length that sets a timeout for each note one second longerthan its previous note
        for (var i = 0; i <= game.turn; i ++) {
            setTimeout(function(index) {
                play(s[index].note);
            }.bind(null, i), (i) * 1000)
            if(i == game.turn){
// once we are at the last note in loop sets a timeout that passes the turn back to the user for one second longer han the entire sequence
                setTimeout(function(){
                    game.yourTurn = true;
                }, (i * 1000 +1000))
            }
        };
    }, 2000);
    
}
// plays our notes
function play(n) {
// stores specfic box linked to audio
    currentNote = $("a[data-note="+ n +"]").addClass("light");
// adds a class for a half second linked to the note div attached to the audio
    window.setTimeout(function() {
        currentNote.removeClass("light");
    }, 300);
// pulls id for specific audio
    var audio = document.getElementById(n);
// on multiple clicks resets time
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    };

    // console.log("playing "+ n + " audio file");
    // console.log(audio);
}; 

// this is for about us page Card hovor:
$('.special.cards .image').dimmer({
    on: 'hover'
  });