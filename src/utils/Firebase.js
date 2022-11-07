import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {

    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_Auth_Domain,
    projectId:process.env.REACT_APP_FIREBASE_Project_Id,
    storageBucket:process.env.REACT_APP_FIREBASE_Storange_Bucket,
    messagingSenderId:process.env.REACT_APP_FIREBASE_Messagin_Sender_Id,
    appId:process.env.REACT_APP_FIREBASE_App_Id,  
    measurementId:process.env.REACT_APP_FIREBASE_Measurement_Id  
};
firebase.initializeApp(config);

export const auth = firebase.auth();