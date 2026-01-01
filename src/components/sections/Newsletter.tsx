import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, just show success
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 bg-blush rounded-full text-sm font-medium text-rose-gold mb-6">
            Stay Inspired
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4">
            Get Free <span className="text-rose-gold">Beauty Tips</span>
          </h2>
          <p className="text-charcoal/70 text-lg mb-8">
            Join 10,000+ stylists receiving weekly insights on technique,
            business growth, and industry trends. No spam, just value.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-blush rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-rose-gold" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                You're In!
              </h3>
              <p className="text-charcoal/70">
                Check your inbox for a welcome gift from me 💕
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full border border-blush bg-white text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:border-rose-gold transition-colors"
              />
              <Button type="submit" variant="primary" size="lg">
                Subscribe
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          )}

          <p className="text-sm text-charcoal/50 mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe
            anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
