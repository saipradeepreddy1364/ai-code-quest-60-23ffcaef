// src/components/AppSidebar.tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, ChevronDown, ChevronUp, 
  Database, Cpu, Network, Code, Brain, 
  Building2, GraduationCap, BookOpen,
  Home, BarChart3, Save, Layers,
  PieChart, Award, LogOut
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import UserPerformance from './UserPerformance';

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
}

// Categories data
const categories = [
  { name: 'Arrays', count: 42, icon: Database },
  { name: 'Strings', count: 37, icon: Code },
  { name: 'Linked Lists', count: 36, icon: Cpu },
  { name: 'Dynamic Programming', count: 37, icon: Brain },
  { name: 'Trees', count: 36, icon: Network },
  { name: 'Graphs', count: 35, icon: Network },
  { name: 'Binary Search', count: 35, icon: Code },
  { name: 'Stacks', count: 34, icon: Code },
  { name: 'Hashing', count: 34, icon: Database },
  { name: 'Greedy', count: 34, icon: Brain },
  { name: 'Backtracking', count: 34, icon: Brain },
  { name: 'Sliding Window', count: 34, icon: Code },
  { name: 'Heap', count: 34, icon: Database },
  { name: 'Queues', count: 34, icon: Code },
];

// Placement categories
const placementCategories = [
  { name: 'Aptitude', count: 34, icon: Brain },
  { name: 'Logical Reasoning', count: 34, icon: Brain },
  { name: 'Technical', count: 50, icon: Code },
  { name: 'DBMS', count: 34, icon: Database },
  { name: 'Operating Systems', count: 34, icon: Cpu },
  { name: 'Computer Networks', count: 34, icon: Network },
  { name: 'OOP', count: 34, icon: Code },
];

// Company questions
const companies = [
  { name: 'Google', count: 120, icon: Building2 },
  { name: 'Amazon', count: 150, icon: Building2 },
  { name: 'Microsoft', count: 100, icon: Building2 },
  { name: 'Facebook', count: 80, icon: Building2 },
  { name: 'Apple', count: 70, icon: Building2 },
  { name: 'Netflix', count: 40, icon: Building2 },
  { name: 'Uber', count: 50, icon: Building2 },
  { name: 'LinkedIn', count: 45, icon: Building2 },
  { name: 'TCS', count: 200, icon: Building2 },
  { name: 'Infosys', count: 180, icon: Building2 },
  { name: 'Wipro', count: 160, icon: Building2 },
];

export default function AppSidebar({ open, onClose }: AppSidebarProps) {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const [dsaOpen, setDsaOpen] = useState(true);
  const [placementOpen, setPlacementOpen] = useState(true);
  const [companyOpen, setCompanyOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPlacement, setSelectedPlacement] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [showPerformance, setShowPerformance] = useState(true);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/problems', icon: Layers, label: 'Problems' },
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/saved', icon: Save, label: 'Saved Codes' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    window.location.href = `/problems?category=${encodeURIComponent(category)}`;
  };

  const handlePlacementClick = (category: string) => {
    setSelectedPlacement(category === selectedPlacement ? null : category);
    window.location.href = `/problems?placement=${encodeURIComponent(category)}`;
  };

  const handleCompanyClick = (company: string) => {
    setSelectedCompany(company === selectedCompany ? null : company);
    window.location.href = `/problems?company=${encodeURIComponent(company)}`;
  };

  const handleLogout = async () => {
    await signOut();
    window.location.href = '/login';
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-card border-r border-border transform transition-transform duration-200 ease-in-out z-50 overflow-y-auto ${
          open ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card">
          <Link to="/" className="text-xl font-bold text-foreground" onClick={onClose}>
            CodeQuest
          </Link>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface-hover rounded-md transition-colors lg:hidden"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* User Info Section */}
        <div className="p-4 border-b border-border bg-surface">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium">
              {user?.email?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user?.email}</p>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-red-100 rounded-md transition-colors text-red-600"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="p-4 space-y-1 border-b border-border">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-surface-hover'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 space-y-4">
          {/* Performance Stats Section */}
          <div className="border border-border rounded-lg">
            <button
              onClick={() => setShowPerformance(!showPerformance)}
              className="w-full flex items-center justify-between p-3 bg-surface-hover rounded-t-lg"
            >
              <div className="flex items-center gap-2">
                <PieChart className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">Your Stats</span>
              </div>
              {showPerformance ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {showPerformance && (
              <div className="p-3">
                <UserPerformance />
              </div>
            )}
          </div>

          {/* DSA Problems Section */}
          <div className="border border-border rounded-lg">
            <button
              onClick={() => setDsaOpen(!dsaOpen)}
              className="w-full flex items-center justify-between p-3 bg-surface-hover rounded-t-lg"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">DSA Problems</span>
              </div>
              {dsaOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {dsaOpen && (
              <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => handleCategoryClick(cat.name)}
                    className={`w-full flex items-center justify-between p-2 rounded-md transition-colors ${
                      selectedCategory === cat.name
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-surface-hover text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <cat.icon className="h-4 w-4" />
                      <span className="text-sm">{cat.name}</span>
                    </div>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">{cat.count}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Placement Section */}
          <div className="border border-border rounded-lg">
            <button
              onClick={() => setPlacementOpen(!placementOpen)}
              className="w-full flex items-center justify-between p-3 bg-surface-hover rounded-t-lg"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">Placement</span>
              </div>
              {placementOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {placementOpen && (
              <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                {placementCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => handlePlacementClick(cat.name)}
                    className={`w-full flex items-center justify-between p-2 rounded-md transition-colors ${
                      selectedPlacement === cat.name
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-surface-hover text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <cat.icon className="h-4 w-4" />
                      <span className="text-sm">{cat.name}</span>
                    </div>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">{cat.count}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Company-wise Questions */}
          <div className="border border-border rounded-lg">
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="w-full flex items-center justify-between p-3 bg-surface-hover rounded-t-lg"
            >
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">Company-wise</span>
              </div>
              {companyOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {companyOpen && (
              <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                {companies.map((company) => (
                  <button
                    key={company.name}
                    onClick={() => handleCompanyClick(company.name)}
                    className={`w-full flex items-center justify-between p-2 rounded-md transition-colors ${
                      selectedCompany === company.name
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-surface-hover text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <company.icon className="h-4 w-4" />
                      <span className="text-sm">{company.name}</span>
                    </div>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">{company.count}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}