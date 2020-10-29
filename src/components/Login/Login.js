import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import {auth, provider} from "../../firebase";


function Login(props) {
  const signIn = () => {
      //google login authentication
      auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.worldvectorlogo.com/logos/discord-logo-color-wordmark-1.svg"
          alt="logo"
        />
      </div>
      <Button onClick={signIn}>Sign In with Google</Button>
    </div>
  );
}

export default Login;