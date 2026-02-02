import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import ER from "./Components/EmployeeRegistration/ER";
import QualityManagement from "./Components/QualityManagement/QualityManagement";
import CategoryManagement from "./Components/CategoryManagement/CategoryManagement";
import CustomerMangement from "./Components/CustomerManagement/CustomerMangement";
import BrandManagement from "./Components/BrandManagement/BrandManagement";
import ProductManagement from "./Components/ProductManagement/ProductManagement";
import ArchitectRagistration from "./Components/ArchitectRegistration/ArchitectRegistration";
import AddInventory from "./Components/Inventory/AddInventory";
import ManageTnventory from "./Components/Inventory/ManageTnventory";
import AddQuotation from "./Components/Quotation/AddQuotation";
import ManageQuotation from "./Components/Quotation/ManageQuotation";

function App() {
  return (
    <BrowserRouter>
      {/* FIXED LAYOUT */}
      <Sidebar />
      <Header />

      {/* CONTENT AREA */}
      <div className="ml-[250px] mt-[50px] p-[20px]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crm" element={<CustomerMangement />} />
          <Route path="/er" element={<ER />} />
          <Route path="/qm" element={<QualityManagement />} />
          <Route path="/cm" element={<CategoryManagement />} />
          <Route path="/bm" element={<BrandManagement />} />
          <Route path="/pm" element={<ProductManagement />} />
          <Route path="/ar" element={<ArchitectRagistration />} />
          <Route path="/inventory/add" element={<AddInventory />} />
          <Route path="/inventory/manage" element={<ManageTnventory />} />
          <Route path="/quotation/add" element={<AddQuotation />} />
          <Route path="/quotation/manage" element={<ManageQuotation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
