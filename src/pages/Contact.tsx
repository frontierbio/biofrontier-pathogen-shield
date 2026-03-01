import { useState } from "react";
import { MapPin, Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  company: z.string().trim().max(200).optional(),
  type: z.string().min(1, "Please select a type"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", company: "", type: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach(issue => {
        const field = issue.path[0] as keyof ContactForm;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const update = (field: keyof ContactForm, value: string) => {
    setForm(f => ({ ...f, [field]: value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }));
  };

  return (
    <>
      <section className="py-20 bg-hero">
        <div className="container mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Contact for Biosecurity <span className="text-secondary">Solutions</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl">
              Get a quote for non-toxic biosecurity in South Africa. Our team is ready to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                {submitted ? (
                  <div className="p-12 rounded-lg bg-gradient-card shadow-bio text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-secondary" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-foreground mb-2">Thank You!</h2>
                    <p className="text-muted-foreground">We've received your enquiry and will respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 rounded-lg bg-gradient-card shadow-bio">
                    <h2 className="text-xl font-bold text-foreground mb-6">Request a Quote</h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-xs font-semibold text-foreground block mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => update("name", e.target.value)}
                          className="w-full p-3 rounded-md border border-border bg-background text-foreground text-sm"
                          placeholder="Your name"
                        />
                        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-foreground block mb-1.5">Email *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => update("email", e.target.value)}
                          className="w-full p-3 rounded-md border border-border bg-background text-foreground text-sm"
                          placeholder="you@company.co.za"
                        />
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-xs font-semibold text-foreground block mb-1.5">Company</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={e => update("company", e.target.value)}
                          className="w-full p-3 rounded-md border border-border bg-background text-foreground text-sm"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-foreground block mb-1.5">Operation Type *</label>
                        <select
                          value={form.type}
                          onChange={e => update("type", e.target.value)}
                          className="w-full p-3 rounded-md border border-border bg-background text-foreground text-sm"
                        >
                          <option value="">Select type...</option>
                          <option value="farm">Farm</option>
                          <option value="poultry">Poultry Operation</option>
                          <option value="dairy">Dairy</option>
                          <option value="processor">Food Processor</option>
                          <option value="abattoir">Abattoir</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.type && <p className="text-xs text-destructive mt-1">{errors.type}</p>}
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="text-xs font-semibold text-foreground block mb-1.5">Message *</label>
                      <textarea
                        value={form.message}
                        onChange={e => update("message", e.target.value)}
                        rows={5}
                        className="w-full p-3 rounded-md border border-border bg-background text-foreground text-sm resize-none"
                        placeholder="Tell us about your biosecurity needs..."
                      />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-secondary text-secondary-foreground font-semibold hover:bg-bio-emerald-dark transition-colors"
                    >
                      Submit Enquiry <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-gradient-card shadow-bio">
                    <h3 className="font-bold text-foreground mb-4">Get in Touch</h3>
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Location</p>
                          <p className="text-muted-foreground text-xs">Midlands, KwaZulu-Natal, South Africa</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <p className="text-muted-foreground text-xs">info@biofrontier.co.za</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Phone</p>
                          <p className="text-muted-foreground text-xs">+27 (0) 33 000 0000</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/27330000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-md bg-secondary text-secondary-foreground font-semibold hover:bg-bio-emerald-dark transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                  </a>

                  {/* Map placeholder */}
                  <div className="rounded-lg overflow-hidden shadow-bio">
                    <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">Midlands, KZN</p>
                        <p className="text-[10px] text-muted-foreground">Interactive map coming soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
