

import{auth,db} from "./firebase.mjs";
import { getFirestore,collection,addDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

var email = document.getElementById("email")
var name = document.getElementById("name")
var phone = document.getElementById("phone")
var people = document.getElementById("people")
var date = document.getElementById("date")
var time = document.getElementById("time")
var bookTable = document.getElementById("book-table")

var check_details = document.getElementById("check-details")


bookTable.addEventListener("click", async function() {
if(email.value == "" || name.value == "" || phone.value == "" || people.value == "" || date.value == "" || time.value == ""){
  Swal.fire({
    icon: "error",
    title: "oops..!!",
    text: "Please fill your details",
  });
}
else{
    try {
       
        const docRef = await addDoc(collection(db, "reservation table"), {
          email: email.value,
          name: name.value,
          phone: phone.value,
          people: people.value,
          date: date.value,
          time: time.value,
        });
        Swal.fire({
          icon: "success",
          title: "THANK YOU",
          text: "Your table is booked",
        });
        console.log("Document written with ID: ", docRef.id);
        emptyFields()
    }
     catch (e) {
      console.error("Error code: ", e);
      
    }
  }
});
const emptyFields = () =>{
email.value = ""
phone.value = ""
name.value = ""
date.value = ""
time.value = ""
people.value = ""
}

  check_details.addEventListener("click",function(){
   
    window.location.href = "../src/reservation.html"
    
  })


