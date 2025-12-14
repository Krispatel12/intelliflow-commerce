import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { motion } from "framer-motion";
import { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Lock, 
  Bell, 
  CreditCard, 
  Users as TeamIcon, 
  Database, 
  Zap, 
  Mail, 
  Globe, 
  Check, 
  X, 
  Plus, 
  Trash2,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  MoreVertical
} from 'lucide-react';

const settingsSections = [
  {
    id: 'profile',
    title: 'Profile',
    icon: User,
    description: 'Update your personal information and avatar',
  },
  {
    id: 'security',
    title: 'Security',
    icon: Lock,
    description: 'Manage password and two-factor authentication',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    description: 'Configure email and in-app notifications',
  },
  {
    id: 'billing',
    title: 'Billing & Plans',
    icon: CreditCard,
    description: 'Manage subscription and payment methods',
  },
  {
    id: 'team',
    title: 'Team',
    icon: TeamIcon,
    description: 'Manage team members and permissions',
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: Zap,
    description: 'Connect third-party apps and services',
  },
  {
    id: 'email',
    title: 'Email Settings',
    icon: Mail,
    description: 'Configure email templates and delivery',
  },
  {
    id: 'general',
    title: 'General',
    icon: SettingsIcon,
    description: 'General application settings',
  },
];

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'Owner',
    avatar: 'AJ',
    status: 'active',
    lastActive: '2h ago',
  },
  {
    id: 2,
    name: 'Sarah Miller',
    email: 'sarah@example.com',
    role: 'Admin',
    avatar: 'SM',
    status: 'active',
    lastActive: '1h ago',
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael@example.com',
    role: 'Member',
    avatar: 'MC',
    status: 'pending',
    lastActive: 'Invitation sent',
  },
];

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    company: 'IntelliFlow Inc.',
    timezone: 'America/New_York',
    language: 'English (US)',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Profile Information</h3>
                <p className="text-sm text-muted-foreground">Update your account's profile information and email address.</p>
              </div>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-muted/50"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                    {formData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {isEditing && (
                    <button className="mt-2 text-sm text-primary hover:underline">
                      Change photo
                    </button>
                  )}
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      ) : (
                        <div className="px-3 py-2 bg-muted/50 rounded-md">{formData.name}</div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      ) : (
                        <div className="px-3 py-2 bg-muted/50 rounded-md">{formData.email}</div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Company</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      ) : (
                        <div className="px-3 py-2 bg-muted/50 rounded-md">{formData.company}</div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Timezone</label>
                      {isEditing ? (
                        <select
                          name="timezone"
                          value={formData.timezone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          <option value="America/New_York">Eastern Time (ET)</option>
                          <option value="America/Chicago">Central Time (CT)</option>
                          <option value="America/Denver">Mountain Time (MT)</option>
                          <option value="America/Los_Angeles">Pacific Time (PT)</option>
                        </select>
                      ) : (
                        <div className="px-3 py-2 bg-muted/50 rounded-md">
                          {formData.timezone.replace('_', ' ').replace('/', ' / ')}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="flex justify-end pt-4 border-t border-border">
                  <button
                    onClick={() => {
                      // Save changes logic here
                      setIsEditing(false);
                    }}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium">Security</h3>
              <p className="text-sm text-muted-foreground">Update your password and enable two-factor authentication.</p>
            </div>

            <div className="space-y-6">
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">Password</h4>
                      <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                    </div>
                    <button className="text-sm font-medium text-primary hover:underline">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                          Recommended
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-muted/50">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">Active Sessions</h4>
                      <p className="text-sm text-muted-foreground">Manage and log out of active sessions on other browsers and devices.</p>
                    </div>
                    <button className="text-sm font-medium text-primary hover:underline">
                      View Sessions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Team Members</h3>
                <p className="text-sm text-muted-foreground">Manage who has access to this account</p>
              </div>
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Member
              </button>
            </div>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-muted/50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Last Active</th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-card divide-y divide-border">
                    {teamMembers.map((member) => (
                      <tr key={member.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                              {member.avatar}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium">{member.name}</div>
                              <div className="text-sm text-muted-foreground">{member.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {member.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {member.status === 'active' ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Pending
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                          {member.lastActive}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-muted-foreground hover:text-foreground">
                            <MoreVertical className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      // Add cases for other settings sections
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <SettingsIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">{settingsSections.find(s => s.id === activeSection)?.title} Settings</h3>
              <p className="text-muted-foreground mt-1">This section is under development</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="ml-[240px] transition-all duration-300">
        <DashboardHeader 
          title="Settings" 
          subtitle="Manage your account and preferences"
        />
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3">
              <nav className="space-y-1">
                {settingsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    <section.icon className="h-5 w-5 mr-3" />
                    <span>{section.title}</span>
                    {activeSection === section.id && (
                      <ChevronDown className="ml-auto h-4 w-4 transform rotate-90" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="bg-card border border-border rounded-xl p-6">
                {renderSectionContent()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
