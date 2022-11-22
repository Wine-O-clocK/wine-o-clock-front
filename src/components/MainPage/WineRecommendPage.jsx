import React from "react";
import styled from "styled-components";
import { AiFillHome, AiOutlineReload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Spinner from "../../assets/img/spinner.gif";
import RecommendWineInfo from "./RecommendWineInfo";

function WineRecommendPage() {
  const navigate = useNavigate();
  return (
    <>
      {/* <h3>AI가 당신의 취향을 분석 중입니다!</h3>
      <img src={Spinner} alt="로딩중" /> */}
      <WineRecommendWrap>
        <ResultBoxWrap>
          <RecommendWineInfo />
        </ResultBoxWrap>
        <ButtonWrap>
          <button onClick={() => navigate("/")} className="homeBtn">
            {" "}
            홈으로 돌아가기&nbsp;{<AiFillHome className="icons" />}
          </button>
          <button className="testBtn">
            다시 테스트 해보기&nbsp;{<AiOutlineReload className="icons" />}
          </button>
        </ButtonWrap>
      </WineRecommendWrap>
    </>
  );
}

const WineRecommendWrap = styled.div`
  /* background-color: #c371ea; */
  background: linear-gradient(to bottom, #c77aea, #b255dd);
  height: 120vh;
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

export default WineRecommendPage;
