import { useEffect, useRef } from "react";
import { useMessages } from "../../hooks/useMessages";
import { Chat } from "../../types/types";
import ChatMessage from "./ChatMessage";

export default function ChatBody() {
  const { data: messages } = useMessages(0);
  console.log(messages?.from);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <main className="max-w-6xl mx-auto py-8 flex flex-col space-y-5 pb-20 px-4 md:px-0">
      {messages &&
        messages.chats?.map((chat: Chat) => (
          <ChatMessage chat={chat} key={chat.id} />
        ))}
      <div ref={chatEndRef} />
    </main>
  );
}
