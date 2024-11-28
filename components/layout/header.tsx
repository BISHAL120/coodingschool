"use client";

import Link from "next/link";
import { UserNav } from "./user-nav";
import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import { GraduationCap } from "lucide-react";

type User = {
  name: string;
  email: string;
  image: string;
};

type Session = {
  user: User;
  expires: string;
};

export function Header({ session }: { session: Session }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6" />
          <span className="font-bold">Modern LMS</span>
        </Link>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          {session ? (
            <UserNav />
          ) : (
            <Link
              href="/auth/signin"
              className="text-sm font-medium hover:text-primary"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
