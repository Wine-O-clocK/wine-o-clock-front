import React from 'react';
import styled from 'styled-components';
import { BsCircleFill, BsCircle } from 'react-icons/bs';

function Rating({ cnt }) {
  let arr = Array.from({ length: 5 }, () => 0);
  for (let i = 0; i < cnt; i++) {
    arr[i] = 1;
  }

  return (
    <RatingWrap>
      {
        arr.map((e, idx) => (
          e ? <BsCircleFill key={idx} className='circle' /> : <BsCircle key={idx} className='circle empty' />
        ))
      }
    </RatingWrap>
  );
}

export default Rating;

const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .circle {   
    margin-left: 3px;
    font-size: 14px;
  }
  .empty {
    color: #CDCDCD;
    background-color: #CDCDCD;
    border-radius: 50%;
  }
`