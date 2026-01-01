import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { courses } from "../../data/courses";
import { CourseCard } from "../ui/CourseCard";

export function CourseGrid() {
  // Only show first 3 courses on landing page
  const featuredCourses = courses.slice(0, 3);

  return (
    <section id="courses" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blush rounded-full text-sm font-medium text-rose-gold mb-4">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4">
            Elevate Your <span className="text-rose-gold">Expertise</span>
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            From foundational techniques to advanced mastery, our courses are
            designed by industry leaders to transform your career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/courses"
            className="text-rose-gold font-medium hover:underline inline-flex items-center gap-2"
          >
            View All {courses.length} Courses →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
