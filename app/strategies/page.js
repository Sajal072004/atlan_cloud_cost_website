import Link from "next/link";

const strategies = [
  {
    title: "AWS Trusted Advisor",
    description:
      "Get real-time recommendations to optimize cost, improve performance, and enhance security.",
    link: "/strategies/trusted-advisor",
  },
  {
    title: "AWS Pricing Calculator",
    description:
      "Estimate AWS service costs to plan budgets and optimize spending.",
    link: "/strategies/pricing-calculator",
  },
  {
    title: "AWS CloudWatch + Lambda",
    description:
      "Automate cost monitoring and trigger actions using AWS CloudWatch and Lambda functions.",
    link: "/strategies/cloudwatch-lambda",
  },
  {
    title: "AWS Savings Plans",
    description: "Save on AWS compute usage with flexible pricing options.",
    link: "/strategies/savings-plans",
  },
  {
    title: "AWS Budgets & Alarms",
    description:
      "Set cost limits, track spending, and receive alerts before exceeding your budget.",
    link: "/strategies/budget-alarms",
  },
  {
    title: "AWS Cost Explorer",
    description:
      "Analyze past usage and forecast future costs for better budgeting decisions.",
    link: "/strategies/cost-explorer",
  },
  {
    title: "Anomaly Detection",
    description:
      "Automatically detect unexpected cost spikes and take proactive measures to avoid overspending.",
    link: "/strategies/anomaly-detection",
  },
  {
    title: "Audits & Reviews",
    description:
      "Conduct periodic cost audits and reviews to identify inefficiencies and optimize cloud expenses.",
    link: "/strategies/audits-reviews",
  },
  {
    title: "Self-Healing Infrastructure",
    description:
      "Implement automation to detect failures and optimize resources without manual intervention.",
    link: "/strategies/self-healing",
  },
];

export default function Strategies() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">
          Cloud Cost Optimization Strategies
        </h1>
        <p className="text-gray-300 text-lg text-center mb-8">
          Explore various AWS strategies to minimize cloud costs while
          maintaining performance and reliability.
        </p>

        {/* Strategy Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-blue-300">
                {strategy.title}
              </h2>
              <p className="text-gray-300 mt-3">{strategy.description}</p>
              <Link href={strategy.link}>
                <span className="text-blue-400 hover:text-blue-300 transition mt-4 inline-block">
                  Learn More →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
