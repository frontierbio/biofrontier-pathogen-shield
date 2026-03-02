import { useState } from "react";
import { Search, Calendar, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import SEOHead from "../components/SEOHead";
import { articlesData } from "./Article";

const articles = articlesData.map(a => ({
  slug: a.slug,
  title: a.title,
  cat: a.cat,
  date: a.date,
  excerpt: a.excerpt,
}));

const faqs = [
  { q: "What makes BioFrontier products non-toxic?", a: "Our formulations use biodegradable active ingredients that break down safely after disinfection. No chlorine, formaldehyde, or quaternary ammonium compounds." },
  { q: "How does the monolithic brand architecture work?", a: "All products and services operate under the BioFrontier master brand. Partner contributions are endorsed (e.g., 'by BioFrontier') ensuring brand unity while leveraging specialist expertise." },
  { q: "Can BioFrontier help with export compliance?", a: "Yes. Our Compliance & Workforce Support division provides biosecurity audits, SOP development, and export-readiness consulting for EU, UK, and Middle Eastern markets." },
  { q: "Do you supply nationally or only in KZN?", a: "While headquartered in the KZN Midlands, we supply products nationwide and offer remote compliance consulting across South Africa." },
];

const quizQuestions = [
  { q: "Do you have a documented biosecurity plan?", id: "plan" },
  { q: "Are entry/exit points controlled with disinfection stations?", id: "entry" },
  { q: "Is drinking water treated/tested regularly?", id: "water" },
  { q: "Do all staff receive biosecurity training?", id: "training" },
  { q: "Are vehicles disinfected before entering production areas?", id: "vehicles" },
];

export default function InsightsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, boolean>>({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  const filtered = articles.filter(a =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const quizScore = Object.values(quizAnswers).filter(Boolean).length;

  return (
    <>
      <SEOHead
        type="insights"
        title="Biosecurity Tips & Insights | BioFrontier"
        description="Poultry biosecurity guidelines South Africa. Expert articles, case studies, and FAQs from BioFrontier."
      />

      <section className="py-20 bg-hero">
        <div className="container mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Biosecurity Tips & <span className="text-secondary">Insights</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl">
              Expert articles, case studies, and biosecurity guidelines for South African agriculture.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="relative w-full md:w-96 mb-10">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles & FAQs..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm"
              />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <ScrollReveal key={a.slug} delay={i * 0.05}>
                <article className="rounded-lg bg-gradient-card shadow-bio p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">{a.cat}</span>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {a.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-sm leading-snug">{a.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{a.excerpt}</p>
                  <Link
                    to={`/insights/${a.slug}`}
                    className="mt-4 text-xs font-semibold text-secondary flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="h-3 w-3" />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-foreground text-center mb-8">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={i}>
                <div className="rounded-lg bg-background shadow-bio overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center gap-3 p-4 text-left"
                  >
                    <span className="flex-1 text-sm font-semibold text-foreground">{f.q}</span>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Biosecurity Quiz */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-2xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-foreground text-center mb-3">
              Biosecurity Readiness <span className="text-secondary">Quiz</span>
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-8">
              Quick assessment of your farm's biosecurity preparedness.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="p-8 rounded-lg bg-gradient-card shadow-bio">
              <div className="space-y-4 mb-6">
                {quizQuestions.map(q => (
                  <label key={q.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={quizAnswers[q.id] || false}
                      onChange={e => setQuizAnswers(a => ({ ...a, [q.id]: e.target.checked }))}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      quizAnswers[q.id] ? "bg-secondary border-secondary" : "border-border"
                    }`}>
                      {quizAnswers[q.id] && <CheckCircle2 className="h-3.5 w-3.5 text-secondary-foreground" />}
                    </div>
                    <span className="text-sm text-foreground">{q.q}</span>
                  </label>
                ))}
              </div>

              <button
                onClick={() => setShowQuizResult(true)}
                className="w-full px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold hover:bg-bio-emerald-dark transition-colors"
              >
                Check My Score
              </button>

              {showQuizResult && (
                <div className="mt-6 p-4 rounded-lg bg-muted text-center">
                  <div className="text-3xl font-extrabold text-foreground mb-2">
                    {quizScore}/{quizQuestions.length}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {quizScore <= 2 ? "Your operation needs urgent biosecurity improvements." :
                     quizScore <= 4 ? "Good foundation, but gaps remain." :
                     "Excellent biosecurity readiness!"}
                  </p>
                  <Link to="/contact" className="text-sm font-semibold text-secondary hover:underline">
                    Get expert support →
                  </Link>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
