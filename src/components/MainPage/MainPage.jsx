import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { wine } from '../../data';
import CardFlip from './CardFlip';

function MainPage() {
  const settings = {
    className: "center",
    slidesToShow: 2,
    // swipeToSlide: true,
    // dots: true,
    infinite: false,
    speed: 500,
    //slidesToScroll: 3
  };

  return (
    <MainContainer>
      <h2>Wine O'clocK</h2>
      <SlideContainer>
        <h3>이달의 와인 TOP5</h3>
        <SlideWrapper {...settings}>
          {
            wine.mention.map((w) => (
              <CardFlip wine={w} className='card' />
            ))
          }
        </SlideWrapper>

        <h3>접근성 TOP5</h3>
        <SlideWrapper {...settings}>
          {
            wine.access.map((w) => (
              <CardFlip wine={w} className='card' />
            ))
          }
        </SlideWrapper>
        <h3>선물 TOP5</h3>
        <SlideWrapper {...settings}>
          {
            wine.present.map((w) => (
              <CardFlip wine={w} className='card' />
            ))
          }
        </SlideWrapper>
        <h3>가성비 TOP5</h3>
        <SlideWrapper {...settings}>
          {
            wine.price.map((w) => (
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
`;

const SlideContainer = styled.div`
 padding-bottom: 100px;
`;

const SlideWrapper = styled(Slider)`
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  transition: transform 0.5s;
  .card {
    background-color: #FFFFFF;
  }
`;