import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD7XxEOXialhW78saY8ObA_2lIq9LUoihY",
    authDomain: "costume-shop-ac23f.firebaseapp.com",
    projectId: "costume-shop-ac23f",
    storageBucket: "costume-shop-ac23f.appspot.com",
    messagingSenderId: "315707110012",
    appId: "1:315707110012:web:dbb9088d63d1b6ed1b8ff9",
  };

  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)