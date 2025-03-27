import Link from "next/link";
import Image from "next/image";

export default function TrustedAdvisor() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">
          AWS Trusted Advisor
        </h1>

        {/* AWS Screenshot */}
        <div className="flex justify-center mb-8">
          <Image
            src="/aws-trusted-advisor.png" // Replace with actual screenshot
            alt="AWS Trusted Advisor Screenshot"
            width={800}
            height={400}
            className="rounded-lg shadow-lg border border-gray-700"
          />
        </div>

        {/* Overview Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">Overview</h2>
          <p className="mt-3 text-gray-300">
            AWS Trusted Advisor is a **cloud optimization tool** that provides **real-time recommendations**  
            to help reduce costs, improve performance, and enhance security. It continuously analyzes  
            AWS resources and detects inefficiencies, ensuring cost-effective cloud usage.
          </p>
        </section>

        {/* How It Helps in Cost Optimization */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            How It Helps in Cost Optimization
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              <span className="font-semibold text-white">
                Idle or Underutilized Resources:
              </span>{" "}
              Detects underused EC2 instances, RDS databases, and other services,  
              suggesting downsizing or termination.
            </li>
            <li>
              <span className="font-semibold text-white">
                Right-Sizing Recommendations:
              </span>{" "}
              Suggests optimal instance types based on usage patterns to eliminate waste.
            </li>
            <li>
              <span className="font-semibold text-white">
                Reserved Instance & Savings Plan Suggestions:
              </span>{" "}
              Recommends discounted pricing options based on historical usage trends.
            </li>
            <li>
              <span className="font-semibold text-white">
                Service Limits Monitoring:
              </span>{" "}
              Alerts when service usage nears limits to **prevent unexpected scaling costs**.
            </li>
            <li>
              <span className="font-semibold text-white">
                Unused Resources Cleanup:
              </span>{" "}
              Identifies unassociated Elastic IPs, idle load balancers, and unattached EBS volumes.
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
              <span className="font-semibold text-white">Azure Advisor:</span>{" "}
              Analyzes workloads and suggests cost optimizations.
            </li>
            <li>
              <span className="font-semibold text-white">GCP Recommender:</span>{" "}
              Identifies idle resources and VM right-sizing opportunities.
            </li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-300">Best Practices</h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>✅ Regularly review and act on recommendations.</li>
            <li>
              ✅ Automate monitoring using **AWS CloudWatch**  
              and **AWS Budgets** for proactive cost control.
            </li>
            <li>
              ✅ Optimize resources by **downsizing, purchasing Reserved Instances,  
              and removing unused assets**.
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
