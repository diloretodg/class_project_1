$(document).ready(function(){

    //random number set to i
    var i = (Math.floor(Math.random() * songBank.length));
    // relevant game val all initialized
    // var game = {
    // turn: 0,
    // sequence: 0,
    // currentSong: songBank[i-1].songArr,
    // songTitle: songBank[i-1].songName,
    // playerChosen: [],
    // correctNote: "",
    // playerChoice: "",
    // yourTurn: false,
    // gameStart: false,
    // score: 0, 
    // simonSong: null
    // };
    

    $(".toggle").hide();
    $("#answer-input").hide();
    $("#youTube").hide();

   

    $("#collapse").on("click", function(){
        $(".toggle").slideToggle('fast');
    });

    $(".toggle").on("mouseleave", function(){
        $(".toggle").slideUp('fast');
    });

    $(document).on("click", "#songButton", function(){
        event.preventDefault();

        if("songButton"){
            $(".songGuess").fadeOut();
            $("#answer-input").fadeIn(2000);
        }
            
    });

    $(document).on("click", "#answerButton", function(){
        event.preventDefault();
        var answer=$("#answerSong").val().trim();
        console.log(answer);
         $("#answerSong").val("");

         // If answer is correct
         if(answer==game.songTitle){
             $("#answer-input").hide();
             console.log(game.songTitle);
             console.log("That's right!");
             alert("fuck yeah! that's right!");
             // Add bonus points for guessing song
             game.score = game.score + 500;
             $("#userScore").html(game.score);
            // get youtube video
            document.getElementById("youtube").src = game.songYoutube;

         }// If incorrect
         else{
             
             console.log("sorry!");
             $("#answer-input").hide();
            //  $("#youTube").slideDown();
            document.getElementById("youTube").src = game.songYoutube;
         }


    });


});

