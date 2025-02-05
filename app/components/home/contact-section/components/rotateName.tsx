"use client";

import { cn } from "@/lib/utils";
import styled from "styled-components";

interface RotateNameProps {
  className?: string;
  btnClassName?: string;
  btnCircleClassName?: string;
}

const RotateName = ({
  className,
  btnClassName,
  btnCircleClassName,
}: RotateNameProps) => {
  const mainArray = [..."Diab frontend Basel ".split("")];

  return (
    <>
      <StyledRotateWrapper className={className}>
        <button className={cn("button text-gradient", btnClassName)}>
          <p className="button__text">
            {mainArray.map((item, index) => (
              <span
                key={index}
                style={{ "--index": index } as React.CSSProperties}
                className="!text-sm"
              >
                {item}
              </span>
            ))}
          </p>
          <div className={cn("button__circle", btnCircleClassName)}>
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="button__icon"
              width={14}
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              />
            </svg>
            <svg
              viewBox="0 0 14 15"
              fill="none"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
              className="button__icon button__icon--copy"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>
      </StyledRotateWrapper>
    </>
  );
};

const StyledRotateWrapper = styled.div`
  .button {
    cursor: pointer;
    border: none;
    background: #7808d0;
    color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    place-content: center;
    transition: background 300ms, transform 200ms;
    font-weight: 600;
  }

  .button__text {
    position: absolute;
    inset: 0;
    animation: text-rotation 8s linear infinite;

    > span {
      position: absolute;
      transform: rotate(calc(19deg * var(--index)));
      inset: 7px;
    }
  }

  .button__circle {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: #fff;
    color: #7808d0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover {
    background: #000 !important;
    // transform: scale(1.05);
  }
  .dark .button:hover {
    background: #fff !important;
  }

  .button:hover .button__icon {
    color: #000;
  }

  .dark .button:hover .button__icon {
    color: #fff;
  }

  .button:hover .button__icon:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }
`;

export default RotateName;
