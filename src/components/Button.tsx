import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className = "", onClick }: ButtonProps) => (
  <button className={`rounded-md py-2 px-4 font-medium transition-colors ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
