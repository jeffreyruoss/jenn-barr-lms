import { motion } from "framer-motion";
import { Users, Award, BookOpen, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Stylists Educated" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: BookOpen, value: "50+", label: "Expert Courses" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

export function TrustBar() {
  return (
    <section className="bg-blush py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-gold/20 mb-4">
                <stat.icon className="w-6 h-6 text-rose-gold" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-charcoal mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-charcoal/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
