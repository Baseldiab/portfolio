import React from "react";

export default function AntIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="200px"
      height="200px"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="lg1" x1="62.1%" y1="0%" x2="108.2%" y2="37.9%">
          <stop offset="0%" stopColor="#4285EB" />
          <stop offset="100%" stopColor="#2EC7FF" />
        </linearGradient>
        <linearGradient id="lg2" x1="69.6%" y1="0%" x2="54%" y2="108.5%">
          <stop offset="0%" stopColor="#29CDFF" />
          <stop offset="37.9%" stopColor="#148EFF" />
          <stop offset="100%" stopColor="#0A60FF" />
        </linearGradient>
        <linearGradient id="lg3" x1="69.7%" y1="-13%" x2="16.7%" y2="117.4%">
          <stop offset="0%" stopColor="#FA816E" />
          <stop offset="41.5%" stopColor="#F74A5C" />
          <stop offset="100%" stopColor="#F51D2C" />
        </linearGradient>
        <linearGradient id="lg4" x1="68.1%" y1="-35.7%" x2="30.4%" y2="114.9%">
          <stop offset="0%" stopColor="#FA8E7D" />
          <stop offset="51.3%" stopColor="#F74A5C" />
          <stop offset="100%" stopColor="#F51D2C" />
        </linearGradient>
      </defs>
      <g fill="none" transform="translate(0, 0)">
        <path
          d="M91.59 4.18L4.18 91.51a10 10 0 000 14.14l87.41 87.34a10 10 0 0014.14 0l36.65-36.62a10 10 0 10-14.14-14.14l-27.78 27.76a2 2 0 01-2.83 0L28.29 102a2 2 0 010-2.83l69.8-69.86a2 2 0 012.83 0l27.78 27.76a10 10 0 1014.14-14.14L108.58 4.06a10 10 0 00-16.99.12z"
          fill="url(#lg1)"
        />
        <path
          d="M91.59 4.18L4.18 91.51a10 10 0 000 14.14l87.41 87.34a10 10 0 0014.14 0l36.65-36.62a10 10 0 10-14.14-14.14l-27.78 27.76a2 2 0 01-2.83 0L28.29 102a2 2 0 010-2.83l69.8-69.86c2.91-2.51 7.66-7.6 14.64-8.79 5.19-.88 10.86 1.06 17.01 5.84-4.11-4.11-11.17-11.15-21.16-21.13a10 10 0 00-16.99.12z"
          fill="url(#lg2)"
        />
        <path
          d="M153.69 135.85a10 10 0 0015.24 0l27.03-27.01a10 10 0 000-14.14l-27.27-27.15a10 10 0 00-15.25 0 10 10 0 000 14.14l18.42 18.4a2 2 0 010 2.83l-18.17 18.15a10 10 0 000 14.14z"
          fill="url(#lg3)"
        />
        <ellipse
          cx="100.52"
          cy="100.44"
          rx="23.6"
          ry="23.58"
          fill="url(#lg4)"
        />
      </g>
    </svg>
  );
}
