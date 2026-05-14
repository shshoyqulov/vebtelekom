import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAyMSRW09nAceTkTF3XdzT9n700Pi8q_5c",
    authDomain: "telekom-online-test.firebaseapp.com",
    projectId: "telekom-online-test",
    storageBucket: "telekom-online-test.firebasestorage.app",
    messagingSenderId: "1070478154657",
    appId: "1:1070478154657:web:7bfb82966c6c4481f709e0",
    measurementId: "G-6TJJB17LVB"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.natijaniSaqlash = async function (data) {

    try {

        await addDoc(collection(db, "natijalar"), {

            ism: data.ism,
            mavzu: data.mavzu,
            togri: data.togri,
            jami: data.jami,
            foiz: data.foiz,
            sana: serverTimestamp()

        });

        alert("Natija saqlandi!");

    } catch (error) {

        console.error(error);

        alert("Xatolik yuz berdi");

    }

};