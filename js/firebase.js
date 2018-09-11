// ===============initial firebase============================================
<script src="https://www.gstatic.com/firebasejs/5.4.2/firebase.js"></script>

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

/* ============= initial pseudo code here ===================
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

//this is the fuction for the form for the name and acct to be imported
$(document).on("click", ".submit", function(event){
    event.preventDefault();
    //creating vars for id's (not yet created on the html)
    //for the form inputs to be captured for firebase
    var name = $("#nameInput").val().trim();
    var github_acct = $("#github_acct").val().trim();
    //user input for firebase object
    var newColaborator ={
        userName: name,
        userGithub: github_acct
    };
    //pushing into firebase
    database.ref().push(newColaborator);
    console.log(newColaborator);
});
//database child_added for the inputed info from the new colaborator
database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());
    console.log(childSnapshot.val().userName);
    console.log(childSnapshot.val().userGithub);
});
//Not tested yet being this is only a js file but this 
//should if the classes are created on the html be able to publish 
//the user's info (most resent user at this juncture - edit later)
$(".uDisplay").text(childSnapshot.val().userName);
$(".ghDisplay").text(childSnapshot.val().userGithub);

//good idea to consider adding moment.js call to the time function here
//or in another js file maybe labeled moments.js add this script call here

