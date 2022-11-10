import React from "react";
import styled from "styled-components";

function WinyHelloComponent() {
  return (
    <>
      <UserInfoWrap>
        <UserImgWrap>
          <img src="https://ifh.cc/g/ZJJJd6.png" alt="프로필사진" />
        </UserImgWrap>
        <WinyBubbleWrap>
          <p>나는 와이니!</p>
          <br />
          <p>너의 와인 취향을 알아보지 않을래?</p>
        </WinyBubbleWrap>
      </UserInfoWrap>
    </>
  );
}

const UserInfoWrap = styled.div`
  display: flex;
  height: 100px;
`;

const UserImgWrap = styled.div`
  margin: 15px 0;
  margin-left: 15px;
  margin-right: 5px;
  width: 50px;
  /* float: left; */
`;

const WinyBubbleWrap = styled.div`
  margin: 8px 0;
  p {
    display: inline-block;
    border-radius: 18px;
    /* border: 1.6px solid #c371ea; */
    background-color: #eaeaea;
    color: #000000;
    cursor: pointer;
    margin: 6px 0;
    margin-left: 10px;
    padding: 15px 18px;
    font-size: 95%;
  }
`;

export default WinyHelloComponent;
