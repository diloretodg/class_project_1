// Initialize Firebase
var config = {
apiKey: "AIzaSyChswfB5HAG1cQcjkai_26cvtFHtYqpNYU",
authDomain: "project1-a46e9.firebaseapp.com",
databaseURL: "https://project1-a46e9.firebaseio.com",
projectId: "project1-a46e9",
storageBucket: "project1-a46e9.appspot.com",
messagingSenderId: "1004479758001"
};
firebase.initializeApp(config);

var database = firebase.database();

// Clear username
var username = "";
    
var noteIntervals = []};
var songBank = {
    test: ["c3Audio", "d3Audio", "e3Audio", "f3Audio", "g3Audio", "a3Audio", "b3Audio", "c4Audio"]
}
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

 //on Click button for adding username
 $("#add-user").on("click", function(event) {
    event.preventDefault();

    // Clears user input textbox
    // $("#user-input").val("");

    // Get username input
    username = $("#user-input").val().trim();
    score = $("#userscore").val().trim();
    leader = $("#leader").val().trim();

    // Save changes to Firebase
    database.ref().set({
        username: username,
        score: score,
        leader: leader
    });

    // Create Firebase event for adding username to the database 
    database.ref().on("value", function(snapshot) {
        console.log(snapshot.val());

        // Store snapshot into a variable
        console.log(username);

        // Append the new row to the table
        $("#username").text(snapshot.val().username);
    });
// event listener for game start
$("#reset").on("click", function(){
    newGame();
    // console.log("game start");
});
// event listener for simon selection
$(".music-note").on("click", function(){
// sets var used in function parameters
    var note = $(this).attr("data-note");

    // Play note and console.log
    play(note);
    console.log("playing "+ note);  
    
    // Push note pattern to noteIntervals
    noteIntervals.push(note);
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
