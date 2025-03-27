import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">
        Cloud Cost Optimization
      </Link>
      <Link href="/strategies" className="text-blue-600">Strategies</Link>
    </nav>
  );
}
