import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../services/getTodos';

export const useFetchTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });
};
