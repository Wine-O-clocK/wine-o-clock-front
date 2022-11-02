import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import MainPage from "./components/MainPage/MainPage";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
      <Navigation/>
    </BrowserRouter>
  );
}

export default App;

