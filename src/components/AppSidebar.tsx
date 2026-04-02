import { problems } from "@/data/problems";
import { useState, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  X, ChevronDown, ChevronUp, 
  Database, Cpu, Network, Code, Brain, 
  Building2, GraduationCap, BookOpen,
  Home, BarChart3, Save, Layers,
  PieChart, Award, LogOut, FlaskConical
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import UserPerformance from './UserPerformance';

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
}

// Helper function to get unique categories with counts
const getCategoryCounts = () => {
  const counts: Record<string, number> = {};
  problems.forEach(problem => {
    const category = problem.category;
    counts[category] = (counts[category] || 0) + 1;
  });
  return counts;
};

// Helper function to get unique companies with counts
const getCompanyCounts = () => {
  const counts: Record<string, number> = {};
  problems.forEach(problem => {
    problem.company_tags.forEach(company => {
      counts[company] = (counts[company] || 0) + 1;
    });
  });
  return counts;
};

// These category names exist in the dataset and belong to the Placement section
const PLACEMENT_CATEGORY_NAMES = new Set([
  'Aptitude',
  'Logical Reasoning',
  'Technical',
  'DBMS',
  'Operating Systems',
  'Computer Networks',
  'OOP',
]);

// Dynamically generate DSA categories (excludes placement ones)
const generateCategories = () => {
  const categoryCounts = getCategoryCounts();
  const iconMap: Record<string, any> = {
    'Arrays': Database,
    'Strings': Code,
    'Linked Lists': Cpu,
    'Dynamic Programming': Brain,
    'Trees': Network,
    'Graphs': Network,
    'Binary Search': Code,
    'Stacks': Code,
    'Hashing': Database,
    'Greedy': Brain,
    'Backtracking': Brain,
    'Sliding Window': Code,
    'Heap': Database,
    'Queues': Code,
    'Two Pointers': Code,
    'Bit Manipulation': Code,
    'Patterns': Code,
    'Numbers': Database,
    'DSA': Code,
  };
  
  return Object.entries(categoryCounts)
    .filter(([name]) => !PLACEMENT_CATEGORY_NAMES.has(name))
    .map(([name, count]) => ({
      name,
      count,
      icon: iconMap[name] || Code
    }))
    .sort((a, b) => b.count - a.count);
};

// Dynamically generate placement categories from the actual dataset
const generatePlacementCategories = () => {
  const categoryCounts = getCategoryCounts();
  const iconMap: Record<string, any> = {
    'Aptitude': Brain,
    'Logical Reasoning': Brain,
    'Technical': Code,
    'DBMS': Database,
    'Operating Systems': Cpu,
    'Computer Networks': Network,
    'OOP': Code,
  };

  return Object.entries(categoryCounts)
    .filter(([name]) => PLACEMENT_CATEGORY_NAMES.has(name))
    .map(([name, count]) => ({
      name,
      count,
      icon: iconMap[name] || Code
    }))
    .sort((a, b) => b.count - a.count);
};

// Free mock test links for popular companies
const mockTests = [
  { name: 'TCS NQT',      url: 'https://www.indiabix.com/online-test/tcs-placement-papers/' },
  { name: 'Infosys',      url: 'https://www.indiabix.com/online-test/infosys-placement-papers/' },
  { name: 'Wipro',        url: 'https://www.indiabix.com/online-test/wipro-placement-papers/' },
  { name: 'Accenture',    url: 'https://www.indiabix.com/online-test/accenture-placement-papers/' },
  { name: 'Cognizant',    url: 'https://www.indiabix.com/online-test/cognizant-placement-papers/' },
  { name: 'Amazon',       url: 'https://www.hackerrank.com/domains/algorithms' },
  { name: 'Microsoft',    url: 'https://www.hackerrank.com/microsoft-codesprint' },
  { name: 'Google',       url: 'https://foobar.withgoogle.com/' },
];

export default function AppSidebar({ open, onClose }: AppSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ added
  const { user, signOut } = useAuth();
  const [dsaOpen, setDsaOpen] = useState(true);
  const [placementOpen, setPlacementOpen] = useState(true);
  const [companyOpen, setCompanyOpen] = useState(true);
  const [mockOpen, setMockOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPlacement, setSelectedPlacement] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [showPerformance, setShowPerformance] = useState(true);

  // Dynamically generate categories and companies
  const categories = useMemo(() => generateCategories(), []);
  const placementCategories = useMemo(() => generatePlacementCategories(), []);
  const companies = useMemo(() => {
    const companyCounts = getCompanyCounts();
    const iconMap: Record<string, any> = {
      'Google': Building2,
      'Amazon': Building2,
      'Microsoft': Building2,
      'Meta': Building2,
      'Apple': Building2,
      'Netflix': Building2,
      'Uber': Building2,
      'Flipkart': Building2,
      'Oracle': Building2,
      'SAP': Building2,
      'Adobe': Building2,
      'Goldman Sachs': Building2,
      'Morgan Stanley': Building2,
      'Walmart': Building2,
      'Intuit': Building2,
    };
    
    return Object.entries(companyCounts)
      .map(([name, count]) => ({
        name,
        count,
        icon: iconMap[name] || Building2
      }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const navItems = [
    { path: '/problems', icon: Layers, label: 'Problems' },
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/saved', icon: Save, label: 'Saved Codes' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // ✅ All three handlers now use navigate() instead of window.location.href
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    navigate(`/problems?category=${encodeURIComponent(category)}`);
    onClose();
  };

  // ✅ Placement navigates using ?category= since placement names ARE real categories in the dataset
  const handlePlacementClick = (category: string) => {
    setSelectedPlacement(category === selectedPlacement ? null : category);
    navigate(`/problems?category=${encodeURIComponent(category)}`);
    onClose();
  };

  const handleCompanyClick = (company: string) => {
    setSelectedCompany(company === selectedCompany ? null : company);
    navigate(`/problems?company=${encodeURIComponent(company)}`);
    onClose();
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
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
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">
                      {cat.count}
                    </span>
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

          {/* Free Mock Tests Section */}
          <div className="border border-border rounded-lg">
            <button
              onClick={() => setMockOpen(!mockOpen)}
              className="w-full flex items-center justify-between p-3 bg-surface-hover rounded-t-lg"
            >
              <div className="flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">Free Mock Tests</span>
              </div>
              {mockOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {mockOpen && (
              <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                {mockTests.map((test) => (
                  <a
                    key={test.name}
                    href={test.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-2 py-2 rounded-md text-sm text-foreground hover:bg-surface-hover transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <FlaskConical className="h-4 w-4 text-primary" />
                      <span>{test.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>
      </aside>
    </>
  );
}