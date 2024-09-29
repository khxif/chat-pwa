import { Chat } from "../../types/types";

interface ChatMessageProps {
  chat: Chat;
}

export default function ChatMessage({ chat }: ChatMessageProps) {
  return (
    <div className="flex items-start space-x-2 max-w-xs md:max-w-xl">
      <img
        src={chat?.sender.image}
        alt="pfp"
        className="size-8 md:size-10 object-cover rounded-full"
        loading="lazy"
      />
      <div className="bg-white shadow-md p-4 rounded-tr-lg rounded-b-lg">
        <p>{chat?.message}</p>
      </div>
    </div>
  );
}
