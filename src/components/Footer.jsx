import React from "react";
import "../style/Footer.css";

const Footer = ({theme})=>{
    return(
        <footer className={`footer ${theme}`}>
            <h6>Designed and Developed by Maadi El Moufaddal</h6>
            <p>© 2025 Portfolio. All right reserved</p>
        </footer>
    )
}

export default Footer;