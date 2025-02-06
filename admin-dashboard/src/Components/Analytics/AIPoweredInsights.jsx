import { motion } from "framer-motion";

const AIPoweredInsights = ({ data, title }) => {
  return (
    <motion.main
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        AI-Powered Insights
      </h2>

      <section className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`p-2 bg-opacity-20`}>
              <item.icon className={`size-6 ${item.color}`} />
            </div>

            <p className="text-gray-300">{item.insight}</p>
          </div>
        ))}
      </section>
    </motion.main>
  );
};

export default AIPoweredInsights;
