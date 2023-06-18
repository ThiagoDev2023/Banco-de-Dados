
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyBx7J3clvdt4DeMXhzHERgcuwxiDva8dQA",
    authDomain: "projeto-piloto-108bd.firebaseapp.com",
    databaseURL: "https://projeto-piloto-108bd-default-rtdb.firebaseio.com",
    projectId: "projeto-piloto-108bd",
    storageBucket: "projeto-piloto-108bd.appspot.com",
    messagingSenderId: "176544091991",
    appId: "1:176544091991:web:7618fdcb05cdb2874db812"
  };
  firebase.initializeApp(firebaseConfig);
  function addUser(){
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose: "adicionar usuario"
    });
  }

