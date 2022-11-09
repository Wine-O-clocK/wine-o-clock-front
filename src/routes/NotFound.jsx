import React from 'react';
import styled from 'styled-components';

function NotFound() {
  return (
    <NotFoundWrap>
      <h2>Wine O'clocK</h2>
      <h4>해당 페이지가 존재하지 않습니다.</h4>
      <p>주소가 잘못되었거나 <br/>더 이상 제공되지 않는 페이지입니다.</p>
      <button onClick={() => window.location.replace('/')}>홈 화면으로 돌아가기</button>
    </NotFoundWrap>
  );
}

export default NotFound;

const NotFoundWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;

  h4 {margin: 0}
  button {
    height: 50px;
    border-radius: 25px;
    background-color: #C57AEA;
    border: 1px solid #C57AEA;
    padding: 8px 16px;
    color: #FFFFFF;
    font-size: 16px;
  }
`