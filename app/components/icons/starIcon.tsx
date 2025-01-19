import React from "react";

export default function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.00977 0L3.69977 1.20433C3.54451 1.8308 3.22883 2.40293 2.78558 2.86101C2.34233 3.31908 1.78779 3.64633 1.17981 3.80862L-0.000183105 4.11742L1.17981 4.42621C1.78779 4.5885 2.34233 4.91575 2.78558 5.37383C3.22883 5.8319 3.54451 6.40404 3.69977 7.03051L4.00977 8.23483L4.30981 7.03051C4.46688 6.40326 4.78441 5.83084 5.22937 5.37282C5.67433 4.9148 6.23043 4.58789 6.83978 4.42621L8.00977 4.11742L6.83978 3.80862C6.23043 3.64695 5.67433 3.3201 5.22937 2.86207C4.78441 2.40405 4.46688 1.83157 4.30981 1.20433L4.00977 0Z"
        fill={props.fill}
      />
      <defs>
        <linearGradient
          id="paint0_linear_55_1299"
          x1="4.27979"
          y1="6.92756"
          x2="7.35054"
          y2="4.44157"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1BD1C2" />
          <stop offset="1" stopColor="#1F67E7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
