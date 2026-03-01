import { useState } from "react";
import { Shield, Download, ShoppingCart, Search } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const categories = ["All", "Disinfectants", "Water", "PPE", "Equipment", "Cleaning"];

const products = [
  { name: "BioShield Pro 500", line: "Disinfectants", desc: "Broad-spectrum non-toxic disinfectant for poultry and dairy facilities. SABS approved.", efficacy: "99.9%", size: "5L / 25L / 210L" },
  { name: "BioShield Foamer", line: "Disinfectants", desc: "High-foam alkaline cleaner for food contact surfaces and processing equipment.", efficacy: "99.5%", size: "5L / 25L" },
  { name: "AquaPure FarmGuard", line: "Water", desc: "Point-of-use water purification system for livestock drinking water.", efficacy: "99.9%", size: "Single unit" },
  { name: "AquaPure ProcessLine", line: "Water", desc: "In-line water treatment for food processing wash-down systems.", efficacy: "99.7%", size: "Modular" },
  { name: "BioFrontier PPE Kit – Poultry", line: "PPE", desc: "Complete single-entry biosecurity PPE kit for poultry house access. Coverall, boots, gloves, mask.", efficacy: "N/A", size: "S / M / L / XL" },
  { name: "ThermoFog 400", line: "Equipment", desc: "Portable thermal fogger for disinfectant application in enclosed spaces.", efficacy: "N/A", size: "400ml capacity" },
  { name: "BioSpray Knapsack 16L", line: "Equipment", desc: "Manual knapsack sprayer optimised for farm-scale disinfection.", efficacy: "N/A", size: "16L" },
  { name: "BioClean Industrial", line: "Cleaning", desc: "Heavy-duty non-toxic degreaser for processing plant floors and drains.", efficacy: "98%", size: "5L / 25L / 210L" },
];

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter(p => {
    const matchCat = filter === "All" || p.line === filter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <section className="py-20 bg-hero">
        <div className="container mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Non-Toxic Disinfectant <span className="text-secondary">Products</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl">
              Eco-friendly farm and poultry disinfectants, water systems, PPE, and equipment — all under the BioFrontier standard.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto">
          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-4 mb-10 items-start md:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map(c => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
                      filter === c
                        ? "bg-secondary text-secondary-foreground border-secondary"
                        : "border-border text-muted-foreground hover:border-secondary"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.05}>
                <div className="rounded-lg bg-gradient-card shadow-bio overflow-hidden h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-secondary" />
                        <span className="text-[10px] font-semibold text-secondary uppercase tracking-wider">{p.line}</span>
                      </div>
                      {p.efficacy !== "N/A" && (
                        <span className="text-xs font-bold text-secondary">{p.efficacy}</span>
                      )}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{p.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                    <p className="text-xs text-muted-foreground">Sizes: {p.size}</p>
                  </div>
                  <div className="px-6 pb-6 flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-bio-emerald-dark transition-colors">
                      <ShoppingCart className="h-3.5 w-3.5" /> Add to Quote
                    </button>
                    <button className="flex items-center justify-center gap-1 px-3 py-2.5 rounded-md border border-border text-xs font-medium text-muted-foreground hover:border-secondary hover:text-secondary transition-colors">
                      <Download className="h-3.5 w-3.5" /> SDS
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No products match your filter. Try adjusting your search or category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
