import React from "react";
import styled from "styled-components";
import UserHelloComponent from "./User/UserHelloComponent";
import WinyHelloComponent from "./Winy/WinyHelloComponent";

function TestMainComponent() {
  return (
    <>
      <TestMainWrap>
        <WinyHelloComponent />
        <UserHelloComponent />
      </TestMainWrap>
    </>
  );
}

const TestMainWrap = styled.div`
  /* background-color: #e2e2e2; */
  padding-top: 8px;
  width: 100%;
  /* height: 625px; */
  height: calc(var(--vh, 1vh) * 100);
  /* margin-bottom: 100px; */
  overflow: auto;
`;

export default TestMainComponent;
