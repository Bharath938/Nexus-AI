import Logo from "../nexus-ai-logo/Logo";
import Sidebar from "./sidebar/Sidebar.jsx";
import StatsCard from "./stats-card/StatsCard.jsx";
import TopBar from "./topbar/TopBar.jsx";

function DashboardPreview() {
  const statCardContent = [
    { title: "Total Revenue", num: 12300, growth: 45 },
    { title: "Total Orders", num: 200, growth: 45 },
    { title: "Total Customers", num: 145, growth: 45 },
    { title: "Total Delivery", num: 45, growth: 45 },
  ];
  return (
    <div className="px-32">
      <div className="flex border border-border w-full rounded-2xl">
        <aside className="border-r border-border w-40">
          <Logo />
          <Sidebar />
        </aside>
        <div className="w-full">
          <TopBar />
          <div className="flex gap-2">
            {statCardContent.map((content) => (
              <StatsCard cardContent={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPreview;
