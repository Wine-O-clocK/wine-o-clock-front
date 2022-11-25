import React from "react";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  allAnswersState,
  answerFirstState,
  answerFourthState,
  answerHelloState,
  answerSecondState,
  answerThirdState,
  nowBubbleState,
  wantToTestState,
} from "../../states/WineTestState";
import BottomSelectComponent from "./WineTest/BottomSelectComponent";
import TestMainComponent from "./WineTest/TestMainComponent";
import WineTestResult from "./WineResult/WineTestResult";
import { useLocation } from "react-router-dom";
import { PathState } from "../../states/MainState";

function WineTestPage() {
  const location = useLocation();
  const setPathState = useSetRecoilState(PathState);
  setPathState(location.pathname);

  const setNowBubble = useSetRecoilState(nowBubbleState);
  const setAnswerHello = useSetRecoilState(answerHelloState);
  const setAnswerFirst = useSetRecoilState(answerFirstState);
  const setAnswerSecond = useSetRecoilState(answerSecondState);
  const setAnswerThird = useSetRecoilState(answerThirdState);
  const setAnswerFourth = useSetRecoilState(answerFourthState);
  const setWantToTest = useSetRecoilState(wantToTestState);

  const [allAnswers, setAllAnswers] = useRecoilState(allAnswersState);

  useEffect(() => {
    setNowBubble(0);
    setAnswerHello(0);
    setAnswerFirst(0);
    setAnswerSecond(0);
    setAnswerThird(0);
    setAnswerFourth(0);
    setWantToTest(1);
    // setAllAnswers(0);
  });

  return (
    <>
      {allAnswers === 0 ? (
        <>
          <WineTestPageWrap>
            <TestMainComponent />
            <BottomSelectComponent />
          </WineTestPageWrap>
        </>
      ) : (
        <>
          <WineTestResultWrap>
            <WineTestResult />
          </WineTestResultWrap>
        </>
      )}
    </>
  );
}

const WineTestPageWrap = styled.div`
  margin-bottom: 60px;
`;

const WineTestResultWrap = styled.div`
  height: 100vh;
`;

export default WineTestPage;
