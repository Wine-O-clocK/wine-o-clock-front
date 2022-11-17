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
import BottomSelectComponent from "./BottomSelectComponent";
import TestMainComponent from "./TestMainComponent";
import WineTestResult from "./WineTestResult";

function WineTestPage() {
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
          <WineTestResult />
        </>
      )}
    </>
  );
}

const WineTestPageWrap = styled.div`
  margin-bottom: 60px;
`;

export default WineTestPage;
