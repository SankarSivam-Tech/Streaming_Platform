import Header from "../Components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../Components/common/StatCard";
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import DailyOrders from "../Components/Orders/DailyOrders";
import OrderDistribution from "../Components/Orders/OrderDistribution";
import OrdersTable from "../Components/Orders/OrdersTable";

const OrdersPage = () => {
  const orderStats = {
    totalOrders: "1,234",
    pendingOrders: "56",
    completedOrders: "1,178",
    totalRevenue: "$98,765",
  };

  const dailyOrdersData = [
    { date: "07/01", orders: 45 },
    { date: "07/02", orders: 52 },
    { date: "07/03", orders: 49 },
    { date: "07/04", orders: 60 },
    { date: "07/05", orders: 55 },
    { date: "07/06", orders: 58 },
    { date: "07/07", orders: 62 },
  ];

  const orderStatusData = [
    { name: "Pending", value: 30 },
    { name: "Processing", value: 45 },
    { name: "Shipped", value: 60 },
    { name: "Delivered", value: 120 },
  ];
  const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#2AB7CA"];

  const orderData = [
    {
      id: "ORD001",
      customer: "John Doe",
      total: 235.4,
      status: "Delivered",
      date: "2023-07-01",
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      total: 412.0,
      status: "Processing",
      date: "2023-07-02",
    },
    {
      id: "ORD003",
      customer: "Bob Johnson",
      total: 162.5,
      status: "Shipped",
      date: "2023-07-03",
    },
    {
      id: "ORD004",
      customer: "Alice Brown",
      total: 750.2,
      status: "Pending",
      date: "2023-07-04",
    },
    {
      id: "ORD005",
      customer: "Charlie Wilson",
      total: 95.8,
      status: "Delivered",
      date: "2023-07-05",
    },
    {
      id: "ORD006",
      customer: "Eva Martinez",
      total: 310.75,
      status: "Processing",
      date: "2023-07-06",
    },
    {
      id: "ORD007",
      customer: "David Lee",
      total: 528.9,
      status: "Shipped",
      date: "2023-07-07",
    },
    {
      id: "ORD008",
      customer: "Grace Taylor",
      total: 189.6,
      status: "Delivered",
      date: "2023-07-08",
    },
  ];

  return (
    <main className="flex-1 overflow-auto relative z-10">
      <Header title="Orders" />

      <article className="max-w-6xl mx-auto px-4 py-6 lg:px-8">
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={orderStats.totalOrders}
            color="#EF4444"
          />

          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={orderStats.pendingOrders}
            color="#F59E0B"
          />

          <StatCard
            name="Completed  Orders"
            icon={CheckCircle}
            value={orderStats.completedOrders}
            color="#10B981"
          />

          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={orderStats.totalRevenue}
            color="#EF4444"
          />
        </motion.section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrders data={dailyOrdersData} title="Daily Orders" />

          <OrderDistribution
            data={orderStatusData}
            title="Order Status Distribution"
            color={COLORS}
          />
        </section>

        <OrdersTable data={orderData} title="Order List" />
      </article>
    </main>
  );
};

export default OrdersPage;
