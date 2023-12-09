import React from "react";

const ImageCard: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  url: string;
  children?: React.ReactNode;
}> = (props) => {
  return (
    <div
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
