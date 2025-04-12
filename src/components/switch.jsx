import React from "react";

const Switch = ({ theme, changetheme })=>{
    return(
        <div className="theme-toggle" onClick={changetheme}>
            {theme === "dark" ? "☀️" : "🌒"}
        </div>
    )
};


export default Switch;