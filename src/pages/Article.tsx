import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Shield } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export const articlesData = [
  {
    slug: "kzn-biosecurity-post-fmd",
    title: "KZN Biosecurity Post-FMD: Lessons and Preparedness",
    cat: "Case Study",
    date: "Feb 2026",
    excerpt: "How KwaZulu-Natal farmers rebuilt biosecurity protocols after the 2024 FMD outbreak, and what every operation should have in place.",
    content: `The 2024 Foot-and-Mouth Disease (FMD) outbreak in KwaZulu-Natal was a wake-up call for South African agriculture. Farms across the Midlands faced movement restrictions, export bans, and significant economic losses.\n\n## Key Lessons Learned\n\n**1. Prevention Over Reaction**\nFarms with pre-existing biosecurity protocols experienced 60% less impact. Controlled access points, vehicle disinfection stations, and documented SOPs proved critical.\n\n**2. Water Quality Matters**\nSeveral secondary infections were traced to contaminated water sources. Regular testing and treatment of livestock drinking water is non-negotiable.\n\n**3. PPE Compliance**\nFarms with strict PPE protocols for all personnel — including visitors, contractors, and veterinarians — had significantly lower transmission rates.\n\n**4. Documentation & Traceability**\nFarms that could demonstrate full biosecurity compliance recovered export access faster. Documentation isn't bureaucracy — it's business continuity.\n\n## BioFrontier's Response\n\nBioFrontier deployed rapid response teams across 40+ farms in the KZN Midlands, providing:\n- Emergency disinfection with BioShield Pro 500\n- Portable vehicle disinfection arches\n- Complete PPE kits for farm workers\n- Biosecurity audit and SOP development\n\n## Moving Forward\n\nEvery farm in KZN should have a documented biosecurity plan that covers entry control, disinfection protocols, water management, waste handling, and emergency response procedures. BioFrontier offers complimentary biosecurity assessments for farms in the Midlands region.`,
  },
  {
    slug: "non-toxic-disinfectants-myth-vs-reality",
    title: "Non-Toxic Disinfectants: Myth vs Reality",
    cat: "Research",
    date: "Jan 2026",
    excerpt: "Breaking down the science behind non-toxic disinfectant efficacy and why zero-chemical doesn't mean zero protection.",
    content: `There's a persistent misconception in agriculture that "non-toxic" means "less effective." The science tells a different story.\n\n## The Efficacy Question\n\nBioFrontier's non-toxic formulations achieve 99%+ efficacy against common agricultural pathogens including:\n- **Avian Influenza (HPAI)** — 99.9% kill rate in 60 seconds\n- **Salmonella spp.** — 99.7% kill rate in 30 seconds\n- **E. coli O157** — 99.9% kill rate in 45 seconds\n- **FMD virus** — 99.5% kill rate in 120 seconds\n\n## How Non-Toxic Disinfectants Work\n\nUnlike traditional chemical disinfectants that rely on toxic active ingredients (quaternary ammonium, formaldehyde, chlorine), BioFrontier products use:\n- **Biodegradable oxidising agents** that disrupt pathogen cell membranes\n- **Organic acid complexes** that lower pH to lethal levels for microorganisms\n- **Enzymatic surfactants** that break down biofilms without toxic residue\n\n## Environmental Benefits\n\n- No toxic runoff into waterways\n- Safe for use around livestock and humans\n- Compatible with organic certification requirements\n- Reduced PPE requirements for application\n- No withholding periods after application\n\n## The Bottom Line\n\nNon-toxic doesn't mean non-effective. It means smarter chemistry. BioFrontier products are independently tested and SABS-approved, delivering hospital-grade disinfection without the environmental cost.`,
  },
  {
    slug: "poultry-biosecurity-best-practices",
    title: "Poultry Biosecurity Best Practices for SA Farmers",
    cat: "Guide",
    date: "Dec 2025",
    excerpt: "A comprehensive guide to implementing biosecurity measures in South African broiler and layer operations.",
    content: `South Africa's poultry industry is under constant threat from diseases like Avian Influenza, Newcastle Disease, and Salmonella. Robust biosecurity is not optional — it's the foundation of a profitable operation.\n\n## The Three Zones Model\n\n**Zone 1: Perimeter (Farm Boundary)**\n- Controlled single-entry gate\n- Vehicle disinfection arch or drive-through\n- Signage restricting unauthorised access\n- Visitor logbook with health declarations\n\n**Zone 2: Buffer (Between Buildings)**\n- Foot dips at every building entrance\n- PPE change areas\n- Equipment decontamination stations\n- Wild bird deterrent systems\n\n**Zone 3: Production (Inside Houses)**\n- Full PPE requirement (coveralls, boots, masks)\n- Dedicated equipment per house\n- Strict cleaning and disinfection between flocks\n- Water treatment systems\n\n## Disinfection Between Flocks\n\n1. **Dry clean** — Remove all litter, feathers, and organic matter\n2. **Soak** — Apply BioFrontier foaming detergent, allow 30-minute contact time\n3. **Wash** — High-pressure wash all surfaces including ceiling and ventilation\n4. **Disinfect** — Apply BioShield Pro 500 via thermal fogger\n5. **Dry** — Allow minimum 48-hour drying period\n6. **Test** — Surface swab testing before new flock placement\n\n## Water Management\n\nWater is the most common vector for pathogen transmission in poultry houses. Implement:\n- In-line water treatment with AquaPure systems\n- Weekly water sampling and testing\n- Regular nipple and header tank cleaning\n- Biofilm prevention protocols`,
  },
  {
    slug: "export-compliance-farm-ready",
    title: "Export Compliance: Is Your Farm Ready?",
    cat: "Compliance",
    date: "Nov 2025",
    excerpt: "Understanding the biosecurity requirements for South African agricultural exports to EU and Middle Eastern markets.",
    content: `South African agricultural exports face increasingly stringent biosecurity requirements from international markets. Non-compliance doesn't just cost sales — it can result in entire supply chains being blocked.\n\n## EU Market Requirements\n\nThe European Union requires:\n- **Documented biosecurity plans** reviewed annually\n- **HACCP compliance** throughout the processing chain\n- **Traceability systems** from farm to finished product\n- **Residue testing** with zero tolerance for prohibited substances\n- **Third-party audits** by approved certification bodies\n\n## Middle Eastern Markets\n\nHalal certification aside, key biosecurity requirements include:\n- **Animal welfare compliance** during production and processing\n- **Antibiotic-free production** documentation\n- **Water quality certificates** for processing facilities\n- **Pest management programs** with documentation\n\n## BioFrontier Compliance Support\n\nOur compliance team provides:\n- Gap analysis against target market requirements\n- SOP development and staff training\n- Mock audit preparation\n- Ongoing compliance monitoring\n- Documentation management systems\n\nContact BioFrontier for a free export readiness assessment.`,
  },
  {
    slug: "water-quality-disease-prevention-dairy",
    title: "Water Quality and Disease Prevention on Dairy Farms",
    cat: "Research",
    date: "Oct 2025",
    excerpt: "The critical link between water purification and disease control in dairy farming operations.",
    content: `Water quality is arguably the most overlooked biosecurity factor on South African dairy farms. Contaminated water can introduce pathogens, reduce milk production, and compromise animal health.\n\n## Common Water Quality Issues\n\n- **Bacterial contamination** from surface water sources\n- **High mineral content** affecting gut health and milk quality\n- **Biofilm buildup** in reticulation systems\n- **Algae growth** in storage tanks and troughs\n\n## Impact on Dairy Production\n\nStudies show that farms with treated water systems see:\n- 8-12% increase in milk yield\n- 40% reduction in mastitis cases\n- 25% reduction in calf scours\n- Significant improvement in somatic cell counts\n\n## BioFrontier Water Solutions\n\nOur AquaPure range provides:\n- Point-of-use treatment for parlour wash-down water\n- Livestock drinking water purification\n- Bulk tank cleaning water treatment\n- Effluent management systems\n\nAll systems use non-toxic treatment methods safe for organic certification.`,
  },
  {
    slug: "building-biosecurity-culture",
    title: "Building a Biosecurity Culture: People, Process, Products",
    cat: "Opinion",
    date: "Sep 2025",
    excerpt: "Why biosecurity is about more than just products — and how to build compliance into your farm's DNA.",
    content: `You can have the best disinfectants, the most advanced equipment, and the most detailed SOPs — but if your people don't believe in biosecurity, none of it matters.\n\n## The Human Factor\n\nResearch consistently shows that biosecurity failures are predominantly human failures:\n- Gates left open\n- PPE not worn\n- Foot dips not refreshed\n- Visitors not logged\n- Protocols skipped under time pressure\n\n## Building a Culture of Compliance\n\n**1. Leadership Commitment**\nBiosecurity culture starts at the top. Farm owners and managers must visibly follow every protocol, every time.\n\n**2. Training, Not Just Rules**\nPeople follow rules they understand. Invest in explaining WHY each protocol exists — what pathogen it prevents, what the cost of failure is.\n\n**3. Make Compliance Easy**\nIf PPE is uncomfortable, people won't wear it. If foot dips are in inconvenient locations, people will walk around them. Design your biosecurity infrastructure for human behaviour.\n\n**4. Positive Reinforcement**\nRecognise and reward compliance. Make biosecurity a source of pride, not just another chore.\n\n**5. Regular Refreshers**\nComplacency is the enemy of biosecurity. Schedule regular training updates, drills, and audits.\n\n## BioFrontier's Approach\n\nWe don't just supply products — we help build biosecurity cultures. Our compliance team works with farm management and staff to create sustainable, practical biosecurity programs that people actually follow.`,
  },
];

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/insights" className="text-secondary font-semibold hover:underline">
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="py-20 bg-hero">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <Link to="/insights" className="inline-flex items-center gap-1 text-secondary text-sm font-medium mb-6 hover:gap-2 transition-all">
              <ArrowLeft className="h-4 w-4" /> Back to Insights
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">{article.cat}</span>
              <span className="text-xs text-primary-foreground/50 flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {article.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground leading-tight">
              {article.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8 p-4 rounded-lg bg-muted">
              <Shield className="h-5 w-5 text-secondary shrink-0" />
              <p className="text-xs text-muted-foreground">
                Published by <span className="font-semibold text-foreground">BioFrontier</span> · Pioneering Resilient Pathogen Prevention
              </p>
            </div>

            <article className="prose-bio">
              {article.content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) {
                  return <h2 key={i} className="text-xl font-bold text-foreground mt-8 mb-4">{block.replace("## ", "")}</h2>;
                }
                if (block.startsWith("**") && block.includes("**\n")) {
                  return <h3 key={i} className="text-lg font-bold text-foreground mt-6 mb-2">{block.replace(/\*\*/g, "")}</h3>;
                }
                if (block.startsWith("- ")) {
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {block.split("\n").map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                          <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.match(/^\d+\./)) {
                  return (
                    <ol key={i} className="space-y-2 my-4">
                      {block.split("\n").map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-secondary font-bold shrink-0">{j + 1}.</span>
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed my-4"
                    dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }}
                  />
                );
              })}
            </article>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-lg bg-gradient-card shadow-bio text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">Need Biosecurity Support?</h3>
              <p className="text-sm text-muted-foreground mb-4">Get expert advice tailored to your operation.</p>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold hover:bg-bio-emerald-dark transition-colors">
                Contact BioFrontier
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
