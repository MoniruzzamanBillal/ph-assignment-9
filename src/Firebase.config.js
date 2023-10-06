import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz_DRY1288KMXO6l_1sdfbN8cXtZbvHEg",
  authDomain: "event-management-assignm-f4091.firebaseapp.com",
  projectId: "event-management-assignm-f4091",
  storageBucket: "event-management-assignm-f4091.appspot.com",
  messagingSenderId: "487356923611",
  appId: "1:487356923611:web:8f3849304b3efd577996fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
