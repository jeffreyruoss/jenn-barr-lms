import { motion } from "framer-motion";
import { Users, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

const features = [
  {
    icon: Users,
    title: "Private Network",
    description: "Connect with elite stylists from around the world",
  },
  {
    icon: MessageCircle,
    title: "Expert Q&A",
    description: "Get answers from Jenn and industry leaders",
  },
  {
    icon: Sparkles,
    title: "Exclusive Content",
    description: "Access member-only tutorials and resources",
  },
];

export function Community() {
  return (
    <section
      id="community"
      className="py-20 md:py-28 bg-charcoal text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Community of beauty professionals"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-rose-gold text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Active Members</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-rose-gold mb-6">
              Exclusive Community
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Join the{" "}
              <span className="text-rose-gold">Jenn Barr Beauty Circle</span>
            </h2>
            <p className="text-white/70 text-lg mb-8">
              More than a course—it's a sisterhood. Connect with passionate
              stylists, share your wins, get support, and grow together in our
              private community.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-gold/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-rose-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="primary" size="lg">
              Join the Circle
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
