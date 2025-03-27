import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Cloud Cost Optimization</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/strategies/trusted-advisor" className="hover:text-gray-300">Strategies</Link>
          <Link href="https://github.com/your-repo" className="hover:text-gray-300">GitHub</Link>
        </div>
      </div>
    </nav>
  );
}
