import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { special_wine } from "../../special_data";
import { MdRefresh } from "react-icons/md";

function SpecialWine() {
  const navigate = useNavigate();
  const month = new Date().getMonth() + 1;
  const specialWine = special_wine[String(month)];
  const wineCnt = specialWine.length;
  const special = {
    1: "새해",
    2: "발렌타인데이",
    3: "화이트데이",
    11: "빼빼로데이",
    12: "크리스마스",
  };
  const [wineArr, setWineArr] = useState([]);
  const [click, setClick] = useState(false);
  let wineIdxArr = [];

  useEffect(() => {
    while (wineIdxArr.length !== 3) {
      let wineIdx = Math.floor(Math.random() * (wineCnt - 1));
      wineIdxArr.push(wineIdx);
      wineIdxArr = Array.from(new Set(wineIdxArr));
    }
    setWineArr(wineIdxArr);
  }, [click]);

  const onClickRefresh = () => {
    setClick(prev => !prev);
  };

  const onClickSpecialWine = (wine) => {
    navigate(`/wine/${wine["wineNameEng"]}`, {
      state: { wine: wine },
    });
  };

  return (
    <SpecialWineContainer>
      <div className="specialWineTop">
        <div className="title">{special[month]} 스페셜 와인</div>
        <MdRefresh
          className="renderBtn"
          size="20"
          onClick={onClickRefresh}
        />
      </div>
      <div className="specialWineMain">
        {wineArr.map((wineIdx, idx) => (
          <div
            className="wine"
            key={idx}
            onClick={() => onClickSpecialWine(specialWine[wineIdx])}
          >
            <img src={specialWine[wineIdx]["wineImage"]} />
            <span className="wineName">{specialWine[wineIdx]["wineName"]}</span>
          </div>
        ))}
      </div>
    </SpecialWineContainer>
  );
}

export default SpecialWine;

const SpecialWineContainer = styled.div`
  padding: 16px 0;
  .specialWineTop {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;
    margin-top: 24px;
    .title {
      padding-top: 2px;
      font-weight: bold;
      margin: auto 0;
    }
    .renderBtn {
      cursor: pointer;
    }
  }
  .specialWineMain {
    margin: 0;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
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
