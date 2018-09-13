
// Initialize Firebase
// var config = {
// apiKey: "AIzaSyChswfB5HAG1cQcjkai_26cvtFHtYqpNYU",
// authDomain: "project1-a46e9.firebaseapp.com",
// databaseURL: "https://project1-a46e9.firebaseio.com",
// projectId: "project1-a46e9",
// storageBucket: "project1-a46e9.appspot.com",
// messagingSenderId: "1004479758001"
// };
// firebase.initializeApp(config);

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


var game = {
    turn: 0,
    sequence: 0,
    currentSong: songArr,
    playerChosen: [],
    correctNote: "",
    playerChoice: "",
    yourTurn: false,

  };



$("#reset").on("click", function(){
    newGame();
    console.log("game start");
});

$(".music-note").on("click", function(){
    if (game.yourTurn == true){
        var note = $(this).attr("data-note");
        play(note);
        playerTurn(note);
    }
});
    

function newGame() {
    game.turn = 0;
    game.currentSong = songArr
    simonSays(game.currentSong);
}

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



// Played Notes Array
// var noteIntervals = [];

// // Song Notes Array
// var musicNotes = [];

// // on Click button for adding notes to noteIntervals Array
// $(".music-note").on("click", function(event) {
//     event.preventDefault();
//     var grabId = this.id;
//     noteIntervals.push(grabId);
//     console.log(noteIntervals);

// Creates temp local object for holding note info
// Depends on what we're going to save to Firebase
    // var savedNotes = {
      
    // };
  
    // // Uploads user's played notes to the database
    // // IF we got with the local object, that would go in noteIntervals place
    // database.ref().push(noteIntervals);
    //   // Logs everything to console
    // console.log(noteIntervals);

// handles on click note plays acts like a loop should be in other file to turn on off.



// clear all playing notes


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
    

 