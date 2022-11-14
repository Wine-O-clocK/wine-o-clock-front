import React from "react";
import { useResetRecoilState } from "recoil";
import styled from "styled-components";
import {
  answerFirstState,
  answerFourthState,
  answerSecondState,
  answerThirdState,
  nowBubbleState,
} from "../../states/WineTestState";
import BottomSelectComponent from "./BottomSelectComponent";
import TestMainComponent from "./TestMainComponent";

function WineTestPage() {
  useResetRecoilState(nowBubbleState);
  useResetRecoilState(answerFirstState);
  useResetRecoilState(answerSecondState);
  useResetRecoilState(answerThirdState);
  useResetRecoilState(answerFourthState);
  return (
    <>
      <WineTestPageWrap>
        <TestMainComponent />
        <BottomSelectComponent />
      </WineTestPageWrap>
    </>
  );
}

const WineTestPageWrap = styled.div`
  margin-bottom: 60px;
`;

export default WineTestPage;
