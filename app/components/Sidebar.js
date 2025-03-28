"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaUser,
  FaBars,
  FaTimes,
  FaHome,
  FaClipboardList,
  FaCalculator,
  FaCloud,
  FaDollarSign,
  FaBell,
  FaGithub,
  FaSearch,
} from "react-icons/fa";
import { MdOutlineSecurity, MdHealing } from "react-icons/md"; // Additional icons for new strategies

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state
  const pathname = usePathname(); // Get current page path

  const links = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "Strategies", href: "/strategies", icon: <FaClipboardList /> },
    { name: "AWS Trusted Advisor", href: "/strategies/trusted-advisor", icon: <FaClipboardList /> },
    { name: "AWS Pricing Calculator", href: "/strategies/pricing-calculator", icon: <FaCalculator /> },
    { name: "AWS CloudWatch + Lambda", href: "/strategies/cloudwatch-lambda", icon: <FaCloud /> },
    { name: "AWS Savings Plans", href: "/strategies/savings-plans", icon: <FaDollarSign /> },
    { name: "AWS Budgets & Alarms", href: "/strategies/budget-alarms", icon: <FaBell /> },
    { name: "AWS Cost Explorer", href: "/strategies/cost-explorer", icon: <FaClipboardList /> },
    { name: "Anomaly Detection", href: "/strategies/anomaly-detection", icon: <FaSearch /> },
    { name: "Audits & Reviews", href: "/strategies/audits-reviews", icon: <MdOutlineSecurity /> },
    { name: "Self-Healing Infrastructure", href: "/strategies/self-healing", icon: <MdHealing /> },
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
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white shadow-lg w-64 transition-transform duration-300 z-40 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-64`}
      >
        {/* Sidebar Header */}
        <div className="p-4">
          <h2 className="hidden lg:block text-xl font-bold text-gray-100">Quick Navigation</h2>
        </div>

        {/* Scrollable Navigation Section */}
        <div className="mt-10 lg:mt-0 flex-1 overflow-y-auto">
          <nav className="px-4">
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

       
        <div className="p-4 border-t border-gray-700">
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
        <div className="fixed inset-0  bg-opacity-50 h-screen z-30 lg:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
