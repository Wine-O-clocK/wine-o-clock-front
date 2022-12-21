import React from 'react'
import styled from 'styled-components';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Rating from './Rating';

function CardFlip({ wine }) {
  const wineTypeEng = (wineType) => {
    if (wineType === '스파클링') return 'sparkling'
    else if (wineType === '레드') return 'red'
    else if (wineType === '화이트') return 'white'
    else if (wineType === '로제') return 'rose'
  }
  const wineType = wine['wineType'];

  return (
    <CardWrap>
      <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        className="flip"
      >
        <FrontWrap>
          <div className='card'>
            <img src={wine["wineImage"]} />
            <div className='wineNameWrap'>
              <span className='wineName'>{wine["wineName"]}</span>
            </div>
          </div>
        </FrontWrap>
        <BackWrap>
          <div className='card'>
            <div className='wineInfo'>
              <span className='wineNameEng'>{wine["wineNameEng"]}</span>
              <span>{wine["wineName"]}</span>
              <span>{wine["wineType"]}</span>
              <span className='rating'>당도 : <Rating cnt={wine["wineSweet"]} wineType={wineTypeEng(wine.wineType)}/></span>
              <span className='rating'>바디 : <Rating cnt={wine["wineBody"]} wineType={wineTypeEng(wine.wineType)}/></span>
              <span>품종 : {wine["wineVariety"]}</span>
            </div>
          </div>
        </BackWrap>
      </Flippy>
    </CardWrap>
  )
}

export default CardFlip;

const CardWrap = styled.div`
  img {
    height: auto;
  }
  .flippy-container {
    margin: 20px 8px;
  }
  .card {
    text-align: center;
  }
`

const FrontWrap = styled(FrontSide)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
  box-shadow: none;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #595959;

  .wineNameWrap {
    height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .wineName {
    font-weight: bold;
    display: block;
  } 
`

const BackWrap = styled(BackSide)`
  box-shadow: none;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #595959;
  .wineInfo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    span {
      display: block;
      margin: 8px;
      font-size: 15px;
    }
    .wineNameEng {
      font-style: italic;
    }
    .rating {
      width: fit-content;
      display: flex;
      flex-direction: row;
      margin: 8px auto;
    }
  }
`