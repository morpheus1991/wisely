import React from "react";

const Close = ({ witdh = "100%", height = "100%" }) => {
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
          d="M7.33142 16.6728L16.6728 7.33142"
          stroke="#1C1C1C"
          stroke-miterlimit="10"
          stroke-linecap="square"
          stroke-linejoin="round"
          vector-effect="non-scaling-stroke"
        ></path>
        <path
          d="M7.33142 7.33142L16.6728 16.6728"
          stroke="#1C1C1C"
          stroke-miterlimit="10"
          stroke-linecap="square"
          stroke-linejoin="round"
          vector-effect="non-scaling-stroke"
        ></path>
      </g>
    </svg>
  );
};

export default Close;
