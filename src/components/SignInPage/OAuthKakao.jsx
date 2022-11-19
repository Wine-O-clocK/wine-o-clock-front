import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import socialKakao from '../../assets/img/kakaoicon.png';
import { LoginSocial } from '../../states/LoginState';

function OAuthKakao() {
  const setLoginSocial = useSetRecoilState(LoginSocial)
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY
  const REDIRECT_URI = process.env.REACT_APP_CALLBACK_URL
  const KAKAO_AUTH_URL =  `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    setLoginSocial('kakao');
    window.location.href = KAKAO_AUTH_URL;
  }
  
  return (
    <KakaoLoginBtn>
      <button onClick={handleLogin}><img src={socialKakao}/></button>
    </KakaoLoginBtn>
  );
}

export default OAuthKakao;

const KakaoLoginBtn = styled.div`
  button {
    border: none;
    border-radius: 50px;
    background-color: inherit;
  }
  img {
    height: 42px;
  }
`