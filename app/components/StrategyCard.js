import Link from "next/link";

export default function StrategyCard({ title, link }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <Link href={link} className="text-blue-600 mt-3 inline-block hover:underline">
        Learn More →
      </Link>
    </div>
  );
}
