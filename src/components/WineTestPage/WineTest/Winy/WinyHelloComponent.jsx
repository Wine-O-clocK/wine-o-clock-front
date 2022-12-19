import React from "react";
import styled from "styled-components";

function WinyHelloComponent() {
  return (
    <>
      <WinyHelloWrap>
        <WinyImgWrap>
          <img src="https://ifh.cc/g/O4dDbp.png" alt="프로필사진" />
        </WinyImgWrap>
        <WinyBubbleWrap>
          <p>나는 와이니!</p>
          <br />
          <p>너의 와인 취향을 알아보지 않을래?</p>
        </WinyBubbleWrap>
      </WinyHelloWrap>
    </>
  );
}

const WinyHelloWrap = styled.div`
  display: flex;
  height: 130px;
`;

const WinyImgWrap = styled.div`
  margin: 15px 0;
  margin-left: 15px;
  margin-right: 5px;
  width: 50px;
  img {
    border-radius: 50%;
    border: 2px solid #ce87d9;
  }
  /* float: left; */
`;

const WinyBubbleWrap = styled.div`
  margin: 8px 0;
  p {
    display: inline-block;
    border-radius: 4px 20px 20px 18px;
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

export default WinyHelloComponent;
