import Header from "../Components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../Components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../Components/Sales/SalesOverviewChart";
import SalesByCategoryChart from "../Components/Sales/SalesByCategoryChart";
import DailySalesTrend from "../Components/Sales/DailySalesTrend";

const SalesPage = () => {
  const monthlySalesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 5500 },
    { month: "Jul", sales: 7000 },
  ];

  const salesByCategory = [
    { name: "Electronics", value: 400 },
    { name: "Clothing", value: 300 },
    { name: "Home & Garden", value: 200 },
    { name: "Books", value: 100 },
    { name: "Others", value: 150 },
  ];

  const dailySalesData = [
    { name: "Mon", sales: 1000 },
    { name: "Tue", sales: 1200 },
    { name: "Wed", sales: 900 },
    { name: "Thu", sales: 1100 },
    { name: "Fri", sales: 1300 },
    { name: "Sat", sales: 1600 },
    { name: "Sun", sales: 1400 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

  const salesStats = {
    totalRevenue: "$1,234,567",
    averageOrderValue: "$78.90",
    conversionRate: "3.45%",
    salesGrowth: "12.3%",
  };
  return (
    <main className="flex-1 overflow-auto relative z-10">
      <Header title="Sales" />

      <article className="max-w-6xl mx-auto px-6 py-4 lg:px-8">
        {/* Sales Stats */}

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color="#6366F1"
          />

          <StatCard
            name="Avg. Order Value"
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color="#10B981"
          />

          <StatCard
            name="Conversation Rate"
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color="#F59E0B"
          />

          <StatCard
            name="Sales Growth"
            icon={CreditCard}
            value={salesStats.salesGrowth}
            color="#EF4444"
          />
        </motion.section>

        <SalesOverviewChart data={monthlySalesData} />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesByCategoryChart
            data={salesByCategory}
            color={COLORS}
            title="Sales by Category"
          />

          <DailySalesTrend
            data={dailySalesData}
            title="Daily Sales Trend"
          />
        </section>
      </article>
    </main>
  );
};

export default SalesPage;
