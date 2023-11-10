import React from "react";

const Card: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  url: string;
  children: React.ReactNode;
}> = (props) => {
  return (
    <div
      className={`bg-white rounded-lg ${props.className}`}
      style={{
        backgroundImage: `url(${props.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
