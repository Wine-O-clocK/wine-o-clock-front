import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AiFillHome, AiOutlineReload } from "react-icons/ai";
import styled from "styled-components";
import {
  answerFirstState,
  answerFourthState,
  answerHelloState,
  answerSecondState,
  answerThirdState,
  nowBubbleState,
  wantToTestState,
  wineTestResultState,
} from "../../../states/WineTestState";
import UserBubbleComponent from "./User/UserBubbleComponent";
import WinyHelloComponent from "./Winy/WinyHelloComponent";
import WinyQuestionComponent from "./Winy/WinyQuestionComponent";
import WinyByeComponent from "./Winy/WinyByeComponent";
import { wine_test_data } from "../../../wine_test_data";

function TestMainComponent() {
  const [nowBubbleNum, setNowBubbleNum] = useRecoilState(nowBubbleState);
  const [answerHelloNum, setAnswerHelloNum] = useRecoilState(answerHelloState);
  const [answerFirstNum, setAnswerFirstNum] = useRecoilState(answerFirstState);
  const [answerSecondNum, setAnswerSecondNum] =
    useRecoilState(answerSecondState);
  const [answerThirdNum, setAnswerThirdNum] = useRecoilState(answerThirdState);
  const [answerFourthNum, setAnswerFourthNum] =
    useRecoilState(answerFourthState);

  const [bubbleMessage, setBubbleMessage] = useState("");
  const [bubbleMessage1, setBubbleMessage1] = useState("");
  const [bubbleMessage2, setBubbleMessage2] = useState("");
  const [bubbleMessage3, setBubbleMessage3] = useState("");
  const [bubbleMessage4, setBubbleMessage4] = useState("");

  const setWantToTest = useSetRecoilState(wantToTestState);
  const setWineTestResult = useSetRecoilState(wineTestResultState);

  const navigate = useNavigate();

  const onClickResetState = () => {
    setNowBubbleNum(0);
    setAnswerHelloNum(0);
    setAnswerFirstNum(0);
    setAnswerSecondNum(0);
    setAnswerThirdNum(0);
    setAnswerFourthNum(0);
    setWantToTest(1);
  };

  const getResultWine = ({ wine, code }) => {
    console.log(code);
    if (wine.wineCode === String(code)) {
      setWineTestResult(wine);
    }
  };
  useEffect(() => {
    if (answerHelloNum === 2) {
      setWantToTest(0);
    }
    if (answerFourthNum !== 0) {
      const code =
        answerFirstNum * 1000 +
        answerSecondNum * 100 +
        answerThirdNum * 10 +
        answerFourthNum;
      wine_test_data.map((wine) => {
        getResultWine({ wine, code });
      });
    }
  }, [answerHelloNum, answerFourthNum]);

  const getBubbleMessage = () => {
    if (nowBubbleNum === 1) {
      if (answerHelloNum === 1) {
        setBubbleMessage("???! ???????????? ????");
      } else if (answerHelloNum === 2) {
        setBubbleMessage("?????? ?????? ???????????? ??????");
      }
    } else if (nowBubbleNum === 2) {
      if (answerFirstNum === 1) {
        setBubbleMessage1("??? ?????? ????");
      } else if (answerFirstNum === 2) {
        setBubbleMessage1("????????? ????????");
      } else if (answerFirstNum === 3) {
        setBubbleMessage1("???????????? ????");
      } else if (answerFirstNum === 4) {
        setBubbleMessage1("???????????? ????");
      }
    } else if (nowBubbleNum === 3) {
      if (answerSecondNum === 1) {
        setBubbleMessage2("???????????? ?????? ?????? ?????? ??? ????");
      } else if (answerSecondNum === 2) {
        setBubbleMessage2("????????? ???????????? ?????? ??? ????");
      } else if (answerSecondNum === 3) {
        setBubbleMessage2("???????????? ????????? ?????? ?????? ??? ??????");
      } else if (answerSecondNum === 4) {
        setBubbleMessage2("??????????????? ???????????? ?????? ??? ????");
      }
    } else if (nowBubbleNum === 4) {
      if (answerThirdNum === 1) {
        setBubbleMessage3("????????? ?????? ???????????? ????????? ????");
      } else if (answerThirdNum === 2) {
        setBubbleMessage3("?????? ???????????? ?????????????????");
      }
    } else if (nowBubbleNum === 5) {
      if (answerFourthNum === 1) {
        setBubbleMessage4("????????? ?????????????????? ????????? ????");
      } else if (answerFourthNum === 2) {
        setBubbleMessage4("????????? ?????? ?????? ????");
      }
    }
  };

  useEffect(() => {
    getBubbleMessage();
  });
  return (
    <>
      <TestMainWrap>
        {nowBubbleNum >= 0 && (
          <>
            <WinyHelloComponent />
            {answerHelloNum !== 0 && (
              <UserBubbleComponent bubbleMessage={bubbleMessage} />
            )}
          </>
        )}
        {answerHelloNum === 2 ? (
          <>
            <WinyQuestionComponent
              questionMessage={"????????? .. ????????? ??? ????????? !"}
            />
            <button onClick={() => navigate("/")} className="homeBtn">
              {" "}
              ????????? ????????????&nbsp;{<AiFillHome className="icons" />}
            </button>
            <button onClick={onClickResetState} className="testBtn">
              ?????? ????????? ?????????&nbsp;{<AiOutlineReload className="icons" />}
            </button>
          </>
        ) : (
          <>
            {nowBubbleNum >= 1 && (
              <>
                <WinyQuestionComponent questionMessage={"????????? ?????? ???????"} />
                {answerFirstNum !== 0 && (
                  <UserBubbleComponent bubbleMessage={bubbleMessage1} />
                )}
              </>
            )}
            {nowBubbleNum >= 2 && (
              <>
                <WinyQuestionComponent
                  questionMessage={"????????? ?????? ??????????"}
                />
                {answerSecondNum !== 0 && (
                  <UserBubbleComponent bubbleMessage={bubbleMessage2} />
                )}
              </>
            )}
            {nowBubbleNum >= 3 && (
              <>
                <WinyQuestionComponent
                  questionMessage={"????????????! ????????? ????????? ????????? ??????????"}
                />
                {answerThirdNum !== 0 && (
                  <UserBubbleComponent bubbleMessage={bubbleMessage3} />
                )}
              </>
            )}
            {nowBubbleNum >= 4 && (
              <>
                <WinyQuestionComponent
                  questionMessage={"???????????? ???????????? ??? ??????????"}
                />
                {answerFourthNum !== 0 && (
                  <UserBubbleComponent bubbleMessage={bubbleMessage4} />
                )}
              </>
            )}
            {nowBubbleNum >= 5 && <WinyByeComponent />}
          </>
        )}
      </TestMainWrap>
    </>
  );
}

const TestMainWrap = styled.div`
  /* background-color: #e2e2e2; */
  padding-top: 8px;
  width: 100%;
  /* height: 625px; */
  height: calc(var(--vh, 1vh) * 100);
  /* margin-bottom: 100px; */
  overflow: auto;

  button {
    display: flex;
    border-radius: 15px;
    background-color: #c57aea;
    border: 2px solid #c57aea;
    padding: 16px 72px;
    margin: 5px auto;
    margin-top: 30px;
    color: #ffffff;
    font-size: 16px;
    box-shadow: 0px 2px 4px 0 rgb(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;

    animation: fadein 0.3s;
    -webkit-animation: fadein 0.3s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    opacity: 0;

    @keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  button:hover {
    background-color: #fef2ff;
    color: #ba63e5;
  }
  .testBtn {
    padding: 16px 64px;
    background-color: #ba63e5;
    border: 2px solid #ba63e5;
    margin-top: 15px;
  }
  .testBtn {
  }
`;

export default TestMainComponent;
