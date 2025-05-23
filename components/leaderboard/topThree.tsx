import { motion } from "framer-motion";
import { ArrowBigUpDash } from "lucide-react";
import Image from "next/image";

const students = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&q=99",
    points: 9850,
    completionRate: 95,
    streak: 28,
    badges: ["Advanced", "Top Contributor", "Early Bird"],
    recentActivity: "Completed Advanced React Module",
    level: 42,
    rank: 1,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&q=99",
    points: 9600,
    completionRate: 92,
    streak: 45,
    badges: ["Mentor", "Problem Solver"],
    recentActivity: "Helped 5 students this week",
    level: 39,
    rank: 2,
  },
  {
    id: 3,
    name: "Emily Williams",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&q=99",
    points: 9400,
    completionRate: 88,
    streak: 19,
    badges: ["Fast Learner", "Team Player"],
    recentActivity: "Completed 3 projects",
    level: 37,
    rank: 3,
  },
  {
    id: 4,
    name: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&q=99",
    points: 8900,
    completionRate: 85,
    streak: 15,
    badges: ["Creative Thinker"],
    recentActivity: "Started Node.js Course",
    level: 35,
    rank: 4,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop&q=99",
    points: 8600,
    completionRate: 82,
    streak: 12,
    badges: ["Quick Learner"],
    recentActivity: "Completed TypeScript Basics",
    level: 33,
    rank: 5,
  },
] as const;

const getFirst = students.find((student) => student.rank == 1);
const getSecond = students.find((student) => student.rank == 2);
const getThird = students.find((student) => student.rank == 3);

