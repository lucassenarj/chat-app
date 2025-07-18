type IMessage = {
  id?: string;
  sender?: {
    name: string;
    avatar: string;
  };
  content?: string;
  timestamp?: string;
  status?: 'delivered' | 'read';
  type: 'own' | 'other';
};

function Message({ type }: IMessage) {
  if (type === 'other') {
    return (
      <div className="flex items-start gap-2.5">
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2.5 justify-end">
      <div className="flex flex-col items-end w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-t-xl rounded-es-xl dark:bg-gray-500">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
          </div>
          <p className="text-sm text-right font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
      </div>
      <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
    </div>
  )
}

export default Message;
