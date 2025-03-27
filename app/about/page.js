import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaGlobe, FaCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl w-full text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="/profile.jpg" // Replace with your actual image
            alt="Sajal Namdeo"
            width={150}
            height={150}
            className="h-[150px] w-[150px] rounded-full border-4 border-blue-500 shadow-lg object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-400">
          Hey, I am Sajal Namdeo 👋
        </h1>

        {/* Short Bio */}
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          I’m a passionate{" "}
          <span className="font-semibold text-white">Full-Stack Developer</span>{" "}
          and a
          <span className="font-semibold text-white">
            {" "}
            Problem-Solving Enthusiast
          </span>
          . I specialize in Next.js, Node.js, and PostgreSQL, and I love
          building scalable web application. With 2000+ DSA problems solved, I
          rank in the top 3.6% on LeetCode and enjoy competitive programming.
        </p>

        {/* Achievements Section */}
        <div className="mt-6 text-left space-y-3 text-gray-300">
          <p>
            🚀{" "}
            <span className="font-semibold text-white">
              Top 3.6% on LeetCode
            </span>
            , solved 2000+ DSA problems.
          </p>
          <p>
            💻{" "}
            <span className="font-semibold text-white">
              Interned at Unoclave
            </span>
            , built a full-stack platform integrated with LLMs.
          </p>
          <p>
            📦 Developed and deployed{" "}
            <span className="font-semibold text-white">
              multiple full-stack projects
            </span>{" "}
            using MERN, Next.js, and Docker.
          </p>
          <p>
            ☁️ Currently learning{" "}
            <span className="font-semibold text-white">
              cloud concepts like Docker and Kubernetes
            </span>
            , focusing on scalable deployments.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-8 space-x-6">
          <Link href="https://linkedin.com/in/sajaln" target="_blank">
            <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
          </Link>
          <Link href="https://github.com/Sajal072004" target="_blank">
            <FaGithub className="text-2xl hover:text-blue-400 transition" />
          </Link>
          <Link href="https://sajalnamdeo.vercel.app" target="_blank">
            <FaGlobe className="text-2xl hover:text-blue-400 transition" />
          </Link>
          <Link href="https://leetcode.com/u/sajal0701" target="_blank">
            <FaCode className="text-2xl hover:text-blue-400 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
}
