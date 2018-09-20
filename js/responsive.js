$(document).ready(function(){

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

         if(answer){
             $("#answer-input").hide()
             $("#youTube").slideDown();
         }


    });

});

