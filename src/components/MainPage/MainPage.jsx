import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { wine } from '../../data';
import CardFlip from './CardFlip';
import LoginPermission from './LoginPermission';

function MainPage() {
  const category = [
    { title: '이달의 와인 TOP5', value: 'mention' },
    { title: '선물하기 좋은 와인 TOP5', value: 'present' },
    { title: '접근성 좋은 와인 TOP5', value: 'access' },
    { title: '가성비 좋은 와인 TOP5', value: 'price' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <MainContainer>
      <LoginPermission/>
      <SlideContainer>
        {
          category.map((c, idx) => {
            const key = c.value
            return (
              <div key={idx}>
                <p className='title'>{c.title}</p>
                <SlideWrapper {...settings}>
                  {
                    wine[key].map((w,idx) => (
                      <CardFlip key={idx} className='card' wine={w}/>
                    ))
                  }
                </SlideWrapper>
              </div>
            )})
        }
      </SlideContainer>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  margin: 0 24px;
  span {font-weight: bold}
`;

const SlideContainer = styled.div`
 padding-bottom: 100px;
 
 .title {
  padding-top: 22px;
  font-weight: bold;
 }
`;

const SlideWrapper = styled(Slider)`
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  transition: transform 0.5s;
  box-shadow: 8px 10px 10px 0 rgba(0, 0, 0, 0.2);

  .card {
    background-color: #FFFFFF;
  }
  .slick-prev::before, .slick-next::before {
    content: '';
  }
  .slick-dots {
    padding-top: 16px;
  }
`;