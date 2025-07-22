import { useQuery } from '@tanstack/react-query';
import type { QueryKey } from '@tanstack/react-query';
import type { IMessage, IUseGetChatMessages } from '@/types/message';

const useGetChatMessages = (
  params: { id: string },
  queryKey?: QueryKey,
): IUseGetChatMessages => {
  const { id } = params;
  const getChatMessages = async (): Promise<Array<IMessage>> => {
    const response = await fetch(`http://localhost:3001/api/chat/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User': '6876bd02d38a05d13b8b3197'
        // Add any other headers you need, like authentication tokens
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.messages;
  };

  return useQuery({
    queryKey: [`get-chat-messages-${id}`, ...(queryKey || [])],
    queryFn: getChatMessages
  });
};

export default useGetChatMessages;
