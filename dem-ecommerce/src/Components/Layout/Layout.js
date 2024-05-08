import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";
const Layout = ({children}) => {
   return (
     <div className="layout">
      <div className="content">
        <Header/>
        <main style={{ minHeight: "70vh" }}>
          {children}
           
           </main>
        <Footer/>
        </div>
     </div>
   );
};

export default Layout;