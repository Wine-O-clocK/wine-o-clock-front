import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { special_wine } from "../../special_data";

function SpecialWine() {
  const navigate = useNavigate();
  const wineCnt = special_wine.length;
  const [wineArr, setWineArr] = useState([]);
  let wineIdxArr = [];

  useEffect(() => {
    while (wineIdxArr.length !== 3) {
      let wineIdx = Math.floor(Math.random() * (wineCnt - 1));
      wineIdxArr.push(wineIdx);
      wineIdxArr = Array.from(new Set(wineIdxArr));
    }
    setWineArr(wineIdxArr);
  }, []);

  const onClickSpecialWine = (wine) => {
    navigate(`/wine/${wine["wineNameEng"]}`, {
      state: { wine: wine },
    });
  };

  return (
    <SpecialWineContainer>
      <div className="title">크리스마스 스페셜 와인 🎄</div>
      {/* <SpecialWineLineWrap></SpecialWineLineWrap> */}
      <div className="specialWineMain">
        {wineArr.map((wineIdx, idx) => (
          <div
            className="wine"
            key={idx}
            onClick={() => onClickSpecialWine(special_wine[wineIdx])}
          >
            <img src={special_wine[wineIdx]["wineImage"]} />
            <span className="wineName">
              {special_wine[wineIdx]["wineName"]}
            </span>
          </div>
        ))}
      </div>
    </SpecialWineContainer>
  );
}

export default SpecialWine;

const SpecialWineContainer = styled.div`
  .title {
    padding-top: 2px;
    margin-top: 28px;
    font-weight: bold;
  }
  .specialWineMain {
    margin: 0 4px;
    margin-top: 16px;
    display: flex;
    flex-direction: row;

    /* margin-right: 16px; */
    /* padding: 8px;
    box-shadow: 0 0 0 4px #dc3f3f;
    outline: dashed 6px green;
    border-radius: 10px; */
    .wine {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      cursor: pointer;

      img {
        margin: 0 auto;
        height: auto;
      }
      .wineName {
        margin-top: 8px;
        font-weight: bold;
        display: block;
        text-align: center;
      }
    }
  }
`;

const SpecialWineLineWrap = styled.div`
  width: 170px;
  height: 3px;
  background-color: #e45e5e;
  margin: 0;
  margin-top: 6px;
  /* margin-right: 50px; */
`;
