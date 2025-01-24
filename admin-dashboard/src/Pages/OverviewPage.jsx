import { motion } from "framer-motion";
import Header from "../Components/common/Header";
import StatCard from "../Components/common/StatCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../Components/Overview/SalesOverviewChart ";
import CategoryDistributionChart from "../Components/Overview/CategoryDistributionChart";
import SalesChannelChart from "../Components/Overview/SalesChannelChart";


const SALESData = [
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3800 },
  { name: "Sep", sales: 5100 },
  { name: "Oct", sales: 4600 },
  { name: "Nov", sales: 5400 },
  { name: "Dec", sales: 7200 },
  { name: "Jan", sales: 6100 },
  { name: "Feb", sales: 5900 },
  { name: "Mar", sales: 6800 },
  { name: "Apr", sales: 6300 },
  { name: "May", sales: 7100 },
  { name: "Jun", sales: 7500 },
];

const CATEGORYDATA = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3200 },
  { name: "Home & Garden", value: 2800 },
  { name: "Books", value: 2100 },
  { name: "Sports & Outdoors", value: 1900 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 },
];

const OverviewPage = () => {
  return (
    <main className="relative z-10 flex-1 overflow-auto ">
      <Header title="Overview" />

      <article className="max-w-6xl mx-auto px-4 py-6 lg:px-8">
        {/* Stats */}

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$1000"
            color="#6366F1"
          />
          <StatCard
            name="New Users"
            icon={Users}
            value="2100"
            color="#8B5CF6"
          />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="3000"
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={BarChart2}
            value="15%"
            color="#10B981"
          />
        </motion.section>

        {/* Charts */}

        <motion.section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart
            data={SALESData}
            title="Sales Overview"
            lineColor="#8B5CF6"
          />

          <CategoryDistributionChart
            data={CATEGORYDATA}
            title="Category Distribution"
            color={COLORS}
          />

        <SalesChannelChart
        data={SALES_CHANNEL_DATA}
        title="Sales by Channel"
        color={COLORS}
        />
        </motion.section>
      </article>
    </main>
  );
};

export default OverviewPage;
