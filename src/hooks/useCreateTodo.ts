import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../services/createTodo';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
