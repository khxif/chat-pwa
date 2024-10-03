import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useMessages } from "../../hooks/useMessages";
import { Chat } from "../../types/types";
import ChatMessage from "./ChatMessage";

export default function ChatBody() {
  const [page, setPage] = useState(0);
  const { chats } = useMessages(page);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const MAX_DATA = 300;

  const handleScroll = () => {
    if (document.documentElement.scrollTop === 0) {
      setPage((prev) => prev + 1);
      document.documentElement.scrollTop = 1;
    }
  };

  const scrollToBottom = () => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView();
  };

  useEffect(() => {
    if (chats.length > 0 && page === 0) scrollToBottom();
  }, [chats]);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (chatContainer) {
        chatContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <main
      ref={chatContainerRef}
      className="max-w-6xl mx-auto py-8 flex flex-col space-y-5 pb-32  overflow-y-scroll scrollbar-hide
     md:px-0 h-[28rem]"
    >
      <InfiniteScroll
        dataLength={chats.length}
        inverse={true}
        className="flex flex-col-reverse gap-y-5"
        next={() => setPage((prev) => prev + 1)}
        hasMore={chats?.length < MAX_DATA ? true : false}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {chats &&
          chats?.map((chat: Chat) => <ChatMessage chat={chat} key={chat.id} />)}
      </InfiniteScroll>
      <div ref={chatEndRef} />
    </main>
  );
}
