import { FaCheck } from "react-icons/fa";

const PricingCard = ({ title, price, features, highlighted }) => {
  return (
    <div
      className={`rounded-xl border p-6 shadow-lg transition-all 
      ${highlighted ? "border-blue-600 scale-105" : "border-gray-200"}`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-3xl font-extrabold mb-4">
        ${price}
        <span className="text-sm font-normal">/month</span>
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center text-sm">
            <FaCheck className="text-green-500 mr-2" />
            {f}
          </li>
        ))}
      </ul>

      <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-900">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
