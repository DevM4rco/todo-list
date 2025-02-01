import { api } from '../lib/axios';

export const deleteTodo = async (id: string) => {
  await api.delete(`/todos/${id}`);
};
