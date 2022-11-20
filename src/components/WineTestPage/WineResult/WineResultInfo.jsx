import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import WineAroma from "./WineAroma";

function WineResultInfo({ wineTestResult }) {
  let wineTypeEng = "";
  if (wineTestResult.wineType === "레드") {
    wineTypeEng = "red";
  } else if (wineTestResult.wineType === "화이트") {
    wineTypeEng = "white";
  } else if (wineTestResult.wineType === "로제") {
    wineTypeEng = "rose";
  } else {
    wineTypeEng = "sparkling";
  }
  const wineAroma = [
    wineTestResult.aroma1,
    wineTestResult.aroma2,
    wineTestResult.aroma3,
  ];

  return (
    <>
      <WineResultInfoWrap>
        {/* <p></p> */}
        <WineNameWrap>" {wineTestResult.wineName} "</WineNameWrap>
        <WineImgWrap>
          <img src={wineTestResult.wineImage} alt="aaa" />
        </WineImgWrap>
        <WineInfoWrap>
          <span className={wineTypeEng}>{wineTestResult.wineType}</span>
          <span className="wineAlcohol">
            도수 : {wineTestResult.wineAlcohol}
          </span>
          <p className="wineAroma">
            {wineAroma.map((aroma, idx) => (
              <WineAroma key={idx} aroma={aroma} />
            ))}
          </p>
        </WineInfoWrap>
        <WineTxtWrap>
          영화 &lt;악마는 프라다를 입는다(2007)&gt;. 잡지사를 다니는 주인공
          '앤디(앤 해서웨이)'가 퇴근 후 남자친구와 함께 마시는 와인이 '루피노
          리제르바 두칼레'입니다. 실제로 뉴욕에서 가장 많이 팔릴 만큼 뉴요커들이
          사랑하는 와인으로 잘 알려져 있죠.
        </WineTxtWrap>
      </WineResultInfoWrap>
    </>
  );
}

const WineResultInfoWrap = styled.div`
  padding: 10px;
  text-align: center;
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
    color: "#000000";
    background-color: #e9e5e5;
  }
  .rose {
    color: #ffffff;
    background-color: #fa8c8c;
  }
  .sparkling {
    color: #000000;
    background-color: #fffcbb;
  }
  .wineAlcohol {
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

export default WineResultInfo;
