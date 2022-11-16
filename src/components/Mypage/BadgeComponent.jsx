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
  font-family: "AppleMedium";
  padding-top: 8px;
  margin-left: 15px;
  margin-top: 10px;
  /* margin-right: 5px; */
  /* width: 100vw; */
  height: 200px;
`;

const BadgeWrap = styled.div`
  display: flex;
  /* position: fixed; */
  width: 100%;
  height: 150px;
  white-space: nowrap;
  overflow-x: scroll;
`;

const BadgeCardWrap = styled.div`
  flex: 0 0 auto;
  background-color: #f5e4b0;
  border-radius: 20px;
  margin-top: 5px;
  margin-left: 6px;
  margin-right: 12px;
  width: 100px;
  height: 100px;
  box-shadow: 0px 3px 10px 0 rgb(0, 0, 0, 0.2);
`;

export default BadgeComponent;
