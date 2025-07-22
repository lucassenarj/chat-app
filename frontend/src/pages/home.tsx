import { Suspense, useState } from "react";
import { createRoute } from "@tanstack/react-router"
import { createPortal } from "react-dom";
import type { RootRoute } from "@tanstack/react-router"
import type { IChat } from "@/types/chat";
import Chat from "@/components/Chat";
import ChatList from "@/components/ChatList";
import Layout from "@/components/Layout";
import useGetChats from "@/services/api/getChats";
import useAuthentication from "@/hooks/useAuthentication";
import NewChatModal from "@/components/NewChatModal";
import NewChatButton from "@/components/NewChatButton";


function HomePage() {
  const { isAuthenticated } = useAuthentication();

  if (!isAuthenticated) {
    window.location.href = '/';
    return null;
  }

  const { data: chats } = useGetChats();
  const [selectedChat, setSelectedChat] = useState<IChat | null>(null);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Layout>
      {
        openModal && createPortal(
          <NewChatModal isOpen={openModal} closeModal={() => setOpenModal(false)} selectChat={setSelectedChat} />,
          document.body
        )
      }
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
      <NewChatButton openModal={() => setOpenModal(true)} />
    </Layout>
  );
}

export default (parentRoute: RootRoute) =>
  createRoute({
    path: '/chat',
    component: HomePage,
    getParentRoute: () => parentRoute,
  })