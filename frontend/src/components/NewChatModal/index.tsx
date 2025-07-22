import {  useForm } from "react-hook-form";
import type {SubmitHandler} from "react-hook-form";
import useCreateChat from "@/services/api/createChat";
import useGetChats from "@/services/api/getChats";

type NewChatModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

type NewChatModalFormData = {
  title: string;
};

function NewChatModal({ isOpen, closeModal }: NewChatModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<NewChatModalFormData>();
  const { refetch } = useGetChats();
  const { mutate: createChat } = useCreateChat();

  const onSubmit: SubmitHandler<NewChatModalFormData> = (data) => {
    createChat(data, {
      onSuccess: () => {
        refetch();
        closeModal();
        /* TODO: Show toast notification */
      },
      onError: (error) => {
        console.error('Create new chat error:', error);
        /* TODO: Show toast notification */
      }
    })
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className={`flex items-center justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0 ${isOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Chat
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => closeModal()}>
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <form className="p-4 md:p-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title for your new chat</label>
                      <input
                        type="text"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Title for your new chat"
                        required
                        {...register("title", { required: "Title is required" })}
                      />
                    </div>
                  </div>
                  <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    New chat
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChatModal;
