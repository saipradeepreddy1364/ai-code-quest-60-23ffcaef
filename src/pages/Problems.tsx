import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import { problems, getCategories, getCompanies } from "@/data/problems";

export default function Problems() {
  const [search, setSearch] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const categories = getCategories();
  const companyList = getCompanies();

  const filtered = useMemo(() => {
    return problems.filter((p) => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedDifficulty && p.difficulty !== selectedDifficulty) return false;
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedCompany && !p.company_tags.includes(selectedCompany)) return false;
      return true;
    });
  }, [search, selectedDifficulty, selectedCategory, selectedCompany]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold text-foreground mb-6">Problems</h1>

      {/* Search and filters */}
      <div className="flex gap-3 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface border border-border rounded-md pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      {showFilters && (
        <div className="flex flex-wrap gap-3 mb-4 p-4 bg-surface rounded-md border border-border">
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="bg-background border border-border rounded-md px-3 py-1.5 text-sm text-foreground"
          >
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-background border border-border rounded-md px-3 py-1.5 text-sm text-foreground"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="bg-background border border-border rounded-md px-3 py-1.5 text-sm text-foreground"
          >
            <option value="">All Companies</option>
            {companyList.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <button
            onClick={() => { setSelectedDifficulty(""); setSelectedCategory(""); setSelectedCompany(""); }}
            className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            Clear
          </button>
        </div>
      )}

      <div className="text-sm text-muted-foreground mb-4">{filtered.length} problems</div>

      {/* Problem list */}
      <div className="border border-border rounded-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-surface border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">#</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Title</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Category</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Difficulty</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Companies</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.slice(0, 50).map((p) => (
              <tr key={p.id} className="border-b border-border hover:bg-surface-hover transition-colors">
                <td className="px-4 py-3 text-sm text-muted-foreground font-mono">{p.id}</td>
                <td className="px-4 py-3">
                  <Link to={`/problem/${p.id}`} className="text-sm text-foreground hover:text-primary transition-colors">
                    {p.title}
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{p.category}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{p.difficulty}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {p.company_tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-xs px-1.5 py-0.5 bg-secondary rounded text-muted-foreground">{t}</span>
                    ))}
                    {p.company_tags.length > 2 && (
                      <span className="text-xs text-muted-foreground">+{p.company_tags.length - 2}</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Link
                    to={`/problem/${p.id}`}
                    className="text-xs px-3 py-1 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
                  >
                    Solve
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length > 50 && (
          <div className="px-4 py-3 text-sm text-muted-foreground bg-surface text-center">
            Showing 50 of {filtered.length} problems. Use filters to narrow results.
          </div>
        )}
      </div>
    </div>
  );
}
