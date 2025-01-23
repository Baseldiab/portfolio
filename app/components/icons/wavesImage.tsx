import React from "react";

export default function WavesImage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <path
        fill={props.fill}
        fillOpacity="1"
        d="M0,32L40,53.3C80,75,160,117,240,154.7C320,192,400,224,480,240C560,256,640,256,720,218.7C800,181,880,107,960,106.7C1040,107,1120,181,1200,224C1280,267,1360,277,1400,282.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  );
}
