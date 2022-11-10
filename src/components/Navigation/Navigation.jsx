import React from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdWineBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { LoginState } from "../../states/LoginState";

function Navigation() {
  const navigate = useNavigate();
  const [active, setActice] = useState(1);
  const isLoggedIn = useRecoilValue(LoginState);

  return (
    <NavContainer>
      <div className="navigation">
        <NavButton
          onClick={() => {
            setActice(1);
            navigate("/");
          }}
        >
          <AiOutlineHome
            className={active === 1 ? "nav-item active" : "nav-item"}
          />
          <span>홈</span>
        </NavButton>
        <NavButton
          onClick={() => {
            setActice(2);
            navigate("/search");
          }}
        >
          <AiOutlineSearch
            className={active === 2 ? "nav-item active" : "nav-item"}
          />
          <span>검색</span>
        </NavButton>
        <NavButton
          onClick={() => {
            setActice(3);
            navigate("/winetestpage");
          }}
        >
          <MdWineBar
            className={active === 3 ? "nav-item active" : "nav-item"}
          />
          <span>테스트</span>
        </NavButton>
        <NavButton
          onClick={() => {
            setActice(4);
            isLoggedIn ? navigate("/mypage") : navigate("/signin");
          }}
        >
          <BiUser className={active === 4 ? "nav-item active" : "nav-item"} />
          <span>마이페이지</span>
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
    font-size: 22px;
  }
  .active {
    color: #9e4dc4;
  }
`;
