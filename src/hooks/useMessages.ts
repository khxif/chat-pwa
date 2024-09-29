import { useQuery } from "react-query";
import { getAllMessages } from "../lib/fetchers";

export const useMessages = (page: number) => {
  return useQuery(["messages", page], () => getAllMessages(page));
};
