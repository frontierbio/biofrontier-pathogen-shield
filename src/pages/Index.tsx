import { Link } from "react-router-dom";
import { Shield, ChevronRight, Droplets, Users, Award, Leaf, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import SEOHead from "../components/SEOHead";
import heroBg from "../assets/hero-bg.jpg";

const stats = [
  { value: "99%", label: "Pathogen Efficacy", icon: Award },
  { value: "0%", label: "Toxic Chemicals", icon: Leaf },
  { value: "30%", label: "Downtime Reduction", icon: ChevronRight },
  { value: "100+", label: "Farms Protected", icon: Shield },
];

const partners = [
  { name: "Richbay Chemicals", desc: "Disinfectants" },
  { name: "Purific", desc: "Water Purification" },
  { name: "AgriDisinfect", desc: "Agri-Tech" },
  { name: "Infinico Solutions", desc: "Labour & PPE" },
];

const benefits = [
  "Fast brand building under one trusted name",
  "Easy expansion into new biosecurity categories",
  "Strong consulting-style positioning",
  "Unified experience across products & services",
];

export default function HomePage() {
  return (
    <>
      <SEOHead type="home" title="BioFrontier: Non-Toxic Biosecurity Solutions for Farms & Poultry in South Africa" description="Pioneering non-toxic, high-efficacy biosecurity solutions for South African farms, poultry, and food processing. Products, compliance support, and PPE from KwaZulu-Natal." />
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="South African farmland with biosecurity protection overlay"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-hero opacity-85" />
        </div>

        <div className="container mx-auto relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 text-secondary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Farm to Fork Biosecurity
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Biosecurity Risk{" "}
              <span className="text-secondary">Management</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-8 leading-relaxed">
              Pioneering non-toxic biosecurity: collective solutions from farm to fork. 
              Protecting South African agriculture with high-efficacy, environmentally safe products and compliance support.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-secondary text-secondary-foreground font-semibold hover:bg-bio-emerald-dark transition-colors"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-primary-foreground/20 text-primary-foreground font-semibold hover:border-secondary hover:text-secondary transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-lg bg-gradient-card shadow-bio">
                  <s.icon className="h-6 w-6 text-secondary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">
                    {s.value}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why BioFrontier */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                One Brand. Complete <span className="text-secondary">Biosecurity.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                BioFrontier unifies products, services, and expertise under a single trusted name — 
                delivering faster brand recognition and seamless expansion across the biosecurity chain.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                {benefits.map(b => (
                  <div key={b} className="flex items-start gap-3 p-4 rounded-lg bg-background shadow-bio">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Droplets, title: "Biosecurity Products", desc: "Non-toxic disinfectants & sanitisers" },
                  { icon: Shield, title: "Compliance Support", desc: "Auditing & export readiness" },
                  { icon: Users, title: "Workforce Solutions", desc: "PPE, labour & workforce placement" },
                  { icon: Leaf, title: "Agri-Tech", desc: "Farm-specific biosecurity technology" },
                ].map(c => (
                  <div key={c.title} className="p-5 rounded-lg bg-background shadow-bio text-center">
                    <c.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                    <h3 className="text-sm font-bold text-foreground mb-1">{c.title}</h3>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-foreground mb-3">
                Our <span className="text-secondary">Collective</span> Partners
              </h2>
              <p className="text-muted-foreground text-sm">
                Unified under BioFrontier for seamless biosecurity delivery.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.1}>
                <div className="p-6 rounded-lg bg-gradient-card shadow-bio text-center hover:shadow-bio-elevated transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                  <p className="text-[10px] text-secondary mt-2 font-medium">by BioFrontier</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
              Ready to Protect Your Operation?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Get a tailored biosecurity solution for your farm, processing plant, or poultry operation. 
              Non-toxic, high-efficacy, and locally supported.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-secondary text-secondary-foreground font-bold text-lg hover:bg-bio-emerald-dark transition-colors"
            >
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
