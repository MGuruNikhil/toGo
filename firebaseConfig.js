import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMANBoTHkV3UGU_DxGtx2pHDG7Apaqfr8",
    authDomain: "togo-ee66d.firebaseapp.com",
    projectId: "togo-ee66d",
    storageBucket: "togo-ee66d.appspot.com",
    messagingSenderId: "120161114525",
    appId: "1:120161114525:web:7954b5ef3fa8d2021a7774",
    measurementId: "G-1SBL8DC9GP"
}
if(!getApps().length) {
    const app = initializeApp(firebaseConfig);
}
export const auth = getAuth(app);
