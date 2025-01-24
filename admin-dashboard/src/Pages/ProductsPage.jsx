import React from "react";
import Header from "../Components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../Components/common/StatCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import CategoryDistributionChart from "../Components/Overview/CategoryDistributionChart";
import SalesTrendChart from "../Components/products/SalesTrendChart";
import ProductTable from "../Components/products/ProductTable";

const ProductsPage = () => {

  const SALESData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 5500 },
  ];

  const CATEGORYDATA = [
    { name: "Electronics", value: 4500 },
    { name: "Clothing", value: 3200 },
    { name: "Home & Garden", value: 2800 },
    { name: "Books", value: 2100 },
    { name: "Sports & Outdoors", value: 1900 },
  ];

  const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

  const PRODUCT_DATA = [
    { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
    { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
    { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
    { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
    { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
  ];

  return (
    <main className="relative z-10 flex-1 overflow-auto ">
      <Header title="Products" />

      <article className="max-w-6xl mx-auto px-4 py-6 lg:px-8">
        {/* Stats */}

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value={1000}
            color="#6366F1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value={89}
            color="#10B981"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value={23}
            color="#F59E0B"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={"$543000"}
            color="#EF4444"
          />
        </motion.section>

        {/* Producst Table */}

        <ProductTable
        data={PRODUCT_DATA}
        title="Product List"
        
        />

        {/* Charts */}

        <motion.section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart
            data={SALESData}
            title="Sales Trend"
            lineColor="#6366F1"
          />

          <CategoryDistributionChart
            data={CATEGORYDATA}
            title="Category Distribution"
            color={COLORS}
          />
        </motion.section>
      </article>
    </main>
  );
};

export default ProductsPage;
