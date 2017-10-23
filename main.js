// Initialize Firebase
var config = {
    apiKey: "AIzaSyANWy3zSJiIg_B1GTq_5Fy3lrkjYszZuIo",
    authDomain: "form-b07bd.firebaseapp.com",
    databaseURL: "https://form-b07bd.firebaseio.com",
    projectId: "form-b07bd",
    storageBucket: "form-b07bd.appspot.com",
    messagingSenderId: "238200157645"
  };
  firebase.initializeApp(config);



// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputValues('name');
    var company = getInputValues('company');
    var email = getInputValues('email');
    var phone = getInputValues('phone');
    var message = getInputValues('message');

    console.log(name)
}

// Function to get form values
function getInputValues(id){
    return document.getElementById(id).value;
}