import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Shield,
  Ban,
  Eye,
  CheckCircle,
  XCircle,
  TrendingUp,
  AlertOctagon,
  Search,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const threatData = [
  { time: "00:00", threats: 12, blocked: 11 },
  { time: "04:00", threats: 8, blocked: 8 },
  { time: "08:00", threats: 24, blocked: 23 },
  { time: "12:00", threats: 45, blocked: 44 },
  { time: "16:00", threats: 38, blocked: 37 },
  { time: "20:00", threats: 28, blocked: 27 },
  { time: "Now", threats: 15, blocked: 15 },
];

const activeThreats = [
  {
    id: "TH-001",
    type: "Suspicious Order Pattern",
    severity: "high",
    description: "3 high-value orders from new account in 10 minutes",
    order: "#98234",
    amount: "$2,847",
    status: "pending",
    confidence: 87,
  },
  {
    id: "TH-002",
    type: "Payment Anomaly",
    severity: "medium",
    description: "Billing address mismatch with shipping location",
    order: "#98241",
    amount: "$459",
    status: "investigating",
    confidence: 72,
  },
  {
    id: "TH-003",
    type: "Bot Activity Detected",
    severity: "high",
    description: "Automated checkout attempts from same IP",
    order: "Multiple",
    amount: "$12,400",
    status: "blocked",
    confidence: 94,
  },
];

const recentBlocks = [
  { time: "2 min ago", type: "Card Testing", ip: "192.168.1.***", result: "Blocked" },
  { time: "5 min ago", type: "Velocity Check", ip: "10.0.0.***", result: "Blocked" },
  { time: "8 min ago", type: "Fraud Pattern", ip: "172.16.0.***", result: "Blocked" },
  { time: "12 min ago", type: "Account Takeover", ip: "192.168.2.***", result: "Blocked" },
];

const RiskCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <main className="ml-[240px] transition-all duration-300">
        <DashboardHeader
          title="Risk & Fraud Center"
          subtitle="Real-time threat detection and automatic mitigation"
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
                <Shield className="h-5 w-5 text-success" />
                <span className="text-xs text-success">Secure</span>
              </div>
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm text-muted-foreground">Threat Detection</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-2">
                <Ban className="h-5 w-5 text-destructive" />
                <span className="text-xs text-muted-foreground">Today</span>
              </div>
              <div className="text-2xl font-bold">147</div>
              <div className="text-sm text-muted-foreground">Threats Blocked</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-2">
                <Eye className="h-5 w-5 text-warning" />
                <span className="text-xs text-warning">Active</span>
              </div>
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-muted-foreground">Under Review</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  -12%
                </span>
              </div>
              <div className="text-2xl font-bold">$0</div>
              <div className="text-sm text-muted-foreground">Fraud Loss</div>
            </motion.div>
          </div>

          {/* Threat Timeline Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold">Threat Activity</h3>
                <p className="text-sm text-muted-foreground">
                  Threats detected vs blocked (24h)
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <span className="text-muted-foreground">Detected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-muted-foreground">Blocked</span>
                </div>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={threatData}>
                  <defs>
                    <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorBlocked" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(142, 76%, 45%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(142, 76%, 45%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(222, 40%, 18%)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(222, 47%, 8%)",
                      border: "1px solid hsl(222, 40%, 18%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="threats"
                    stroke="hsl(0, 72%, 51%)"
                    strokeWidth={2}
                    fill="url(#colorThreats)"
                  />
                  <Area
                    type="monotone"
                    dataKey="blocked"
                    stroke="hsl(142, 76%, 45%)"
                    strokeWidth={2}
                    fill="url(#colorBlocked)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Threats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <AlertOctagon className="h-5 w-5 text-destructive" />
                Active Threats
              </h3>
              <div className="space-y-3">
                {activeThreats.map((threat) => (
                  <div
                    key={threat.id}
                    className={`p-4 rounded-xl ${
                      threat.severity === "high"
                        ? "bg-destructive/10 border border-destructive/30"
                        : "bg-warning/10 border border-warning/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium text-sm flex items-center gap-2">
                          {threat.type}
                          <span
                            className={`px-2 py-0.5 rounded text-xs ${
                              threat.severity === "high"
                                ? "bg-destructive/20 text-destructive"
                                : "bg-warning/20 text-warning"
                            }`}
                          >
                            {threat.severity}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {threat.description}
                        </div>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          threat.status === "blocked"
                            ? "bg-success/20 text-success"
                            : threat.status === "pending"
                            ? "bg-destructive/20 text-destructive"
                            : "bg-warning/20 text-warning"
                        }`}
                      >
                        {threat.status}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Order: {threat.order}</span>
                      <span>Amount: {threat.amount}</span>
                      <span>Confidence: {threat.confidence}%</span>
                    </div>
                    {threat.status === "pending" && (
                      <div className="flex gap-2 mt-3">
                        <button className="flex-1 py-2 rounded-lg bg-destructive/20 text-destructive text-xs font-medium hover:bg-destructive/30 transition-colors flex items-center justify-center gap-1">
                          <XCircle className="h-3 w-3" />
                          Block
                        </button>
                        <button className="flex-1 py-2 rounded-lg bg-success/20 text-success text-xs font-medium hover:bg-success/30 transition-colors flex items-center justify-center gap-1">
                          <CheckCircle className="h-3 w-3" />
                          Allow
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Blocks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Ban className="h-5 w-5 text-primary" />
                Recent Blocks
              </h3>
              <div className="space-y-3">
                {recentBlocks.map((block, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-success" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{block.type}</div>
                        <div className="text-xs text-muted-foreground">
                          IP: {block.ip}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-success">{block.result}</div>
                      <div className="text-xs text-muted-foreground">{block.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                View all blocks →
              </button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RiskCenter;