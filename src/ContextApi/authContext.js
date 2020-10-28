import React from "react";
import { firebaseAuth } from "../Reducers/authReducer";
//firebaseauth reducer

export const Auth = React.createContext();
const initialState = {
  user: {},
};

export const AuthProvider = (props) => {
  const [state, dispatch] = React.useReducer(firebaseAuth, initialState);
  const value = { state, dispatch };
  console.log(state);
  return <Auth.Provider value={value}>{props.children}</Auth.Provider>;
};
