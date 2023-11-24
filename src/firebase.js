import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDk5Wrn5WcUYWQOC-baPciuGD-IPxKuFoo",
    authDomain: "fitnessappteam4.firebaseapp.com",
    databaseURL: "https://fitnessappteam4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fitnessappteam4",
    storageBucket: "fitnessappteam4.appspot.com",
    messagingSenderId: "87977548772",
    appId: "1:87977548772:web:8f1ca7bba6534bf00645f1"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);