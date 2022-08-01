import React from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import Single from "./components/pages/single/single.js";
import Write from "./components/pages/write/write";
import Setting from "./components/pages/setting/setting";
import Login from "./components/pages/login/login";
import Register from "./components/pages/register/register";
import About from "./components/pages/about/about";



function App() {
  const user = true;
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/"
       element = {<Home/>} />
      
       <Route path="/register"
        element = {user ? <Home/> : <Register/>} />
      
       <Route path="/login" element={user? <Home/> : <Login/>}
       /> 
      
      <Route path="/write"
      element = {user ? <Write/> : <Login/>} />
      
      <Route path="/setting"
      element = {user?<Setting/> : <Register/>} />
      
      <Route path="/post/:postId"
     element = { <Single/>} />

     <Route path="/about"
     element = { <About/>} />
       
    </Routes>
    {/* <Home/> */}
    {/* <Single/> */}
    {/* <Write/> */}
    {/* <Setting/> */}
    {/* <Login/> */}
    {/* {/* <Register/>} */}
    </Router>
   
  );
}

export default App;
