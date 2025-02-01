import { api } from '../lib/axios';
import { TodoTypes } from '../types/Todo';

export const updateTodo = async (todo: TodoTypes): Promise<TodoTypes> => {
  const { data } = await api.put(`/todos/${todo.id}`, todo);

  return data;
};
