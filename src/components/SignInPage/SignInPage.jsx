import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  LoginState,
  LoginUserEmail,
  LoginUserName,
  LoginUserPwd,
} from "../../states/LoginState";
import OAuthNaver from "./OAuthNaver";
import OAuthKakao from "./OAuthKakao";
import OAuthGoogle from "./OAuthGoogle";
import { PathState } from "../../states/MainState";
import axios from "axios";

function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const setPathState = useSetRecoilState(PathState);
  useEffect(() => {
    setPathState(location.pathname);
  });

  // 사용자 임시 계정
  const user = {
    name: "임가비",
    id: "abc0000@naver.com",
    pwd: "wine1234*",
    Role: "ROLE_USER",
  };

  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [pwd, setPwd] = useState("");
  const [isConfirm, setIsConfirm] = useState(false); // 유효성 검사

  // 상태 저장
  const setIsLoggedIn = useSetRecoilState(LoginState);
  const setUserName = useSetRecoilState(LoginUserName);
  const setUserLoginEmail = useSetRecoilState(LoginUserEmail);
  const setUserLoginPwd = useSetRecoilState(LoginUserPwd);

  const onChangeEmail = (e) => {
    e.preventDefault();
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식으로 입력해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  };

  const onChangePwd = (e) => {
    e.preventDefault();
    setPwd(e.target.value);
    if (isEmail && pwd.length > 1) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await axios({
    //   headers: {
        
    //   }, 
    //   method: "post",
    //   url: "http://172.20.10.11:8080/login",
    //   data: {
    //     email: email,
    //     password: pwd
    //   }
    // })
    // .then((res) => {
    //   console.log(res)
    //   alert("로그인 됨")
    // })
    // .catch((err) => {
    //   console.log(err)
    // })

    if (email === user.id && pwd === user.pwd) {
      setUserName(user.name);
      setUserLoginEmail(email);
      setUserLoginPwd(pwd);
      setIsLoggedIn(true);
      navigate("/", {
        state: {
          userRole: user.Role,
        },
      });
    } else {
      alert("이메일이나 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <SignUpContainer>
      <div className="titleWrap">
        <h3>로그인</h3>
      </div>
      <InputForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          className="email"
          placeholder="이메일"
          onChange={onChangeEmail}
          value={email || ""}
        />
        <div className={isEmail ? "confirmMessage" : "error"}>
          {emailMessage}
        </div>
        <StyledInput
          type="password"
          className="pwd"
          placeholder="비밀번호"
          onChange={onChangePwd}
          value={pwd || ""}
        />
        <button
          onSubmit={handleSubmit}
          className={isConfirm ? "loginBtn active" : "loginBtn disabled"}
          disabled={!isConfirm ? true : false}
        >
          로그인
        </button>
      </InputForm>
      <hr />
      <div className="socialLoginWrap">
        <OAuthGoogle />
        <OAuthNaver />
        <OAuthKakao />
      </div>
      <div className="otherFeat">
        <span onClick={() => navigate("/signup")}>회원가입</span>
        <span>비밀번호 찾기</span>
      </div>
    </SignUpContainer>
  );
}

export default SignInPage;

const SignUpContainer = styled.div`
  margin: 0 22px;
  padding: 16px 32px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;

  .titleWrap {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 16px;
    h1 {
      margin: 0;
    }
  }
  .socialLoginWrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 16px;
  }
  .otherFeat {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    color: #4f4f4f;
    font-size: 13px;
  }
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  .confirmMessage {
    color: #2a2929;
    font-size: 11px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 8px;
  }
  .error {
    color: red;
    font-size: 11px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 8px;
  }

  input:focus {
    outline: none;
  }

  .loginBtn {
    height: 45px;
    border-radius: 5px;
    border: 1px solid #9f9f9f;
    background-color: #cdcdcd;
    color: #333333;
    margin-bottom: 16px;
  }
  .active {
    background-color: #9f9f9f;
    color: #ffffff;
    font-weight: bold;
  }
  .active:active {
    transform: translateY(0.5px);
  }
  .disabled {
    background-color: #cdcdcd;
  }
`;
const StyledInput = styled.input`
  height: 45px;
  border-radius: 5px;
  border: 1px solid #8d8d8d;
  color: #8d8d8d;
  background-color: #fafafa;
  margin-bottom: 8px;
  padding: 0 10px;
`;
