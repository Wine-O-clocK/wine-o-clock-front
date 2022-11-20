import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  answerFirstState,
  answerFourthState,
  answerHelloState,
  answerSecondState,
  answerThirdState,
  nowBubbleState,
  wantToTestState,
} from "../../../states/WineTestState";

function BottomSelectComponent() {
  const [nowBubbleNum, setNowBubbleNum] = useRecoilState(nowBubbleState);
  const setAnswerHelloNum = useSetRecoilState(answerHelloState);
  const setAnswerFirstNum = useSetRecoilState(answerFirstState);
  const setAnswerSecondNum = useSetRecoilState(answerSecondState);
  const setAnswerThirdNum = useSetRecoilState(answerThirdState);
  const setAnswerFourthNum = useSetRecoilState(answerFourthState);

  const wantToTest = useRecoilValue(wantToTestState);

  return (
    <>
      <BottomSelectWrap>
        {wantToTest === 1 ? (
          <>
            {nowBubbleNum === 0 && (
              <>
                <button
                  onClick={() => {
                    setAnswerHelloNum(1);
                    setNowBubbleNum(1);
                  }}
                >
                  응! 알아볼래 😊
                </button>
                <button
                  onClick={() => {
                    setAnswerHelloNum(2);
                    setNowBubbleNum(1);
                  }}
                >
                  아니 나는 안궁금해 ☹️
                </button>
              </>
            )}
            {nowBubbleNum === 1 && (
              <>
                <button
                  onClick={() => {
                    setAnswerFirstNum(1);
                    setNowBubbleNum(2);
                  }}
                >
                  나 혼자 😌
                </button>
                <button
                  onClick={() => {
                    setAnswerFirstNum(2);
                    setNowBubbleNum(2);
                  }}
                >
                  친구랑 🙏🏻
                </button>
                <button
                  onClick={() => {
                    setAnswerFirstNum(3);
                    setNowBubbleNum(2);
                  }}
                >
                  애인이랑 💖
                </button>
                <button
                  onClick={() => {
                    setAnswerFirstNum(4);
                    setNowBubbleNum(2);
                  }}
                >
                  가족이랑 👥
                </button>
              </>
            )}
            {nowBubbleNum === 2 && (
              <>
                <button
                  onClick={() => {
                    setAnswerSecondNum(1);
                    setNowBubbleNum(3);
                  }}
                >
                  우울해서 위로 받고 싶은 날 💧
                </button>
                <button
                  onClick={() => {
                    setAnswerSecondNum(2);
                    setNowBubbleNum(3);
                  }}
                >
                  신나게 파티하고 싶은 날 🥳
                </button>
                <button
                  onClick={() => {
                    setAnswerSecondNum(3);
                    setNowBubbleNum(3);
                  }}
                >
                  퇴근하고 가볍게 먹고 싶은 날 ☁️
                </button>
                <button
                  onClick={() => {
                    setAnswerSecondNum(4);
                    setNowBubbleNum(3);
                  }}
                >
                  누군가에게 선물하고 싶은 날 🎁
                </button>
              </>
            )}
            {nowBubbleNum === 3 && (
              <>
                <button
                  onClick={() => {
                    setAnswerThirdNum(1);
                    setNowBubbleNum(4);
                  }}
                >
                  편의점에서 가볍게 🏪
                </button>
                <button
                  onClick={() => {
                    setAnswerThirdNum(2);
                    setNowBubbleNum(4);
                  }}
                >
                  딱히 상관없어 🤷🏻‍♀️
                </button>
              </>
            )}
            {nowBubbleNum === 4 && (
              <>
                <button
                  onClick={() => {
                    setAnswerFourthNum(1);
                    setNowBubbleNum(5);
                  }}
                >
                  저렴한 가격이었으면 좋겠어 👛
                </button>
                <button
                  onClick={() => {
                    setAnswerFourthNum(2);
                    setNowBubbleNum(5);
                  }}
                >
                  비싸도 상관 없어 💸
                </button>
              </>
            )}
          </>
        ) : null}
      </BottomSelectWrap>
    </>
  );
}

const BottomSelectWrap = styled.div`
  margin: 0 auto;
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100vw;
  height: 70px;
  /* margin-bottom: 55px; */
  background-color: #ffffff;
  white-space: nowrap;
  overflow-x: scroll;

  button {
    border-radius: 20px;
    border: 1.6px solid #c371ea;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
    margin: auto 0;
    margin-left: 10px;
    padding: 8px 18px;
    font-size: 95%;
  }

  button:hover {
    color: white;
    background-color: #c371ea;
  }
`;

export default BottomSelectComponent;
