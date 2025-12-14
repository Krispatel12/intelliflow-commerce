import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AIDecisionTimeline } from "@/components/dashboard/AIDecisionTimeline";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ConfidenceMeter } from "@/components/dashboard/ConfidenceMeter";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { 
  DollarSign, 
  ShoppingCart, 
  Package, 
  TrendingUp,
  Brain,
  AlertTriangle
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="ml-[240px] transition-all duration-300">
        <DashboardHeader 
          title="AI Command Center" 
          subtitle="Real-time overview of your autonomous commerce operations"
        />
        
        <div className="p-6 space-y-6">
          {/* Top Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Revenue Today"
              value="$124,892"
              change="+12.3%"
              trend="up"
              icon={DollarSign}
              description="AI pricing contributed $18,200"
              delay={0}
            />
            <MetricCard
              title="Orders"
              value="1,847"
              change="+8.1%"
              trend="up"
              icon={ShoppingCart}
              description="156 flagged for review"
              delay={0.1}
            />
            <MetricCard
              title="Stock Health"
              value="94.2%"
              change="-1.8%"
              trend="down"
              icon={Package}
              description="12 items need restocking"
              delay={0.2}
            />
            <MetricCard
              title="AI Decisions"
              value="2,847"
              change="+156"
              trend="up"
              icon={Brain}
              description="94% confidence average"
              delay={0.3}
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Charts */}
            <div className="lg:col-span-2 space-y-6">
              <RevenueChart />
              <AIDecisionTimeline />
            </div>

            {/* Right Column - Metrics & Actions */}
            <div className="space-y-6">
              <ConfidenceMeter />
              <QuickActions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;