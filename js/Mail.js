const firebaseConfig = {
    apiKey: "AIzaSyABpD9fYlqIpbY_d-qkcZ3XBnbr9o_Wc98",
    authDomain: "mh-engineering-consultants7.firebaseapp.com",
    databaseURL: "https://mh-engineering-consultants7-default-rtdb.firebaseio.com",
    projectId: "mh-engineering-consultants7",
    storageBucket: "mh-engineering-consultants7.appspot.com",
    messagingSenderId: "840365883408",
    appId: "1:840365883408:web:c22226240772ce6d590a95",
    measurementId: "G-14N9622D2W"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
