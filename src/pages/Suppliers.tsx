import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { motion } from "framer-motion";
import { Search, Plus, Filter, MoreVertical, Star, Truck, Clock, AlertCircle, CheckCircle2, Download, TrendingUp } from 'lucide-react';

const suppliers = [
  {
    id: 'SUP-001',
    name: 'TechGadgets Inc.',
    category: 'Electronics',
    contact: 'John Smith',
    email: 'john@techgadgets.com',
    phone: '(555) 123-4567',
    rating: 4.8,
    status: 'active',
    leadTime: '3-5 days',
    performance: 94,
    lastOrder: '2023-05-15',
  },
  {
    id: 'SUP-002',
    name: 'Fashion Forward Ltd.',
    category: 'Apparel',
    contact: 'Sarah Johnson',
    email: 'sarah@fashionfwd.com',
    phone: '(555) 234-5678',
    rating: 4.5,
    status: 'active',
    leadTime: '7-10 days',
    performance: 88,
    lastOrder: '2023-05-18',
  },
  {
    id: 'SUP-003',
    name: 'Home Essentials Co.',
    category: 'Home & Living',
    contact: 'Michael Brown',
    email: 'michael@homeessentials.com',
    phone: '(555) 345-6789',
    rating: 4.2,
    status: 'on-hold',
    leadTime: '10-14 days',
    performance: 76,
    lastOrder: '2023-04-30',
  },
  {
    id: 'SUP-004',
    name: 'Beauty Plus',
    category: 'Beauty',
    contact: 'Emily Davis',
    email: 'emily@beautyplus.com',
    phone: '(555) 456-7890',
    rating: 4.7,
    status: 'active',
    leadTime: '5-7 days',
    performance: 91,
    lastOrder: '2023-05-20',
  },
  {
    id: 'SUP-005',
    name: 'Sports Gear Pro',
    category: 'Sports',
    contact: 'Robert Wilson',
    email: 'robert@sportsgear.com',
    phone: '(555) 567-8901',
    rating: 4.0,
    status: 'inactive',
    leadTime: '14-21 days',
    performance: 65,
    lastOrder: '2023-03-10',
  },
];

const statusStyles = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'on-hold': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-400',
};

const performanceColors = {
  high: 'bg-green-500',
  medium: 'bg-yellow-500',
  low: 'bg-red-500',
};

const getPerformanceColor = (score) => {
  if (score >= 85) return performanceColors.high;
  if (score >= 70) return performanceColors.medium;
  return performanceColors.low;
};

const Suppliers = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="ml-[240px] transition-all duration-300">
        <div className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Supplier Management</h1>
              <p className="text-muted-foreground">Manage your suppliers and vendor relationships</p>
            </div>
            <div className="flex gap-2">
              <button 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                onClick={() => {}}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Supplier
              </button>
              <button 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                onClick={() => {}}
              >
                <Download className="mr-2 h-4 w-4" />
                Export
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search suppliers..."
                className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-input bg-background hover:bg-accent/50 transition-colors">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
              <div className="h-8 w-px bg-border" />
              <div className="text-sm text-muted-foreground">
                {suppliers.length} {suppliers.length === 1 ? 'supplier' : 'suppliers'} found
              </div>
            </div>
          </motion.div>

          {/* Suppliers Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Supplier</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Performance</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {suppliers.map((supplier) => (
                    <tr key={supplier.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {supplier.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium">{supplier.name}</div>
                            <div className="text-xs text-muted-foreground">{supplier.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">{supplier.contact}</div>
                        <div className="text-xs text-muted-foreground">{supplier.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {supplier.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 mr-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${getPerformanceColor(supplier.performance)}`}
                                style={{ width: `${supplier.performance}%` }}
                              />
                            </div>
                          </div>
                          <span className="text-sm font-medium">{supplier.performance}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[supplier.status]}`}>
                          {supplier.status.charAt(0).toUpperCase() + supplier.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-muted-foreground hover:text-foreground transition-colors">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer */}
            <div className="px-6 py-4 border-t border-border flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{suppliers.length}</span> of{' '}
                <span className="font-medium">{suppliers.length}</span> suppliers
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 rounded-md border border-input bg-background text-sm font-medium">
                  Previous
                </button>
                <button className="px-3 py-1.5 rounded-md border border-input bg-background text-sm font-medium">
                  Next
                </button>
              </div>
            </div>
          </motion.div>

          {/* Supplier Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Suppliers</p>
                  <p className="text-2xl font-bold mt-1">3</p>
                </div>
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600 dark:text-green-400">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+1 from last month</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Lead Time</p>
                  <p className="text-2xl font-bold mt-1">7.2 days</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-red-600 dark:text-red-400">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+1.3 days from last month</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Rating</p>
                  <p className="text-2xl font-bold mt-1">4.4/5</p>
                </div>
                <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                  <Star className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600 dark:text-green-400">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+0.2 from last quarter</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Issues</p>
                  <p className="text-2xl font-bold mt-1">2</p>
                </div>
                <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/30">
                  <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-red-600 dark:text-red-400">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+1 from last week</span>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Suppliers;
