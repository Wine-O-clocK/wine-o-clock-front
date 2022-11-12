import React from "react";
import styled from "styled-components";

function UserHelloComponent() {
  return (
    <>
      <UserHelloWrap>
        <UserBubbleWrap>
          <p>응! 알아볼래 😊</p>
        </UserBubbleWrap>
      </UserHelloWrap>
    </>
  );
}

const UserHelloWrap = styled.div`
  /* display: flex; */
  height: 70px;
`;

const UserBubbleWrap = styled.div`
  float: right;
  margin: 8px 15px;
  p {
    display: inline-block;
    border-radius: 18px;
    background-color: #cc86ec;
    color: #ffffff;
    cursor: pointer;
    margin: 6px 0;
    margin-left: 10px;
    padding: 15px 18px;
    font-size: 95%;
  }
`;

export default UserHelloComponent;
