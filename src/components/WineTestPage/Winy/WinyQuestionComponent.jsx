import React from "react";
import styled from "styled-components";

function WinyQuestionComponent({ questionMessage }) {
  return (
    <>
      <WinyHelloWrap>
        <WinyImgWrap>
          <img src="https://ifh.cc/g/ZJJJd6.png" alt="프로필사진" />
        </WinyImgWrap>
        <WinyBubbleWrap>
          <p>{questionMessage}</p>
        </WinyBubbleWrap>
      </WinyHelloWrap>
    </>
  );
}

const WinyHelloWrap = styled.div`
  display: flex;
  height: 65px;

  animation: fadein 0.3s;
  -webkit-animation: fadein 0.3s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const WinyImgWrap = styled.div`
  margin: auto 0;
  margin-left: 15px;
  margin-right: 5px;
  width: 50px;
  /* float: left; */
`;

const WinyBubbleWrap = styled.div`
  margin: auto 0;
  p {
    display: inline-block;
    border-radius: 4px 20px 20px 18px;
    /* border: 1.6px solid #c371ea; */
    background-color: #eaeaea;
    color: #000000;
    cursor: pointer;
    margin: 6px 0;
    margin-left: 10px;
    padding: 14px 18px;
    font-size: 95%;
    box-shadow: 0px 1px 4px 0 rgb(0, 0, 0, 0.2);
  }
`;

export default WinyQuestionComponent;
