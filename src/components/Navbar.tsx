import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/products", label: "Products" },
  { to: "/insights", label: "Insights" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-bio-elevated" : "bg-primary"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-secondary" />
          <div>
            <span className="text-xl font-extrabold text-primary-foreground tracking-tight">
              Bio<span className="text-secondary">Frontier</span>
            </span>
            <p className="text-[10px] text-primary-foreground/60 leading-none -mt-0.5">
              Pioneering Resilient Pathogen Prevention
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === to
                  ? "text-secondary"
                  : "text-primary-foreground/80 hover:text-secondary"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-5 py-2 text-sm font-semibold rounded-md bg-secondary text-secondary-foreground hover:bg-bio-emerald-dark transition-colors"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-primary border-t border-primary-foreground/10"
          >
            <div className="container mx-auto py-4 flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === to
                      ? "text-secondary bg-primary-foreground/5"
                      : "text-primary-foreground/80 hover:text-secondary"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-5 py-3 text-sm font-semibold rounded-md bg-secondary text-secondary-foreground text-center"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
