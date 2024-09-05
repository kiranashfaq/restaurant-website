
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

  import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDGsgJ4luJWUqqkCQJAvKi9BEWVdsdce0c",
    authDomain: "to-do-list-924df.firebaseapp.com",
    projectId: "to-do-list-924df",
    storageBucket: "to-do-list-924df.appspot.com",
    messagingSenderId: "643094949636",
    appId: "1:643094949636:web:b9e925741f258e06c9ea51"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

    const auth = getAuth();
export{
    db,
   auth 
}