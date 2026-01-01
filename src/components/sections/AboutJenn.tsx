import { motion } from "framer-motion";
import { Award, Heart, Scissors } from "lucide-react";

export function AboutJenn() {
  return (
    <section id="about" className="py-20 md:py-28 bg-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1594744803329-e58b31239f6e?w=600&h=800&fit=crop"
                alt="Jenn Barr - Beauty Educator"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rose-gold/30 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/50 rounded-full text-sm font-medium text-rose-gold mb-6">
              Meet Your Mentor
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
              Hi, I'm <span className="text-rose-gold">Jenn Barr</span>
            </h2>
            <p className="text-charcoal/70 text-lg mb-6 leading-relaxed">
              With over 15 years behind the chair and a passion for education,
              I've dedicated my career to elevating the beauty industry one
              stylist at a time.
            </p>
            <p className="text-charcoal/70 mb-8 leading-relaxed">
              From mastering color correction to building a six-figure salon
              business, I've learned every lesson the hard way—so you don't have
              to. My courses combine technical excellence with business savvy,
              giving you the complete toolkit to thrive.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <Award className="w-6 h-6 text-rose-gold mx-auto mb-2" />
                <div className="text-sm font-medium text-charcoal">
                  Industry Awards
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <Heart className="w-6 h-6 text-rose-gold mx-auto mb-2" />
                <div className="text-sm font-medium text-charcoal">
                  Passion Driven
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <Scissors className="w-6 h-6 text-rose-gold mx-auto mb-2" />
                <div className="text-sm font-medium text-charcoal">
                  15+ Years
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-rose-gold font-medium hover:underline inline-flex items-center gap-2"
            >
              Read My Full Story →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
