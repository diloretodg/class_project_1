///////////////////////// simon game ////////////////////
var game = {
    turn: 0,
    currentSong: "",
    correctNote: "",
    playerChoice: "",
  };



$("#reset").on("load", function(){
    newGame();
});

$(".music-note").on("click", function(){
    var note = $(this).attr("data-note");
    play(note);
    playerTurn(note)
  });

function newGame() {
    game.turn = 0;
    game.currentSong = songArr
    simonSays(game.currentSong);
}

function playerTurn(n) {
    playerChoice = n;
    correctNote = currentSong[turn];
    if (playerChoice == currentSong){
        console.log("correct");
        game.turn++;
        simonSays(game.currentSong);
    } else {
        console.log("wrong");
        simonSays(game.currentSong);
    }
}

function simonSays(s) {
    for (var i = 0; i <= turn; i ++) {
        setTimeout(function(index) {
        play(s[index].note)
        }.bind(null, i), (i) * 1000)
    }
}