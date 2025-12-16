import PricingCard from "../Components/PricingCard";

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Simple, Transparent Pricing
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Choose a plan that fits your business
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard
          title="Starter"
          price="29"
          features={["Basic automation", "Email support", "Limited workflows"]}
        />

        <PricingCard
          title="Business"
          price="79"
          highlighted
          features={[
            "Advanced automation",
            "Priority support",
            "Unlimited workflows",
          ]}
        />

        <PricingCard
          title="Enterprise"
          price="149"
          features={["Custom AI solutions", "Dedicated manager", "API access"]}
        />
      </div>
    </div>
  );
};

export default Pricing;
