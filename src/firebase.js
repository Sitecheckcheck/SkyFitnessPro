import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIRBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRBASE_STORAGE_BASCET,
  messagingSenderId: process.env.REACT_APP_FIRBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRBASE_APP_ID
};

 export const app = initializeApp(firebaseConfig);