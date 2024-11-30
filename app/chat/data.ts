// Fake data for the chat application
export const users = [
  {
    id: 1,
    name: "Alex Morgan",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "online",
    lastSeen: new Date(),
    typing: false,
  },
  {
    id: 2,
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "offline",
    lastSeen: new Date(Date.now() - 1000 * 60 * 15),
    typing: false,
  },
  {
    id: 3,
    name: "Michael Park",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "online",
    lastSeen: new Date(),
    typing: false,
  },
  {
    id: 4,
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "offline",
    lastSeen: new Date(Date.now() - 1000 * 60 * 60),
    typing: false,
  },
];

export const initialMessages = [
  {
    id: 1,
    userId: 1,
    content: "Hey! How's the new project coming along? 🚀",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    reactions: ["👍", "🎉"],
  },
  {
    id: 2,
    userId: 2,
    content: "Making great progress! Just finished the main features.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5),
    reactions: ["🎯", "👍", "🎉"],
  },
  {
    id: 5,
    userId: 3,
    content: "Making great progress! Just finished the main features.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5),
    reactions: ["🎯", "👍", "🎉"],
  },
  {
    id: 3,
    userId: 1,
    content: "That's awesome! Can't wait to see it.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1),
    reactions: [],
  },
  {
    id: 4,
    userId: 3,
    content: "The design looks incredible! 🎨",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    reactions: ["❤️"],
  },
];
