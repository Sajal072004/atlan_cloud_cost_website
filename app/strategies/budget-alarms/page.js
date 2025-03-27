import Link from "next/link";
import Image from "next/image";

export default function BudgetAlarms() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">
          AWS Budgets & Alarms
        </h1>

        {/* AWS Screenshot */}
        <div className="flex justify-center mb-8">
          <Image
            src="/budgets.png" 
            alt="AWS Budgets & Alarms Screenshot"
            width={800}
            height={400}
            className="rounded-lg shadow-lg border border-gray-700"
          />
        </div>

        {/* Overview Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">Overview</h2>
          <p className="mt-3 text-gray-300">
            AWS Budgets allows users to set cost and usage alarms to monitor
            cloud expenses proactively. It ensures that cloud spending stays
            within predefined limits, preventing cost overruns.
          </p>
        </section>

        {/* How It Helps in Cost Optimization */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            How It Helps in Cost Optimization
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              📊 Real-time Cost Tracking: Identifies unexpected cost spikes
              early.
            </li>
            <li>
              🚨 Automated Alerts: Notifies users when spending exceeds limits.
            </li>
            <li>
              🛠️ Service-Specific Monitoring: Tracks costs for specific AWS
              services like EC2, S3, and Lambda.
            </li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            Best Practices
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>✅ Set budget alarms for EC2, S3, and Lambda.</li>
            <li>✅ Integrate with AWS Cost Explorer for detailed analysis.</li>
          </ul>
        </section>

        {/* Alternatives in Other Cloud Providers */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            Alternatives in Other Cloud Providers
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              <span className="font-semibold text-white">
                Azure Cost Management + Budgets:
              </span>{" "}
              Tracks and optimizes Azure costs.
            </li>
            <li>
              <span className="font-semibold text-white">
                GCP Budgets and Alerts:
              </span>{" "}
              Provides cost alerts and spending limits on Google Cloud.
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
