import React from "react";
// import "./Heading.css"
import "../index.css"
const Header=()=>{
    return(
        <div className="w-full border shadow-md py-3.5 fixed top-0 bg-white">
            <header className="text-center"><h1 className="text-2.5xl uppercase font-bold ">My Blogs</h1></header>
        </div>
    );
}
export default Header;