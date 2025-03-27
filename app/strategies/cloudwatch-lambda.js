export default function CloudwatchLambda() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold">AWS CloudWatch + Lambda Automation</h2>
      <p className="text-gray-700 my-4">
        Automates cloud resource management to prevent cost wastage.
      </p>
      <ul className="list-disc ml-6">
        <li>Stops idle EC2 instances</li>
        <li>Deletes unassociated resources automatically</li>
        <li>Cleans up unused snapshots</li>
      </ul>
    </div>
  );
}
