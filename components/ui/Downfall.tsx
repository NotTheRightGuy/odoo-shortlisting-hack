import React from "react";

function Downfall() {
  return (
    <>
      <svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_10_220)">
          <rect
            x="24"
            y="20"
            width="80"
            height="80"
            rx="24"
            fill="url(#paint0_linear_10_220)"
          />
          <path
            d="M71.4641 69.2503H82.607V58.1074"
            stroke="#F8FAFC"
            stroke-width="2.78571"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M82.6071 69.25L66.8678 53.5107C66.6075 53.2555 66.2574 53.1126 65.8928 53.1126C65.5282 53.1126 65.1782 53.2555 64.9178 53.5107L58.5107 59.9179C58.2503 60.1731 57.9003 60.316 57.5357 60.316C57.1711 60.316 56.821 60.1731 56.5607 59.9179L46.3928 49.75"
            stroke="#F8FAFC"
            stroke-width="2.78571"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_10_220"
            x="0"
            y="0"
            width="128"
            height="128"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="12" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_220"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_220"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_10_220"
            x1="64"
            y1="20"
            x2="64"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#757575" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

export default Downfall;
