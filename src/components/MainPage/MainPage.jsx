import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { wine } from '../../data';
import CardFlip from './CardFlip';
import LoginPermission from './LoginPermission';
import RecentWine from './RecentWine';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LoginSocial } from '../../states/LoginState';
import SpecialWine from './SpecialWine';
import { useLocation } from 'react-router-dom';
import { PathState } from '../../states/MainState';

function MainPage() {
  const location = useLocation();
  const setPathState = useSetRecoilState(PathState);
  setPathState(location.pathname)
  
  const loginSocial = useRecoilValue(LoginSocial);
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

  const userAccessToken = () => {
    loginSocial && getToken();
  }

  const getToken = () => {
    console.log(loginSocial)
    let token;
    if (window.location.href.includes('access_token')) {
      token = window.location.href.split('=')[1].split('&')[0];
    } else if (window.location.href.includes('code')) {
      token = new URL(document.location).searchParams.get('code')
    } else token = 'wine'
    console.log(token)
  }

  useEffect(() => {
    userAccessToken()
  }, [loginSocial])
  
  return (
    <MainContainer>
      <LoginPermission/>
      <RecentWine/>
      <SpecialWine/>
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
  position: relative;
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
    position: absolute;
    bottom: -35px;
  }
`;