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

// ============== (SET FUNCTION) Add Username to Game Info column ====================
// Clear
var userScore = 0;
var username = "";

$("#add-user").on("click", function(event) {
    event.preventDefault();
     
    // Get username input
    username = $("#nameInput").val().trim();
    console.log($("#nameInput").val().trim());
    // Save changes to Firebase
    // ref set for display on index.html page
    database.ref().set({
        username: username,
        userScore: userScore
        /* might need a .push for lbscore to be captured */
    });
    // Create Firebase event for adding username to the database 
    database.ref().on("value", function(snapshot) {
        console.log(snapshot.val());
         // Store snapshot into a variable
        console.log(username);
         // Append the new row to the table
        $("#username").text(snapshot.val().username);
        $("#userScore").text(snapshot.val().userScore);
    });
});

// ===========(PUSH FUNCTION) LB data recordation  =======================================
$(document).on("click", ".submit", function(event){
    event.preventDefault();
    //creating LeaderBoard
    var LBName = $("#nameInputLB").val();
    var LBScore = $("#userScoreLB").val();
    // capturing leaderboard data for top scores
    var LBPlayer ={
        LBName: LBName,
        LBScore: LBScore      
    };
    //pushing into firebase 
    database.ref().push(LBPlayer)
    console.log(LBPlayer);
});
//database child_added for the inputed info from the new colaborator
database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());
    console.log( "lb name " + childSnapshot.val().LBName); 
    console.log("lb score " + childSnapshot.val().LBScore);
   
    // publishing data to the table
    $(".LBName").append("<tr><td><h4 class='ui image header'><img src='https://cdn4.vectorstock.com/i/1000x1000/14/58/pixel-avatar-male-cartoon-retro-game-style-vector-17311458.jpg' class='ui mini rounded image'>" + "<h6>" + childSnapshot.val().LBName + "</h6>" + "</td></tr>");
    //this should be in line with the userName data :
    $(".decendingScores").append("Score: " + childSnapshot.val().LBScore);    
},
//added errorObject function just in case something goes wonky
function(errorObject) {
    console.log("Errors handled: " + errorObject.code);

});

//==========NEED HELP HERE==================================================

// table function for leaderboard 
function limitingRows(){
    var maxRows= 11 //counting the header as 1 row to ensure we do not have 9 player data's displayed
    var table = $("#leaderBoard") //made a leaderboard id for tbody
    var rowsInTable = table.rows.length; 
    //trying to creat an if statement that that says once max is met stop inputing data
    if (rowsInTable > maxRows) {
        for (var i =1; i<maxRows; i++) {

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
