import React from "react";
import styled from "styled-components";
import FridgeComponent from "./FridgeComponent";

function MyWineFridge() {
  return (
    <>
      <MyWineFridgeWrap>
        <h3>My 와인 냉장고</h3>
        <FridgeWrap>
          <FridgeComponent lineNum={1} />
          <FridgeLineWrap />
          <FridgeComponent lineNum={2} />
        </FridgeWrap>
      </MyWineFridgeWrap>
    </>
  );
}

const MyWineFridgeWrap = styled.div`
  font-family: "AppleMedium";
  padding-top: 8px;
  margin-left: 12px;
  height: 800px;
  margin-right: 20px;
  margin-bottom: 50px;
`;

const FridgeWrap = styled.div`
  background-color: #ececec;
  border-radius: 10px;
  /* border: 6px solid #8d8d8d; */
  padding-top: 8px;
  margin: 5px;
  width: 100%;
  height: 670px;
  box-shadow: 0px 8px 10px 0 rgb(0, 0, 0, 0.2);
`;

const FridgeLineWrap = styled.div`
  height: 1px;
  background-color: #999999;
  margin: 0 25px;
`;

export default MyWineFridge;
