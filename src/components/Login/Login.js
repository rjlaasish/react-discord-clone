import React, { useContext } from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { Auth } from "../../ContextApi/authContext";
import firebase from "../../firebase";
function Login() {
  const { state, dispatch } = useContext(Auth);

  const login = async () => {
    var response = await firebase.signIn();
    await dispatch({type:"LOGIN",payload:response})
    
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.worldvectorlogo.com/logos/discord-logo-color-wordmark-1.svg"
          alt="logo"
        />
      </div>
      <Button onClick={login}>Sign In with Google</Button>
    </div>
  );
}

export default Login;
