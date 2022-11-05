import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

     API_KEY:process.env.REACT_FIREBASE_API_KEY,
     Auth_Domain:process.env.REACT_FIREBASE_Auth_Domain,
     Project_Id:process.env.REACT_FIREBASE_Project_Id,
     Storage_Bucket:process.env.REACT_FIREBASE_Storange_Bucket,
     Messaging_Sender_Id:process.env.REACT_FIREBASE_Messagin_Sender_Id,
     App_Id:process.env.REACT_FIREBASE_App_Id,  
     Measurement_Id:process.env.REACT_FIREBASE_Measurement_Id  
  };
firebase.initializeApp(config);

export const auth = firebase.auth();