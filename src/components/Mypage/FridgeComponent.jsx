import React from "react";
import styled from "styled-components";

function FridgeComponent({ lineNum }) {
  return (
    <>
      <FridgeWrap>
        <h3> {lineNum === 1 ? "저장한 와인" : "평가한 와인"} </h3>
        <FridgeCardsWrap>
          <FridgeCardWrap>
            <img
              src={
                lineNum === 1
                  ? "https://ifh.cc/g/TGNFTa.png"
                  : "https://ifh.cc/g/1rVQ2a.png"
              }
              alt="dk"
            />
          </FridgeCardWrap>
          <FridgeCardWrap />
          <FridgeCardWrap />
          <FridgeCardWrap />
        </FridgeCardsWrap>
      </FridgeWrap>
    </>
  );
}

const FridgeWrap = styled.div`
  font-family: "nanumextra";
  padding-top: 8px;
  margin-left: 18px;
  margin-right: 18px;
  margin-bottom: 10px;
  height: 380px;
`;

const FridgeCardsWrap = styled.div`
  display: flex;
  width: 100%;
  height: 310px;
  white-space: nowrap;
  overflow-x: scroll;
`;

const FridgeCardWrap = styled.div`
  flex: 0 0 auto;
  background-color: #ffffff;
  padding: 12px 0;
  border-radius: 10px;
  margin: 0 10px;
  margin-left: 6px;
  width: 180px;
  height: 270px;
  box-shadow: 0px 4px 6px 0 rgb(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default FridgeComponent;
