import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { LoginState, LoginUserName } from "../../states/LoginState";

function LoginPermission() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userLevel, setUserLevel] = useState(-1);
  useEffect(() => {
    if (location.state !== null) {
      setUserLevel(location.state.userLevel);
    }
  }, []);

  const isLoggedIn = useRecoilValue(LoginState);
  const loginUserName = useRecoilValue(LoginUserName);

  return (
    <LoginWrapper>
      {isLoggedIn ? (
        userLevel === 0 ? (
          <>
            <div>
              <span>{loginUserName}</span>님의 취향 저격 와인
              <br />
              AI가 골라드려요!
            </div>
            <button onClick={() => navigate("/signup/detail")}>
              취향 등록하러 가기
            </button>
          </>
        ) : (
          <>
            <div>
              <span>{loginUserName}</span>님의 취향 저격 와인
              <br />
              AI가 골라드려요!
            </div>
            <button onClick={() => navigate("/winerecommendpage")}>
              와인 추천받기
            </button>
          </>
        )
      ) : (
        <>
          <div>
            로그인하고 나만을 위해 준비된
            <br />
            와인을 만나보세요!
          </div>
          <button onClick={() => navigate("/signin")}>로그인</button>
        </>
      )}
    </LoginWrapper>
  );
}

export default LoginPermission;

const LoginWrapper = styled.div`
  height: 76px;
  border-radius: 25px;
  background-color: #c57aea;
  box-shadow: 4px 8px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 15px 20px 25px;
  div {
    color: #ffffff;
  }
  button {
    border-radius: 15px;
    background-color: #ffffff;
    color: #000000;
    float: right;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px 22px;
    margin-top: 6px;
    font-weight: bold;
  }

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;
