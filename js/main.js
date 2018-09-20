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

//   ======= capturing current userdata after submission of EndGameButton for FIREBASE =========
var currentUser = {
    username:"",
    finalScore:""
}

//============ end of capturing current userdata after submission of EndGameButton for FIREBASE ========

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

// ========== win level/end game function ============================how is this different than ln==============
function winLevel(){
    if (game.turn===15){    //if turn equals to 15
        game.turn =false;    //stopping gamers turn
        //get all notes correct
        //correctly guess song from tune
    } else {
        game.turn ++;       //continue calulating game turn (up intil 15);
        console.log("current game turn is " + game.turn);
    }
}
//===============end of win leve/end game function ===================================

//===============next level button ===================================================
    $("<button>").on("click", function nextLevel(){
        //clear song data
        //set orin var game prop val
        //grab youtube/music data
        // append to DOM
    })
//===============end of next level button function ====================================
// ==============game over function ===================================================
    function gameOver(){
        // if (){       //if wrong note hit then this will happen
        //              // for(var = i, i>=game. songarr.length) { };
        // }
                        //function should include stop game player turn. game.turn === false (or clear);
                        //set userScore to FB database ref ln132
    }
//===============end of game over function=============================================

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
            game.score = game.score + 100; //added score 
            $("#userScore").html(game.score);
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

//===========***maybe add if else statement here if game turn exceeds length of song array then this happens***=============
        // if(game.turn > songArr.length){     //if game turn is larger then songArr.length.

        // }else {
        //     game.turn ++;                   //else game.turn continues to count up.
        // };
//===========ending of end game turn length exceeds song array ==============================================================

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
// ======YOUTUBE API ==========================================================
  //ref: https://developers.google.com/youtube/iframe_api_reference
// 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
//   ==================end of YOUTUBE API======================================