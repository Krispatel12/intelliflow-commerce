import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Download, RefreshCw } from 'lucide-react';

const salesData = [
  { month: 'Jan', sales: 4000, predicted: 4200 },
  { month: 'Feb', sales: 3000, predicted: 3200 },
  { month: 'Mar', sales: 5000, predicted: 5200 },
  { month: 'Apr', sales: 2780, predicted: 2900 },
  { month: 'May', sales: 1890, predicted: 2000 },
  { month: 'Jun', sales: 2390, predicted: 2500, predictedLine: true },
  { month: 'Jul', sales: null, predicted: 2700, predictedLine: true },
  { month: 'Aug', sales: null, predicted: 2900, predictedLine: true },
];

const categoryData = [
  { name: 'Electronics', value: 35, color: '#8884d8' },
  { name: 'Clothing', value: 25, color: '#82ca9d' },
  { name: 'Home & Living', value: 20, color: '#ffc658' },
  { name: 'Beauty', value: 15, color: '#ff8042' },
  { name: 'Others', value: 5, color: '#0088fe' },
];

const kpiData = [
  {
    title: 'Next Month Forecast',
    value: '$27,500',
    change: '+12.4%',
    trend: 'up',
    description: 'Based on current trends and seasonality',
  },
  {
    title: 'Top Performing Category',
    value: 'Electronics',
    change: '+8.2%',
    trend: 'up',
    description: '35% of total sales',
  },
  {
    title: 'Inventory Turnover',
    value: '42 days',
    change: '-3.1%',
    trend: 'down',
    description: 'Average time to sell inventory',
  },
  {
    title: 'Forecast Accuracy',
    value: '92.7%',
    change: '+1.2%',
    trend: 'up',
    description: 'Last 3 months average',
  },
];

const Forecasting = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="ml-[240px] transition-all duration-300">
        <DashboardHeader 
          title="AI Sales Forecasting" 
          subtitle="Predictive analytics and demand planning powered by AI"
          actions={[
            { label: 'Export Report', icon: Download, onClick: () => {} },
            { label: 'Refresh Data', icon: RefreshCw, onClick: () => {} },
          ]}
        />
        
        <div className="p-6 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((kpi, index) => (
              <motion.div
                key={kpi.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">{kpi.title}</h3>
                  <div className={`flex items-center text-xs ${
                    kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {kpi.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span>{kpi.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{kpi.value}</div>
                <p className="text-xs text-muted-foreground">{kpi.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-6 rounded-xl border border-border"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">12-Month Sales Forecast</h3>
                <p className="text-sm text-muted-foreground">Actual vs Predicted Sales</p>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-2" />
                  <span>Actual</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary/30 mr-2" />
                  <span>Predicted</span>
                </div>
              </div>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280' }}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, 'Sales']}
                    labelFormatter={(label) => `Month: ${label}`}
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '0.5rem',
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="sales" 
                    stroke="#8884d8" 
                    fillOpacity={1} 
                    fill="url(#colorSales)" 
                    strokeWidth={2}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="#8884d8" 
                    fillOpacity={1} 
                    fill="url(#colorPredicted)" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Category Distribution */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">Category Distribution</h3>
                  <p className="text-sm text-muted-foreground">Sales by product category</p>
                </div>
                <PieChart className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Sales']}
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '0.5rem',
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* AI Recommendations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 bg-card p-6 rounded-xl border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">AI Recommendations</h3>
                  <p className="text-sm text-muted-foreground">Actionable insights for better forecasting</p>
                </div>
                <BarChart3 className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-400">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200">Seasonal Uptick Expected</h4>
                      <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                        Electronics category expected to grow by 18% in Q3. Consider increasing inventory by 15-20%.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-amber-600 dark:text-amber-400">
                      <TrendingDown className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-amber-800 dark:text-amber-200">Inventory Adjustment Needed</h4>
                      <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                        Home & Living category showing 7% lower than forecast. Consider promotional activities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-400">
                      <RefreshCw className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-green-800 dark:text-green-200">Model Accuracy Improved</h4>
                      <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                        Forecast accuracy improved to 92.7% (up 1.2%). Continue current strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forecasting;
