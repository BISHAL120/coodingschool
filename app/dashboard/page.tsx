import { redirect } from "next/navigation";
import { BookOpen, Trophy, Calendar, Clock, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default async function DashboardPage() {
  // const session = await auth();
  const session = {
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://example.com/john-doe.jpg",
    },
    expires: new Date(Date.now() + 3600 * 1000).toISOString(), // 1 hour expiration
  };

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div className="container space-y-8 py-8 mx-auto h-[200vh]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, {session.user.name}
          </h1>
          <p className="text-muted-foreground">
            Track your progress and continue learning
          </p>
        </div>
        <Button asChild>
          <Link href="/courses">Browse More Courses</Link>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="flex items-center gap-4 rounded-lg border p-4">
          <BookOpen className="h-6 w-6 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Active Courses</p>
            <p className="text-2xl font-bold">4</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg border p-4">
          <Trophy className="h-6 w-6 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Certificates</p>
            <p className="text-2xl font-bold">6</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg border p-4">
          <Clock className="h-6 w-6 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Hours Learned</p>
            <p className="text-2xl font-bold">48</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg border p-4">
          <BarChart className="h-6 w-6 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Current Streak</p>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
      </div>

      {/* Current Courses */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Current Courses</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Advanced Web Development</h3>
              <span className="text-sm text-muted-foreground">
                75% Complete
              </span>
            </div>
            <Progress value={75} className="mb-4" />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Next: React Advanced Patterns</span>
              <span>2h remaining</span>
            </div>
          </div>
          <div className="rounded-lg border p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Data Science Fundamentals</h3>
              <span className="text-sm text-muted-foreground">
                40% Complete
              </span>
            </div>
            <Progress value={40} className="mb-4" />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Next: Statistical Analysis</span>
              <span>4h remaining</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Upcoming Events</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Live Coding Session</p>
                <p className="text-sm text-muted-foreground">
                  Building a Real-time Chat App
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Tomorrow, 2:00 PM</p>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Group Project Meeting</p>
                <p className="text-sm text-muted-foreground">
                  Team Collaboration Session
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Friday, 11:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
