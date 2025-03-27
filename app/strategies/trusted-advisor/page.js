export default function TrustedAdvisor() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold">AWS Trusted Advisor</h2>
      <p className="text-gray-700 my-4">
        AWS Trusted Advisor helps you optimize cloud costs by identifying underutilized resources,
        providing right-sizing recommendations, and suggesting savings plans.
      </p>
      <ul className="list-disc ml-6">
        <li>Detects idle EC2 instances</li>
        <li>Provides cost-saving recommendations</li>
        <li>Improves security and performance</li>
      </ul>
    </div>
  );
}
