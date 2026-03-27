import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Building2, Search } from "lucide-react";
import { problems, getCompanies } from "@/data/problems";

export default function CompanyQuestions() {
  const [search, setSearch] = useState("");
  const companies = getCompanies();

  const filtered = useMemo(() => {
    if (!search) return companies;
    return companies.filter((c) => c.toLowerCase().includes(search.toLowerCase()));
  }, [search, companies]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Building2 className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-semibold text-foreground">Company Questions</h1>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-surface border border-border rounded-md pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {filtered.map((company) => {
          const count = problems.filter((p) => p.company_tags.includes(company)).length;
          return (
            <Link
              key={company}
              to={`/problems?company=${encodeURIComponent(company)}`}
              className="bg-card border border-border rounded-md p-4 hover:bg-surface-hover transition-colors"
            >
              <div className="text-foreground font-medium">{company}</div>
              <div className="text-sm text-muted-foreground">{count} problems</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
