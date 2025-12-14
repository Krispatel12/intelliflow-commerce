import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { motion } from "framer-motion";
import { Search, LifeBuoy, MessageSquare, BookOpen, Video, Mail, Phone, MessageCircle, Zap, Clock, Award, Users, Settings, Package, Truck, BarChart, CreditCard, Code, MonitorPlay, ChevronDown, ArrowRight, FileText } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How do I update my account information?",
    answer: "You can update your account information by clicking on your profile picture in the top right corner and selecting 'Account Settings'.",
    category: "Account"
  },
  {
    question: "How do I add a new product?",
    answer: "Navigate to the Products section and click the 'Add Product' button. Fill in the required details and save your changes.",
    category: "Products"
  },
  {
    question: "How do I generate a sales report?",
    answer: "Go to the Analytics section and select 'Generate Report'. Choose your date range and the type of report you need.",
    category: "Analytics"
  },
  {
    question: "How do I process a return?",
    answer: "Navigate to the Orders section, find the order with the return request, and click 'Process Return' to initiate the return process.",
    category: "Orders"
  },
  {
    question: "How do I update my payment method?",
    answer: "Go to Billing in your account settings and click on 'Payment Methods' to add or update your payment information.",
    category: "Billing"
  },
  {
    question: "How do I invite team members?",
    answer: "Navigate to Team Settings and click 'Invite Members'. Enter their email addresses and assign appropriate permissions.",
    category: "Team"
  }
];

const categories = [
  { name: 'Getting Started', icon: Zap, count: 5 },
  { name: 'Account Settings', icon: Settings, count: 8 },
  { name: 'Products & Inventory', icon: Package, count: 12 },
  { name: 'Orders & Shipping', icon: Truck, count: 7 },
  { name: 'Analytics & Reports', icon: BarChart, count: 6 },
  { name: 'Billing & Payments', icon: CreditCard, count: 4 },
  { name: 'Team Management', icon: Users, count: 5 },
  { name: 'API & Integrations', icon: Code, count: 9 },
];

const helpResources = [
  {
    title: 'Documentation',
    description: 'Browse our comprehensive documentation',
    icon: BookOpen,
    link: '#'
  },
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step video guides',
    icon: Video,
    link: '#'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other users',
    icon: Users,
    link: '#'
  },
  {
    title: 'Webinars',
    description: 'Join live training sessions',
    icon: MonitorPlay,
    link: '#'
  }
];

const contactMethods = [
  {
    title: 'Email Support',
    description: 'support@intelliflow.com',
    icon: Mail,
    link: 'mailto:support@intelliflow.com',
    available: '24/7',
    responseTime: 'Within 24 hours'
  },
  {
    title: 'Live Chat',
    description: 'Chat with our support team',
    icon: MessageCircle,
    link: '#',
    available: 'Mon-Fri, 9am-6pm EST',
    responseTime: 'Under 5 minutes'
  },
  {
    title: 'Phone Support',
    description: '(555) 123-4567',
    icon: Phone,
    link: 'tel:5551234567',
    available: 'Mon-Fri, 9am-6pm EST',
    responseTime: 'Immediate'
  }
];

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('faq');
  
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="ml-[240px] transition-all duration-300">
        <DashboardHeader 
          title="Help Center" 
          subtitle="Find answers, guides, and support"
        />
        
        <div className="p-6 space-y-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <LifeBuoy className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4">How can we help you today?</h1>
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search our help center..."
                  className="w-full pl-12 pr-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <p className="mt-4 text-muted-foreground">
                Popular searches: <a href="#" className="text-primary hover:underline">billing</a>, 
                <a href="#" className="text-primary hover:underline ml-2">inventory</a>, 
                <a href="#" className="text-primary hover:underline ml-2">reports</a>
              </p>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="border-b border-border">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('faq')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'faq'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                }`}
              >
                FAQ & Documentation
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'resources'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'contact'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                }`}
              >
                Contact Support
              </button>
            </nav>
          </div>

          {/* FAQ Section */}
          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1 space-y-4">
                  <h3 className="text-lg font-semibold">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
                      >
                        <div className="flex items-center">
                          <category.icon className="h-5 w-5 mr-3 text-muted-foreground" />
                          <span>{category.name}</span>
                        </div>
                        <span className="text-xs bg-muted rounded-full px-2 py-1">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold mb-6">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'Frequently Asked Questions'}
                  </h3>
                  
                  {filteredFaqs.length > 0 ? (
                    <div className="space-y-4">
                      {filteredFaqs.map((faq, index) => (
                        <div key={index} className="border border-border rounded-xl overflow-hidden">
                          <button className="w-full p-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors">
                            <div>
                              <h4 className="font-medium">{faq.question}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{faq.answer}</p>
                            </div>
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h4 className="text-lg font-medium mb-2">No results found</h4>
                      <p className="text-muted-foreground">Try different keywords or browse our categories</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Resources Section */}
          {activeTab === 'resources' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {helpResources.map((resource, index) => (
                  <div key={index} className="border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <a href={resource.link} className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-6">Popular Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="border border-border rounded-xl p-6 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start">
                        <div className="bg-primary/10 rounded-lg p-2 mr-4">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">How to optimize your product listings for better sales</h4>
                          <p className="text-sm text-muted-foreground">Learn best practices for creating compelling product pages that convert.</p>
                          <div className="flex items-center mt-3 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>5 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact Section */}
          {activeTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="border border-border rounded-xl p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                    <a 
                      href={method.link}
                      className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                    >
                      {method.title === 'Email Support' ? 'Send us an email' : 'Contact us'}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Available: {method.available}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Award className="h-4 w-4 mr-2" />
                        <span>Response time: {method.responseTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl p-6 mt-8">
                <h3 className="text-lg font-semibold mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Tell us about your issue..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Help;
