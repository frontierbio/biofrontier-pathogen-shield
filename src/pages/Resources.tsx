import { Download, PlayCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const downloads = [
  { title: "Farm Biosecurity Plan Template", type: "PDF", desc: "Step-by-step template for creating a comprehensive biosecurity plan for your farm operation." },
  { title: "Poultry House Disinfection SOP", type: "PDF", desc: "Standard operating procedure for poultry house cleaning and disinfection between flocks." },
  { title: "Water Quality Testing Checklist", type: "PDF", desc: "Weekly and monthly water quality testing checklist for livestock operations." },
  { title: "PPE Selection Guide", type: "PDF", desc: "Guide to selecting appropriate PPE for different biosecurity scenarios on farm." },
  { title: "Export Compliance Checklist – EU Markets", type: "PDF", desc: "Checklist covering biosecurity requirements for South African agricultural exports to EU." },
  { title: "FMD Prevention Protocol", type: "PDF", desc: "Best practice protocol for foot-and-mouth disease prevention in cattle and small stock." },
];

const webinars = [
  { title: "Introduction to Non-Toxic Biosecurity", duration: "45 min", desc: "Overview of BioFrontier's approach to chemical-free pathogen prevention." },
  { title: "Post-FMD Recovery: Rebuilding Your Biosecurity", duration: "60 min", desc: "Lessons from the 2024 KZN FMD outbreak and how to build resilient systems." },
  { title: "Export Readiness Masterclass", duration: "90 min", desc: "Complete guide to achieving biosecurity compliance for international markets." },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-20 bg-hero">
        <div className="container mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Farm Biosecurity Checklist & <span className="text-secondary">Resources</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl">
              Download biosecurity plan templates, SOPs, checklists, and watch expert webinars.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-foreground mb-8">
              Downloadable <span className="text-secondary">Resources</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.05}>
                <div className="rounded-lg bg-gradient-card shadow-bio p-6 h-full flex flex-col">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-2">{d.type}</span>
                  <h3 className="font-bold text-foreground text-sm mb-2">{d.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{d.desc}</p>
                  <button className="mt-4 flex items-center gap-2 px-4 py-2.5 rounded-md border border-border text-xs font-medium text-foreground hover:border-secondary hover:text-secondary transition-colors">
                    <Download className="h-3.5 w-3.5" /> Download
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-foreground mb-8">
              Webinars & <span className="text-secondary">Training</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {webinars.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 0.1}>
                <div className="rounded-lg bg-background shadow-bio overflow-hidden h-full flex flex-col">
                  <div className="aspect-video bg-primary flex items-center justify-center">
                    <PlayCircle className="h-12 w-12 text-secondary/60" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-[10px] text-muted-foreground mb-1">{w.duration}</span>
                    <h3 className="font-bold text-foreground text-sm mb-2">{w.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{w.desc}</p>
                    <button className="mt-4 text-xs font-semibold text-secondary flex items-center gap-1">
                      Watch Now <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Start Monolithic, <span className="text-secondary">Evolve to Hybrid</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              BioFrontier's brand architecture is designed for growth. Begin with a unified brand, 
              and as product lines mature, evolve into a hybrid model with endorsed sub-brands — 
              all while maintaining the trust and recognition of the master brand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold hover:bg-bio-emerald-dark transition-colors"
            >
              Discuss Your Growth Strategy <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
