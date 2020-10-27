import React from "react";
import ChatHeader from "../ChatHeader";
import "./style.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ChatMessage from "../MessageComponent";

export default function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={`Message #TEST-CHANNEL`} />
          <button type="submit">Send Message</button>
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
