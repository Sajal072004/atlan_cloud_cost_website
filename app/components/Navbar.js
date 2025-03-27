import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Empty div for spacing on left side */}
        <div className="w-1/3"></div>

        {/* Centered Brand Name */}
        <div className="text-center w-1/3">
          <Link href="/" className="text-xl lg:text-2xl font-bold tracking-wide hover:text-blue-400 transition">
            Cloud Cost Optimization
          </Link>
        </div>

        {/* Social Links on the Right */}
        <div className="w-1/3 flex justify-end space-x-6 text-lg">
          <Link href="https://linkedin.com/in/sajaln" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-400 transition" />
          </Link>
          <Link href="https://github.com/Sajal072004/Cloud_Cost_Optimizations" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-blue-400 transition" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
