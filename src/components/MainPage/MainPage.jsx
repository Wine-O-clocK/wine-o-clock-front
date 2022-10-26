import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { wine } from '../../data';

function MainPage() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <MainContainer>
    <h2>Wine O'clocK</h2>
    <SlideContainer>
      <StyledSlider {...settings}>
        {
          wine.mention.map((w) => (
            <div className='carousel'>
              <img src={w[0]}/>
              <span className='wineName'>{w[1]}</span>
            </div>
          ))
        }
      </StyledSlider>
    </SlideContainer>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  margin: 48px 24px;
`
const SlideContainer = styled.div`
  border-radius: 25px;
  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.2));
  background-color: #FFFFFF;
`
const StyledSlider = styled(Slider)` 
  .slick-arrow, .slick-prev {
    left: 0
  }

  .carousel {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    
    img {
      width: 50%;
      margin: auto;
      display: block;
    }

    .wineName {
      font-weight: bold;
    }
  }
`;