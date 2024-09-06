

import{auth,db} from "./firebase.mjs";
// import { docRef } from "./script.js";
import { collection,getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

var add_data = document.getElementById("data-add")


const querySnapshot = await getDocs(collection(db, "reservation table"));
querySnapshot.forEach((docRef) => {
    
    let details = docRef.data()

var reservation_details = document.createElement("div")
reservation_details.className = "reservation-details"
add_data.appendChild(reservation_details)

    console.log(details);


reservation_details.innerHTML += `
<div id="details-div" class="details-div">
  <p>EMAIL : ${details.email}</p>
 <p>NAME : ${details.name}</p>
 <p>PHONE NUMBER : ${details.phone}</p>
 <p>DATE : ${details.date}</p>
 <p>TIME : ${details.time}</p>
 <p>PEOPLE : ${details.people}</p>
 <button id="go-back">GO BACK</button><button  id="del">DELETE</button>

         </div>
         <div class="chef-img">
             <img src="../src/img/chef-cartoon.png" alt="">
         </div>`
         console.log(docRef.id);
         

console.log(reservation_details);


  });
 const goBack = (e)=>{
    if(e.target.innerHTML == "GO BACK"){
        window.location.href = "../index.html"
    }
 }

  add_data.addEventListener("click",goBack)