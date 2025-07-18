import ChatInput from "../ChatInput";
import Message from "../Message";

function Chat() {
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-600 dark:border-gray-700">
      <h2 className="text-xl font-bold dark:text-white">My chasdoa</h2>
      <div className="my-4 space-y-3 w-full max-h-160 flex-grow overflow-y-auto">
        <Message type="own" />
        <Message type="other" />
        <Message type="own" />
        <Message type="other" />
        <Message type="own" />
        <Message type="other" />
        <Message type="own" />
        <Message type="other" />
        <Message type="other" />
        <Message type="other" />
      </div>
      <ChatInput />
    </div>
  );
}

export default Chat;

