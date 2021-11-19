import React from "react";

const Hambuger = ({ witdh = "100%", height = "100%" }) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={witdh}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M6.7619 7.76471H17.2381"
          stroke="#1C1C1C"
          strokeMiterlimit="10"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
        ></path>
        <path
          d="M6.7619 12H17.2381"
          stroke="#1C1C1C"
          strokeMiterlimit="10"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
        ></path>
        <path
          d="M6.7619 16.2353H17.2381"
          stroke="#1C1C1C"
          strokeMiterlimit="10"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
        ></path>
      </g>
    </svg>
  );
};

export default Hambuger;
