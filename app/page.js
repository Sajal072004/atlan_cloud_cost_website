import Flowchart from "./components/Flowchart";
import StrategyCard from "./components/StrategyCard";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-6">Cloud Cost Optimization</h1>
      <p className="text-lg text-gray-600 mb-8">
        Learn how to efficiently manage cloud expenses using AWS strategies.
      </p>
      <Flowchart />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        <StrategyCard title="AWS Trusted Advisor" link="/strategies/trusted-advisor" />
        <StrategyCard title="AWS Pricing Calculator" link="/strategies/pricing-calculator" />
        <StrategyCard title="AWS CloudWatch + Lambda" link="/strategies/cloudwatch-lambda" />
        <StrategyCard title="AWS Savings Plans" link="/strategies/savings-plans" />
        <StrategyCard title="AWS Budgets & Alarms" link="/strategies/budget-alarms" />
        <StrategyCard title="AWS Cost Explorer" link="/strategies/cost-explorer" />
      </div>
    </div>
  );
}
