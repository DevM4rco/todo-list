import { api } from '../lib/axios';

export const createTodo = async (title: string) => {
  const { data } = await api.post('/todos', {
    title,
    completed: false,
  });

  return data;
};
