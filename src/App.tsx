import ChatBody from "./components/chat/ChatBody";
import ChatInput from "./components/chat/ChatInput";
import Header from "./components/chat/Header";
import NotificationBar from "./components/NotificationBar";

export default function App() {
  return (
    <main className="w-full flex items-center justify-center py-4 h-screen bg-black">
      <div className="max-w-md w-full mx-auto bg-[#E5E5E0] p-4 rounded-3xl">
        <NotificationBar />
        <Header />
        <ChatBody />
        <ChatInput />
        <div className="bg-black rounded-3xl w-40 h-1.5 mx-auto"/>
      </div>
    </main>
  );
}
