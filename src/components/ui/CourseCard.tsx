import { motion } from "framer-motion";
import { Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import type { Course } from "../../data/courses";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/courses/${course.slug}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <Link to={`/courses/${course.slug}`}>
          <h3 className="text-xl font-semibold text-charcoal mb-2 hover:text-rose-gold transition-colors">
            {course.title}
          </h3>
        </Link>
        <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            {course.lessons.length} lessons
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-rose-gold">
            ${course.price}
          </span>
          <Link to={`/courses/${course.slug}`}>
            <Button variant="primary" size="sm">
              View Course
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
