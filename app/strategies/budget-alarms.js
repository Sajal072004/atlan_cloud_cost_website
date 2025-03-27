export default function BudgetAlarms() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold">AWS Budgets & Alarms</h2>
      <p className="text-gray-700 my-4">
        AWS Budgets and Alarms provide cost alerts to prevent unexpected expenses.
      </p>
      <ul className="list-disc ml-6">
        <li>Set budget thresholds for AWS services</li>
        <li>Receive email/SMS alerts when spending exceeds limits</li>
        <li>Helps prevent budget overruns</li>
      </ul>
    </div>
  );
}
