import { motion } from "framer-motion";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { CourseCard } from "../components/ui/CourseCard";
import { courses } from "../data/courses";

export function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-blush py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-2 bg-white/50 rounded-full text-sm font-medium text-rose-gold mb-4">
                Learn from the Best
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-4">
                All <span className="text-rose-gold">Courses</span>
              </h1>
              <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
                Explore our complete library of professional beauty education.
                From color theory to business mastery, find the perfect course
                for your journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter/Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12"
            >
              <p className="text-charcoal/70">
                Showing <span className="font-semibold text-charcoal">{courses.length}</span> courses
              </p>
              <div className="flex gap-2">
                <span className="px-4 py-2 bg-rose-gold text-white rounded-full text-sm font-medium">
                  All Levels
                </span>
              </div>
            </motion.div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
