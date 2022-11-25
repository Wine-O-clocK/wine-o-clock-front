import React, { useEffect } from "react";
import styled from "styled-components";
import { AiFillHome, AiOutlineReload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Spinner from "../../assets/img/spinner.gif";
import RecommendWineInfo from "./RecommendWineInfo";
import { useRecoilState } from "recoil";
import { wineLoadingState } from "../../states/MainState";

function WineRecommendPage() {
  const navigate = useNavigate();
  const [wineLoading, setWineLoading] = useRecoilState(wineLoadingState);
  useEffect(() => {
    setTimeout(() => setWineLoading(1), 3000);
  });

  return (
    <>
      <WineRecommendWrap>
        {wineLoading ? (
          <>
            <ResultBoxWrap>
              <RecommendWineInfo />
            </ResultBoxWrap>
            <ButtonWrap>
              <button
                onClick={() => {
                  setWineLoading(0);
                  navigate("/");
                }}
                className="homeBtn"
              >
                {" "}
                홈으로 돌아가기&nbsp;{<AiFillHome className="icons" />}
              </button>
              <button className="testBtn">
                다시 테스트 해보기&nbsp;{<AiOutlineReload className="icons" />}
              </button>
            </ButtonWrap>
          </>
        ) : (
          <>
            <WineLoadingWrap>
              <ResultBoxWrap>
                <h3>AI가 당신의 취향을 분석 중입니다!</h3>
                <img src={Spinner} alt="로딩중" />
              </ResultBoxWrap>
            </WineLoadingWrap>
          </>
        )}
      </WineRecommendWrap>
    </>
  );
}

const WineRecommendWrap = styled.div`
  /* background-color: #c371ea; */
  background: linear-gradient(to bottom, #f8e49d, #ffa83d);
  height: 120vh;
  padding: 0;
  padding-top: 30px;
  padding-bottom: 50px;
`;

const WineLoadingWrap = styled.div`
  text-align: center;

  img {
    width: 150px;
    margin: 30px 0;
  }
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
    background-color: #fff6e3;
    border: 2px solid #fff6e3;
    padding: 16px 110px;
    margin: 5px auto;
    margin-top: 30px;
    color: #2a2929;
    font-size: 16px;
    box-shadow: 0px 2px 4px 0 rgb(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;
  }
  button:hover {
    border: 2px solid #ffb066;
  }
  .testBtn {
    padding: 16px 100px;
    background-color: #ffe6b5;
    border: 2px solid #ffe6b5;
    margin-top: 15px;
  }
`;

export default WineRecommendPage;
