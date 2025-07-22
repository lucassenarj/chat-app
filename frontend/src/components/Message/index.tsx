import type { IMessage } from "@/types/message";
import useAuthentication from "@/hooks/useAuthentication";

function Message({ message, sender, timestamp }: IMessage) {
  const { user } = useAuthentication();
  const date = new Date(timestamp).toLocaleTimeString();
  if (sender === 'bot') {
    return (
      <div className="flex items-start gap-2.5">
        <img className="w-8 h-8 rounded-full" src="/bot-avatar.png" alt="Bot avatar" />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{sender}</span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{date}</span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{message}</p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2.5 justify-end">
      <div className="flex flex-col items-end w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-t-xl rounded-es-xl dark:bg-gray-500">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{sender}</span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{date}</span>
          </div>
          <p className="text-sm text-right font-normal py-2.5 text-gray-900 dark:text-white">{message}</p>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
      </div>
      <img className="w-8 h-8 rounded-full" src={user.avatar} alt={`${user.name} picture`} />
    </div>
    
  )
}

export default Message;
