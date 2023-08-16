// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnQuIII3jEc98OcC--ZqyPA2--rpBJzkM",
  authDomain: "a-la-romana-cfadf.firebaseapp.com",
  projectId: "a-la-romana-cfadf",
  storageBucket: "a-la-romana-cfadf.appspot.com",
  messagingSenderId: "140437336042",
  appId: "1:140437336042:web:c29580c585f9d7435c8c93",
  measurementId: "G-5JWTTD26Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const prodsCollection = collection(db, "product")

export const getProductById = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const response= await getDoc(docRef)
    return {id, ...response.data()}
  } catch (error) {
    return error
  }
}