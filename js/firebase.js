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

// ============== Add Username to Game Info column ====================
// Clear username

var userScore = 0;
var username= "";

 //on Click button for adding username
 $("#add-user").on("click", function(event) {
    event.preventDefault();
     
    // Get username input
    var username = $("#nameInput").val().trim();
    var userScore = $("#userScore").val().trim();

    // Append user input
    $("#username").append(username);
    $("#userScore").append(userScore);
 });

 //on Click button for to append username and score to leaderboard
$("#newgame").on("click", function(event) {
    event.preventDefault();
     
    // Get username input
    var username = $("#nameInput").val().trim();
    var userScore = $("#userScore").val().trim();
    // Save changes to Firebase
    // ref set for display on index.html page

    var newPlayer ={
        name: username,
        score: userScore         
    };

    database.ref().push(newPlayer);
    console.log(newPlayer.name);
    console.log(newPlayer.score);
    // Create Firebase event for adding username to the database 
    // database.ref().on("value", function(snapshot) {
    //     console.log(snapshot.val());
    //      // Store snapshot into a variable
    //     console.log(username);
         // Append the new row to the table
        // $("#username").text(snapshot.val().username);
        // $("#userScore").text(snapshot.val().userScore);

        // Clear username input textbox
        $("#nameInput").val("");

        // appendUserData();
    });


  // ===========start file relating to database here ==============================================================
//this is the fuction for the form for the name and acct to be imported
// $(document).on("click", ".submit", function(event){
//     event.preventDefault();
//     //creating vars for id's should be placed in index.html
//     //for the form inputs to be captured for firebase
//     var name = $("#nameInput").val().trim();
//     var nickName = $("#nickNameInput").val().trim();
//     var score = $("#userScore").val();
    
//     //user input for firebase imagine breakdown will be:
//         // - user name and nickname will be input on index.html
//         // - score will be calculated possibly with a function on either time lasted or songs correctly completed.
//     var newPlayer ={
//         name: userName,
//         score: userScore         
//     };
//     //pushing into firebase 
//     database.ref().push(newPlayer)
//     console.log(newPlayer);

//     $("#nameInput").val("");
// });

    //database child_added for the inputed info from the new collaborator
    database.ref().on("child_added", function(childSnapshot){
        console.log(childSnapshot.val());
        // console.log(childSnapshot.val().userScore);
        
        var username = childSnapshot.val().name;
        var userScore = childSnapshot.val().score;

        console.log(username);
        console.log(userScore);
        // publishing data to the table
        // $(".previousPlayerName").append("<tr><td><h4 class='ui image header'><img src='https://cdn4.vectorstock.com/i/1000x1000/14/58/pixel-avatar-male-cartoon-retro-game-style-vector-17311458.jpg' class='ui mini rounded image'>" + "<h6>" + childSnapshot.val().userName + "</h6>" + "</td></tr>");
        // $(".previousPlayerNickName").append( " <td> " + childSnapshot.val().userNickName + "</td>");
        //this should be in line with the userName data :
                //$(".decendingScores").append("Score: " + childSnapshot.val().userScore);    
        var lbRow = $("<tr>").append(
            $("<td>").text(username),
            $("<td>").text(userScore),   
        );

        // Append <tr> to table
        $("#leaderboard-table > tbody").append(lbRow);
    });           
    
// //added errorObject function just in case something goes wonky
// function(errorObject) {
//     console.log("Errors handled: " + errorObject.code);

// });

//==========NEED HELP HERE==================================================

// table function for leaderboard 
// function limitingRows(){
//     var maxRows= 11 //counting the header as 1 row to ensure we do not have 9 player data's displayed
//     var table = $("#leaderBoard") //made a leaderboard id for tbody
//     var rowsInTable = table.rows.length; 
//     //trying to creat an if statement that that says once max is met stop inputing data
//     if (rowsInTable > maxRows) {
//         for (var i =1; i<maxRows; i++) {

//         }
//     }
// }
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
