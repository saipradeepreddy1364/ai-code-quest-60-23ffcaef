import { problems } from "@/data/problems";
import { useState, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  X, ChevronDown, ChevronUp, 
  Database, Cpu, Network, Code, Brain, 
  Building2, GraduationCap, BookOpen,
  BarChart3, Save, Layers,
  PieChart, LogOut, FlaskConical,
  Grid3x3, Terminal, Hash, Binary, 
  Square, Triangle, Circle, Sparkles
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

// Category mapping for icons and colors
const getCategoryStyle = (category: string) => {
  const styles: Record<string, { icon: any, color: string, bgColor: string }> = {
    'Arrays': { icon: Database, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    'Strings': { icon: Code, color: 'text-green-600', bgColor: 'bg-green-100' },
    'Linked Lists': { icon: Cpu, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    'Dynamic Programming': { icon: Brain, color: 'text-red-600', bgColor: 'bg-red-100' },
    'Trees': { icon: Network, color: 'text-emerald-600', bgColor: 'bg-emerald-100' },
    'Graphs': { icon: Network, color: 'text-teal-600', bgColor: 'bg-teal-100' },
    'Binary Search': { icon: Binary, color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
    'Stacks': { icon: Square, color: 'text-amber-600', bgColor: 'bg-amber-100' },
    'Hashing': { icon: Hash, color: 'text-rose-600', bgColor: 'bg-rose-100' },
    'Greedy': { icon: Sparkles, color: 'text-cyan-600', bgColor: 'bg-cyan-100' },
    'Backtracking': { icon: Terminal, color: 'text-orange-600', bgColor: 'bg-orange-100' },
    'Sliding Window': { icon: Grid3x3, color: 'text-sky-600', bgColor: 'bg-sky-100' },
    'Heap': { icon: Database, color: 'text-lime-600', bgColor: 'bg-lime-100' },
    'Queues': { icon: Square, color: 'text-fuchsia-600', bgColor: 'bg-fuchsia-100' },
    'Two Pointers': { icon: Grid3x3, color: 'text-violet-600', bgColor: 'bg-violet-100' },
    'Bit Manipulation': { icon: Binary, color: 'text-gray-600', bgColor: 'bg-gray-100' },
    'Patterns': { icon: Triangle, color: 'text-pink-600', bgColor: 'bg-pink-100' },
    'Numbers': { icon: Hash, color: 'text-slate-600', bgColor: 'bg-slate-100' },
    'DSA': { icon: Code, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    'Aptitude': { icon: Brain, color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
    'Logical Reasoning': { icon: Sparkles, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    'Technical': { icon: Terminal, color: 'text-green-600', bgColor: 'bg-green-100' },
    'DBMS': { icon: Database, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    'Operating Systems': { icon: Cpu, color: 'text-red-600', bgColor: 'bg-red-100' },
    'Computer Networks': { icon: Network, color: 'text-teal-600', bgColor: 'bg-teal-100' },
    'OOP': { icon: Code, color: 'text-amber-600', bgColor: 'bg-amber-100' },
  };
  
  return styles[category] || { icon: Code, color: 'text-gray-600', bgColor: 'bg-gray-100' };
};

// Define section categories
const DSA_CATEGORIES = [
  'Arrays', 'Strings', 'Linked Lists', 'Dynamic Programming', 'Trees', 'Graphs',
  'Binary Search', 'Stacks', 'Hashing', 'Greedy', 'Backtracking', 'Sliding Window',
  'Heap', 'Queues', 'Two Pointers', 'Bit Manipulation', 'Patterns', 'Numbers'
];

const PLACEMENT_CATEGORIES = [
  'Aptitude', 'Logical Reasoning', 'Technical', 'DBMS', 'Operating Systems', 
  'Computer Networks', 'OOP'
];

// Free mock test links
const mockTests = [
  { name: 'TCS NQT', url: 'https://www.indiabix.com/online-test/tcs-placement-papers/' },
  { name: 'Infosys', url: 'https://www.indiabix.com/online-test/infosys-placement-papers/' },
  { name: 'Wipro', url: 'https://www.indiabix.com/online-test/wipro-placement-papers/' },
  { name: 'Accenture', url: 'https://www.indiabix.com/online-test/accenture-placement-papers/' },
  { name: 'Cognizant', url: 'https://www.indiabix.com/online-test/cognizant-placement-papers/' },
  { name: 'Amazon', url: 'https://www.hackerrank.com/domains/algorithms' },
  { name: 'Microsoft', url: 'https://www.hackerrank.com/microsoft-codesprint' },
  { name: 'Google', url: 'https://foobar.withgoogle.com/' },
];

export default function AppSidebar({ open, onClose }: AppSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [dsaOpen, setDsaOpen] = useState(true);
  const [placementOpen, setPlacementOpen] = useState(true);
  const [companyOpen, setCompanyOpen] = useState(true);
  const [mockOpen, setMockOpen] = useState(true);
  const [showPerformance, setShowPerformance] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const categoryCounts = useMemo(() => getCategoryCounts(), []);
  const companies = useMemo(() => {
    const companyCounts = getCompanyCounts();
    return Object.entries(companyCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15);
  }, []);

  const navItems = [
    { path: '/problems', icon: Layers, label: 'Problems' },
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/saved', icon: Save, label: 'Saved Codes' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
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

  // All categories merged for the grid (DSA + Placement + any extras from data)
  const allSections = [
    { label: 'Data Structures & Algorithms', icon: BookOpen, cats: DSA_CATEGORIES },
    { label: 'Placement Preparation',        icon: GraduationCap, cats: PLACEMENT_CATEGORIES },
  ];

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />
      )}

      {/* Full-screen overlay panel (slides in from left) */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-3xl bg-card border-r border-border z-50 overflow-y-auto transform transition-transform duration-200 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card z-10">
          <Link to="/" className="text-xl font-bold text-foreground" onClick={onClose}>
            CodeQuest
          </Link>
          <button onClick={onClose} className="p-2 hover:bg-surface-hover rounded-md transition-colors">
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* ── User Info ── */}
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

        {/* ── Main Navigation ── */}
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

        <div className="p-4 space-y-6">

          {/* ── Performance Stats ── */}
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

          {/* ── Category Grid sections (DSA + Placement) ── */}
          {allSections.map(({ label, icon: SectionIcon, cats }) => {
            const visible = cats.filter(c => (categoryCounts[c] ?? 0) > 0);
            if (visible.length === 0) return null;
            return (
              <div key={label} className="border border-border rounded-lg">
                <div className="flex items-center gap-2 p-3 bg-surface-hover rounded-t-lg">
                  <SectionIcon className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">{label}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{visible.length} topics</span>
                </div>
                <div className="p-3 grid grid-cols-3 gap-2">
                  {visible.map((category) => {
                    const { icon: Icon, color, bgColor } = getCategoryStyle(category);
                    const count = categoryCounts[category] || 0;
                    const isSelected = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-all text-center ${
                          isSelected
                            ? 'bg-primary text-primary-foreground'
                            : `${bgColor} hover:opacity-80`
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${isSelected ? 'text-primary-foreground' : color}`} />
                        <span className={`text-[10px] font-semibold leading-tight ${isSelected ? 'text-primary-foreground' : 'text-gray-700'}`}>
                          {category}
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-white text-gray-600'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* ── Company-wise ── */}
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
              <div className="p-3">
                <div className="grid grid-cols-3 gap-2">
                  {companies.map((company) => (
                    <button
                      key={company.name}
                      onClick={() => handleCompanyClick(company.name)}
                      className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-all text-center ${
                        selectedCompany === company.name
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      <Building2 className={`h-4 w-4 ${selectedCompany === company.name ? 'text-primary-foreground' : 'text-gray-500'}`} />
                      <span className="text-[10px] font-semibold leading-tight text-gray-700 truncate w-full text-center">
                        {company.name}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                        selectedCompany === company.name ? 'bg-white/20 text-white' : 'bg-white text-gray-600'
                      }`}>
                        {company.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Free Mock Tests ── */}
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
              <div className="p-2 space-y-1">
                {mockTests.map((test) => (
                  <a
                    key={test.name}
                    href={test.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm text-foreground hover:bg-surface-hover transition-colors"
                  >
                    <span>{test.name}</span>
                    <span className="text-xs text-muted-foreground">↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}