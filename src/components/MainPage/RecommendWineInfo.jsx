import React from "react";
import styled from "styled-components";
import WineAroma from "./WineAroma";

const wineTestResult = {
  wineCode: "1122",
  wineImage:
    "https://wine21.speedgabia.com/WINE_MST/TITLE/0158000/W0158106.jpg",
  wineName: "샤또 샤스 스플린",
  wineNameEng: "Chateau Chasse Spleen",
  wineType: "레드",
  wineAlcohol: "12 - 13",
  winePrice: 8,
  wineSweet: 1,
  wineBody: 4,
  wineVariety: "블렌디드",
  aroma1: " ",
  aroma2: " ",
  aroma3: " ",
  wineText:
    "'슬픔이란 안녕'이라는 뜻의 '샤스 스플린(Chasse Spleen)'은 프랑스 보르도(Bordeaux)의 물리(Moulis) 지역에서 생산한 레드 와인입니다. 프랑스의 유명한 시인 샤를 보들레르(Charles Baudelaire)가 사랑한 와인으로도 잘 알려져 있는데요. 실제로 보들레르는 이 와인을 마시며 슬픔을 달랬다고 해요.",
};

function RecommendWineInfo() {
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
        <p>당신을 위한 오늘의 와인은 ..</p>
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
          추천받은 와인은 <br />
          <strong>'마이페이지 &gt; My 와인 냉장고'</strong>에서 <br />
          확인하실 수 있습니다.
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

export default RecommendWineInfo;
