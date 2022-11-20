import React from "react";
import styled from "styled-components";

function UserBubbleComponent({ bubbleMessage }) {
  return (
    <>
      <UserBubbleBoxWrap>
        <UserBubbleWrap>
          <p>{bubbleMessage}</p>
        </UserBubbleWrap>
      </UserBubbleBoxWrap>
    </>
  );
}

const UserBubbleBoxWrap = styled.div`
  /* display: flex; */
  height: 70px;
`;

const UserBubbleWrap = styled.div`
  float: right;
  margin: 4px 15px;
  p {
    display: inline-block;
    border-radius: 20px 18px 4px 20px;
    background-color: #cc86ec;
    color: #ffffff;
    cursor: pointer;
    margin: 6px 0;
    margin-left: 10px;
    padding: 10px 18px;
    font-size: 95%;
    box-shadow: 0px 1px 4px 0 rgb(0, 0, 0, 0.2);
  }
`;

export default UserBubbleComponent;
