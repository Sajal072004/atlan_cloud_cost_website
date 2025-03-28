"use client"
import { useState } from "react";
import Image from "next/image";

export default function Flowchart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-700 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        Cloud Cost Optimization Flowchart
      </h2>
      <div className="flex justify-center">
        {/* Clickable Image */}
        <Image
          src="/flowchart.png"
          alt="Cloud Cost Optimization Flowchart"
          width={600}
          height={400}
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-gray-700 text-white rounded-full p-2 hover:bg-red-500 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            {/* Fullscreen Image */}
            <Image
              src="/flowchart.png"
              alt="Flowchart"
              width={1000}
              height={800}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
