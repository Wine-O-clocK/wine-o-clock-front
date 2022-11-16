import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  LoginUserName,
  LoginState,
  LoginUserEmail,
  LoginUserPwd,
} from "../../states/LoginState";
import { useNavigate } from "react-router-dom";

function UserInfoComponent() {
  const navigate = useNavigate();

  const [loginUserName, setUserName] = useRecoilState(LoginUserName);
  const setIsLoggedIn = useSetRecoilState(LoginState);
  const setUserLoginEmail = useSetRecoilState(LoginUserEmail);
  const setUserLoginPwd = useSetRecoilState(LoginUserPwd);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setUserLoginEmail("");
    setUserLoginPwd("");
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
        <button className="logout" onClick={handleLogout}>
          로그아웃
        </button>
      </UserInfoWrap>
    </>
  );
}

const UserInfoWrap = styled.div`
  display: flex;
  height: 100px;
`;

const UserImgWrap = styled.div`
  margin: 15px 20px;
  margin-right: 20px;
  /* float: left; */
`;

const UserTxtWrap = styled.div`
  /* float: right; */
`;

export default UserInfoComponent;
