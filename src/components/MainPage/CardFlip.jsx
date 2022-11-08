import React from 'react'
import styled from 'styled-components';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Rating from './Rating';

function CardFlip({ wine }) {
  const wineInfo = {
    wineImage: wine[0],
    wineName: wine[1],
    wineNameEng: wine[2],
    wineType: wine[3],
    wineSweet: wine[6],
    wineBody: wine[7],
    wineVariety: wine[8]
  }

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
            <img src={wineInfo.wineImage} />
            <span className='wineName'>{wineInfo.wineName}</span>
          </div>
        </FrontWrap>
        <BackWrap>
          <div className='card'>
            <div className='wineInfo'>
              <span className='wineNameEng'>{wineInfo.wineNameEng}</span>
              <span>{wineInfo.wineName}</span>
              <span>{wineInfo.wineType}</span>
              <span className='rating'>당도 : <Rating cnt={wineInfo.wineSweet}/></span>
              <span className='rating'>바디 : <Rating cnt={wineInfo.wineBody}/></span>
              <span>품종 : {wineInfo.wineVariety}</span>
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
    .rating {
      width: fit-content;
      display: flex;
      flex-direction: row;
      margin: 8px auto;
    }
  }
`