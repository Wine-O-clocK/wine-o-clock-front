import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import WineRecommendPage from "./components/MainPage/Recommend/WineRecommendPage";
import MyPage from "./components/Mypage/MyPage";
import Navigation from "./components/Navigation/Navigation";
import SearchResult from "./components/SearchPage/SearchResult";
import WineTestPage from "./components/WineTestPage/WineTestPage";
import NotFound from "./routes/NotFound";
import Search from "./routes/Search";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import SignUpDetail from "./routes/SignUpDetail";
import WineDetail from "./routes/WineDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wine/:wineNameEng" element={<WineDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/detail" element={<SignUpDetail />} />
        <Route path="/winerecommendpage" element={<WineRecommendPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchresult" element={<SearchResult/>}/>
        <Route path="/winetestpage" element={<WineTestPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
