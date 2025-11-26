// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABWPZ9UT4FyH1562w9Jl-yb7LzQ6WYvjM",
  authDomain: "prepwise-27b8f.firebaseapp.com",
  projectId: "prepwise-27b8f",
  storageBucket: "prepwise-27b8f.firebasestorage.app",
  messagingSenderId: "690227111868",
  appId: "1:690227111868:web:a0df958f27629a17e66db9",
  measurementId: "G-B8Y6HSGDWJ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);