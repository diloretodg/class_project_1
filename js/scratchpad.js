
// // pulls key id
// function reply_click(clicked_id){
//     console.log(clicked_id);
//   };
  
  
//   $('#c').mouseover(function(){
//       cNote.currentTime = 0;
//       cNote.play();
//   });
//   //allows for quick clicks to trigger each time
//   function play() {
//     var audio = document.getElementById('');
//     if (audio.paused) {
//         audio.play();
//     }else{
//         audio.currentTime = 0
//     }
//   };
  
//   function cPlay(){
//     var audio = document.getElementById('cAudio');
//     if (audio.paused) {
//         audio.play();
//     }else{
//         audio.currentTime = 0
//     }
//   };
//   function dPlay(){
//     var audio = document.getElementById('dAudio');
//     if (audio.paused) {
//         audio.play();
//     }else{
//         audio.currentTime = 0
//     }
//   };
//   function ePlay(){
//     var audio = document.getElementById('eAudio');
//     if (audio.paused) {
//         audio.play();
//     }else{
//         audio.currentTime = 0
//     }
//   };
//   function fPlay(){
//     var audio = document.getElementById('fAudio');
//     if (audio.paused) {
//         audio.play();
//     }else{
//         audio.currentTime = 0
//     }
//   };
//   function gPlay(){
//     var audio = document.getElementById('gAudio');
//     if (audio.paused) {
//         audio.play();
//     }else{
//         audio.currentTime = 0
//     }
//   };
//   function aPlay(){
//     var audio = document.getElementById('aAudio');
//     if (audio.paused) {
//         audio.play();
//     }else{
//         audio.currentTime = 0
//     }
//   };
//   function bPlay(){  var audio = document.getElementById('bAudio');
//     if (audio.paused) {
//         audio.play();
//     }else{
//         audio.currentTime = 0
//     }
//   };


//    ///////////////////////////////////////////////////////////////////////////// ////////////////////////////////////

   
// var notesArr = [
//     {name:"c", el:function() },
//     {name:"d", el:function },
//     {name:"e", el:function },
//     {name:"f", el:function },
//     {name:"g", el:function },
//     {name:"a", el:function },
//     {name:"b", el:function }
// ]

// var file = ["mp3","wav", "ogg"]


// function loadAudio(x){
//     file.indexOf(x)
//     var audio = $("<audio>");
//     var audioSrc = $("<source>")
//     .attr("type","audio/" + file[file.indexOf(x)]);
//     for (var i = 0; i < notesArr.length; i ++) {
//         var mediasrc = "media/notes_" + x + "/" + notesArr[i].name + "_note."+file[file.indexOf(x)];
//         audio.attr("id", "note-" + notesArr[i].name);
//         audioSrc.attr("src", mediasrc);
//         audio.append(audioSrc);
//         $("head").append(audio);
//     }
// }

// function renderbuttons(){
//     $("#instrument").empty();
//     for(var i=0; i < notesArr.length; i++) {
//         notesArr[i].el = $("<a>")
//         .attr("data-file-type", file[file.indexOf(x)])
//         .attr("data-note", notesArr[i].name)
//         .attr("class","box")
//         .attr("id", notesArr[i].name);
//         $("#instruments").append(notesArr[i].el)
//     }
// }

// function playNote(){
//     var audio = $(this) ;
//     if (audio.paused) {
//         audio.play();
//     }else{
//         audio.currentTime = 0
//     }
// }
// loadAudio(mp3);
// renderbuttons();

function gameClock(c, fn) {
    var gameTimer = $("<div>").attr("class", "game-timer");
    triviaAnswers.append(gameTimer);
    var counter = c;
    gameTimerCountdown = setInterval(function(){
        gameTimer.text(counter);
        counter--;
    if (counter < 3) {
        gameTimer.attr("class", "game-timer text-danger");
    };
    if (counter == -1) {
        gameTimer.empty();
        clearInterval(gameTimerCountdown);
        fn();
      };
    }, 1000);
}

timedNote = setinterval(function() {
    play(c); 
}, 5000);
  