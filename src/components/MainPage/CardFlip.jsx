import React from 'react'
import styled from 'styled-components';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function CardFlip({wine}) {
  return (
    <CardWrap>
     <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        style={{width: "200px"}}
      >
        <FrontSide>
          <div className='card'>
            <img src={wine[0]}/>
            <span className='wineName'>{wine[1]}</span>
          </div> 
        </FrontSide>
        <BackSide>
          <div className='card'>
            <span className='wineName'>
              {wine[1]}
            </span>
          </div>
        </BackSide>
      </Flippy>
    </CardWrap>

  )
}

export default CardFlip;

const CardWrap = styled.div`
  .card {
    display: flex;

    flex-direction: column;
    text-align: center;
    cursor: pointer;
  }

`