import { twMerge } from "tailwind-merge";
import { Chat } from "../../types/types";

interface ChatMessageProps {
  chat: Chat;
}

export default function ChatMessage({ chat }: ChatMessageProps) {
  return (
    <div
      className={twMerge(
        "flex max-w-xs md:max-w-xl",
        chat.sender.self ? "items-end ml-auto" : "items-start space-x-2"
      )}
    >
      <img
        src={chat?.sender.image}
        alt="pfp"
        className={
          chat.sender.self
            ? "hidden"
            : "size-8 md:size-10 object-cover rounded-full"
        }
        loading="lazy"
      />
      <div
        className={twMerge(
          "shadow-md p-4 ",
          chat.sender.self
            ? "rounded-bl-lg bg-[#1C63D5] rounded-t-lg text-white"
            : "bg-white rounded-tr-lg rounded-b-lg"
        )}
      >
        <p>{chat?.message}</p>
      </div>
    </div>
  );
}
