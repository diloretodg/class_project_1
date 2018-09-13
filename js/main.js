
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

var noteIntervals = [];
// test song function
var songArr = [
    {note: "fAudio", sequence: 1},
    {note: "fAudio", sequence: 2},
    {note: "gAudio", sequence: 3},
    {note: "aAudio", sequence: 4},
    {note: "fAudio", sequence: 5},
    {note: "aAudio", sequence: 6},
    {note: "gAudio", sequence: 7},
    {note: "cAudio", sequence: 8},
    {note: "fAudio", sequence: 9},
    {note: "fAudio", sequence: 10},
    {note: "gAudio", sequence: 11},
    {note: "aAudio", sequence: 12},
    {note: "fAudio", sequence: 13},
    {note: "eAudio", sequence: 14},
]
function playSong(s){
    for (var i = 0; i < s.length; i ++) {
        setTimeout(function(index) {
            play(s[index].note)
        }.bind(null, i), (i+1) * 1000)
    }
}

$("#song-1").on("click", function() {
    playSong(songArr)
})

function musicSearch() {
    var queryURL = "http://api.musixmatch.com/ws/1.1/album.get?album_id=14250417&apikey=2b2479798b5987478a81a1e7f9eb0216";
    $.ajax({
        url: queryURL,
        method: "GET",
        data: {
            format: "jsonp",
            callback: "jsonp_callback"
        },
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
    }).then(function(response) {
        console.log(response);
    //     $("body").append($("<img>")
    //     .attr("src", response.message.body.track_list[0].track.album_coverart_100x100))
    // })
})}
musicSearch();

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

 