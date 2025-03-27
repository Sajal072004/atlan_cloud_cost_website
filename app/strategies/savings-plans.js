export default function SavingsPlans() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold">AWS Savings Plans</h2>
      <p className="text-gray-700 my-4">
        Reduces cloud costs through long-term commitment discounts.
      </p>
      <ul className="list-disc ml-6">
        <li>Offers flexible pricing models</li>
        <li>Reduces cost for consistent workloads</li>
        <li>Supports Compute, EC2, and Lambda</li>
      </ul>
    </div>
  );
}
