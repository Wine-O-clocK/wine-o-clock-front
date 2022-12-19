import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function OtherWineInfo({ wine }) {
  const navigate = useNavigate();

  const onClickWine = (wine) => {
    navigate(`/wine/${wine["wineNameEng"]}`, {
      state: { wine: wine },
    });
  };

  return (
    <OtherWineWrap>
      {
        wine.map((w) => (
          <WineInfoWrap>
            <WineInfo onClick={() => onClickWine(w)}>
              <img src={w.wineImage} />
            </WineInfo>
            <span className='wineName'>{w.wineName}</span>
          </WineInfoWrap>
        ))
      }
    </OtherWineWrap>
  );
}

export default OtherWineInfo;

const OtherWineWrap = styled.div`
  text-align: center;
  border-radius: 15px;
  margin: 16px 22px;
  padding: 20px 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const WineInfoWrap = styled.div`
  .wineName {
    font-family: 'AppleBold';
  }
`;
const WineInfo = styled.div`
  padding: 6px 10px;
  margin: 0 6px 10px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 8px 10px 0 rgb(0, 0, 0, 0.2);

  img {
    width: auto;
    height: auto;
    max-width: 30vw;
    border-radius: 10px;
  }
`