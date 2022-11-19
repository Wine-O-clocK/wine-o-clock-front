import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  LoginUserName,
  LoginState,
  LoginUserEmail,
  LoginUserPwd,
  LoginSocial,
} from "../../states/LoginState";
import { useNavigate } from "react-router-dom";

function UserInfoComponent() {
  const navigate = useNavigate();

  const [loginUserName, setUserName] = useRecoilState(LoginUserName);
  const setIsLoggedIn = useSetRecoilState(LoginState);
  const setUserLoginEmail = useSetRecoilState(LoginUserEmail);
  const setUserLoginPwd = useSetRecoilState(LoginUserPwd);
  const setLoginSocial = useSetRecoilState(LoginSocial);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setUserLoginEmail("");
    setUserLoginPwd("");
    setLoginSocial("");
    navigate("/");
  };

  return (
    <>
      <UserInfoWrap>
        <UserImgWrap>
          <img src="https://ifh.cc/g/ZJJJd6.png" alt="프로필사진" />
        </UserImgWrap>
        <UserTxtWrap>
          <h3>{loginUserName}님</h3>
          <h4>회원정보 수정</h4>
        </UserTxtWrap>
        <button className="logout" onClick={handleLogout}>로그아웃</button>
      </UserInfoWrap>
    </>
  );
}

const UserInfoWrap = styled.div`
  display: flex;
  height: 100px;
  position: relative;

  .logout {
    position: absolute;
    top: 18px;
    right: 30px;
    border-radius: 10px;
    border: 1px solid #ececec;
    background-color: #ececec;
    padding: 6px 12px;
    font-family: 'AppleBold';
    color: #000000;
  }
`;

const UserImgWrap = styled.div`
  margin: 15px 20px;
  margin-right: 20px;
  /* float: left; */
`;

const UserTxtWrap = styled.div`
  font-family: "AppleLight";
  /* float: right; */
`;

export default UserInfoComponent;
