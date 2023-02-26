import { initializeApp } from "firebase/app";
import {
	CACHE_SIZE_UNLIMITED,
	clearIndexedDbPersistence,
	enableIndexedDbPersistence,
	getFirestore,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	measurementId: process.env.REACT_APP_measurementId,
	persistence: true,
	cacheSizeBytes: CACHE_SIZE_UNLIMITED,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

/* Cache */
clearIndexedDbPersistence(db);
enableIndexedDbPersistence(db);
auth.signOut();
