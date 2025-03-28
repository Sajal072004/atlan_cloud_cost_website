import Image from "next/image";

export default function PricingCalculator() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">
          AWS Pricing Calculator
        </h1>

        {/* Overview Section */}
        <p className="text-lg text-gray-300 text-center mb-8">
          AWS Pricing Calculator helps businesses estimate cloud expenses before
          deploying resources. It enables users to compare pricing models,
          predict future costs, and optimize spending strategies.
        </p>

        {/* AWS Screenshot */}
        <div className="flex justify-center mb-8">
          <Image
            src="/pricing-calculator.png"
            alt="AWS Pricing Calculator Screenshot"
            width={800}
            height={400}
            className="rounded-lg shadow-lg border border-gray-700"
          />
        </div>

        {/* How It Helps in Cost Optimization */}
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">
          How It Helps in Cost Optimization
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <span className="text-white font-semibold">
              Custom Cost Estimations:
            </span>
            Configure EC2, RDS, S3, and Lambda to calculate monthly costs.
          </li>
          <li>
            <span className="text-white font-semibold">
              Comparing Pricing Models:
            </span>
            Evaluate On-Demand, Reserved Instances, and Savings Plans for
            cost-effective choices.
          </li>
          <li>
            <span className="text-white font-semibold">
              Breakdown of Costs:
            </span>
            Get detailed pricing for compute, storage, networking, and
            licensing.
          </li>
          <li>
            <span className="text-white font-semibold">
              Forecasting Future Expenses:
            </span>
            Predict costs based on scaling strategies and workload demands.
          </li>
          <li>
            <span className="text-white font-semibold">
              Optimized Resource Selection:
            </span>
            Suggests spot instances, auto-scaling groups, and cost-efficient
            configurations.
          </li>
        </ul>

        {/* Alternatives Section */}
        <h2 className="text-2xl font-semibold text-blue-300 mt-8 mb-4">
          Alternatives in Other Cloud Providers
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <span className="text-white font-semibold">
              Azure Pricing Calculator:
            </span>
            Estimates costs for Azure services based on usage.
          </li>
          <li>
            <span className="text-white font-semibold">
              GCP Pricing Calculator:
            </span>
            Provides cost estimations for various Google Cloud services.
          </li>
        </ul>

        {/* Best Practices */}
        <h2 className="text-2xl font-semibold text-blue-300 mt-8 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            ✅ Use the calculator before deployment to estimate costs and
            compare configurations.
          </li>
          <li>
            ✅ Regularly revisit estimates since cloud pricing changes over
            time.
          </li>
        </ul>
      </div>
    </div>
  );
}
