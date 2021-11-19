import React from "react";

const Menus = ({ witdh = "100%", height = "100%" }) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={witdh}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect
          x="13.5"
          y="25.5"
          width="9"
          height="9"
          stroke="#1C1C1C"
          vectorEffect="non-scaling-stroke"
        ></rect>
        <rect
          x="25.5"
          y="13.5"
          width="9"
          height="9"
          stroke="#1C1C1C"
          vectorEffect="non-scaling-stroke"
        ></rect>
        <rect
          x="13.5"
          y="13.5"
          width="9"
          height="9"
          stroke="#1C1C1C"
          vectorEffect="non-scaling-stroke"
        ></rect>
        <rect
          x="25.5"
          y="25.5"
          width="9"
          height="9"
          stroke="#1C1C1C"
          vectorEffect="non-scaling-stroke"
        ></rect>
      </g>
    </svg>
  );
};

export default Menus;
