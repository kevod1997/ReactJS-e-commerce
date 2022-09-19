import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyA69jR0FSZpidj9conF7mVqhxPIgTatlsM",
  authDomain: "pakispanes.firebaseapp.com",
  projectId: "pakispanes",
  storageBucket: "pakispanes.appspot.com",
  messagingSenderId: "687838226850",
  appId: "1:687838226850:web:6e58938483ed99194d2afb"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
     <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
