import { FormatListNumberedRtl } from "@material-ui/icons";
import { useContext } from "react";
import "./App.css";
import Chat from "./components/Chat/chat";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { Auth } from "./ContextApi/authContext";

function App() {
  const { state, dispatch } = useContext(Auth);
  console.log(state);
  return (
    <div className="app">
       {state.user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )} 
    </div>
  );
}

export default App;
