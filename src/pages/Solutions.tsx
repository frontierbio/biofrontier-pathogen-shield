import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Droplets, HardHat, Wrench, ClipboardCheck, ChevronDown, ArrowRight, Egg } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const solutions = [
  {
    id: "biosecurity",
    icon: Shield,
    title: "BioFrontier Biosecurity Products",
    desc: "Flagship non-toxic disinfectants and sanitisers formulated for agricultural and food processing environments. 99% efficacy against key pathogens including FMD, Avian Influenza, and Salmonella.",
    features: ["Broad-spectrum pathogen control", "Zero toxic residue", "SABS-compliant formulations", "Suitable for organic certification"],
  },
  {
    id: "water",
    icon: Droplets,
    title: "BioFrontier Sanitation & Water Solutions",
    desc: "Complete water purification and sanitation systems for farm and processing environments. Powered by Purific technology, delivered under the BioFrontier standard.",
    features: ["On-site water treatment", "Effluent management", "Potable water systems", "Process water recycling"],
  },
  {
    id: "ppe",
    icon: HardHat,
    title: "BioFrontier PPE Solutions",
    desc: "Comprehensive personal protective equipment sourced and quality-controlled through our Infinico Solutions partnership. From biosecurity suits to respiratory protection.",
    features: ["Biosecurity-grade PPE", "Custom farm kits", "Bulk supply contracts", "Compliance-ready packaging"],
  },
  {
    id: "equipment",
    icon: Wrench,
    title: "BioFrontier Application Equipment",
    desc: "Professional-grade sprayers, foggers, and dosing systems engineered for optimal disinfectant application across farm and industrial settings.",
    features: ["Knapsack & vehicle sprayers", "Thermal foggers", "Automated dosing", "Maintenance & servicing"],
  },
  {
    id: "compliance",
    icon: ClipboardCheck,
    title: "BioFrontier Compliance & Workforce Support",
    desc: "Expert auditing, HR/IR consulting, and workforce placement services endorsed by BioFrontier. Helping operations achieve and maintain export-readiness.",
    features: ["Biosecurity audits & SOPs", "Export compliance readiness", "Workforce placement", "HR/IR consulting"],
  },
  {
    id: "poultry",
    icon: Egg,
    title: "Poultry Biosecurity Solutions",
    desc: "Specialised packages for broiler, layer, and breeder operations. From hatchery hygiene to abattoir compliance — purpose-built for South African poultry.",
    features: ["Hatchery disinfection protocols", "Layer house biosecurity", "Abattoir compliance systems", "HPAI prevention programs"],
  },
];

export default function SolutionsPage() {
  const [open, setOpen] = useState<string | null>("biosecurity");
  const [bundler, setBundler] = useState({ farmSize: "", type: "", needs: [] as string[] });

  const toggleNeed = (n: string) => {
    setBundler(b => ({
      ...b,
      needs: b.needs.includes(n) ? b.needs.filter(x => x !== n) : [...b.needs, n],
    }));
  };

  return (
    <>
      <section className="py-20 bg-hero">
        <div className="container mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Biosecurity Measures for Farms & <span className="text-secondary">Food Processing</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl">
              Comprehensive, non-toxic solutions covering the full biosecurity chain — products, equipment, PPE, water, and compliance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Accordion Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-3">
            {solutions.map(s => (
              <ScrollReveal key={s.id}>
                <div className="rounded-lg bg-gradient-card shadow-bio overflow-hidden">
                  <button
                    onClick={() => setOpen(open === s.id ? null : s.id)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <s.icon className="h-6 w-6 text-secondary shrink-0" />
                    <span className="flex-1 font-bold text-foreground">{s.title}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open === s.id ? "rotate-180" : ""}`} />
                  </button>
                  {open === s.id && (
                    <div className="px-5 pb-5 border-t border-border">
                      <p className="text-sm text-muted-foreground mt-4 mb-4 leading-relaxed">{s.desc}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {s.features.map(f => (
                          <div key={f} className="flex items-center gap-2 text-xs text-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Bundler */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-foreground text-center mb-3">
              Solution <span className="text-secondary">Bundler</span>
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-8">
              Select your needs and get a custom package recommendation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="p-8 rounded-lg bg-background shadow-bio">
              <div className="mb-6">
                <label className="text-sm font-semibold text-foreground block mb-2">Farm/Operation Size</label>
                <select
                  value={bundler.farmSize}
                  onChange={e => setBundler(b => ({ ...b, farmSize: e.target.value }))}
                  className="w-full p-3 rounded-md border border-border bg-background text-foreground text-sm"
                >
                  <option value="">Select size...</option>
                  <option value="small">Small (1–50 hectares)</option>
                  <option value="medium">Medium (50–500 hectares)</option>
                  <option value="large">Large (500+ hectares)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="text-sm font-semibold text-foreground block mb-2">Operation Type</label>
                <select
                  value={bundler.type}
                  onChange={e => setBundler(b => ({ ...b, type: e.target.value }))}
                  className="w-full p-3 rounded-md border border-border bg-background text-foreground text-sm"
                >
                  <option value="">Select type...</option>
                  <option value="poultry">Poultry</option>
                  <option value="dairy">Dairy</option>
                  <option value="livestock">Livestock</option>
                  <option value="crops">Crops / Sugarcane</option>
                  <option value="processing">Food Processing</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="text-sm font-semibold text-foreground block mb-2">What do you need?</label>
                <div className="flex flex-wrap gap-2">
                  {["Disinfectants", "Water Purification", "PPE", "Equipment", "Compliance Audit", "Workforce"].map(n => (
                    <button
                      key={n}
                      onClick={() => toggleNeed(n)}
                      className={`px-4 py-2 rounded-md text-xs font-medium border transition-colors ${
                        bundler.needs.includes(n)
                          ? "bg-secondary text-secondary-foreground border-secondary"
                          : "border-border text-muted-foreground hover:border-secondary"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold hover:bg-bio-emerald-dark transition-colors"
              >
                Get Custom Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
