import React from 'react';
import styled from 'styled-components';
import { BsCircleFill, BsCircle } from 'react-icons/bs';

function Rating({ cnt, wineType }) {
  let arr = Array.from({ length: 5 }, () => 0);
  for (let i = 0; i < cnt; i++) {
    arr[i] = 1;
  }

  return (
    <RatingWrap>
      {
        arr.map((e, idx) => (
          e ? <BsCircleFill key={idx} className={`circle ${wineType}`}/> : <BsCircle key={idx} className="empty" />
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
    border-radius: 50%;
    margin-left: 3px;
    font-size: 14px;
  }
  .empty {
    color: #CDCDCD;
    background-color: #CDCDCD;
    border-radius: 50%;
    margin-left: 3px;
    font-size: 14px;
  }
  .red {
    color: #ba0e30;
    background-color: #ba0e30;
  }
  .white {
    color: #808ee8;
    background-color: #808ee8;
  }
  .rose {
    color: #fa8c8c;
    background-color: #fa8c8c;
  }
  .sparkling {
    color: #f7f2a0;
    background-color: #f7f2a0;
  }
`