import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Globe,
  GraduationCap,
  Lock,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import CoursePreviewCard from "./coursePreviewCard";

export default function CourseDetails() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary/5 border-b">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Course Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition">
                  Best Seller
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight">
                  Advanced Web Development Masterclass
                </h1>
                <p className="text-lg text-muted-foreground">
                  Master modern web development with practical projects and
                  industry best practices
                </p>
              </div>

              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 font-medium">4.8</span>
                  <span className="ml-1">(2.5k reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-1" />
                  <span>12.5k students</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-muted-foreground">
                <Image
                  width={40}
                  height={40}
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
                  alt="Instructor"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-foreground font-medium">John Smith</p>
                  <p className="text-sm">Senior Web Developer & Instructor</p>
                </div>
              </div>
              <div>
                <div className="prose dark:prose-invert max-w-none">
                  <h2>About This Course</h2>
                  <p className="leading-9">
                    This comprehensive web development course is designed to
                    take you from beginner to professional. You&apos;ll learn
                    everything from fundamental concepts to advanced techniques
                    used in modern web development.
                  </p>

                  <h3 className="mt-10 mb-3 text-2xl font-bold">
                    What you&apos;ll learn
                  </h3>
                  <ul className="grid space-y-2 gap-2">
                    {[
                      "Master HTML5, CSS3, and modern JavaScript",
                      "Build responsive websites using modern frameworks",
                      "Implement authentication and authorization",
                      "Deploy applications to production",
                      "Work with databases and APIs",
                      "Learn best practices and design patterns",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>32 hours</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span>24 modules</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  <span>English</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span>Certificate</span>
                </div>
              </div>
            </div>

            {/* Course Preview */}
            <div className="lg:sticky lg:top-8">
              <Card className="overflow-hidden">
                <CoursePreviewCard />
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-8">
        <div>
          <div className="flex items-center text-gray-400 py-5">
            <BookOpen className="w-6 h-6 mr-2" />
            <span className="text-2xl font-semibold">All Modules</span>
          </div>
          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-4">
              {Array.from({ length: 8 }).map((_, moduleIndex) => (
                <div key={moduleIndex} className="space-y-2">
                  <h3 className="font-semibold">
                    Module {moduleIndex + 1}:{" "}
                    {
                      [
                        "Introduction to Web Development",
                        "HTML & CSS Fundamentals",
                        "JavaScript Basics",
                        "Advanced JavaScript",
                        "Frontend Frameworks",
                        "Backend Development",
                        "Database Integration",
                        "Deployment & DevOps",
                      ][moduleIndex]
                    }
                  </h3>
                  <div className="space-y-2 pl-4">
                    {Array.from({ length: 3 }).map((_, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex items-center justify-between p-2 rounded hover:bg-muted"
                      >
                        <div className="flex items-center">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          <span>Lesson {lessonIndex + 1}</span>
                        </div>
                        <div className="flex justify-center items-center gap-5">
                          <span className="text-sm text-muted-foreground">
                            15:00
                          </span>
                          <span className="text-sm text-muted-foreground">
                            <Lock className="w-4 h-4 mr-2" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="flex items-center text-gray-400 py-5">
            <Star className="w-6 h-6 mr-2" />
            <span className="text-2xl font-semibold">Reviews</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1494790108377-be9c29b29330",
                        "1438761681033-6461ffad8d80",
                        "1472099645785-5658abf4ff4e",
                      ][index]
                    }?w=48&h=48&fit=crop&crop=face`}
                    width={48}
                    height={48}
                    alt={`Reviewer ${index + 1}`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">
                        {
                          ["Sarah Johnson", "Michael Chen", "Emily Williams"][
                            index
                          ]
                        }
                      </h4>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`w-4 h-4 ${
                              starIndex < 5 - index * 0.5
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {
                        [
                          "This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand.",
                          "Great course structure and content. The practical projects really helped solidify my understanding.",
                          "Excellent resource for learning web development. The curriculum is well-organized and comprehensive.",
                        ][index]
                      }
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
