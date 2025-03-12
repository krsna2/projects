// import { Routes } from "react-router-dom";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import "./index.css"
import { AppContext } from "./context/AppContext";


const App = () => {
  const {fetchBlogsPosts}=useContext(AppContext);
  useEffect (()=>{
    fetchBlogsPosts();
  },[])
  return (
  <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    <Header/>
    <Blogs/>
    <Pagination/>
  </div>)
};

export default App;
