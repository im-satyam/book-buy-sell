import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { createContext, useContext, useEffect, useState } from "react";
const FirebaseContext = createContext(null)
const firebaseConfig = {
    apiKey: "AIzaSyB5edu9MtwmDFgEc0x-oaaygOIjKrXoGcw",
    authDomain: "bookify-2c82b.firebaseapp.com",
    projectId: "bookify-2c82b",
    storageBucket: "bookify-2c82b.appspot.com",
    messagingSenderId: "1028034390578",
    appId: "1:1028034390578:web:f3a2db8ed5646078bfaa2b"
  };
export const useFirebase= ()=>useContext(FirebaseContext) 
const firebaseApp= initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const fireStore= getFirestore(firebaseApp)
const storege = getStorage(firebaseApp)
const googleProvider= new GoogleAuthProvider();
export const FirebaseProvider = (props)=>{

  const [user, setuser] = useState(null)
  
    useEffect(() => {
      onAuthStateChanged(firebaseAuth, user=>{
        if(user) setuser(user)
            else setuser(null)
      })
    }, [])
    
    const signUpUserWithEmailandPassword=(email,password)=>
        createUserWithEmailAndPassword(firebaseAuth,email,password)
    const signinuserwithEmailandPass=(email,password)=> signInWithEmailAndPassword(firebaseAuth,email,password)
   const signinwithgoogle=()=> signInWithPopup(firebaseAuth,googleProvider)

   const handelNewListing=async(name, isbnNumber,price,coverPic)=>{
              const imageref= ref(storege, `uploads/images/${Date.now()}-${coverPic.name}`)
             const uploadResult= await uploadBytes(imageref,coverPic)
             return await addDoc(collection(fireStore,"books"), {name, isbnNumber, price, imageURL: uploadResult.ref.fullPath, userId: user.uid, 
              userEmail: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL
             })
   }
   const listallbooks= ()=>{
    return getDocs(collection(fireStore, "books"));
   }
   const getImageUrl =(path)=>{
    return getDownloadURL(ref(storege, path))
   }
   const isLoggedin= user? true:false
    return(
        <FirebaseContext.Provider value={{signUpUserWithEmailandPassword,signinuserwithEmailandPass,signinwithgoogle,isLoggedin, handelNewListing, listallbooks,getImageUrl}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
