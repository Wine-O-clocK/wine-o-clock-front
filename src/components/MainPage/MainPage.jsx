import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { wine } from '../../data';
import CardFlip from './CardFlip';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { LoginState, LoginUserName } from '../../states/LoginState';

function MainPage() {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(LoginState);
  const loginUserName = useRecoilValue(LoginUserName);

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
      <div className='loginWrapper'>
        {isLoggedIn
          ? (
            <>
              <div><span>{loginUserName}</span>님의 취향 저격 와인<br />AI가 골라드려요!</div>
              <button onClick={() => navigate('/signin')}>와인 추천받기</button>
            </>
          )

          : (
            <>
              <div>로그인하고 나만을 위해 준비된<br />와인을 만나보세요!</div>
              <button onClick={() => navigate('/signin')}>로그인</button>
            </>
          )
        }
      </div>

      <SlideContainer>
        {
          category.map((c) => {
            const key = c.value
            return (
              <>
                <p className='title'>{c.title}</p>
                <SlideWrapper {...settings}>
                  {
                    wine[key].map((w) => (
                      <CardFlip wine={w} className='card' />
                    ))
                  }
                </SlideWrapper></>
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
  
  .loginWrapper {
    height: 66px;
    border-radius: 25px;
    background-color: #C57AEA;
    box-shadow: 4px 8px 10px 0 rgba(0, 0, 0, 0.2);
    padding: 15px 20px 25px;
    div {
      color: #FFFFFF;
    }
    button {
      border-radius: 15px;
      background-color: #FFFFFF;
      color: #000000;
      float: right;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 8px 22px;
      font-weight: bold;
    }
  }
  .loginWrapper::after {
    content: '';
    display: block;
    clear: both;
  }
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