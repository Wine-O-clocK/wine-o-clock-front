import React from 'react';
import styled from 'styled-components';
import { wine } from '../../data';
import CardFlip from './CardFlip';

function MainPage() {
  return (
    <MainContainer>
      <h2>Wine O'clocK</h2>
      <SlideContainer>
        <h3>이달의 와인 TOP5</h3>
        <SlideWrapper>
          {
            wine.mention.map((w) => (
              <CardFlip wine={w} className='card' />
            ))
          }
        </SlideWrapper>
      </SlideContainer>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  margin: 48px 24px;
`
const SlideContainer = styled.div`
 
`
const SlideWrapper = styled.div`
  display: flex;
  flex-derection: row;
  border-radius: 25px;
  transition: transform 0.5s;

  .card {
    filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.2));
    background-color: #FFFFFF;
  }
`;