import {
  Camera,
  FileInput,
  Paperclip,
  SendHorizontal,
  Video,
} from "lucide-react";
import { useState } from "react";

export default function ChatInput() {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  return (
    <footer className="px-4 sticky bottom-5 w-full">
      <form className="max-w-6xl mx-auto py-2 px-4 bg-white rounded-lg flex items-center justify-between">
        <input
          type="text"
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
          <button className="">
            <SendHorizontal className="size-6" />
          </button>
        </div>
      </form>
    </footer>
  );
}
