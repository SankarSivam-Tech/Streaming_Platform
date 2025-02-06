import AIPoweredInsights from "../Components/Analytics/AIPoweredInsights";
import ChannelPerformance from "../Components/Analytics/ChannelPerformance";
import CustomerSegmentation from "../Components/Analytics/CustomerSegmentation";
import OverviewCard from "../Components/Analytics/OverviewCard";
import ProductPerformance from "../Components/Analytics/ProductPerformance";
import RevenueChart from "../Components/Analytics/RevenueChart";
import UserRetention from "../Components/Analytics/UserRetention";
import Header from "../Components/common/Header";
import { DollarSign, Users, ShoppingBag, Eye, TrendingUp } from "lucide-react";

const overviewData = [
  { name: "Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign },
  { name: "Users", value: "45,678", change: 8.3, icon: Users },
  { name: "Orders", value: "9,876", change: -3.2, icon: ShoppingBag },
  { name: "Page Views", value: "1,234,567", change: 15.7, icon: Eye },
];

const revenueData = [
  { month: "Jan", revenue: 4000, target: 3800 },
  { month: "Feb", revenue: 3000, target: 3200 },
  { month: "Mar", revenue: 5000, target: 4500 },
  { month: "Apr", revenue: 4500, target: 4200 },
  { month: "May", revenue: 6000, target: 5500 },
  { month: "Jun", revenue: 5500, target: 5800 },
  { month: "Jul", revenue: 7000, target: 6500 },
];

const channelData = [
  { name: "Organic Search", value: 4000 },
  { name: "Paid Search", value: 3000 },
  { name: "Direct", value: 2000 },
  { name: "Social Media", value: 2780 },
  { name: "Referral", value: 1890 },
  { name: "Email", value: 2390 },
];
const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#0088FE",
  "#00C49F",
];

const productPerformanceData = [
  { name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
  { name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
  { name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
  { name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
  { name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
];

const userRetentionData = [
  { name: "Week 1", retention: 100 },
  { name: "Week 2", retention: 75 },
  { name: "Week 3", retention: 60 },
  { name: "Week 4", retention: 50 },
  { name: "Week 5", retention: 45 },
  { name: "Week 6", retention: 40 },
  { name: "Week 7", retention: 38 },
  { name: "Week 8", retention: 35 },
];

const customerSegmentationData = [
  { subject: "Engagement", A: 120, B: 110, fullMark: 150 },
  { subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
  { subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
  { subject: "Spend", A: 99, B: 100, fullMark: 150 },
  { subject: "Frequency", A: 85, B: 90, fullMark: 150 },
  { subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

const INSIGHTS = [
  {
    icon: TrendingUp,
    color: "text-green-500",
    insight:
      "Revenue is up 15% compared to last month, driven primarily by a successful email campaign.",
  },
  {
    icon: Users,
    color: "text-blue-500",
    insight:
      "Customer retention has improved by 8% following the launch of the new loyalty program.",
  },
  {
    icon: ShoppingBag,
    color: "text-purple-500",
    insight:
      'Product category "Electronics" shows the highest growth potential based on recent market trends.',
  },
  {
    icon: DollarSign,
    color: "text-yellow-500",
    insight:
      "Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.",
  },
];

const AnalyticsPage = () => {
  return (
    <main className="flex-1 overflow-auto relative z-10">
      <Header title="Analytics" />

      <article className="max-w-6xl mx-auto px-4 py-6 lg:px-8">
        <OverviewCard data={overviewData} />

        <RevenueChart data={revenueData} />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformance
            data={channelData}
            color={COLORS}
            title="Channel Performance"
          />

          <ProductPerformance
            data={productPerformanceData}
            title="Product Performance"
          />

          <UserRetention data={userRetentionData} title="User Retention" />

          <CustomerSegmentation
            data={customerSegmentationData}
            title="Customer Segmentation"
          />
        </section>
        
        <AIPoweredInsights data={INSIGHTS} title="AI-Powered Insights" />
      </article>
    </main>
  );
};

export default AnalyticsPage;
