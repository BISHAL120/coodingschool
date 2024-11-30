"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { users } from "../data";

interface ChatListProps {
  onSelectUser: (userId: number) => void;
  selectedUserId: number;
}

export function ChatList({ onSelectUser, selectedUserId }: ChatListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-full w-[320px] flex-col border-r border-l">
      <div className="flex h-[60px] items-center justify-between border-b px-4">
        <span className="text-lg font-semibold">Messages</span>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MessageCircle className="h-5 w-5" />
        </Button>
      </div>
      <div className="py-4 px-2">
        <Input
          placeholder="Search messages..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-background"
        />
      </div>
      <div className="flex-1 overflow-auto">
        {filteredUsers.map((user) => (
          <button
            key={user.id}
            className={`flex w-full items-center gap-4 p-4 transition-colors hover:bg-zinc-400 dark:hover:bg-zinc-600 group ${
              selectedUserId === user.id
                ? " bg-zinc-400 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-600"
                : ""
            }`}
            onClick={() => onSelectUser(user.id)}
          >
            <div className="relative">
              <Avatar className=" dark:ring-white ring-black ring-[2px]">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>

              {user.status === "online" && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-blue-500" />
              )}
            </div>
            <div className="flex-1 text-left">
              <div className="font-medium">{user.name}</div>
              <div className="text-sm dark:text-zinc-500 text-black/80 dark:text-white/50 group-hover:text-black/70 dark:group-hover:text-white/50 ">
                {user.typing ? "Typing..." : "Click to view chat"}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
