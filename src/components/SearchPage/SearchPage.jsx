import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import * as Styled from '../styles/input.style';

function SearchPage() {
  const [selectedType, setSelectedType] = useState(-1);
  const [selectedPrice, setSelectedPrice] = useState(-1);
  const [selectedAroma, setSelectedAroma] = useState(-1);
  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    if (selectedType !== -1 && selectedPrice !== -1 && selectedAroma !== -1) {
      setIsConfirm(true);
    }
  }, [selectedType, selectedPrice, selectedAroma])

  const wineType = [
    { type: '레드', value: 0 },
    { type: '화이트', value: 1 },
    { type: '로제', value: 2 },
    { type: '스파클링', value: 3 }
  ];
  const winePrice = [
    { type: '1만원 이하', value: 0 },
    { type: '3만원 이하', value: 1 },
    { type: '5만원 이하', value: 2 },
    { type: '7만원 이하', value: 3 },
    { type: '10만원 이하', value: 4 },
    { type: '전체 가격', value: 5 }
  ]
  const wineAroma = [
    { type: '꽃', value: 0 },
    { type: '레몬', value: 1 },
    { type: '말린과일', value: 2 },
    { type: '베리', value: 3 },
    { type: '사과', value: 4 },
    { type: '시나몬', value: 5 },
    { type: '견과류', value: 6 },
    { type: '파인애플', value: 7 }, 
    { type: '허브', value: 8 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtering = {
      type: selectedType,
      price: selectedPrice,
      aroma: selectedAroma
    }
    console.log(filtering)
  }

  return (
    <SearchContainer>
      <Styled.InputForm onSubmit={handleSubmit}>
        <FilteringWrap>
          <span className='title'>종류</span>
          <div className='searchBox'>
            {
              wineType.map((type, idx) => (
                <label key={idx}>
                  <input
                    type='radio'
                    name='wineType'
                    value={type.value}
                    onChange={(e) => setSelectedType(Number(e.target.value))}
                    checked={idx === selectedType}
                    required
                  />
                  <span className='btn filter'
                    style={{
                      color: idx === selectedType ? '#CB53F5' : '#666666',
                      border: idx === selectedType ? '1px solid #CB53F5' : 'none',
                      backgroundColor: idx === selectedType && '#FAFAFA'
                    }}>{type.type}</span>
                </label>
              ))
            }
          </div>
        </FilteringWrap>
        <FilteringWrap>
          <span className='title'>가격</span>
          <div className='searchBox'>
            {
              winePrice.map((price, idx) => (
                <label key={idx}>
                  <input
                    type='radio'
                    name='winePrice'
                    value={price.value}
                    onChange={(e) => setSelectedPrice(Number(e.target.value))}
                    checked={idx === selectedPrice}
                    required
                  />
                  <span className='btn filter'
                    style={{
                      color: idx === selectedPrice ? '#CB53F5' : '#666666',
                      border: idx === selectedPrice ? '1px solid #CB53F5' : 'none',
                      backgroundColor: idx === selectedPrice && '#FAFAFA'
                    }}>{price.type}</span>
                </label>
              ))
            }
          </div>
        </FilteringWrap>
        <FilteringWrap>
          <span className='title'>아로마</span>
          <div className='searchBox'>
            {
              wineAroma.map((aroma, idx) => (
                <label key={idx}>
                  <input
                    type='radio'
                    name='wineAroma'
                    value={aroma.value}
                    onChange={(e) => setSelectedAroma(Number(e.target.value))}
                    checked={idx === selectedAroma}
                    required
                  />
                  <span className='btn filter'
                    style={{
                      color: idx === selectedAroma ? '#CB53F5' : '#666666',
                      border: idx === selectedAroma ? '1px solid #CB53F5' : 'none',
                      backgroundColor: idx === selectedAroma && '#FAFAFA'
                    }}>{aroma.type}</span>
                </label>
              ))
            }
          </div>
        </FilteringWrap>
        <button
          onSubmit={handleSubmit}
          className={isConfirm ? 'searchBtn active' : 'searchBtn disabled'}
          disabled={!isConfirm ? true : false}
        >
          검색하기
        </button>
      </Styled.InputForm>
    </SearchContainer>
  );
}

export default SearchPage;

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
    border: 1px solid #9F9F9F;
    color: #333333;
    margin-bottom: 16px;
  }
`;

const FilteringWrap = styled.div`
  padding: 8px 4px;
  .title {
    color: #9E4DC4;
  }
  .filter {
    background-color: #e6e6e6;
  }
`