import Link from "next/link";
import Flowchart from "../components/Flowchart";

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Cloud Cost Optimization Strategies</h1>
      <p className="text-lg text-gray-600">Learn how to optimize your cloud costs effectively.</p>
      <Flowchart />
      <Link href="/strategies" className="bg-blue-600 text-white px-4 py-2 rounded">
        View Strategies
      </Link>
    </div>
  );
}
