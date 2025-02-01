import { api } from '../lib/axios';
import { TodoTypes } from '../types/Todo';

export const getTodos = async () => {
  const { data } = await api.get<TodoTypes[]>('/todos');

  return data;
};
