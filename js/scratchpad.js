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
