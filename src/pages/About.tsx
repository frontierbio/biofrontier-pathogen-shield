import { Shield, Users, Leaf, Target, AlertTriangle } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const partners = [
  { name: "Richbay Chemicals", role: "Disinfectant formulation & supply", icon: Shield },
  { name: "Purific", role: "Water purification systems", icon: Shield },
  { name: "AgriDisinfect", role: "Agricultural disinfection technology", icon: Shield },
  { name: "Infinico Solutions", role: "Labour, PPE & workforce placement", icon: Users },
];

const mitigations = [
  { risk: "Brand dilution across categories", mitigation: "Clear category separation with distinct product line naming (e.g., BioFrontier Biosecurity Products vs BioFrontier PPE Solutions)." },
  { risk: "Third-party referral confusion", mitigation: "All referral services carry 'endorsed by BioFrontier' disclaimers with transparent partner attribution." },
  { risk: "Scaling complexity", mitigation: "Monolithic today, with a clear roadmap to hybrid architecture as product lines mature." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
                Farm Biosecurity Experts in <span className="text-secondary">KZN</span>
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">
                Born in the KwaZulu-Natal Midlands, BioFrontier was founded to address a critical gap: 
                accessible, non-toxic, high-efficacy biosecurity for South African agriculture. We unite 
                products, services, and expertise under one brand to protect the entire food chain.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "Deliver non-toxic, scientifically validated biosecurity solutions that protect agricultural operations while preserving environmental integrity." },
              { icon: Leaf, title: "Sustainability", desc: "Every product and process is evaluated for environmental impact. We prioritise zero-toxin formulations and low-carbon operational practices." },
              { icon: Shield, title: "KZN Roots", desc: "Deep connections with KZN's dairy, poultry, sugarcane, and livestock networks. Local expertise with national ambition." },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="p-8 rounded-lg bg-gradient-card shadow-bio h-full">
                  <c.icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Architecture */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
              Brand <span className="text-secondary">Architecture</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto">
              {/* Tree diagram */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                  <Shield className="h-5 w-5 text-secondary" />
                  BioFrontier (Master Brand)
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <div className="w-px h-8 bg-secondary" />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-lg bg-background shadow-bio border-l-4 border-secondary">
                  <h4 className="font-bold text-sm text-foreground mb-2">Core Product Lines</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• BioFrontier Biosecurity Products</li>
                    <li>• BioFrontier Sanitation & Water</li>
                    <li>• BioFrontier Industrial Cleaning</li>
                    <li>• BioFrontier Application Equipment</li>
                    <li>• BioFrontier PPE Solutions</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-background shadow-bio border-l-4 border-bio-gray">
                  <h4 className="font-bold text-sm text-foreground mb-2">Support Services</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• BioFrontier Compliance Auditing</li>
                    <li>• BioFrontier Workforce Placement</li>
                    <li>• BioFrontier Export Readiness</li>
                    <li className="text-[10px] italic">(endorsed where hybrid needed)</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
              Our <span className="text-secondary">Partners</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.1}>
                <div className="p-6 rounded-lg bg-gradient-card shadow-bio text-center h-full">
                  <p.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.role}</p>
                  <p className="text-[10px] text-secondary mt-2 font-medium">endorsed by BioFrontier</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mitigations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-foreground text-center mb-8">
              Transparency & <span className="text-secondary">Governance</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {mitigations.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-5 rounded-lg bg-background shadow-bio">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-bio-gray shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-foreground mb-1">{m.risk}</p>
                      <p className="text-xs text-muted-foreground">{m.mitigation}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
