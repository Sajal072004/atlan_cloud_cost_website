import Link from "next/link";
import Image from "next/image";

export default function AuditsReviews() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">
          Quarterly Cost Audits & Reviews
        </h1>

        {/* AWS Screenshot */}
        <div className="flex justify-center mb-8">
          <Image
            src="/audit.png" // Replace with actual screenshot
            alt="AWS Cost Audit Screenshot"
            width={800}
            height={400}
            className="rounded-lg shadow-lg border border-gray-700"
          />
        </div>

        {/* Overview Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">Overview</h2>
          <p className="mt-3 text-gray-300">
            Regular cost audits and reviews help ensure cloud efficiency,
            eliminate waste, and refine cost-saving strategies over time.
          </p>
        </section>

        {/* How It Helps in Cost Optimization */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            How It Helps in Cost Optimization
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              📊 Detailed Cost Analysis: Uses AWS Cost Explorer for
              comprehensive breakdowns.
            </li>
            <li>
              🛑 Detects Unused Resources: Identifies idle or underutilized
              services.
            </li>
            <li>
              🎯 Aligns Costs with Business Goals: Ensures spending supports
              strategic objectives.
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
              ✅ Schedule quarterly cost audits to monitor cloud expenses.
            </li>
            <li>
              ✅ Use AWS Trusted Advisor to identify cost-saving opportunities.
            </li>
            <li>✅ Automate cost reporting with AWS Budgets & Alerts.</li>
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
                Azure Cost Management + Advisor:
              </span>{" "}
              Provides cost insights and optimization recommendations.
            </li>
            <li>
              <span className="font-semibold text-white">
                GCP Billing Reports:
              </span>{" "}
              Tracks cloud expenses and helps optimize cost allocation.
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
