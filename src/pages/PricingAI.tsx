import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Info,
  Sliders,
  Play,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const priceHistory = [
  { time: "00:00", price: 49.99, optimal: 52.00 },
  { time: "04:00", price: 49.99, optimal: 51.50 },
  { time: "08:00", price: 52.99, optimal: 53.00 },
  { time: "12:00", price: 54.99, optimal: 55.50 },
  { time: "16:00", price: 54.99, optimal: 57.00 },
  { time: "20:00", price: 57.99, optimal: 58.50 },
  { time: "Now", price: 57.99, optimal: 62.00 },
];

const products = [
  {
    id: "SKU-7829",
    name: "Wireless Headphones Pro",
    currentPrice: 57.99,
    suggestedPrice: 62.99,
    change: "+8.6%",
    confidence: 94,
    reason: "Competitor out of stock, demand surge from search trends",
  },
  {
    id: "SKU-5678",
    name: "Premium Phone Case",
    currentPrice: 29.99,
    suggestedPrice: 28.49,
    change: "-5.0%",
    confidence: 89,
    reason: "Inventory aging >30 days, competitor pricing dropped",
  },
  {
    id: "SKU-1234",
    name: "USB-C Fast Charger",
    currentPrice: 34.99,
    suggestedPrice: 34.99,
    change: "0%",
    confidence: 92,
    reason: "Current price is optimal for market conditions",
  },
];

const PricingAI = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [simulatedPrice, setSimulatedPrice] = useState(selectedProduct.suggestedPrice);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <main className="ml-[240px] transition-all duration-300">
        <DashboardHeader
          title="Dynamic Pricing AI"
          subtitle="Real-time price optimization powered by market intelligence"
        />

        <div className="p-6 space-y-6">
          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +18.2%
                </span>
              </div>
              <div className="text-2xl font-bold">$24,892</div>
              <div className="text-sm text-muted-foreground">Revenue from AI Pricing</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-2">
                <Sliders className="h-5 w-5 text-accent" />
                <span className="text-xs text-muted-foreground">Today</span>
              </div>
              <div className="text-2xl font-bold">847</div>
              <div className="text-sm text-muted-foreground">Price Adjustments</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-5 w-5 text-success" />
                <span className="text-xs text-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +2.4%
                </span>
              </div>
              <div className="text-2xl font-bold">23.4%</div>
              <div className="text-sm text-muted-foreground">Average Margin</div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Price History Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 glass-card p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold">Price History - {selectedProduct.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Current vs AI-optimal pricing
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                    <span className="text-muted-foreground">Current</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <span className="text-muted-foreground">AI Optimal</span>
                  </div>
                </div>
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceHistory}>
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
                      tickFormatter={(value) => `$${value}`}
                      domain={["dataMin - 5", "dataMax + 5"]}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(222, 47%, 8%)",
                        border: "1px solid hsl(222, 40%, 18%)",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`$${value.toFixed(2)}`, ""]}
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="hsl(173, 80%, 50%)"
                      strokeWidth={2}
                      dot={{ fill: "hsl(173, 80%, 50%)", strokeWidth: 0, r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="optimal"
                      stroke="hsl(142, 76%, 45%)"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Price Simulator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4">Price Simulator</h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/30">
                  <div className="text-sm text-muted-foreground mb-1">Current Price</div>
                  <div className="text-2xl font-bold">${selectedProduct.currentPrice}</div>
                </div>

                <div className="p-4 rounded-xl bg-success/10 border border-success/30">
                  <div className="text-sm text-success mb-1">AI Recommendation</div>
                  <div className="text-2xl font-bold text-success">
                    ${selectedProduct.suggestedPrice}
                  </div>
                  <div className="text-xs text-success mt-1">
                    {selectedProduct.change} • {selectedProduct.confidence}% confidence
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Simulate Price: ${simulatedPrice.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min={selectedProduct.currentPrice * 0.8}
                    max={selectedProduct.currentPrice * 1.3}
                    step={0.01}
                    value={simulatedPrice}
                    onChange={(e) => setSimulatedPrice(parseFloat(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 btn-primary flex items-center justify-center gap-2 py-2">
                    <Play className="h-4 w-4" />
                    Apply
                  </button>
                  <button className="btn-secondary px-4 py-2">
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="font-semibold mb-4">AI Price Recommendations</h3>

            <div className="space-y-3">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setSelectedProduct(product);
                    setSimulatedPrice(product.suggestedPrice);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                    selectedProduct.id === product.id
                      ? "bg-primary/10 border border-primary/30"
                      : "bg-secondary/30 hover:bg-secondary/50"
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{product.name}</span>
                      <span className="text-xs text-muted-foreground">{product.id}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Info className="h-3 w-3" />
                      {product.reason}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">${product.currentPrice}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <span className="font-semibold">${product.suggestedPrice}</span>
                    </div>
                    <div
                      className={`text-xs ${
                        product.change.startsWith("+")
                          ? "text-success"
                          : product.change.startsWith("-")
                          ? "text-destructive"
                          : "text-muted-foreground"
                      }`}
                    >
                      {product.change}
                    </div>
                  </div>

                  <div
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      product.confidence >= 90
                        ? "bg-success/20 text-success"
                        : "bg-warning/20 text-warning"
                    }`}
                  >
                    {product.confidence}%
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PricingAI;