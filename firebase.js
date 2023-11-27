import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyAm7YQ51os2gEBjf_2yS8cYkejAKxAE5Mo",
    authDomain: "wdat-pneuservis.firebaseapp.com",
    projectId: "wdat-pneuservis",
    storageBucket: "wdat-pneuservis.appspot.com",
    messagingSenderId: "241101758211",
    appId: "1:241101758211:web:eca036b14049e4c8e1d336"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const reservations = collection(db, 'reservations');

document.addEventListener('submitEvent', function (e) { 
    let timeslotID = document.getElementById('reservation-time').value;
    addDoc(reservations, {timeslotID: timeslotID});
}, false);