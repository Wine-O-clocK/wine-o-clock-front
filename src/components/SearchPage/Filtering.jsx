import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { PathState } from "../../states/MainState";
import AromaType from "../SignUpPage/AromaType";
import * as Styled from "../styles/input.style";

function Filtering() {
  const navigate = useNavigate();
  const location = useLocation();
  const setPathState = useSetRecoilState(PathState);
  useEffect(() => {
    setPathState(location.pathname);
  });

  const [selectedType, setSelectedType] = useState(-1);
  const [selectedPrice, setSelectedPrice] = useState(-1);
  const [selectedAroma, setSelectedAroma] = useState([]);
  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    if (
      selectedType !== -1 ||
      selectedPrice !== -1 ||
      selectedAroma.length !== 0
    ) {
      setIsConfirm(true);
    }
  }, [selectedType, selectedPrice, selectedAroma]);

  const wineType = [
    { type: "레드", value: 0 },
    { type: "화이트", value: 1 },
    { type: "로제", value: 2 },
    { type: "스파클링", value: 3 },
  ];
  const winePrice = [
    { type: "1만원 이하", value: 0 },
    { type: "3만원 이하", value: 1 },
    { type: "5만원 이하", value: 2 },
    { type: "7만원 이하", value: 3 },
    { type: "10만원 이하", value: 4 },
    { type: "전체 가격", value: 5 },
  ];
  const wineAroma = [
    { type: "꽃", value: "flower" },
    { type: "시나몬", value: "cinnamon" },
    { type: "파인애플", value: "pineapple" },
    { type: "말린과일", value: "dried fruit" },
    { type: "사과", value: "apple" },
    { type: "레몬", value: "lemon" },
    { type: "견과류", value: "nuts" },
    { type: "베리", value: "berry" },
    { type: "허브", value: "herb" },
  ];

  const checkedAromaHandler = (item, isChecked) => {
    if (isChecked) {
      setSelectedAroma([...selectedAroma, item]);
    } else if (!isChecked && selectedAroma.find((aroma) => aroma === item)) {
      const filter = selectedAroma.filter((aroma) => aroma !== item);
      setSelectedAroma([...filter]);
    }

    if (selectedAroma.length > 2) {
      alert("아로마는 최대 3개까지 선택 가능합니다.");
      setSelectedAroma(selectedAroma.filter((aroma) => aroma !== item));
      isChecked = false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtering = {
      type: selectedType,
      price: selectedPrice,
      aroma: selectedAroma,
    };
    console.log(filtering)
    navigate('/searchresult');
  };

  return (
    <SearchContainer>
      <Styled.InputForm onSubmit={handleSubmit}>
        <FilteringWrap>
          <span className="title">종류</span>
          <div className="searchBox">
            {wineType.map((type, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name="wineType"
                  value={type.value}
                  onChange={(e) => setSelectedType(Number(e.target.value))}
                  checked={idx === selectedType}
                />
                <span
                  className="btn filter"
                  style={{
                    color: idx === selectedType ? "#CB53F5" : "#666666",
                    border: idx === selectedType ? "1px solid #CB53F5" : "none",
                    backgroundColor: idx === selectedType && "#FAFAFA",
                  }}
                >
                  {type.type}
                </span>
              </label>
            ))}
          </div>
        </FilteringWrap>
        <FilteringWrap>
          <span className="title">가격</span>
          <div className="searchBox">
            {winePrice.map((price, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name="winePrice"
                  value={price.value}
                  onChange={(e) => setSelectedPrice(Number(e.target.value))}
                  checked={idx === selectedPrice}
                />
                <span
                  className="btn filter"
                  style={{
                    color: idx === selectedPrice ? "#CB53F5" : "#666666",
                    border:
                      idx === selectedPrice ? "1px solid #CB53F5" : "none",
                    backgroundColor: idx === selectedPrice && "#FAFAFA",
                  }}
                >
                  {price.type}
                </span>
              </label>
            ))}
          </div>
        </FilteringWrap>
        <FilteringWrap>
          <span className="title">아로마</span>
          <div className="searchBox">
            {wineAroma.map((type, idx) => (
              <AromaType
                key={idx}
                type={type}
                checkedAromaHandler={checkedAromaHandler}
                checkedAroma={selectedAroma}
              />
            ))}
          </div>
        </FilteringWrap>
        <button
          onSubmit={handleSubmit}
          className={isConfirm ? "searchBtn active" : "searchBtn disabled"}
          disabled={!isConfirm ? true : false}
        >
          검색하기
        </button>
      </Styled.InputForm>
    </SearchContainer>
  );
}

export default Filtering;

const SearchContainer = styled.div`
  padding: 16px 32px 80px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  .searchBox {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    padding: 8px 0;
  }

  .searchBtn {
    height: 45px;
    border-radius: 5px;
    border: 1px solid #9f9f9f;
    color: #333333;
    margin-bottom: 16px;
  }
`;

const FilteringWrap = styled.div`
  padding: 8px 4px;
  .title {
    color: #9e4dc4;
  }
  .filter {
    background-color: #e6e6e6;
  }
`;
