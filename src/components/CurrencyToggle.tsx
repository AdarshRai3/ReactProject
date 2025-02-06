import React from "react";

interface CurrencyToggleProps {
  isUSD: boolean;
  setIsUSD: (value: boolean) => void;
}

const CurrencyToggle: React.FC<CurrencyToggleProps> = ({ isUSD, setIsUSD }) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsUSD(!isUSD);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <span
        className={`text-lg font-medium transition-colors ${
          !isUSD ? "text-white" : "text-gray-400"
        }`}
      >
        ₹ INR
      </span>

      <button
        role="switch"
        aria-checked={isUSD}
        aria-label="Toggle currency between USD and INR"
        onClick={() => setIsUSD(!isUSD)}
        onKeyDown={handleKeyPress}
        tabIndex={0}
        className={`relative w-16 h-8 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
          isUSD ? "bg-purple-600" : "bg-gray-600"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
            isUSD ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </button>

      <span
        className={`text-lg font-medium transition-colors ${
          isUSD ? "text-white" : "text-gray-400"
        }`}
      >
        $ USD
      </span>
    </div>
  );
};

export default CurrencyToggle;
