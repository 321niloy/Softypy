import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 32800,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 54967,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 341098,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 561200,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 341108,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 34680,
    amt: 1700,
  },
];

export default function ComposetChart() {
  return (
    <div style={{ width: "100%", height: 500, backgroundColor: "#252629fc" }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#00C49F" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
