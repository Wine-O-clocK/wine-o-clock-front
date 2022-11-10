import React from "react";
import styled from "styled-components";
import BottomSelectComponent from "./BottomSelectComponent";
import TestMainComponent from "./TestMainComponent";

function WineTestPage() {
  return (
    <>
      <WineTestPageWrap>
        <TestMainComponent />
        <BottomSelectComponent />
      </WineTestPageWrap>
    </>
  );
}

const WineTestPageWrap = styled.div`
  margin-bottom: 60px;
`;

export default WineTestPage;
