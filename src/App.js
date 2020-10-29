import React, {useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import {auth} from "./firebase";
import Chat from './components/Chat/chat'
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch(selectUser);
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        //user is logged in
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        }))
      }else {
        //user is not logged in
        dispatch(logout());
      }
    })
  },[dispatch])
  return (
    <div className="app">
      {user ? (
        <>
          {/*Sidebar*/}
          <Sidebar />
          {/*Chat*/}
          <Chat/>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;