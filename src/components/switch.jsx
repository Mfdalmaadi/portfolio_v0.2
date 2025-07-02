import { img } from "framer-motion/client";
import React from "react";

const Switch = ({ theme, changetheme })=>{
    return(
        <div className="theme-toggle" style={{fontSize:19, fontWeight: "bold"}} onClick={changetheme}>
            {theme === "dark" ? "☀" : "🌙"}
        </div>
    )
};


export default Switch;