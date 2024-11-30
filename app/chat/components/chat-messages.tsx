"use client";

import { useEffect, useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { MoreVertical, ReplyAllIcon, Send, Smile, Trash2 } from "lucide-react";
import { initialMessages, users } from "../data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Separator } from "@/components/ui/separator";

interface Message {
  id: number;
  userId: number;
  content: string;
  timestamp: Date;
  reactions: string[];
}

interface ChatMessagesProps {
  selectedUserId: number;
}

export function ChatMessages({ selectedUserId }: ChatMessagesProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [emoji, setEmoji] = useState("");

  const selectedUser = users.find((user) => user.id === selectedUserId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg: Message = {
      id: messages.length + 1,
      userId: 0, // Current user
      content: newMessage,
      timestamp: new Date(),
      reactions: [],
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");

    // Simulate user typing response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const response: Message = {
        id: messages.length + 2,
        userId: selectedUserId,
        content: "Thanks for your message! I'll get back to you soon.",
        timestamp: new Date(),
        reactions: [],
      };
      setMessages((prev) => [...prev, response]);
    }, 2000);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  return (
    <div className="flex h-full flex-1 flex-col">
      <div className="flex h-[60px] items-center justify-between border-b px-6">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={selectedUser?.avatar} alt={selectedUser?.name} />
            <AvatarFallback>{selectedUser?.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{selectedUser?.name}</div>
            <div className="text-sm text-zinc-500">
              {selectedUser?.status === "online" ? "Online" : "Offline"}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-6">
        <div className="">
          {messages.map((message) => {
            const isCurrentUser = message.userId === 0;
            const user = users.find((u) => u.id === message.userId);

            return (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  isCurrentUser ? "flex-row-reverse" : ""
                } ${message.reactions.length > 0 ? "mb-10" : "mb-5"} `}
              >
                <Avatar>
                  <AvatarImage
                    src={
                      isCurrentUser
                        ? "/placeholder.svg?height=32&width=32"
                        : user?.avatar
                    }
                    alt={isCurrentUser ? "You" : user?.name}
                  />
                  <AvatarFallback>
                    {isCurrentUser ? "Y" : user?.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`group relative rounded-lg px-4 py-2 ${
                    isCurrentUser
                      ? "bg-blue-500 text-white"
                      : "bg-zinc-100 text-zinc-900"
                  }`}
                >
                  <p>{message.content}</p>
                  <div
                    className={`absolute bottom-0 text-xs text-zinc-500 min-w-20 pt-1 ${
                      isCurrentUser
                        ? "right-0 translate-y-full text-right"
                        : "left-0 translate-y-full"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </div>
                  {message.reactions.length > 0 && (
                    <div className="absolute bottom-0 right-0 flex translate-y-full gap-1 pt-1 z-10">
                      {message.reactions.map((reaction, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-slate-200 px-2 py-1 text-sm shadow-sm"
                        >
                          {reaction}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="cursor-pointer">
                  <Popover>
                    <PopoverTrigger className=" border p-2 rounded-xl">
                      <MoreVertical size={16} />
                    </PopoverTrigger>
                    <PopoverContent className="w-auto py-2 px-4">
                      <div className="flex items-center gap-4">
                        <Popover>
                          <PopoverTrigger className="p-0 border-none">
                            <Smile className="cursor-pointer" size={20} />
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Picker
                              data={data}
                              onEmojiSelect={(emoji: { native: string }) => {
                                setEmoji(emoji.native);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                        <Separator className="h-5" orientation="vertical" />
                        {emoji && <span>{emoji}</span>}
                        <PopoverClose>
                          <Trash2 size={20} />
                        </PopoverClose>{" "}
                        <Separator className="h-5" orientation="vertical" />
                        <PopoverClose>
                          <ReplyAllIcon size={20} />
                        </PopoverClose>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            );
          })}
          {isTyping && (
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <div className="flex space-x-1">
                <span className="animate-bounce">•</span>
                <span className="animate-bounce delay-100">•</span>
                <span className="animate-bounce delay-200">•</span>
              </div>
              {selectedUser?.name} is typing...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="border-t p-4">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="button" variant="ghost" size="icon">
            <Smile className="h-5 w-5" />
          </Button>
          <Button type="submit">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
