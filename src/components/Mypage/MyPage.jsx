import React from "react";
import styled from "styled-components";
import BadgeComponent from "./BadgeComponent";
import MyWineFridge from "./MyWineFridge";
import UserInfoComponent from "./UserInfoComponent";

function MyPage() {
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
