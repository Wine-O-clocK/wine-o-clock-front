import React from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdWineBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { LoginState } from "../../states/LoginState";
import { PathState } from "../../states/MainState";
import { useEffect } from "react";

function Navigation() {
  const navigate = useNavigate();
  const pathState = useRecoilValue(PathState);
  const [path, setPath] = useState("")
  const isLoggedIn = useRecoilValue(LoginState);

  useEffect(() => {
    setPath(pathState)
  }, [pathState])

  if (window.location.pathname === "/winetestpage") return null;

  return (
    <NavContainer>
      <div className="navigation">
        <NavButton
          onClick={() => {navigate("/");}}
        >
          <AiOutlineHome
            size="24"
            className={path === '/' ? "nav-item active" : "nav-item"}
          />
        </NavButton>
        <NavButton
          onClick={() => {navigate("/search");}}
        >
          <AiOutlineSearch 
            size="24"
            className={path === '/search' ? "nav-item active" : "nav-item"}
          />
        </NavButton>
        <NavButton
          onClick={() => {navigate("/winetestpage");}}
        >
          <MdWineBar 
            size="24"
            className={path === '/winetestpage' ? "nav-item active" : "nav-item"}
          />
        </NavButton>
        <NavButton
          onClick={() => {isLoggedIn ? navigate("/mypage") : navigate("/signin");}}
        >
          <BiUser 
            size="24" 
            className={path === (isLoggedIn ? '/mypage' : '/signin') ? "nav-item active" : "nav-item"}
          />
        </NavButton>
      </div>
    </NavContainer>
  );
}

export default Navigation;

const NavContainer = styled.div`
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  width: 100vw;

  .navigation {
    height: 55px;
    padding: 8px 0;
    box-sizing: border-box;
    background-color: #e7e5e5;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const NavButton = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .nav-item {
    color: #9f9f9f;
  }
  .active {
    color: #9e4dc4;
  }
`;
