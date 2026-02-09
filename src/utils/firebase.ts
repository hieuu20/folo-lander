import { initializeApp, getApp, getApps, } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANAHHKIMvR-UP0BuYLqhTqQuBQQz-7qbM",
  authDomain: "auth.knky.co",
  projectId: "knky-social",
  messagingSenderId: "873621663993",
  appId: "1:873621663993:web:36f1358c510d31e99c7228",
};

const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);