"use client";

import { useState } from "react";
import { ChatList } from "./components/chat-list";
import { ChatMessages } from "./components/chat-messages";

export default function ChatApp() {
  // remove the use client and make it a server component
  const [selectedUserId, setSelectedUserId] = useState(1);

  return (
    <div className="flex h-[calc(100vh-65px)]  bg-background container mx-auto">
      <ChatList
        onSelectUser={setSelectedUserId}
        selectedUserId={selectedUserId}
      />
      <ChatMessages selectedUserId={selectedUserId} />
    </div>
  );
}
