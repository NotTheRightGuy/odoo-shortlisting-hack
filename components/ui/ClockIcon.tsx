import React from "react";

function ClockIcon() {
  return (
    <>
      <svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_10_212)">
          <rect
            x="24"
            y="20"
            width="80"
            height="80"
            rx="24"
            fill="url(#paint0_linear_10_212)"
          />
          <path
            d="M64 51.3333V60L70.5 66.5M83.5 60C83.5 62.5608 82.9956 65.0965 82.0157 67.4623C81.0357 69.8282 79.5993 71.9778 77.7886 73.7886C75.9778 75.5993 73.8282 77.0357 71.4623 78.0157C69.0965 78.9956 66.5608 79.5 64 79.5C61.4392 79.5 58.9035 78.9956 56.5377 78.0157C54.1718 77.0357 52.0222 75.5993 50.2114 73.7886C48.4007 71.9778 46.9643 69.8282 45.9843 67.4623C45.0044 65.0965 44.5 62.5608 44.5 60C44.5 54.8283 46.5545 49.8684 50.2114 46.2114C53.8684 42.5545 58.8283 40.5 64 40.5C69.1717 40.5 74.1316 42.5545 77.7886 46.2114C81.4455 49.8684 83.5 54.8283 83.5 60Z"
            stroke="#F8FAFC"
            stroke-width="4.08333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_10_212"
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
              result="effect1_dropShadow_10_212"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_212"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_10_212"
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

export default ClockIcon;
