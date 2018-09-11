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








// handles on click note plays acts like a loop should be in other file to turn on off.
$(document).on("click", ".music-note", function(){
    var note = $(this).attr("data-note");
    play(note);
    console.log("playing "+ note);   
    noteIntervals.push(setInterval(function() {play(note) }, 2000))});


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
 