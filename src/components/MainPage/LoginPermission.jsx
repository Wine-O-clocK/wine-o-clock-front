import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { LoginState, LoginUserName } from '../../states/LoginState';

function LoginPermission() {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(LoginState);
  const loginUserName = useRecoilValue(LoginUserName);

  return (
    <LoginWrapper>
      {isLoggedIn
        ? (
          <>
            <div><span>{loginUserName}</span>님의 취향 저격 와인<br />AI가 골라드려요!</div>
            <button onClick={() => navigate('/signin')}>와인 추천받기</button>
          </>
        )

        : (
          <>
            <div>로그인하고 나만을 위해 준비된<br />와인을 만나보세요!</div>
            <button onClick={() => navigate('/signin')}>로그인</button>
          </>
        )
      }
    </LoginWrapper>
  );
}

export default LoginPermission;

const LoginWrapper = styled.div`
  height: 66px;
  border-radius: 25px;
  background-color: #C57AEA;
  box-shadow: 4px 8px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 15px 20px 25px;
  div {
    color: #FFFFFF;
  }
  button {
    border-radius: 15px;
    background-color: #FFFFFF;
    color: #000000;
    float: right;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px 22px;
    font-weight: bold;
  }
  
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`