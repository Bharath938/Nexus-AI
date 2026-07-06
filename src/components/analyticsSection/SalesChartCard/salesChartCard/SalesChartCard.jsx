import Header from "../../Header";
import SalesChart from "../../charts/SalesChart";

function SalesChartCard() {
  return (
    <>
      <div className="flex flex-col w-96 h-72 border border-border rounded-xl p-4 bg-surface">
        <Header props={{ headerTitle: "Sales Overtime", timeline: "Daily" }} />
        <SalesChart />
      </div>
    </>
  );
}

export default SalesChartCard;
