"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Clock,
  Grid,
  List,
  Medal,
  Search,
  Star,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import TopThree from "./topThree";

const students = [
  {
    id: 1,
    name: "Alice Smith",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop",
    points: 15000,
    completionRate: 67,
    streak: 35,
    badges: ["Achiever", "Team Leader", "Innovator"],
    recentActivity: "Completed Full Stack Development Course",
    level: 60,
    rank: 1,
  },
  {
    id: 2,
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop",
    points: 14000,
    completionRate: 56,
    streak: 45,
    badges: ["Mentor", "Problem Solver"],
    recentActivity: "Assisted 12 students this week",
    level: 50,
    rank: 2,
  },
  {
    id: 3,
    name: "Emma Brown",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop",
    points: 13000,
    completionRate: 72,
    streak: 25,
    badges: ["Fast Learner", "Collaborator"],
    recentActivity: "Completed 6 projects",
    level: 45,
    rank: 3,
  },
  {
    id: 4,
    name: "Chris Johnson",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop",
    points: 12000,
    completionRate: 68,
    streak: 20,
    badges: ["Creative Thinker"],
    recentActivity: "Started Python Course",
    level: 40,
    rank: 4,
  },
  {
    id: 5,
    name: "Sophia Lee",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop",
    points: 11000,
    completionRate: 35,
    streak: 16,
    badges: ["Quick Learner"],
    recentActivity: "Completed JavaScript Basics",
    level: 35,
    rank: 5,
  },
  {
    id: 6,
    name: "Alice Smith",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop",
    points: 15000,
    completionRate: 69,
    streak: 35,
    badges: ["Achiever", "Team Leader", "Innovator"],
    recentActivity: "Completed Full Stack Development Course",
    level: 60,
    rank: 6,
  },
  {
    id: 7,
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop",
    points: 14000,
    completionRate: 66,
    streak: 45,
    badges: ["Mentor", "Problem Solver"],
    recentActivity: "Assisted 12 students this week",
    level: 50,
    rank: 7,
  },
  {
    id: 8,
    name: "Emma Brown",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop",
    points: 13000,
    completionRate: 82,
    streak: 25,
    badges: ["Fast Learner", "Collaborator"],
    recentActivity: "Completed 6 projects",
    level: 45,
    rank: 8,
  },
  {
    id: 9,
    name: "Chris Johnson",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop",
    points: 12000,
    completionRate: 78,
    streak: 20,
    badges: ["Creative Thinker"],
    recentActivity: "Started Python Course",
    level: 40,
    rank: 9,
  },
  {
    id: 10,
    name: "Sophia Lee",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop",
    points: 11000,
    completionRate: 85,
    streak: 16,
    badges: ["Quick Learner"],
    recentActivity: "Completed JavaScript Basics",
    level: 35,
    rank: 10,
  },
  {
    id: 11,
    name: "Alice Smith",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop",
    points: 15000,
    completionRate: 49,
    streak: 35,
    badges: ["Achiever", "Team Leader", "Innovator"],
    recentActivity: "Completed Full Stack Development Course",
    level: 60,
    rank: 11,
  },
  {
    id: 12,
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop",
    points: 14000,
    completionRate: 76,
    streak: 45,
    badges: ["Mentor", "Problem Solver"],
    recentActivity: "Assisted 12 students this week",
    level: 50,
    rank: 12,
  },
  {
    id: 13,
    name: "Emma Brown",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop",
    points: 13000,
    completionRate: 92,
    streak: 25,
    badges: ["Fast Learner", "Collaborator"],
    recentActivity: "Completed 6 projects",
    level: 45,
    rank: 13,
  },
  {
    id: 14,
    name: "Chris Johnson",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop",
    points: 12000,
    completionRate: 88,
    streak: 20,
    badges: ["Creative Thinker"],
    recentActivity: "Started Python Course",
    level: 40,
    rank: 14,
  },
  {
    id: 15,
    name: "Sophia Lee",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop",
    points: 11000,
    completionRate: 85,
    streak: 16,
    badges: ["Quick Learner"],
    recentActivity: "Completed JavaScript Basics",
    level: 35,
    rank: 15,
  },
] as const;

function LeaderboardCard({
  student,
  index,
}: {
  student: (typeof students)[number];
  index: number;
}) {
  const medals = {
    0: { icon: Trophy, className: "text-yellow-500" },
    1: { icon: Medal, className: "text-amber-600" },
    2: { icon: Medal, className: "text-gray-400" },
  };

  const MedalIcon = medals[index as keyof typeof medals]?.icon;

  return (
    <Card
      className={cn(
        "group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary/5 hover:border-primary/20"
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src={student.avatar}
              width={64}
              height={64}
              alt={student.name}
              className="w-16 h-16 rounded-full border-2 border-primary/20"
            />
            {MedalIcon && (
              <div className="absolute -top-2 -right-2 bg-background rounded-full p-1 shadow-lg">
                <MedalIcon
                  className={cn(
                    "w-5 h-5",
                    medals[index as keyof typeof medals]?.className
                  )}
                />
              </div>
            )}
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{student.name}</h3>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-bold">
                  {student.points.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {student.badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="animate-fade-in"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Level {student.level}</span>
                <span>{student.completionRate}% Complete</span>
              </div>
              <Progress value={student.completionRate} className="h-2" />
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span>Rank #{student.rank}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>{student.streak} day streak</span>
          </div>
          <div className="flex items-center space-x-1">
            <Target className="w-4 h-4 text-purple-500" />
            <span>Level {student.level}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LeaderboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <TopThree />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 relative"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Leaderboard</h1>
              <p className="text-muted-foreground">
                Top performing students this month
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative flex items-center">
                <Input
                  placeholder="Search students..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[200px] pr-8"
                />
                <Search className="absolute right-2 text-muted-foreground w-4 h-4" />
              </div>
              <Button variant="outline">This Month</Button>
            </div>
          </div>
          <div className="flex space-x-2 absolute right-0">
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

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">All Students</TabsTrigger>
              <TabsTrigger value="top10">Top 10</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {view === "grid" && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {filteredStudents.map((student, index) => (
                    <LeaderboardCard
                      key={student.id}
                      student={student}
                      index={index}
                    />
                  ))}
                </motion.div>
              )}
              {view === "list" && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-5"
                >
                  {filteredStudents.map((student, index) => (
                    <LeaderboardCard
                      key={student.id}
                      student={student}
                      index={index}
                    />
                  ))}
                </motion.div>
              )}
            </TabsContent>

            <TabsContent value="top10">
              <div className="text-center text-muted-foreground py-8">
                Top 10 view coming soon...
              </div>
            </TabsContent>

            <TabsContent value="trending">
              <div className="text-center text-muted-foreground py-8">
                Trending view coming soon...
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
