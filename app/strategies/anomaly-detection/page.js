export default function AnomalyDetection() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold">AI-Driven Anomaly Detection</h2>
      <p className="text-gray-700 my-4">
        Amazon Lookout for Metrics helps detect unusual cloud cost spikes before they escalate.
      </p>
      <ul className="list-disc ml-6">
        <li>Uses machine learning to analyze cost trends</li>
        <li>Alerts teams about unexpected cost increases</li>
        <li>Provides insights into root causes of anomalies</li>
      </ul>
    </div>
  );
}
