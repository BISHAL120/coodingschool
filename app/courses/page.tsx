import CourseCatalog from "@/components/course/components/course-catalog";
import { EnrolledCourses } from "@/components/course/components/enrolled-courses";

export default function Home() {
  return (
    <div className="space-y-12 px-5 container mx-auto">
      {/* {status === "loading" ? (
        <div>Loading enrolled courses...</div>
      ) : status === "error" ? (
        <div>Error loading enrolled courses. Please try again later.</div>
      ) : (
        <EnrolledCourses courses={course || []} />
    )} */}
      <EnrolledCourses />
      <CourseCatalog />
    </div>
  );
}
