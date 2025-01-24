import React from "react";

interface MarqueeButtonProps {
  text: string; // The text to display inside the button
  link: string; // The link the button points to
}

const MarqueeButton: React.FC<MarqueeButtonProps> = ({ text, link }) => {
  return (
    <div style={styles.marqueeButton} className="w-full group">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
        className="w-full"
      >
        <div style={styles.textContainer}>
          <span
            style={styles.marqueeText}
            className="group-hover:-translate-x-full"
          >
            {text}
          </span>
          <span
            style={styles.marqueeText}
            className="group-hover:-translate-x-full"
          >
            {text}
          </span>
          <span
            style={styles.marqueeText}
            className="group-hover:-translate-x-full"
          >
            {text}
          </span>
        </div>
      </a>
    </div>
  );
};

export default MarqueeButton;

const styles: { [key: string]: React.CSSProperties } = {
  marqueeButton: {
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    padding: "2px",
    borderRadius: "30px",
    background:
      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  },
  link: {
    display: "block",
    position: "relative",
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    background: "#000",
    padding: "10px 30px",
    borderRadius: "30px",
    overflow: "hidden",
    textAlign: "center",
  },
  textContainer: {
    display: "flex",
    whiteSpace: "nowrap",
    transition: "all 0.5s ease",
  },
  marqueeText: {
    display: "inline-block",
    padding: "0 20px",
    transition: "transform 1s linear",
  },
};
