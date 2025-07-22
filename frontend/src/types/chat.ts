import type { UseQueryResult } from "@tanstack/react-query";

export type IChat = {
  _id: string;
  id: string;
  title: string;
}

export type IUseGetChats = UseQueryResult<Array<IChat>, Error>;