import Button from "./Button";
import CheckIcon from "./CheckIcon";

interface PricingCardProps {
  plan: {
    name: string;
    priceInr: number;
    priceUsd: number;
    features: {
      mockAiInterview: number;
      mockTest: number;
      technical15: boolean;
      technical30: boolean;
      technical45: boolean;
      coding: boolean;
      hr: boolean;
    };
  };
  isUSD: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isUSD }) => {
  const renderFeature = (condition: boolean, feature: string) =>
    condition ? (
      <div className="flex items-center gap-2">
        <CheckIcon />
        <span>{feature}</span>
      </div>
    ) : null;

  return (
    <div
      className={`relative flex flex-col rounded-lg bg-gray-900 p-8 ${
        plan.name === "PREMIUM" || plan.name === "PREMIUM PRO"
          ? "border-2 border-purple-500"
          : "border border-gray-800"
      }`}
    >
      {plan.name === "PREMIUM" && (
        <span className="absolute -top-3 right-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
          Popular
        </span>
      )}
      {plan.name === "PREMIUM PRO" && (
        <span className="absolute -top-3 right-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
          Hot Deal
        </span>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-bold">{plan.name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">{isUSD ? "$" : "₹"}</span>
          <span className="text-5xl font-extrabold">
            {isUSD ? plan.priceUsd : plan.priceInr}
          </span>
          <span className="ml-2 text-gray-400">/year</span>
        </div>
      </div>

      <div className="space-y-4 flex-grow">
        <div className="flex items-center gap-2">
          <CheckIcon />
          <span>{plan.features.mockAiInterview} AI Mock Interviews</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckIcon />
          <span>{plan.features.mockTest} Mock Tests</span>
        </div>

        {renderFeature(plan.features.technical15, "15-min Technical Rounds")}
        {renderFeature(plan.features.technical30, "30-min Technical Rounds")}
        {renderFeature(plan.features.technical45, "45-min Technical Rounds")}
        {renderFeature(plan.features.coding, "Coding Rounds")}
        {renderFeature(plan.features.hr, "HR Rounds")}
      </div>

      <Button
        className={`w-full mt-8 ${
          plan.name === "Free"
            ? "bg-purple-600 hover:bg-purple-700 text-white"
            : "bg-purple-600 hover:bg-purple-700 text-white"
        }`}
      >
        {plan.name === "Free" ? "Try Now" : "Buy Now"}
      </Button>
    </div>
  );
};

export default PricingCard;
