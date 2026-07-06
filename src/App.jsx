import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import DashboardPreview from "./components/dashboardPreview/DashboardPreview";

function App() {
  return (
    <div className="bg-background text-white font-sansa">
      <Navbar />
      <Hero />
      <DashboardPreview />
    </div>
  );
}

export default App;
