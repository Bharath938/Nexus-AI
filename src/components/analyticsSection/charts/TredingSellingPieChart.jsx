import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

function TrendingSellingPieChart() {
  const data = [
    { name: "Fashion", value: 45 },
    { name: "Kid", value: 34 },
    { name: "Electronics", value: 23 },
  ];

  const COLORS = ["#7c3aed", "#3b82f6", "#22c55e"];
  return (
    <div className="h-48">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={70}
            innerRadius={45}
          >
            {data.map((cell, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrendingSellingPieChart;
