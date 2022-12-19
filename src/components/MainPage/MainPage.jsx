import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { wine } from "../../data";
import CardFlip from "./CardFlip";
import LoginPermission from "./LoginPermission";
import RecentWine from "./RecentWine";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { LoginSocial } from "../../states/LoginState";
import SpecialWine from "./SpecialWine";
import { useLocation } from "react-router-dom";
import { PathState, wineLoadingState } from "../../states/MainState";

function MainPage() {
  const location = useLocation();
  const setPathState = useSetRecoilState(PathState);

  const setWineLoading = useSetRecoilState(wineLoadingState);
  const loginSocial = useRecoilValue(LoginSocial);
  const category = [
    { title: "이달의 와인 TOP5", value: "mention" },
    { title: "선물하기 좋은 와인 TOP5", value: "present" },
    { title: "접근성 좋은 와인 TOP5", value: "access" },
    { title: "가성비 좋은 와인 TOP5", value: "price" },
  ];

  const userAccessToken = () => {
    loginSocial && getToken();
  };

  const getToken = () => {
    console.log(loginSocial);
    let token;
    if (window.location.href.includes("access_token")) {
      token = window.location.href.split("=")[1].split("&")[0];
    } else if (window.location.href.includes("code")) {
      token = new URL(document.location).searchParams.get("code");
    } else token = "wine";
    console.log(token);
  };

  useEffect(() => {
    userAccessToken();
  }, [loginSocial]);

  useEffect(() => {
    setPathState(location.pathname);
    setWineLoading(0);
  }, []);

  return (
    <MainContainer>
      <LoginPermission />
      <SpecialWine />
      <RecentWine />
      <SlideContainer>
        {category.map((c, idx) => {
          const key = c.value;
          return (
            <div key={idx}>
              <p className="title">{c.title}</p>
              <WineInfoWrap>
                {wine[key].map((w, idx) => (
                  <>
                    <WineInfo>
                      <CardFlip key={idx} className="card" wine={w} />
                    </WineInfo>
                  </>
                ))}
              </WineInfoWrap>
            </div>
          );
        })}
      </SlideContainer>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  margin: 0 24px;
  span {
    font-weight: bold;
  }
`;

const SlideContainer = styled.div`
  padding-bottom: 100px;

  .title {
    padding-top: 22px;
    font-weight: bold;
  }
`;

const WineInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
  .wineName {
    font-family: 'AppleBold';
  }
`;

const WineInfo = styled.div`
  img {
    width: auto;
    height: auto;
    max-width: 30vw;
  }
`;