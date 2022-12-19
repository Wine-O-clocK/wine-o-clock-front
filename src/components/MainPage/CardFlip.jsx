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
            <span className='wineName'>{wine["wineName"]}</span>
          </div>
        </FrontWrap>
        <BackWrap>
          <div className='card'>
            <div className='wineInfo'>
              <span className='wineNameEng'>{wine["wineNameEng"]}</span>
              <span>{wine["wineName"]}</span>
              <span>{wine["wineType"]}</span>
              {/* <span className={wineTypeEng(wineType)}>{wine["wineType"]}</span> */}
              <span className='rating'>당도 : <Rating cnt={wine["wineSweet"]}/></span>
              <span className='rating'>바디 : <Rating cnt={wine["wineBody"]}/></span>
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
  border-radius: 25px;
  padding: 0 30px;
  img {
    height: auto;
  }
  .flippy-container {
    margin: 0 10px;
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
  .wineName {
    font-weight: bold;
    display: block;
    text-align: center;
  } 
`

const BackWrap = styled(BackSide)`
  box-shadow: none;
  .wineInfo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    span {
      display: block;
      margin: 16px;
    }
    .wineNameEng {
      font-style: italic;
    }
    .red {
      border-radius: 5px;
      padding: 8px 16px;
      color: #ffffff;
      background-color: #ba0e30;
    }
    .white {
      border-radius: 5px;
      padding: 8px 16px;
      color: #ffffff;
      background-color: #808ee8;
    }
    .rose {
      border-radius: 5px;
      padding: 8px 16px;
      color: #ffffff;
      background-color: #fa8c8c;
    }
    .sparkling {
      border-radius: 5px;
      padding: 8px 16px;
      color: #000000;
      background-color: #fffcbb;
    }
    .rating {
      width: fit-content;
      display: flex;
      flex-direction: row;
      margin: 8px auto;
    }
  }
`