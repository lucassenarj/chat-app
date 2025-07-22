import { useMutation } from "@tanstack/react-query";
import useAuthentication from "@/hooks/useAuthentication";

function useCreateChat() {
  const { user } = useAuthentication();

  if (!user.key) {
    throw new Error('User is not authenticated');
  }

  const newChat = async (form: { title: string }) => {
    const response = await fetch('http://localhost:3001/api/chat', {
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

    return data;
  }

  return useMutation({
    mutationKey: ['new-chat'],
    mutationFn: newChat,
  });
};

export default useCreateChat;
