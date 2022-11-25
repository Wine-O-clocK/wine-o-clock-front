import React from 'react';

function Aroma({ aroma }) {
  return (
    <>
      {
        aroma !== ' ' && <span style={{
          borderRadius: '5px',
          padding: '6px 16px,',
          backgroundColor: "#e3e3e3",
          marginRight: '8px'
        }}>{aroma}</span>
      }
    </>
  );
}

export default Aroma;