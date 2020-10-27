import "./App.css";
import Chat from "./components/Chat/chat";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>
      {/* Chat section */}
      <Chat/>
    </div>
  );
}

export default App;
