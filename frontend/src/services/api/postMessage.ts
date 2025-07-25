import { useMutation } from "@tanstack/react-query";
import useAuthentication from "@/hooks/useAuthentication";

function usePostMessage({ id }: { id: string }) {
  const { user } = useAuthentication();
  const API_PATH = import.meta.env.VITE_API_PATH;

  if (!user.key) {
    throw new Error('User is not authenticated');
  }

  const postMessage = async (form: { message: string }) => {
    const response = await fetch(`${API_PATH}/chat/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User': user.key!
      },
      body: JSON.stringify(form),
    });
    
  
    if (!response.ok) {
      throw new Error('Error while post a message on chat');
    }

    const data = await response.json();

    return data;
  }

  return useMutation({
    mutationKey: ['post-message'],
    mutationFn: postMessage,
  });
};

export default usePostMessage;
