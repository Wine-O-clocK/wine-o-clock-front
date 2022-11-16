import React from "react";
import styled from "styled-components";

function BadgeComponent() {
  return (
    <>
      <BoxWrap>
        <h3>나의 뱃지</h3>
        <BadgeWrap>
          <BadgeCardWrap></BadgeCardWrap>
          <BadgeCardWrap></BadgeCardWrap>
          <BadgeCardWrap></BadgeCardWrap>
          <BadgeCardWrap></BadgeCardWrap>
          <BadgeCardWrap></BadgeCardWrap>
        </BadgeWrap>
      </BoxWrap>
    </>
  );
}

const BoxWrap = styled.div`
  font-family: "nanumextra";
  padding-top: 8px;
  margin-left: 22px;
  margin-right: 22px;
  /* width: 100vw; */
  height: 350px;
`;

const BadgeWrap = styled.div`
  display: flex;
  /* position: fixed; */
  width: 100%;
  height: 280px;
  white-space: nowrap;
  overflow-x: scroll;
`;

const BadgeCardWrap = styled.div`
  flex: 0 0 auto;
  background-color: gray;
  border-radius: 10px;
  padding-top: 8px;
  margin: 5px;
  width: 180px;
  height: 250px;
  box-shadow: 0px 8px 10px 0 rgb(0, 0, 0, 0.2);
`;

export default BadgeComponent;
