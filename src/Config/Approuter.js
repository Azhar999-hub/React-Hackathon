import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SmNavbar from "../Components/Smnavbar";
import CardDetail from "../Screens/Carddetail";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Profile from "../Screens/Profile";
import SignUp from "../Screens/Signup";
import { getFbData } from "./Firebasemethods";
import PtrotectedRoute from "./Protectedroute";
import Admin from "../Screens/Aminscreens/Adminhome";


const Approuter = () => {
  const [listData, setlistData] = React.useState([]);

  let showData = () => {
    getFbData("users")
      .then((res) => {
        console.log("Data Fetched Successfully  ", res);
        setlistData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    showData();
  }, []);

  
  return (
    <div>
      <BrowserRouter>
        <SmNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="Login" element={<Login />} />
          <Route path="/carddetail/:id" element={<CardDetail />} />
          <Route path ="Adminhome/*" element={<PtrotectedRoute  Component ={Admin}/>}/> 
          {/* <Route path ="form" element={<Form/>}/>
          <Route path ="Testing" element={<Testing/>}/>
          <Route path ="Dashboard/*" element={< PtrotectedRoute  Component ={Dashboard}/>}/> 
          <Route path ="Dashboard/*" element={<Dashboard/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Approuter;
