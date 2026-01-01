import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, BookOpen, User, Award, Play, Lock, ChevronLeft } from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { getCourseBySlug } from "../data/courses";

export function CoursePage() {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const course = courseSlug ? getCourseBySlug(courseSlug) : undefined;

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const availableLessons = course.lessons.filter((l) => l.isAvailable).length;
  const totalDuration = course.lessons.reduce((acc, lesson) => {
    const [mins] = lesson.duration.split(":").map(Number);
    return acc + mins;
  }, 0);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Course Hero */}
        <section className="bg-charcoal text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Courses
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    course.level === "Beginner"
                      ? "bg-green-500/20 text-green-300"
                      : course.level === "Intermediate"
                      ? "bg-yellow-500/20 text-yellow-300"
                      : "bg-rose-gold/20 text-rose-gold"
                  }`}
                >
                  {course.level}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                  {course.title}
                </h1>
                <p className="text-white/70 text-lg mb-6">
                  {course.longDescription}
                </p>

                <div className="flex flex-wrap gap-6 mb-8 text-sm">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4 text-rose-gold" />
                    {course.instructor}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-rose-gold" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-rose-gold" />
                    {course.lessons.length} lessons
                  </span>
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-rose-gold" />
                    Certificate
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-4xl font-bold text-rose-gold">
                    ${course.price}
                  </span>
                  <Button variant="primary" size="lg">
                    Enroll Now
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blush text-charcoal px-6 py-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">{totalDuration}+</div>
                  <div className="text-sm">Minutes of Content</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lessons List */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Course Curriculum
              </h2>
              <p className="text-charcoal/70">
                {availableLessons} of {course.lessons.length} lessons available
              </p>
            </motion.div>

            <div className="space-y-4">
              {course.lessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {lesson.isAvailable ? (
                    <Link
                      to={`/courses/${course.slug}/lessons/${lesson.id}`}
                      className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.01] border border-transparent hover:border-rose-gold/30"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-rose-gold flex items-center justify-center flex-shrink-0">
                            <Play className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-charcoal">
                              {index + 1}. {lesson.title}
                            </h3>
                            <p className="text-sm text-charcoal/60">
                              {lesson.duration}
                            </p>
                          </div>
                        </div>
                        <span className="text-rose-gold text-sm font-medium">
                          Watch Now →
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div className="bg-white/50 rounded-xl p-6 border border-dashed border-charcoal/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center flex-shrink-0">
                            <Lock className="w-4 h-4 text-charcoal/40" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-charcoal/50">
                              {index + 1}. {lesson.title}
                            </h3>
                            <p className="text-sm text-charcoal/40">
                              {lesson.duration}
                            </p>
                          </div>
                        </div>
                        <span className="text-charcoal/40 text-sm">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
