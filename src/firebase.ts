import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
	CACHE_SIZE_UNLIMITED,
	clearIndexedDbPersistence,
	enableIndexedDbPersistence,
	getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.apiKey,
	authDomain: "siete-colores.firebaseapp.com",
	projectId: "siete-colores",
	storageBucket: "siete-colores.appspot.com",
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId,
	persistence: true,
	cacheSizeBytes: CACHE_SIZE_UNLIMITED,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

clearIndexedDbPersistence(db);
console.log("cache deleted");
enableIndexedDbPersistence(db);
