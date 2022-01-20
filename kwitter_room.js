
const firebaseConfig = {
  apiKey: "AIzaSyCKADPBwcEqRI0dTJLBCT1wYFqNIpANIIU",
  authDomain: "p-94-56bf4.firebaseapp.com",
  databaseURL: "https://p-94-56bf4-default-rtdb.firebaseio.com",
  projectId: "p-94-56bf4",
  storageBucket: "p-94-56bf4.appspot.com",
  messagingSenderId: "70850288444",
  appId: "1:70850288444:web:0b6ffbaea9128005a2dc39"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
function  add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose: " creating room name"});
      localStorage.setItem("room_name",room_name);
      window.location="Kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name- "+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='rediectToRoomName(this.id)'>#"+room_name+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      function rediectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="Kwitter_page.html";
      }
//End code
      });});}
getData();