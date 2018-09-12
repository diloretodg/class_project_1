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

// Played Notes Array
var noteIntervals = [];

// Song Notes Array
var musicNotes = [];

// on Click button for adding notes to noteIntervals Array
$(".music-note").on("click", function(event) {
    event.preventDefault();
    var grabId = this.id;
    noteIntervals.push(grabId);
    console.log(noteIntervals);

// Creates temp local object for holding note info
// Depends on what we're going to save to Firebase
    var savedNotes = {
      
    };
  
    // Uploads user's played notes to the database
    // IF we got with the local object, that would go in noteIntervals place
    database.ref().push(noteIntervals);
      // Logs everything to console
    console.log(noteIntervals);

// handles on click note plays acts like a loop should be in other file to turn on off.
$(document).on("click", ".music-note", function(){
    var note = $(this).attr("data-note");
    play(note);
    console.log("playing "+ note);   
    noteIntervals.push(note);
    });


// clear all playing notes
$("#reset").on("click", function() {
    for (var i = 0; i < noteIntervals.length; i++) {
        clearInterval(noteIntervals[i]);
    }
    console.log("timer reset");
})

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
})     

 