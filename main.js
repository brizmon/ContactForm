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

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputValues('name');
    var company = getInputValues('company');
    var email = getInputValues('email');
    var phone = getInputValues('phone');
    var message = getInputValues('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputValues(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}