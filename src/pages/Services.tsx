import { Link } from "react-router-dom";
import {
  Shield,
  Droplets,
  HardHat,
  Wrench,
  ClipboardCheck,
  Egg,
  Microscope,
  Truck,
  HeartPulse,
  Factory,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import SEOHead from "../components/SEOHead";

const serviceCategories = [
  {
    icon: Shield,
    title: "Biosecurity Products",
    subtitle: "Disinfection & Sanitisation",
    desc: "SABS-compliant, non-toxic disinfectants and sanitisers with 99% efficacy against FMD, Avian Influenza, Salmonella, and other critical pathogens. Formulated for agricultural and food processing environments.",
    capabilities: [
      "Broad-spectrum pathogen control",
      "Zero toxic residue formulations",
      "Organic certification compatible",
      "Custom dilution protocols",
    ],
    sectors: ["Poultry", "Dairy", "Livestock", "Food Processing"],
  },
  {
    icon: Droplets,
    title: "Water & Sanitation",
    subtitle: "Purification & Treatment Systems",
    desc: "End-to-end water purification and sanitation infrastructure for farm and processing environments. Powered by Purific technology, engineered for South African conditions.",
    capabilities: [
      "On-site water treatment plants",
      "Effluent management systems",
      "Potable water compliance",
      "Process water recycling",
    ],
    sectors: ["Agriculture", "Industrial", "Municipal"],
  },
  {
    icon: HardHat,
    title: "PPE & Safety",
    subtitle: "Personal Protective Equipment",
    desc: "Quality-controlled PPE sourced through our Infinico Solutions partnership. From biosecurity suits to respiratory protection — compliance-ready and bulk-supplied.",
    capabilities: [
      "Biosecurity-grade protective gear",
      "Custom farm PPE kits",
      "Bulk supply contracts",
      "Compliance-ready packaging",
    ],
    sectors: ["Agriculture", "Healthcare", "Industrial"],
  },
  {
    icon: Wrench,
    title: "Application Equipment",
    subtitle: "Sprayers, Foggers & Dosing",
    desc: "Professional-grade application systems engineered for optimal disinfectant coverage across farm, processing, and industrial settings. Full servicing and maintenance included.",
    capabilities: [
      "Knapsack & vehicle-mounted sprayers",
      "Thermal & ULV foggers",
      "Automated dosing systems",
      "Preventive maintenance programs",
    ],
    sectors: ["Poultry", "Dairy", "Industrial"],
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Auditing",
    subtitle: "Regulatory & Export Readiness",
    desc: "Expert biosecurity auditing, SOP development, and regulatory consulting. Helping operations achieve and maintain compliance for EU, UK, and Middle Eastern export markets.",
    capabilities: [
      "Biosecurity risk assessments",
      "SOP development & training",
      "Export compliance readiness",
      "HACCP & food safety auditing",
    ],
    sectors: ["Agriculture", "Food Processing", "Export"],
  },
  {
    icon: Egg,
    title: "Poultry Biosecurity",
    subtitle: "Specialist Poultry Programs",
    desc: "Purpose-built biosecurity packages for broiler, layer, and breeder operations. From hatchery hygiene protocols to abattoir compliance — designed for South African poultry.",
    capabilities: [
      "Hatchery disinfection protocols",
      "Layer house biosecurity programs",
      "Abattoir compliance systems",
      "HPAI prevention & response",
    ],
    sectors: ["Broilers", "Layers", "Breeders", "Hatcheries"],
  },
];

const industries = [
  { icon: Egg, label: "Poultry & Livestock" },
  { icon: Factory, label: "Food Processing" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Microscope, label: "Laboratories" },
  { icon: Truck, label: "Supply Chain" },
  { icon: Droplets, label: "Water & Sanitation" },
];

const processSteps = [
  { step: "01", title: "Assess", desc: "Site evaluation and risk profiling" },
  { step: "02", title: "Design", desc: "Custom biosecurity program design" },
  { step: "03", title: "Implement", desc: "Product supply and system installation" },
  { step: "04", title: "Monitor", desc: "Ongoing compliance and optimisation" },
];

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        type="solutions"
        title="Service Offerings | BioFrontier Biosecurity & Risk Management"
        description="Integrated biosecurity, water treatment, PPE, compliance, and workforce solutions for South African agriculture, food processing, and healthcare sectors."
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-secondary/30" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full border border-secondary/20" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 text-secondary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Integrated Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Service{" "}
              <span className="text-secondary">Offerings</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
              End-to-end biosecurity, compliance, and operational support — engineered for
              South African agriculture, food processing, and healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-8">
              Industries We Serve
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.label} delay={i * 0.05}>
                <div className="flex flex-col items-center gap-2 text-center group">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                    <ind.icon className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{ind.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Comprehensive <span className="text-secondary">Capabilities</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Six integrated service lines delivering complete biosecurity coverage —
                from pathogen control to regulatory compliance.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="h-full flex flex-col bg-background rounded-lg shadow-bio hover:shadow-bio-elevated transition-all duration-300 overflow-hidden group">
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <service.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground leading-tight">{service.title}</h3>
                        <p className="text-xs text-secondary font-medium mt-0.5">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>

                  {/* Capabilities */}
                  <div className="px-6 pb-4 flex-1">
                    <div className="space-y-2">
                      {service.capabilities.map(cap => (
                        <div key={cap} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sector Tags */}
                  <div className="px-6 pb-6">
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                      {service.sectors.map(s => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-md bg-muted text-[10px] font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                How We <span className="text-secondary">Work</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A structured, science-driven methodology that ensures measurable biosecurity outcomes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1}>
                <div className="relative p-6 rounded-lg bg-gradient-card shadow-bio text-center">
                  <span className="text-4xl font-extrabold text-secondary/20 block mb-2">{p.step}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                  {i < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary/40 z-10" />
                  )}
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
              Let's Build Your Biosecurity Program
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto leading-relaxed">
              Speak with our team to design a tailored solution for your operation.
              From single-product supply to full-site biosecurity management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-secondary text-secondary-foreground font-bold hover:bg-bio-emerald-dark transition-colors"
              >
                Request a Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+27330000000"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-primary-foreground/20 text-primary-foreground font-semibold hover:border-secondary hover:text-secondary transition-colors"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
