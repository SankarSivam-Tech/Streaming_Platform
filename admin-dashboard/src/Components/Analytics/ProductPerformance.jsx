import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ProductPerformance = ({ data, title }) => {
  return (
    <motion.main
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">{title}</h2>

      <section style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

            <XAxis dataKey="name" stroke="#9CA3AF" />

            <YAxis stroke="#9CA3AF" />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />

            <Legend />

            <Bar dataKey="sales" fill="#8B5CF6" />
            <Bar dataKey="revenue" fill="#10B981" />
            <Bar dataKey="profit" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </motion.main>
  );
};

export default ProductPerformance;
