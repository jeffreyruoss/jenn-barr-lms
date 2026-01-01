import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Lock } from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { getCourseBySlug, getLessonById } from "../data/courses";

export function LessonPage() {
  const { courseSlug, lessonId } = useParams<{
    courseSlug: string;
    lessonId: string;
  }>();

  const course = courseSlug ? getCourseBySlug(courseSlug) : undefined;
  const lesson = course && lessonId ? getLessonById(course, parseInt(lessonId)) : undefined;

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  if (!lesson) {
    return <Navigate to={`/courses/${course.slug}`} replace />;
  }

  const currentIndex = course.lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < course.lessons.length - 1 ? course.lessons[currentIndex + 1] : null;

  // If lesson is not available, show coming soon
  if (!lesson.isAvailable) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 md:pt-24">
          <section className="py-20 md:py-32 bg-cream">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-24 h-24 bg-blush rounded-full flex items-center justify-center mx-auto mb-8">
                  <Lock className="w-12 h-12 text-rose-gold" />
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                  Coming Soon
                </h1>
                <p className="text-charcoal/70 text-lg mb-8">
                  This lesson is currently in production and will be available soon.
                  Check back later or explore other available lessons.
                </p>
                <Link to={`/courses/${course.slug}`}>
                  <Button variant="primary" size="lg">
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Back to Course
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Video Section */}
        <section className="bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-video w-full"
            >
              <iframe
                src={`https://player.vimeo.com/video/${lesson.vimeoId}?h=8272103f6e&title=0&byline=0&portrait=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={lesson.title}
              />
            </motion.div>
          </div>
        </section>

        {/* Lesson Info */}
        <section className="bg-charcoal text-white py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
                <Link to="/courses" className="hover:text-white transition-colors">
                  Courses
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link
                  to={`/courses/${course.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {course.title}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Lesson {lesson.id}</span>
              </div>

              {/* Lesson Title */}
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                {lesson.title}
              </h1>
              <div className="flex items-center gap-4 text-white/60">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {lesson.duration}
                </span>
                <span>
                  Lesson {currentIndex + 1} of {course.lessons.length}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-cream py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-between gap-4"
            >
              {prevLesson ? (
                prevLesson.isAvailable ? (
                  <Link
                    to={`/courses/${course.slug}/lessons/${prevLesson.id}`}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
                  >
                    <ChevronLeft className="w-5 h-5 text-rose-gold group-hover:-translate-x-1 transition-transform" />
                    <div>
                      <p className="text-xs text-charcoal/60">Previous</p>
                      <p className="font-medium text-charcoal">{prevLesson.title}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl opacity-50 cursor-not-allowed">
                    <ChevronLeft className="w-5 h-5 text-charcoal/40" />
                    <div>
                      <p className="text-xs text-charcoal/40">Previous</p>
                      <p className="font-medium text-charcoal/50">{prevLesson.title}</p>
                    </div>
                  </div>
                )
              ) : (
                <div />
              )}

              {nextLesson ? (
                nextLesson.isAvailable ? (
                  <Link
                    to={`/courses/${course.slug}/lessons/${nextLesson.id}`}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group text-right sm:ml-auto"
                  >
                    <div>
                      <p className="text-xs text-charcoal/60">Next</p>
                      <p className="font-medium text-charcoal">{nextLesson.title}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-rose-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl opacity-50 cursor-not-allowed text-right sm:ml-auto">
                    <div>
                      <p className="text-xs text-charcoal/40">Next</p>
                      <p className="font-medium text-charcoal/50">{nextLesson.title} (Coming Soon)</p>
                    </div>
                    <Lock className="w-5 h-5 text-charcoal/40" />
                  </div>
                )
              ) : (
                <Link
                  to={`/courses/${course.slug}`}
                  className="flex items-center gap-3 p-4 bg-rose-gold text-white rounded-xl shadow-sm hover:shadow-md transition-all group text-right sm:ml-auto"
                >
                  <div>
                    <p className="text-xs text-white/80">Complete!</p>
                    <p className="font-medium">Back to Course</p>
                  </div>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          </div>
        </section>

        {/* Course Lessons Sidebar */}
        <section className="py-12 bg-cream border-t border-charcoal/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-serif font-bold text-charcoal mb-6">
              All Lessons
            </h2>
            <div className="space-y-2">
              {course.lessons.map((l, index) => (
                <div key={l.id}>
                  {l.isAvailable ? (
                    <Link
                      to={`/courses/${course.slug}/lessons/${l.id}`}
                      className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                        l.id === lesson.id
                          ? "bg-rose-gold text-white"
                          : "bg-white hover:bg-blush"
                      }`}
                    >
                      <span className="font-medium">
                        {index + 1}. {l.title}
                      </span>
                      <span className={l.id === lesson.id ? "text-white/80" : "text-charcoal/60"}>
                        {l.duration}
                      </span>
                    </Link>
                  ) : (
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/50 text-charcoal/40">
                      <span className="font-medium flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        {index + 1}. {l.title}
                      </span>
                      <span>Coming Soon</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
