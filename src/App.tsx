import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import PricingAI from "./pages/PricingAI";
import Inventory from "./pages/Inventory";
import RiskCenter from "./pages/RiskCenter";
import Help from "./pages/Help";
import Forecasting from "./pages/Forecasting";
import Settings from "./pages/Settings";
import Suppliers from "./pages/Suppliers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/pricing" element={<PricingAI />} />
          <Route path="/dashboard/inventory" element={<Inventory />} />
          <Route path="/dashboard/risk" element={<RiskCenter />} />
          <Route path="/dashboard/forecasting" element={<Forecasting />} />
          <Route path="/dashboard/suppliers" element={<Suppliers />} />
          <Route path="/dashboard/help" element={<Help />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