const TopThree = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="container mx-auto py-20"
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2 -mr-8 -mb-32">
          <div className="flex flex-col justify-center items-center">
            Rank: {getSecond?.rank}
            <ArrowBigUpDash className="w-6 h-6" />
          </div>
          <Image
            src={getSecond?.avatar || ""}
            alt="student avatar"
            width={200}
            height={200}
            className={`rounded-full ring w-[220px] h-[220px] ring-black/70 dark:ring-gray-400`}
          />
          <div className="py-3">
            <div className="flex flex-col items-center text-center animate-fade-in">
              <h3 className="font-bold font-mono text-3xl bg-gradient-to-r dark:from-white/60 from-black/90 to-blue-500 dark:to-blue-900 text-transparent bg-clip-text">
                {getSecond?.name.split(" ")[0]}
              </h3>
              <div className="mt-2 text-sm text-gray-500">
                <span>Points: {getSecond?.points.toLocaleString()}</span>
                <span className="mx-2">|</span>
                <span>Completion: {getSecond?.completionRate}%</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                <span>Level: {getSecond?.level}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <svg
            className="absolute -top-20 text-black dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 128 128"
          >
            <g fill="#f79329">
              <path d="m91.56 50.38l14.35 44.94l-36.36-4.71z" />
              <path d="M105.91 96.5c-.05 0-.1 0-.15-.01l-36.37-4.71c-.39-.05-.72-.29-.9-.64s-.17-.76.01-1.1l22.02-40.23c.23-.41.69-.65 1.15-.61c.47.04.87.36 1.01.81l14.24 44.62c.14.19.22.43.22.68c0 .65-.53 1.18-1.18 1.18c0 .01-.03.01-.05.01M71.4 89.66l32.82 4.25l-12.94-40.55zM40.19 34.91a5.46 5.46 0 0 1-5.46 5.46c-3.01 0-5.46-2.45-5.46-5.46c0-3.02 2.44-5.46 5.46-5.46s5.46 2.44 5.46 5.46" />
              <path d="M34.73 41.54a6.65 6.65 0 0 1-6.64-6.64a6.65 6.65 0 0 1 6.64-6.64a6.65 6.65 0 0 1 6.64 6.64a6.65 6.65 0 0 1-6.64 6.64m0-10.91c-2.36 0-4.28 1.92-4.28 4.28s1.92 4.28 4.28 4.28s4.29-1.92 4.29-4.28s-1.93-4.28-4.29-4.28m58.85-1.18c3.01.18 5.31 2.77 5.13 5.78c-.17 3.01-2.77 5.3-5.77 5.13a5.45 5.45 0 0 1-5.13-5.77c.18-3.02 2.76-5.32 5.77-5.14" />
              <path d="m93.26 41.54l-.39-.01c-1.77-.1-3.4-.89-4.57-2.21a6.62 6.62 0 0 1-1.67-4.8a6.647 6.647 0 0 1 6.63-6.25l.39.01c3.66.22 6.46 3.38 6.24 7.03a6.64 6.64 0 0 1-6.63 6.23m.23-10.92c-2.5 0-4.37 1.77-4.5 4.03c-.07 1.14.31 2.24 1.07 3.1s1.8 1.36 2.95 1.43l.25.01c2.26 0 4.14-1.77 4.27-4.03c.14-2.36-1.67-4.39-4.03-4.54zM36.43 50.38L22.09 95.32l36.36-4.71z" />
              <path d="M22.09 96.5c-.34 0-.68-.15-.91-.42c-.26-.31-.34-.73-.22-1.11L35.3 50.03c.14-.45.54-.77 1.01-.81c.51-.05.92.19 1.15.61l22.02 40.23c.18.34.19.75.01 1.1c-.17.35-.51.58-.9.64l-36.36 4.71c-.04-.01-.09-.01-.14-.01m14.63-43.14L23.77 93.92l32.82-4.25z" />
            </g>
            <use href="#notoV1Crown1" />
            <use href="#notoV1Crown1" />
            <defs>
              <path
                id="notoV1Crown0"
                d="M119.5 53.43a1.18 1.18 0 0 0-1.29.22L87.25 82.71L65.16 49.72c-.22-.33-.58-.52-.98-.52c-.39 0-.76.19-.98.51l-22.19 33l-30.95-29.07a1.18 1.18 0 0 0-1.29-.22c-.43.19-.71.63-.69 1.1l1.27 47.52c0 10.33 24.06 18.43 54.78 18.43s54.78-8.1 54.78-18.4l1.27-47.55c.02-.46-.25-.9-.68-1.09"
              />
              <path
                id="notoV1Crown1"
                fill="#fcc21b"
                d="M72.17 28.76c0 4.51-3.66 8.17-8.17 8.17s-8.18-3.66-8.18-8.17c0-4.52 3.66-8.17 8.18-8.17s8.17 3.65 8.17 8.17m-58.72 6.15c0 3.58-2.9 6.48-6.49 6.48c-3.58 0-6.48-2.9-6.48-6.48c0-3.59 2.9-6.49 6.48-6.49c3.59 0 6.49 2.9 6.49 6.49m101.09 0c0 3.58 2.9 6.48 6.49 6.48c3.58 0 6.49-2.9 6.49-6.48a6.49 6.49 0 0 0-6.49-6.49a6.49 6.49 0 0 0-6.49 6.49"
              />
            </defs>
            <use fill="#fcc21b" href="#notoV1Crown0" />
            <clipPath id="notoV1Crown2">
              <use href="#notoV1Crown0" />
            </clipPath>
            <path
              fill="#d7598b"
              d="m119.91 78.06l.01.01l-.59 18.85h-.01c-4.2-.13-7.46-4.45-7.3-9.66c.16-5.22 3.69-9.33 7.89-9.2m-111.54 0l-.01.01l.58 18.85h.02c4.19-.13 7.46-4.45 7.29-9.66c-.16-5.22-3.69-9.33-7.88-9.2"
              clip-path="url(#notoV1Crown2)"
            />
            <path
              fill="#d7598b"
              d="M72.8 96.55c0 5.58-3.88 10.11-8.67 10.11c-4.78 0-8.66-4.53-8.66-10.11c0-5.59 3.88-10.11 8.66-10.11c4.79-.01 8.67 4.52 8.67 10.11"
            />
            <g fill="#ed6c30">
              <path d="M89.9 102.14c-.13 2.7-2.12 4.79-4.44 4.68c-2.31-.11-4.08-2.4-3.94-5.09c.14-2.71 2.13-4.8 4.44-4.68c2.31.1 4.07 2.39 3.94 5.09" />
              <ellipse
                cx="103.04"
                cy="98.95"
                rx="4.89"
                ry="4.2"
                transform="rotate(-87.013 103.044 98.958)"
              />
            </g>
            <g fill="#ed6c30">
              <path d="M38.37 102.14c.13 2.7 2.12 4.79 4.44 4.68c2.31-.11 4.08-2.4 3.94-5.09c-.13-2.71-2.12-4.8-4.43-4.68c-2.32.1-4.09 2.39-3.95 5.09" />
              <ellipse
                cx="25.23"
                cy="98.95"
                rx="4.19"
                ry="4.89"
                transform="rotate(-2.987 25.234 98.957)"
              />
            </g>
          </svg>
          <Image
            src={getFirst?.avatar || ""}
            alt="student avatar"
            width={200}
            height={200}
            className={`rounded-full ring w-[300px] h-[300px] ring-black/70 dark:ring-gray-400`}
          />
          <div className="py-3">
            <div className="flex flex-col items-center text-center animate-fade-in">
              <h3 className="font-bold font-serif text-3xl bg-gradient-to-r dark:from-white/60 from-black/90 to-blue-500 dark:to-blue-900 text-transparent bg-clip-text">
                {getFirst?.name.split(" ")[0]}
              </h3>
              <div className="mt-2 text-sm text-gray-500">
                <span>Points: {getFirst?.points.toLocaleString()}</span>
                <span className="mx-2">|</span>
                <span>Completion: {getFirst?.completionRate}%</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                <span>Level: {getFirst?.level}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 -ml-8 -mb-32">
          <div className="flex flex-col justify-center items-center">
            Rank: {getThird?.rank}
            <ArrowBigUpDash className="w-6 h-6" />
          </div>
          <Image
            src={getThird?.avatar || ""}
            alt="student avatar"
            width={200}
            height={200}
            className={`rounded-full ring w-[220px] h-[220px] ring-black/70 dark:ring-gray-400`}
          />
          <div className="py-3">
            <div className="flex flex-col items-center text-center animate-fade-in">
              <h3 className="font-bold font-mono text-3xl bg-gradient-to-r dark:from-white/60 from-black/90 to-blue-500 dark:to-blue-900 text-transparent bg-clip-text">
                {getThird?.name.split(" ")[0]}
              </h3>
              <div className="mt-2 text-sm text-gray-500">
                <span>Points: {getThird?.points.toLocaleString()}</span>
                <span className="mx-2">|</span>
                <span>Completion: {getThird?.completionRate}%</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                <span>Level: {getThird?.level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopThree;
