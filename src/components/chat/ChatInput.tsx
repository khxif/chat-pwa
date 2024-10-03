import {
  Camera,
  FileInput,
  Paperclip,
  SendHorizontal,
  Video,
} from "lucide-react";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

export default function ChatInput() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState("");
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");
  };

  useClickAway(ref, () => {
    setIsLinksOpen(false);
  });
  return (
    <footer ref={ref} className="sticky bottom-20 w-full">
      <form
        onSubmit={handleSubmit}
        className="mx-auto py-2 px-4 bg-white rounded-lg flex items-center justify-between"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Reply to @Rohit"
          className="py-2 md:px-4 w-full focus-within:outline-none"
        />

        <div className="flex relative items-center space-x-4 md:space-x-6">
          <div className="">
            {isLinksOpen && (
              <div
                className="links-box p-6 rounded-full absolute right-[.5px] md:right-2
              -top-20 z-50 flex items-center space-x-4 text-white "
              >
                <button type="button">
                  <Camera className="size-5" />
                </button>
                <button type="button">
                  <Video className="size-5" />
                </button>
                <button type="button">
                  <FileInput className="size-5" />
                </button>
              </div>
            )}
            <button type="button" onClick={() => setIsLinksOpen(!isLinksOpen)}>
              <Paperclip className="size-6" />
            </button>
          </div>
          <button className="" type="submit">
            <SendHorizontal className="size-6" />
          </button>
        </div>
      </form>
    </footer>
  );
}
