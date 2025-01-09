import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const SalesOverviewChart = ({ data, title, lineColor }) => {
  return (
    <motion.article
      className="bg-gray-800 rounded-xl border border-gray-700 bg-opacity-50 backdrop-blur-md shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">{title}</h2>

      <section className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />

            <XAxis dataKey={"name"} stroke="#9ca3af" />

            <YAxis stroke="#9ca3af" />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />

            <Line
              type="monotone"
              dataKey="sales"
              stroke={lineColor}
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </motion.article>
  );
};

export default SalesOverviewChart;
