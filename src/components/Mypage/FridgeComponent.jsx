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
  font-family: "AppleRegular";
  padding-top: 8px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  height: 320px;
`;

const FridgeCardsWrap = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
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
  width: 140px;
  height: 210px;
  box-shadow: 0px 4px 6px 0 rgb(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    /* width: 100%; */
    height: 90%;
    object-fit: cover;
  }
`;

export default FridgeComponent;
