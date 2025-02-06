interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", onClick, bgColor = "bg-indigo-500" }) => {
  return (
    <button
      className={`rounded-md py-2 px-4 font-medium transition-colors ${bgColor} hover:${bgColor.replace(
        "500",
        "700"
      )} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
