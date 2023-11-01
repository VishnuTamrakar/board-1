import React from "react";
import "./sidebar.css";

const SIdebar = () => {
  return (
    <div className="sidebar">
      <div className="chatButton">
        <span>+ New Chat</span>
      </div>
      <div className="history">
        <img src="/img/history.svg" className="icon" alt="" />
        <h1 className="hText"> History </h1>
      </div>
      <div className="chatBox">
        <div>
          <img src="/img/profile.svg" className="smsIcon" alt="" />
          <h2 className="text1">New Chat</h2>
          <img src="/img/profile.svg" className="editIcon" alt="" />
          <img src="/img/profile.svg" className="deleteIcon" alt="" />
        </div>
        <div>
        <img src="/img/profile.svg" className="smsIcon2" alt="" />
          <h2 className="text2">What is marketing</h2>
          <img src="/img/profile.svg" className="editIcon2" alt="" />
          <img src="/img/profile.svg" className="deleteIcon2" alt="" />
        </div>
        <div>
        <img src="/img/profile.svg" className="smsIcon3" alt="" />
          {/* <span className="triangle"></span> */}
          <h2 className="text3">Give me a list of...</h2>
          <img src="/img/profile.svg" className="editIcon3" alt="" />
          <img src="/img/profile.svg" className="deleteIcon3" alt="" />
        </div>
        <div className="moreTextContainer">
            <h2 className="moreText">Give me a list of marketing agencies near me in 5 km</h2>
        </div>
        <div>
            <img src="/img/profile.svg" className="upgradeIcon" alt="" />
            <img src="/img/profile.svg" className="updateIcon" alt="" />
            <img src="/img/profile.svg" className="conditionIcon" alt="" />
            <img src="/img/profile.svg" className="policyIcon" alt="" />
            <h2 className="upgradeText">Upgrade to Plus</h2>
            <h2 className="updateText">Updates & FAQ</h2>
            <h2 className="conditionText">Terms and Conditions</h2>
            <h2 className="policyText">Privacy Policy Page</h2>
        </div>
      </div>
    </div>
  );
};

export default SIdebar;
