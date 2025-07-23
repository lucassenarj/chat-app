import { useQuery } from '@tanstack/react-query';
import type { IChat, IUseGetChats } from '@/types/chat';
import type { QueryKey } from '@tanstack/react-query';

const useGetChats = (
  queryKey?: QueryKey,
): IUseGetChats => {
  const userKey = localStorage.getItem('userKey');
  const API_PATH = import.meta.env.VITE_API_PATH;;

  if (!userKey) {
    throw new Error('Unauthorized user');
  }
  const getChats = async (): Promise<Array<IChat>> => {
    const response = await fetch(`${API_PATH}/chat`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User': userKey
        // Add any other headers you need, like authentication tokens
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.chats as Array<IChat>;
  };

  return useQuery({
    queryKey: ['get-chats', ...(queryKey || [])],
    queryFn: getChats
  });
};

export default useGetChats;
