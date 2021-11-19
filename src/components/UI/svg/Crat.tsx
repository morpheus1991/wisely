import React from "react";

const Crat = ({ witdh = "100%", height = "100%" }) => {
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
          d="M9.4128 13.91H17.2462L18.7169 7.97998H7.94727L9.4128 13.91Z"
          stroke="#1C1C1C"
          strokeMiterlimit="10"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
        ></path>
        <path
          d="M16.1986 18C16.8769 18 17.4268 17.456 17.4268 16.785C17.4268 16.114 16.8769 15.57 16.1986 15.57C15.5203 15.57 14.9705 16.114 14.9705 16.785C14.9705 17.456 15.5203 18 16.1986 18Z"
          stroke="#1C1C1C"
          strokeMiterlimit="10"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
        ></path>
        <path
          d="M10.2075 15.6C10.29 15.585 10.3726 15.575 10.4603 15.575C11.1415 15.575 11.6885 16.12 11.6885 16.79C11.6885 17.46 11.1363 18.005 10.4603 18.005C9.78433 18.005 9.23218 17.46 9.23218 16.79C9.23218 16.2 9.65017 15.715 10.2075 15.6Z"
          stroke="#1C1C1C"
          strokeMiterlimit="10"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
        ></path>
        <path
          d="M9.34053 13.62L7.43637 6H5.29999"
          stroke="#1C1C1C"
          strokeMiterlimit="10"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
        ></path>
      </g>
    </svg>
  );
};

export default Crat;
