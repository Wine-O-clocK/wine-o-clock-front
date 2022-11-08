import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderWrap>
      <h1 onClick={() => navigate('/')}>Wine O'clocK</h1>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  font-family: 'nanumextra';
  padding-top: 8px;
  margin-left: 22px;

  h1 {
    display: inline-block;
  }
`
