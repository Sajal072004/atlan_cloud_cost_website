import Link from "next/link";
import Image from "next/image";

export default function CostExplorer() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">
          AWS Cost Explorer
        </h1>

        {/* AWS Screenshot */}
        <div className="flex justify-center mb-8">
          <Image
            src="/cost-explorer.png"
            alt="AWS Cost Explorer Screenshot"
            width={800}
            height={400}
            className="rounded-lg shadow-lg border border-gray-700"
          />
        </div>

        {/* Overview Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">Overview</h2>
          <p className="mt-3 text-gray-300">
            AWS Cost Explorer is a powerful visualization tool that helps track,
            analyze, and forecast cloud expenses based on historical usage data.
          </p>
        </section>

        {/* How It Helps in Cost Optimization */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            How It Helps in Cost Optimization
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              📊 Detailed Cost Breakdown: Tracks which AWS services consume the
              most budget.
            </li>
            <li>
              📈 Forecasting Future Costs: Estimates future expenses based on
              usage trends.
            </li>
            <li>
              🎯 Customizable Filters: Allows filtering by service, region, and
              account for deeper insights.
            </li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            Best Practices
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              ✅ Use historical trends to predict and plan cloud expenses.
            </li>
            <li>
              ✅ Regularly monitor for unexpected cost spikes and take
              corrective actions.
            </li>
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
                Azure Cost Analysis:
              </span>{" "}
              Provides cost insights and forecasting for Azure services.
            </li>
            <li>
              <span className="font-semibold text-white">
                GCP Cost Management Reports:
              </span>{" "}
              Helps track and optimize Google Cloud spending.
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
