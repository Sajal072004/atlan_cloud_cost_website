import Link from "next/link";
import Image from "next/image";

export default function SelfHealing() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">
          Self-Healing Cost Optimization
        </h1>

        {/* AWS Screenshot */}
        <div className="flex justify-center mb-8">
          <Image
            src="/monitoring.png"
            alt="AWS Self-Healing Infrastructure"
            width={800}
            height={400}
            className="rounded-lg shadow-lg border border-gray-700"
          />
        </div>

        {/* Overview Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">Overview</h2>
          <p className="mt-3 text-gray-300">
            Self-healing cloud systems use automation to detect, fix, and
            optimize cloud resources in real time, reducing waste and lowering
            costs.
          </p>
        </section>

        {/* How It Helps in Cost Optimization */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            How It Helps in Cost Optimization
          </h2>
          <ul className="mt-3 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              ⚡ Automatically terminates idle resources (e.g., unused EC2
              instances).
            </li>
            <li>
              📁 Enforces S3 Lifecycle Policies to archive or delete old
              storage.
            </li>
            <li>
              🛑 Cleans up detached EBS volumes to prevent unnecessary storage
              costs.
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
              ✅ Use AWS Lambda with CloudWatch to trigger auto-remediation
              actions.
            </li>
            <li>
              ✅ Implement auto-scaling rules to adjust resources based on
              demand.
            </li>
            <li>
              ✅ Set up alerts & monitoring to proactively prevent cost spikes.
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
                Azure Auto-Remediation:
              </span>{" "}
              Uses Azure Functions to automate cloud cleanups.
            </li>
            <li>
              <span className="font-semibold text-white">
                GCP Recommender API:
              </span>{" "}
              Suggests and applies cost-saving actions in Google Cloud.
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
