import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { FiSearch } from "react-icons/fi";
import { MdClear } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { PathState } from '../../states/MainState';

function Keyword() {
  const inputRef = useRef();
  const location = useLocation();
  const setPathState = useSetRecoilState(PathState);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    inputRef.current.focus();
    setPathState(location.pathname);
  }, []);

  const onChange = (e) => {
    setKeyword(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(keyword);
  }

  return (
    <SearchContainer>
      <InputForm onSubmit={onSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={onChange}
          ref={inputRef}
          placeholder="관심있는 와인을 검색해보세요!"
        />
        <FiSearch className="searchBtn" size={18} onSubmi={onSubmit}/>
        {keyword.length > 0 && <MdClear className="delButton" onClick={() => setKeyword("")} />}
      </InputForm>
    </SearchContainer>
  );
}

export default Keyword;

const SearchContainer = styled.div`
  padding: 32px 32px 80px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.1);
`

const InputForm = styled.form`
  position: relative;
  margin: 0 auto;
  text-align: center;
  input {
    border-radius: 50px;
    border: 1px solid #595959;
    outline: none;
    width: 60vw;
    height: 32px;
    padding: 3px 16px;
  }
  .searchBtn {
    position: absolute;
    right: 13%;
    top: 9px;
  }
  .delButton {
    position: absolute;
    right: 21%;
    top: 9px;
    border: none;
    background-color: #dfdede;
    border-radius: 50px;
    width: 20px;
    height: 20px;
    color: #FFFFFF;
    text-align: center;
  }
`