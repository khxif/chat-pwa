import { useQuery } from "react-query";
import { getAllMessages } from "../lib/fetchers";
import { useEffect, useState } from "react";
import { Chat } from "../types/types";

export const useMessages = (page: number) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const { data: messages, isLoading } = useQuery(["messages", page], () =>
    getAllMessages(page)
  );

  useEffect(() => {
    if (messages) setChats((prev) => [...prev, ...messages.chats]);
  }, [messages]);

  return { chats, isLoading };
};
