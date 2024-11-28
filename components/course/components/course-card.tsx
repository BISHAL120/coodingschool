import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, PlayCircle, Star, Users } from "lucide-react";

type Course = {
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

type CourseCardProps = {
  course: Course;
  view: "grid" | "list";
};

const CourseCard = ({ course, view }: CourseCardProps) => {
  const cardVariants = {
    grid: { flexDirection: "column", width: "100%" },
    list: { flexDirection: "row", width: "100%" },
  };

  return (
    <motion.div
      layout
      // eslint-disable-next-line
      variants={cardVariants as any} // Type assertion to bypass type error
      initial={view}
      animate={view}
      className={`bg-card text-card-foreground rounded-lg shadow-sm overflow-hidden border ${
        view === "list" ? "flex" : ""
      }`}
    >
      <div className={view === "list" ? "w-1/3" : "w-full"}>
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className={`p-6 ${view === "list" ? "w-2/3" : "w-full"}`}>
        <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {course.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-2 -ml-[2px]">
              <AvatarImage
                src={course.instructor.avatar}
                alt={course.instructor.name}
              />
              <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
            </Avatar>
            <div className="">
              <p className="text-base ">{course.instructor.name}</p>
              <p className="text-[12px] text-muted-foreground">Web Developer</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-muted-foreground space-y-1">
            <div className="flex items-center text-sm ">
              <Clock className="mr-1 h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-sm">
              <PlayCircle className="mr-1 h-4 w-4" />
              <span>{course.lessonCount} video</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1 h-4 w-4" />
              <span className="text-sm font-medium">
                {course.rating.toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground ml-1">
                ({course.reviewCount} reviews)
              </span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="mr-1 h-4 w-4" />
              <span>{course.studentCount} students</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pb-3">
          <Badge variant="secondary">{course.difficulty}</Badge>
          <span className="text-lg font-bold flex justify-end ">
            ${course.price.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <Button className="w-full">Enroll Now</Button>
        </div>
        <div className="flex items-center justify-between pt-3">
          <div className="space-x-2">
            {course.categories.map((category) => (
              <Badge key={category} variant="outline">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
