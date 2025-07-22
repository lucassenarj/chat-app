import type { UseQueryResult } from "@tanstack/react-query";

export type IMessage = {
  _id: string;
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  type: 'bot' | 'other';
}

export type IUseGetChatMessages = UseQueryResult<Array<IMessage>, Error>;