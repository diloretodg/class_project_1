// ===============initial firebase==============================================================================
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

  var database = firebase.database();

  // ===========start file relating to database here ==============================================================
//this is the fuction for the form for the name and acct to be imported
$(document).on("click", ".submit", function(event){
    event.preventDefault();
    //creating vars for id's should be placed in index.html
    //for the form inputs to be captured for firebase
    var name = $("#nameInput").val().trim();
    var nickName = $("#nickNameInput").val().trim();
    // var score = $("#scoreTracker").val();
    
    //user input for firebase imagine breakdown will be:
        // - user name and nickname will be input on index.html
        // - score will be calculated possibly with a function on either time lasted or songs correctly completed.
    var newPlayer ={
        userName: name,
        userNickName: nickName,
        // userScore: score          NOT PUSHING SCORE YET, need to figure out how to do this.
    };
    //pushing into firebase 
    database.ref().push(newPlayer)
    console.log(newPlayer);
});
//database child_added for the inputed info from the new colaborator
database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());
    console.log(childSnapshot.val().userName); 
    console.log(childSnapshot.val().userNickName);
    // console.log(childSnapshot.val().userScore);
   
    // publishing data to the table
    $(".previousPlayerName").append("<tr><td><h4 class='ui image header'><img src='https://cdn4.vectorstock.com/i/1000x1000/14/58/pixel-avatar-male-cartoon-retro-game-style-vector-17311458.jpg' class='ui mini rounded image'>" + "<h6>" + childSnapshot.val().userName + "</h6>" + "</td></tr>");
    $(".previousPlayerNickName").append( " <td> " + childSnapshot.val().userNickName + "</td>");
    //this should be in line with the userName data :
            //$(".decendingScores").append("Score: " + childSnapshot.val().userScore);    
},
//added errorObject function just in case something goes wonky
function(errorObject) {
    console.log("Errors handled: " + errorObject.code);

});



// =========in ref line 23 ordering by child for score input=========================================
//see https://firebase.google.com/docs/database/web/lists-of-data for sort date info

    // var playerId = firebase.auth().currentUser.uid;
    // var topScoreRef = firebase.database().ref('newPlayer/' + playerId).orderByChild('score');

//========end of ordering by child for score input ====================================





//==========NEED HELP HERE==================================================
// table function for leaderboard 
//https://firebase.google.com/docs/database/web/lists-of-data look under sort data, filter data: limitToFirst() or equalTo() methods
//attempt to use firebase to limit results to top 10:

// var topTen = //??????
// newPlayer = firebase.database().ref("score").orderbyValue(topTen) //not sure what to set equalTo() or orderbyValue() to. 


//attempt using JS ONLY not using firebase to limit results:
function limitingRows(){
    var maxRows= 11 //counting the header as 1 row to ensure we do not have 9 player data's displayed
    var table = $("#leaderBoard") //made a leaderboard id for tbody
    var rowsInTable = table.rows.length; 
    //trying to creat an if statement that that says once max is met stop inputing data
    if (rowsInTable > maxRows) {
        for (var i =0; i<maxRows; i++) {

        }
    }
}
//limitingRows();
//=======end of limiting rows function ========================================





//Not tested yet being this is only a js file but this 
//should if the classes are created on the html be able to publish 
//the user's info (most resent user at this juncture - edit later)
// ==========commented these out only for testing =================
// $(".uNameDisplay").text(childSnapshot.val().userName);
// $(".uNickNameDisplay").text(childSnapshot.val().userNickName);
// $(".scoreDisplay").text(childSnapshot.val().userScore);







/* ===================================== initial pseudo code here ================================================================
- may need a function that intializes authentication might use firebase to do this
- will need to have a Ajax call for the github api so that the autorization will connect to authorize users and link profiles to monitor
    - ex: GET https://api.github.com/user?access_token=...
    - might be the best way to go about this see these links for assistance:
        - fire base auth info: https://firebase.google.com/products/auth/
        - documentation on how to set up auth: https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/
        - this youtube video seemed helpful: https://www.youtube.com/watch?v=LiUpK6wBMcg
        - does have some limits: https://firebase.google.com/docs/auth/limits 
    - for time sake, I will create a basic form that inports name and github acct profile name (or link have not decided yet)
===========================end of pseudo code (DELETE WHEN CODED)=====================================================*/
