import React from 'react';

function Aroma({ aroma }) {
  return (
    <>
      {
        aroma !== ' ' && <span style={{
          borderRadius: '5px',
          padding: '6px 16px,',
          border: '1px solid #8D8D8D',
          marginRight: '8px'
        }}>{aroma}</span>
      }
    </>
  );
}

export default Aroma;