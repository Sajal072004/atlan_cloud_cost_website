import Link from "next/link";
import Image from "next/image";

export default function AnomalyDetection() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">
          AI-Driven Anomaly Detection
        </h1>

        {/* AWS Screenshot */}
        <div className="flex justify-center mb-8">
          <Image
            src="/aws-anomaly-detection.png" // Replace with actual screenshot
            alt="AWS Anomaly Detection Screenshot"
            width={800}
            height={400}
            className="rounded-lg shadow-lg border border-gray-700"
          />
        </div>

        {/* Overview Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">Overview</h2>
          <p className="mt-3 text-gray-300">
            Amazon **Lookout for Metrics** helps detect unusual **cost spikes** before they escalate, 
            using **AI-powered anomaly detection**.
          </p>
        </section>

        {/* How It Helps in Cost Optimization */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            How It Helps in Cost Optimization
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>🤖 **AI-Driven Analysis:** Uses machine learning to detect anomalies in cloud spending.</li>
            <li>🚨 **Real-Time Alerts:** Notifies teams about unexpected cost increases instantly.</li>
            <li>📉 **Root Cause Insights:** Helps pinpoint the **cause** of anomalies for quick resolution.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">Best Practices</h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>✅ **Combine with AWS Budgets & Alarms** for early anomaly detection.</li>
            <li>✅ **Regularly review CloudWatch Logs** to minimize false positives.</li>
            <li>✅ **Set custom thresholds** based on past usage trends.</li>
          </ul>
        </section>

        {/* Alternatives in Other Cloud Providers */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            Alternatives in Other Cloud Providers
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              <span className="font-semibold text-white">Azure Metrics Advisor:</span>{" "}
              AI-powered anomaly detection for cost spikes.
            </li>
            <li>
              <span className="font-semibold text-white">GCP Anomaly Detection:</span>{" "}
              Uses AI to monitor and detect unusual cloud spending.
            </li>
          </ul>
        </section>

        {/* Back to Strategies Button */}
        <div className="mt-8 text-center">
          <Link href="/strategies">
            <span className="text-blue-400 hover:text-blue-300 transition">
              ← Back to Strategies
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
