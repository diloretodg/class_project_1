// musicxmatch:http://api.musixmatch.com/ws/1.1/ API key: 2b2479798b5987478a81a1e7f9eb0216


// lastFM API Key: bd35a525035b7b7a5873526c9bfd2a79
// http://www.last.fm/api/auth/?api_key=xxx

// example query url http://api.musixmatch.com/ws/1.1/track.search?q_artist=brad mehldau&q_track=bard&apikey=2b2479798b5987478a81a1e7f9eb0216


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

// ////////////////////////////////// testing musicxmatch API
  // MusixMatch Lyrics Loader
  var MMLyricsLoader = (function() {
    var _apiKey = "2b2479798b5987478a81a1e7f9eb0216",
        _apiRoot = "http://api.musixmatch.com/ws/1.1/",
        _drakeId = "440804",
        _viewsAlbumId = "23361516",
        _tracks = [];
    _lyrics = [];
  
    function hasTracks() {
      return _tracks.length > 0;
    }
  
    function fetchTracks() {
      $.ajax({
        type: 'GET',
        data: {
          apikey: _apiKey,
          album_id: _viewsAlbumId,
          format: "jsonp",
          callback: "jsonp_callback"
        },
        url: _apiRoot + "album.tracks.get",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function(data) {
          _tracks = data.message.body.track_list;
          fetchNewLyric();
        }
      });
    }
  
    function fetchNewLyric() {
      var i = Math.floor(Math.random() * (_tracks.length - 0 + 1));
      fetchLyrics(_tracks[i].track);
    }
  
    function fetchLyrics(track) {
      $.ajax({
        type: 'GET',
        data: {
          apikey: _apiKey,
          track_id: track.track_id,
          format: "jsonp",
          callback: "jsonp_callback"
        },
        url: _apiRoot + "track.snippet.get",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function(data) {
          var newLyric = data.message.body.snippet.snippet_body;
          _lyrics.push(newLyric);
          vm.track = track.track_name;
          vm.lyrics = newLyric;
        }
      });
    }
  
    function placeLyrics() {
      if ( !hasTracks() ) {
        fetchTracks();
      } else {
        fetchNewLyric();
      }
    }
  
    return {
      placeLyrics: placeLyrics
    }
  })();
  
    // Vue.js View Model
    var vm = new Vue({
      el: '#app',
      data: {
        lyrics: "",
        imgSrc: "",
        track: ""
      },
      methods: {
        regenerate: function() {
          GiphyImgLoader.placeGif();
          MMLyricsLoader.placeLyrics();
        }
      }
    });



    //  simon functionality
var thisSong = songArr;
var turn = 0;

var computerChoice = [];
var userChoice;



var simonGame = {
  turn: 0,
  currentSong: songArr,

  playerTurn = function(n) {
    if ()

  },


  gameStart = function(){
    simonGame.turn = 0;
    simonGame.currentSong = songArr;
    simonSays(currentSong);
  },
  simonSays = function(s) {
    for (var i = 0; i < turn; i ++) {
      setTimeout(function(index) {
          play(s[index].note)
      }.bind(null, i), (i) * 1000)
    }
  }
}
/////////////////////////////////////my simon game///////////////////////
var simonGame = $("#simon-game");
simonGame.on("click", function() {
  var game = {
    turn: 0,
    currentSong: songArr,
    correctNote: "",
    playerChoice: "",
  };
  function newGame(){
    game.currentSong = songArr;
    game.turn = 0;
  };
  function playerTurn(x) {
    game.playerChoice = x;
    gamecorrectNote = currentSong[turn];
    if(game.playerChoice == game.correctNote) {
      game.turn ++;
      console.log("correct!");
    }
  };
  $(".music-note").on("click", function(){
    var note = $(this).attr("data-note");
    play(note);
    playerTurn(note)
  });
    



// ///////////////////////////// example simon project/////////////////////////
var game = {
  count: 0,
  possibilities: ['#green','#blue', '#red', '#dark'],
  currentGame: [],
  player: [],
  sound:{
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'), 
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'), 
    dark: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'), 
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  },
  strict: false,
}

function clearGame() {
  game.currentGame = [];
  game.count = 0;
  addCount();
}

function newGame() {
  clearGame();
}

function strict() {
  if (game.strict == false) {
    game.strict = true;
    $('#strict').html('Is currently On').removeClass('btn-primary').addClass('btn-danger');
  } else {
    game.strict = false;
    $('#strict').html('Is currently Off').removeClass('btn-danger').addClass('btn-primary');
  }
  
  newGame();
}

function showMoves() {
  var i = 0;
  var moves = setInterval(function(){
    playGame(game.currentGame[i]);
    i++;
    if (i >= game.currentGame.length) {
      clearInterval(moves);
    }
  }, 600)
  
  clearPlayer();
}

function sound(name) {
  switch(name) {
    case'#green':
      game.sound.green.play();
      break;
    case '#blue':
      game.sound.blue.play();
      break;
    case '#red':
      game.sound.red.play();
      break;
    case '#dark':
      game.sound.dark.play();
      break;
  };
}

function playGame(field) {
  $(field).addClass('hover');
  sound(field);
  setTimeout(function(){
      $(field).removeClass('hover');
  }, 300);
}

function clearPlayer() {
  game.player = [];
}

function addToPlayer(id) {
  var field = "#"+id
  console.log(field);
  game.player.push(field);
  playerTurn(field);
} 

function playerTurn(x) {
  if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
    if(game.strict){
      alert('Try again! ...From scratch!');
      newGame();
    } else {
      alert('Wrong move! Try again!');
      showMoves();
    }
   } else {
      console.log('Good Move!');
      sound(x);
      var check = game.player.length === game.currentGame.length;
      if (check) {
        if(game.count == 20){
          alert('You won! Congrats.');
        } else {
          alert('Next round!');
          nextLevel();
        }
      }
    }
} 

function nextLevel() {
  addCount();
}

function generateMove(){
  game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
  //alert(game.currentGame.length);
  showMoves();
}

function addCount() {
  game.count++;
  $('#clickNumber').addClass('animated fadeOutDown');
  
  setTimeout(function(){
    $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
  }, 200);
  
  generateMove();
}

newGame();