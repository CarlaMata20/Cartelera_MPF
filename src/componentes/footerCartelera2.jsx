import React from "react";
import "../../public/FooterCartelera2.css";


export default function Footer({ 
   logo = "/Img-Header/logo.png", 
   institutionName = "MPF",
   institutionFullName = "MINISTERIO PÚBLICO FISCAL",
   backgroundColor = "#1a365d",
   textColor = "white",
   showNav = false,
   navItems = []
 }) {
   return (
     <footer 
       className="footer-container"
       style={{
         backgroundColor: backgroundColor,
         color: textColor
       }}
     >
       <div className="footer-content ">
         <div className="logo-section">
           <img src={logo} alt="Logo" className="logo" />
           <div className="institution-info">
             <h1 className="institution-abbr">{institutionName}</h1>
             <p className="institution-fullname">{institutionFullName}</p>
           </div>
         </div>
       </div>
     </footer>
   );
 }



