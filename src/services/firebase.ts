import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_API_KEY || "AIzaSyA6Z07X1aV5BA_dUflpyvx-aQVPh3tXOH0",
  authDomain:
    import.meta.env.VITE_AUTH_DOMAIN ||
    "gesture-drawing-sketchbook.firebaseapp.com",
  projectId: import.meta.env.VITE_PROJECT_ID || "gesture-drawing-sketchbook",
  storageBucket:
    import.meta.env.VITE_STORAGE_BUCKET ||
    "gesture-drawing-sketchbook.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID || "173531431786",
  appId:
    import.meta.env.VITE_APP_ID || "1:173531431786:web:6f9fd6e1cc79def5005b13",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
