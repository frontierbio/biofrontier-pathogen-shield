import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="BioFrontier logo" className="h-9 w-9 rounded-md object-contain" />
              <span className="text-lg font-extrabold">
                Bio<span className="text-secondary">Frontier</span>
              </span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Pioneering non-toxic biosecurity solutions for South African agriculture, from farm to fork.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/30 text-xs text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Low-Carbon Site
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-secondary">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/solutions", label: "Solutions" },
                { to: "/products", label: "Products" },
                { to: "/insights", label: "Insights" },
                { to: "/resources", label: "Resources" },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-secondary">Solutions</h4>
            <nav className="flex flex-col gap-2">
              {[
                "Biosecurity Products",
                "Water Purification",
                "PPE Solutions",
                "Compliance Support",
                "Poultry Biosecurity",
              ].map(s => (
                <Link key={s} to="/solutions" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                  {s}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-secondary">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary shrink-0" />
                Midlands, KwaZulu-Natal, SA
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                info@biofrontier.co.za
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                +27 (0) 33 000 0000
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} BioFrontier. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-secondary transition-colors">Disclaimers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
