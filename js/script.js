// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "apiKey",
  authDomain: "mypage-243d2.firebaseapp.com",
  databaseURL: "https://mypage-243d2.firebaseio.com/",
  storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var fdb = firebase.database();

function writeUserData(userId, name, email) {
  fdb.ref('users/' + userId).set({
    username: name,
    email: email
  });
}

//writeUserData("2","jethro acosta","jethro@kayweb.com.au");
function getData()
{
    var user = fdb.ref('/users');
    user.on("value",function(snapshot){
       snapshot.val(); 
    });
}

getData();

function UpdateUserData(userId,name,email)
{
    var updates = {};
    updates['/users/'+userId] = {username : name,
                                email : email};
    fdb.ref().update(updates);
}

//UpdateUserData("1","Jethro pogi","jethropogi@gmail.com");

function removeData(userId)
{
    fdb.ref('/users/'+userId).remove();
}

//removeData("3");

function addUser(username,email)
{
    var usersListRef = fdb.ref("/users");
    var newUser = usersListRef.push();
    newUser.set({
        username : username,
        email : email
    });
}

//addUser("Jethro with auto key","jethro@autokey.com");

