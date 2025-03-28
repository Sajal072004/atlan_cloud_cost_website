import Link from "next/link";
import Image from "next/image";

export default function CloudWatchLambda() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">
          AWS CloudWatch + Lambda for Cost Optimization
        </h1>

        {/* AWS Screenshot */}
        <div className="flex justify-center mb-8">
          <Image
            src="/cloudwatch.png"
            alt="AWS CloudWatch with Lambda Screenshot"
            width={800}
            height={400}
            className="rounded-lg shadow-lg border border-gray-700"
          />
        </div>

        {/* Overview Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">Overview</h2>
          <p className="mt-3 text-gray-300">
            AWS CloudWatch monitors logs, metrics, and events from AWS
            resources. By integrating AWS Lambda, organizations can automate
            responses to CloudWatch alarms, enabling cost-saving actions.
          </p>
        </section>

        {/* Use Case: Cleaning Up Unused Snapshots */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            Use Case: Cleaning Up Unused Snapshots
          </h2>
          <p className="mt-3 text-gray-300">
            Problem: Unused Amazon EBS snapshots accumulate, leading to
            unnecessary storage costs.
          </p>
          <p className="mt-2 text-gray-300">
            Solution: A CloudWatch-triggered Lambda function can:
          </p>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              📌 Monitor snapshot usage and identify unused snapshots older than
              30 days (or a custom time limit).
            </li>
            <li>
              📌 Automatically delete them to free up storage and save costs.
            </li>
          </ul>
        </section>

        {/* Additional Use Cases */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            Additional Use Cases
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              🚀 Stopping Idle EC2 Instances: Stop instances with low CPU
              utilization for extended periods.
            </li>
            <li>
              🚀 Deleting Unused Load Balancers (ELBs): Remove ELBs that are not
              routing traffic.
            </li>
            <li>
              🚀 Terminating Underutilized RDS Instances: Shut down RDS
              instances during non-business hours.
            </li>
            <li>
              🚀 Cleaning Up Detached EBS Volumes: Delete unused EBS volumes to
              prevent unwanted charges.
            </li>
            <li>
              🚀 Enforcing S3 Lifecycle Policies: Move old objects to lower-cost
              storage tiers.
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
                Azure Automation with Logic Apps:
              </span>{" "}
              Automates storage cleanup and cost-saving actions.
            </li>
            <li>
              <span className="font-semibold text-white">
                GCP Cloud Functions with Cloud Scheduler:
              </span>{" "}
              Automates snapshot deletion and resource scaling.
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
              ✅ Automate cleanup tasks like snapshot deletion and stopping idle
              instances.
            </li>
            <li>✅ Set up alerts and thresholds for unexpected cost spikes.</li>
            <li>
              ✅ Regularly review CloudWatch logs to ensure automation scripts
              are running correctly.
            </li>
          </ul>
        </section>

        {/* GitHub Repository for Lambda Functions */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            GitHub Repository for Lambda Functions
          </h2>
          <p className="mt-3 text-gray-300">
            Find pre-built Lambda functions for automating cost optimizations.
          </p>
          <div className="mt-4">
            <Link
              href="https://github.com/Sajal072004/Cloud_Cost_Optimizations"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              🔗 View on GitHub →
            </Link>
          </div>
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
