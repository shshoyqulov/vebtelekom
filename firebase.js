import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
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

function tozalash(matn) {
    return matn
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "_")
        .replace(/[^a-zA-Z0-9_а-яА-ЯёЁўқғҳЎҚҒҲ]/g, "");
}

window.natijaniSaqlash = async function (data) {
    try {
        const talabaId = tozalash(data.ism);
const guruhId = tozalash(data.guruh);
const mavzuId = tozalash(data.mavzu);

const documentId = guruhId + "_" + talabaId + "_" + mavzuId;

        const natijaRef = doc(db, "natijalar", documentId);
        const oldingiNatija = await getDoc(natijaRef);
console.log("Talaba:", data.ism);
console.log("Mavzu:", data.mavzu);
console.log("Document ID:", documentId);
console.log("Oldin bormi:", oldingiNatija.exists());
        if (oldingiNatija.exists()) {
            alert("Siz bu testni avval topshirgansiz. Qayta topshirishga ruxsat berilmaydi.");
            return false;
        }

       await setDoc(natijaRef, {
    ism: data.ism,
    guruh: data.guruh,
    mavzu: data.mavzu,
    togri: data.togri,
    jami: data.jami,
    foiz: data.foiz,
    baho: data.baho,
    sana: serverTimestamp()
});

        alert("Natija saqlandi!");
	return true;

    } catch (error) {
        console.error(error);
        alert("Natijani saqlashda xatolik yuz berdi.");
    }
};