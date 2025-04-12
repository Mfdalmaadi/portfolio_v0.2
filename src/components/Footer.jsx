import React from "react";
import "../style/Footer.css";

const Footer = ({theme})=>{
    return(
        <footer className={`footer ${theme}`}>
            <h5>© 2025 Portfolio. All right reserved</h5>
        </footer>
    )
}

export default Footer;