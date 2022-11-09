import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import MyPage from "./components/Mypage/MyPage";
import Navigation from "./components/Navigation/Navigation";
import WineTestPage from "./components/WineTestPage/WineTestPage";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import SignUpDetail from "./routes/SignUpDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/detail" element={<SignUpDetail />} />
        <Route path="/winetestpage" element={<WineTestPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
