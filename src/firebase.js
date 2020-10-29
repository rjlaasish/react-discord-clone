import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIWs80hoW9dJ45JcJLRvQltjCJldFKNTg",
  authDomain: "react-discord-clone-a163a.firebaseapp.com",
  databaseURL: "https://react-discord-clone-a163a.firebaseio.com",
  projectId: "react-discord-clone-a163a",
  storageBucket: "react-discord-clone-a163a.appspot.com",
  messagingSenderId: "383230652350",
  appId: "1:383230652350:web:902d3c47775587c863d3ef",
  measurementId: "G-40ZKBEBH76"
};



const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;

// class Firebase {
//   constructor() {
//     firebase.initializeApp(firebaseConfig);
//     this.auth = firebase.auth();
//     this.db = firebase.firestore();
//     this.storage = firebase.storage();
//     this.provider = new firebase.auth.GoogleAuthProvider();
//   }

//   // google login
//   signIn = async () => {
//     var auth = firebase.auth();
//     var provider = new firebase.auth.GoogleAuthProvider();
//     //google login authentication
//     const response = await auth
//       .signInWithPopup(provider)
//       .catch((err) => alert(err.message));
//     return response;
//   };
// };

// //logout
//  const logOut= async ()=>{
//   const logout = await firebase.auth().signOut().catch(err => {
//       console.log(err);
//       return err;
//   });
//   return logout;
// }


// export default new Firebase();




