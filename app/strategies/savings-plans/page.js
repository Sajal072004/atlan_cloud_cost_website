import Link from "next/link";
import Image from "next/image";

export default function SavingsPlans() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">
          AWS Savings Plans
        </h1>

        {/* AWS Screenshot */}
        <div className="flex justify-center mb-8">
          <Image
            src="/savingplans.png"
            alt="AWS Savings Plans Screenshot"
            width={800}
            height={400}
            className="rounded-lg shadow-lg border border-gray-700"
          />
        </div>

        {/* Overview Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">Overview</h2>
          <p className="mt-3 text-gray-300">
            AWS Savings Plans help reduce cloud costs by offering lower prices
            in exchange for a commitment to a certain level of usage for one or
            three years.
          </p>
        </section>

        {/* How It Saves Costs */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            How It Saves Costs
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              💰 Lower Prices: Up to 72% discount compared to On-Demand pricing.
            </li>
            <li>
              ⚡ Automatic Application: Discounts apply automatically without
              manual tracking.
            </li>
            <li>
              🌍 Works Across Services: Compute Savings Plans apply to EC2,
              Fargate, and Lambda.
            </li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            Best Practices
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>✅ Analyze usage before committing using AWS Cost Explorer.</li>
            <li>✅ Choose a 3-year plan for better discounts.</li>
            <li>
              ✅ Combine with Reserved Instances for maximum cost efficiency.
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
                Azure Reserved VM Instances:
              </span>{" "}
              Similar to AWS Reserved Instances.
            </li>
            <li>
              <span className="font-semibold text-white">
                GCP Committed Use Contracts:
              </span>{" "}
              Provides sustained usage discounts.
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
