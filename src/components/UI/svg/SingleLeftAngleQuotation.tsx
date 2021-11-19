import React from "react";

const SingleLeftAngleQuotation = ({ witdh = "100%", height = "100%" }) => {
  return (
    <svg
      width={witdh}
      height={height}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5.66667 6.25L1 11.5"
        stroke="#0055B8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SingleLeftAngleQuotation;
