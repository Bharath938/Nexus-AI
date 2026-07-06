import SalesChartCard from "../analyticsSection/SalesChartCard/salesChartCard/SalesChartCard.jsx";
import TrendingSellingCard from "../analyticsSection/trendingSellingCard/TrendingSellingCard.jsx";
import Logo from "../nexus-ai-logo/Logo";
import Sidebar from "./sidebar/Sidebar.jsx";
import StatsCard from "./stats-card/StatsCard.jsx";
import TopBar from "./topbar/TopBar.jsx";
import { GiHamburgerMenu } from "../../assets/icons/index.js";

function DashboardPreview() {
  const statCardContent = [
    { title: "Total Revenue", num: 12300, growth: 45 },
    { title: "Total Orders", num: 200, growth: 45 },
    { title: "Total Customers", num: 145, growth: 45 },
    { title: "Total Delivery", num: 45, growth: 45 },
  ];
  return (
    <div className="flex justify-center overflow-hidden shadow-purple-500/10">
      <div className="origin-top scale-80 md:scale-90 lg:scale-90">
        <div className="flex border border-border w-[1000px] rounded-2xl shrink-0">
          <aside className="border-r border-border w-40">
            <Logo />
            <Sidebar />
          </aside>
          <div className="fle-1">
            <TopBar />
            <div className="flex gap-6 p-6">
              {statCardContent.map((content) => (
                <StatsCard key={content.title} cardContent={content} />
              ))}
            </div>
            <div className="flex gap-2 justify-between px-6 py-2 leading-tight">
              <SalesChartCard />
              <TrendingSellingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPreview;
