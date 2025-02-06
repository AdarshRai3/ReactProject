import { useState } from "react";
import pricingData from "../data/pricing.json";
import CurrencyToggle from "./CurrencyToggle";
import PricingCard from "./PricingCard";
import FAQSection from "./FAQSection";


const PricingPage: React.FC = () => {
  const [isUSD, setIsUSD] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      
      <div className="mx-auto px-4 pt-24 sm:px-6 lg:px-8">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Plans and Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            We want to empower every candidate to ace their interviews. Choose
            the plan that best fits your preparation needs.
          </p>
        </section>

        <CurrencyToggle isUSD={isUSD} setIsUSD={setIsUSD} />

        <section className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-4">
          {pricingData.pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isUSD={isUSD} />
          ))}
        </section>

        <FAQSection />
      </div>
    </div>
  );
};

export default PricingPage;
