"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";
import CourseCard from "./course-card";
import { Course } from "../api";

const generateCourse = () => {
  const allCourses: Course[] = Array.from({ length: 3 }, (_, i) => ({
    id: `course-${i + 1}`,
    title: `Course ${i + 1}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    thumbnail: `https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&auto=format&fit=crop&q=60`,
    lessonCount: Math.floor(Math.random() * 20) + 5,
    duration: `${Math.floor(Math.random() * 10) + 1} hours`,
    instructor: {
      name: `Instructor ${i + 1}`,
      avatar: `/placeholder.svg?height=50&width=50&text=I${i + 1}`,
    },
    studentCount: Math.floor(Math.random() * 10000) + 100,
    rating: Math.random() * 2 + 3,
    reviewCount: Math.floor(Math.random() * 1000) + 10,
    price: Math.floor(Math.random() * 100) + 9.99,
    difficulty: ["Beginner", "Intermediate", "Advanced"][
      Math.floor(Math.random() * 3)
    ] as "Beginner" | "Intermediate" | "Advanced",
    categories: [
      "Web Development",
      "Design",
      "Business",
      "Marketing",
      "Graphic Designer",
      "Data Analytics",
    ],
  }));
  return allCourses;
};

const CourseCatalog = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [courses, setCourses] = useState<Course[]>([]);
  const [nextCursor, setNextCursor] = useState<number | null>(0);
  // Todo: Add Loading State if needed
  /*   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); */

  useEffect(() => {
    const newCourses = generateCourse();
    setCourses((prev) => [...prev, ...newCourses]);
  }, [nextCursor]);

  /*   if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div>Error loading courses. Please try again later.</div>;
  } */

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-between items-center mb-6"
      >
        <h2 className="text-2xl font-bold">Course Catalog</h2>
        <div className="flex space-x-2">
          <Button
            variant={view === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setView("grid")}
            aria-label="Grid view"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={view === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setView("list")}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`grid gap-6 ${
            view === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} view={view} />
          ))}
        </motion.div>
      </AnimatePresence>

      {nextCursor !== null && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }} // Show this div while in view
          viewport={{ once: false }} // Allow the animation to trigger multiple times
          className="mt-8 text-center pb-10"
        >
          {/* Todo: Fix this for loading state */}
          <Button
            onClick={() => setNextCursor(nextCursor)} /* disabled={loading} */
          >
            {/* {loading ? "Loading more..." : "Load More"} */}Load More
          </Button>
        </motion.div>
      )}
    </section>
  );
};

export default CourseCatalog;
