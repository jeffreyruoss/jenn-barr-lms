import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-blush"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-serif text-xl md:text-2xl font-semibold text-charcoal">
              Jenn Barr <span className="text-rose-gold">Beauty</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/courses"
              className="text-charcoal/80 hover:text-rose-gold transition-colors"
            >
              Courses
            </Link>
            {isHome ? (
              <a
                href="#community"
                className="text-charcoal/80 hover:text-rose-gold transition-colors"
              >
                Community
              </a>
            ) : (
              <Link
                to="/#community"
                className="text-charcoal/80 hover:text-rose-gold transition-colors"
              >
                Community
              </Link>
            )}
            {isHome ? (
              <a
                href="#about"
                className="text-charcoal/80 hover:text-rose-gold transition-colors"
              >
                About
              </a>
            ) : (
              <Link
                to="/#about"
                className="text-charcoal/80 hover:text-rose-gold transition-colors"
              >
                About
              </Link>
            )}
            <Link to="/courses">
              <Button variant="primary" size="sm">
                Start Learning
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-blush"
          >
            <div className="flex flex-col gap-4">
              <Link
                to="/courses"
                className="text-charcoal/80 hover:text-rose-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <a
                href={isHome ? "#community" : "/#community"}
                className="text-charcoal/80 hover:text-rose-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <a
                href={isHome ? "#about" : "/#about"}
                className="text-charcoal/80 hover:text-rose-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Link to="/courses" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" size="md" className="mt-2">
                  Start Learning
                </Button>
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
