import React, { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import socialNaver from '../../assets/img/navericon.png';
import { LoginSocial } from '../../states/LoginState';

function OAuthNaver() {
  const naverRef = useRef();
  const { naver } = window;
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = process.env.REACT_APP_CALLBACK_URL;
  const setLoginSocial = useSetRecoilState(LoginSocial);

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 20 },
      callbackHandle: true,
    })
    naverLogin.init();
    setLoginSocial('naver');
  }

  useEffect(() => {
    initializeNaverLogin()
  }, [])

  const handleLogin = () => {
    naverRef.current.children[0].click();
  }

  return (
    <NaverLoginBtn>
      <div ref={naverRef} id="naverIdLogin"/>
      <button onClick={handleLogin}><img src={socialNaver}/></button>
    </NaverLoginBtn>
  );
}

export default OAuthNaver;

const NaverLoginBtn = styled.div`
  #naverIdLogin {
    display: none;
  }
  button {
    border: none;
    border-radius: 50px;
    background-color: inherit;
  }
  img {
    height: 42px;
  }
`

