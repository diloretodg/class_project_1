var noteIntervals = [];
// test song function
var songArr = [
    {note: "f3Audio", sequence: 1},
    {note: "f3Audio", sequence: 2},
    {note: "g3Audio", sequence: 3},
    {note: "a3Audio", sequence: 4},
    {note: "f3Audio", sequence: 5},
    {note: "a3Audio", sequence: 6},
    {note: "g3Audio", sequence: 7},
    {note: "c3Audio", sequence: 8},
    {note: "f3Audio", sequence: 9},
    {note: "f3Audio", sequence: 10},
    {note: "g3Audio", sequence: 11},
    {note: "a3Audio", sequence: 12},
    {note: "f3Audio", sequence: 13},
    {note: "e3Audio", sequence: 14},
]

// relevant game val
var game = {
    turn: 0,
    sequence: 0,
    currentSong: songArr,
    playerChosen: [],
    correctNote: "",
    playerChoice: "",
    yourTurn: false,
    gameStart: false,

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
   if(game.gameStart==false){ game.turn = 0;
    game.currentSong = songArr
    simonSays(game.currentSong);}
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
    var audio = document.getElementById(n);
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }

    console.log("playing "+ n + " audio file")
    console.log(audio)
}; 