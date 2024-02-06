import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Start of code from google firebase authentication

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjBfAJ9aucGSZGEDFM1CWRWg7Vs7mt4IA",
  authDomain: "my-react-blog-kip-dev.firebaseapp.com",
  projectId: "my-react-blog-kip-dev",
  storageBucket: "my-react-blog-kip-dev.appspot.com",
  messagingSenderId: "794623195857",
  appId: "1:794623195857:web:83662b60b4b38260ea63f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);   

//end of code from google firebase authentication



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
