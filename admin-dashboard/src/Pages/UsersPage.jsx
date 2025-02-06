import Header from "../Components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../Components/common/StatCard";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import UsersTable from "../Components/users/UsersTable";
import UserGrowthChart from "../Components/users/UserGrowthChart";
import UserActivityHeatmap from "../Components/users/UserActivityHeatmap";
import UserDemographicsChart from "../Components/users/UserDemographicsChart";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Customer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Moderator",
    status: "Active",
  },
];

const userGrowthData = [
  { month: "Jan", users: 1000 },
  { month: "Feb", users: 1500 },
  { month: "Mar", users: 2000 },
  { month: "Apr", users: 3000 },
  { month: "May", users: 4000 },
  { month: "Jun", users: 5000 },
];

const userActivityData = [
  {
    name: "Mon",
    "0-4": 20,
    "4-8": 40,
    "8-12": 60,
    "12-16": 80,
    "16-20": 100,
    "20-24": 30,
  },
  {
    name: "Tue",
    "0-4": 30,
    "4-8": 50,
    "8-12": 70,
    "12-16": 90,
    "16-20": 110,
    "20-24": 40,
  },
  {
    name: "Wed",
    "0-4": 40,
    "4-8": 60,
    "8-12": 80,
    "12-16": 100,
    "16-20": 120,
    "20-24": 50,
  },
  {
    name: "Thu",
    "0-4": 50,
    "4-8": 70,
    "8-12": 90,
    "12-16": 110,
    "16-20": 130,
    "20-24": 60,
  },
  {
    name: "Fri",
    "0-4": 60,
    "4-8": 80,
    "8-12": 100,
    "12-16": 120,
    "16-20": 140,
    "20-24": 70,
  },
  {
    name: "Sat",
    "0-4": 70,
    "4-8": 90,
    "8-12": 110,
    "12-16": 130,
    "16-20": 150,
    "20-24": 80,
  },
  {
    name: "Sun",
    "0-4": 80,
    "4-8": 100,
    "8-12": 120,
    "12-16": 140,
    "16-20": 160,
    "20-24": 90,
  },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

const userDemographicsData = [
  { name: "18-24", value: 20 },
  { name: "25-34", value: 30 },
  { name: "35-44", value: 25 },
  { name: "45-54", value: 15 },
  { name: "55+", value: 10 },
];

const UsersPage = () => {
  return (
    <main className="relative z-10 flex-1 overflow-auto ">
      <Header title="Users" />

      <article className="max-w-6xl mx-auto px-4 py-6 lg:px-8">
        {/* Stats */}

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.section>

        <UsersTable title="Users" data={userData} />

        {/* Users Charts */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart data={userGrowthData} title="User growth" />

          <UserActivityHeatmap
            data={userActivityData}
            title="User Activity Heatmap"
          />

          <UserDemographicsChart
            data={userDemographicsData}
            color={COLORS}
            title="User Demographics"
          />
        </div>
      </article>
    </main>
  );
};

export default UsersPage;
