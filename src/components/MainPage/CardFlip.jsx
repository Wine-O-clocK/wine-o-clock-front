import React from 'react'
import styled from 'styled-components';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function CardFlip({ wine }) {
  const wineInfo = {
    wineImage: wine[0],
    wineName: wine[1],
    wineNameEng: wine[2],
    wineType: wine[3],
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
              <span>{wineInfo.wineName}</span>
              <span>{wineInfo.wineNameEng}</span>
              <span>{wineInfo.wineType}</span>
              <span>{wineInfo.wineVariety}</span>
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
    margin: 0 10px;
    border: 1px solid gray;
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

  .wineName {
    font-weight: bold;
    display: block;
    text-align: center;
  } 
`

const BackWrap = styled(BackSide)`
  .wineInfo {
    display: block;
    span {
      display: block;
      margin: 16px;
    }
  }
`