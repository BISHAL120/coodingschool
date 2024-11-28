import CourseDetails from "@/components/course/components/courseDetails";
import React from "react";
// eslint-disable-next-line
const Course = async ({ params }: any) => {
  const { id } = await params;
  return (
    <div>
      {id}
      <CourseDetails />
    </div>
  );
};

export default Course;
