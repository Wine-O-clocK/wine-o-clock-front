import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { PathState } from "../../states/MainState";
import BadgeComponent from "./BadgeComponent";
import MyWineFridge from "./MyWineFridge";
import UserInfoComponent from "./UserInfoComponent";

function MyPage() {
  const location = useLocation();
  const setPathState = useSetRecoilState(PathState);
  useEffect(() => {
    setPathState(location.pathname);
  });
  return (
    <>
      <MyPageWrap>
        <UserInfoComponent />
        <BadgeComponent />
        <MyWineFridge />
      </MyPageWrap>
    </>
  );
}

const MyPageWrap = styled.div`
  width: 100%;
`;

export default MyPage;
