import React, { useState, useEffect } from "react";
import "../style/SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  const [titleText, setTitleText] = useState("");
  const [welcomeText, setWelcomeText] = useState("");
  const [showButton, setShowButton] = useState(false);

  const title = "Welcome to My Portfolio";
  const welcomeMessage = "I hope this space gives you a better understanding of who I am and the skills I've developed. I believe this will be a lovely experience!";

  useEffect(() => {
    // Typing effect for title
    let i = 0;
    const titleInterval = setInterval(() => {
      if (i < title.length) {
        setTitleText(prev => prev + title.charAt(i));
        i++;
      } else {
        clearInterval(titleInterval);
        // Start typing welcome message after title is done
        typeWelcomeMessage();
      }
    }, 100); // Adjust typing speed for title

    return () => clearInterval(titleInterval);
  }, []);

  const typeWelcomeMessage = () => {
    let j = 0;
    const welcomeInterval = setInterval(() => {
      if (j < welcomeMessage.length) {
        setWelcomeText(prev => prev + welcomeMessage.charAt(j));
        j++;
      } else {
        clearInterval(welcomeInterval);
        setShowButton(true); // Show button after all text is typed
      }
    }, 30); // Adjust typing speed for welcome message
  };

  return (
    <div className="splash-screen" style={{ backgroundImage: 'url("low-poly-grid-haikei (1).svg")'}}>
      <div className="splash-inner">
        <h1 className="splash-title">{titleText}</h1>
        <p className="splash-welcome">{welcomeText}</p>
        {showButton && (
          <button className="splash-button" onClick={onFinish}>Let's Begin</button>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;