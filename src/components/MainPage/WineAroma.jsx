import React from "react";

function WineAroma({ aroma }) {
  return (
    <>
      {aroma !== " " && (
        <span
          style={{
            borderRadius: "5px",
            padding: "8px 16px,",
            backgroundColor: "#e3e3e3",
            marginRight: "2px",
          }}
        >
          {aroma}
        </span>
      )}
    </>
  );
}

export default WineAroma;
