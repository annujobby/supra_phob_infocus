import React from "react";
import "../../src/styles.css";


const Navbar = () => {

return(
<div className="navbar" style={{position: "fixed",top :"0px"}} >
        <div className="logo">
          <img src="https://demo.appasamy.com/img/logo.png" alt="Appasamy Logo" height={"30rem"} />
        </div>
        <div className="navItems">
            <div className="navitem">CORPORATE</div>
            <div className="navitem">PRODUCTS</div>
            <div className="navitem">SUPPORT</div>
        </div>
      </div>
)
}


export default Navbar;