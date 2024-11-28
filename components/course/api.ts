export type Course = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  lessonCount: number;
  duration: string;
  instructor: {
    name: string;
    avatar: string;
  };
  studentCount: number;
  rating: number;
  reviewCount: number;
  price: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  categories: string[];
};

const ITEMS_PER_PAGE = 9;

export const fetchCourses = async ({
  pageParam = 0,
}): Promise<{ courses: Course[]; nextCursor: number | null }> => {
  // Simulating API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock data
  const allCourses: Course[] = Array.from({ length: 50 }, (_, i) => ({
    id: `course-${i + 1}`,
    title: `Course ${i + 1}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    thumbnail: `/placeholder.svg?height=300&width=500&text=Course+${i + 1}`,
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
    categories: ["Web Development", "Design", "Business", "Marketing"][
      Math.floor(Math.random() * 4)
    ].split(" "),
  }));

  const start = pageParam * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedCourses = allCourses.slice(start, end);

  return {
    courses: paginatedCourses,
    nextCursor: end < allCourses.length ? pageParam + 1 : null,
  };
};

export type EnrollCourse = {
  id: string;
  title: string;
  progress: number; // Percentage of course completed
  remainingHours: number; // Estimated hours left to complete the course
  completed: boolean; // Indicates if the course is completed
};

export const fetchEnrolledCourses = async (): Promise<EnrollCourse[]> => {
  // Simulating API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock data for enrolled courses
  return [
    {
      id: "enrolled-1",
      title: "Introduction to React",
      progress: 75,
      remainingHours: 2,
      completed: false,
    },
    {
      id: "enrolled-2",
      title: "Advanced JavaScript Concepts",
      progress: 100,
      remainingHours: 0,
      completed: true,
    },
    {
      id: "enrolled-3",
      title: "CSS Flexbox and Grid Mastery",
      progress: 30,
      remainingHours: 5,
      completed: false,
    },
  ];
};
