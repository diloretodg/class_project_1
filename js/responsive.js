$(document).ready(function(){

    $(".toggle").hide();
    $(".songGuess").hide();
    $("#answer-input").hide();

   

    $("#collapse").on("click", function(){
        $(".toggle").slideToggle();
    });

    $(document).on("click", "#songButton", function(){
        event.preventDefault();

        $.each($("input[name = 'songInput']:checked"), function(){

            console.log("checked");
            if ( $(this).val()==="yes" ){
                console.log('yes checked');
             $("#answer-input").show();
            }else{

                console.log("no");
                
            }

            $(".songGuess").hide();

    });
});

         $(document).on("click", "#answerButton", function(){
            event.preventDefault();
            var answer=$("#answerSong").val().trim();
            console.log(answer);
             $("#answerSong").val("");


        });

    





});