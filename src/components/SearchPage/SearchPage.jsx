import React, { useState } from "react";
import styled from "styled-components";
import Filtering from "./Filtering";
import Keyword from "./Keyword";

function SearchPage() {
  const [currantTab, setCurrentTab] = useState(0);
  const tab = [
    {name: '키워드', content: <Keyword/>},
    {name: '필터링', content: <Filtering/>}
  ]
  const selectMenuHandler = (idx) => {
    setCurrentTab(idx);
  }
  return (
    <SearchContainer>
      <TabContainer>
        {tab.map((el, idx) => (
          <li 
            key={idx}
            className={currantTab === idx ? 'submenu focus' : 'submenu'}
            onClick={() => {selectMenuHandler(idx)}}
          >{el.name}</li>
        ))}
      </TabContainer>
      {tab[currantTab].content}
    </SearchContainer>
  );
}

export default SearchPage;

const SearchContainer = styled.div`
  
`

const TabContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  color: rgb(232, 234, 237);

  .submenu {
    padding: 10px;
    font-size: 15px;
    transition: 0.2s;
    padding-right: 8px;
    color: #595959;
    border-radius: 10px 10px 0px 0px;
  }
  .focus {
    font-family: 'AppleBold';
    color: #000000;
    background-color: rgb(255,255,255);
    color: rgb(21,20,20);
    border: 1px solid #dcdcdc;
    border-bottom: none;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
  }
`;