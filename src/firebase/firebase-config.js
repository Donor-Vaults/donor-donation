import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCVWBpzqEbSGqe_1J0vl42dCUhspX4i44A",
    authDomain: "donor-a9cf2.firebaseapp.com",
    databaseURL: "https://donor-a9cf2-default-rtdb.firebaseio.com",
    projectId: "donor-a9cf2",
    storageBucket: "donor-a9cf2.appspot.com",
    messagingSenderId: "323178094716",
    appId: "1:323178094716:web:60f21fd3e856275b5c69f9",
    measurementId: "G-66C5QEK38T"
  };

export const firebaseApp = initializeApp(firebaseConfig);