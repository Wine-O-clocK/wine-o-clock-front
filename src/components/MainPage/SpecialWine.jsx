import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { special_wine } from '../../special_data';

function SpecialWine() {
  const navigate = useNavigate();
  const month = new Date().getMonth()+1;
  const specialWine = special_wine[String(month)]
  const wineCnt = specialWine.length;
  const special = {
    1: '새해',
    2: '발렌타인데이',
    3: '화이트데이',
    11: '빼빼로데이',
    12: '크리스마스'
  }
  const [wineArr, setWineArr] = useState([]);
  let wineIdxArr = [];
  
  useEffect(() => {
    while (wineIdxArr.length !== 3) {
      let wineIdx = Math.floor(Math.random()*(wineCnt-1))
      wineIdxArr.push(wineIdx)
      wineIdxArr = Array.from(new Set(wineIdxArr))
    }
    setWineArr(wineIdxArr)
  }, [])

  const onClickSpecialWine = (wine) => {
    navigate(`/wine/${wine['wineNameEng']}`, {
      state: { wine: wine }
    })
  }

  return (
    <SpecialWineContainer>
      <div className='title'>{special[month]} 스페셜 와인</div>
      <div className='specialWineMain'>
      {
          wineArr.map((wineIdx, idx) => (
            <div className='wine' key={idx} onClick={() => onClickSpecialWine(specialWine[wineIdx])}>
              <img src={specialWine[wineIdx]["wineImage"]} />
              <span className='wineName'>{specialWine[wineIdx]["wineName"]}</span>
            </div>
          ))
        }
      </div>
    </SpecialWineContainer>
  );
}

export default SpecialWine;

const SpecialWineContainer = styled.div`
  .title {
    padding-top: 2px;
    font-weight: bold;
  }
  .specialWineMain {
    margin-top: 16px;
    display: flex;
    flex-direction: row;

    .wine {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    /* margin-right: 16px;
    box-shadow: 0 0 0 2px red;
    outline: dashed 2px green; */
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
`