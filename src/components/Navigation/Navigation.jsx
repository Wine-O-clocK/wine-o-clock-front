import React from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdWineBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <div className="navigation">
        <NavButton onClick={() => navigate("/")}>
          <AiOutlineHome />
          <span>홈</span>
        </NavButton>
        <NavButton onClick={() => navigate("/search")}>
          <AiOutlineSearch />
          <span>검색</span>
        </NavButton>
        <NavButton onClick={() => navigate("/wine")}>
          <MdWineBar />
          <span>테스트</span>
        </NavButton>
        <NavButton onClick={() => navigate("/mypage")}>
          <BiUser />
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
`;
