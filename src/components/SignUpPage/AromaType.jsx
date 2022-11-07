import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function AromaType({ type, checkedAromaHandler, checkedAroma }) {
  const [isChecked, setIsChecked] = useState(null);

  const onCheck = (e) => {
    checkedAromaHandler(e.target.value, e.target.checked)
    setIsChecked(e.target.checked)
  }

  useEffect(() => {
    if (checkedAroma.includes(type.value)) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [checkedAroma])

  return (
    <AromaTypeWrap>
      <label key={type}>
        <input
          type='checkbox'
          name='aromaType'
          checked={isChecked}
          value={type.value}
          onChange={(e) => onCheck(e)}
        />
        <span className='aromaTypeBtn'
          style={{
            color: isChecked ? '#CB53F5' : '#8D8D8D',
            border: isChecked ? '1px solid #CB53F5' : '1px solid #666666'
          }}>{type.type}</span>
      </label>
    </AromaTypeWrap>
  );
}

export default AromaType;

const AromaTypeWrap = styled.div`
  input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .aromaTypeBtn {
    display: block;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    font-size: 14px;
    background-color: #FAFAFA;
    margin: 4px;
    text-align: center;
    padding: 3px 8px;
  }
`