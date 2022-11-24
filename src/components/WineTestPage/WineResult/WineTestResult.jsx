import React from "react";
import styled from "styled-components";
import { AiFillHome, AiOutlineReload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  allAnswersState,
  answerFirstState,
  answerFourthState,
  answerHelloState,
  answerSecondState,
  answerThirdState,
  nowBubbleState,
  wantToTestState,
  wineTestResultState,
} from "../../../states/WineTestState";
import WineResultInfo from "./WineResultInfo";
import KakaoShare from "./KakaoShare";

function WineTestResult() {
  const navigate = useNavigate();

  const setNowBubbleNum = useSetRecoilState(nowBubbleState);
  const setAnswerHelloNum = useSetRecoilState(answerHelloState);
  const setAnswerFirstNum = useSetRecoilState(answerFirstState);
  const setAnswerSecondNum = useSetRecoilState(answerSecondState);
  const setAnswerThirdNum = useSetRecoilState(answerThirdState);
  const setAnswerFourthNum = useSetRecoilState(answerFourthState);
  const setWantToTest = useSetRecoilState(wantToTestState);
  const setAllAnswers = useSetRecoilState(allAnswersState);

  const onClickResetState = () => {
    setNowBubbleNum(0);
    setAnswerHelloNum(0);
    setAnswerFirstNum(0);
    setAnswerSecondNum(0);
    setAnswerThirdNum(0);
    setAnswerFourthNum(0);
    setWantToTest(1);
    setAllAnswers(0);
  };

  const wineTestResult = useRecoilValue(wineTestResultState);

  return (
    <>
      {wineTestResult && (
        <WineTestResultWrap>
          <ResultBoxWrap>
            <WineResultInfo wineTestResult={wineTestResult} />
          </ResultBoxWrap>
          <ShareWrap>
            <KakaoShare
              _sub={"나의 와인은"}
              _title={wineTestResult.wineName}
              _imageUrl={wineTestResult.wineImage}
            />
          </ShareWrap>
          <ButtonWrap>
            <button onClick={() => navigate("/")} className="homeBtn">
              {" "}
              홈으로 돌아가기&nbsp;{<AiFillHome className="icons" />}
            </button>
            <button onClick={onClickResetState} className="testBtn">
              다시 테스트 해보기&nbsp;{<AiOutlineReload className="icons" />}
            </button>
          </ButtonWrap>
        </WineTestResultWrap>
      )}
    </>
  );
}

const WineTestResultWrap = styled.div`
  /* background-color: #c371ea; */
  background: linear-gradient(to bottom, #c77aea, #b255dd);
  height: 140vh;
  padding: 0;
  padding-top: 30px;
  padding-bottom: 50px;
`;

const ResultBoxWrap = styled.div`
  background-color: #f5f5f5;
  border-radius: 15px;
  /* border: 6px solid #8d8d8d; */
  margin: 0 22px;
  /* height: 500px; */
  padding: 20px 0;
  box-shadow: 0px 8px 10px 0 rgb(0, 0, 0, 0.2);
`;

const ShareWrap = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  /* border: 6px solid #8d8d8d; */
  margin: 0 80px;
  margin-top: 35px;
  /* height: 500px; */
  padding: 4px;
  box-shadow: 0px 8px 10px 0 rgb(0, 0, 0, 0.2);
`;

const ButtonWrap = styled.div`
  button {
    display: flex;
    border-radius: 15px;
    background-color: #f9e3ff;
    border: 2px solid #f9e3ff;
    padding: 16px 110px;
    margin: 5px auto;
    margin-top: 30px;
    color: #2a2929;
    font-size: 16px;
    box-shadow: 0px 2px 4px 0 rgb(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;
  }
  .testBtn {
    padding: 16px 100px;
    background-color: #f0b8ff;
    border: 2px solid #f0b8ff;
    margin-top: 15px;
  }
`;

export default WineTestResult;
