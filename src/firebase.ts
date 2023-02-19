import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.apiKey,
	authDomain: "siete-colores.firebaseapp.com",
	projectId: "siete-colores",
	storageBucket: "siete-colores.appspot.com",
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
