import { Suspense } from "react";
import ChatInput from "../ChatInput";
import Message from "../Message";
import type { IChat } from "@/types/chat";
import useGetChatMessages from "@/services/api/getChatMessages";

type ChatProps = {
  chat: IChat;
};

function Chat({ chat }: ChatProps) {
  const { data: messages } = useGetChatMessages({ id: chat._id });

  return (
    <Suspense fallback={<div>Loading chat...</div>}>
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-600 dark:border-gray-700">
        <h2 className="text-xl font-bold dark:text-white">{ chat.title }</h2>
        <div className="my-4 space-y-3 w-full max-h-160 flex-grow overflow-y-auto">
          {
            messages?.map(message => (
              <Message key={message.id} {...message} />
            ))
          }
        </div>
        <ChatInput />
      </div>
    </Suspense>
  );
}

export default Chat;

