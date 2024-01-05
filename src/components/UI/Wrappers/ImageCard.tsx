import React from "react";

const ImageCard: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  url: string;
  children?: React.ReactNode;
  onClick?: () => void;
}> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={` ${props.className}`}
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

export default ImageCard;
