import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { recent_wine } from "../../../recent_data";
import WineAroma from "../../WineTestPage/WineResult/WineAroma";
import OtherWineInfo from "./OtherWineInfo";

function RecommendResult() {
  const wine = recent_wine.slice(0, 10);
  const [idxArr, setIdxArr] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  //const [mainWine, setMainWine] = useState([]);
  const [otherWine, setOtherWine] = useState([]);

  const shuffleArr = (arr) => {
    return arr.sort(() => 0.5 - Math.random());
  };

  useEffect(() => {
    let arrIdx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let tmpWine = wine;
    shuffleArr(arrIdx);
    setIdxArr(arrIdx);
    //setMainWine(wine[arrIdx[0]]);
    tmpWine.splice(arrIdx[0], 1);
    setOtherWine(tmpWine);
  }, []);

  let wineTypeEng = "";
  if (wine[idxArr[0]]["wineType"] === "레드") {
    wineTypeEng = "red";
  } else if (wine[idxArr[0]]["wineType"] === "화이트") {
    wineTypeEng = "white";
  } else if (wine[idxArr[0]]["wineType"] === "로제") {
    wineTypeEng = "rose";
  } else {
    wineTypeEng = "sparkling";
  }

  return (
    <>
      <WineResultInfoWrap>
        <p>당신을 위한 오늘의 와인은 ..</p>
        <WineNameWrap>" {wine[idxArr[0]].wineName} "</WineNameWrap>
        <WineImgWrap>
          <img src={wine[idxArr[0]].wineImage} alt="wineImg" />
        </WineImgWrap>
        <WineInfoWrap>
          <span className={wineTypeEng}>{wine[idxArr[0]].wineType}</span>
        </WineInfoWrap>
        <WineTxtWrap>
          추천받은 와인은 <br />
          <strong>'마이페이지 &gt; My 와인 냉장고'</strong>에서 <br />
          확인하실 수 있습니다.
        </WineTxtWrap>
      </WineResultInfoWrap>
      <OtherWineWrap>
        <OtherWineInfo wine={otherWine} />
      </OtherWineWrap>
    </>
  );
}

const WineResultInfoWrap = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 15px;
  margin: 0 22px;
  padding: 20px 0;
  box-shadow: 0px 8px 10px 0 rgb(0, 0, 0, 0.2);
`;

const WineNameWrap = styled.div`
  font-family: "AppleBold";
  font-size: larger;
  padding: 0 40px;
`;

const WineImgWrap = styled.div`
  /* flex: 0 0 auto; */
  /* display: flex; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 300px;
  margin: 30px auto;
  background-color: white;
  border-radius: 15px;
  img {
    /* border-radius: 20px; */
    /* width: 100%; */
    height: 80%;
    object-fit: cover;
  }
`;

const WineInfoWrap = styled.div`
  span {
    border-radius: 5px;
    padding: 8px 16px;
    display: inline-block;
    margin: 0 4px;
  }
  .red {
    color: #ffffff;
    background-color: #ba0e30;
  }
  .white {
    color: #ffffff;
    background-color: #808ee8;
  }
  .rose {
    color: #ffffff;
    background-color: #fa8c8c;
  }
  .sparkling {
    color: #000000;
    background-color: #fffcbb;
  }
  .winePrice {
    color: #000000;
    background-color: #ffffff;
  }
`;

const WineTxtWrap = styled.div`
  font-family: "AppleRegular";
  /* font-size: larger; */
  margin-top: 20px;
  padding: 10px 20px;
`;

const OtherWineWrap = styled.div``;

export default RecommendResult;
