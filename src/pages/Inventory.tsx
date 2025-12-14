import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { motion } from "framer-motion";
import {
  Package,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  RefreshCcw,
  CheckCircle,
  Clock,
  Truck,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const stockHealth = [
  { name: "Healthy", value: 72, color: "hsl(142, 76%, 45%)" },
  { name: "Low Stock", value: 18, color: "hsl(38, 92%, 50%)" },
  { name: "Critical", value: 7, color: "hsl(0, 72%, 51%)" },
  { name: "Overstock", value: 3, color: "hsl(262, 83%, 65%)" },
];

const categoryStock = [
  { category: "Electronics", stock: 89, target: 95 },
  { category: "Apparel", stock: 94, target: 90 },
  { category: "Home", stock: 78, target: 85 },
  { category: "Sports", stock: 92, target: 90 },
  { category: "Beauty", stock: 67, target: 80 },
];

const alerts = [
  {
    type: "critical",
    product: "USB-C Cable 6ft",
    sku: "SKU-1234",
    stock: 12,
    dailyVelocity: 45,
    daysRemaining: 0.3,
    action: "Auto-reorder placed",
  },
  {
    type: "warning",
    product: "Wireless Mouse",
    sku: "SKU-5678",
    stock: 89,
    dailyVelocity: 28,
    daysRemaining: 3.2,
    action: "Reorder recommended",
  },
  {
    type: "info",
    product: "Phone Stand",
    sku: "SKU-9012",
    stock: 234,
    dailyVelocity: 12,
    daysRemaining: 19.5,
    action: "Healthy stock level",
  },
];

const pendingOrders = [
  { supplier: "TechSupply Co.", items: 12, eta: "2 days", status: "in-transit" },
  { supplier: "GlobalParts Inc.", items: 8, eta: "4 days", status: "processing" },
  { supplier: "FastShip LLC", items: 24, eta: "1 day", status: "in-transit" },
];

const Inventory = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <main className="ml-[240px] transition-all duration-300">
        <DashboardHeader
          title="Inventory Intelligence"
          subtitle="Self-healing inventory management with predictive restocking"
        />

        <div className="p-6 space-y-6">
          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-2">
                <Package className="h-5 w-5 text-primary" />
                <span className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +2.1%
                </span>
              </div>
              <div className="text-2xl font-bold">94.2%</div>
              <div className="text-sm text-muted-foreground">Stock Health</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <span className="text-xs text-muted-foreground">Active</span>
              </div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-muted-foreground">Restock Alerts</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-2">
                <RefreshCcw className="h-5 w-5 text-accent" />
                <span className="text-xs text-muted-foreground">Today</span>
              </div>
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm text-muted-foreground">Auto-Reorders</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-2">
                <Truck className="h-5 w-5 text-success" />
                <span className="text-xs text-success flex items-center gap-1">
                  <TrendingDown className="h-3 w-3" />
                  -18%
                </span>
              </div>
              <div className="text-2xl font-bold">2.4d</div>
              <div className="text-sm text-muted-foreground">Avg Lead Time</div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Stock Health Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4">Stock Health Distribution</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={stockHealth}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {stockHealth.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: "hsl(222, 47%, 8%)",
                        border: "1px solid hsl(222, 40%, 18%)",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`${value}%`, ""]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {stockHealth.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Category Stock Levels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-2 glass-card p-6"
            >
              <h3 className="font-semibold mb-4">Category Stock Levels</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryStock} layout="vertical">
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(222, 40%, 18%)"
                      horizontal={false}
                    />
                    <XAxis
                      type="number"
                      domain={[0, 100]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <YAxis
                      type="category"
                      dataKey="category"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                      width={80}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(222, 47%, 8%)",
                        border: "1px solid hsl(222, 40%, 18%)",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="stock" fill="hsl(173, 80%, 50%)" radius={[0, 4, 4, 0]} />
                    <Bar
                      dataKey="target"
                      fill="hsl(173, 80%, 50%)"
                      fillOpacity={0.3}
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Stock Alerts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Stock Alerts
              </h3>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl ${
                      alert.type === "critical"
                        ? "bg-destructive/10 border border-destructive/30"
                        : alert.type === "warning"
                        ? "bg-warning/10 border border-warning/30"
                        : "bg-secondary/30 border border-border/50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium text-sm">{alert.product}</div>
                        <div className="text-xs text-muted-foreground">{alert.sku}</div>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          alert.type === "critical"
                            ? "bg-destructive/20 text-destructive"
                            : alert.type === "warning"
                            ? "bg-warning/20 text-warning"
                            : "bg-success/20 text-success"
                        }`}
                      >
                        {alert.daysRemaining < 1
                          ? "Critical"
                          : alert.daysRemaining < 5
                          ? "Low"
                          : "Healthy"}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Stock: {alert.stock}</span>
                      <span>Velocity: {alert.dailyVelocity}/day</span>
                      <span>Days left: {alert.daysRemaining.toFixed(1)}</span>
                    </div>
                    <div className="mt-2 text-xs text-primary flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      {alert.action}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pending Orders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Incoming Shipments
              </h3>
              <div className="space-y-3">
                {pendingOrders.map((order, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-secondary/30 border border-border/50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-sm">{order.supplier}</div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "in-transit"
                            ? "bg-primary/20 text-primary"
                            : "bg-warning/20 text-warning"
                        }`}
                      >
                        {order.status === "in-transit" ? "In Transit" : "Processing"}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Package className="h-3 w-3" />
                        {order.items} items
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        ETA: {order.eta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inventory;