import { Button } from "@/components/ui/button";
// import { auth } from "@/lib/auth";
import { ArrowRight, BookOpen, Users, Award, Laptop } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  // const session = await auth();
  const session = {
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://example.com/john-doe.jpg",
    },
    expires: new Date(Date.now() + 3600 * 1000).toISOString(), // 1 hour expiration
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-8 bg-gradient-to-b from-background to-muted/20 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Learn. Grow.{" "}
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Excel.
          </span>
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Experience personalized learning paths, interactive content, and
          real-time collaboration on our modern learning platform.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row pb-48">
          {!session ? (
            <Button asChild size="lg">
              <Link href="/dashboard">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <>
              <Button asChild size="lg">
                <Link href="/auth/signin">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/courses">Browse Courses</Link>
              </Button>
            </>
          )}
        </div>
        {/* Features Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 absolute bottom-10 px-10">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center">
            <div className="rounded-full border p-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Expert-Led Courses</h3>
            <p className="text-muted-foreground">
              Learn from industry professionals and experienced instructors
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center">
            <div className="rounded-full border p-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Active Community</h3>
            <p className="text-muted-foreground">
              Connect with peers and join study groups for better learning
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center">
            <div className="rounded-full border p-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Certifications</h3>
            <p className="text-muted-foreground">
              Earn recognized certificates upon course completion
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center">
            <div className="rounded-full border p-4">
              <Laptop className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Interactive Learning</h3>
            <p className="text-muted-foreground">
              Engage with hands-on projects and real-world applications
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
