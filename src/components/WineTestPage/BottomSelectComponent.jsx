import React from "react";
import styled from "styled-components";

function BottomSelectComponent() {
  return (
    <>
      <BottomSelectWrap>
        <button>응! 알아볼래 😊</button>
        <button>아니 나는 안궁금해 ☹️</button>
      </BottomSelectWrap>
    </>
  );
}

const BottomSelectWrap = styled.div`
  margin: 0 auto;
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100vw;
  height: 60px;
  margin-bottom: 55px;
  background-color: #ffffff;

  button {
    border-radius: 20px;
    border: 1.6px solid #c371ea;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
    margin: auto 0;
    margin-left: 10px;
    padding: 8px 18px;
    font-size: 95%;
  }

  button:hover {
    color: white;
    background-color: #c371ea;
  }
`;

export default BottomSelectComponent;
