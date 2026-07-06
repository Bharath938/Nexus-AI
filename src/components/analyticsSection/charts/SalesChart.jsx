import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function SalesChart() {
  const salesData = [
    { month: "Jan", sales: 1200 },
    { month: "Feb", sales: 1800 },
    { month: "March", sales: 2000 },
    { month: "April", sales: 1500 },
    { month: "May", sales: 2300 },
  ];
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={salesData} responsive>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="month" />
          <YAxis dataKey="sales" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#7c3aed"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
