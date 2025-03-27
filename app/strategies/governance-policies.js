export default function GovernancePolicies() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold">Cost Governance & Policies</h2>
      <p className="text-gray-700 my-4">
        Implements IAM policies to restrict high-cost services to authorized users.
      </p>
      <ul className="list-disc ml-6">
        <li>Defines strict access policies</li>
        <li>Prevents accidental high-cost usage</li>
        <li>Enhances security and cost efficiency</li>
      </ul>
    </div>
  );
}
