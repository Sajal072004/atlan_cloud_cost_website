export default function PricingCalculator() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold">AWS Pricing Calculator</h2>
      <p className="text-gray-700 my-4">
        Estimates and compares costs across different configurations before deployment.
      </p>
      <ul className="list-disc ml-6">
        <li>Provides cost transparency</li>
        <li>Helps plan cloud expenses efficiently</li>
        <li>Supports various AWS services</li>
      </ul>
    </div>
  );
}
