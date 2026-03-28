import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-eI2SLwG7xaeT-2KNF5csXdS0daa68v8",
  authDomain: "techcreatez-f22de.firebaseapp.com",
  databaseURL: "https://techcreatez-f22de-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "techcreatez-f22de",
  storageBucket: "techcreatez-f22de.firebasestorage.app",
  messagingSenderId: "740625055892",
  appId: "1:740625055892:web:e9a1f02acee31276ec7481"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.querySelector(".order-form").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const newOrderRef = push(ref(db, "orders"));

  set(newOrderRef, {
    name: name,
    email: email,
    number: number,
    service: service,
    message: message
  });

  alert("Order Sent!");
});
