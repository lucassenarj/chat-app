import { Suspense, useState } from "react";
import type { IChat } from "@/types/chat";
import Chat from "@/components/Chat";
import ChatList from "@/components/ChatList";
import Layout from "@/components/Layout";
import useGetChats from "@/services/api/getChats";

function HomePage() {
  const { data: chats } = useGetChats();
  const [selectedChat, setSelectedChat] = useState<IChat | null>(null);
  return (
    <Layout>
      <Suspense fallback={<div>Loading chats...</div>}>
        <ChatList chats={chats} selectChat={setSelectedChat} />
      </Suspense>
      {
        selectedChat ? (
          <Chat chat={selectedChat} />
        ) : (
          <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-600 dark:border-gray-700 h-80 md:h-160 flex items-center justify-center">
            <h2 className="text-xl font-bold dark:text-white">Select a chat to start messaging</h2>
          </div>
        )
      }
    </Layout>
  );
}

export default HomePage;
