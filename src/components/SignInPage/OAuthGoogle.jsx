import React from 'react';
import styled from 'styled-components';
import socialGoogle from '../../assets/img/googleicon.png';

function OAuthGoogle() {
  const handleLogin = () => {
    
  }
  
  return (
    <GoogleLoginBtn>
      <button onClick={handleLogin}><img src={socialGoogle} /></button>
    </GoogleLoginBtn>
  );
}

export default OAuthGoogle;

const GoogleLoginBtn = styled.div`
  button {
    border: none;
    border-radius: 50px;
    background-color: inherit;
  }
  img {
    height: 42px;
  }
`