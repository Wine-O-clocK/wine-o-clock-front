import React from "react";
import styled from "styled-components";

function UserInfoComponent() {
  return (
    <>
      <UserInfoWrap>
        <UserImgWrap>
          <img src="https://ifh.cc/g/ZJJJd6.png" alt="프로필사진" />
        </UserImgWrap>
        <UserTxtWrap>
          <h3>이예원님</h3>
          <h4>회원정보 수정</h4>
        </UserTxtWrap>
      </UserInfoWrap>
    </>
  );
}

const UserInfoWrap = styled.div`
  display: flex;
  height: 100px;
`;

const UserImgWrap = styled.div`
  margin: 15px 20px;
  margin-right: 20px;
  /* float: left; */
`;

const UserTxtWrap = styled.div`
  /* float: right; */
`;

export default UserInfoComponent;
