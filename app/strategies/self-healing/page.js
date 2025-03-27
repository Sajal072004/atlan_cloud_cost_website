export default function SelfHealing() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold">Self-Healing Cost Optimization</h2>
      <p className="text-gray-700 my-4">
        Uses AWS Lambda to automatically optimize cloud resources.
      </p>
      <ul className="list-disc ml-6">
        <li>Terminates idle resources</li>
        <li>Enforces S3 Lifecycle Policies</li>
        <li>Cleans up detached EBS volumes</li>
      </ul>
    </div>
  );
}
