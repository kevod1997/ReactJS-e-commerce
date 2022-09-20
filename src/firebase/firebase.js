import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyA69jR0FSZpidj9conF7mVqhxPIgTatlsM",
        authDomain: "pakispanes.firebaseapp.com",
        projectId: "pakispanes",
        storageBucket: "pakispanes.appspot.com",
        messagingSenderId: "687838226850",
        appId: "1:687838226850:web:6e58938483ed99194d2afb"
}

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)