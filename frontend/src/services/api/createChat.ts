import { useMutation } from "@tanstack/react-query";
import useAuthentication from "@/hooks/useAuthentication";

function useCreateChat() {
  const { user } = useAuthentication();
  const API_PATH = import.meta.env.VITE_API_PATH;

  if (!user.key) {
    throw new Error('User is not authenticated');
  }

  const newChat = async (form: { title: string }) => {
    const response = await fetch(`${API_PATH}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User': user.key!
      },
      body: JSON.stringify(form),
    });
    
  
    if (!response.ok) {
      throw new Error('Error while entering the chat');
    }

    const data = await response.json();

    return data.chat as { _id: string; id: string; title: string };
  }

  return useMutation({
    mutationKey: ['new-chat'],
    mutationFn: newChat,
  });
};

export default useCreateChat;
