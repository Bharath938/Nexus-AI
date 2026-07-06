import Header from "../Header";
import TrendingSellingPieChart from "../charts/TredingSellingPieChart";

function TrendingSellingCard() {
  return (
    <div className="w-96 h-72 border border-border rounded-xl p-4 bg-surface">
      <Header
        props={{ headerTitle: "Trending Selling", timeline: "Monthly" }}
      />
      <TrendingSellingPieChart />
    </div>
  );
}

export default TrendingSellingCard;
