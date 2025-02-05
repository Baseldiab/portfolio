"use client";

// ui imports
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";

import styled from "styled-components";

interface MarkeeButtonProps {
  className?: string;
  childClassName?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function MarkeeButton({
  className,
  childClassName,
  children,
  as: Component = Button,
}: MarkeeButtonProps) {
  return (
    <StyledWrapper>
      <Component className={cn("btn-23", className)}>
        <span className={cn("text-marquee", childClassName)}>{children}</span>
        <span aria-hidden className={cn("marquee-btn", childClassName)}>
          {children}
        </span>
      </Component>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* From Uiverse.io by doniaskima */
  .btn-23,
  .btn-23 *,
  .btn-23 :after,
  .btn-23 :before,
  .btn-23:after,
  .btn-23:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-23 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #000;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 100%;
    font-weight: 900;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
    text-transform: uppercase;
  }

  .btn-23:disabled {
    cursor: default;
  }

  .btn-23:-moz-focusring {
    outline: auto;
  }

  .btn-23 svg {
    display: block;
    vertical-align: middle;
  }

  .btn-23 [hidden] {
    display: none;
  }

  .btn-23 {
    border-radius: 99rem;
    border-width: 2px;
    overflow: hidden;
    padding: 0.8rem 3rem;
    position: relative;
  }

  .btn-23 span {
    display: grid;
    inset: 0;
    place-items: center;
    position: absolute;
    transition: opacity 0.2s ease;
  }

  .btn-23 .marquee-btn {
    --spacing: 5em;
    --start: 0em;
    --end: 5em;
    -webkit-animation: marquee-btn 1s linear infinite;
    animation: marquee-btn 1s linear infinite;
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
    opacity: 0;
    position: relative;
    text-shadow: #fff var(--spacing) 0, #fff calc(var(--spacing) * -1) 0,
      #fff calc(var(--spacing) * -2) 0;
  }

  .btn-23:hover .marquee-btn {
    -webkit-animation-play-state: running;
    animation-play-state: running;
    opacity: 1;
  }

  .btn-23:hover .text-marquee {
    opacity: 0;
  }

  @-webkit-keyframes marquee-btn {
    0% {
      transform: translateX(var(--start));
    }

    to {
      transform: translateX(var(--end));
    }
  }

  @keyframes marquee-btn {
    0% {
      transform: translateX(var(--start));
    }

    to {
      transform: translateX(var(--end));
    }
  }
`;
