import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { recent_wine } from "../../recent_data";
import { MdRefresh } from "react-icons/md";

function RecentWine() {
  const navigate = useNavigate();
  const [currWine, setCurrWine] = useState([]);
  const [currIdx, setCurrIdx] = useState(0);

  useEffect(() => {
    const wineArr = recent_wine.slice(0, 3);
    setCurrWine(wineArr);
  }, []);

  const onClickRefresh = (currIdx) => {
    let startIdx = currIdx + 3;
    let endIdx = startIdx + 3;

    if (endIdx > recent_wine.length) {
      endIdx = recent_wine.length;
    }
    const wineArr = recent_wine.slice(startIdx, endIdx);
    if (endIdx === recent_wine.length) {
      startIdx = 0;
      endIdx = 3;
    }
    setCurrWine(wineArr);
    setCurrIdx(startIdx);
  };

  const onClickRecentWine = (wine) => {
    navigate(`/wine/${wine["wineNameEng"]}`, {
      state: { wine: wine },
    });
  };

  return (
    <RecentWineContainer>
      <div className="recentWineTop">
        <div className="title">최신 언급 와인</div>
        <MdRefresh
          className="renderBtn"
          size="20"
          onClick={() => onClickRefresh(currIdx)}
        />
      </div>
      <div className="recentWineMain">
        {currWine.map((wine, idx) => (
          <div
            className="wine"
            key={idx}
            onClick={() => onClickRecentWine(wine)}
          >
            <img src={wine["wineImage"]} />
            <span className="wineName">{wine["wineName"]}</span>
          </div>
        ))}
      </div>
    </RecentWineContainer>
  );
}

export default RecentWine;

const RecentWineContainer = styled.div`
  padding: 16px 0;
  .recentWineTop {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;

    .title {
      padding-top: 2px;
      font-weight: bold;
      margin-top: 24px;
    }
    .renderBtn {
      cursor: pointer;
    }
  }

  .recentWineMain {
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
