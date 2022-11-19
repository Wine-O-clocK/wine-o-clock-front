import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Rating from "../MainPage/Rating";
import Aroma from "./Aroma";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { LoginState } from "../../states/LoginState";

function WineDetailPage() {
  const location = useLocation();
  const wine = location.state.wine;
  const wineAroma = [wine.aroma1, wine.aroma2, wine.aroma3];
  const isLoggedIn = useRecoilValue(LoginState);
  const [clickHeart, setClickHeart] = useState(false);

  let wineTypeEng = "";
  if (wine["wineType"] === "레드") {
    wineTypeEng = "red";
  } else if (wine["wineType"] === "화이트") {
    wineTypeEng = "white";
  } else if (wine["wineType"] === "로제") {
    wineTypeEng = "rose";
  } else {
    wineTypeEng = "sparkling";
  }

  const handleHeart = () => {
    setClickHeart((prev) => !prev);
  }

  return (
    <DetailContainer>
      <div className="wineImg">
        <img src={wine["wineImage"]} />
      </div>
      <div className="wineInfo">
        <p className="wineName">{wine["wineName"]}</p>
        <p className="wineNameEng">{wine["wineNameEng"]}</p>
        <span className={wineTypeEng}>{wine["wineType"]}</span>
        <p className="rating">
          당도 : <Rating cnt={wine["wineSweet"]} />
        </p>
        <p className="rating">
          바디 : <Rating cnt={wine["wineBody"]} />
        </p>
        <p className="wineAroma">
          {wineAroma.map((aroma, idx) => (
            <Aroma key={idx} aroma={aroma} />
          ))}
        </p>
      </div>
      {isLoggedIn && 
        <span className="wineLike" onClick={handleHeart}>
        {clickHeart ? <AiFillHeart size="24" color="#c371ea"/> : <AiOutlineHeart size="24" color="#7c7b7b"/> }
        </span>
      }
    </DetailContainer>
  );
}

export default WineDetailPage;

const DetailContainer = styled.div`
  position: relative;
  margin: 8px 20px 80px;
  .wineImg {
    padding: 15px 10px;
    border-radius: 10px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    box-shadow: 1.7px 4.7px 10px 0 rgb(0 0 0 / 15%);
    background-color: #fff;

    img {
      display: block;
      margin: auto;
      height: 55vh;
    }
  }

  .wineInfo {
    text-align: left;
    .wineName {
      font-size: 20px;
      font-family: "AppleBold";
      margin-bottom: 0;
    }
    .wineNameEng {
      font-size: 17px;
      margin-top: 6px;
    }
    .rating {
      width: fit-content;
      display: flex;
      flex-direction: row;
    }
    span {
      border-radius: 5px;
      padding: 8px 16px;
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
  }

  .wineAroma {
    display: flex;
    flex-direction: row;
  }
  .wineLike {
    position: absolute;
    display: inline-block;
    height: 24px;
    top: 62vh;
    right: 0;
  }
`;
