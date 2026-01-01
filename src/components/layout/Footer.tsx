import { Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-serif text-2xl font-semibold">
              Jenn Barr <span className="text-rose-gold">Beauty</span>
            </span>
            <p className="mt-4 text-white/70 max-w-md">
              Elite beauty education for the modern stylist. Transform your
              career with world-class training and an exclusive community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#courses"
                  className="text-white/70 hover:text-rose-gold transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="text-white/70 hover:text-rose-gold transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-rose-gold transition-colors"
                >
                  About Jenn
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {currentYear} Jenn Barr Beauty Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
