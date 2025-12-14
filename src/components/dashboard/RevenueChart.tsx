import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", revenue: 42000, aiOptimized: 45000 },
  { name: "Tue", revenue: 38000, aiOptimized: 43000 },
  { name: "Wed", revenue: 51000, aiOptimized: 58000 },
  { name: "Thu", revenue: 47000, aiOptimized: 54000 },
  { name: "Fri", revenue: 62000, aiOptimized: 71000 },
  { name: "Sat", revenue: 74000, aiOptimized: 82000 },
  { name: "Sun", revenue: 68000, aiOptimized: 78000 },
];

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold">Revenue Performance</h3>
          <p className="text-sm text-muted-foreground">AI-optimized vs baseline</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/50" />
            <span className="text-muted-foreground">Baseline</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">AI Optimized</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(173, 80%, 50%)" stopOpacity={0.1} />
                <stop offset="95%" stopColor="hsl(173, 80%, 50%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(173, 80%, 50%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(173, 80%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(222, 40%, 18%)"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                background: "hsl(222, 47%, 8%)",
                border: "1px solid hsl(222, 40%, 18%)",
                borderRadius: "8px",
                boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)",
              }}
              labelStyle={{ color: "hsl(210, 40%, 98%)" }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(173, 80%, 50%)"
              strokeOpacity={0.5}
              strokeWidth={2}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="aiOptimized"
              stroke="hsl(173, 80%, 50%)"
              strokeWidth={2}
              fill="url(#colorAI)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">AI Revenue Lift</span>
        <span className="text-success font-semibold">+$47,200 (+14.2%)</span>
      </div>
    </motion.div>
  );
}