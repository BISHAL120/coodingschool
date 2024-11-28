"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Trophy, PlayCircle } from "lucide-react";
import Image from "next/image";

const enrolledCourses = [
  {
    id: 1,
    lectures: 16,
    title: "Advanced React Patterns",
    progress: 65,
    remainingHours: 4.5,
    completed: false,
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    lectures: 19,
    title: "TypeScript Masterclass",
    progress: 89,
    remainingHours: 1.5,
    completed: false,
    thumbnail:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    lectures: 12,
    title: "Node.js Performance",
    progress: 100,
    remainingHours: 0,
    completed: true,
    thumbnail:
      "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&auto=format&fit=crop&q=60",
  },
];

export function EnrolledCourses() {
  return (
    <section className="py-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Welcome back, John Doe!</h1>
        <p className="text-muted-foreground">
          Continue your learning journey where you left off.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {enrolledCourses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader className="relative p-0">
                <Image
                  width={800}
                  height={600}
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                {course.completed && (
                  <Badge className="absolute top-2 right-2 bg-green-500">
                    <Trophy className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <CardTitle className="line-clamp-1">{course.title}</CardTitle>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">
                    <div className="pb-2">
                      <span>{course.progress}%</span> complete
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.remainingHours}h left
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end items-center text-sm text-muted-foreground pb-2">
                      {course.lectures} Lectures
                      <PlayCircle className="w-4 h-4 ml-1" />
                    </div>
                    <Button size="sm">
                      <Play className="w-4 h-4 mr-1" />
                      Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
