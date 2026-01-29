import { useState } from "react";
import { motion } from "framer-motion";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    id: "flex-space",
    name: "Flex Space",
    price: "N1,500/hour",
    description:
      "Perfect for individuals who need a flexible and professional workspace.",
    features: [
      "High-speed internet",
      "Air-conditioned open-plan workspace",
      "Flexible day pass options",
      "Power outlets at every desk",
      "Secure storage lockers (optional)",
      "On-site staff support",
    ],
  },
  {
    id: "inner-circle",
    name: "Inner Circle",
    price: "N2,500/hour",
    description:
      "Ideal for those who want a premium experience with exclusive benefits.",
    features: [
      "All the benefits of the Flex Space plan, plus:",
      "Complimentary refreshments",
      "Access to private meeting rooms",
      "Exclusive networking opportunities",
      "Priority booking for all our spaces",
    ],
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<string>("flex-space");
  const activePlan = pricingPlans.find((plan) => plan.id === activeTab);

  return (
    <div className="w-full lg:w-1/2">
      {/* Tab Buttons */}
      <div className="flex gap-2 mb-8 bg-[#1b1b1b] p-1 rounded-full lg:rounded-[16px] flex-wrap lg:flex-nowrap">
        {pricingPlans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => setActiveTab(plan.id)}
            className={`flex-1 py-3 lg:text-base text-sm cursor-pointer lg:rounded-[16px] rounded-full font-medium transition-all ${
              activeTab === plan.id
                ? plan.id === "flex-space"
                  ? "bg-greyco-secondary text-[#1b1b1b] border border-greyco-secondary"
                  : "bg-[#f4b444] text-white border border-[#f4b444]"
                : "bg-transparent text-[#fffef1] hover:bg-[#1b1b1b]/50 border border-transparent"
            }`}
          >
            {plan.name} {plan.price}
          </button>
        ))}
      </div>

      {/* Pricing Card Content */}
      {activePlan && (
        <motion.div
          key={activePlan.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`border-shadow border rounded-[24px] lg:px-8 px-4 py-8 bg-[#1b1b1b] ${
            activePlan?.id === "flex-space"
              ? "border-greyco-secondary"
              : "border-[#f4b444]"
          }`}
        >
          <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1b1b1b] mb-2">
              {activePlan.name}
            </h2>
            <p
              className={`font-semibold lg:text-xl ${
                activePlan?.id === "flex-space"
                  ? "text-greyco-secondary"
                  : "text-[#f4b444]"
              }`}
            >
              Starting at {activePlan.price}
            </p>
            <p className="text-[#fffef1] mt-3 text-base">
              {activePlan.description}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[#fffef1] font-semibold mb-4">Features:</h3>
            {activePlan.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div
                  className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                    activePlan?.id === "flex-space"
                      ? "bg-greyco-secondary"
                      : "bg-[#f4b444]"
                  }`}
                />
                <p className="text-[#fffef1] font-mono-custom text-base">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Pricing;
