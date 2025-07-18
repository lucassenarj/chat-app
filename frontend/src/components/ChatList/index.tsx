function ChatList() {
  return (
    <div id="accordion-collapse" data-accordion="collapsed" className="w-full max-w-sm border border-gray-200 rounded-lg dark:border-gray-700">
      <h2 id="accordion-collapse-heading-1">
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
          <span>My chats</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
        <div className="w-full max-w-sm p-4 shadow-sm sm:p-6 dark:bg-gray-800">
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Select your chats or create a new one</p>
          <ul className="my-4 space-y-3">
            <li>
              <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
