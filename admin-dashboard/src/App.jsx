import { Route, Routes } from "react-router-dom";

import OverviewPage from "./Pages/OverviewPage";
import ProductsPage from "./Pages/ProductsPage";

import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="flex bg-gray-900 h-screen text-gray-100 overflow-hidden">
      {/* Background Color */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />

      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
