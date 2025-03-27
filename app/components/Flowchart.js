import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  { id: "1", position: { x: 250, y: 0 }, data: { label: "Cloud Cost Challenges" }, type: "input" },
  { id: "2", position: { x: 250, y: 100 }, data: { label: "AWS Trusted Advisor" } },
  { id: "3", position: { x: 250, y: 200 }, data: { label: "AWS Pricing Calculator" } },
  { id: "4", position: { x: 250, y: 300 }, data: { label: "AWS CloudWatch + Lambda" } },
  { id: "5", position: { x: 250, y: 400 }, data: { label: "AWS Savings Plans" } },
  { id: "6", position: { x: 250, y: 500 }, data: { label: "AWS Budgets & Alarms" } },
  { id: "7", position: { x: 250, y: 600 }, data: { label: "Optimized Cloud Costs & Continuous Savings" }, type: "output" },
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-6", source: "5", target: "6" },
  { id: "e6-7", source: "6", target: "7" },
];

export default function Flowchart() {
  return (
    <div className="h-96 bg-white p-4 rounded shadow">
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
