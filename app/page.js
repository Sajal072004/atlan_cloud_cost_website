import Flowchart from "./components/Flowchart";
import StrategyCard from "./components/StrategyCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white text-center p-6">
      {/* Heading Section */}
      <h1 className="text-3xl md:text-5xl font-extrabold my-6 drop-shadow-lg">
        Cloud Cost Optimization
      </h1>

      {/* Introduction Section */}
      <div className="mt-12 mx-auto text-gray-300 text-lg md:text-lg mb-8 leading-relaxed text-left">
        <p>
          This website presents a comprehensive report for the Atlan intern assignment,  
          focused on strategies to optimize and reduce cloud costs effectively.  
        </p>
        <p className="mt-4">
          As businesses scale, cloud expenses can become a major concern.  
          The goal of this report is to provide actionable insights and best practices  
          for managing cloud expenditures efficiently, leveraging AWS tools and methodologies.
        </p>
        <p className="mt-4">
          This website serves as a visual representation of the report, making it easier to  
          understand various cost-saving techniques through structured diagrams and explanations.  
          Explore different AWS cost optimization strategies below to make informed decisions  
          about cloud spending.
        </p>
      </div>

       {/* Highlighted PDF Report Link */}
       <div className="text-center mb-8">
          <p className="text-xl font-semibold text-yellow-400">
            📄 The PDF report can be found here:
            <a
              href="https://drive.google.com/file/d/1_8maKEBSz53P_MDM7YopeagDMhSMPfWi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-300 hover:text-blue-500 transition"
            >
              Download Report
            </a>
          </p>
        </div>

      {/* Flowchart Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <Flowchart />
      </div>

      {/* Strategy Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 mx-auto max-w-6xl">
      <StrategyCard title="AWS Trusted Advisor" link="/strategies/trusted-advisor" />
          <StrategyCard title="AWS Pricing Calculator" link="/strategies/pricing-calculator" />
          <StrategyCard title="AWS CloudWatch + Lambda" link="/strategies/cloudwatch-lambda" />
          <StrategyCard title="AWS Savings Plans" link="/strategies/savings-plans" />
          <StrategyCard title="AWS Budgets & Alarms" link="/strategies/budget-alarms" />
          <StrategyCard title="AWS Cost Explorer" link="/strategies/cost-explorer" />
          <StrategyCard title="Anomaly Detection" link="/strategies/anomaly-detection" />
          <StrategyCard title="Audits & Reviews" link="/strategies/audits-reviews" />
          <StrategyCard title="Self-Healing Infrastructure" link="/strategies/self-healing" />
      </div>
    </div>
  );
}
