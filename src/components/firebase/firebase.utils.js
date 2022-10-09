import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyC85pWs7E7XL8ztkIN1Q6wcuRRlTdtNUxs",
    authDomain: "kartuals-db.firebaseapp.com",
    projectId: "kartuals-db",
    storageBucket: "kartuals-db.appspot.com",
    messagingSenderId: "919242701174",
    appId: "1:919242701174:web:0287444e0449e3dcea2257",
    measurementId: "G-3K1HG5W5MC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    


    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message)
        }
    }

    return userRef;
};

export const convertCollectionsSnapShotToMap = collections =>{
    const transformedCollection = collections.docs.map(doc =>{
        const {title, items} = doc.data();
        return{
            routeName: encodeURI(title.toLowerCase()),
            title,
            id: doc.id,
            items
        }

    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase;