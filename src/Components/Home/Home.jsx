import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("Enter your marketing query here...");
  const [chatHistory, setChatHistory] = useState([]);
  const [showDepartmentOptions, setShowDepartmentOptions] = useState(false);

  const handleDepartmentChange = (newDepartment) => {
    setDepartment(newDepartment);
    setShowDepartmentOptions(false);
    setMessage(
      newDepartment === "Sales"
        ? "Enter your sales query here..."
        : "Enter your marketing query here..."
    );
  };

  const handleCaretClick = () => {
    setShowDepartmentOptions(!showDepartmentOptions);
  };

  const handleSendMessage = () => {
    setChatHistory([...chatHistory, { text: message, user: "user" }]);

    setChatHistory([...chatHistory, { text: "AI Response...", user: "bot" }]);

    setMessage("");
  };

  return (
    <div className="home">
      <div className="introduce">
        <h1 className="introText">Introduce yourself to AIWorkSquad</h1>
        <h2 className="introText2">
          Im Nithin. CEO of an IT startup company in India
        </h2>
        <img src="/img/edit.svg" className="introIcon" alt="" />
      </div>
      <div className="marketQ">
        <h1 className="marketText">What is marketing?</h1>
        <img src="/img/question.svg" className="marketIcon" alt="" />
      </div>
      <div className="desc">
        <img src="/img/chat.svg" className="descIcon" alt="" />
        <h2 className="descText">
          Marketing refers to the process of promoting and selling products or
          services to customers. It invoives researching customer needs and
          wants,developing products and services that meet those needs,pricing
          products and sorvices appropriately.creating markoting materials to
          promote products and services,and distributing those materials through
          various channels to reach potential customers.The ultimate goal of
          marketing is to generate interest and increase sales for a business or
          organization.
        </h2>
        <div className="iconGroup">
          <img src="/img/phosphor1.svg" className="descIcon1" alt="" />
          <img src="/img/phosphor2.svg" className="descIcon2" alt="" />
          <img src="/img/phosphor3.svg" className="descIcon3" alt="" />
          <img src="/img/phosphor4.svg" className="descIcon4" alt="" />
        </div>
      </div>
      <div className="secondQ">
        <h1 className="secondQText">
          Give me a list of top 5 digital marketing agencies near me who offers
          services like social media marketing, content marketing and influencer
          marketing
        </h1>
        <img src="/img/question.svg" className="secondQIcon" alt="" />
      </div>

      <div className="caretIcon">
        <div className="caret" onClick={handleCaretClick}>
          <img src="/img/caret.svg" alt="Caret" />
        </div>
        {showDepartmentOptions && (
          <div className="department-options">
            <div onClick={() => handleDepartmentChange("marketing")}>
              Marketing
            </div>
            <div onClick={() => handleDepartmentChange("Sales")}>Sales</div>
          </div>
        )}
        <div className="selected-department" onClick={handleCaretClick}>
          {department}
        </div>
      </div>
      <div className="searchBox">
        <div className="inputGroup">
          <img src="/img/question.svg" className="searchQ" alt="" />
          <input
            type="text"
            placeholder={message}
            className="searchQuery"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="sendBtn" onClick={handleSendMessage}>
          <img src="/img/send.svg" alt="" />
        </button>
      </div>
      <footer>
        <h2 className="footerText">
          Type your next question above or select one from the related questions
          section
        </h2>
      </footer>
    </div>
  );
};

export default Home;
