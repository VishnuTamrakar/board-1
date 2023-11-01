import React from "react";
import "./chatbot.css";
import Navbar from "../NavBar/Navbar";
import SIdebar from "../sidebar/SIdebar";
import Home from "../Home/Home";

const ChatBot = () => {
  return (
    <div className="chatbot">
      <Navbar />
      <SIdebar/>
      <Home/>
    </div>
  );
};

export default ChatBot;
