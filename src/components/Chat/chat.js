import React, { useEffect, useState } from "react";
import ChatHeader from "../ChatHeader";
import "./style.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ChatMessage from "../MessageComponent";
import { useSelector } from "react-redux";
import db from "../../firebase";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";
import { selectChannelId, selectChannelName } from "../../features/appSlice";


export default function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="chat">
       <ChatHeader channelName={channelName} />
      <div className="chat__messages">
      {messages.map((message)=>(
        <ChatMessage message={message.message} timestamp={message.timestamp} user={message.user}/>
      ))}
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            type="text"
            disabled={!channelId}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
            <button className='chat__inputButton' onClick={sendMessage} disabled={!channelId} type='submit'>Send Message</button>
        </form>

        <div className="chat__inputIcons">
            <CardGiftcardIcon/>
            <GifIcon/>
            <EmojiEmotionsIcon/>
        </div>
      </div>
    </div>
  );
}
