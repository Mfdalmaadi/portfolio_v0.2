import React from "react";
import "../style/RetroWindow.css";

const RetroWindow = ({ title, icon, children }) => {
  return (
    <div className="retro-window">
      <div className="retro-window-header">
        <span className="retro-window-icon">{icon}</span>
        <span className="retro-window-title">{title}</span>
        <div className="retro-window-actions">
          <button className="retro-btn">—</button>
          <button className="retro-btn">□</button>
          <button className="retro-btn">×</button>
        </div>
      </div>
      <div className="retro-window-content">
        {children}
      </div>
    </div>
  );
};

export default RetroWindow;
