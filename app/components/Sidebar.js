"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaCalculator, FaCloud, FaDollarSign, FaBell, FaClipboardList, FaGithub, FaUser } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state
  const pathname = usePathname(); // Get current page path

  const links = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "AWS Trusted Advisor", href: "/strategies/trusted-advisor", icon: <FaClipboardList /> },
    { name: "AWS Pricing Calculator", href: "/strategies/pricing-calculator", icon: <FaCalculator /> },
    { name: "AWS CloudWatch + Lambda", href: "/strategies/cloudwatch-lambda", icon: <FaCloud /> },
    { name: "AWS Savings Plans", href: "/strategies/savings-plans", icon: <FaDollarSign /> },
    { name: "AWS Budgets & Alarms", href: "/strategies/budget-alarms", icon: <FaBell /> },
    { name: "AWS Cost Explorer", href: "/strategies/cost-explorer", icon: <FaClipboardList /> },
    { name: "GitHub", href: "https://github.com/Sajal072004/Cloud_Cost_Optimizations", icon: <FaGithub />, external: true },
  ];

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-3 rounded-full shadow-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white shadow-lg p-4 w-64 transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-64 lg:flex flex-col justify-between`}
      >
        {/* Sidebar Header */}
        <div>
          <h2 className="hidden lg:block text-xl font-bold mb-6 text-gray-100">Quick Navigation</h2>

          {/* Navigation Links */}
          <nav className="mt-12 lg:mt-0">
            {links.map(({ name, href, icon, external }) => (
              <Link
                key={name}
                href={href}
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener noreferrer" : ""}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${
                  pathname === href ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {icon} <span>{name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* About Me Section */}
        <div>
          <Link
            href="/about"
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <FaUser /> <span>About Me</span>
          </Link>
        </div>
      </aside>

      {/* Overlay for Mobile Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
