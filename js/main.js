var noteIntervals = [];
// test song function
var currentNote;
// relevant game val
var game = {
    turn: 0,
    sequence: 0,
    currentSong: songBank[Math.floor(Math.random() * songBank.length)].songArr,
    playerChosen: [],
    correctNote: "",
    playerChoice: "",
    yourTurn: false,
    gameStart: false,
    score: 0 

  };
// event listener for game start
$("#reset").on("click", function(){
    newGame();
    console.log("game start");
});
// event listener for simon selection
$(".music-note").on("click", function(){
    if (game.yourTurn == true){
        var note = $(this).attr("data-note");
        play(note);
        playerTurn(note);
    }
});  
// starts fresh simon game
function newGame() {
   if(game.gameStart==false){ 
        game.turn = 0;
        game.currentSong = songBank[Math.floor(Math.random() * songBank.length)].songArr;
        game.score = 0
        simonSays(game.currentSong);
    }
}
// allows player turn up to max length
function playerTurn(n) {
    game.yourTurn = false;
    game.playerChoice = n;
    game.playerChosen.push(game.playerChoice);  
    game.correctNote = game.currentSong[game.sequence].note;
    if(game.playerChoice != game.correctNote){
        console.log("wrong");
        simonSays(game.currentSong);
    } else {
        game.sequence ++;
        game.yourTurn = true;
        if(game.sequence > game.turn) {
            game.turn ++;
            console.log("correct");
            simonSays(game.currentSong);
        }
    }
}
// plays simon sequence
function simonSays(s) {
    game.yourTurn = false;
    game.sequence = 0;
    game.playerChosen = [];
    setTimeout(function(){
        for (var i = 0; i <= game.turn; i ++) {
            setTimeout(function(index) {
                play(s[index].note);
                game.yourTurn = true;
            }.bind(null, i), (i) * 1000)
        }
    }, 2000);
    
}
// plays our notes
function play(n) {

    currentNote = $("a[data-note="+ n +"]").addClass("light");
    window.setTimeout(function() {
        currentNote.removeClass("light");
    }, 300);
   
    
    var audio = document.getElementById(n);

    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    };

    console.log("playing "+ n + " audio file");
    console.log(audio);
}; 
