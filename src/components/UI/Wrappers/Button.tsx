import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  disabled,
  className,
  onClick,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof onClick === "function") {
      onClick(event); // If onClick is a function, execute it
    } else if (typeof onClick === "string") {
      // If onClick is a string, navigate to the specified URL
      window.location.href = onClick;
    }
  };
  return (
    <button
      className={className}
      type={type || "button"}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
