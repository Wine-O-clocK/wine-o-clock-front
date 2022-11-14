import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import { recent_wine } from '../../recent_data';

function RecentWine() {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  const onClickRecentWine = (wine) => {
    navigate(`/wine/${wine['wineNameEng']}`, {
      state: {wine: wine}
    })
  }

  return (
    <RecentWineContainer>
      <div className='title'>최신 언급 와인</div>
      <SlideWrapper {...settings}>
        {
          recent_wine.map((wine, idx) => (
            <div className='wine' key={idx} onClick={() => onClickRecentWine(wine)}>
              <img src={wine["wineImage"]} />
              <span className='wineName'>{wine["wineName"]}</span>
            </div>
          ))
        }
      </SlideWrapper>
    </RecentWineContainer>
  );
}

export default RecentWine;

const RecentWineContainer = styled.div`
 padding-bottom: 10px;
  .title {
    padding-top: 22px;
    font-weight: bold;
  }
`;

const SlideWrapper = styled(Slider)`
  margin-top: 16px;
  .wine {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
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
`;


  