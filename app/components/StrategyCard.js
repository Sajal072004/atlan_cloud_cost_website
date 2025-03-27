import Link from "next/link";

export default function StrategyCard({ title, link }) {
  return (
    <div className="bg-gray-800 shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r from-blue-600 to-indigo-600">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <Link
        href={link}
        className="text-blue-300 mt-3 inline-block font-medium hover:text-white transition duration-300"
      >
        Learn More →
      </Link>
    </div>
  );
}
