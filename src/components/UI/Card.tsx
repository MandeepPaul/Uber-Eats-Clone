import React from "react";

const Card: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = (props) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-md ${props.className}`}
      style={{
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
