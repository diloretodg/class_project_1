

// /////// Initialize Firebase ////////////
var config = {
    apiKey: "AIzaSyChswfB5HAG1cQcjkai_26cvtFHtYqpNYU",
    authDomain: "project1-a46e9.firebaseapp.com",
    databaseURL: "https://project1-a46e9.firebaseio.com",
    projectId: "project1-a46e9",
    storageBucket: "project1-a46e9.appspot.com",
    messagingSenderId: "1004479758001"
    };
    firebase.initializeApp(config);
    

    // sets up database reference
    var database = firebase.database();
    var leaderboard = database.ref("leaderboard");
    var currentUser = database.ref("currentUser");

    



    