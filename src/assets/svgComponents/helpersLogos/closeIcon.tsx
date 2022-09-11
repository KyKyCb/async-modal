import React, { FC } from 'react';

export const CloseIcon: FC<React.HTMLAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2.08121"
        y1="1"
        x2="15.667"
        y2="14.5858"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="-1"
        x2="20.2132"
        y2="-1"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 17.334 1)"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};